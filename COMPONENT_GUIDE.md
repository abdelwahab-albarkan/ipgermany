# دليل المكونات (COMPONENT_GUIDE.md)
## مواصفات وهياكل مكونات واجهة المستخدم لمشروع STREAMB4 باللغة العربية

يحتوي هذا الدليل على المواصفات البنيوية وواجهات البرمجة (API Interfaces) لجميع مكونات النظام دون التطرق للتفاصيل البرمجية الداخلية للمكون. يلتزم المطور باستخدام المكونات وتعديل خصائصها استناداً إلى الهياكل المذكورة أدناه.

---

### 1. قسم الواجهة البارز (Hero)
*   **الغرض:** جذب الزائر فور دخوله للموقع وعرض القيمة الأساسية مع دعوات اتخاذ إجراء واضحة ومباشرة.
*   **واجهة الخصائص (Props Interface):**
    ```typescript
    interface HeroProps {
      title: React.ReactNode;
      subtitle: string;
      primaryCtaText: string;
      primaryCtaHref: string;
      secondaryCtaText: string;
      secondaryCtaHref: string;
      badgeText?: string;
    }
    ```
*   **المتغيرات البصرية (Variants):**
    *   `default`: خلفية داكنة مع توهج خفيف وتوسيط النصوص.
    *   `split`: شاشة مقسمة؛ نصوص على اليمين واستعراض مشغل البث التفاعلي على اليسار.
*   **الحالات التفاعلية (States):**
    *   `Default`: ثبات عناصر النص والأزرار.
*   **مثال الاستخدام (Usage Example):**
    ```typescript
    // مثال استخدام خادم (RSC)
    <Hero 
      title="اشتراك IPTV من الدرجة الأولى في الشرق الأوسط"
      subtitle="بث مستقر بجودة 4K وأكثر من 20 ألف قناة بدون تقطيع"
      primaryCtaText="اختر باقتك الآن"
      primaryCtaHref="/pricing"
      secondaryCtaText="تصفح القنوات"
      secondaryCtaHref="/channels"
    />
    ```

---

### 2. شريط التنقل العلوي (Navbar)
*   **الغرض:** تسهيل التنقل بين أقسام ومسارات الموقع وتوفير زر وصول سريع للشراء.
*   **واجهة الخصائص (Props Interface):**
    ```typescript
    interface NavbarProps {
      activePath: string;
      navLinks: Array<{ label: string; href: string }>;
      ctaText: string;
      ctaHref: string;
    }
    ```
*   **المتغيرات البصرية (Variants):**
    *   `fixed`: ثابت أعلى الصفحة مع تأثير شفافية زجاجي عند التمرير (`glassmorphism`).
*   **الحالات التفاعلية (States):**
    *   `Default`: روابط معتمة بنسبة 70%.
    *   `Hover`: سطوع الرابط الممرر عليه إلى 100% مع ظهور خط تفاعلي سفلي باللون الأخضر.
    *   `Active`: الرابط الحالي النشط ملون باللون الأساسي `#0BB783`.
*   **مثال الاستخدام (Usage Example):**
    ```typescript
    <Navbar 
      activePath="/pricing"
      navLinks={[
        { label: "الرئيسية", href: "/" },
        { label: "الأسعار", href: "/pricing" },
        { label: "قائمة القنوات", href: "/channels" }
      ]}
      ctaText="اشترك الآن"
      ctaHref="/pricing"
    />
    ```

---

### 3. تذييل الموقع (Footer)
*   **الغرض:** عرض الروابط القانونية الهامة والتنقل السريع وحقوق النشر.
*   **واجهة الخصائص (Props Interface):**
    ```typescript
    interface FooterProps {
      copyrightText: string;
      linksGroups: Array<{
        title: string;
        links: Array<{ label: string; href: string }>;
      }>;
    }
    ```
*   **المتغيرات البصرية (Variants):**
    *   `default`: تخطيط متعدد الأعمدة للمحتوى التسويقي والروابط.
*   **الحالات التفاعلية (States):**
    *   `Default` و `Hover` لروابط التذييل.
*   **مثال الاستخدام (Usage Example):**
    ```typescript
    <Footer 
      copyrightText="جميع الحقوق محفوظة © 2026 STREAMB4"
      linksGroups={[
        { title: "الخدمات", links: [{ label: "الأسعار", href: "/pricing" }] },
        { title: "قانوني", links: [{ label: "سياسة الخصوصية", href: "/legal/privacy" }] }
      ]}
    />
    ```

---

### 4. بطاقات الأسعار (Pricing)
*   **الغرض:** استعراض باقات الاشتراك والميزات والأسعار لتسهيل اختيار المستخدم.
*   **واجهة الخصائص (Props Interface):**
    ```typescript
    interface PricingCardProps {
      title: string;
      price: string;
      period: string;
      features: string[];
      isPopular?: boolean;
      ctaText: string;
      checkoutUrl: string;
    }
    ```
*   **المتغيرات البصرية (Variants):**
    *   `standard`: بطاقة مسطحة بحدود رمادية خفيفة.
    *   `featured`: بطاقة بحدود زمردية مضيئة وظل متوهج.
*   **الحالات التفاعلية (States):**
    *   `Default`: مظهر مستقر.
    *   `Hover`: ارتفاع البطاقة قليلاً مع زيادة كثافة الظل الزمردي المضيء.
    *   `Disabled`: تلاشي البطاقة عند نفاد باقة مؤقتة.
*   **مثال الاستخدام (Usage Example):**
    ```typescript
    <PricingCard 
      title="باقة 12 شهر"
      price="99"
      period="دولار / سنوياً"
      features={["أكثر من 20,000 قناة", "جودة UHD / 4K", "تحديثات مجانية", "دعم فني 24/7"]}
      isPopular={true}
      ctaText="اشترك الآن بأمان"
      checkoutUrl="https://checkout.streamb4.com/yearly"
    />
    ```

---

### 5. البطاقات العامة (Cards)
*   **الغرض:** عرض الميزات، تصنيفات الأجهزة، أو مقالات المدونة.
*   **واجهة الخصائص (Props Interface):**
    ```typescript
    interface CardProps {
      children: React.ReactNode;
      className?: string;
      clickable?: boolean;
      onClick?: () => void;
    }
    ```
*   **المتغيرات البصرية (Variants):**
    *   `solid`: خلفية داكنة خفيفة `#181818`.
    *   `glass`: خلفية شبه شفافة مع مرشح ضبابي للزجاج.
*   **الحالات التفاعلية (States):**
    *   `Default`: استقرار كامل.
    *   `Hover`: تأثير إضاءة الحدود (Border Glow Effect) والتكبير الخفيف.
*   **مثال الاستخدام (Usage Example):**
    ```typescript
    <Card clickable={true} onClick={openDeviceGuide}>
      <h3>جهاز Amazon Fire Stick</h3>
      <p>طريقة إعداد وتشغيل قنوات الـ IPTV بسهولة.</p>
    </Card>
    ```

---

### 6. الأزرار (Buttons)
*   *(تكرار الهيكل الأساسي للأزرار مع واجهة الخصائص المطابقة للقسم 6.2 في كتاب المشروع).*

---

### 7. حقول الإدخال (Inputs)
*   **الغرض:** جمع بيانات الزوار في النماذج بشكل آمن وجميل.
*   **واجهة الخصائص (Props Interface):**
    ```typescript
    interface InputProps {
      id: string;
      name: string;
      type: 'text' | 'email' | 'textarea';
      placeholder?: string;
      required?: boolean;
      errorText?: string;
      value?: string;
      onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    }
    ```
*   **الحالات التفاعلية (States):**
    *   `Default`: إطار بلون رمادي خافت `#222222`.
    *   `Hover`: تغير لون الإطار إلى الرمادي المتوسط.
    *   `Focus`: إطار بلون أخضر زمردي مع توهج داخلي خفيف.
    *   `Error`: حدود حمراء فاقعة مع عرض نص الخطأ أدنى الحقل.
    *   `Disabled`: خلفية باهتة مع منع النقر أو الإدخال.
*   **مثال الاستخدام (Usage Example):**
    ```typescript
    <Input 
      id="user-email"
      name="email"
      type="email"
      placeholder="أدخل بريدك الإلكتروني"
      required={true}
    />
    ```

---

### 8. الأسئلة الشائعة التفاعلية (FAQ)
*   **الغرض:** الإجابة السريعة على استفسارات المستخدمين لزيادة معدل التحويل وتقليل عبء الدعم الفني.
*   **واجهة الخصائص (Props Interface):**
    ```typescript
    interface FAQItem {
      question: string;
      answer: string;
    }
    interface FAQProps {
      items: FAQItem[];
    }
    ```
*   **الحالات التفاعلية (States):**
    *   `Collapsed`: ظهور السؤال مع أيقونة (+) أو سهم للأسفل.
    *   `Expanded`: تمدد الارتفاع بسلاسة لعرض الإجابة مع تغير الأيقونة إلى (-).
*   **مثال الاستخدام (Usage Example):**
    ```typescript
    <FAQ 
      items={[
        { question: "هل أحتاج لسرعة إنترنت عالية؟", answer: "نوصي بسرعة لا تقل عن 20 ميغابت بالثانية للبث بجودة 4K." }
      ]}
    />
    ```

---

### 9. بطاقات ومكونات المدونة (Blog)
*   **الغرض:** استعراض مقالات المدونة بشكل جذاب لجذب حركة الزوار العضوية (Organic Traffic).
*   **واجهة الخصائص (Props Interface):**
    ```typescript
    interface BlogCardProps {
      title: string;
      excerpt: string;
      coverImage: string;
      slug: string;
      category: string;
      readingTime: string;
      date: string;
    }
    ```
*   **الحالات التفاعلية (States):**
    *   `Default` و `Hover` (تكبير الصورة الغلاف بنسبة 105% مع زيادة وضوح الظلال).
*   **مثال الاستخدام (Usage Example):**
    ```typescript
    <BlogCard 
      title="كيفية تشغيل IPTV على الهاتف المحمول بأمان"
      excerpt="شرح كامل لأفضل التطبيقات المجانية والمدفوعة لتشغيل اشتراكك المفضل على الأندرويد والآيفون..."
      coverImage="/images/blog/phone-setup.jpg"
      slug="phone-setup-guide"
      category="tutorials"
      readingTime="قراءة 4 دقائق"
      date="2026-07-28"
    />
    ```

---

### 10. تقييمات العملاء (Reviews & Testimonials)
*   **الغرض:** إثبات المصداقية ورضا المشتركين الفعليين عبر استعراض تقييماتهم.
*   **واجهة الخصائص (Props Interface):**
    ```typescript
    interface ReviewCardProps {
      authorName: string;
      rating: number; // 1-5
      comment: string;
      date: string;
      verifiedPurchase: boolean;
    }
    ```
*   **الحالات التفاعلية (States):**
    *   `Default`: عرض النجوم والتعليق وشعار الشراء المؤكد.
*   **مثال الاستخدام (Usage Example):**
    ```typescript
    <ReviewCard 
      authorName="أحمد المطيري"
      rating={5}
      comment="خدمة ممتازة ودعم فني متجاوب جداً، وجودة البث في المباريات بدون أي انقطاع."
      date="منذ يومين"
      verifiedPurchase={true}
    />
    ```
