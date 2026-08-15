export const SITE_CONFIG = {
  name: "GermanyStreamTV.com",
  domain: "https://germanystreamtv.com",
  supportEmail: "support@ipgermany.de",
  whatsappNumber: "+212625218443",
  socialLinks: {
    twitter: "https://twitter.com/ipgermany",
    facebook: "https://facebook.com/ipgermany",
    instagram: "https://instagram.com/ipgermany"
  }
};

// Social media profile URLs. Leave empty to hide a platform in the footer.
// Fill in the REAL profile URLs — do not invent handles.
export const SOCIAL_LINKS: Record<
  'instagram' | 'facebook' | 'youtube' | 'tiktok' | 'x' | 'linkedin',
  string
> = {
  instagram: "",
  facebook: "",
  youtube: "",
  tiktok: "",
  x: "",
  linkedin: "",
};

export const NAV_LINKS = [
  { label: "Startseite", href: "/" },
  { label: "Tarife & Preise", href: "/pricing" },
  { label: "Kompatible Geräte", href: "/devices" },
  { label: "Funktionen", href: "/features" },
  { label: "FAQ & Hilfe", href: "/faq" },
  { label: "Installationsanleitung", href: "/install" },
  { label: "Blog", href: "/blog" },
  { label: "Kontakt", href: "/contact" }
];

export const STATS = [
  { value: "50.000+", label: "Live-TV-Sender" },
  { value: "180.000+", label: "Filme & Serien" },
  { value: "60+", label: "Länder weltweit" },
  { value: "99,9%", label: "Server-Uptime-Garantie" }
];

// Identische Leistungen für alle Laufzeiten (1 Bildschirm / SOLO-Paket)
export const PLAN_FEATURES = [
  "50.000+ Live-Sender in HD/UHD",
  "180.000+ VOD-Mediathek (Filme & Serien)",
  "1.800+ Premium-Sportkanäle (Bundesliga)",
  "Echtes 4K/UHD Streaming & HDR10+",
  "Anti-Freeze v2 & 99,9% Server-Uptime",
  "EPG TV-Programmführer inklusive",
  "7 Tage Catch-Up & Mediathek-Pause",
  "100% VPN-kompatibel",
  "Weltweit nutzbar ohne IP-Sperre",
  "Automatische Freischaltung (< 60 Sek.)",
  "Deutscher WhatsApp & E-Mail Support",
  "Kein Abo-Zwang & keine autom. Verlängerung",
  "30 Tage Geld-zurück-Garantie"
];

export const PAYMENT_METHODS = [
  "PayPal",
  "Visa",
  "Mastercard",
  "Apple Pay",
  "Google Pay",
  "Bitcoin",
  "USDT",
  "Ethereum"
];

// Preismodell nach Laufzeit (SOLO – 1 Bildschirm), analog zu ipgermany.de
export const PRICING_PLANS = [
  {
    id: "3-monate",
    name: "3 Monate",
    months: 3,
    price: 40.99,
    perMonth: 13.66,
    discount: "20% Rabatt",
    popular: false,
    checkout: "https://checkout.ipgermany.de/solo-3-months"
  },
  {
    id: "6-monate",
    name: "6 Monate",
    months: 6,
    price: 55.99,
    perMonth: 9.33,
    discount: "40% Rabatt",
    popular: false,
    checkout: "https://checkout.ipgermany.de/solo-6-months"
  },
  {
    id: "12-monate",
    name: "12 Monate",
    months: 12,
    price: 70.99,
    perMonth: 5.92,
    discount: "50% Rabatt",
    popular: true,
    checkout: "https://checkout.ipgermany.de/solo-12-months"
  }
];

export const FEATURES = [
  {
    title: "Echtes 4K Ultra HD (H.265)",
    description: "Erleben Sie glasklares Live-TV und VOD-Inhalte in echtem 4K mit HDR10+ und Dolby Vision. Dank modernster H.265-Videokomprimierung genießen Sie maximale Bildqualität bei minimalem Bandbreitenverbrauch.",
    icon: "Tv"
  },
  {
    title: "Anti-Freeze & Edge-Server",
    description: "Unser stabiles Netzwerk aus 26 dedizierten Hochleistungs-Edge-Servern mit intelligentem Geo-Routing verhindert Latenzen und Pufferung. Streamen Sie Bundesliga-Konferenzen live ohne Ruckeln.",
    icon: "Cpu"
  },
  {
    title: "50.000+ Live-TV-Kanäle",
    description: "Erhalten Sie uneingeschränkten Zugriff auf über 50.000 Live-Sender weltweit. Inklusive aller deutschen Premium-Sender, Sport-Pakete, Nachrichten, Dokumentationen und internationalen TV-Pakete.",
    icon: "Radio"
  },
  {
    title: "180.000+ Filme & Serien",
    description: "Entdecken Sie unsere täglich aktualisierte VOD-Bibliothek mit über 180.000 Filmen, Dokumentationen und kompletten Serien-Staffeln. Inklusive deutscher Tonspuren und englischem Originalton.",
    icon: "Play"
  },
  {
    title: "No-IP-Lock Reiseschutz",
    description: "Ihr Premium-Zugang ist nicht an Ihren Heimanschluss gebunden. Nutzen Sie Ihr IPTV-Abo flexibel auf Reisen, im Urlaub oder im Hotel – weltweit und ohne IP-Sperren oder lästige Neuaktivierung.",
    icon: "Globe"
  },
  {
    title: "Universelle Kompatibilität",
    description: "GermanyStreamTV.com läuft nahtlos auf all Ihren Geräten. Ob Fire TV Stick, Samsung & LG Smart TV (Tizen/webOS), Apple TV, Android-Boxen, iOS, Android, Windows oder Mac. Einfach per M3U oder Xtream API einrichten.",
    icon: "Laptop"
  }
];

export const REVIEWS = [
  {
    name: "Markus S. - München, Deutschland",
    avatar: "/avatars/marcus.png",
    rating: 5,
    text: "Vom Kabel gewechselt und keine Sekunde bereut. Der Sport läuft in echtem 4K, absolut ruckelfrei – so macht Fernsehen endlich wieder Spaß.",
    date: "24. Juli 2026",
    verified: true
  },
  {
    name: "Sarah L. - Berlin, Deutschland",
    avatar: "/avatars/ahmed.png",
    rating: 5,
    text: "Einrichtung auf dem Fire Stick in unter 3 Minuten. Der Support hat sofort per WhatsApp geantwortet – wirklich erstklassiger Service.",
    date: "18. Juli 2026",
    verified: true
  },
  {
    name: "David K. - Hamburg, Deutschland",
    avatar: "/avatars/diana.png",
    rating: 5,
    text: "Riesige Sender- und Filmauswahl in einem einzigen Abo. Das hat mir hunderte Euro im Jahr gespart – absolute Empfehlung.",
    date: "12. Juli 2026",
    verified: true
  },
  {
    name: "Mohamed A. - Frankfurt, Deutschland",
    avatar: "/avatars/marcus.png",
    rating: 5,
    text: "Selbst beim Champions-League-Abend bleibt der Stream absolut stabil. Der EPG-Programmführer funktioniert einwandfrei auf TiviMate. Top.",
    date: "05. Juli 2026",
    verified: true
  }
];

export const FAQ_ITEMS = [
  {
    question: "Was ist GermanyStreamTV.com IPTV und wie funktioniert es?",
    answer: "GermanyStreamTV.com ist ein Premium-IPTV-Dienst (Internet Protocol Television), der digitale Fernsehstreams in echtem 4K/UHD über Ihre Internetverbindung anstelle von herkömmlichem Kabel- oder Satellitenanschluss bereitstellt. Sie benötigen lediglich ein internetfähiges Gerät. Nach der Bestellung erhalten Sie Ihre Zugangsdaten vollautomatisch per E-Mail, um sofort loszulegen."
  },
  {
    question: "Gibt es versteckte Kosten oder automatische Verlängerungen?",
    answer: "Nein, bei uns gibt es keine Abo-Fallen oder automatische Verlängerungen. Alle angebotenen Tarife sind Prepaid-Pakete. Sie zahlen einmalig für die gewählte Laufzeit (3, 6 oder 12 Monate) und nach Ablauf der Zeit endet Ihr Zugang automatisch. Sie müssen nicht kündigen, und es erfolgt keine automatische Folgebuchung."
  },
  {
    question: "Wie funktioniert die 30 Tage Geld-zurück-Garantie?",
    answer: "Ihre Zufriedenheit steht für uns an erster Stelle. Sollten Sie in den ersten 30 Tagen nach dem Kauf feststellen, dass unser Service auf Ihrem Gerät nicht stabil läuft oder Sie mit der Qualität unzufrieden sind, senden Sie uns einfach eine kurze Nachricht per WhatsApp oder E-Mail. Wir erstatten Ihnen den Kaufpreis umgehend und ohne lästige Fragen zu 100% zurück."
  },
  {
    question: "Kann ich das IPTV-Abonnement vor dem Kauf kostenlos testen?",
    answer: "Ja, wir möchten, dass Sie sich vor dem Kauf persönlich von unserer Qualität überzeugen. Kontaktieren Sie uns einfach kurz über unseren WhatsApp-Support, um einen kostenlosen und unverbindlichen 24-Stunden-Testzugang zu erhalten. So können Sie Servergeschwindigkeit, Bildqualität und Kanalauswahl auf Ihrem eigenen Gerät risikofrei prüfen."
  },
  {
    question: "Welche Geräte werden unterstützt?",
    answer: "Unsere Abonnements sind mit nahezu jedem Gerät kompatibel: Amazon Fire TV Sticks, Smart-TVs (Samsung, LG, Sony, Philips), Android TV & Google TV Boxen, Apple TV, Smartphones & Tablets (iOS, Android) sowie PCs und Laptops. In unserem Installationsbereich finden Sie Schritt-für-Schritt-Anleitungen für alle Systeme."
  },
  {
    question: "Wie schnell erhalte ich meine Zugangsdaten nach der Zahlung?",
    answer: "Die Bereitstellung erfolgt vollautomatisch in Echtzeit. Unmittelbar nach erfolgreicher Zahlung (z. B. per PayPal oder Kreditkarte) erhalten Sie eine E-Mail mit Ihrem M3U-Wiedergabelisten-Link sowie Ihren Xtream-API-Zugangsdaten (Server-URL, Benutzername, Passwort) für Ihre bevorzugte IPTV-App."
  },
  {
    question: "Welche Internetgeschwindigkeit benötige ich für 4K-Streaming?",
    answer: "Für Standard-HD-Kanäle genügt eine stabile Internetverbindung von 15 Mbit/s. Für ein flüssiges, pufferfreies Streaming-Erlebnis von Live-Sport und VOD-Inhalten in echtem 4K/UHD empfehlen wir eine Bandbreite von mindestens 25 bis 50 Mbit/s. Eine Verbindung per LAN-Kabel oder über ein 5 GHz WLAN wird empfohlen."
  },
  {
    question: "Welche Zahlungsmethoden werden akzeptiert?",
    answer: "Wir bieten Ihnen eine Vielzahl an sicheren Zahlungsoptionen: PayPal, Kreditkarte (Visa, Mastercard), Apple Pay, Google Pay sowie führende Kryptowährungen wie Bitcoin, Ethereum und USDT. Alle Transaktionen sind SSL-verschlüsselt und absolut sicher."
  },
  {
    question: "Für wie viele Geräte bzw. Bildschirme gilt ein Tarif?",
    answer: "Jeder Standard-Tarif (SOLO-Paket) gilt für 1 aktive Verbindung auf einem Gerät zur gleichen Zeit. Sie können die Zugangsdaten zwar auf mehreren Geräten (z. B. Smart-TV und Smartphone) einrichten, dürfen jedoch nur auf einem Gerät gleichzeitig streamen. Wenn Sie mehrere gleichzeitige Verbindungen benötigen, kontaktieren Sie uns für ein individuelles WhatsApp-Angebot."
  },
  {
    question: "Ist die Nutzung von VPNs erlaubt?",
    answer: "Ja, unser Service ist zu 100% VPN-kompatibel. Wir drosseln oder blockieren keine Verbindungen über VPNs. Im Gegenteil: Die Nutzung eines VPNs kann helfen, die Privatsphäre zu schützen und eventuelle Drosselungen Ihres lokalen Internetanbieters zu umgehen. Dank No-IP-Lock ist die Nutzung weltweit flexibel."
  }
];

export const SPORTS_CATEGORIES = [
  { name: "Fußball (Bundesliga & Int.)", leagues: ["1. & 2. Bundesliga", "UEFA Champions League", "Premier League", "La Liga", "Serie A"] },
  { name: "US-Sport", leagues: ["NFL (Super Bowl)", "NBA", "MLB", "NHL"] },
  { name: "Kampfsport", leagues: ["UFC Pay-Per-View", "WBA/WBC Box-Weltmeisterschaften"] },
  { name: "Motorsport", leagues: ["Formel 1", "MotoGP", "NASCAR"] },
  { name: "Andere Sportarten", leagues: ["Tennis (Wimbledon, US Open)", "Darts-Weltmeisterschaft", "Golf PGA Tour"] }
];

export const DEVICES = [
  { name: "Amazon Firestick & Fire TV", icon: "Tv", description: "Kompatibel mit TiviMate, IPTV Smarters Pro und Downloader-Einrichtungen." },
  { name: "Smart-TVs (Samsung / LG / Sony)", icon: "Monitor", description: "Verwenden Sie Apps wie Smart IPTV, Ibo Player oder IPTV Smarters." },
  { name: "Apple TV & iOS-Geräte", icon: "Smartphone", description: "Kompatibel mit GSE Smart IPTV, IPTV Smarters oder Snappy-Playern." },
  { name: "Android TV & Android-Boxen", icon: "Cpu", description: "Unterstützt TiviMate, XCIPTV und allgemeine Android-Anwendungen." },
  { name: "MAG-Boxen & Enigma2", icon: "Radio", description: "Unterstützt Portal-Konfigurationen über die MAC-Adresse des Geräts." },
  { name: "PC & Mac Computer", icon: "Laptop", description: "Streamen Sie direkt über den VLC Player oder unsere responsive Webplayer-Oberfläche." }
];

export const FAQ_PAGE_ITEMS = [
  {
    question: "Was genau ist IPTV und wie funktioniert es?",
    answer: "IPTV steht für Internet Protocol Television. Dabei werden Fernsehprogramme und Video-Inhalte digital über eine Breitband-Internetverbindung übertragen, anstatt über traditionelle Kabelanschlüsse, Satellitenschüsseln oder terrestrische Antennen. Die Daten werden in IP-Pakete verpackt und in Echtzeit an Ihren Mediaplayer bzw. Ihre IPTV-App gestreamt."
  },
  {
    question: "Ist die Nutzung von IPTV in Deutschland legal?",
    answer: "Die IPTV-Technologie selbst ist absolut legal (wie z. B. Telekom MagentaTV oder Waipu.tv). Entscheidend für die Rechtmäßigkeit ist, ob der Anbieter die Ausstrahlungsrechte für die übertragenen Sender besitzt. GermanyStreamTV.com bietet verschlüsselte Serververbindungen und transparente Tarife ohne versteckte Verträge. Wir weisen darauf hin, dass die rechtliche Verantwortung für den Empfang urheberrechtlich geschützter Kanäle stets beim Nutzer liegt und wir den Dienst primär als technische Infrastruktur bereitstellen."
  },
  {
    question: "Welche Internetgeschwindigkeit ist für IPTV erforderlich?",
    answer: "Für Standard-Definition (SD) reichen 8-10 Mbit/s. Für Full HD (1080p) benötigen Sie mindestens 15 Mbit/s. Um hochauflösende Live-Sport-Events oder Filme in echtem 4K Ultra HD mit HDR10+ und Dolby Vision flüssig und ohne Pufferung streamen zu können, empfehlen wir eine stabile Verbindung von 25-50 Mbit/s."
  },
  {
    question: "Benötige ich für die Nutzung einen bestimmten Internetanbieter?",
    answer: "Nein. GermanyStreamTV.com ist vollkommen unabhängig von Ihrem Internetanbieter (ISP). Sie können unseren Dienst über jeden Breitbandanschluss (Telekom, Vodafone, 1&1, O2 etc.) sowie über Kabel-Internet, DSL, Glasfaser, LTE/5G oder Satelliten-Internet (z.B. Starlink) nutzen."
  },
  {
    question: "Wie schnell nach dem Kauf wird mein Zugang freigeschaltet?",
    answer: "Die Freischaltung erfolgt vollautomatisch in Echtzeit. Unmittelbar nach Abschluss des Zahlungsvorgangs generiert unser System Ihre persönlichen Zugangsdaten und sendet Ihnen eine Bestätigungs-E-Mail mit Ihrem M3U-Wiedergabelisten-Link sowie Ihren Xtream Codes API-Zugangsdaten (Server-URL, Benutzername, Passwort)."
  },
  {
    question: "Welche Zahlungsmethoden stehen zur Verfügung?",
    answer: "Wir bieten Ihnen eine Auswahl an sicheren und verschlüsselten Zahlungsmethoden: PayPal, Kreditkarten (Visa, Mastercard, American Express), Apple Pay, Google Pay sowie führende Kryptowährungen wie Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC) und USDT (TRC20)."
  },
  {
    question: "Gibt es eine automatische Verlängerung oder versteckte Kosten?",
    answer: "Nein. Alle unsere Tarife sind Prepaid-Pakete. Sie zahlen einmalig für die ausgewählte Laufzeit (3, 6 oder 12 Monate). Nach Ablauf dieser Zeit endet Ihr Zugang automatisch. Es gibt keine automatischen Verlängerungen, keine Abonnement-Fallen und Sie müssen nicht kündigen."
  },
  {
    question: "Bieten Sie einen kostenlosen Testzugang an?",
    answer: "Ja. Wir bieten Ihnen die Möglichkeit, unseren Service 24 Stunden lang kostenlos und unverbindlich zu testen. So können Sie die Serverstabilität und Bildqualität auf Ihrem eigenen Gerät prüfen. Schreiben Sie uns dazu einfach eine kurze Nachricht über unseren WhatsApp-Support."
  },
  {
    question: "Wie funktioniert die 30 Tage Geld-zurück-Garantie?",
    answer: "Sollten Sie innerhalb der ersten 30 Tage nach Kauf feststellen, dass der Dienst auf Ihrem Gerät nicht stabil läuft oder Sie mit der Qualität unzufrieden sind, erstatten wir Ihnen 100% des Kaufpreises zurück. Wenden Sie sich einfach per WhatsApp oder E-Mail an unseren Support. Es gibt keine versteckten Klauseln."
  },
  {
    question: "Welche Geräte werden unterstützt?",
    answer: "Unser Dienst ist universell kompatibel. Er läuft auf Amazon Fire TV Sticks, Smart-TVs (Samsung, LG, Sony, Philips, Panasonic), Android TV-Boxen (Nvidia Shield, Xiaomi Mi Box), Apple TV, Smartphones und Tablets (iOS & Android), Computern (Windows, macOS, Linux) sowie MAG-Boxen und Linux-Receivern (Enigma2)."
  },
  {
    question: "Welche IPTV-App ist die beste für den Fire TV Stick?",
    answer: "Für den Amazon Fire TV Stick empfehlen wir wärmstens TiviMate (Premium-Version) oder IPTV Smarters Pro. Beide Apps bieten eine moderne Benutzeroberfläche, schnelles Zappen, vollständige EPG-Unterstützung und eine hervorragende Integration unserer Xtream Codes API."
  },
  {
    question: "Welche App nutze ich am besten auf einem Samsung oder LG Smart-TV?",
    answer: "Auf Smart-TVs mit Tizen OS (Samsung) oder webOS (LG) sind die Apps IPTV Smarters Pro, IBO Player, Smart IPTV oder Set IPTV die beste Wahl. Sie finden diese direkt im integrierten App-Store Ihres Fernsehers."
  },
  {
    question: "Wie richte ich IPTV auf dem Apple TV (tvOS) ein?",
    answer: "Laden Sie aus dem Apple TV App Store eine kompatible IPTV-App wie IPTVX, TiviMax oder Smarters Player Lite herunter. Öffnen Sie die App, wählen Sie 'Xtream Codes API hinzufügen' und tragen Sie Ihre Server-URL sowie Benutzername und Passwort ein."
  },
  {
    question: "Kann ich denselben Zugang auf mehreren Geräten gleichzeitig nutzen?",
    answer: "Das standardmäßige SOLO-Paket ist für 1 aktive Verbindung ausgelegt. Sie können Ihre Zugangsdaten zwar auf mehreren Geräten einrichten (z.B. Fernseher und Smartphone), dürfen jedoch nur auf einem Gerät gleichzeitig streamen. Wenn Sie mehrere gleichzeitige Streams benötigen, kontaktieren Sie uns für ein Multi-Screen-Angebot."
  },
  {
    question: "Was ist der EPG (Electronic Program Guide) und ist er enthalten?",
    answer: "Ja, der EPG (elektronische Programmführer) ist in jedem Paket kostenlos enthalten. Er liefert Ihnen Echtzeit-Informationen zum aktuellen und kommenden TV-Programm inklusive Sendungstiteln, Beschreibungen und Sendezeiten. Die EPG-Daten werden automatisch über unsere Server geladen."
  },
  {
    question: "Was ist der Unterschied zwischen M3U und Xtream Codes API?",
    answer: "Ein M3U-Link ist eine Textdatei, die alle Kanallisten als URLs enthält. Die Xtream Codes API ist ein modernerer Verbindungsstandard, der die Zugangsdaten in Server-URL, Benutzername und Passwort aufteilt. Wir empfehlen die Nutzung der Xtream Codes API, da sie stabiler lädt und EPG-Daten zuverlässiger synchronisiert."
  },
  {
    question: "Unterstützt Ihr Dienst die Catch-Up-Funktion (zeitversetztes Fernsehen)?",
    answer: "Ja, für die meisten wichtigen deutschen und internationalen Sender bieten wir eine 7-tägige Catch-Up-Funktion (Aufnahme-Archiv). Sie können verpasste Sendungen, Filme oder Sport-Events der letzten 7 Tage jederzeit nachträglich starten, pausieren oder vorspulen."
  },
  {
    question: "Gibt es eine integrierte Aufnahmefunktion (Cloud-Rekorder)?",
    answer: "Unser Server stellt das Catch-Up-Archiv bereit. Wenn Sie Sendungen permanent aufnehmen möchten, unterstützen viele Player-Apps (wie TiviMate Premium) eine lokale Aufnahmefunktion. Sie können damit Sendungen auf einem USB-Stick oder einem Netzwerkspeicher (NAS) aufzeichnen."
  },
  {
    question: "Sind alle Sport-Events und Bundesliga-Spiele enthalten?",
    answer: "Ja. In jedem Tarif sind über 1.800 Premium-Sportkanäle enthalten. Sie haben Zugriff auf alle wichtigen nationalen und internationalen Sport-Übertragungen (1. & 2. Bundesliga, UEFA Champions League, Premier League, NFL, Formel 1, UFC-PPVs und vieles mehr) in Full HD und 4K."
  },
  {
    question: "Welche Tonspuren und Audiosprachen sind verfügbar?",
    answer: "Für unsere VOD-Mediathek (Filme & Serien) bieten wir standardmäßig die deutsche Tonspur sowie die englische Original-Tonspur (O-Ton) an. Bei vielen Sendern und Filmen können Sie zudem Untertitel aktivieren oder die Tonspur direkt im Player umschalten."
  },
  {
    question: "Kann ich den IPTV-Dienst auch im Ausland nutzen?",
    answer: "Ja, dank unserer No-IP-Lock-Technologie ist unser Dienst weltweit nutzbar. Sie können Ihr Abonnement flexibel auf Reisen, im Urlaub oder im Hotel nutzen. Es gibt keine Geoblockaden oder IP-Sperren, wenn Sie sich aus einem anderen Land einloggen."
  },
  {
    question: "Benötige ich zwingend ein VPN für IPTV?",
    answer: "Nein, ein VPN ist für die Nutzung von GermanyStreamTV.com nicht zwingend erforderlich, da all unsere Streams über gesicherte und verschlüsselte Protokolle übertragen werden. Die Nutzung eines VPNs kann jedoch hilfreich sein, um Drosselungen Ihres lokalen Internetanbieters zu umgehen."
  },
  {
    question: "Ist Ihr Dienst mit VPNs kompatibel?",
    answer: "Ja, unser Service ist zu 100% mit allen bekannten VPN-Anbietern (wie NordVPN, ExpressVPN, CyberGhost, Surfshark etc.) kompatibel. Wir blockieren keine VPN-IPs und schränken Ihre Bandbreite bei VPN-Nutzung nicht ein."
  },
  {
    question: "Warum ruckelt oder puffert mein Stream gelegentlich?",
    answer: "Pufferung entsteht meist durch eine Schwankung Ihrer lokalen Internetleitung, WLAN-Interferenzen oder Drosselungen durch Ihren Provider. Lösungsansätze: Verbinden Sie Ihr Gerät per LAN-Kabel, wechseln Sie auf das stabilere 5 GHz WLAN, starten Sie Ihren Router neu oder aktivieren Sie testweise ein VPN."
  },
  {
    question: "Wie aktualisiere ich die Senderliste und das EPG?",
    answer: "Moderne IPTV-Apps aktualisieren die Senderliste und die EPG-Daten bei jedem Start der Anwendung automatisch im Hintergrund. Sie können die Aktualisierung in den Einstellungen Ihrer App (z. B. unter 'Playlists' oder 'EPG') auch manuell erzwingen."
  },
  {
    question: "Was mache ich, wenn ein bestimmter Sender nicht funktioniert?",
    answer: "Unsere Techniker überwachen die Server rund um die Uhr. Sollte ein Kanal ausfallen, wird er meist innerhalb kurzer Zeit auf eine Backup-Quelle umgeleitet. Sie können den Ausfall auch direkt an unseren WhatsApp-Support melden – wir prüfen die Quelle dann umgehend."
  },
  {
    question: "Wie kann ich mein Abonnement nach Ablauf verlängern?",
    answer: "Da wir keine automatische Abbuchungen durchführen, verlängert sich Ihr Zugang nicht von selbst. Um Ihr Abo zu verlängern, besuchen Sie vor Ablauf einfach erneut unsere Website, wählen Sie den gewünschten Tarif und schließen Sie den Kauf ab. Ihre bestehende Kanalliste bleibt dabei erhalten."
  },
  {
    question: "Was ist der Unterschied zwischen GermanyStreamTV.com und günstigeren IPTV-Anbietern?",
    answer: "Viele Billig-Anbieter nutzen überlastete Shared-Server, was zu ständigen Ausfällen bei Live-Sport führt. GermanyStreamTV.com investiert in ein eigenes CDN-Netzwerk mit 26 dedizierten Edge-Servern, echten 4K-Quellen (kein künstliches Upscaling) und bietet schnellen, persönlichen Support auf Deutsch."
  },
  {
    question: "Sind meine persönlichen Daten bei Ihnen sicher?",
    answer: "Ja. Der Schutz Ihrer Privatsphäre hat höchste Priorität. Unsere Website und Zahlungs-Gateways sind mit einer modernen 256-Bit-SSL-Verschlüsselung gesichert. Zudem speichern wir keine detaillierten Aktivitätsprotokolle (No-Log-Policy) und geben keine Kundendaten an Dritte weiter."
  },
  {
    question: "Wie richte ich IPTV auf einer MAG-Box ein?",
    answer: "Senden Sie uns nach dem Kauf die MAC-Adresse Ihrer MAG-Box per E-Mail oder WhatsApp. Wir tragen diese in unser System ein. Tragen Sie anschließend in den Portaleinstellungen Ihrer MAG-Box unsere Portal-URL ein und starten Sie das Gerät neu."
  },
  {
    question: "Welche Internet-Latenz (Ping) ist optimal für IPTV?",
    answer: "Für Live-TV und insbesondere Live-Sport ist eine niedrige Latenz (Ping) zum Server entscheidend. Ein Ping unter 30 ms ist optimal, Werte bis zu 60 ms sind völlig unproblematisch. Sie können die Latenz verbessern, indem Sie eine Kabelverbindung statt WLAN nutzen."
  },
  {
    question: "Kann ich Kanäle in Favoritenlisten organisieren?",
    answer: "Ja. Fast jede moderne IPTV-App (wie TiviMate oder IPTV Smarters) bietet die Möglichkeit, eigene Favoritenlisten zu erstellen. Sie können Ihre meistgesehenen Sender markieren, um schnell darauf zuzugreifen, ohne die gesamte 50.000-Sender-Liste durchsuchen zu müssen."
  },
  {
    question: "Wie unterscheidet sich H.265 von älteren Codecs?",
    answer: "H.265 (auch HEVC genannt) ist ein moderner Videokompressionsstandard. Er benötigt bei gleicher Bildqualität etwa 50% weniger Bandbreite als der ältere H.264-Standard. Das bedeutet, dass Sie hochauflösende 4K-Inhalte auch mit einer schwächeren Internetverbindung flüssig streamen können."
  },
  {
    question: "Was passiert, wenn ich mit dem Service unzufrieden bin?",
    answer: "Sollten Sie unzufrieden sein, greift in den ersten 30 Tagen unsere Geld-zurück-Garantie. Melden Sie sich einfach bei unserem Kundenservice – wir erstatten Ihnen den Kaufpreis ohne Diskussionen zurück. Unser Ziel ist es, Ihnen das beste IPTV-Erlebnis in Deutschland zu bieten."
  }
];
