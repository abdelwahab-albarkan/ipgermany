#!/usr/bin/env node

/**
 * GermanyStreamTV.com — Production IndexNow Submission Protocol
 * 
 * Supports instant indexing submission to IndexNow-participating search engines (Bing, Yandex, Seznam, Naver).
 * Note: IndexNow is not a Google API. Use Google Search Console for Google indexing.
 * 
 * Usage:
 *   - Submit specific URLs:
 *     node scripts/index-now.js https://germanystreamtv.com/ https://germanystreamtv.com/iptv-vergleich
 * 
 *   - Submit P0 SEO Priority URLs:
 *     node scripts/index-now.js --p0
 * 
 *   - Submit P1 SEO URLs:
 *     node scripts/index-now.js --p1
 * 
 *   - Submit all URLs from sitemap:
 *     node scripts/index-now.js
 * 
 *   - Dry run / validation test (no network requests to search engines):
 *     node scripts/index-now.js --dry-run
 */

const fs = require('fs');
const path = require('path');

// CONFIGURATION
const HOST = 'germanystreamtv.com';
const SITE_URL = `https://${HOST}`;
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;
const PRIMARY_INDEXNOW_ENDPOINT = 'https://api.indexnow.org/IndexNow';
const BATCH_SIZE = 1000;

// GERMANYSTREAMTV SEO PRIORITY PRESETS
const P0_URLS = [
    `${SITE_URL}/`,
    `${SITE_URL}/iptv-vergleich`,
    `${SITE_URL}/blog/bestes-iptv-deutschland-2026`,
    `${SITE_URL}/blog/iptv-kaufen-leitfaden-2026`
];

const P1_URLS = [
    `${SITE_URL}/blog/iptv-legal-deutschland-2026`,
    `${SITE_URL}/blog/watch-champions-league-iptv`,
    `${SITE_URL}/blog/how-to-install-iptv-on-firestick`,
    `${SITE_URL}/iptv-android-tv`,
    `${SITE_URL}/iptv-apple-tv`,
    `${SITE_URL}/iptv-lg-tv`,
    `${SITE_URL}/iptv-samsung-tv`
];

/**
 * Loads environment variables from .env.local or .env if not already in process.env
 */
function loadEnv() {
    const envFiles = ['.env.local', '.env'];
    const projectRoot = path.resolve(__dirname, '..');

    for (const file of envFiles) {
        const fullPath = path.join(projectRoot, file);
        if (fs.existsSync(fullPath)) {
            try {
                const content = fs.readFileSync(fullPath, 'utf8');
                const lines = content.split('\n');
                for (const line of lines) {
                    const trimmed = line.trim();
                    if (!trimmed || trimmed.startsWith('#')) continue;
                    const eqIdx = trimmed.indexOf('=');
                    if (eqIdx > 0) {
                        const key = trimmed.substring(0, eqIdx).trim();
                        let val = trimmed.substring(eqIdx + 1).trim();
                        if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
                            val = val.slice(1, -1);
                        }
                        if (!process.env[key]) {
                            process.env[key] = val;
                        }
                    }
                }
            } catch (err) {
                console.warn(`⚠️ Could not parse ${file}: ${err.message}`);
            }
        }
    }
}

/**
 * Validates and retrieves the IndexNow key
 */
function getValidatedKey(isDryRun = false) {
    loadEnv();
    const key = process.env.INDEXNOW_KEY;

    if (!key || key.trim() === '' || key.trim() === 'your-indexnow-key') {
        if (isDryRun) {
            console.warn('⚠️ [DRY RUN] INDEXNOW_KEY is not set or using placeholder. Proceeding in validation-only mode.');
            return 'validation-key-placeholder';
        }
        console.error('\n❌ Fatal Error: INDEXNOW_KEY environment variable is missing or invalid.');
        console.error('👉 How to fix:');
        console.error('   1. Add your key to .env.local: INDEXNOW_KEY=your_actual_key');
        console.error('   2. Or set it in your environment: export INDEXNOW_KEY=your_actual_key');
        console.error('   3. Note: The key will never be printed in logs or committed to Git.\n');
        process.exit(1);
    }

    return key.trim();
}

/**
 * Ensures the public verification file exists in the Next.js public directory
 */
function ensurePublicKeyFile(key, isDryRun = false) {
    if (isDryRun || key === 'validation-key-placeholder') {
        return;
    }
    const projectRoot = path.resolve(__dirname, '..');
    const publicDir = path.join(projectRoot, 'public');
    const keyFilePath = path.join(publicDir, `${key}.txt`);

    try {
        if (!fs.existsSync(publicDir)) {
            fs.mkdirSync(publicDir, { recursive: true });
        }
        if (!fs.existsSync(keyFilePath)) {
            fs.writeFileSync(keyFilePath, key, 'utf8');
            console.log(`📁 Verification file created: public/${maskKey(key)}.txt`);
        }
    } catch (err) {
        console.warn(`⚠️ Warning: Could not write verification file in public directory: ${err.message}`);
    }
}

/**
 * Masks the API key for safe logging
 */
function maskKey(key) {
    if (!key) return 'none';
    if (key.length <= 6) return '******';
    return `${key.slice(0, 3)}...${key.slice(-3)} (${key.length} chars)`;
}

/**
 * Fetches and parses URLs from sitemap.xml
 */
async function getSitemapUrls() {
    console.log(`📡 Fetching sitemap from: ${SITEMAP_URL}`);
    try {
        const response = await fetch(SITEMAP_URL, {
            headers: {
                'User-Agent': 'GermanyStreamTV-IndexNow-Bot/1.0',
                'Accept': 'application/xml, text/xml, */*'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP status ${response.status} (${response.statusText})`);
        }

        const xmlText = await response.text();
        const locRegex = /<loc>(.*?)<\/loc>/gi;
        const urls = [];
        let match;

        while ((match = locRegex.exec(xmlText)) !== null) {
            const extractedUrl = match[1].trim();
            if (extractedUrl) {
                urls.push(extractedUrl);
            }
        }

        if (urls.length === 0) {
            throw new Error('Sitemap XML was parsed but contained no <loc> elements.');
        }

        return urls;
    } catch (error) {
        throw new Error(`Failed to fetch or parse sitemap: ${error.message}`);
    }
}

/**
 * Validates and deduplicates URLs
 */
function sanitizeAndFilterUrls(rawUrls) {
    const uniqueRaw = Array.from(new Set(rawUrls.map(u => u.trim())));
    const validUrls = [];
    const rejectedUrls = [];

    for (const urlStr of uniqueRaw) {
        try {
            const parsed = new URL(urlStr);
            if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
                rejectedUrls.push({ url: urlStr, reason: 'Invalid protocol (must be http/https)' });
                continue;
            }
            if (parsed.hostname !== HOST && parsed.hostname !== `www.${HOST}`) {
                rejectedUrls.push({ url: urlStr, reason: `Foreign domain (expected ${HOST})` });
                continue;
            }
            // Normalize to canonical domain
            validUrls.push(urlStr);
        } catch {
            rejectedUrls.push({ url: urlStr, reason: 'Malformed URL' });
        }
    }

    if (rejectedUrls.length > 0) {
        console.log(`⚠️ Skipped ${rejectedUrls.length} invalid/external URLs:`);
        for (const item of rejectedUrls.slice(0, 5)) {
            console.log(`   - ${item.url} (${item.reason})`);
        }
        if (rejectedUrls.length > 5) {
            console.log(`   ... and ${rejectedUrls.length - 5} more.`);
        }
    }

    return validUrls;
}

/**
 * Submits URL batches to IndexNow
 */
async function submitToIndexNow(urls, key, isDryRun = false) {
    const keyLocation = `${SITE_URL}/${key}.txt`;
    const totalBatches = Math.ceil(urls.length / BATCH_SIZE);

    console.log(`\n==================================================`);
    console.log(`🚀 IndexNow Submission Summary`);
    console.log(`==================================================`);
    console.log(`🌐 Target Host:        ${HOST}`);
    console.log(`🔑 Key Status:         Loaded [${maskKey(key)}]`);
    console.log(`📄 Key Verification:   ${keyLocation}`);
    console.log(`🎯 Valid Unique URLs:  ${urls.length}`);
    console.log(`📦 Batches:            ${totalBatches} (${BATCH_SIZE} URLs/batch)`);
    console.log(`📡 Primary Endpoint:   ${PRIMARY_INDEXNOW_ENDPOINT}`);
    console.log(`==================================================\n`);

    if (isDryRun) {
        console.log('🧪 DRY RUN MODE ENABLED: No network requests sent to search engines.');
        console.log('Sample URLs ready for submission:');
        for (const u of urls.slice(0, 5)) {
            console.log(`   ✓ ${u}`);
        }
        if (urls.length > 5) {
            console.log(`   ... and ${urls.length - 5} more.`);
        }
        console.log('\n✅ Dry run completed successfully! Everything is valid and ready.');
        return;
    }

    let successCount = 0;
    let failureCount = 0;

    for (let i = 0; i < urls.length; i += BATCH_SIZE) {
        const batchNumber = Math.floor(i / BATCH_SIZE) + 1;
        const batch = urls.slice(i, i + BATCH_SIZE);

        console.log(`⏳ Submitting batch ${batchNumber}/${totalBatches} (${batch.length} URLs)...`);

        const payload = {
            host: HOST,
            key: key,
            keyLocation: keyLocation,
            urlList: batch
        };

        try {
            const response = await fetch(PRIMARY_INDEXNOW_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'Host': 'api.indexnow.org',
                    'User-Agent': 'GermanyStreamTV-IndexNow-Client/1.0'
                },
                body: JSON.stringify(payload)
            });

            const status = response.status;
            let statusExplanation = '';

            switch (status) {
                case 200:
                    statusExplanation = 'OK — URLs submitted and processed successfully.';
                    break;
                case 202:
                    statusExplanation = 'Accepted — URLs received, IndexNow is processing.';
                    break;
                case 400:
                    statusExplanation = 'Bad Request — Invalid payload format.';
                    break;
                case 403:
                    statusExplanation = 'Forbidden — Key not valid or key verification file not accessible.';
                    break;
                case 422:
                    statusExplanation = 'Unprocessable Entity — URLs do not belong to the host or key mismatch.';
                    break;
                case 429:
                    statusExplanation = 'Too Many Requests — Potential rate limit.';
                    break;
                default:
                    statusExplanation = response.statusText || 'Unexpected response status';
            }

            if (status === 200 || status === 202) {
                console.log(`✅ Batch ${batchNumber} Success: HTTP ${status} (${statusExplanation})`);
                successCount += batch.length;
            } else {
                console.warn(`⚠️ Batch ${batchNumber} Notice: HTTP ${status} (${statusExplanation})`);
                const responseText = await response.text().catch(() => '');
                if (responseText) {
                    console.warn(`   Response detail: ${responseText.slice(0, 200)}`);
                }
                failureCount += batch.length;
            }
        } catch (err) {
            console.error(`❌ Batch ${batchNumber} Network Error: ${err.message}`);
            failureCount += batch.length;
        }
    }

    console.log(`\n==================================================`);
    console.log(`📊 Final Submission Report`);
    console.log(`==================================================`);
    console.log(`✓ Submitted: ${successCount} URLs`);
    if (failureCount > 0) {
        console.log(`✗ Failed:    ${failureCount} URLs`);
    }
    console.log(`==================================================\n`);
}

/**
 * Main Runner
 */
async function main() {
    const rawArgs = process.argv.slice(2);

    if (rawArgs.includes('--help') || rawArgs.includes('-h')) {
        console.log(`
GermanyStreamTV.com — IndexNow Protocol CLI

Usage:
  node scripts/index-now.js [options] [urls...]

Options:
  --p0           Submit high-priority commercial & flagship SEO URLs
  --p1           Submit secondary device & guide URLs
  --dry-run      Validate configuration and URLs without submitting to search engines
  --help, -h     Show this help message

Examples:
  node scripts/index-now.js --p0
  node scripts/index-now.js --p1
  node scripts/index-now.js https://germanystreamtv.com/ https://germanystreamtv.com/iptv-vergleich
  node scripts/index-now.js --dry-run
  node scripts/index-now.js (submits full sitemap)
`);
        process.exit(0);
    }

    const isDryRun = rawArgs.includes('--dry-run') || rawArgs.includes('--validate');
    const isP0 = rawArgs.includes('--p0');
    const isP1 = rawArgs.includes('--p1');
    const specificUrls = rawArgs.filter(arg => arg.startsWith('http://') || arg.startsWith('https://'));

    console.log('⚡ Initializing GermanyStreamTV Fast Indexing Protocol (IndexNow)...');

    const key = getValidatedKey(isDryRun);
    ensurePublicKeyFile(key, isDryRun);

    let rawUrlsToProcess = [];

    if (isP0) {
        console.log('🎯 Mode: Submitting P0 SEO Priority URLs.');
        rawUrlsToProcess = P0_URLS;
    } else if (isP1) {
        console.log('🎯 Mode: Submitting P1 SEO Priority URLs.');
        rawUrlsToProcess = P1_URLS;
    } else if (specificUrls.length > 0) {
        console.log(`🎯 Mode: Submitting ${specificUrls.length} specific URL(s) from command line.`);
        rawUrlsToProcess = specificUrls;
    } else {
        console.log('🗺️ Mode: Automatic submission from Sitemap XML.');
        try {
            rawUrlsToProcess = await getSitemapUrls();
            console.log(`🔍 Discovered ${rawUrlsToProcess.length} raw URLs in sitemap.`);
        } catch (err) {
            console.error(`\n❌ Error: ${err.message}`);
            console.error('👉 If testing locally without live internet, use:');
            console.error('   node scripts/index-now.js --p0 --dry-run\n');
            process.exit(1);
        }
    }

    const cleanUrls = sanitizeAndFilterUrls(rawUrlsToProcess);

    if (cleanUrls.length === 0) {
        console.error('❌ No valid GermanyStreamTV URLs found to submit.');
        process.exit(1);
    }

    await submitToIndexNow(cleanUrls, key, isDryRun);
}

main().catch(err => {
    console.error('\n🔥 Fatal Script Error:', err.message);
    process.exit(1);
});
