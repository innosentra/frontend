<<<<<<< HEAD
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import intelligentDetector from "./services/intelligentDetector";

const resources = {
    // i18n.js

ar: {
  translation: {
    "learn_more":"تعرف أكثر",
    "nav_home": "الرئيسية",
    "nav_about": "من نحن",
    "nav_solutions": "حلولنا",
    "nav_contact": "اتصل بنا",
    "nav_supermarket": "السوبر ماركت",
    "nav_traffic": "حركة المرور",
    "nav_security": "الأمن",
    "nav_industry": "الصناعة",
    "nav_construction": "مواقع البناء",
    "lang_en": "English",
    "lang_de": "Deutsch",
    "lang_ar": "العربية",
    "about_title": "من نحن",
    "about_desc": "مع أكثر من 15 عاماً من الخبرة في الحلول التقنية، Innosentra هي شركة متخصصة في الرؤية الحاسوبية والذكاء الاصطناعي، تقدم رؤى قابلة للتنفيذ من البيانات المرئية. تتكامل حلولنا مع أنظمة الكاميرات الحالية، وتحترم الخصوصية، وتدعم اتخاذ قرارات أذكى في قطاعات التجزئة والأمن وغيرها.",
    "hero_title": "حلول برمجية مدعومة بالذكاء الاصطناعي",
    "hero_subtitle": "تحويل البيانات المرئية إلى رؤى تجارية قابلة للتنفيذ من خلال هندسة البرمجيات المتقدمة. نحن متخصصون في الذكاء الاصطناعي والتعلم الآلي، أنظمة الرؤية الحاسوبية، تطوير تطبيقات الويب والجوال، وهندسة قواعد البيانات.",
    
    // offer
    "offer_main_title": "ماذا نقدم؟",
    "offer_sol1_title": "هندسة الذكاء الاصطناعي والتعلم العميق",
    "offer_sol1_desc": "نقوم ببناء وتدريب نماذج تعلم عميق مخصصة لمهام الكشف والتعرف بدقة عالية",
    "offer_sol2_title": "الرؤية الحاسوبية المتقدمة",
    "offer_sol2_desc": "من التعرف على الأشخاص عبر كاميرات متعددة إلى تتبع الأجسام المعقدة، نقدم تحليلاً مرئياً متطوراً",
    "offer_sol3_title": "تحليل البيانات ولوحات العرض",
    "offer_sol3_desc": "يتم تحويل بث الفيديو الخام إلى مؤشرات أداء رئيسية (KPIs) وعرضها على لوحات تحكم فورية وبديهية",
    "offer_sol4_title": "حلول تطوير البرمجيات",
    "offer_sol4_desc": "تطوير شامل لتطبيقات الويب والجوال مع بنية قواعد بيانات قوية، من المفهوم إلى التنفيذ",

    "solutions_section_title": "استكشف حلولنا",
    "solution_retail_title": "حلول التجزئة والسوبر ماركت",
    "solution_retail_desc": "تحليلات التجزئة الذكية، عد الأشخاص، ورؤى حول سلوك المتسوقين داخل المتجر",
    "solution_traffic_title": "المرور والمواقف الذكية",
    "solution_traffic_desc": "مراقبة تدفق حركة المرور، إدارة المواقف، وتحليلات المركبات",
    "solution_security_title": "الأمن والمراقبة",
    "solution_security_desc": "كشف التهديدات في الوقت الفعلي، تنبيهات التسلل، والمراقبة المؤتمتة",
    "solution_industry_title": "الرؤية الصناعية",
    "solution_industry_desc": "الفحص الآلي،العد الدقيق، ضمان الجودة، وتحسين العمليات ",
    "solution_construction_title": "مراقبة مواقع البناء",
    "solution_construction_desc": "سلامة العمال، الامتثال لمعدات الوقاية الشخصية، ومراقبة نشاط الموقع",
    "solution_data_recovery_title": "استعادة البيانات",
    "solution_data_recovery_desc": "استعادة احترافية لبيانات الأقراص التالفة بنسبة نجاح 92.5%.",

    "dataRecovery": {
      "title": "استعادة البيانات",
      "menuItem": "استعادة البيانات",
      "shortDescription": "استعادة احترافية لبيانات الأقراص التالفة بنسبة نجاح 92.5%.",
      "hero": {
        "headline": "القرص الصلب تعطل؟ نحن هنا للمساعدة!",
        "subheadline": "خبراء في استرجاع وإعادة بناء بيانات الأقراص الصلبة.",
        "description": "نقدم خدمة تشخيص مجانية وبدون التزام على مدار 24/7. ستحصل على نظرة عامة للبيانات القابلة للاستعادة، وتقرير تشخيص، وعرض سعر غير ملزم قبل الموافقة على الاستعادة. نسبة نجاحنا 92.5%.",
        "processText": "باستخدام عمليات استعادة مطورة خصيصًا، وتقنيات حديثة، وخبرة طويلة، نحن متخصصون في أعطال الأقراص الصلبة. نحقق نسبة نجاح مميزة 92.5% ونعيد بناء بياناتك بسرعة وكفاءة."
      },
      "defects": {
        "title": "الأعطال الشائعة في الأقراص الصلبة",
        "items": [
          {
            "name": "تلف المحرك",
            "desc": "أعطال المحرك تمنع القرص من الدوران. يحدث ذلك غالبًا بسبب ضرر مادي مثل سقوط القرص."
          },
          {
            "name": "تلف إلكتروني",
            "desc": "يظهر غالبًا في لوحات الدارات المسؤولة عن وظائف القرص. من أسبابه تعطل المكونات أو الصدمات أو ارتفاعات الكهرباء."
          },
          {
            "name": "تعطل رأس القراءة",
            "desc": "يشير إلى فشل رؤوس القراءة/الكتابة الداخلية بسبب التآكل الطبيعي أو الصدمات أو دخول الغبار والجسيمات."
          },
          {
            "name": "خلل البرنامج الثابت",
            "desc": "البرنامج الثابت هو برنامج مدمج في القرص. تعطله قد يؤدي إلى عطل أو فشل كامل مع أعراض مشابهة لتعطل الرأس أو تلف المحرك."
          },
          {
            "name": "تلف منطقي",
            "desc": "لا ينتج عن ضرر مادي: تعمل مكونات القرص لكن الوصول المنطقي للبيانات يتعطل. يشمل ذلك مشاكل RAID1 أو تلف البرامج أو الأقراص المُهيأة."
          }
        ]
      },
      "howItWorks": {
        "title": "كيف تعمل استعادة بيانات القرص الصلب؟",
        "description": "بحسب نوع الضرر، نستخدم طرقًا وعمليات قراءة مختلفة. يوفّر مهندسونا المدربون وتجهيزاتنا الحديثة أفضل أساس مهني لاستعادة بيانات الأعمال. نمتلك الخبرة والمعدات اللازمة لاسترجاع بيانات شركتكم بسرعة وكفاءة وبتكلفة مناسبة. تواصلوا معنا للحصول على عرض غير ملزم عبر الهاتف أو البريد الإلكتروني."
      },
      "whyUs": {
        "title": "لماذا تختارنا؟",
        "items": [
          {
            "title": "معداتنا",
            "desc": "من أدوات اللحام إلى مختبرات الغرف النظيفة - نمتلك تجهيزات حديثة ومتطورة."
          },
          {
            "title": "خبرتنا",
            "desc": "قمنا بتشخيص أكثر من 140,000 وسيط تخزين بمختلف الأنواع."
          },
          {
            "title": "التشخيص المجاني",
            "desc": "نقدم تشخيصًا مجانيًا خلال 24-48 ساعة مع تقرير تشخيص وعرض سعر غير ملزم."
          },
          {
            "title": "منهجيتنا",
            "desc": "نحن حاصلون على شهادتي ISO 9001 و14001، ما يعكس جودة خدمتنا الاحترافية."
          }
        ]
      },
      "videoSection": {
        "text": "فيديو الشركة يوضح لك كل ما تحتاج معرفته عن خدمة استعادة البيانات لدينا."
      },
      "steps": {
        "title": "3 خطوات لاستعادة بيانات أعمالك",
        "items": [
          {
            "step": "1",
            "title": "التواصل والتشخيص",
            "desc": "أرسل إلينا وسيط التخزين لتشخيص مجاني. قم بتغليف الوسيط بعناية، وحمّل نموذج الشحن وأرفقه مع الشحنة، ثم أرسله بشكل آمن عبر DHL أو خدمة شحن سريعة."
          },
          {
            "step": "2",
            "title": "مراجعة البيانات",
            "desc": "ستتلقى عرضًا غير ملزم مع قائمة بيانات عبر الإنترنت. بعد الاستلام تحصل على رقم مرجعي شخصي، وبعد تحديد العطل وإصلاحه نرسل لك نظرة عامة على البيانات القابلة للاستعادة مع عرض السعر."
          },
          {
            "step": "3",
            "title": "إعادة شحن بياناتك",
            "desc": "نعيد بيانات أعمالك عبر نقل البيانات المستعادة إلى وسيط جديد. بعد استلام الدفع ستتلقى النسخة الاحتياطية خلال 24 ساعة بشحن قابل للتتبع. ولأسباب أمنية نحتفظ بنسخة لمدة 7 أيام ثم نحذفها."
          }
        ]
      }
    },

    // steps
    "steps_main_title": "كيف نعمل؟",
    "steps_s1_title": "تحليل الاحتياجات",
    "steps_s1_desc": "نبدأ بتحليل احتياجاتك ونظامك لرسم خارطة طريق تقنية تتماشى مع أهدافك.",
    "steps_s2_title": "بناء خوارزميات الذكاء الاصطناعي",
    "steps_s2_desc": "بناء وضبط خوارزميات الذكاء الاصطناعي والرؤية الحاسوبية المصممة خصيصاً لحالتك.",
    "steps_s3_title": "النشر على الأجهزة",
    "steps_s3_desc": "تشغيل الحل على أجهزة مخصصة للحصول على أداء فوري وتحليل مباشر في موقعك.",
    "steps_s4_title": "لوحات عرض مباشرة",
    "steps_s4_desc": "لوحات تحكم تفاعلية توفر رؤية تشغيلية مع إحصائيات وتنبيهات فورية.",

    // legal
    "legal_site_info": "معلومات الموقع",
    "legal_privacy": "سياسة الخصوصية",
    "legal_cookies": "إعدادات الكوكيز",
    "legal_terms": "شروط الاستخدام",
    "legal_security": "الأمن",
    "footer_all_rights": "جميع الحقوق محفوظة.",

    "chart_intro_title": "من الكاميرا إلى القرار",
  "chart_intro_desc": "تتبع مسار البيانات من لحظة التقاط الإشارة عبر الأجهزة، مروراً بالتحليل الذكي، وصولاً إلى النتائج القابلة للتنفيذ.",
    "chart_item_1": "تحليل المركبات واللوحات",
    "chart_item_2": "كشف الأسلحة",
    "chart_item_3": "كشف الحوادث",
    "chart_item_4": "كشف الحرائق",
    "chart_item_5": "تحليلات التجزئة",
    "chart_step2_title": "كشف الذكاء الاصطناعي ومعالجة البيانات",
    "chart_step2_desc": "تحدد الكاميرات الذكية الأحداث الرئيسية (مركبات، تهديدات، ديموغرافيا)، بينما يجمع الخادم الآمن البيانات وينظمها فوراً",
    "chart_step3_title": "عرض نتائج سهلة القراءة",
    "chart_step3_desc": "شاهد رسوماً بيانية وأرقاماً واضحة على لوحة التحكم للحصول على رؤى واتخاذ قرارات أفضل",

    "contact_title": "اتصل بنا",
    "contact_subtitle": "لديك سؤال أو مشروع؟ دعنا نناقش كيف يمكن لـ Innosentra مساعدتك في تحويل البيانات المرئية إلى رؤى.",
    "contact_info_title": "معلومات الاتصال",
    "contact_form_title": "أرسل لنا رسالة",
    "contact_label_name": "الاسم الكامل",
    "contact_label_email": "البريد الإلكتروني",
    "contact_label_phone": "رقم الهاتف (اختياري)",
    "contact_label_message": "رسالتك",
    "contact_placeholder_message": "أخبرنا عن مشروعك أو استفسارك...",
    "contact_btn_send": "إرسال الرسالة",
    "contact_btn_sending": "جاري الإرسال...",
    "contact_secure_text": "معلوماتك آمنة وسرية للغاية",
    "contact_success_msg": "تم إرسال الرسالة بنجاح! سنتواصل معك قريباً.",
    "contact_error_msg": "فشل إرسال الرسالة. يرجى المحاولة مرة أخرى.",
    "contact_phone": "الهاتف",
    "contact_email": "البريد الإلكتروني",

    // Validation
    "val_name_min": "يجب أن يكون الاسم حرفين على الأقل",
    "val_name_req": "الاسم مطلوب",
    "val_email_valid": "أدخل بريداً إلكترونياً صحيحاً",
    "val_email_req": "البريد الإلكتروني مطلوب",
    "val_phone_valid": "يرجى إدخال رقم هاتف صحيح",
    "val_msg_min": "يجب أن تكون الرسالة 10 أحرف على الأقل",
    "val_msg_req": "الرسالة مطلوبة",

    "gallery_label_people_counting": "عد الأشخاص والتعرف عليهم",
    "gallery_label_tracking": "مثال على التتبع",
    "gallery_label_gender_age": "تصنيف الجنس والعمر",
    "gallery_label_heatmap": "الخريطة الحرارية للمتجر",
    "gallery_label_journey": "رحلة العميل",

    // Retail Section
    "retail_hero_title": "تحليلات Innosentra للتجزئة",
    "retail_hero_subtitle": "حوّل كاميرات المراقبة إلى أذكى مستشار لأعمالك.",
    "retail_analyze_label": "ماذا نحلل؟",
    "retail_matters_label": "لماذا هذا مهم؟",

    // Section 1
    "retail_s1_title": "تحليلات العملاء الذكية",
    "retail_s1_subtitle": "افهم من هم عملاؤك وكيف يتصرفون في الوقت الفعلي.",
    "retail_s1_f1": "عد العملاء حسب الوقت واليوم",
    "retail_s1_f2": "تصنيف (بالغ ضد طفل)",
    "retail_s1_f3": "تحليل الجنس",
    "retail_s1_f4": "متوسط وقت البقاء",
    "retail_s1_f5": "التفاعل مع واجهة المحل قبل الدخول",
    "retail_s1_f6": "تحليل المشاعر",
    "retail_s1_i1": "تحسين توزيع الموظفين والعمليات",
    "retail_s1_i2": "معرفة ما يجذب عملائك",
    "retail_s1_i3": "فهم الاهتمام الحقيقي للعملاء",

    // Section 2
    "retail_s2_title": "رحلة العميل والخرائط الحرارية",
    "retail_s2_subtitle": "شاهد متجرك من خلال عيون عملائك.",
    "retail_s2_f1": "خرائط حرارية للمناطق النشطة والباردة",
    "retail_s2_f2": "المناطق ذات وقت البقاء الطويل",
    "retail_s2_f3": "رحلات العملاء عبر كاميرات متعددة",
    "retail_s2_i1": "تحسين تصميم وتنسيق المتجر",
    "retail_s2_i2": "تحسين أماكن وضع المنتجات",
    "retail_s2_i3": "زيادة التفاعل ومعدل التحويل",

    // Section 3
    "retail_s3_title": "لوحة تحليلات البيانات",
    "retail_s3_subtitle": "يتم تقديم جميع الرؤى عبر لوحة تحكم نظيفة وبديهية.",
    "retail_s3_f1": "مؤشرات الأداء في الوقت الفعلي والتاريخي",
    "retail_s3_f2": "اتجاهات الحركة والمقارنات",
    "retail_s3_f3": "رسوم بيانية وخرائط حرارية مرئية",
    "retail_s3_f4": "شاهد جميع بياناتك في مكان واحد",
    "retail_s3_i1": "اتخاذ قرارات أسرع",
    "retail_s3_i2": "تتبع أداء واضح",
    "retail_s3_i3": "بيانات يمكن للجميع فهمها",

    // Mobile App
    "retail_mobile_title": "التحليلات في أي مكان وزمان عبر التطبيق",
    "retail_mobile_desc": "وصول إلى كافة رؤى التجزئة مباشرة من هاتفك. يركز التطبيق على عرض البيانات بوضوح دون تعقيد.",
    "retail_mobile_f1": "أعداد العملاء والاتجاهات الحالية",
    "retail_mobile_f2": "الخرائط الحرارية وتصورات الرحلة",
    "retail_mobile_f3": "تتبع الحركة بناءً على الخريطة",
    "retail_mobile_f4": "عرض مبسط لمؤشرات الأداء للقرارات السريعة",
    "retail_mobile_f5": "مثالي للمديرين أثناء التنقل",

    // Gallery Labels
    "gallery_reid": "عد الأشخاص والتعرف المتكرر",
    "gallery_tracking": "نموذج التتبع",
    "gallery_gender": "تصنيف الجنس والعمر",
    "gallery_heatmap": "خريطة المتجر الحرارية",
    "gallery_journey": "رحلة المتسوق",
    "gallery_dashboard": "لوحة التحكم الرئيسية",
    "gallery_report": "عرض التقارير",

   

    // Site Info Section
    "site_info_title": "معلومات الموقع",
    "site_info_about_title": "حول منصة INNOSENTRA",
    "site_info_about_text": "تعتبر Innosentra مزوداً عالمياً رائداً للتحليلات المدعومة بالذكاء الاصطناعي. هذا الموقع هو الواجهة الرقمية الأساسية لعملائنا.",
    "site_info_ownership_title": "الملكية والعمليات",
    "site_info_ownership_text": "هذا الموقع مملوك ومدار من قبل مجموعة Innosentra. جميع الوحدات هي تقنيات مملوكة تم تطويرها داخلياً.",
    "site_info_tech_title": "المواصفات التقنية",
    "site_info_tech_text": "تستخدم المنصة WebGL المتقدم لتصور البيانات وبروتوكولات WebSocket الآمنة للقياس عن بُعد.",

    // Privacy Policy Section
    "privacy_title": "سياسة الخصوصية",
    "privacy_collection_title": "جمع البيانات",
    "privacy_collection_text": "نجمع المعلومات لتقديم خدمات أفضل، بما في ذلك المعلومات التي تزودنا بها مثل الاسم والبريد.",
    "privacy_usage_title": "استخدام البيانات",
    "privacy_usage_text": "نستخدم البيانات التي نجمعها لتوفير وصيانة وحماية وتحسين خدماتنا.",

    // Terms of Use Section
    "terms_title": "شروط الاستخدام",
    "terms_agreement_header": "اتفاقية المستخدم",
    "terms_agreement_text": "من خلال الدخول إلى هذا الموقع، فإنك توافق على الالتزام بشروط وأحكام الاستخدام هذه.",
    "terms_license_header": "الترخيص",
    "terms_license_text": "يُمنح الإذن لتنزيل نسخة واحدة مؤقتاً من المواد لأغراض العرض الشخصي فقط.",

    // Cookies Section
    "cookies_title": "سياسة وإعدادات الكوكيز",
    "cookies_what_is_title": "ما هي الكوكيز؟",
    "cookies_what_is_desc": "ملفات نصية صغيرة توضع على جهازك لتحسين أداء المواقع.",
    "cookies_essential_title": "1. الكوكيز الضرورية",
    "cookies_essential_desc": "ضرورية لعمل الموقع ولا يمكن إيقافها.",
    "cookies_analytical_title": "2. الكوكيز التحليلية",
    "cookies_analytical_desc": "تسمح لنا بالتعرف على عدد الزوار وكيفية تحركهم في الموقع.",

    // Security Info Section
    "security_info_title": "معايير الأمن",
    "security_info_protection_header": "حماية البيانات",
    "security_info_protection_text": "نستخدم تشفيراً بمعايير صناعية لضمان سلامة بياناتك.",


     // Traffic Section
"traffic_hero_title": "المرور والمواقف الذكية: نظام متكامل لإدارة حركة السير ووقوف السيارات",
"traffic_hero_subtitle": "نقوم بتحويل كاميرات المراقبة العادية إلى عيون إلكترونية ذكية قادرة على الرؤية والتحليل للطرق العامة ولمباني ومواقف السيارات المختلفة.",
"traffic_section_title": "تحليلات التدفق الذكي للحركة المرورية",
"traffic_section_subtitle": "نقدم نظاماً ذكياً وبسيط الاستخدام قادراً على فهم وتحليل نشاط وحركة الطريق بشكل تلقائي، كما يدير مساحات و أماكن المواقف بكفاءة عالية وبشأة مؤتمتة.",
"traffic_track_label": "ماذا نتتبع و نرصد في نظامنا؟",
"traffic_matters_label": "لماذا يعتبر هذا النظام مهماً و مفيداً؟",

// Features
"traffic_f1": "نقوم بعد وإحصاء السيارات آلياً سواء في الشوارع والطرق أو داخل مواقف السيارات المختلفة.",
"traffic_f2": "التحكم الآلي الكامل في بوابات الدخول والخروج للمواقف والمباني دون تدخل بشري.",
"traffic_f3": "توفير معلومات فورية ودقيقة عن أماكن الوقوف الشاغرة والمتاحة داخل المواقف.",
"traffic_f4": "رصد حالات الازدحام المروري والاختناقات والطرق المسدودة بشكل فوري.",
"traffic_f5": "قراءة لوحات الأرقام للسيارات تلقائياً عند البوابات وعلى الطرق لأغراض متعددة.",

// Importance
"traffic_i1": "تمكن السائقين من العثور على مواقف لسياراتهم بشكل أسرع وبدون أي توتر أو قلق.",
"traffic_i2": "ضمان انسيابية وسلاسة حركة المرور عند الدخول إلى المباني أو الخروج منها.",
"traffic_i3": "تحقيق أمان أفضل وحماية أعلى لكل من السائقين والمشاة على الطريق.",

// Industry Section
"industry_hero_title": "رؤية الذكاء الاصطناعي الصناعية: ثورة في مراقبة الجودة",
"industry_hero_subtitle": "نضمن جودة الإنتاج من خلال أنظمة فحص ومراقبة مؤتمتة بالكامل للمصانع والمنشآت الصناعية الحديثة.",
"industry_section_title": "أنظمة الفحص الآلي الدقيق",
"industry_section_subtitle": "نسعى لتحقيق تصنيع خالٍ من العيوب من خلال استخدام تقنيات المعالجة البصرية عالية السرعة والدقة.",
"industry_analyze_label": "ماذا نحلل و نفحص في العمليات الصناعية؟",
"industry_matters_label": "لماذا يعتبر هذا الفحص الآلي مهماً للصناعة؟",
"industry_a1": "كشف العيوب والشوائب والخدوش التي تظهر على أسطح المواد والمنتجات.",
"industry_a2": "التحقق من صحة واكتمال عملية تجميع الأجزاء والمكونات للمنتج.",
"industry_a3": "التأكد من دقة وسلامة عملية التعبئة والتغليف للمنتجات النهائية.",
"industry_a4": "فرز وتصنيف المنتجات المختلفة آلياً بناءً على معايير محددة.",
"industry_m1": "يساهم بشكل كبير في تقليل هدر وإتلاف المواد والإنتاج.",
"industry_m2": "يؤدي إلى زيادة ملحوظة في معدل الإنتاجية والكفاءة التشغيلية.",
"industry_m3": "يساعد في خفض التكاليف التشغيلية والنفقات العامة على المدى الطويل.",

// Security Section
"security_hero_title": "أنظمة المراقبة المتقدمة والذكية",
"security_hero_subtitle": "نوفر حلول أمن ذاتي وفعال للبنية التحتية الحيوية والهامة.",
"security_section_title": "الكشف الاستباقي والذكي عن التهديدات الأمنية",
"security_section_subtitle": "ننتقل بكم من مرحلة التسجيل السلبي للأحداث إلى مرحلة منع الحوادث قبل وقوعها في الوقت الفعلي.",
"security_cap_label": "ما هي القدرات الأساسية التي يتمتع بها نظامنا؟",
"security_val_label": "ما هي القيمة التجارية والأمنية التي يوفرها؟",
"security_c1": "تقنية التعرف على الوجوه والتمييز بين الأشخاص.",
"security_c2": "كشف حالات التسلل والدخول غير المشروع إلى المناطق المحظورة.",
"security_c3": "إصدار تنبيهات فورية عند اكتشاف أجسام أو حقائب متروكة بشكل مشبوه.",
"security_c4": "تحليل سلوك التسكع والتحركات غير الطبيعية للأشخاص في منطقة ما.",
"security_v1": "توفر حراسة مؤتمتة وعينًا ساهرة على مدار الساعة طوال أيام الأسبوع.",
"security_v2": "يقلل بشكل كبير من وقت الاستجابة للحوادث والتهديدات الأمنية.",
"security_v3": "يوفر وصولاً سريعاً وسهلاً لتسجيلات عالية الدقة والجودة عند الحاجة.",

// Construction Section
"construction_hero_title": "تعزيز السلامة والأمان في مواقع البناء",
"construction_hero_subtitle": "نعمل على حماية القوى العاملة والعمال باستخدام تقنيات رؤية الذكاء الاصطناعي المتطورة.",
"construction_section_title": "ضمان الامتثال التلقائي لبروتوكولات السلامة",
"construction_section_subtitle": "نضمن اتباع بروتوكولات وإجراءات السلامة في موقع العمل تلقائياً وبدقة عالية.",
"construction_site_label": "ما الذي نقوم بتحليله ومراقبته في موقع البناء؟",
"construction_benefit_label": "ما هي الفوائد والمكاسب الرئيسية من تطبيق هذا النظام؟",
"construction_s1": "الكشف الآلي عن ارتداء معدات الوقاية الشخصية مثل الخوذة والسترة الواقية.",
"construction_s2": "مراقبة مستمرة للمناطق الخطرة والتحذير من الاقتراب غير الآمن منها.",
"construction_s3": "إرسال تنبيهات فورية في حال رصد سقوط العمال أو تعرضهم لحوادث.",
"construction_s4": "مراقبة التفاعلات بين العمال والآلات الثقيلة للوقاية من الحوادث.",
"construction_b1": "يؤدي إلى وقوع حوادث وإصابات أقل في موقع العمل.",
"construction_b2": "يضمن الامتثال الكامل للالتزامات والقوانين واللوائح القانونية.",
"construction_b3": "يمكن مدراء المشروع من الإشراف عن بُعد على سير العمل ومستويات السلامة.",

    "contact_email_value": "manar.bakro@innosentra.com",

    "contact_phone_value": " 0059 997 163 0049",
    "contact_address": "العنوان",
    "contact_address_line1": "Georgstr. 47",
    "contact_address_line2": "51145 Cologne",
    "contact_address_line3": "ألمانيا",


    "software_hero_title": "هندسة البرمجيات المتكاملة والأنظمة الذكية",
      "software_hero_subtitle": "نقدم دورة حياة تطوير برمجيات كاملة تبدأ من هندسة الخوارزميات المعقدة، مروراً بتصميم قواعد البيانات العملاقة ، وصولاً إلى تطوير تطبيقات الويب والموبايل ، وانتهاءً بعمليات النشر  والاستضافة السحابية الآمنة",
      
      "software_section_title": "التميز التقني في كل سطر كود",
      "software_section_subtitle": "فريقنا يجمع بين دقة الخوارزميات الرياضية وجمالية واجهات المستخدم، مع التركيز الصارم على الأداء، الأمان، وقابلية التوسع (Scalability).",
      
      "software_col1_label": "القدرات التقنية الأساسية", // القائمة اليمنى
      "software_col2_label": "الجودة والبنية التحتية", // القائمة اليسرى

      // القائمة الأولى (التقنيات والتطوير)
      "software_c1": "تطوير الويب الشامل (Full-Stack) وتطبيقات الموبايل الاحترافية",
      "software_c2": "هندسة قواعد البيانات المعقدة وإدارة البيانات الضخمة (Big Data)",
      "software_c3": "بناء الخوارزميات الذكية وهياكل البيانات المتقدمة",
      "software_c4": "تكامل واجهات برمجة التطبيقات (API Integration & Microservices)",
      
      // القائمة الثانية (العمليات، النشر، والاختبار)
      "software_c5": "النشر المؤتمت (CI/CD) وإدارة الخوادم والاستضافات السحابية",
      "software_c6": "اختبار البرمجيات (QA Testing) وضمان الجودة والأداء",
      "software_c7": "تحليل البيانات واستخراج الرؤى (Data Analytics & Reporting)",
      "software_c8": "تأمين الأنظمة وحماية البيانات وتشفير الاتصالات",


      // بيانات الديمو 
      "demo_button": "اطلب ديمو",
      "hero_products_button": "تفقد المنتجات",
      "demo_btn_request": "اطلب ديمو مخصص الآن",
"demo_page_title": "طلب ديمو للنظام",
"demo_page_subtitle": "يرجى تزويدنا ببيانات بيئة العمل والمواصفات المطلوبة لنتمكن من تصميم ديمو يلبي احتياجاتك بدقة.",
"demo_label_company": "اسم الشركة / المؤسسة",
"demo_label_industry": "قطاع العمل (تجزئة، مرور، أمن..)",
"demo_label_reqs": "المواصفات والبيانات المطلوبة",
"demo_placeholder_reqs": "مثال: عدد الكاميرات، نوع البيانات المراد تحليلها، المشكلة التي ترغب بحلها...",
"demo_btn_submit": "إرسال طلب الديمو",
"val_company_req": "اسم الشركة مطلوب",
"val_industry_req": "قطاع العمل مطلوب",
"val_req_req": "يرجى كتابة بعض التفاصيل لطلب الديمو",


  "nav_agriculture": "الزراعة",
  "nav_products": "المنتجات الجاهزة",
  "agriculture_hero_title": "الذكاء الاصطناعي في الزراعة",
  "agriculture_hero_subtitle": "نرتقي بالزراعة الحديثة من خلال حلول الرؤية الحاسوبية الذكية لتحليل المحاصيل وزيادة الإنتاجية.",
  "agriculture_section_title": "إدارة المحاصيل الذكية",
  "agriculture_section_subtitle": "استخدم قوة الذكاء الاصطناعي لمراقبة الأراضي الزراعية بدقة عالية، مما يساعد المزارعين والشركات الزراعية على اتخاذ قرارات مبنية على بيانات دقيقة لحظية.",
  "agriculture_track_label": "أهم التطبيقات",
  "agriculture_f1": "العد التلقائي والدقيق للأشجار في الأراضي الواسعة",
  "agriculture_f2": "الاكتشاف المبكر للأمراض والآفات الزراعية",
  "agriculture_f3": "التحليل الشامل لحالة المحصول ونموه",
  "agriculture_f4": "تقدير حجم الإنتاجية المتوقعة",
  "agriculture_f5": "تحسين إدارة الموارد (المياه والأسمدة)",
  "agriculture_matters_label": "لماذا هذا مهم؟",
  "agriculture_i1": "التدخل المبكر لحماية النباتات وتقليل الخسائر",
  "agriculture_i2": "زيادة الإنتاجية الزراعية بأقل التكاليف",
  "agriculture_i3": "توفير الوقت والجهد في عمليات المسح الميداني",
  "products_title": "جهاز تحليل المتاجر الذكي (Edge AI)",
  "products_subtitle": "جهاز يعالج بيانات الكاميرات محلياً لضمان الخصوصية وتقليل استهلاك الإنترنت، مع لوحة تحكم شاملة لكل متجر.",
  "products_no_cloud": "معالجة محلية 100% (بدون سحابة)",
  "products_hw_title": "الجهاز: Edge AI لكل فرع",
  "products_hw_desc": "تتم المعالجة محلياً لتقليل نقل البيانات، والحفاظ على الخصوصية، وضمان استجابة سريعة.",
  "products_hw_f1": "معالجة الفيديو دون إرسال بيانات خام",
  "products_hw_f2": "تحليل فوري وسريع بفضل تقنية Edge AI",
  "products_hw_f3": "متوافق مع حجم المشروع وعدد الكاميرات",
  "products_hw_f4": "ارتباط سلس مع كاميراتك الحالية",
  "products_hw_f5": "تركيب سريع ومناسب لبيئة المتاجر",
  "products_sw_title": "البرمجيات: لوحة تحكم ذكية",
  "products_sw_desc": "نقدم لك تحليلات، خرائط حرارية، وتنبيهات قابلة للتخصيص بناءً على احتياجاتك.",
  "products_image_alt": "صورة المنتج",
  "products_section_value_title": "قيمة المنتج لعملك",
  "products_section_value_desc": "نحول كاميرات متجرك لنظام تحليلي يراقب سلوك العملاء. نوفر جهازاً لكل فرع مع لوحة تحكم موحدة لكافة الفروع.",
  "products_kpi_title": "أهم الإحصائيات التي نوفرها",
  "products_kpi_visitors": "إجمالي الزوار لفترة محددة.",
  "products_kpi_age": "تحليل فئات الزوار العمرية.",
  "products_kpi_gender": "نسبة الذكور والإناث.",
  "products_kpi_dwell": "متوسط وقت البقاء في المتجر.",
  "products_kpi_purchase": "نسبة المشترين للزوار.",
  "products_kpi_sentiment": "قياس رضا العملاء عبر تعابير الوجه.",
  "products_kpi_heatmap": "خرائط حرارية لمناطق الازدحام.",
  "products_ops_title": "تنبيهات ذكية ودعم فني",
  "products_ops_desc": "تنبيهات مخصصة ودعم فني مستمر لضمان عمل النظام بكفاءة.",
  "products_alert_cashier": "تنبيه ازدحام عند نقاط البيع.",
  "products_alert_afterhours": "تنبيه تسلل بعد أوقات العمل.",
  "products_alert_custom": "تنبيهات مرنة حسب طلبك.",

  "nav_product_edge_analytics": "جهاز الذكاء الاصطناعي للمتاجر",
  "nav_product_surveillance_tower": "برج المراقبة",
  "surveillance_title": "برج المراقبة لمواقع البناء",
  "surveillance_subtitle": "وحدة مراقبة مستقلة وذكية",
  "surveillance_desc": "برج المراقبة يوفر حلاً متكاملاً لحماية مواقع البناء والبنية التحتية، مع تنبيهات فورية وتقنيات ذكية تعمل على مدار الساعة.",
  "surveillance_f1": "وحدة مراقبة مستقلة لمواقع البناء ومشاريع البنية التحتية والمواقع المؤقتة.",
  "surveillance_f2": "تنبيهات طوارئ فورية عند وقوع أي حادث.",
  "surveillance_f3": "مراقبة مستمرة على مدار 24/7 دون توقف.",
  "surveillance_f4": "أسعار تعتمد على مدة التأجير.",
  "surveillance_f5": "يعمل بالبطاريات أو مصدر طاقة مباشر – مرن للمواقع التي تفتقر للكهرباء.",
  "surveillance_f6": "تصميم شاهق لمنع العبث أو الدخول غير المصرح به.",
  "surveillance_f7": "مقاوم للتخريب وقابل للتعديل، يقدم حلاً اقتصادياً للمواقع بكافة أحجامها.",
  "surveillance_f8": "نشر سريع – يمكن إعداده وتشغيله خلال ساعات قليلة.",
  "surveillance_f9": "يمكن تشغيل التنبيهات لاكتشاف البشر أو الحيوانات حسب السيناريو.",
  "surveillance_f10": "تنبيه فوري ومرن قدر الإمكان.",
  "surveillance_f11": "هيكل متين مقاوم للعوامل الجوية (IP67).",
  "surveillance_f12": "قدرات الرؤية الليلية.",

  "nav_product_home_monitor": "جهاز المراقبة المنزلية",
  "home_monitor_title": "جهاز المراقبة المنزلية الذكي",
  "home_monitor_subtitle": "حماية ذكية ومخصصة تمنحك راحة البال على مدار الساعة",
  "home_monitor_desc": "استمتع بأقصى درجات الأمان مع جهاز المراقبة المتطور. يمنحك النظام تحكماً كاملاً لحماية مساحتك الخاصة، مع خيارات ذكية لتخصيص أوقات التشغيل وتحديد أولويات التنبيهات لتناسب أسلوب حياتك اليومي.",
  "home_monitor_f1": "جدولة ذكية: حدد أوقات نشاط الجهاز بدقة (أثناء العمل أو النوم) واختر التنبيهات ذات الأولوية القصوى بالنسبة لك.",
  "home_monitor_f2": "إشعارات لحظية وفورية: ابقَ على اطلاع دائم بأي حركة غير معتادة من خلال تنبيهات تصلك في نفس اللحظة.",
  "home_monitor_f3": "تقنية التعرّف المتقدمة: ميزة التمييز الذكي بين حركة البشر والحيوانات الأليفة لتقليل الإنذارات الخاطئة.",
  "home_monitor_f4": "تكامل تام مع الهاتف: تحكم كامل وسهل بالنظام من أي مكان عبر تطبيق الهاتف المحمول.",
  "home_monitor_f5": "مراقبة للمكان بدقة 24/7.",
  "home_monitor_f6": "مرونة عالية في حال وجود طلبات مخصصة.",
  "home_monitor_f7": "أبعاد الجهاز صغيرة 95 مم * 66 مم.",
  }
},

  en: {
    translation: {
      "learn_more":"Learn More",
      "nav_home": "Home",
      "nav_about": "About",
      "nav_solutions": "Solutions",
      "nav_contact": "Contact",
      "nav_supermarket": "Supermarket",
      "nav_traffic": "Traffic",
      "nav_security": "Security",
      "nav_industry": "Industry",
      "nav_construction": "Construction Sites",
      "lang_en": "English",
      "lang_de": "Deutsch",
      "lang_ar": "Arabic",
      "about_title": "About Us",
      "about_desc": "More than 15 years of experience in technical solutions, Innosentra is a computer vision and AI company delivering actionable insights from visual data. Our solutions integrate with existing camera systems, respect privacy, and support smarter decision-making across retail, security, and other industries.",
      "hero_title": "Intelligent Software Solutions Powered by AI",
      "hero_subtitle": "Transforming visual data into actionable business insights through advanced software engineering. We specialize in AI and machine learning, computer vision systems, web and mobile application development, database architecture, and comprehensive technical software solutions powered by artificial intelligence.",
    // offer
    "offer_main_title": "What we offer ?",
    "offer_sol1_title": "AI Engineering & Deep Learning",
    "offer_sol1_desc": "We build and train custom deep learning models for high-accuracy detection and recognition tasks.",
    "offer_sol2_title": "Advanced Computer Vision",
    "offer_sol2_desc": "From multi-camera re-identification to complex object tracking, we deliver sophisticated visual analysis.",
    "offer_sol3_title": "Data Analytics & Dashboards",
    "offer_sol3_desc": "Raw video feeds are transformed into actionable KPIs and visualized on intuitive, real-time dashboards.",
    "offer_sol4_title": "Software Development Solutions",
    "offer_sol4_desc": "Comprehensive web and mobile application development with robust database architecture, from concept to deployment.",

    "solutions_section_title": "Explore Our Solutions",
    "solution_retail_title": "Retail & Supermarket Solutions",
    "solution_retail_desc": "Smart retail analytics, people counting, and in-store behavioral insights.",
    "solution_traffic_title": "Smart Traffic & Parking",
    "solution_traffic_desc": "Traffic flow monitoring, parking management, and vehicle analytics.",
    "solution_security_title": "Security & Surveillance",
    "solution_security_desc": "Real-time threat detection, intrusion alerts, and automated surveillance.",
    "solution_industry_title": "Industrial Vision",
    "solution_industry_desc": "Automated inspection, quality assurance, and process optimization.",
    "solution_construction_title": "Construction Site Monitoring",
    "solution_construction_desc": "Worker safety, PPE compliance, and site activity monitoring.",
    "solution_data_recovery_title": "Data Recovery",
    "solution_data_recovery_desc": "Expert data recovery for defective hard drives with a 92.5% success rate.",

    "dataRecovery": {
      "title": "Data Recovery",
      "menuItem": "Data Recovery",
      "shortDescription": "Expert data recovery for defective hard drives with a 92.5% success rate.",
      "hero": {
        "headline": "Hard drive broken? We are happy to help!",
        "subheadline": "Experts in hard drive data recovery and restoration.",
        "description": "We offer a free and no-obligation diagnostic service, 24/7! You will receive an overview of the recoverable data, a diagnostic report, and a no-obligation quote before you agree to the data recovery. Our success rate is 92.5%.",
        "processText": "Using specially developed recovery processes, state-of-the-art technology, and decades of combined experience, we are your specialist for hard drive defects. We have a remarkable success rate of 92.5% and reconstruct your data quickly and efficiently."
      },
      "defects": {
        "title": "Common Hard Drive Defects",
        "items": [
          {
            "name": "Motor Damage",
            "desc": "Defects in the motor prevent the hard drive from spinning up. This is often the result of physical damage, e.g., dropping the hard drive."
          },
          {
            "name": "Electronic Damage",
            "desc": "Electronic damage often occurs on the circuit boards that control the functions of the hard drive. The causes are usually the failure of components, physical impact, or power surges."
          },
          {
            "name": "Headcrash",
            "desc": "A headcrash describes the failure of the internal read/write heads, e.g., due to natural wear, physical impact, or dust and other particles inside the hard drive."
          },
          {
            "name": "Firmware Defect",
            "desc": "Firmware is software embedded in the hard drive. A firmware failure can lead to a hard drive defect or total failure and often shows similar symptoms to headcrashes or motor damage."
          },
          {
            "name": "Logical Damage",
            "desc": "Logical damage does not originate from physical damage: The components of the hard drive continue to function perfectly, but logical access is no longer possible. Logical damage includes, for example, RAID1 issues, software corruption, or formatted hard drives."
          }
        ]
      },
      "howItWorks": {
        "title": "How does hard drive data recovery work?",
        "description": "Depending on the type of damage, different methods and readout processes are used. Our specially trained engineers and state-of-the-art equipment provide the best foundation and the highest professional know-how for any business data recovery. We have the necessary expertise and the latest equipment to recover your corporate data quickly, efficiently, and cost-effectively. Contact us for a no-obligation quote by phone or email."
      },
      "whyUs": {
        "title": "Why choose us?",
        "items": [
          {
            "title": "Our Equipment",
            "desc": "From soldering irons to cleanroom laboratories - we have state-of-the-art facilities."
          },
          {
            "title": "Our Experience",
            "desc": "We have already diagnosed over 140,000 data carriers of all kinds."
          },
          {
            "title": "Our Free Diagnosis",
            "desc": "We offer a free diagnosis within 24-48h including a diagnostic report and a no-obligation quote."
          },
          {
            "title": "Our Process",
            "desc": "We are ISO 9001 and 14001 certified and therefore have a triple award for our professional service."
          }
        ]
      },
      "videoSection": {
        "text": "Our company video shows you everything you need to know about our data recovery service."
      },
      "steps": {
        "title": "3 Steps to Your Business Data",
        "items": [
          {
            "step": "1",
            "title": "Contact & Diagnosis",
            "desc": "Send us your medium for a free diagnosis. Pack your medium carefully. Download the shipping form and enclose it with the shipment. Send us your medium securely via DHL or a courier service."
          },
          {
            "step": "2",
            "title": "Data Overview",
            "desc": "You will receive a no-obligation offer incl. an online data list for an overview of your data. After receiving the medium, you get a personal reference number. After identifying and fixing the defect, we send an overview of recoverable data and a quote. If data cannot be reconstructed, you will receive your medium back via secure shipping."
          },
          {
            "step": "3",
            "title": "Shipping Your Data",
            "desc": "We send your business data back to you. Data transfer of the reconstructable data to a new medium. After receipt of payment, you will receive your data backup within 24h via a trackable shipping method. For security reasons, we keep a copy of your data for 7 days. After this period, the copy will be deleted."
          }
        ]
      }
    },

    //  steps
    "steps_main_title": "How We Work?",
    "steps_s1_title": "Analyze Needs",
    "steps_s1_desc": "Start by analyzing your needs and system to chart a technical roadmap aligned with your goals.",
    "steps_s2_title": "Build AI Algorithms",
    "steps_s2_desc": "Build and fine-tune AI and Computer Vision algorithms, designed specifically for your use case.",
    "steps_s3_title": "Deploy on Devices",
    "steps_s3_desc": "Operate the solution on dedicated Devices for instant performance and real-time analysis directly at your site.",
    "steps_s4_title": "Live Dashboards",
    "steps_s4_desc": "Interactive dashboards providing operational visibility with real-time statistics and alerts.",
    // legal
    "legal_site_info": "Site Info",
    "legal_privacy": "Privacy Policy",
    "legal_cookies": "Cookies Settings",
    "legal_terms": "Terms of Use",
    "legal_security": "Security",
    "footer_all_rights": "All rights reserved.",
// 
"chart_intro_title": "From camera to Decision",
  "chart_intro_desc": "Track the data journey from signal capture via devices, through intelligent analysis, to actionable results.",
  "chart_item_1": "Vehicle & Plate Analysis",
"chart_item_2": "Weapon Detection",
"chart_item_3": "Accident Detection",
"chart_item_4": "Fire Detection",
"chart_item_5": "Retail Analytics",
"chart_step2_title": "AI Detection & Data Processing",
"chart_step2_desc": "Smart cameras identify key events (vehicles, threats, demographics), while the secure server instantly collects and organizes this data for actionable insights.",
"chart_step3_title": "View Easy-to-Read Results",
"chart_step3_desc": "See clear charts and numbers on your dashboard to gain insights and make better business decisions.",
      // بقية المفاتيح...
"contact_title": "Contact Us",
"contact_subtitle": "Have a question or a project in mind? Let’s discuss how Innosentra can help you turn visual data into actionable insights.",
"contact_info_title": "Contact Information",
"contact_form_title": "Send Us a Message",
"contact_label_name": "Full Name",
"contact_label_email": "Email Address",
"contact_label_phone": "Phone Number (Optional)",
"contact_label_message": "Your Message",
"contact_placeholder_message": "Tell us about your project or inquiry...",
"contact_btn_send": "Send Message",
"contact_btn_sending": "Sending...",
"contact_secure_text": "Your information is secure and confidential",
"contact_success_msg": "Message sent successfully! We will contact you soon.",
"contact_error_msg": "Failed to send message. Please try again.",
"contact_phone": "Phone",
"contact_email": "Email",
// Validation
"val_name_min": "Name must be at least 2 characters",
"val_name_req": "Name is required",
"val_email_valid": "Enter a valid email address",
"val_email_req": "Email is required",
"val_phone_valid": "Please enter a valid phone number",
"val_msg_min": "Message must be at least 10 characters",
"val_msg_req": "Message is required",

"gallery_label_people_counting": "People Counting & ReID",
"gallery_label_tracking": "Tracking Example",
"gallery_label_gender_age": "Gender & Age Classification",
"gallery_label_heatmap": "Store Heatmap",
"gallery_label_journey": "Customer Journey",


// Retail Section
"retail_hero_title": "Innosentra Retail Analytics",
"retail_hero_subtitle": "Turn Your Security Cameras into Your Smartest Business Consultant.",
"retail_analyze_label": "What We Analyze",
"retail_matters_label": "Why It Matters",

// Section 1
"retail_s1_title": "Smart Customer Analytics",
"retail_s1_subtitle": "Understand who your customers are and how they behave in real time.",
"retail_s1_f1": "Customer counting by time and day",
"retail_s1_f2": "Adult vs. Child classification",
"retail_s1_f3": "Gender Analysis",
"retail_s1_f4": "Average dwell time",
"retail_s1_f5": "Window engagement before entry",
"retail_s1_f6": "Emotion Analysis",
"retail_s1_i1": "Optimize staffing and operations",
"retail_s1_i2": "Know what attracts your customers",
"retail_s1_i3": "Understand real customer interest",

// Section 2
"retail_s2_title": "Customer journey & Heatmaps",
"retail_s2_subtitle": "See your store through your customers' eyes.",
"retail_s2_f1": "Hot & Cold Zone Heatmaps",
"retail_s2_f2": "High dwell-time areas",
"retail_s2_f3": "Multi-camera customer journeys",
"retail_s2_i1": "Improve store layout",
"retail_s2_i2": "Optimize product placement",
"retail_s2_i3": "Increase engagement and conversion",

// Section 3
"retail_s3_title": "Analytics Dashboard",
"retail_s3_subtitle": "All insights delivered through a clean, intuitive dashboard.",
"retail_s3_f1": "Real-time and historical KPIs",
"retail_s3_f2": "Traffic trends and comparisons",
"retail_s3_f3": "Visual charts and heatmaps",
"retail_s3_f4": "See all your data in one place",
"retail_s3_i1": "Faster decision-making",
"retail_s3_i2": "Clear performance tracking",
"retail_s3_i3": "Data everyone can understand",

// Mobile App
"retail_mobile_title": "Analytics Anywhere, Anytime, using mobile app",
"retail_mobile_desc": "Access all your retail insights directly from your mobile device. The application focuses on clear data visualization without complexity, delivering only what matters.",
"retail_mobile_f1": "Live customer counts and trends",
"retail_mobile_f2": "Heatmaps and journey visualizations",
"retail_mobile_f3": "Map-based movement tracking",
"retail_mobile_f4": "Simple KPI views for quick decisions",
"retail_mobile_f5": "Optimized for managers on the move",

// Gallery Labels (Items inside MediaGallery)
"gallery_reid": "People Counting & ReID",
"gallery_tracking": "Tracking Example",
"gallery_gender": "Gender & Age Classification",
"gallery_heatmap": "Store Heatmap",
"gallery_journey": "Customer Journey",
"gallery_dashboard": "Main Dashboard",
"gallery_report": "Report View",



// Traffic Section
"traffic_hero_title": "Smart Traffic & Parking: A Comprehensive Management System",
"traffic_hero_subtitle": "We transform standard surveillance cameras into smart electronic eyes capable of analyzing public roads, buildings, and parking facilities.",
"traffic_section_title": "Smart Traffic Flow Analytics",
"traffic_section_subtitle": "We provide a smart, user-friendly system that automatically analyzes road activity and manages parking spaces efficiently and autonomously.",
"traffic_track_label": "What do we track?",
"traffic_matters_label": "Why does it matter?",

// Features
"traffic_f1": "Automated vehicle counting on streets and inside parking lots.",
"traffic_f2": "Fully automated control of entry and exit gates without human intervention.",
"traffic_f3": "Real-time, accurate information on available parking spots.",
"traffic_f4": "Instant detection of traffic congestion, jams, and blocked roads.",
"traffic_f5": "Automatic License Plate Recognition (ALPR) at gates and on roads.",

// Importance
"traffic_i1": "Enables drivers to find parking faster, stress-free.",
"traffic_i2": "Ensures smooth traffic flow when entering or exiting buildings.",
"traffic_i3": "Achieves better safety and protection for both drivers and pedestrians.",

// Industry Section
"industry_hero_title": "Industrial AI Vision: A Revolution in Quality Control",
"industry_hero_subtitle": "We ensure production quality through fully automated inspection systems for modern factories and industrial facilities.",
"industry_section_title": "Precision Automated Inspection Systems",
"industry_section_subtitle": "We strive for zero-defect manufacturing using high-speed, high-precision optical processing technologies.",
"industry_analyze_label": "What do we analyze?",
"industry_matters_label": "Why is this important?",
"industry_a1": "Detection of defects, impurities, and scratches on material surfaces.",
"industry_a2": "Verification of correct assembly and completeness of parts.",
"industry_a3": "Ensuring the accuracy and integrity of final product packaging.",
"industry_a4": "Automated sorting and classification of products based on specific criteria.",
"industry_m1": "Significantly reduces material waste and spoilage.",
"industry_m2": "Leads to a noticeable increase in productivity and operational efficiency.",
"industry_m3": "Helps reduce operational costs and overheads in the long run.",

// Security Section
"security_hero_title": "Advanced Smart Surveillance Systems",
"security_hero_subtitle": "We provide effective, autonomous security solutions for critical infrastructure.",
"security_section_title": "Proactive Smart Threat Detection",
"security_section_subtitle": "Moving from passive recording to proactive incident prevention in real-time.",
"security_cap_label": "Core Capabilities",
"security_val_label": "Business & Security Value",
"security_c1": "Facial recognition technology and person identification.",
"security_c2": "Detection of intrusion and unauthorized entry into restricted areas.",
"security_c3": "Instant alerts upon detecting suspicious abandoned objects or bags.",
"security_c4": "Analysis of loitering behavior and abnormal movements.",
"security_v1": "Provides automated, 24/7 vigilance.",
"security_v2": "Significantly reduces response time to incidents and security threats.",
"security_v3": "Provides quick and easy access to high-quality footage when needed.",

// Construction Section
"construction_hero_title": "Enhancing Safety at Construction Sites",
"construction_hero_subtitle": "Protecting the workforce using advanced AI vision technologies.",
"construction_section_title": "Automated Safety Protocol Compliance",
"construction_section_subtitle": "Ensuring strict adherence to safety protocols on-site automatically and accurately.",
"construction_site_label": "What do we monitor?",
"construction_benefit_label": "Key Benefits",
"construction_s1": "Automated detection of PPE compliance (helmets, vests).",
"construction_s2": "Continuous monitoring of hazardous zones and unsafe proximity warnings.",
"construction_s3": "Instant alerts for worker falls or accidents.",
"construction_s4": "Monitoring interactions between workers and heavy machinery to prevent accidents.",
"construction_b1": "Results in fewer accidents and injuries on-site.",
"construction_b2": "Ensures full compliance with legal regulations and safety standards.",
"construction_b3": "Enables project managers to remotely supervise workflow and safety levels.",

// Site Info Section
"site_info_title": "Site Information",
"site_info_about_title": "About INNOSENTRA Platform",
"site_info_about_text": "Innosentra is a leading global provider of AI-driven analytics and smart monitoring solutions. This website serves as the primary digital interface for our clients across retail, construction, and industrial sectors. Our mission is to transform raw data into actionable insights through cutting-edge computer vision technology.",
"site_info_ownership_title": "Ownership and Operations",
"site_info_ownership_text": "This site is owned and operated by Innosentra Group. All modules including 'Retail Solutions', 'Traffic Analytics', and 'Security Systems' are proprietary technologies developed by our in-house engineering teams.",
"site_info_tech_title": "Technical Specifications",
"site_info_tech_text": "The platform utilizes advanced WebGL for data visualization and secure WebSocket protocols for real-time telemetry. We support all modern browsers and provide a responsive experience for mobile and tablet devices.",

// Privacy Policy Section
"privacy_title": "Privacy Policy",
"privacy_collection_title": "Data Collection",
"privacy_collection_text": "We collect information to provide better services to all our users. This includes information you provide to us like your name and email.",
"privacy_usage_title": "Data Usage",
"privacy_usage_text": "We use the data we collect to provide, maintain, protect and improve our services.",



// Terms of Use Section
"terms_title": "Terms of Use",
"terms_agreement_header": "User Agreement",
"terms_agreement_text": "By accessing this website, you are agreeing to be bound by these web site Terms and Conditions of Use.",
"terms_license_header": "License",
"terms_license_text": "Permission is granted to temporarily download one copy of the materials on Innosentra's web site for personal viewing only.",

// Cookies Section
"cookies_title": "Cookies Settings & Policy",
"cookies_what_is_title": "What are Cookies?",
"cookies_what_is_desc": "Cookies are small text files that are placed on your computer by websites that you visit. They are widely used in order to make websites work more efficiently.",
"cookies_essential_title": "1. Essential Cookies",
"cookies_essential_desc": "These are necessary for the website to function properly and cannot be switched off.",
"cookies_analytical_title": "2. Analytical Cookies",
"cookies_analytical_desc": "They allow us to recognize and count the number of visitors and see how they move around the site.",


// Security Info Section
"security_info_title": "Security Standards",
"security_info_protection_header": "Data Protection",
"security_info_protection_text": "We employ industry-standard encryption to ensure your data is safe during transit and at rest.",






  "contact_email_value":"manar.bakro@innosentra.com",
  "contact_phone_value":"0049 163 997 0059",
  "contact_address": "Address",
  "contact_address_line1": "Georgstr. 47",
  "contact_address_line2": "51145 Cologne",
  "contact_address_line3": "Germany",


  "software_hero_title": "Integrated Software Engineering & Smart Systems",
      "software_hero_subtitle": "We deliver a complete Software Development Life Cycle (SDLC), starting from complex algorithmic engineering and massive database architecture (SQL & NoSQL), to high-end Web and Mobile development (Native & Cross-platform), concluding with secure Deployment and Cloud Hosting.",
      
      "software_section_title": "Technical Excellence in Every Line of Code",
      "software_section_subtitle": "Our team combines the precision of mathematical algorithms with the elegance of UI/UX, strictly focusing on Performance, Security, and Scalability.",
      
      "software_col1_label": "Core Technical Capabilities",
      "software_col2_label": "Infrastructure & Quality Assurance",

      // List 1 (Tech & Dev)
      "software_c1": "Full-Stack Web Development & Professional Mobile Apps",
      "software_c2": "Complex Database Architecture & Big Data Management",
      "software_c3": "Smart Algorithms & Advanced Data Structures Construction",
      "software_c4": "API Integration & Microservices Architecture",
      
      // List 2 (Ops, Deploy, Testing)
      "software_c5": "Automated Deployment (CI/CD), Server Mgmt & Cloud Hosting",
      "software_c6": "Software Testing (QA), Performance & Quality Assurance",
      "software_c7": "Data Analytics, Reporting & Business Intelligence",
      "software_c8": "System Security, Data Protection & Encryption",
      
      // الديمو
      "demo_button": "Request a Demo",
      "hero_products_button": "Explore Products",
      "demo_btn_request": "Request a Custom Demo",
"demo_page_title": "Request a System Demo",
"demo_page_subtitle": "Please provide details about your environment and required specifications so we can design a demo tailored to your needs.",
"demo_label_company": "Company / Organization Name",
"demo_label_industry": "Industry (Retail, Traffic, Security..)",
"demo_label_reqs": "Required Specifications & Data",
"demo_placeholder_reqs": "E.g.: Number of cameras, type of data to analyze, the problem you want to solve...",
"demo_btn_submit": "Submit Demo Request",
"val_company_req": "Company name is required",
"val_industry_req": "Industry is required",
"val_req_req": "Please provide some details for the demo",

"nav_agriculture": "Agriculture",
  "nav_products": "Products",
  "agriculture_hero_title": "AI in Agriculture",
  "agriculture_hero_subtitle": "Elevating modern farming with intelligent computer vision solutions for crop analysis and increased yield.",
  "agriculture_section_title": "Smart Crop Management",
  "agriculture_section_subtitle": "Leverage the power of AI to monitor farmlands with high precision, enabling farmers to make data-driven decisions in real-time.",
  "agriculture_track_label": "Key Applications",
  "agriculture_f1": "Accurate and automated tree counting in large fields",
  "agriculture_f2": "Early detection of agricultural diseases and pests",
  "agriculture_f3": "Comprehensive crop health and growth analysis",
  "agriculture_f4": "Yield estimation and forecasting",
  "agriculture_f5": "Resource management optimization (water and fertilizers)",
  "agriculture_matters_label": "Why it matters?",
  "agriculture_i1": "Early intervention to protect plants and reduce losses",
  "agriculture_i2": "Maximize harvest yield with minimized costs",
  "agriculture_i3": "Save time and effort in field surveying",
  "products_title": "Edge AI Retail Analytics Device",
  "products_subtitle": "A smart edge device that processes camera data locally to protect privacy and reduce internet usage, with one unified dashboard for complete operational visibility.",
  "products_no_cloud": "0% Cloud Services Used",
  "products_hw_title": "Hardware: Edge AI Device per Store",
  "products_hw_desc": "The device processes camera data locally on the edge to minimize data transfer, protect privacy, and reduce internet usage—while keeping response times fast.",
  "products_hw_f1": "On-device processing without sending raw footage",
  "products_hw_f2": "Edge AI for low-latency real-time analysis",
  "products_hw_f3": "Sizing tailored to your number of cameras & project scale",
  "products_hw_f4": "Works with your existing cameras with privacy by design",
  "products_hw_f5": "Built for store environments with quick installation",
  "products_sw_title": "Software: Unified Dashboard & Smart Analytics",
  "products_sw_desc": "We turn analysis outputs into action-ready KPIs, heatmaps, and configurable alerts—across your stores in one place.",
  "products_image_alt": "Product image",
  "products_section_value_title": "What does this product deliver?",
  "products_section_value_desc": "We turn your existing store cameras into a full analytics engine that tracks customer behavior in real time and translates it into business-ready insights. Device sizing is tailored to project scale, and for chain businesses we deploy one device per branch and unify all stores in one dashboard.",
  "products_kpi_title": "Key statistics your team can track",
  "products_kpi_visitors": "Visitor and customer counts across any selected time range.",
  "products_kpi_age": "Age group analytics for incoming customers.",
  "products_kpi_gender": "Gender distribution: male and female.",
  "products_kpi_dwell": "Average dwell time and average buying time.",
  "products_kpi_purchase": "How many bought versus how many did not buy.",
  "products_kpi_sentiment": "Customer satisfaction indicators from facial emotion analysis.",
  "products_kpi_heatmap": "Heatmaps to understand attraction points and congestion areas.",
  "products_ops_title": "Smart alerts + full support",
  "products_ops_desc": "We configure custom alerts based on your priorities and stay accountable for smooth rollout and issue handling, especially during the initial deployment phase, with continuous technical support.",
  "products_alert_cashier": "Crowding alert at cashier and checkout zones.",
  "products_alert_afterhours": "Instant alert for unauthorized entry after store closing.",
  "products_alert_custom": "Fully customizable alerts for your own scenarios.",

  "nav_product_edge_analytics": "Edge AI Analytics Device",
  "nav_product_surveillance_tower": "Surveillance Tower",
  "surveillance_title": "Surveillance Tower for Construction Sites",
  "surveillance_subtitle": "Standalone Smart Monitoring Unit",
  "surveillance_desc": "A complete solution to protect construction sites and infrastructure with instant alerts and 24/7 intelligent monitoring.",
  "surveillance_f1": "Standalone monitoring unit for construction sites, infrastructure projects, and temporary locations.",
  "surveillance_f2": "Emergency alerts upon any incident.",
  "surveillance_f3": "24/7 non-stop monitoring.",
  "surveillance_f4": "Pricing based on rental duration.",
  "surveillance_f5": "Powered by batteries or direct site power supply – flexible for sites with limited or no electricity.",
  "surveillance_f6": "Tall design to prevent tampering or unauthorised access.",
  "surveillance_f7": "Vandal-resistant and adjustable, offering a cost-effective solution for sites of any size/complexity.",
  "surveillance_f8": "Rapid deployment – can be set up and operational within a few hours.",
  "surveillance_f9": "Alerts can be triggered by humans or animals depending on the scenario.",
  "surveillance_f10": "Instant and highly flexible alerts.",
  "surveillance_f11": "Durable weatherproof housing (IP67).",
  "surveillance_f12": "Night vision capabilities.",

  "nav_product_home_monitor": "Home Monitor",
  "home_monitor_title": "Smart Home Monitor",
  "home_monitor_subtitle": "Smart, customized protection for round-the-clock peace of mind",
  "home_monitor_desc": "Experience maximum security with our advanced monitoring system. It gives you full control to protect your space, featuring smart options to customize operating hours and prioritize alerts to fit your lifestyle.",
  "home_monitor_f1": "Smart Scheduling: Precisely set device activity times (e.g., during work or sleep) and prioritize your most important alerts.",
  "home_monitor_f2": "Instant Notifications: Stay informed of any unusual activity with real-time alerts sent straight to your device.",
  "home_monitor_f3": "Advanced Detection: Smart AI recognition distinguishes between humans and pets, drastically reducing false alarms.",
  "home_monitor_f4": "Seamless Mobile Integration: Easily manage and control your security system from anywhere via the mobile app.",
  "home_monitor_f5": "Accurate 24/7 premises monitoring.",
  "home_monitor_f6": "High flexibility for custom requests.",
  "home_monitor_f7": "Device dimensions: small, 95 mm * 66 mm.",

}
  },

  de: {
    translation: {
      "learn_more":"Mehr erfahren",
        "nav_home": "Startseite",
      "nav_about": "Über uns",
      "nav_solutions": "Lösungen",
      "nav_contact": "Kontakt",
      "nav_supermarket": "Supermarkt",
      "nav_traffic": "Verkehr",
      "nav_security": "Sicherheit",
      "nav_industry": "Industrie",
      "nav_construction": "Baustellen",
      "lang_en": "Englisch",
      "lang_de": "Deutsch",
      "lang_ar": "Arabisch",
      "about_title": "Über uns",
      "about_desc": "Mit mehr als 15 Jahren Erfahrung in technischen Lösungen ist Innosentra ein Unternehmen für Computer Vision und KI, das umsetzbare Erkenntnisse aus visuellen Daten liefert. Unsere Lösungen lassen sich in bestehende Kamerasysteme integrieren, wahren die Privatsphäre und unterstützen eine intelligentere Entscheidungsfindung in den Bereichen Einzelhandel, Sicherheit und anderen Branchen.",
      "hero_title": "Intelligente Softwarelösungen mit KI-Antrieb",
      "hero_subtitle": "Umwandlung visueller Daten in umsetzbare Geschäftseinblicke durch fortschrittliche Softwaretechnik. Wir spezialisieren uns auf KI und maschinelles Lernen, Computer-Vision-Systeme, Web- und Mobile-Anwendungsentwicklung, Datenbankarchitektur und umfassende technische Softwarelösungen powered by künstlicher Intelligenz.",
      // offer
      "offer_main_title": "Was wir anbieten?",
"offer_sol1_title": "KI-Engineering & Deep Learning",
"offer_sol1_desc": "Wir entwickeln und trainieren maßgeschneiderte Deep-Learning-Modelle für hochpräzise Erkennungs- und Identifikationsaufgaben.",
"offer_sol2_title": "Fortschrittliche Computer Vision",
"offer_sol2_desc": "Von der Re-Identifizierung über mehrere Kameras bis hin zur komplexen Objektverfolgung liefern wir anspruchsvolle visuelle Analysen.",
"offer_sol3_title": "Datenanalyse & Dashboards",
"offer_sol3_desc": "Rohvideostreams werden in aussagekräftige KPIs umgewandelt und auf intuitiven Echtzeit-Dashboards visualisiert.",
"offer_sol4_title": "Softwarebau",
"offer_sol4_desc": "Umfassende Web- und Mobile-Anwendungsentwicklung mit robuster Datenbankarchitektur, vom Konzept bis zur Bereitstellung.",

"solutions_section_title": "Entdecken Sie unsere Lösungen",
"solution_retail_title": "Einzelhandel- & Supermarkt-Lösungen",
"solution_retail_desc": "Intelligente Einzelhandelsanalysen, Personenzählung und Einblicke in das Kundenverhalten im Laden.",
"solution_traffic_title": "Intelligenter Verkehr & Parken",
"solution_traffic_desc": "Verkehrsflussüberwachung, Parkraummanagement und Fahrzeuganalysen.",
"solution_security_title": "Sicherheit & Überwachung",
"solution_security_desc": "Echtzeit-Bedrohungserkennung, Eindringlingswarnungen und automatisierte Überwachung.",
"solution_industry_title": "Industrielle Vision",
"solution_industry_desc": "Automatisierte Inspektion, Qualitätssicherung und Prozessoptimierung.",
"solution_construction_title": "Baustellenüberwachung",
"solution_construction_desc": "Arbeitersicherheit, PSA-Konformität und Überwachung der Standortaktivitäten.",
"solution_data_recovery_title": "Datenrettung",
"solution_data_recovery_desc": "Professionelle Datenrettung für defekte Festplatten mit einer Erfolgsquote von 92,5%.",

"dataRecovery": {
  "title": "Datenrettung",
  "menuItem": "Datenrettung",
  "shortDescription": "Professionelle Datenrettung für defekte Festplatten mit einer Erfolgsquote von 92,5%.",
  "hero": {
    "headline": "Festplatte defekt? Wir helfen gerne!",
    "subheadline": "Experten für Datenrettung und Wiederherstellung von Festplatten.",
    "description": "Wir bieten rund um die Uhr eine kostenlose und unverbindliche Diagnose. Sie erhalten eine Übersicht der wiederherstellbaren Daten, einen Diagnosebericht und ein unverbindliches Angebot, bevor Sie der Datenrettung zustimmen. Unsere Erfolgsquote liegt bei 92,5%.",
    "processText": "Mit speziell entwickelten Wiederherstellungsprozessen, modernster Technik und jahrzehntelanger Erfahrung sind wir Ihr Spezialist bei Festplattenschäden. Mit einer Erfolgsquote von 92,5% rekonstruieren wir Ihre Daten schnell und effizient."
  },
  "defects": {
    "title": "Häufige Festplattendefekte",
    "items": [
      {
        "name": "Motorschaden",
        "desc": "Defekte am Motor verhindern das Hochdrehen der Festplatte. Häufige Ursache sind physische Schäden, z. B. durch Herunterfallen."
      },
      {
        "name": "Elektronikschaden",
        "desc": "Elektronikschäden treten oft an den Platinen auf, die die Funktionen der Festplatte steuern. Ursachen sind meist Bauteilausfälle, physische Einwirkungen oder Spannungsspitzen."
      },
      {
        "name": "Headcrash",
        "desc": "Ein Headcrash beschreibt den Ausfall der internen Lese-/Schreibköpfe, z. B. durch natürlichen Verschleiß, physische Einwirkung oder Staubpartikel im Laufwerk."
      },
      {
        "name": "Firmware-Defekt",
        "desc": "Firmware ist in die Festplatte integrierte Software. Ein Firmware-Fehler kann zu Defekten oder Totalausfall führen und zeigt oft ähnliche Symptome wie Headcrashes oder Motorschäden."
      },
      {
        "name": "Logischer Schaden",
        "desc": "Logische Schäden entstehen nicht durch physische Defekte: Die Komponenten funktionieren, aber ein logischer Zugriff ist nicht mehr möglich. Dazu zählen z. B. RAID1-Probleme, Softwarebeschädigungen oder formatierte Festplatten."
      }
    ]
  },
  "howItWorks": {
    "title": "Wie funktioniert die Festplatten-Datenrettung?",
    "description": "Je nach Schadensart kommen unterschiedliche Methoden und Ausleseverfahren zum Einsatz. Unsere speziell geschulten Ingenieure und moderne Ausstattung bieten die beste Grundlage für professionelle Unternehmens-Datenrettung. Wir verfügen über das Know-how und die Technik, um Ihre Unternehmensdaten schnell, effizient und kostengünstig wiederherzustellen. Kontaktieren Sie uns für ein unverbindliches Angebot per Telefon oder E-Mail."
  },
  "whyUs": {
    "title": "Warum uns wählen?",
    "items": [
      {
        "title": "Unsere Ausstattung",
        "desc": "Von Lötkolben bis Reinraumlaboren - wir verfügen über modernste Infrastruktur."
      },
      {
        "title": "Unsere Erfahrung",
        "desc": "Wir haben bereits über 140.000 Datenträger aller Art diagnostiziert."
      },
      {
        "title": "Unsere kostenlose Diagnose",
        "desc": "Wir bieten eine kostenlose Diagnose innerhalb von 24-48 Stunden inklusive Diagnosebericht und unverbindlichem Angebot."
      },
      {
        "title": "Unser Prozess",
        "desc": "Wir sind nach ISO 9001 und 14001 zertifiziert und stehen für professionellen Service auf höchstem Niveau."
      }
    ]
  },
  "videoSection": {
    "text": "Unser Unternehmensvideo zeigt Ihnen alles Wichtige über unseren Datenrettungsservice."
  },
  "steps": {
    "title": "3 Schritte zu Ihren Unternehmensdaten",
    "items": [
      {
        "step": "1",
        "title": "Kontakt & Diagnose",
        "desc": "Senden Sie uns Ihr Medium zur kostenlosen Diagnose. Verpacken Sie es sorgfältig, laden Sie das Versandformular herunter und legen Sie es bei. Versenden Sie das Medium sicher per DHL oder Kurierdienst."
      },
      {
        "step": "2",
        "title": "Datenübersicht",
        "desc": "Sie erhalten ein unverbindliches Angebot inkl. Online-Datenliste zur Übersicht. Nach Erhalt erhalten Sie eine persönliche Referenznummer. Nach Defektanalyse und Reparatur senden wir eine Übersicht der wiederherstellbaren Daten und ein Angebot."
      },
      {
        "step": "3",
        "title": "Rückversand Ihrer Daten",
        "desc": "Wir senden Ihre Unternehmensdaten auf einem neuen Medium zurück. Nach Zahlungseingang erhalten Sie Ihr Backup innerhalb von 24 Stunden per Sendungsverfolgung. Aus Sicherheitsgründen speichern wir eine Kopie 7 Tage lang und löschen sie danach."
      }
    ]
  }
},

  //  steps
    "steps_main_title": "Wie wir arbeiten?",
"steps_s1_title": "Bedarfsanalyse",
"steps_s1_desc": "Wir beginnen mit der Analyse Ihrer Anforderungen und Ihres Systems, um einen technischen Fahrplan zu erstellen, der auf Ihre Ziele abgestimmt ist.",
"steps_s2_title": "KI-Algorithmen entwickeln",
"steps_s2_desc": "Entwicklung und Feinabstimmung von KI- und Computer-Vision-Algorithmen, die speziell auf Ihren Anwendungsfall zugeschnitten sind.",
"steps_s3_title": "Auf Geräten bereitstellen",
"steps_s3_desc": "Betreiben Sie die Lösung auf dedizierten Geräten für sofortige Leistung und Echtzeit-Analyse direkt vor Ort.",
"steps_s4_title": "Live-Dashboards",
"steps_s4_desc": "Interaktive Dashboards, die betriebliche Transparenz mit Echtzeitstatistiken und Warnmeldungen bieten.",
// 
"legal_site_info": "Seiten-Info",
"legal_privacy": "Datenschutzerklärung",
"legal_cookies": "Cookie-Einstellungen",
"legal_terms": "Nutzungsbedingungen",
"legal_security": "Sicherheit",
"footer_all_rights": "Alle Rechte vorbehalten.",
// 
"chart_intro_title": "Von Kamera zur Entscheidung",
  "chart_intro_desc": "Verfolgen Sie den Datenweg von der Signalerfassung über Geräte, durch intelligente Analyse bis hin zu umsetzbaren Ergebnissen.",
"chart_item_1": "Fahrzeug- & Kennzeichenanalyse",
"chart_item_2": "Waffenerkennung",
"chart_item_3": "Unfallerkennung",
"chart_item_4": "Feuererkennung",
"chart_item_5": "Einzelhandelsanalyse",
"chart_step2_title": "KI-Erkennung & Datenverarbeitung",
"chart_step2_desc": "Intelligente Kameras identifizieren wichtige Ereignisse (Fahrzeuge, Bedrohungen, Demografie), während der sichere Server diese Daten sofort sammelt und für umsetzbare Erkenntnisse organisiert.",
"chart_step3_title": "Leicht lesbare Ergebnisse anzeigen",
"chart_step3_desc": "Sehen Sie klare Diagramme und Zahlen auf Ihrem Dashboard, um Einblicke zu gewinnen und bessere Geschäftsentscheidungen zu treffen.",
 

"contact_title": "Kontaktieren Sie uns",
"contact_subtitle": "Haben Sie eine Frage oder ein Projekt im Sinn? Lassen Sie uns besprechen, wie Innosentra Ihnen helfen kann, visuelle Daten in umsetzbare Erkenntnisse zu verwandeln.",
"contact_info_title": "Kontaktinformationen",
"contact_form_title": "Schicken Sie uns eine Nachricht",
"contact_label_name": "Vollständiger Name",
"contact_label_email": "E-Mail-Adresse",
"contact_label_phone": "Telefonnummer (Optional)",
"contact_label_message": "Ihre Nachricht",
"contact_placeholder_message": "Erzählen Sie uns von Ihrem Projekt oder Ihrer Anfrage...",
"contact_btn_send": "Nachricht senden",
"contact_btn_sending": "Wird gesendet...",
"contact_secure_text": "Ihre Informationen sind sicher und vertraulich",
"contact_success_msg": "Nachricht erfolgreich gesendet! Wir werden Sie bald kontaktieren.",
"contact_error_msg": "Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
"contact_phone": "Telefon",
"contact_email": "E-Mail",
// Validation
"val_name_min": "Der Name muss mindestens 2 Zeichen lang sein",
"val_name_req": "Name ist erforderlich",
"val_email_valid": "Geben Sie eine gültige E-Mail-Adresse ein",
"val_email_req": "E-Mail ist erforderlich",
"val_phone_valid": "Bitte geben Sie eine gültige Telefonnummer ein",
"val_msg_min": "Die Nachricht muss mindestens 10 Zeichen lang sein",
"val_msg_req": "Nachricht ist erforderlich",// بقية المفاتيح...

"gallery_label_people_counting": "Personenzählung & ReID",
"gallery_label_tracking": "Tracking-Beispiel",
"gallery_label_gender_age": "Geschlechts- & Altersklassifizierung",
"gallery_label_heatmap": "Filial-Heatmap",
"gallery_label_journey": "Kundenweg-Analyse",

// Retail Section
"retail_hero_title": "Innosentra Einzelhandelsanalyse",
"retail_hero_subtitle": "Verwandeln Sie Ihre Überwachungskameras in Ihren intelligentesten Geschäftsberater.",
"retail_analyze_label": "Was wir analysieren",
"retail_matters_label": "Warum es wichtig ist",

// Section 1
"retail_s1_title": "Intelligente Kundenanalyse",
"retail_s1_subtitle": "Verstehen Sie in Echtzeit, wer Ihre Kunden sind und wie sie sich verhalten.",
"retail_s1_f1": "Kundeninteraktionen nach Zeit und Tag",
"retail_s1_f2": "Klassifizierung Erwachsener vs. Kind",
"retail_s1_f3": "Geschlechteranalyse",
"retail_s1_f4": "Durchschnittliche Verweildauer",
"retail_s1_f5": "Schaufenster-Engagement vor dem Eintritt",
"retail_s1_f6": "Emotionsanalyse",
"retail_s1_i1": "Personalbesetzung und Betrieb optimieren",
"retail_s1_i2": "Wissen, was Ihre Kunden anzieht",
"retail_s1_i3": "Echtes Kundeninteresse verstehen",

// Section 2
"retail_s2_title": "Customer Journey & Heatmaps",
"retail_s2_subtitle": "Sehen Sie Ihr Geschäft mit den Augen Ihrer Kunden.",
"retail_s2_f1": "Hot- & Cold-Zone Heatmaps",
"retail_s2_f2": "Bereiche mit hoher Verweildauer",
"retail_s2_f3": "Kundenwege über mehrere Kameras",
"retail_s2_i1": "Ladenlayout verbessern",
"retail_s2_i2": "Produktplatzierung optimieren",
"retail_s2_i3": "Engagement und Konversion steigern",

// Section 3
"retail_s3_title": "Analyse-Dashboard",
"retail_s3_subtitle": "Alle Erkenntnisse werden über ein klares, intuitives Dashboard geliefert.",
"retail_s3_f1": "Echtzeit- und historische KPIs",
"retail_s3_f2": "Besuchertrends und Vergleiche",
"retail_s3_f3": "Visuelle Diagramme und Heatmaps",
"retail_s3_f4": "Alle Daten an einem Ort sehen",
"retail_s3_i1": "Schnellere Entscheidungsfindung",
"retail_s3_i2": "Klare Leistungsverfolgung",
"retail_s3_i3": "Daten, die jeder verstehen kann",

// Mobile App
"retail_mobile_title": "Analysen überall und jederzeit per mobiler App",
"retail_mobile_desc": "Greifen Sie direkt von Ihrem Mobilgerät auf alle Einzelhandelserkenntnisse zu. Die Anwendung konzentriert sich auf klare Datenvisualisierung ohne Komplexität.",
"retail_mobile_f1": "Live-Kundenanzahl und Trends",
"retail_mobile_f2": "Heatmaps und Journey-Visualisierungen",
"retail_mobile_f3": "Kartenbasierte Bewegungsverfolgung",
"retail_mobile_f4": "Einfache KPI-Ansichten für schnelle Entscheidungen",
"retail_mobile_f5": "Optimiert für Manager von unterwegs",

"gallery_reid": "Personenzählung & ReID",
"gallery_tracking": "Tracking-Beispiel",
"gallery_gender": "Geschlechts- & Altersklassifizierung",
"gallery_heatmap": "Filial-Heatmap",
"gallery_journey": "Kundenweg-Analyse",
"gallery_dashboard": "Haupt-Dashboard",
"gallery_report": "Bericht-Ansicht",



// Site Info Section
"site_info_title": "Seiteninformationen",
"site_info_about_title": "Über die INNOSENTRA-Plattform",
"site_info_about_text": "Innosentra ist ein weltweit führender Anbieter von KI-gestützten Analysen und intelligenten Überwachungslösungen. Diese Website dient als primäre digitale Schnittstelle für unsere Kunden in den Bereichen Einzelhandel, Bauwesen und Industrie. Unsere Mission ist es, Rohdaten durch modernste Computer-Vision-Technologie in umsetzbare Erkenntnisse zu verwandeln.",
"site_info_ownership_title": "Besitz und Betrieb",
"site_info_ownership_text": "Diese Website wird von der Innosentra Group besessen und betrieben. Alle Module, einschließlich 'Einzelhandelslösungen', 'Verkehrsanalysen' und 'Sicherheitssysteme', sind proprietäre Technologien, die von unseren internen Ingenieurteams entwickelt wurden.",
"site_info_tech_title": "Technische Spezifikationen",
"site_info_tech_text": "Die Plattform nutzt fortschrittliches WebGL zur Datenvisualisierung und sichere WebSocket-Protokolle für Echtzeit-Telemetrie. Wir unterstützen alle modernen Browser und bieten ein responsives Erlebnis für Mobil- und Tablet-Geräte.",


// Privacy Policy Section
"privacy_title": "Datenschutzerklärung",
"privacy_collection_title": "Datenerhebung",
"privacy_collection_text": "Wir sammeln Informationen, um allen unseren Nutzern bessere Dienste anzubieten. Dies umfasst Informationen, die Sie uns zur Verfügung stellen, wie Ihren Namen und Ihre E-Mail-Adresse.",
"privacy_usage_title": "Datennutzung",
"privacy_usage_text": "Wir verwenden die von uns gesammelten Daten, um unsere Dienste bereitzustellen, zu warten, zu schützen und zu verbessern.",

// Terms of Use Section
"terms_title": "Nutzungsbedingungen",
"terms_agreement_header": "Nutzervereinbarung",
"terms_agreement_text": "Durch den Zugriff auf diese Website erklären Sie sich damit einverstanden, an diese Nutzungsbedingungen der Website gebunden zu sein.",
"terms_license_header": "Lizenz",
"terms_license_text": "Es wird die Erlaubnis erteilt, vorübergehend eine Kopie der Materialien auf der Website von Innosentra ausschließlich für die persönliche Betrachtung herunterzuladen.",


// Cookies Section
"cookies_title": "Cookie-Einstellungen & Richtlinien",
"cookies_what_is_title": "Was sind Cookies?",
"cookies_what_is_desc": "Cookies sind kleine Textdateien, die von Websites, die Sie besuchen, auf Ihrem Computer abgelegt werden. Sie werden häufig verwendet, damit Websites effizienter funktionieren.",
"cookies_essential_title": "1. Essenzielle Cookies",
"cookies_essential_desc": "Diese sind für das ordnungsgemäße Funktionieren der Website erforderlich und können nicht abgeschaltet werden.",
"cookies_analytical_title": "2. Analytische Cookies",
"cookies_analytical_desc": "Sie ermöglichen es uns, die Anzahl der Besucher zu erkennen und zu zählen und zu sehen, wie sie sich auf der Website bewegen.",


// Security Info Section
"security_info_title": "Sicherheitsstandards",
"security_info_protection_header": "Datenschutz",
"security_info_protection_text": "Wir setzen Verschlüsselung nach Industriestandard ein, um sicherzustellen, dass Ihre Daten während der Übertragung und im Ruhezustand sicher sind.",

// Traffic Section
"traffic_hero_title": "Intelligenter Verkehr & Parken: Ein integriertes Managementsystem",
"traffic_hero_subtitle": "Wir verwandeln gewöhnliche Überwachungskameras in intelligente elektronische Augen, die öffentliche Straßen, Gebäude und Parkplätze analysieren.",
"traffic_section_title": "Intelligente Verkehrsflussanalyse",
"traffic_section_subtitle": "Wir bieten ein intelligentes, benutzerfreundliches System, das die Straßenaktivität automatisch analysiert und Parkplätze effizient und autonom verwaltet.",
"traffic_track_label": "Was wir erfassen",
"traffic_matters_label": "Warum ist das wichtig?",

// Features
"traffic_f1": "Automatische Fahrzeugzählung auf Straßen und in Parkhäusern.",
"traffic_f2": "Vollautomatische Steuerung von Ein- und Ausfahrtsschranken ohne menschliches Eingreifen.",
"traffic_f3": "Echtzeitinformationen über freie und verfügbare Parkplätze.",
"traffic_f4": "Sofortige Erkennung von Verkehrsstaus und blockierten Straßen.",
"traffic_f5": "Automatische Nummernschilderkennung an Schranken und auf Straßen.",

// Importance
"traffic_i1": "Ermöglicht Fahrern eine schnellere und stressfreie Parkplatzsuche.",
"traffic_i2": "Gewährleistet einen reibungslosen Verkehrsfluss beim Ein- und Ausfahren.",
"traffic_i3": "Sorgt für mehr Sicherheit und Schutz für Fahrer und Fußgänger.",

// Industry Section
"industry_hero_title": "Industrielle KI-Vision: Eine Revolution in der Qualitätskontrolle",
"industry_hero_subtitle": "Wir sichern die Produktionsqualität durch vollautomatische Inspektionssysteme für moderne Fabriken und Industrieanlagen.",
"industry_section_title": "Präzise automatische Inspektionssysteme",
"industry_section_subtitle": "Wir streben eine fehlerfreie Fertigung durch den Einsatz von optischen Hochgeschwindigkeits-Verarbeitungstechnologien an.",
"industry_analyze_label": "Was wir analysieren",
"industry_matters_label": "Warum ist das wichtig?",
"industry_a1": "Erkennung von Defekten, Verunreinigungen und Kratzern auf Materialoberflächen.",
"industry_a2": "Überprüfung der korrekten Montage und Vollständigkeit von Teilen.",
"industry_a3": "Sicherstellung der Genauigkeit und Unversehrtheit der Produktverpackung.",
"industry_a4": "Automatisches Sortieren und Klassifizieren von Produkten nach bestimmten Kriterien.",
"industry_m1": "Reduziert Materialverschwendung und Ausschuss erheblich.",
"industry_m2": "Führt zu einer spürbaren Steigerung der Produktivität und Betriebseffizienz.",
"industry_m3": "Hilft langfristig bei der Senkung der Betriebskosten.",

// Security Section
"security_hero_title": "Fortschrittliche intelligente Überwachungssysteme",
"security_hero_subtitle": "Wir bieten effektive, autonome Sicherheitslösungen für kritische Infrastrukturen.",
"security_section_title": "Proaktive intelligente Bedrohungserkennung",
"security_section_subtitle": "Der Übergang von der passiven Aufzeichnung zur proaktiven Vorbeugung von Vorfällen in Echtzeit.",
"security_cap_label": "Kernkompetenzen",
"security_val_label": "Geschäftlicher & Sicherheitstechnischer Wert",
"security_c1": "Gesichtserkennungstechnologie und Personenidentifizierung.",
"security_c2": "Erkennung von Eindringlingen und unbefugtem Zutritt in Sperrbereiche.",
"security_c3": "Sofortige Warnungen bei Erkennung verdächtiger zurückgelassener Gegenstände.",
"security_c4": "Analyse von Herumlungern und abnormalen Bewegungen.",
"security_v1": "Bietet eine automatisierte Überwachung rund um die Uhr.",
"security_v2": "Verkürzt die Reaktionszeit auf Vorfälle und Sicherheitsbedrohungen erheblich.",
"security_v3": "Bietet bei Bedarf schnellen und einfachen Zugriff auf hochauflösende Aufnahmen.",

// Construction Section
"construction_hero_title": "Verbesserung der Sicherheit auf Baustellen",
"construction_hero_subtitle": "Schutz der Arbeitskräfte durch fortschrittliche KI-Vision-Technologien.",
"construction_section_title": "Automatische Einhaltung von Sicherheitsprotokollen",
"construction_section_subtitle": "Gewährleistung der strikten und automatischen Einhaltung von Sicherheitsvorschriften vor Ort.",
"construction_site_label": "Was wir überwachen",
"construction_benefit_label": "Hauptvorteile",
"construction_s1": "Automatische Erkennung der PSA-Einhaltung (Helme, Warnwesten).",
"construction_s2": "Kontinuierliche Überwachung von Gefahrenzonen und Warnung bei Annäherung.",
"construction_s3": "Sofortige Warnungen bei Stürzen von Arbeitern oder Unfällen.",
"construction_s4": "Überwachung der Interaktionen zwischen Arbeitern und schweren Maschinen.",
"construction_b1": "Führt zu weniger Unfällen und Verletzungen auf der Baustelle.",
"construction_b2": "Gewährleistet die vollständige Einhaltung gesetzlicher Vorschriften.",
"construction_b3": "Ermöglicht Projektleitern die Fernüberwachung des Arbeitsablaufs und der Sicherheit.",

"contact_email_value":"manar.bakro@innosentra.com",
  "contact_phone_value":"0049 163 997 0059",
"contact_address": "Adresse",
  "contact_address_line1": "Georgstr. 47",
  "contact_address_line2": "51145 Köln",
  "contact_address_line3": "Deutschland",


  "software_hero_title": "Integrierte Softwaretechnik & Intelligente Systeme",
      "software_hero_subtitle": "Wir bieten einen vollständigen Softwareentwicklungszyklus (SDLC), beginnend bei komplexer Algorithmen-Entwicklung und massiver Datenbankarchitektur (SQL & NoSQL) bis hin zu High-End Web- und Mobile-Apps sowie sicherem Deployment und Cloud-Hosting.",
      
      "software_section_title": "Technische Exzellenz in jeder Codezeile",
      "software_section_subtitle": "Unser Team verbindet die Präzision mathematischer Algorithmen mit der Eleganz von UI/UX, mit striktem Fokus auf Leistung, Sicherheit und Skalierbarkeit.",
      
      "software_col1_label": "Technische Kernkompetenzen",
      "software_col2_label": "Infrastruktur & Qualitätssicherung",

      // List 1
      "software_c1": "Full-Stack Webentwicklung & Professionelle Mobile Apps",
      "software_c2": "Komplexe Datenbankarchitektur & Big Data Management",
      "software_c3": "Entwicklung intelligenter Algorithmen & Datenstrukturen",
      "software_c4": "API-Integration & Microservices-Architektur",
      
      // List 2
      "software_c5": "Automatisierte Bereitstellung (CI/CD), Server & Cloud-Hosting",
      "software_c6": "Softwaretests (QA), Leistungs- & Qualitätssicherung",
      "software_c7": "Datenanalyse, Reporting & Business Intelligence",
      "software_c8": "Systemsicherheit, Datenschutz & Verschlüsselung",

      // معلومات الديمو 

      "demo_button": "Demo anfordern",
      "hero_products_button": "Produkte ansehen",
      "demo_btn_request": "Individuelle Demo anfordern",
"demo_page_title": "System-Demo anfordern",
"demo_page_subtitle": "Bitte geben Sie Details zu Ihrer Umgebung und den gewünschten Spezifikationen an, damit wir eine auf Ihre Bedürfnisse zugeschnittene Demo entwerfen können.",
"demo_label_company": "Name des Unternehmens",
"demo_label_industry": "Branche (Einzelhandel, Verkehr..)",
"demo_label_reqs": "Erforderliche Spezifikationen & Daten",
"demo_placeholder_reqs": "Z.B.: Anzahl der Kameras, Art der zu analysierenden Daten, das Problem, das Sie lösen möchten...",
"demo_btn_submit": "Demo-Anfrage senden",
"val_company_req": "Firmenname ist erforderlich",
"val_industry_req": "Branche ist erforderlich",
"val_req_req": "Bitte geben Sie einige Details für die Demo an",

"nav_agriculture": "Landwirtschaft",
  "nav_products": "Produkte",
  "agriculture_hero_title": "KI in der Landwirtschaft",
  "agriculture_hero_subtitle": "Verbesserung der modernen Landwirtschaft mit intelligenten Computer-Vision-Lösungen für die Pflanzenanalyse und Ertragssteigerung.",
  "agriculture_section_title": "Intelligentes Pflanzenmanagement",
  "agriculture_section_subtitle": "Nutzen Sie die Leistungsfähigkeit der KI, um landwirtschaftliche Flächen mit hoher Präzision zu überwachen und datengesteuerte Entscheidungen in Echtzeit zu treffen.",
  "agriculture_track_label": "Wichtige Anwendungen",
  "agriculture_f1": "Genaue und automatisierte Baumzählung auf großen Feldern",
  "agriculture_f2": "Früherkennung von Pflanzenkrankheiten und Schädlingen",
  "agriculture_f3": "Umfassende Analyse der Pflanzengesundheit",
  "agriculture_f4": "Ertragsschätzung und -prognose",
  "agriculture_f5": "Optimierung der Ressourcenverwaltung (Wasser und Dünger)",
  "agriculture_matters_label": "Warum ist das wichtig?",
  "agriculture_i1": "Frühzeitiges Eingreifen zum Schutz der Pflanzen und zur Reduzierung von Verlusten",
  "agriculture_i2": "Maximierung der Ernteerträge bei minimierten Kosten",
  "agriculture_i3": "Zeit- und Arbeitsersparnis bei der Feldvermessung",
  "products_title": "Edge-AI-Analysegerat fur den Einzelhandel",
  "products_subtitle": "Ein intelligentes Gerat, das Kameradaten lokal verarbeitet, um Datenschutz zu sichern und Internetverbrauch zu reduzieren - mit einem zentralen Dashboard fur volle Transparenz.",
  "products_no_cloud": "0% Cloud-Dienste",
  "products_hw_title": "Hardware: Edge-AI-Gerät pro Filiale",
  "products_hw_desc": "Das Gerät verarbeitet Kameradaten lokal am Edge, um Datenübertragung zu minimieren, die Privatsphäre zu schützen und den Internetverbrauch zu reduzieren—bei schnellen Reaktionszeiten.",
  "products_hw_f1": "On-Device-Verarbeitung ohne Übertragung von Rohmaterial",
  "products_hw_f2": "Edge AI für Analyse mit geringer Latenz in Echtzeit",
  "products_hw_f3": "Gerätegröße passend zu Kamerazahl & Projektumfang",
  "products_hw_f4": "Kompatibel mit bestehenden Kameras (Datenschutz by Design)",
  "products_hw_f5": "Für den Filialbetrieb gebaut: schnelle Installation",
  "products_sw_title": "Software: Einheitliches Dashboard & smarte Analytik",
  "products_sw_desc": "Wir machen aus Analyseergebnissen umsetzbare KPIs, Heatmaps und konfigurierbare Warnungen—für alle Filialen an einem Ort.",
  "products_image_alt": "Produktbild",
  "products_section_value_title": "Welchen Mehrwert bietet das Produkt?",
  "products_section_value_desc": "Wir verwandeln Ihre vorhandenen Kameras in ein vollstandiges Analysesystem, das Kundenverhalten in Echtzeit auswertet und in klare Kennzahlen uberfuhrt. Die GerategroBe wird an das Projektvolumen angepasst. Fur Filialketten liefern wir pro Standort ein Gerat und bundeln alle Daten in einem gemeinsamen Dashboard.",
  "products_kpi_title": "Wichtige Kennzahlen im Uberblick",
  "products_kpi_visitors": "Anzahl von Besuchern und Kunden fur frei wahlbare Zeitraume.",
  "products_kpi_age": "Auswertung der Altersgruppen.",
  "products_kpi_gender": "Geschlechterverteilung: mannlich und weiblich.",
  "products_kpi_dwell": "Durchschnittliche Verweildauer und Kaufdauer.",
  "products_kpi_purchase": "Anzahl der Kaufer im Vergleich zu Nichtkaufern.",
  "products_kpi_sentiment": "Kundenzufriedenheit durch Analyse von Gesichtsemotionen.",
  "products_kpi_heatmap": "Heatmaps zur Erkennung von Hotspots und Stauzonen im Store.",
  "products_ops_title": "Intelligente Warnungen + technischer Support",
  "products_ops_desc": "Wir richten individuelle Warnregeln nach Ihren Anforderungen ein und ubernehmen die technische Begleitung, besonders in der Startphase, mit kontinuierlichem Support.",
  "products_alert_cashier": "Warnung bei Uberlastung im Kassenbereich.",
  "products_alert_afterhours": "Sofortwarnung bei unbefugtem Zutritt nach Ladenschluss.",
  "products_alert_custom": "Flexible, vollstandig anpassbare Warnszenarien.",

  "nav_product_edge_analytics": "Edge AI Analysegerät",
  "nav_product_surveillance_tower": "Überwachungsturm",
  "surveillance_title": "Überwachungsturm für Baustellen",
  "surveillance_subtitle": "Unabhängige intelligente Überwachungseinheit",
  "surveillance_desc": "Eine Komplettlösung zum Schutz von Baustellen und Infrastrukturen mit sofortigen Warnungen und intelligenter Überwachung rund um die Uhr.",
  "surveillance_f1": "Unabhängige Überwachungseinheit für Baustellen, Infrastrukturprojekte und temporäre Standorte.",
  "surveillance_f2": "Notfallwarnungen bei jedem Vorfall.",
  "surveillance_f3": "Rund-um-die-Uhr-Überwachung (24/7).",
  "surveillance_f4": "Preise basierend auf der Mietdauer.",
  "surveillance_f5": "Betrieb über Batterien oder direkte Stromversorgung – flexibel für Standorte ohne Strom.",
  "surveillance_f6": "Hohes Design, um Manipulationen oder unbefugten Zugriff zu verhindern.",
  "surveillance_f7": "Vandalismussicher und anpassbar, bietet eine kostengünstige Lösung für Standorte jeder Größe.",
  "surveillance_f8": "Schnelle Bereitstellung – kann innerhalb weniger Stunden eingerichtet werden.",
  "surveillance_f9": "Warnungen können je nach Szenario durch Menschen oder Tiere ausgelöst werden.",
  "surveillance_f10": "Sofortige und äußerst flexible Alarme.",
  "surveillance_f11": "Robustes, wetterfestes Gehäuse (IP67).",
  "surveillance_f12": "Nachtsichtfunktionen.",

  "nav_product_home_monitor": "Heimmonitor",
  "home_monitor_title": "Intelligenter Heimmonitor",
  "home_monitor_subtitle": "Intelligenter, maßgeschneiderter Schutz für Sicherheit rund um die Uhr",
  "home_monitor_desc": "Erleben Sie maximale Sicherheit mit unserem fortschrittlichen Überwachungssystem. Es gibt Ihnen die volle Kontrolle über den Schutz Ihrer Räumlichkeiten, mit intelligenten Optionen zur Anpassung der Betriebszeiten und Priorisierung von Alarmen passend zu Ihrem Lebensstil.",
  "home_monitor_f1": "Intelligente Zeitplanung: Legen Sie die Aktivitätszeiten des Geräts (z. B. während der Arbeit oder beim Schlafen) genau fest und wählen Sie Ihre wichtigsten Alarme aus.",
  "home_monitor_f2": "Sofortige Benachrichtigungen: Bleiben Sie mit Echtzeit-Alarmen direkt auf Ihrem Gerät über ungewöhnliche Aktivitäten informiert.",
  "home_monitor_f3": "Erweiterte Erkennung: Die intelligente Unterscheidung zwischen Menschen und Haustieren minimiert Fehlalarme.",
  "home_monitor_f4": "Nahtlose mobile Integration: Verwalten und steuern Sie Ihr System ganz einfach von überall über die mobile App.",
  "home_monitor_f5": "Präzise 24/7-Überwachung der Räumlichkeiten.",
  "home_monitor_f6": "Hohe Flexibilität bei individuellen Anfragen.",
  "home_monitor_f7": "Geräteabmessungen: klein, 95 mm * 66 mm."
  
}
  }
};
const savedLanguage = localStorage.getItem('userLanguageChoice');

i18n
  .use(initReactI18next)
  .init({
    resources,
    // إذا كان هناك لغة محفوظة، نستخدمها، وإلا الإنجليزية كبداية (سيتم التحقق من الـ IP لاحقاً)
    lng: savedLanguage || 'en', 
    fallbackLng: "en",
    interpolation: { 
      escapeValue: false 
    }
  });

// نطبق اتجاه الصفحة فوراً عند بدء التشغيل إذا كانت اللغة محفوظة



// --- 3. خدمة اللغة (Named Export) ---
// هذا الكائن يحتوي على كل الوظائف التي تحتاجها App.js و Navbar
// دمجنا المنطق هنا لضمان عدم حدوث أخطاء استيراد

export const languageService = {
  /**
   * الدالة الرئيسية التي يتم استدعاؤها في App.js عند تحميل الموقع
   */
async detectAndApply() {
    console.log('🔄 Starting detection logic...');

    // 1. الأولوية القصوى: هل اختار المستخدم لغة سابقاً؟ (يدوي)
    const storedLang = localStorage.getItem('userLanguageChoice');
    if (storedLang) {
      console.log('✅ Found stored user preference:', storedLang);
      this.changeLanguage(storedLang, false); // false = لا تحفظ مرة أخرى لأنها محفوظة
      return storedLang;
    }

    // 2. هل قمنا بالكشف التلقائي في هذه الجلسة من قبل؟ (لتوفير طلبات السيرفر)
    const sessionLang = sessionStorage.getItem('autoDetectedSession');
    if (sessionLang) {
       console.log('⚡ Using session cached detection:', sessionLang);
       this.changeLanguage(sessionLang, false); 
       return sessionLang;
    }

    console.log('🌍 Checking IP for location (First time)...');
    
    let detectedLang = 'en'; // قيمة افتراضية
    let countryCode = 'US';

    try {
      // محاولة 1: خدمة ipapi.co
      const response = await fetch('https://ipapi.co/json/');
      if (response.ok) {
        const data = await response.json();
        countryCode = data.country_code;
        console.log('📍 IP Service 1 (ipapi.co) detected:', countryCode);
      } else {
        throw new Error('Service 1 failed');
      }
    } catch (e1) {
      console.warn('⚠️ Service 1 failed, trying Service 2...');
      try {
        // محاولة 2: خدمة ip-api.com (احتياطية)
        const response2 = await fetch('http://ip-api.com/json/'); // ملاحظة: قد لا تعمل على https في بعض الأحيان لذا الحذر
        if (response2.ok) {
             const data2 = await response2.json();
             countryCode = data2.countryCode;
             console.log('📍 IP Service 2 (ip-api) detected:', countryCode);
        }
      } catch (e2) {
        console.warn('❌ Both IP services failed. Falling back to browser.');
      }
    }

    // خريطة الدول
    const countryMap = {
      'SY': 'ar', 'LB': 'ar', 'JO': 'ar', 'SA': 'ar', 'AE': 'ar', 
      'QA': 'ar', 'KW': 'ar', 'BH': 'ar', 'OM': 'ar', 'EG': 'ar', 'TR': 'ar',
      'DE': 'de', 'AT': 'de', 'CH': 'de'
    };

    // تحديد اللغة بناءً على الدولة
    if (countryMap[countryCode]) {
        detectedLang = countryMap[countryCode];
    } else {
        // 3. إذا فشل الـ IP أو الدولة غير موجودة -> نستخدم لغة المتصفح
        const browserLang = navigator.language || navigator.userLanguage || 'en';
        console.log('💻 Checking Browser Language:', browserLang);
        
        if (browserLang.startsWith('ar')) detectedLang = 'ar';
        else if (browserLang.startsWith('de')) detectedLang = 'de';
    }

    console.log(`🎯 Final Decision: ${detectedLang}`);

    // تطبيق اللغة
    await this.changeLanguage(detectedLang, false);
    
    // حفظ في الجلسة فقط (ليس التخزين الدائم) لكي لا نعيد الطلب كل مرة نعمل ريفريش
    sessionStorage.setItem('autoDetectedSession', detectedLang);
    
    return detectedLang;
  },

  /**
   * دالة تغيير اللغة وتطبيق الاتجاه
   */
  async changeLanguage(lang, isUserChoice = true) {
    // 1. تغيير اللغة في i18n
    await i18n.changeLanguage(lang);
    
    // 2. تحديث الاتجاه (HTML Dir)
  

    // 3. حفظ الاختيار (فقط إذا كان اختيار المستخدم يدوياً)
    if (isUserChoice) {
        console.log('💾 Saving user choice to localStorage:', lang);
        localStorage.setItem('userLanguageChoice', lang);
        localStorage.removeItem('autoDetectedLanguage'); // تنظيف
    }

    return lang;
  },

  getLanguageSource() {
    if (localStorage.getItem('userLanguageChoice')) return 'manual';
    return 'auto';
  },

  getAvailableLanguages() {
    return ['en', 'de', 'ar'];
  }
};

// Default Export
export default i18n;
=======
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import intelligentDetector from "./services/intelligentDetector";

const resources = {
    // i18n.js

ar: {
  translation: {
    "learn_more":"تعرف أكثر",
    "nav_home": "الرئيسية",
    "nav_about": "من نحن",
    "nav_solutions": "حلولنا",
    "nav_contact": "اتصل بنا",
    "nav_supermarket": "السوبر ماركت",
    "nav_traffic": "حركة المرور",
    "nav_security": "الأمن",
    "nav_industry": "الصناعة",
    "nav_construction": "مواقع البناء",
    "lang_en": "English",
    "lang_de": "Deutsch",
    "lang_ar": "العربية",
    "about_title": "من نحن",
    "about_desc": "مع أكثر من 15 عاماً من الخبرة في الحلول التقنية، Innosentra هي شركة متخصصة في الرؤية الحاسوبية والذكاء الاصطناعي، تقدم رؤى قابلة للتنفيذ من البيانات المرئية. تتكامل حلولنا مع أنظمة الكاميرات الحالية، وتحترم الخصوصية، وتدعم اتخاذ قرارات أذكى في قطاعات التجزئة والأمن وغيرها.",
    "hero_title": "حلول برمجية مدعومة بالذكاء الاصطناعي",
    "hero_subtitle": "تحويل البيانات المرئية إلى رؤى تجارية قابلة للتنفيذ من خلال هندسة البرمجيات المتقدمة. نحن متخصصون في الذكاء الاصطناعي والتعلم الآلي، أنظمة الرؤية الحاسوبية، تطوير تطبيقات الويب والجوال، وهندسة قواعد البيانات.",
    
    // offer
    "offer_main_title": "ماذا نقدم؟",
    "offer_sol1_title": "هندسة الذكاء الاصطناعي والتعلم العميق",
    "offer_sol1_desc": "نقوم ببناء وتدريب نماذج تعلم عميق مخصصة لمهام الكشف والتعرف بدقة عالية",
    "offer_sol2_title": "الرؤية الحاسوبية المتقدمة",
    "offer_sol2_desc": "من التعرف على الأشخاص عبر كاميرات متعددة إلى تتبع الأجسام المعقدة، نقدم تحليلاً مرئياً متطوراً",
    "offer_sol3_title": "تحليل البيانات ولوحات العرض",
    "offer_sol3_desc": "يتم تحويل بث الفيديو الخام إلى مؤشرات أداء رئيسية (KPIs) وعرضها على لوحات تحكم فورية وبديهية",
    "offer_sol4_title": "حلول تطوير البرمجيات",
    "offer_sol4_desc": "تطوير شامل لتطبيقات الويب والجوال مع بنية قواعد بيانات قوية، من المفهوم إلى التنفيذ",

    "solutions_section_title": "استكشف حلولنا",
    "solution_retail_title": "حلول التجزئة والسوبر ماركت",
    "solution_retail_desc": "تحليلات التجزئة الذكية، عد الأشخاص، ورؤى حول سلوك المتسوقين داخل المتجر",
    "solution_traffic_title": "المرور والمواقف الذكية",
    "solution_traffic_desc": "مراقبة تدفق حركة المرور، إدارة المواقف، وتحليلات المركبات",
    "solution_security_title": "الأمن والمراقبة",
    "solution_security_desc": "كشف التهديدات في الوقت الفعلي، تنبيهات التسلل، والمراقبة المؤتمتة",
    "solution_industry_title": "الرؤية الصناعية",
    "solution_industry_desc": "الفحص الآلي،العد الدقيق، ضمان الجودة، وتحسين العمليات ",
    "solution_construction_title": "مراقبة مواقع البناء",
    "solution_construction_desc": "سلامة العمال، الامتثال لمعدات الوقاية الشخصية، ومراقبة نشاط الموقع",
    "solution_data_recovery_title": "استعادة البيانات",
    "solution_data_recovery_desc": "استعادة احترافية لبيانات الأقراص التالفة بنسبة نجاح 92.5%.",

    "dataRecovery": {
      "title": "استعادة البيانات",
      "menuItem": "استعادة البيانات",
      "shortDescription": "استعادة احترافية لبيانات الأقراص التالفة بنسبة نجاح 92.5%.",
      "hero": {
        "headline": "القرص الصلب تعطل؟ نحن هنا للمساعدة!",
        "subheadline": "خبراء في استرجاع وإعادة بناء بيانات الأقراص الصلبة.",
        "description": "نقدم خدمة تشخيص مجانية وبدون التزام على مدار 24/7. ستحصل على نظرة عامة للبيانات القابلة للاستعادة، وتقرير تشخيص، وعرض سعر غير ملزم قبل الموافقة على الاستعادة. نسبة نجاحنا 92.5%.",
        "processText": "باستخدام عمليات استعادة مطورة خصيصًا، وتقنيات حديثة، وخبرة طويلة، نحن متخصصون في أعطال الأقراص الصلبة. نحقق نسبة نجاح مميزة 92.5% ونعيد بناء بياناتك بسرعة وكفاءة."
      },
      "defects": {
        "title": "الأعطال الشائعة في الأقراص الصلبة",
        "items": [
          {
            "name": "تلف المحرك",
            "desc": "أعطال المحرك تمنع القرص من الدوران. يحدث ذلك غالبًا بسبب ضرر مادي مثل سقوط القرص."
          },
          {
            "name": "تلف إلكتروني",
            "desc": "يظهر غالبًا في لوحات الدارات المسؤولة عن وظائف القرص. من أسبابه تعطل المكونات أو الصدمات أو ارتفاعات الكهرباء."
          },
          {
            "name": "تعطل رأس القراءة",
            "desc": "يشير إلى فشل رؤوس القراءة/الكتابة الداخلية بسبب التآكل الطبيعي أو الصدمات أو دخول الغبار والجسيمات."
          },
          {
            "name": "خلل البرنامج الثابت",
            "desc": "البرنامج الثابت هو برنامج مدمج في القرص. تعطله قد يؤدي إلى عطل أو فشل كامل مع أعراض مشابهة لتعطل الرأس أو تلف المحرك."
          },
          {
            "name": "تلف منطقي",
            "desc": "لا ينتج عن ضرر مادي: تعمل مكونات القرص لكن الوصول المنطقي للبيانات يتعطل. يشمل ذلك مشاكل RAID1 أو تلف البرامج أو الأقراص المُهيأة."
          }
        ]
      },
      "howItWorks": {
        "title": "كيف تعمل استعادة بيانات القرص الصلب؟",
        "description": "بحسب نوع الضرر، نستخدم طرقًا وعمليات قراءة مختلفة. يوفّر مهندسونا المدربون وتجهيزاتنا الحديثة أفضل أساس مهني لاستعادة بيانات الأعمال. نمتلك الخبرة والمعدات اللازمة لاسترجاع بيانات شركتكم بسرعة وكفاءة وبتكلفة مناسبة. تواصلوا معنا للحصول على عرض غير ملزم عبر الهاتف أو البريد الإلكتروني."
      },
      "whyUs": {
        "title": "لماذا تختارنا؟",
        "items": [
          {
            "title": "معداتنا",
            "desc": "من أدوات اللحام إلى مختبرات الغرف النظيفة - نمتلك تجهيزات حديثة ومتطورة."
          },
          {
            "title": "خبرتنا",
            "desc": "قمنا بتشخيص أكثر من 140,000 وسيط تخزين بمختلف الأنواع."
          },
          {
            "title": "التشخيص المجاني",
            "desc": "نقدم تشخيصًا مجانيًا خلال 24-48 ساعة مع تقرير تشخيص وعرض سعر غير ملزم."
          },
          {
            "title": "منهجيتنا",
            "desc": "نحن حاصلون على شهادتي ISO 9001 و14001، ما يعكس جودة خدمتنا الاحترافية."
          }
        ]
      },
      "videoSection": {
        "text": "فيديو الشركة يوضح لك كل ما تحتاج معرفته عن خدمة استعادة البيانات لدينا."
      },
      "steps": {
        "title": "3 خطوات لاستعادة بيانات أعمالك",
        "items": [
          {
            "step": "1",
            "title": "التواصل والتشخيص",
            "desc": "أرسل إلينا وسيط التخزين لتشخيص مجاني. قم بتغليف الوسيط بعناية، وحمّل نموذج الشحن وأرفقه مع الشحنة، ثم أرسله بشكل آمن عبر DHL أو خدمة شحن سريعة."
          },
          {
            "step": "2",
            "title": "مراجعة البيانات",
            "desc": "ستتلقى عرضًا غير ملزم مع قائمة بيانات عبر الإنترنت. بعد الاستلام تحصل على رقم مرجعي شخصي، وبعد تحديد العطل وإصلاحه نرسل لك نظرة عامة على البيانات القابلة للاستعادة مع عرض السعر."
          },
          {
            "step": "3",
            "title": "إعادة شحن بياناتك",
            "desc": "نعيد بيانات أعمالك عبر نقل البيانات المستعادة إلى وسيط جديد. بعد استلام الدفع ستتلقى النسخة الاحتياطية خلال 24 ساعة بشحن قابل للتتبع. ولأسباب أمنية نحتفظ بنسخة لمدة 7 أيام ثم نحذفها."
          }
        ]
      }
    },

    // steps
    "steps_main_title": "كيف نعمل؟",
    "steps_s1_title": "تحليل الاحتياجات",
    "steps_s1_desc": "نبدأ بتحليل احتياجاتك ونظامك لرسم خارطة طريق تقنية تتماشى مع أهدافك.",
    "steps_s2_title": "بناء خوارزميات الذكاء الاصطناعي",
    "steps_s2_desc": "بناء وضبط خوارزميات الذكاء الاصطناعي والرؤية الحاسوبية المصممة خصيصاً لحالتك.",
    "steps_s3_title": "النشر على الأجهزة",
    "steps_s3_desc": "تشغيل الحل على أجهزة مخصصة للحصول على أداء فوري وتحليل مباشر في موقعك.",
    "steps_s4_title": "لوحات عرض مباشرة",
    "steps_s4_desc": "لوحات تحكم تفاعلية توفر رؤية تشغيلية مع إحصائيات وتنبيهات فورية.",

    // legal
    "legal_site_info": "معلومات الموقع",
    "legal_privacy": "سياسة الخصوصية",
    "legal_cookies": "إعدادات الكوكيز",
    "legal_terms": "شروط الاستخدام",
    "legal_security": "الأمن",
    "footer_all_rights": "جميع الحقوق محفوظة.",

    "chart_intro_title": "من الكاميرا إلى القرار",
  "chart_intro_desc": "تتبع مسار البيانات من لحظة التقاط الإشارة عبر الأجهزة، مروراً بالتحليل الذكي، وصولاً إلى النتائج القابلة للتنفيذ.",
    "chart_item_1": "تحليل المركبات واللوحات",
    "chart_item_2": "كشف الأسلحة",
    "chart_item_3": "كشف الحوادث",
    "chart_item_4": "كشف الحرائق",
    "chart_item_5": "تحليلات التجزئة",
    "chart_step2_title": "كشف الذكاء الاصطناعي ومعالجة البيانات",
    "chart_step2_desc": "تحدد الكاميرات الذكية الأحداث الرئيسية (مركبات، تهديدات، ديموغرافيا)، بينما يجمع الخادم الآمن البيانات وينظمها فوراً",
    "chart_step3_title": "عرض نتائج سهلة القراءة",
    "chart_step3_desc": "شاهد رسوماً بيانية وأرقاماً واضحة على لوحة التحكم للحصول على رؤى واتخاذ قرارات أفضل",

    "contact_title": "اتصل بنا",
    "contact_subtitle": "لديك سؤال أو مشروع؟ دعنا نناقش كيف يمكن لـ Innosentra مساعدتك في تحويل البيانات المرئية إلى رؤى.",
    "contact_info_title": "معلومات الاتصال",
    "contact_form_title": "أرسل لنا رسالة",
    "contact_label_name": "الاسم الكامل",
    "contact_label_email": "البريد الإلكتروني",
    "contact_label_phone": "رقم الهاتف (اختياري)",
    "contact_label_message": "رسالتك",
    "contact_placeholder_message": "أخبرنا عن مشروعك أو استفسارك...",
    "contact_btn_send": "إرسال الرسالة",
    "contact_btn_sending": "جاري الإرسال...",
    "contact_secure_text": "معلوماتك آمنة وسرية للغاية",
    "contact_success_msg": "تم إرسال الرسالة بنجاح! سنتواصل معك قريباً.",
    "contact_error_msg": "فشل إرسال الرسالة. يرجى المحاولة مرة أخرى.",
    "contact_phone": "الهاتف",
    "contact_email": "البريد الإلكتروني",

    // Validation
    "val_name_min": "يجب أن يكون الاسم حرفين على الأقل",
    "val_name_req": "الاسم مطلوب",
    "val_email_valid": "أدخل بريداً إلكترونياً صحيحاً",
    "val_email_req": "البريد الإلكتروني مطلوب",
    "val_phone_valid": "يرجى إدخال رقم هاتف صحيح",
    "val_msg_min": "يجب أن تكون الرسالة 10 أحرف على الأقل",
    "val_msg_req": "الرسالة مطلوبة",

    "gallery_label_people_counting": "عد الأشخاص والتعرف عليهم",
    "gallery_label_tracking": "مثال على التتبع",
    "gallery_label_gender_age": "تصنيف الجنس والعمر",
    "gallery_label_heatmap": "الخريطة الحرارية للمتجر",
    "gallery_label_journey": "رحلة العميل",

    // Retail Section
    "retail_hero_title": "تحليلات Innosentra للتجزئة",
    "retail_hero_subtitle": "حوّل كاميرات المراقبة إلى أذكى مستشار لأعمالك.",
    "retail_analyze_label": "ماذا نحلل؟",
    "retail_matters_label": "لماذا هذا مهم؟",

    // Section 1
    "retail_s1_title": "تحليلات العملاء الذكية",
    "retail_s1_subtitle": "افهم من هم عملاؤك وكيف يتصرفون في الوقت الفعلي.",
    "retail_s1_f1": "عد العملاء حسب الوقت واليوم",
    "retail_s1_f2": "تصنيف (بالغ ضد طفل)",
    "retail_s1_f3": "تحليل الجنس",
    "retail_s1_f4": "متوسط وقت البقاء",
    "retail_s1_f5": "التفاعل مع واجهة المحل قبل الدخول",
    "retail_s1_f6": "تحليل المشاعر",
    "retail_s1_i1": "تحسين توزيع الموظفين والعمليات",
    "retail_s1_i2": "معرفة ما يجذب عملائك",
    "retail_s1_i3": "فهم الاهتمام الحقيقي للعملاء",

    // Section 2
    "retail_s2_title": "رحلة العميل والخرائط الحرارية",
    "retail_s2_subtitle": "شاهد متجرك من خلال عيون عملائك.",
    "retail_s2_f1": "خرائط حرارية للمناطق النشطة والباردة",
    "retail_s2_f2": "المناطق ذات وقت البقاء الطويل",
    "retail_s2_f3": "رحلات العملاء عبر كاميرات متعددة",
    "retail_s2_i1": "تحسين تصميم وتنسيق المتجر",
    "retail_s2_i2": "تحسين أماكن وضع المنتجات",
    "retail_s2_i3": "زيادة التفاعل ومعدل التحويل",

    // Section 3
    "retail_s3_title": "لوحة تحليلات البيانات",
    "retail_s3_subtitle": "يتم تقديم جميع الرؤى عبر لوحة تحكم نظيفة وبديهية.",
    "retail_s3_f1": "مؤشرات الأداء في الوقت الفعلي والتاريخي",
    "retail_s3_f2": "اتجاهات الحركة والمقارنات",
    "retail_s3_f3": "رسوم بيانية وخرائط حرارية مرئية",
    "retail_s3_f4": "شاهد جميع بياناتك في مكان واحد",
    "retail_s3_i1": "اتخاذ قرارات أسرع",
    "retail_s3_i2": "تتبع أداء واضح",
    "retail_s3_i3": "بيانات يمكن للجميع فهمها",

    // Mobile App
    "retail_mobile_title": "التحليلات في أي مكان وزمان عبر التطبيق",
    "retail_mobile_desc": "وصول إلى كافة رؤى التجزئة مباشرة من هاتفك. يركز التطبيق على عرض البيانات بوضوح دون تعقيد.",
    "retail_mobile_f1": "أعداد العملاء والاتجاهات الحالية",
    "retail_mobile_f2": "الخرائط الحرارية وتصورات الرحلة",
    "retail_mobile_f3": "تتبع الحركة بناءً على الخريطة",
    "retail_mobile_f4": "عرض مبسط لمؤشرات الأداء للقرارات السريعة",
    "retail_mobile_f5": "مثالي للمديرين أثناء التنقل",

    // Gallery Labels
    "gallery_reid": "عد الأشخاص والتعرف المتكرر",
    "gallery_tracking": "نموذج التتبع",
    "gallery_gender": "تصنيف الجنس والعمر",
    "gallery_heatmap": "خريطة المتجر الحرارية",
    "gallery_journey": "رحلة المتسوق",
    "gallery_dashboard": "لوحة التحكم الرئيسية",
    "gallery_report": "عرض التقارير",

   

    // Site Info Section
    "site_info_title": "معلومات الموقع",
    "site_info_about_title": "حول منصة INNOSENTRA",
    "site_info_about_text": "تعتبر Innosentra مزوداً عالمياً رائداً للتحليلات المدعومة بالذكاء الاصطناعي. هذا الموقع هو الواجهة الرقمية الأساسية لعملائنا.",
    "site_info_ownership_title": "الملكية والعمليات",
    "site_info_ownership_text": "هذا الموقع مملوك ومدار من قبل مجموعة Innosentra. جميع الوحدات هي تقنيات مملوكة تم تطويرها داخلياً.",
    "site_info_tech_title": "المواصفات التقنية",
    "site_info_tech_text": "تستخدم المنصة WebGL المتقدم لتصور البيانات وبروتوكولات WebSocket الآمنة للقياس عن بُعد.",

    // Privacy Policy Section
    "privacy_title": "سياسة الخصوصية",
    "privacy_collection_title": "جمع البيانات",
    "privacy_collection_text": "نجمع المعلومات لتقديم خدمات أفضل، بما في ذلك المعلومات التي تزودنا بها مثل الاسم والبريد.",
    "privacy_usage_title": "استخدام البيانات",
    "privacy_usage_text": "نستخدم البيانات التي نجمعها لتوفير وصيانة وحماية وتحسين خدماتنا.",

    // Terms of Use Section
    "terms_title": "شروط الاستخدام",
    "terms_agreement_header": "اتفاقية المستخدم",
    "terms_agreement_text": "من خلال الدخول إلى هذا الموقع، فإنك توافق على الالتزام بشروط وأحكام الاستخدام هذه.",
    "terms_license_header": "الترخيص",
    "terms_license_text": "يُمنح الإذن لتنزيل نسخة واحدة مؤقتاً من المواد لأغراض العرض الشخصي فقط.",

    // Cookies Section
    "cookies_title": "سياسة وإعدادات الكوكيز",
    "cookies_what_is_title": "ما هي الكوكيز؟",
    "cookies_what_is_desc": "ملفات نصية صغيرة توضع على جهازك لتحسين أداء المواقع.",
    "cookies_essential_title": "1. الكوكيز الضرورية",
    "cookies_essential_desc": "ضرورية لعمل الموقع ولا يمكن إيقافها.",
    "cookies_analytical_title": "2. الكوكيز التحليلية",
    "cookies_analytical_desc": "تسمح لنا بالتعرف على عدد الزوار وكيفية تحركهم في الموقع.",

    // Security Info Section
    "security_info_title": "معايير الأمن",
    "security_info_protection_header": "حماية البيانات",
    "security_info_protection_text": "نستخدم تشفيراً بمعايير صناعية لضمان سلامة بياناتك.",


     // Traffic Section
"traffic_hero_title": "المرور والمواقف الذكية: نظام متكامل لإدارة حركة السير ووقوف السيارات",
"traffic_hero_subtitle": "نقوم بتحويل كاميرات المراقبة العادية إلى عيون إلكترونية ذكية قادرة على الرؤية والتحليل للطرق العامة ولمباني ومواقف السيارات المختلفة.",
"traffic_section_title": "تحليلات التدفق الذكي للحركة المرورية",
"traffic_section_subtitle": "نقدم نظاماً ذكياً وبسيط الاستخدام قادراً على فهم وتحليل نشاط وحركة الطريق بشكل تلقائي، كما يدير مساحات و أماكن المواقف بكفاءة عالية وبشأة مؤتمتة.",
"traffic_track_label": "ماذا نتتبع و نرصد في نظامنا؟",
"traffic_matters_label": "لماذا يعتبر هذا النظام مهماً و مفيداً؟",

// Features
"traffic_f1": "نقوم بعد وإحصاء السيارات آلياً سواء في الشوارع والطرق أو داخل مواقف السيارات المختلفة.",
"traffic_f2": "التحكم الآلي الكامل في بوابات الدخول والخروج للمواقف والمباني دون تدخل بشري.",
"traffic_f3": "توفير معلومات فورية ودقيقة عن أماكن الوقوف الشاغرة والمتاحة داخل المواقف.",
"traffic_f4": "رصد حالات الازدحام المروري والاختناقات والطرق المسدودة بشكل فوري.",
"traffic_f5": "قراءة لوحات الأرقام للسيارات تلقائياً عند البوابات وعلى الطرق لأغراض متعددة.",

// Importance
"traffic_i1": "تمكن السائقين من العثور على مواقف لسياراتهم بشكل أسرع وبدون أي توتر أو قلق.",
"traffic_i2": "ضمان انسيابية وسلاسة حركة المرور عند الدخول إلى المباني أو الخروج منها.",
"traffic_i3": "تحقيق أمان أفضل وحماية أعلى لكل من السائقين والمشاة على الطريق.",

// Industry Section
"industry_hero_title": "رؤية الذكاء الاصطناعي الصناعية: ثورة في مراقبة الجودة",
"industry_hero_subtitle": "نضمن جودة الإنتاج من خلال أنظمة فحص ومراقبة مؤتمتة بالكامل للمصانع والمنشآت الصناعية الحديثة.",
"industry_section_title": "أنظمة الفحص الآلي الدقيق",
"industry_section_subtitle": "نسعى لتحقيق تصنيع خالٍ من العيوب من خلال استخدام تقنيات المعالجة البصرية عالية السرعة والدقة.",
"industry_analyze_label": "ماذا نحلل و نفحص في العمليات الصناعية؟",
"industry_matters_label": "لماذا يعتبر هذا الفحص الآلي مهماً للصناعة؟",
"industry_a1": "كشف العيوب والشوائب والخدوش التي تظهر على أسطح المواد والمنتجات.",
"industry_a2": "التحقق من صحة واكتمال عملية تجميع الأجزاء والمكونات للمنتج.",
"industry_a3": "التأكد من دقة وسلامة عملية التعبئة والتغليف للمنتجات النهائية.",
"industry_a4": "فرز وتصنيف المنتجات المختلفة آلياً بناءً على معايير محددة.",
"industry_m1": "يساهم بشكل كبير في تقليل هدر وإتلاف المواد والإنتاج.",
"industry_m2": "يؤدي إلى زيادة ملحوظة في معدل الإنتاجية والكفاءة التشغيلية.",
"industry_m3": "يساعد في خفض التكاليف التشغيلية والنفقات العامة على المدى الطويل.",

// Security Section
"security_hero_title": "أنظمة المراقبة المتقدمة والذكية",
"security_hero_subtitle": "نوفر حلول أمن ذاتي وفعال للبنية التحتية الحيوية والهامة.",
"security_section_title": "الكشف الاستباقي والذكي عن التهديدات الأمنية",
"security_section_subtitle": "ننتقل بكم من مرحلة التسجيل السلبي للأحداث إلى مرحلة منع الحوادث قبل وقوعها في الوقت الفعلي.",
"security_cap_label": "ما هي القدرات الأساسية التي يتمتع بها نظامنا؟",
"security_val_label": "ما هي القيمة التجارية والأمنية التي يوفرها؟",
"security_c1": "تقنية التعرف على الوجوه والتمييز بين الأشخاص.",
"security_c2": "كشف حالات التسلل والدخول غير المشروع إلى المناطق المحظورة.",
"security_c3": "إصدار تنبيهات فورية عند اكتشاف أجسام أو حقائب متروكة بشكل مشبوه.",
"security_c4": "تحليل سلوك التسكع والتحركات غير الطبيعية للأشخاص في منطقة ما.",
"security_v1": "توفر حراسة مؤتمتة وعينًا ساهرة على مدار الساعة طوال أيام الأسبوع.",
"security_v2": "يقلل بشكل كبير من وقت الاستجابة للحوادث والتهديدات الأمنية.",
"security_v3": "يوفر وصولاً سريعاً وسهلاً لتسجيلات عالية الدقة والجودة عند الحاجة.",

// Construction Section
"construction_hero_title": "تعزيز السلامة والأمان في مواقع البناء",
"construction_hero_subtitle": "نعمل على حماية القوى العاملة والعمال باستخدام تقنيات رؤية الذكاء الاصطناعي المتطورة.",
"construction_section_title": "ضمان الامتثال التلقائي لبروتوكولات السلامة",
"construction_section_subtitle": "نضمن اتباع بروتوكولات وإجراءات السلامة في موقع العمل تلقائياً وبدقة عالية.",
"construction_site_label": "ما الذي نقوم بتحليله ومراقبته في موقع البناء؟",
"construction_benefit_label": "ما هي الفوائد والمكاسب الرئيسية من تطبيق هذا النظام؟",
"construction_s1": "الكشف الآلي عن ارتداء معدات الوقاية الشخصية مثل الخوذة والسترة الواقية.",
"construction_s2": "مراقبة مستمرة للمناطق الخطرة والتحذير من الاقتراب غير الآمن منها.",
"construction_s3": "إرسال تنبيهات فورية في حال رصد سقوط العمال أو تعرضهم لحوادث.",
"construction_s4": "مراقبة التفاعلات بين العمال والآلات الثقيلة للوقاية من الحوادث.",
"construction_b1": "يؤدي إلى وقوع حوادث وإصابات أقل في موقع العمل.",
"construction_b2": "يضمن الامتثال الكامل للالتزامات والقوانين واللوائح القانونية.",
"construction_b3": "يمكن مدراء المشروع من الإشراف عن بُعد على سير العمل ومستويات السلامة.",

    "contact_email_value": "manar.bakro@innosentra.com",

    "contact_phone_value": " 0059 997 163 0049",
    "contact_address": "العنوان",
    "contact_address_line1": "Georgstr. 47",
    "contact_address_line2": "51145 Cologne",
    "contact_address_line3": "ألمانيا",


    "software_hero_title": "هندسة البرمجيات المتكاملة والأنظمة الذكية",
      "software_hero_subtitle": "نقدم دورة حياة تطوير برمجيات كاملة تبدأ من هندسة الخوارزميات المعقدة، مروراً بتصميم قواعد البيانات العملاقة ، وصولاً إلى تطوير تطبيقات الويب والموبايل ، وانتهاءً بعمليات النشر  والاستضافة السحابية الآمنة",
      
      "software_section_title": "التميز التقني في كل سطر كود",
      "software_section_subtitle": "فريقنا يجمع بين دقة الخوارزميات الرياضية وجمالية واجهات المستخدم، مع التركيز الصارم على الأداء، الأمان، وقابلية التوسع (Scalability).",
      
      "software_col1_label": "القدرات التقنية الأساسية", // القائمة اليمنى
      "software_col2_label": "الجودة والبنية التحتية", // القائمة اليسرى

      // القائمة الأولى (التقنيات والتطوير)
      "software_c1": "تطوير الويب الشامل (Full-Stack) وتطبيقات الموبايل الاحترافية",
      "software_c2": "هندسة قواعد البيانات المعقدة وإدارة البيانات الضخمة (Big Data)",
      "software_c3": "بناء الخوارزميات الذكية وهياكل البيانات المتقدمة",
      "software_c4": "تكامل واجهات برمجة التطبيقات (API Integration & Microservices)",
      
      // القائمة الثانية (العمليات، النشر، والاختبار)
      "software_c5": "النشر المؤتمت (CI/CD) وإدارة الخوادم والاستضافات السحابية",
      "software_c6": "اختبار البرمجيات (QA Testing) وضمان الجودة والأداء",
      "software_c7": "تحليل البيانات واستخراج الرؤى (Data Analytics & Reporting)",
      "software_c8": "تأمين الأنظمة وحماية البيانات وتشفير الاتصالات",


      // بيانات الديمو 
      "demo_button": "اطلب ديمو",
      "hero_products_button": "تفقد المنتجات",
      "demo_btn_request": "اطلب ديمو مخصص الآن",
"demo_page_title": "طلب ديمو للنظام",
"demo_page_subtitle": "يرجى تزويدنا ببيانات بيئة العمل والمواصفات المطلوبة لنتمكن من تصميم ديمو يلبي احتياجاتك بدقة.",
"demo_label_company": "اسم الشركة / المؤسسة",
"demo_label_industry": "قطاع العمل (تجزئة، مرور، أمن..)",
"demo_label_reqs": "المواصفات والبيانات المطلوبة",
"demo_placeholder_reqs": "مثال: عدد الكاميرات، نوع البيانات المراد تحليلها، المشكلة التي ترغب بحلها...",
"demo_btn_submit": "إرسال طلب الديمو",
"val_company_req": "اسم الشركة مطلوب",
"val_industry_req": "قطاع العمل مطلوب",
"val_req_req": "يرجى كتابة بعض التفاصيل لطلب الديمو",


  "nav_agriculture": "الزراعة",
  "nav_products": "المنتجات الجاهزة",
  "agriculture_hero_title": "الذكاء الاصطناعي في الزراعة",
  "agriculture_hero_subtitle": "نرتقي بالزراعة الحديثة من خلال حلول الرؤية الحاسوبية الذكية لتحليل المحاصيل وزيادة الإنتاجية.",
  "agriculture_section_title": "إدارة المحاصيل الذكية",
  "agriculture_section_subtitle": "استخدم قوة الذكاء الاصطناعي لمراقبة الأراضي الزراعية بدقة عالية، مما يساعد المزارعين والشركات الزراعية على اتخاذ قرارات مبنية على بيانات دقيقة لحظية.",
  "agriculture_track_label": "أهم التطبيقات",
  "agriculture_f1": "العد التلقائي والدقيق للأشجار في الأراضي الواسعة",
  "agriculture_f2": "الاكتشاف المبكر للأمراض والآفات الزراعية",
  "agriculture_f3": "التحليل الشامل لحالة المحصول ونموه",
  "agriculture_f4": "تقدير حجم الإنتاجية المتوقعة",
  "agriculture_f5": "تحسين إدارة الموارد (المياه والأسمدة)",
  "agriculture_matters_label": "لماذا هذا مهم؟",
  "agriculture_i1": "التدخل المبكر لحماية النباتات وتقليل الخسائر",
  "agriculture_i2": "زيادة الإنتاجية الزراعية بأقل التكاليف",
  "agriculture_i3": "توفير الوقت والجهد في عمليات المسح الميداني",
  "products_title": "جهاز تحليل المتاجر الذكي (Edge AI)",
  "products_subtitle": "جهاز يعالج بيانات الكاميرات محلياً لضمان الخصوصية وتقليل استهلاك الإنترنت، مع لوحة تحكم شاملة لكل متجر.",
  "products_no_cloud": "معالجة محلية 100% (بدون سحابة)",
  "products_hw_title": "الجهاز: Edge AI لكل فرع",
  "products_hw_desc": "تتم المعالجة محلياً لتقليل نقل البيانات، والحفاظ على الخصوصية، وضمان استجابة سريعة.",
  "products_hw_f1": "معالجة الفيديو دون إرسال بيانات خام",
  "products_hw_f2": "تحليل فوري وسريع بفضل تقنية Edge AI",
  "products_hw_f3": "متوافق مع حجم المشروع وعدد الكاميرات",
  "products_hw_f4": "ارتباط سلس مع كاميراتك الحالية",
  "products_hw_f5": "تركيب سريع ومناسب لبيئة المتاجر",
  "products_sw_title": "البرمجيات: لوحة تحكم ذكية",
  "products_sw_desc": "نقدم لك تحليلات، خرائط حرارية، وتنبيهات قابلة للتخصيص بناءً على احتياجاتك.",
  "products_image_alt": "صورة المنتج",
  "products_section_value_title": "قيمة المنتج لعملك",
  "products_section_value_desc": "نحول كاميرات متجرك لنظام تحليلي يراقب سلوك العملاء. نوفر جهازاً لكل فرع مع لوحة تحكم موحدة لكافة الفروع.",
  "products_kpi_title": "أهم الإحصائيات التي نوفرها",
  "products_kpi_visitors": "إجمالي الزوار لفترة محددة.",
  "products_kpi_age": "تحليل فئات الزوار العمرية.",
  "products_kpi_gender": "نسبة الذكور والإناث.",
  "products_kpi_dwell": "متوسط وقت البقاء في المتجر.",
  "products_kpi_purchase": "نسبة المشترين للزوار.",
  "products_kpi_sentiment": "قياس رضا العملاء عبر تعابير الوجه.",
  "products_kpi_heatmap": "خرائط حرارية لمناطق الازدحام.",
  "products_ops_title": "تنبيهات ذكية ودعم فني",
  "products_ops_desc": "تنبيهات مخصصة ودعم فني مستمر لضمان عمل النظام بكفاءة.",
  "products_alert_cashier": "تنبيه ازدحام عند نقاط البيع.",
  "products_alert_afterhours": "تنبيه تسلل بعد أوقات العمل.",
  "products_alert_custom": "تنبيهات مرنة حسب طلبك.",

  "nav_product_edge_analytics": "جهاز الذكاء الاصطناعي للمتاجر",
  "nav_product_surveillance_tower": "برج المراقبة",
  "surveillance_title": "برج المراقبة لمواقع البناء",
  "surveillance_subtitle": "وحدة مراقبة مستقلة وذكية",
  "surveillance_desc": "برج المراقبة يوفر حلاً متكاملاً لحماية مواقع البناء والبنية التحتية، مع تنبيهات فورية وتقنيات ذكية تعمل على مدار الساعة.",
  "surveillance_f1": "وحدة مراقبة مستقلة لمواقع البناء ومشاريع البنية التحتية والمواقع المؤقتة.",
  "surveillance_f2": "تنبيهات طوارئ فورية عند وقوع أي حادث.",
  "surveillance_f3": "مراقبة مستمرة على مدار 24/7 دون توقف.",
  "surveillance_f4": "أسعار تعتمد على مدة التأجير.",
  "surveillance_f5": "يعمل بالبطاريات أو مصدر طاقة مباشر – مرن للمواقع التي تفتقر للكهرباء.",
  "surveillance_f6": "تصميم شاهق لمنع العبث أو الدخول غير المصرح به.",
  "surveillance_f7": "مقاوم للتخريب وقابل للتعديل، يقدم حلاً اقتصادياً للمواقع بكافة أحجامها.",
  "surveillance_f8": "نشر سريع – يمكن إعداده وتشغيله خلال ساعات قليلة.",
  "surveillance_f9": "يمكن تشغيل التنبيهات لاكتشاف البشر أو الحيوانات حسب السيناريو.",
  "surveillance_f10": "تنبيه فوري ومرن قدر الإمكان.",
  "surveillance_f11": "هيكل متين مقاوم للعوامل الجوية (IP67).",
  "surveillance_f12": "قدرات الرؤية الليلية.",

  "nav_product_home_monitor": "جهاز المراقبة المنزلية",
  "home_monitor_title": "جهاز المراقبة المنزلية الذكي",
  "home_monitor_subtitle": "حماية ذكية ومخصصة تمنحك راحة البال على مدار الساعة",
  "home_monitor_desc": "استمتع بأقصى درجات الأمان مع جهاز المراقبة المتطور. يمنحك النظام تحكماً كاملاً لحماية مساحتك الخاصة، مع خيارات ذكية لتخصيص أوقات التشغيل وتحديد أولويات التنبيهات لتناسب أسلوب حياتك اليومي.",
  "home_monitor_f1": "جدولة ذكية: حدد أوقات نشاط الجهاز بدقة (أثناء العمل أو النوم) واختر التنبيهات ذات الأولوية القصوى بالنسبة لك.",
  "home_monitor_f2": "إشعارات لحظية وفورية: ابقَ على اطلاع دائم بأي حركة غير معتادة من خلال تنبيهات تصلك في نفس اللحظة.",
  "home_monitor_f3": "تقنية التعرّف المتقدمة: ميزة التمييز الذكي بين حركة البشر والحيوانات الأليفة لتقليل الإنذارات الخاطئة.",
  "home_monitor_f4": "تكامل تام مع الهاتف: تحكم كامل وسهل بالنظام من أي مكان عبر تطبيق الهاتف المحمول.",
  "home_monitor_f5": "مراقبة للمكان بدقة 24/7.",
  "home_monitor_f6": "مرونة عالية في حال وجود طلبات مخصصة.",
  "home_monitor_f7": "أبعاد الجهاز صغيرة 95 مم * 66 مم.",
  }
},

  en: {
    translation: {
      "learn_more":"Learn More",
      "nav_home": "Home",
      "nav_about": "About",
      "nav_solutions": "Solutions",
      "nav_contact": "Contact",
      "nav_supermarket": "Supermarket",
      "nav_traffic": "Traffic",
      "nav_security": "Security",
      "nav_industry": "Industry",
      "nav_construction": "Construction Sites",
      "lang_en": "English",
      "lang_de": "Deutsch",
      "lang_ar": "Arabic",
      "about_title": "About Us",
      "about_desc": "More than 15 years of experience in technical solutions, Innosentra is a computer vision and AI company delivering actionable insights from visual data. Our solutions integrate with existing camera systems, respect privacy, and support smarter decision-making across retail, security, and other industries.",
      "hero_title": "Intelligent Software Solutions Powered by AI",
      "hero_subtitle": "Transforming visual data into actionable business insights through advanced software engineering. We specialize in AI and machine learning, computer vision systems, web and mobile application development, database architecture, and comprehensive technical software solutions powered by artificial intelligence.",
    // offer
    "offer_main_title": "What we offer ?",
    "offer_sol1_title": "AI Engineering & Deep Learning",
    "offer_sol1_desc": "We build and train custom deep learning models for high-accuracy detection and recognition tasks.",
    "offer_sol2_title": "Advanced Computer Vision",
    "offer_sol2_desc": "From multi-camera re-identification to complex object tracking, we deliver sophisticated visual analysis.",
    "offer_sol3_title": "Data Analytics & Dashboards",
    "offer_sol3_desc": "Raw video feeds are transformed into actionable KPIs and visualized on intuitive, real-time dashboards.",
    "offer_sol4_title": "Software Development Solutions",
    "offer_sol4_desc": "Comprehensive web and mobile application development with robust database architecture, from concept to deployment.",

    "solutions_section_title": "Explore Our Solutions",
    "solution_retail_title": "Retail & Supermarket Solutions",
    "solution_retail_desc": "Smart retail analytics, people counting, and in-store behavioral insights.",
    "solution_traffic_title": "Smart Traffic & Parking",
    "solution_traffic_desc": "Traffic flow monitoring, parking management, and vehicle analytics.",
    "solution_security_title": "Security & Surveillance",
    "solution_security_desc": "Real-time threat detection, intrusion alerts, and automated surveillance.",
    "solution_industry_title": "Industrial Vision",
    "solution_industry_desc": "Automated inspection, quality assurance, and process optimization.",
    "solution_construction_title": "Construction Site Monitoring",
    "solution_construction_desc": "Worker safety, PPE compliance, and site activity monitoring.",
    "solution_data_recovery_title": "Data Recovery",
    "solution_data_recovery_desc": "Expert data recovery for defective hard drives with a 92.5% success rate.",

    "dataRecovery": {
      "title": "Data Recovery",
      "menuItem": "Data Recovery",
      "shortDescription": "Expert data recovery for defective hard drives with a 92.5% success rate.",
      "hero": {
        "headline": "Hard drive broken? We are happy to help!",
        "subheadline": "Experts in hard drive data recovery and restoration.",
        "description": "We offer a free and no-obligation diagnostic service, 24/7! You will receive an overview of the recoverable data, a diagnostic report, and a no-obligation quote before you agree to the data recovery. Our success rate is 92.5%.",
        "processText": "Using specially developed recovery processes, state-of-the-art technology, and decades of combined experience, we are your specialist for hard drive defects. We have a remarkable success rate of 92.5% and reconstruct your data quickly and efficiently."
      },
      "defects": {
        "title": "Common Hard Drive Defects",
        "items": [
          {
            "name": "Motor Damage",
            "desc": "Defects in the motor prevent the hard drive from spinning up. This is often the result of physical damage, e.g., dropping the hard drive."
          },
          {
            "name": "Electronic Damage",
            "desc": "Electronic damage often occurs on the circuit boards that control the functions of the hard drive. The causes are usually the failure of components, physical impact, or power surges."
          },
          {
            "name": "Headcrash",
            "desc": "A headcrash describes the failure of the internal read/write heads, e.g., due to natural wear, physical impact, or dust and other particles inside the hard drive."
          },
          {
            "name": "Firmware Defect",
            "desc": "Firmware is software embedded in the hard drive. A firmware failure can lead to a hard drive defect or total failure and often shows similar symptoms to headcrashes or motor damage."
          },
          {
            "name": "Logical Damage",
            "desc": "Logical damage does not originate from physical damage: The components of the hard drive continue to function perfectly, but logical access is no longer possible. Logical damage includes, for example, RAID1 issues, software corruption, or formatted hard drives."
          }
        ]
      },
      "howItWorks": {
        "title": "How does hard drive data recovery work?",
        "description": "Depending on the type of damage, different methods and readout processes are used. Our specially trained engineers and state-of-the-art equipment provide the best foundation and the highest professional know-how for any business data recovery. We have the necessary expertise and the latest equipment to recover your corporate data quickly, efficiently, and cost-effectively. Contact us for a no-obligation quote by phone or email."
      },
      "whyUs": {
        "title": "Why choose us?",
        "items": [
          {
            "title": "Our Equipment",
            "desc": "From soldering irons to cleanroom laboratories - we have state-of-the-art facilities."
          },
          {
            "title": "Our Experience",
            "desc": "We have already diagnosed over 140,000 data carriers of all kinds."
          },
          {
            "title": "Our Free Diagnosis",
            "desc": "We offer a free diagnosis within 24-48h including a diagnostic report and a no-obligation quote."
          },
          {
            "title": "Our Process",
            "desc": "We are ISO 9001 and 14001 certified and therefore have a triple award for our professional service."
          }
        ]
      },
      "videoSection": {
        "text": "Our company video shows you everything you need to know about our data recovery service."
      },
      "steps": {
        "title": "3 Steps to Your Business Data",
        "items": [
          {
            "step": "1",
            "title": "Contact & Diagnosis",
            "desc": "Send us your medium for a free diagnosis. Pack your medium carefully. Download the shipping form and enclose it with the shipment. Send us your medium securely via DHL or a courier service."
          },
          {
            "step": "2",
            "title": "Data Overview",
            "desc": "You will receive a no-obligation offer incl. an online data list for an overview of your data. After receiving the medium, you get a personal reference number. After identifying and fixing the defect, we send an overview of recoverable data and a quote. If data cannot be reconstructed, you will receive your medium back via secure shipping."
          },
          {
            "step": "3",
            "title": "Shipping Your Data",
            "desc": "We send your business data back to you. Data transfer of the reconstructable data to a new medium. After receipt of payment, you will receive your data backup within 24h via a trackable shipping method. For security reasons, we keep a copy of your data for 7 days. After this period, the copy will be deleted."
          }
        ]
      }
    },

    //  steps
    "steps_main_title": "How We Work?",
    "steps_s1_title": "Analyze Needs",
    "steps_s1_desc": "Start by analyzing your needs and system to chart a technical roadmap aligned with your goals.",
    "steps_s2_title": "Build AI Algorithms",
    "steps_s2_desc": "Build and fine-tune AI and Computer Vision algorithms, designed specifically for your use case.",
    "steps_s3_title": "Deploy on Devices",
    "steps_s3_desc": "Operate the solution on dedicated Devices for instant performance and real-time analysis directly at your site.",
    "steps_s4_title": "Live Dashboards",
    "steps_s4_desc": "Interactive dashboards providing operational visibility with real-time statistics and alerts.",
    // legal
    "legal_site_info": "Site Info",
    "legal_privacy": "Privacy Policy",
    "legal_cookies": "Cookies Settings",
    "legal_terms": "Terms of Use",
    "legal_security": "Security",
    "footer_all_rights": "All rights reserved.",
// 
"chart_intro_title": "From camera to Decision",
  "chart_intro_desc": "Track the data journey from signal capture via devices, through intelligent analysis, to actionable results.",
  "chart_item_1": "Vehicle & Plate Analysis",
"chart_item_2": "Weapon Detection",
"chart_item_3": "Accident Detection",
"chart_item_4": "Fire Detection",
"chart_item_5": "Retail Analytics",
"chart_step2_title": "AI Detection & Data Processing",
"chart_step2_desc": "Smart cameras identify key events (vehicles, threats, demographics), while the secure server instantly collects and organizes this data for actionable insights.",
"chart_step3_title": "View Easy-to-Read Results",
"chart_step3_desc": "See clear charts and numbers on your dashboard to gain insights and make better business decisions.",
      // بقية المفاتيح...
"contact_title": "Contact Us",
"contact_subtitle": "Have a question or a project in mind? Let’s discuss how Innosentra can help you turn visual data into actionable insights.",
"contact_info_title": "Contact Information",
"contact_form_title": "Send Us a Message",
"contact_label_name": "Full Name",
"contact_label_email": "Email Address",
"contact_label_phone": "Phone Number (Optional)",
"contact_label_message": "Your Message",
"contact_placeholder_message": "Tell us about your project or inquiry...",
"contact_btn_send": "Send Message",
"contact_btn_sending": "Sending...",
"contact_secure_text": "Your information is secure and confidential",
"contact_success_msg": "Message sent successfully! We will contact you soon.",
"contact_error_msg": "Failed to send message. Please try again.",
"contact_phone": "Phone",
"contact_email": "Email",
// Validation
"val_name_min": "Name must be at least 2 characters",
"val_name_req": "Name is required",
"val_email_valid": "Enter a valid email address",
"val_email_req": "Email is required",
"val_phone_valid": "Please enter a valid phone number",
"val_msg_min": "Message must be at least 10 characters",
"val_msg_req": "Message is required",

"gallery_label_people_counting": "People Counting & ReID",
"gallery_label_tracking": "Tracking Example",
"gallery_label_gender_age": "Gender & Age Classification",
"gallery_label_heatmap": "Store Heatmap",
"gallery_label_journey": "Customer Journey",


// Retail Section
"retail_hero_title": "Innosentra Retail Analytics",
"retail_hero_subtitle": "Turn Your Security Cameras into Your Smartest Business Consultant.",
"retail_analyze_label": "What We Analyze",
"retail_matters_label": "Why It Matters",

// Section 1
"retail_s1_title": "Smart Customer Analytics",
"retail_s1_subtitle": "Understand who your customers are and how they behave in real time.",
"retail_s1_f1": "Customer counting by time and day",
"retail_s1_f2": "Adult vs. Child classification",
"retail_s1_f3": "Gender Analysis",
"retail_s1_f4": "Average dwell time",
"retail_s1_f5": "Window engagement before entry",
"retail_s1_f6": "Emotion Analysis",
"retail_s1_i1": "Optimize staffing and operations",
"retail_s1_i2": "Know what attracts your customers",
"retail_s1_i3": "Understand real customer interest",

// Section 2
"retail_s2_title": "Customer journey & Heatmaps",
"retail_s2_subtitle": "See your store through your customers' eyes.",
"retail_s2_f1": "Hot & Cold Zone Heatmaps",
"retail_s2_f2": "High dwell-time areas",
"retail_s2_f3": "Multi-camera customer journeys",
"retail_s2_i1": "Improve store layout",
"retail_s2_i2": "Optimize product placement",
"retail_s2_i3": "Increase engagement and conversion",

// Section 3
"retail_s3_title": "Analytics Dashboard",
"retail_s3_subtitle": "All insights delivered through a clean, intuitive dashboard.",
"retail_s3_f1": "Real-time and historical KPIs",
"retail_s3_f2": "Traffic trends and comparisons",
"retail_s3_f3": "Visual charts and heatmaps",
"retail_s3_f4": "See all your data in one place",
"retail_s3_i1": "Faster decision-making",
"retail_s3_i2": "Clear performance tracking",
"retail_s3_i3": "Data everyone can understand",

// Mobile App
"retail_mobile_title": "Analytics Anywhere, Anytime, using mobile app",
"retail_mobile_desc": "Access all your retail insights directly from your mobile device. The application focuses on clear data visualization without complexity, delivering only what matters.",
"retail_mobile_f1": "Live customer counts and trends",
"retail_mobile_f2": "Heatmaps and journey visualizations",
"retail_mobile_f3": "Map-based movement tracking",
"retail_mobile_f4": "Simple KPI views for quick decisions",
"retail_mobile_f5": "Optimized for managers on the move",

// Gallery Labels (Items inside MediaGallery)
"gallery_reid": "People Counting & ReID",
"gallery_tracking": "Tracking Example",
"gallery_gender": "Gender & Age Classification",
"gallery_heatmap": "Store Heatmap",
"gallery_journey": "Customer Journey",
"gallery_dashboard": "Main Dashboard",
"gallery_report": "Report View",



// Traffic Section
"traffic_hero_title": "Smart Traffic & Parking: A Comprehensive Management System",
"traffic_hero_subtitle": "We transform standard surveillance cameras into smart electronic eyes capable of analyzing public roads, buildings, and parking facilities.",
"traffic_section_title": "Smart Traffic Flow Analytics",
"traffic_section_subtitle": "We provide a smart, user-friendly system that automatically analyzes road activity and manages parking spaces efficiently and autonomously.",
"traffic_track_label": "What do we track?",
"traffic_matters_label": "Why does it matter?",

// Features
"traffic_f1": "Automated vehicle counting on streets and inside parking lots.",
"traffic_f2": "Fully automated control of entry and exit gates without human intervention.",
"traffic_f3": "Real-time, accurate information on available parking spots.",
"traffic_f4": "Instant detection of traffic congestion, jams, and blocked roads.",
"traffic_f5": "Automatic License Plate Recognition (ALPR) at gates and on roads.",

// Importance
"traffic_i1": "Enables drivers to find parking faster, stress-free.",
"traffic_i2": "Ensures smooth traffic flow when entering or exiting buildings.",
"traffic_i3": "Achieves better safety and protection for both drivers and pedestrians.",

// Industry Section
"industry_hero_title": "Industrial AI Vision: A Revolution in Quality Control",
"industry_hero_subtitle": "We ensure production quality through fully automated inspection systems for modern factories and industrial facilities.",
"industry_section_title": "Precision Automated Inspection Systems",
"industry_section_subtitle": "We strive for zero-defect manufacturing using high-speed, high-precision optical processing technologies.",
"industry_analyze_label": "What do we analyze?",
"industry_matters_label": "Why is this important?",
"industry_a1": "Detection of defects, impurities, and scratches on material surfaces.",
"industry_a2": "Verification of correct assembly and completeness of parts.",
"industry_a3": "Ensuring the accuracy and integrity of final product packaging.",
"industry_a4": "Automated sorting and classification of products based on specific criteria.",
"industry_m1": "Significantly reduces material waste and spoilage.",
"industry_m2": "Leads to a noticeable increase in productivity and operational efficiency.",
"industry_m3": "Helps reduce operational costs and overheads in the long run.",

// Security Section
"security_hero_title": "Advanced Smart Surveillance Systems",
"security_hero_subtitle": "We provide effective, autonomous security solutions for critical infrastructure.",
"security_section_title": "Proactive Smart Threat Detection",
"security_section_subtitle": "Moving from passive recording to proactive incident prevention in real-time.",
"security_cap_label": "Core Capabilities",
"security_val_label": "Business & Security Value",
"security_c1": "Facial recognition technology and person identification.",
"security_c2": "Detection of intrusion and unauthorized entry into restricted areas.",
"security_c3": "Instant alerts upon detecting suspicious abandoned objects or bags.",
"security_c4": "Analysis of loitering behavior and abnormal movements.",
"security_v1": "Provides automated, 24/7 vigilance.",
"security_v2": "Significantly reduces response time to incidents and security threats.",
"security_v3": "Provides quick and easy access to high-quality footage when needed.",

// Construction Section
"construction_hero_title": "Enhancing Safety at Construction Sites",
"construction_hero_subtitle": "Protecting the workforce using advanced AI vision technologies.",
"construction_section_title": "Automated Safety Protocol Compliance",
"construction_section_subtitle": "Ensuring strict adherence to safety protocols on-site automatically and accurately.",
"construction_site_label": "What do we monitor?",
"construction_benefit_label": "Key Benefits",
"construction_s1": "Automated detection of PPE compliance (helmets, vests).",
"construction_s2": "Continuous monitoring of hazardous zones and unsafe proximity warnings.",
"construction_s3": "Instant alerts for worker falls or accidents.",
"construction_s4": "Monitoring interactions between workers and heavy machinery to prevent accidents.",
"construction_b1": "Results in fewer accidents and injuries on-site.",
"construction_b2": "Ensures full compliance with legal regulations and safety standards.",
"construction_b3": "Enables project managers to remotely supervise workflow and safety levels.",

// Site Info Section
"site_info_title": "Site Information",
"site_info_about_title": "About INNOSENTRA Platform",
"site_info_about_text": "Innosentra is a leading global provider of AI-driven analytics and smart monitoring solutions. This website serves as the primary digital interface for our clients across retail, construction, and industrial sectors. Our mission is to transform raw data into actionable insights through cutting-edge computer vision technology.",
"site_info_ownership_title": "Ownership and Operations",
"site_info_ownership_text": "This site is owned and operated by Innosentra Group. All modules including 'Retail Solutions', 'Traffic Analytics', and 'Security Systems' are proprietary technologies developed by our in-house engineering teams.",
"site_info_tech_title": "Technical Specifications",
"site_info_tech_text": "The platform utilizes advanced WebGL for data visualization and secure WebSocket protocols for real-time telemetry. We support all modern browsers and provide a responsive experience for mobile and tablet devices.",

// Privacy Policy Section
"privacy_title": "Privacy Policy",
"privacy_collection_title": "Data Collection",
"privacy_collection_text": "We collect information to provide better services to all our users. This includes information you provide to us like your name and email.",
"privacy_usage_title": "Data Usage",
"privacy_usage_text": "We use the data we collect to provide, maintain, protect and improve our services.",



// Terms of Use Section
"terms_title": "Terms of Use",
"terms_agreement_header": "User Agreement",
"terms_agreement_text": "By accessing this website, you are agreeing to be bound by these web site Terms and Conditions of Use.",
"terms_license_header": "License",
"terms_license_text": "Permission is granted to temporarily download one copy of the materials on Innosentra's web site for personal viewing only.",

// Cookies Section
"cookies_title": "Cookies Settings & Policy",
"cookies_what_is_title": "What are Cookies?",
"cookies_what_is_desc": "Cookies are small text files that are placed on your computer by websites that you visit. They are widely used in order to make websites work more efficiently.",
"cookies_essential_title": "1. Essential Cookies",
"cookies_essential_desc": "These are necessary for the website to function properly and cannot be switched off.",
"cookies_analytical_title": "2. Analytical Cookies",
"cookies_analytical_desc": "They allow us to recognize and count the number of visitors and see how they move around the site.",


// Security Info Section
"security_info_title": "Security Standards",
"security_info_protection_header": "Data Protection",
"security_info_protection_text": "We employ industry-standard encryption to ensure your data is safe during transit and at rest.",






  "contact_email_value":"manar.bakro@innosentra.com",
  "contact_phone_value":"0049 163 997 0059",
  "contact_address": "Address",
  "contact_address_line1": "Georgstr. 47",
  "contact_address_line2": "51145 Cologne",
  "contact_address_line3": "Germany",


  "software_hero_title": "Integrated Software Engineering & Smart Systems",
      "software_hero_subtitle": "We deliver a complete Software Development Life Cycle (SDLC), starting from complex algorithmic engineering and massive database architecture (SQL & NoSQL), to high-end Web and Mobile development (Native & Cross-platform), concluding with secure Deployment and Cloud Hosting.",
      
      "software_section_title": "Technical Excellence in Every Line of Code",
      "software_section_subtitle": "Our team combines the precision of mathematical algorithms with the elegance of UI/UX, strictly focusing on Performance, Security, and Scalability.",
      
      "software_col1_label": "Core Technical Capabilities",
      "software_col2_label": "Infrastructure & Quality Assurance",

      // List 1 (Tech & Dev)
      "software_c1": "Full-Stack Web Development & Professional Mobile Apps",
      "software_c2": "Complex Database Architecture & Big Data Management",
      "software_c3": "Smart Algorithms & Advanced Data Structures Construction",
      "software_c4": "API Integration & Microservices Architecture",
      
      // List 2 (Ops, Deploy, Testing)
      "software_c5": "Automated Deployment (CI/CD), Server Mgmt & Cloud Hosting",
      "software_c6": "Software Testing (QA), Performance & Quality Assurance",
      "software_c7": "Data Analytics, Reporting & Business Intelligence",
      "software_c8": "System Security, Data Protection & Encryption",
      
      // الديمو
      "demo_button": "Request a Demo",
      "hero_products_button": "Explore Products",
      "demo_btn_request": "Request a Custom Demo",
"demo_page_title": "Request a System Demo",
"demo_page_subtitle": "Please provide details about your environment and required specifications so we can design a demo tailored to your needs.",
"demo_label_company": "Company / Organization Name",
"demo_label_industry": "Industry (Retail, Traffic, Security..)",
"demo_label_reqs": "Required Specifications & Data",
"demo_placeholder_reqs": "E.g.: Number of cameras, type of data to analyze, the problem you want to solve...",
"demo_btn_submit": "Submit Demo Request",
"val_company_req": "Company name is required",
"val_industry_req": "Industry is required",
"val_req_req": "Please provide some details for the demo",

"nav_agriculture": "Agriculture",
  "nav_products": "Products",
  "agriculture_hero_title": "AI in Agriculture",
  "agriculture_hero_subtitle": "Elevating modern farming with intelligent computer vision solutions for crop analysis and increased yield.",
  "agriculture_section_title": "Smart Crop Management",
  "agriculture_section_subtitle": "Leverage the power of AI to monitor farmlands with high precision, enabling farmers to make data-driven decisions in real-time.",
  "agriculture_track_label": "Key Applications",
  "agriculture_f1": "Accurate and automated tree counting in large fields",
  "agriculture_f2": "Early detection of agricultural diseases and pests",
  "agriculture_f3": "Comprehensive crop health and growth analysis",
  "agriculture_f4": "Yield estimation and forecasting",
  "agriculture_f5": "Resource management optimization (water and fertilizers)",
  "agriculture_matters_label": "Why it matters?",
  "agriculture_i1": "Early intervention to protect plants and reduce losses",
  "agriculture_i2": "Maximize harvest yield with minimized costs",
  "agriculture_i3": "Save time and effort in field surveying",
  "products_title": "Edge AI Retail Analytics Device",
  "products_subtitle": "A smart edge device that processes camera data locally to protect privacy and reduce internet usage, with one unified dashboard for complete operational visibility.",
  "products_no_cloud": "0% Cloud Services Used",
  "products_hw_title": "Hardware: Edge AI Device per Store",
  "products_hw_desc": "The device processes camera data locally on the edge to minimize data transfer, protect privacy, and reduce internet usage—while keeping response times fast.",
  "products_hw_f1": "On-device processing without sending raw footage",
  "products_hw_f2": "Edge AI for low-latency real-time analysis",
  "products_hw_f3": "Sizing tailored to your number of cameras & project scale",
  "products_hw_f4": "Works with your existing cameras with privacy by design",
  "products_hw_f5": "Built for store environments with quick installation",
  "products_sw_title": "Software: Unified Dashboard & Smart Analytics",
  "products_sw_desc": "We turn analysis outputs into action-ready KPIs, heatmaps, and configurable alerts—across your stores in one place.",
  "products_image_alt": "Product image",
  "products_section_value_title": "What does this product deliver?",
  "products_section_value_desc": "We turn your existing store cameras into a full analytics engine that tracks customer behavior in real time and translates it into business-ready insights. Device sizing is tailored to project scale, and for chain businesses we deploy one device per branch and unify all stores in one dashboard.",
  "products_kpi_title": "Key statistics your team can track",
  "products_kpi_visitors": "Visitor and customer counts across any selected time range.",
  "products_kpi_age": "Age group analytics for incoming customers.",
  "products_kpi_gender": "Gender distribution: male and female.",
  "products_kpi_dwell": "Average dwell time and average buying time.",
  "products_kpi_purchase": "How many bought versus how many did not buy.",
  "products_kpi_sentiment": "Customer satisfaction indicators from facial emotion analysis.",
  "products_kpi_heatmap": "Heatmaps to understand attraction points and congestion areas.",
  "products_ops_title": "Smart alerts + full support",
  "products_ops_desc": "We configure custom alerts based on your priorities and stay accountable for smooth rollout and issue handling, especially during the initial deployment phase, with continuous technical support.",
  "products_alert_cashier": "Crowding alert at cashier and checkout zones.",
  "products_alert_afterhours": "Instant alert for unauthorized entry after store closing.",
  "products_alert_custom": "Fully customizable alerts for your own scenarios.",

  "nav_product_edge_analytics": "Edge AI Analytics Device",
  "nav_product_surveillance_tower": "Surveillance Tower",
  "surveillance_title": "Surveillance Tower for Construction Sites",
  "surveillance_subtitle": "Standalone Smart Monitoring Unit",
  "surveillance_desc": "A complete solution to protect construction sites and infrastructure with instant alerts and 24/7 intelligent monitoring.",
  "surveillance_f1": "Standalone monitoring unit for construction sites, infrastructure projects, and temporary locations.",
  "surveillance_f2": "Emergency alerts upon any incident.",
  "surveillance_f3": "24/7 non-stop monitoring.",
  "surveillance_f4": "Pricing based on rental duration.",
  "surveillance_f5": "Powered by batteries or direct site power supply – flexible for sites with limited or no electricity.",
  "surveillance_f6": "Tall design to prevent tampering or unauthorised access.",
  "surveillance_f7": "Vandal-resistant and adjustable, offering a cost-effective solution for sites of any size/complexity.",
  "surveillance_f8": "Rapid deployment – can be set up and operational within a few hours.",
  "surveillance_f9": "Alerts can be triggered by humans or animals depending on the scenario.",
  "surveillance_f10": "Instant and highly flexible alerts.",
  "surveillance_f11": "Durable weatherproof housing (IP67).",
  "surveillance_f12": "Night vision capabilities.",

  "nav_product_home_monitor": "Home Monitor",
  "home_monitor_title": "Smart Home Monitor",
  "home_monitor_subtitle": "Smart, customized protection for round-the-clock peace of mind",
  "home_monitor_desc": "Experience maximum security with our advanced monitoring system. It gives you full control to protect your space, featuring smart options to customize operating hours and prioritize alerts to fit your lifestyle.",
  "home_monitor_f1": "Smart Scheduling: Precisely set device activity times (e.g., during work or sleep) and prioritize your most important alerts.",
  "home_monitor_f2": "Instant Notifications: Stay informed of any unusual activity with real-time alerts sent straight to your device.",
  "home_monitor_f3": "Advanced Detection: Smart AI recognition distinguishes between humans and pets, drastically reducing false alarms.",
  "home_monitor_f4": "Seamless Mobile Integration: Easily manage and control your security system from anywhere via the mobile app.",
  "home_monitor_f5": "Accurate 24/7 premises monitoring.",
  "home_monitor_f6": "High flexibility for custom requests.",
  "home_monitor_f7": "Device dimensions: small, 95 mm * 66 mm.",

}
  },

  de: {
    translation: {
      "learn_more":"Mehr erfahren",
        "nav_home": "Startseite",
      "nav_about": "Über uns",
      "nav_solutions": "Lösungen",
      "nav_contact": "Kontakt",
      "nav_supermarket": "Supermarkt",
      "nav_traffic": "Verkehr",
      "nav_security": "Sicherheit",
      "nav_industry": "Industrie",
      "nav_construction": "Baustellen",
      "lang_en": "Englisch",
      "lang_de": "Deutsch",
      "lang_ar": "Arabisch",
      "about_title": "Über uns",
      "about_desc": "Mit mehr als 15 Jahren Erfahrung in technischen Lösungen ist Innosentra ein Unternehmen für Computer Vision und KI, das umsetzbare Erkenntnisse aus visuellen Daten liefert. Unsere Lösungen lassen sich in bestehende Kamerasysteme integrieren, wahren die Privatsphäre und unterstützen eine intelligentere Entscheidungsfindung in den Bereichen Einzelhandel, Sicherheit und anderen Branchen.",
      "hero_title": "Intelligente Softwarelösungen mit KI-Antrieb",
      "hero_subtitle": "Umwandlung visueller Daten in umsetzbare Geschäftseinblicke durch fortschrittliche Softwaretechnik. Wir spezialisieren uns auf KI und maschinelles Lernen, Computer-Vision-Systeme, Web- und Mobile-Anwendungsentwicklung, Datenbankarchitektur und umfassende technische Softwarelösungen powered by künstlicher Intelligenz.",
      // offer
      "offer_main_title": "Was wir anbieten?",
"offer_sol1_title": "KI-Engineering & Deep Learning",
"offer_sol1_desc": "Wir entwickeln und trainieren maßgeschneiderte Deep-Learning-Modelle für hochpräzise Erkennungs- und Identifikationsaufgaben.",
"offer_sol2_title": "Fortschrittliche Computer Vision",
"offer_sol2_desc": "Von der Re-Identifizierung über mehrere Kameras bis hin zur komplexen Objektverfolgung liefern wir anspruchsvolle visuelle Analysen.",
"offer_sol3_title": "Datenanalyse & Dashboards",
"offer_sol3_desc": "Rohvideostreams werden in aussagekräftige KPIs umgewandelt und auf intuitiven Echtzeit-Dashboards visualisiert.",
"offer_sol4_title": "Softwarebau",
"offer_sol4_desc": "Umfassende Web- und Mobile-Anwendungsentwicklung mit robuster Datenbankarchitektur, vom Konzept bis zur Bereitstellung.",

"solutions_section_title": "Entdecken Sie unsere Lösungen",
"solution_retail_title": "Einzelhandel- & Supermarkt-Lösungen",
"solution_retail_desc": "Intelligente Einzelhandelsanalysen, Personenzählung und Einblicke in das Kundenverhalten im Laden.",
"solution_traffic_title": "Intelligenter Verkehr & Parken",
"solution_traffic_desc": "Verkehrsflussüberwachung, Parkraummanagement und Fahrzeuganalysen.",
"solution_security_title": "Sicherheit & Überwachung",
"solution_security_desc": "Echtzeit-Bedrohungserkennung, Eindringlingswarnungen und automatisierte Überwachung.",
"solution_industry_title": "Industrielle Vision",
"solution_industry_desc": "Automatisierte Inspektion, Qualitätssicherung und Prozessoptimierung.",
"solution_construction_title": "Baustellenüberwachung",
"solution_construction_desc": "Arbeitersicherheit, PSA-Konformität und Überwachung der Standortaktivitäten.",
"solution_data_recovery_title": "Datenrettung",
"solution_data_recovery_desc": "Professionelle Datenrettung für defekte Festplatten mit einer Erfolgsquote von 92,5%.",

"dataRecovery": {
  "title": "Datenrettung",
  "menuItem": "Datenrettung",
  "shortDescription": "Professionelle Datenrettung für defekte Festplatten mit einer Erfolgsquote von 92,5%.",
  "hero": {
    "headline": "Festplatte defekt? Wir helfen gerne!",
    "subheadline": "Experten für Datenrettung und Wiederherstellung von Festplatten.",
    "description": "Wir bieten rund um die Uhr eine kostenlose und unverbindliche Diagnose. Sie erhalten eine Übersicht der wiederherstellbaren Daten, einen Diagnosebericht und ein unverbindliches Angebot, bevor Sie der Datenrettung zustimmen. Unsere Erfolgsquote liegt bei 92,5%.",
    "processText": "Mit speziell entwickelten Wiederherstellungsprozessen, modernster Technik und jahrzehntelanger Erfahrung sind wir Ihr Spezialist bei Festplattenschäden. Mit einer Erfolgsquote von 92,5% rekonstruieren wir Ihre Daten schnell und effizient."
  },
  "defects": {
    "title": "Häufige Festplattendefekte",
    "items": [
      {
        "name": "Motorschaden",
        "desc": "Defekte am Motor verhindern das Hochdrehen der Festplatte. Häufige Ursache sind physische Schäden, z. B. durch Herunterfallen."
      },
      {
        "name": "Elektronikschaden",
        "desc": "Elektronikschäden treten oft an den Platinen auf, die die Funktionen der Festplatte steuern. Ursachen sind meist Bauteilausfälle, physische Einwirkungen oder Spannungsspitzen."
      },
      {
        "name": "Headcrash",
        "desc": "Ein Headcrash beschreibt den Ausfall der internen Lese-/Schreibköpfe, z. B. durch natürlichen Verschleiß, physische Einwirkung oder Staubpartikel im Laufwerk."
      },
      {
        "name": "Firmware-Defekt",
        "desc": "Firmware ist in die Festplatte integrierte Software. Ein Firmware-Fehler kann zu Defekten oder Totalausfall führen und zeigt oft ähnliche Symptome wie Headcrashes oder Motorschäden."
      },
      {
        "name": "Logischer Schaden",
        "desc": "Logische Schäden entstehen nicht durch physische Defekte: Die Komponenten funktionieren, aber ein logischer Zugriff ist nicht mehr möglich. Dazu zählen z. B. RAID1-Probleme, Softwarebeschädigungen oder formatierte Festplatten."
      }
    ]
  },
  "howItWorks": {
    "title": "Wie funktioniert die Festplatten-Datenrettung?",
    "description": "Je nach Schadensart kommen unterschiedliche Methoden und Ausleseverfahren zum Einsatz. Unsere speziell geschulten Ingenieure und moderne Ausstattung bieten die beste Grundlage für professionelle Unternehmens-Datenrettung. Wir verfügen über das Know-how und die Technik, um Ihre Unternehmensdaten schnell, effizient und kostengünstig wiederherzustellen. Kontaktieren Sie uns für ein unverbindliches Angebot per Telefon oder E-Mail."
  },
  "whyUs": {
    "title": "Warum uns wählen?",
    "items": [
      {
        "title": "Unsere Ausstattung",
        "desc": "Von Lötkolben bis Reinraumlaboren - wir verfügen über modernste Infrastruktur."
      },
      {
        "title": "Unsere Erfahrung",
        "desc": "Wir haben bereits über 140.000 Datenträger aller Art diagnostiziert."
      },
      {
        "title": "Unsere kostenlose Diagnose",
        "desc": "Wir bieten eine kostenlose Diagnose innerhalb von 24-48 Stunden inklusive Diagnosebericht und unverbindlichem Angebot."
      },
      {
        "title": "Unser Prozess",
        "desc": "Wir sind nach ISO 9001 und 14001 zertifiziert und stehen für professionellen Service auf höchstem Niveau."
      }
    ]
  },
  "videoSection": {
    "text": "Unser Unternehmensvideo zeigt Ihnen alles Wichtige über unseren Datenrettungsservice."
  },
  "steps": {
    "title": "3 Schritte zu Ihren Unternehmensdaten",
    "items": [
      {
        "step": "1",
        "title": "Kontakt & Diagnose",
        "desc": "Senden Sie uns Ihr Medium zur kostenlosen Diagnose. Verpacken Sie es sorgfältig, laden Sie das Versandformular herunter und legen Sie es bei. Versenden Sie das Medium sicher per DHL oder Kurierdienst."
      },
      {
        "step": "2",
        "title": "Datenübersicht",
        "desc": "Sie erhalten ein unverbindliches Angebot inkl. Online-Datenliste zur Übersicht. Nach Erhalt erhalten Sie eine persönliche Referenznummer. Nach Defektanalyse und Reparatur senden wir eine Übersicht der wiederherstellbaren Daten und ein Angebot."
      },
      {
        "step": "3",
        "title": "Rückversand Ihrer Daten",
        "desc": "Wir senden Ihre Unternehmensdaten auf einem neuen Medium zurück. Nach Zahlungseingang erhalten Sie Ihr Backup innerhalb von 24 Stunden per Sendungsverfolgung. Aus Sicherheitsgründen speichern wir eine Kopie 7 Tage lang und löschen sie danach."
      }
    ]
  }
},

  //  steps
    "steps_main_title": "Wie wir arbeiten?",
"steps_s1_title": "Bedarfsanalyse",
"steps_s1_desc": "Wir beginnen mit der Analyse Ihrer Anforderungen und Ihres Systems, um einen technischen Fahrplan zu erstellen, der auf Ihre Ziele abgestimmt ist.",
"steps_s2_title": "KI-Algorithmen entwickeln",
"steps_s2_desc": "Entwicklung und Feinabstimmung von KI- und Computer-Vision-Algorithmen, die speziell auf Ihren Anwendungsfall zugeschnitten sind.",
"steps_s3_title": "Auf Geräten bereitstellen",
"steps_s3_desc": "Betreiben Sie die Lösung auf dedizierten Geräten für sofortige Leistung und Echtzeit-Analyse direkt vor Ort.",
"steps_s4_title": "Live-Dashboards",
"steps_s4_desc": "Interaktive Dashboards, die betriebliche Transparenz mit Echtzeitstatistiken und Warnmeldungen bieten.",
// 
"legal_site_info": "Seiten-Info",
"legal_privacy": "Datenschutzerklärung",
"legal_cookies": "Cookie-Einstellungen",
"legal_terms": "Nutzungsbedingungen",
"legal_security": "Sicherheit",
"footer_all_rights": "Alle Rechte vorbehalten.",
// 
"chart_intro_title": "Von Kamera zur Entscheidung",
  "chart_intro_desc": "Verfolgen Sie den Datenweg von der Signalerfassung über Geräte, durch intelligente Analyse bis hin zu umsetzbaren Ergebnissen.",
"chart_item_1": "Fahrzeug- & Kennzeichenanalyse",
"chart_item_2": "Waffenerkennung",
"chart_item_3": "Unfallerkennung",
"chart_item_4": "Feuererkennung",
"chart_item_5": "Einzelhandelsanalyse",
"chart_step2_title": "KI-Erkennung & Datenverarbeitung",
"chart_step2_desc": "Intelligente Kameras identifizieren wichtige Ereignisse (Fahrzeuge, Bedrohungen, Demografie), während der sichere Server diese Daten sofort sammelt und für umsetzbare Erkenntnisse organisiert.",
"chart_step3_title": "Leicht lesbare Ergebnisse anzeigen",
"chart_step3_desc": "Sehen Sie klare Diagramme und Zahlen auf Ihrem Dashboard, um Einblicke zu gewinnen und bessere Geschäftsentscheidungen zu treffen.",
 

"contact_title": "Kontaktieren Sie uns",
"contact_subtitle": "Haben Sie eine Frage oder ein Projekt im Sinn? Lassen Sie uns besprechen, wie Innosentra Ihnen helfen kann, visuelle Daten in umsetzbare Erkenntnisse zu verwandeln.",
"contact_info_title": "Kontaktinformationen",
"contact_form_title": "Schicken Sie uns eine Nachricht",
"contact_label_name": "Vollständiger Name",
"contact_label_email": "E-Mail-Adresse",
"contact_label_phone": "Telefonnummer (Optional)",
"contact_label_message": "Ihre Nachricht",
"contact_placeholder_message": "Erzählen Sie uns von Ihrem Projekt oder Ihrer Anfrage...",
"contact_btn_send": "Nachricht senden",
"contact_btn_sending": "Wird gesendet...",
"contact_secure_text": "Ihre Informationen sind sicher und vertraulich",
"contact_success_msg": "Nachricht erfolgreich gesendet! Wir werden Sie bald kontaktieren.",
"contact_error_msg": "Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
"contact_phone": "Telefon",
"contact_email": "E-Mail",
// Validation
"val_name_min": "Der Name muss mindestens 2 Zeichen lang sein",
"val_name_req": "Name ist erforderlich",
"val_email_valid": "Geben Sie eine gültige E-Mail-Adresse ein",
"val_email_req": "E-Mail ist erforderlich",
"val_phone_valid": "Bitte geben Sie eine gültige Telefonnummer ein",
"val_msg_min": "Die Nachricht muss mindestens 10 Zeichen lang sein",
"val_msg_req": "Nachricht ist erforderlich",// بقية المفاتيح...

"gallery_label_people_counting": "Personenzählung & ReID",
"gallery_label_tracking": "Tracking-Beispiel",
"gallery_label_gender_age": "Geschlechts- & Altersklassifizierung",
"gallery_label_heatmap": "Filial-Heatmap",
"gallery_label_journey": "Kundenweg-Analyse",

// Retail Section
"retail_hero_title": "Innosentra Einzelhandelsanalyse",
"retail_hero_subtitle": "Verwandeln Sie Ihre Überwachungskameras in Ihren intelligentesten Geschäftsberater.",
"retail_analyze_label": "Was wir analysieren",
"retail_matters_label": "Warum es wichtig ist",

// Section 1
"retail_s1_title": "Intelligente Kundenanalyse",
"retail_s1_subtitle": "Verstehen Sie in Echtzeit, wer Ihre Kunden sind und wie sie sich verhalten.",
"retail_s1_f1": "Kundeninteraktionen nach Zeit und Tag",
"retail_s1_f2": "Klassifizierung Erwachsener vs. Kind",
"retail_s1_f3": "Geschlechteranalyse",
"retail_s1_f4": "Durchschnittliche Verweildauer",
"retail_s1_f5": "Schaufenster-Engagement vor dem Eintritt",
"retail_s1_f6": "Emotionsanalyse",
"retail_s1_i1": "Personalbesetzung und Betrieb optimieren",
"retail_s1_i2": "Wissen, was Ihre Kunden anzieht",
"retail_s1_i3": "Echtes Kundeninteresse verstehen",

// Section 2
"retail_s2_title": "Customer Journey & Heatmaps",
"retail_s2_subtitle": "Sehen Sie Ihr Geschäft mit den Augen Ihrer Kunden.",
"retail_s2_f1": "Hot- & Cold-Zone Heatmaps",
"retail_s2_f2": "Bereiche mit hoher Verweildauer",
"retail_s2_f3": "Kundenwege über mehrere Kameras",
"retail_s2_i1": "Ladenlayout verbessern",
"retail_s2_i2": "Produktplatzierung optimieren",
"retail_s2_i3": "Engagement und Konversion steigern",

// Section 3
"retail_s3_title": "Analyse-Dashboard",
"retail_s3_subtitle": "Alle Erkenntnisse werden über ein klares, intuitives Dashboard geliefert.",
"retail_s3_f1": "Echtzeit- und historische KPIs",
"retail_s3_f2": "Besuchertrends und Vergleiche",
"retail_s3_f3": "Visuelle Diagramme und Heatmaps",
"retail_s3_f4": "Alle Daten an einem Ort sehen",
"retail_s3_i1": "Schnellere Entscheidungsfindung",
"retail_s3_i2": "Klare Leistungsverfolgung",
"retail_s3_i3": "Daten, die jeder verstehen kann",

// Mobile App
"retail_mobile_title": "Analysen überall und jederzeit per mobiler App",
"retail_mobile_desc": "Greifen Sie direkt von Ihrem Mobilgerät auf alle Einzelhandelserkenntnisse zu. Die Anwendung konzentriert sich auf klare Datenvisualisierung ohne Komplexität.",
"retail_mobile_f1": "Live-Kundenanzahl und Trends",
"retail_mobile_f2": "Heatmaps und Journey-Visualisierungen",
"retail_mobile_f3": "Kartenbasierte Bewegungsverfolgung",
"retail_mobile_f4": "Einfache KPI-Ansichten für schnelle Entscheidungen",
"retail_mobile_f5": "Optimiert für Manager von unterwegs",

"gallery_reid": "Personenzählung & ReID",
"gallery_tracking": "Tracking-Beispiel",
"gallery_gender": "Geschlechts- & Altersklassifizierung",
"gallery_heatmap": "Filial-Heatmap",
"gallery_journey": "Kundenweg-Analyse",
"gallery_dashboard": "Haupt-Dashboard",
"gallery_report": "Bericht-Ansicht",



// Site Info Section
"site_info_title": "Seiteninformationen",
"site_info_about_title": "Über die INNOSENTRA-Plattform",
"site_info_about_text": "Innosentra ist ein weltweit führender Anbieter von KI-gestützten Analysen und intelligenten Überwachungslösungen. Diese Website dient als primäre digitale Schnittstelle für unsere Kunden in den Bereichen Einzelhandel, Bauwesen und Industrie. Unsere Mission ist es, Rohdaten durch modernste Computer-Vision-Technologie in umsetzbare Erkenntnisse zu verwandeln.",
"site_info_ownership_title": "Besitz und Betrieb",
"site_info_ownership_text": "Diese Website wird von der Innosentra Group besessen und betrieben. Alle Module, einschließlich 'Einzelhandelslösungen', 'Verkehrsanalysen' und 'Sicherheitssysteme', sind proprietäre Technologien, die von unseren internen Ingenieurteams entwickelt wurden.",
"site_info_tech_title": "Technische Spezifikationen",
"site_info_tech_text": "Die Plattform nutzt fortschrittliches WebGL zur Datenvisualisierung und sichere WebSocket-Protokolle für Echtzeit-Telemetrie. Wir unterstützen alle modernen Browser und bieten ein responsives Erlebnis für Mobil- und Tablet-Geräte.",


// Privacy Policy Section
"privacy_title": "Datenschutzerklärung",
"privacy_collection_title": "Datenerhebung",
"privacy_collection_text": "Wir sammeln Informationen, um allen unseren Nutzern bessere Dienste anzubieten. Dies umfasst Informationen, die Sie uns zur Verfügung stellen, wie Ihren Namen und Ihre E-Mail-Adresse.",
"privacy_usage_title": "Datennutzung",
"privacy_usage_text": "Wir verwenden die von uns gesammelten Daten, um unsere Dienste bereitzustellen, zu warten, zu schützen und zu verbessern.",

// Terms of Use Section
"terms_title": "Nutzungsbedingungen",
"terms_agreement_header": "Nutzervereinbarung",
"terms_agreement_text": "Durch den Zugriff auf diese Website erklären Sie sich damit einverstanden, an diese Nutzungsbedingungen der Website gebunden zu sein.",
"terms_license_header": "Lizenz",
"terms_license_text": "Es wird die Erlaubnis erteilt, vorübergehend eine Kopie der Materialien auf der Website von Innosentra ausschließlich für die persönliche Betrachtung herunterzuladen.",


// Cookies Section
"cookies_title": "Cookie-Einstellungen & Richtlinien",
"cookies_what_is_title": "Was sind Cookies?",
"cookies_what_is_desc": "Cookies sind kleine Textdateien, die von Websites, die Sie besuchen, auf Ihrem Computer abgelegt werden. Sie werden häufig verwendet, damit Websites effizienter funktionieren.",
"cookies_essential_title": "1. Essenzielle Cookies",
"cookies_essential_desc": "Diese sind für das ordnungsgemäße Funktionieren der Website erforderlich und können nicht abgeschaltet werden.",
"cookies_analytical_title": "2. Analytische Cookies",
"cookies_analytical_desc": "Sie ermöglichen es uns, die Anzahl der Besucher zu erkennen und zu zählen und zu sehen, wie sie sich auf der Website bewegen.",


// Security Info Section
"security_info_title": "Sicherheitsstandards",
"security_info_protection_header": "Datenschutz",
"security_info_protection_text": "Wir setzen Verschlüsselung nach Industriestandard ein, um sicherzustellen, dass Ihre Daten während der Übertragung und im Ruhezustand sicher sind.",

// Traffic Section
"traffic_hero_title": "Intelligenter Verkehr & Parken: Ein integriertes Managementsystem",
"traffic_hero_subtitle": "Wir verwandeln gewöhnliche Überwachungskameras in intelligente elektronische Augen, die öffentliche Straßen, Gebäude und Parkplätze analysieren.",
"traffic_section_title": "Intelligente Verkehrsflussanalyse",
"traffic_section_subtitle": "Wir bieten ein intelligentes, benutzerfreundliches System, das die Straßenaktivität automatisch analysiert und Parkplätze effizient und autonom verwaltet.",
"traffic_track_label": "Was wir erfassen",
"traffic_matters_label": "Warum ist das wichtig?",

// Features
"traffic_f1": "Automatische Fahrzeugzählung auf Straßen und in Parkhäusern.",
"traffic_f2": "Vollautomatische Steuerung von Ein- und Ausfahrtsschranken ohne menschliches Eingreifen.",
"traffic_f3": "Echtzeitinformationen über freie und verfügbare Parkplätze.",
"traffic_f4": "Sofortige Erkennung von Verkehrsstaus und blockierten Straßen.",
"traffic_f5": "Automatische Nummernschilderkennung an Schranken und auf Straßen.",

// Importance
"traffic_i1": "Ermöglicht Fahrern eine schnellere und stressfreie Parkplatzsuche.",
"traffic_i2": "Gewährleistet einen reibungslosen Verkehrsfluss beim Ein- und Ausfahren.",
"traffic_i3": "Sorgt für mehr Sicherheit und Schutz für Fahrer und Fußgänger.",

// Industry Section
"industry_hero_title": "Industrielle KI-Vision: Eine Revolution in der Qualitätskontrolle",
"industry_hero_subtitle": "Wir sichern die Produktionsqualität durch vollautomatische Inspektionssysteme für moderne Fabriken und Industrieanlagen.",
"industry_section_title": "Präzise automatische Inspektionssysteme",
"industry_section_subtitle": "Wir streben eine fehlerfreie Fertigung durch den Einsatz von optischen Hochgeschwindigkeits-Verarbeitungstechnologien an.",
"industry_analyze_label": "Was wir analysieren",
"industry_matters_label": "Warum ist das wichtig?",
"industry_a1": "Erkennung von Defekten, Verunreinigungen und Kratzern auf Materialoberflächen.",
"industry_a2": "Überprüfung der korrekten Montage und Vollständigkeit von Teilen.",
"industry_a3": "Sicherstellung der Genauigkeit und Unversehrtheit der Produktverpackung.",
"industry_a4": "Automatisches Sortieren und Klassifizieren von Produkten nach bestimmten Kriterien.",
"industry_m1": "Reduziert Materialverschwendung und Ausschuss erheblich.",
"industry_m2": "Führt zu einer spürbaren Steigerung der Produktivität und Betriebseffizienz.",
"industry_m3": "Hilft langfristig bei der Senkung der Betriebskosten.",

// Security Section
"security_hero_title": "Fortschrittliche intelligente Überwachungssysteme",
"security_hero_subtitle": "Wir bieten effektive, autonome Sicherheitslösungen für kritische Infrastrukturen.",
"security_section_title": "Proaktive intelligente Bedrohungserkennung",
"security_section_subtitle": "Der Übergang von der passiven Aufzeichnung zur proaktiven Vorbeugung von Vorfällen in Echtzeit.",
"security_cap_label": "Kernkompetenzen",
"security_val_label": "Geschäftlicher & Sicherheitstechnischer Wert",
"security_c1": "Gesichtserkennungstechnologie und Personenidentifizierung.",
"security_c2": "Erkennung von Eindringlingen und unbefugtem Zutritt in Sperrbereiche.",
"security_c3": "Sofortige Warnungen bei Erkennung verdächtiger zurückgelassener Gegenstände.",
"security_c4": "Analyse von Herumlungern und abnormalen Bewegungen.",
"security_v1": "Bietet eine automatisierte Überwachung rund um die Uhr.",
"security_v2": "Verkürzt die Reaktionszeit auf Vorfälle und Sicherheitsbedrohungen erheblich.",
"security_v3": "Bietet bei Bedarf schnellen und einfachen Zugriff auf hochauflösende Aufnahmen.",

// Construction Section
"construction_hero_title": "Verbesserung der Sicherheit auf Baustellen",
"construction_hero_subtitle": "Schutz der Arbeitskräfte durch fortschrittliche KI-Vision-Technologien.",
"construction_section_title": "Automatische Einhaltung von Sicherheitsprotokollen",
"construction_section_subtitle": "Gewährleistung der strikten und automatischen Einhaltung von Sicherheitsvorschriften vor Ort.",
"construction_site_label": "Was wir überwachen",
"construction_benefit_label": "Hauptvorteile",
"construction_s1": "Automatische Erkennung der PSA-Einhaltung (Helme, Warnwesten).",
"construction_s2": "Kontinuierliche Überwachung von Gefahrenzonen und Warnung bei Annäherung.",
"construction_s3": "Sofortige Warnungen bei Stürzen von Arbeitern oder Unfällen.",
"construction_s4": "Überwachung der Interaktionen zwischen Arbeitern und schweren Maschinen.",
"construction_b1": "Führt zu weniger Unfällen und Verletzungen auf der Baustelle.",
"construction_b2": "Gewährleistet die vollständige Einhaltung gesetzlicher Vorschriften.",
"construction_b3": "Ermöglicht Projektleitern die Fernüberwachung des Arbeitsablaufs und der Sicherheit.",

"contact_email_value":"manar.bakro@innosentra.com",
  "contact_phone_value":"0049 163 997 0059",
"contact_address": "Adresse",
  "contact_address_line1": "Georgstr. 47",
  "contact_address_line2": "51145 Köln",
  "contact_address_line3": "Deutschland",


  "software_hero_title": "Integrierte Softwaretechnik & Intelligente Systeme",
      "software_hero_subtitle": "Wir bieten einen vollständigen Softwareentwicklungszyklus (SDLC), beginnend bei komplexer Algorithmen-Entwicklung und massiver Datenbankarchitektur (SQL & NoSQL) bis hin zu High-End Web- und Mobile-Apps sowie sicherem Deployment und Cloud-Hosting.",
      
      "software_section_title": "Technische Exzellenz in jeder Codezeile",
      "software_section_subtitle": "Unser Team verbindet die Präzision mathematischer Algorithmen mit der Eleganz von UI/UX, mit striktem Fokus auf Leistung, Sicherheit und Skalierbarkeit.",
      
      "software_col1_label": "Technische Kernkompetenzen",
      "software_col2_label": "Infrastruktur & Qualitätssicherung",

      // List 1
      "software_c1": "Full-Stack Webentwicklung & Professionelle Mobile Apps",
      "software_c2": "Komplexe Datenbankarchitektur & Big Data Management",
      "software_c3": "Entwicklung intelligenter Algorithmen & Datenstrukturen",
      "software_c4": "API-Integration & Microservices-Architektur",
      
      // List 2
      "software_c5": "Automatisierte Bereitstellung (CI/CD), Server & Cloud-Hosting",
      "software_c6": "Softwaretests (QA), Leistungs- & Qualitätssicherung",
      "software_c7": "Datenanalyse, Reporting & Business Intelligence",
      "software_c8": "Systemsicherheit, Datenschutz & Verschlüsselung",

      // معلومات الديمو 

      "demo_button": "Demo anfordern",
      "hero_products_button": "Produkte ansehen",
      "demo_btn_request": "Individuelle Demo anfordern",
"demo_page_title": "System-Demo anfordern",
"demo_page_subtitle": "Bitte geben Sie Details zu Ihrer Umgebung und den gewünschten Spezifikationen an, damit wir eine auf Ihre Bedürfnisse zugeschnittene Demo entwerfen können.",
"demo_label_company": "Name des Unternehmens",
"demo_label_industry": "Branche (Einzelhandel, Verkehr..)",
"demo_label_reqs": "Erforderliche Spezifikationen & Daten",
"demo_placeholder_reqs": "Z.B.: Anzahl der Kameras, Art der zu analysierenden Daten, das Problem, das Sie lösen möchten...",
"demo_btn_submit": "Demo-Anfrage senden",
"val_company_req": "Firmenname ist erforderlich",
"val_industry_req": "Branche ist erforderlich",
"val_req_req": "Bitte geben Sie einige Details für die Demo an",

"nav_agriculture": "Landwirtschaft",
  "nav_products": "Produkte",
  "agriculture_hero_title": "KI in der Landwirtschaft",
  "agriculture_hero_subtitle": "Verbesserung der modernen Landwirtschaft mit intelligenten Computer-Vision-Lösungen für die Pflanzenanalyse und Ertragssteigerung.",
  "agriculture_section_title": "Intelligentes Pflanzenmanagement",
  "agriculture_section_subtitle": "Nutzen Sie die Leistungsfähigkeit der KI, um landwirtschaftliche Flächen mit hoher Präzision zu überwachen und datengesteuerte Entscheidungen in Echtzeit zu treffen.",
  "agriculture_track_label": "Wichtige Anwendungen",
  "agriculture_f1": "Genaue und automatisierte Baumzählung auf großen Feldern",
  "agriculture_f2": "Früherkennung von Pflanzenkrankheiten und Schädlingen",
  "agriculture_f3": "Umfassende Analyse der Pflanzengesundheit",
  "agriculture_f4": "Ertragsschätzung und -prognose",
  "agriculture_f5": "Optimierung der Ressourcenverwaltung (Wasser und Dünger)",
  "agriculture_matters_label": "Warum ist das wichtig?",
  "agriculture_i1": "Frühzeitiges Eingreifen zum Schutz der Pflanzen und zur Reduzierung von Verlusten",
  "agriculture_i2": "Maximierung der Ernteerträge bei minimierten Kosten",
  "agriculture_i3": "Zeit- und Arbeitsersparnis bei der Feldvermessung",
  "products_title": "Edge-AI-Analysegerat fur den Einzelhandel",
  "products_subtitle": "Ein intelligentes Gerat, das Kameradaten lokal verarbeitet, um Datenschutz zu sichern und Internetverbrauch zu reduzieren - mit einem zentralen Dashboard fur volle Transparenz.",
  "products_no_cloud": "0% Cloud-Dienste",
  "products_hw_title": "Hardware: Edge-AI-Gerät pro Filiale",
  "products_hw_desc": "Das Gerät verarbeitet Kameradaten lokal am Edge, um Datenübertragung zu minimieren, die Privatsphäre zu schützen und den Internetverbrauch zu reduzieren—bei schnellen Reaktionszeiten.",
  "products_hw_f1": "On-Device-Verarbeitung ohne Übertragung von Rohmaterial",
  "products_hw_f2": "Edge AI für Analyse mit geringer Latenz in Echtzeit",
  "products_hw_f3": "Gerätegröße passend zu Kamerazahl & Projektumfang",
  "products_hw_f4": "Kompatibel mit bestehenden Kameras (Datenschutz by Design)",
  "products_hw_f5": "Für den Filialbetrieb gebaut: schnelle Installation",
  "products_sw_title": "Software: Einheitliches Dashboard & smarte Analytik",
  "products_sw_desc": "Wir machen aus Analyseergebnissen umsetzbare KPIs, Heatmaps und konfigurierbare Warnungen—für alle Filialen an einem Ort.",
  "products_image_alt": "Produktbild",
  "products_section_value_title": "Welchen Mehrwert bietet das Produkt?",
  "products_section_value_desc": "Wir verwandeln Ihre vorhandenen Kameras in ein vollstandiges Analysesystem, das Kundenverhalten in Echtzeit auswertet und in klare Kennzahlen uberfuhrt. Die GerategroBe wird an das Projektvolumen angepasst. Fur Filialketten liefern wir pro Standort ein Gerat und bundeln alle Daten in einem gemeinsamen Dashboard.",
  "products_kpi_title": "Wichtige Kennzahlen im Uberblick",
  "products_kpi_visitors": "Anzahl von Besuchern und Kunden fur frei wahlbare Zeitraume.",
  "products_kpi_age": "Auswertung der Altersgruppen.",
  "products_kpi_gender": "Geschlechterverteilung: mannlich und weiblich.",
  "products_kpi_dwell": "Durchschnittliche Verweildauer und Kaufdauer.",
  "products_kpi_purchase": "Anzahl der Kaufer im Vergleich zu Nichtkaufern.",
  "products_kpi_sentiment": "Kundenzufriedenheit durch Analyse von Gesichtsemotionen.",
  "products_kpi_heatmap": "Heatmaps zur Erkennung von Hotspots und Stauzonen im Store.",
  "products_ops_title": "Intelligente Warnungen + technischer Support",
  "products_ops_desc": "Wir richten individuelle Warnregeln nach Ihren Anforderungen ein und ubernehmen die technische Begleitung, besonders in der Startphase, mit kontinuierlichem Support.",
  "products_alert_cashier": "Warnung bei Uberlastung im Kassenbereich.",
  "products_alert_afterhours": "Sofortwarnung bei unbefugtem Zutritt nach Ladenschluss.",
  "products_alert_custom": "Flexible, vollstandig anpassbare Warnszenarien.",

  "nav_product_edge_analytics": "Edge AI Analysegerät",
  "nav_product_surveillance_tower": "Überwachungsturm",
  "surveillance_title": "Überwachungsturm für Baustellen",
  "surveillance_subtitle": "Unabhängige intelligente Überwachungseinheit",
  "surveillance_desc": "Eine Komplettlösung zum Schutz von Baustellen und Infrastrukturen mit sofortigen Warnungen und intelligenter Überwachung rund um die Uhr.",
  "surveillance_f1": "Unabhängige Überwachungseinheit für Baustellen, Infrastrukturprojekte und temporäre Standorte.",
  "surveillance_f2": "Notfallwarnungen bei jedem Vorfall.",
  "surveillance_f3": "Rund-um-die-Uhr-Überwachung (24/7).",
  "surveillance_f4": "Preise basierend auf der Mietdauer.",
  "surveillance_f5": "Betrieb über Batterien oder direkte Stromversorgung – flexibel für Standorte ohne Strom.",
  "surveillance_f6": "Hohes Design, um Manipulationen oder unbefugten Zugriff zu verhindern.",
  "surveillance_f7": "Vandalismussicher und anpassbar, bietet eine kostengünstige Lösung für Standorte jeder Größe.",
  "surveillance_f8": "Schnelle Bereitstellung – kann innerhalb weniger Stunden eingerichtet werden.",
  "surveillance_f9": "Warnungen können je nach Szenario durch Menschen oder Tiere ausgelöst werden.",
  "surveillance_f10": "Sofortige und äußerst flexible Alarme.",
  "surveillance_f11": "Robustes, wetterfestes Gehäuse (IP67).",
  "surveillance_f12": "Nachtsichtfunktionen.",

  "nav_product_home_monitor": "Heimmonitor",
  "home_monitor_title": "Intelligenter Heimmonitor",
  "home_monitor_subtitle": "Intelligenter, maßgeschneiderter Schutz für Sicherheit rund um die Uhr",
  "home_monitor_desc": "Erleben Sie maximale Sicherheit mit unserem fortschrittlichen Überwachungssystem. Es gibt Ihnen die volle Kontrolle über den Schutz Ihrer Räumlichkeiten, mit intelligenten Optionen zur Anpassung der Betriebszeiten und Priorisierung von Alarmen passend zu Ihrem Lebensstil.",
  "home_monitor_f1": "Intelligente Zeitplanung: Legen Sie die Aktivitätszeiten des Geräts (z. B. während der Arbeit oder beim Schlafen) genau fest und wählen Sie Ihre wichtigsten Alarme aus.",
  "home_monitor_f2": "Sofortige Benachrichtigungen: Bleiben Sie mit Echtzeit-Alarmen direkt auf Ihrem Gerät über ungewöhnliche Aktivitäten informiert.",
  "home_monitor_f3": "Erweiterte Erkennung: Die intelligente Unterscheidung zwischen Menschen und Haustieren minimiert Fehlalarme.",
  "home_monitor_f4": "Nahtlose mobile Integration: Verwalten und steuern Sie Ihr System ganz einfach von überall über die mobile App.",
  "home_monitor_f5": "Präzise 24/7-Überwachung der Räumlichkeiten.",
  "home_monitor_f6": "Hohe Flexibilität bei individuellen Anfragen.",
  "home_monitor_f7": "Geräteabmessungen: klein, 95 mm * 66 mm."
  
}
  }
};
const savedLanguage = localStorage.getItem('userLanguageChoice');

i18n
  .use(initReactI18next)
  .init({
    resources,
    // إذا كان هناك لغة محفوظة، نستخدمها، وإلا الإنجليزية كبداية (سيتم التحقق من الـ IP لاحقاً)
    lng: savedLanguage || 'en', 
    fallbackLng: "en",
    interpolation: { 
      escapeValue: false 
    }
  });

// نطبق اتجاه الصفحة فوراً عند بدء التشغيل إذا كانت اللغة محفوظة



// --- 3. خدمة اللغة (Named Export) ---
// هذا الكائن يحتوي على كل الوظائف التي تحتاجها App.js و Navbar
// دمجنا المنطق هنا لضمان عدم حدوث أخطاء استيراد

export const languageService = {
  /**
   * الدالة الرئيسية التي يتم استدعاؤها في App.js عند تحميل الموقع
   */
async detectAndApply() {
    console.log('🔄 Starting detection logic...');

    // 1. الأولوية القصوى: هل اختار المستخدم لغة سابقاً؟ (يدوي)
    const storedLang = localStorage.getItem('userLanguageChoice');
    if (storedLang) {
      console.log('✅ Found stored user preference:', storedLang);
      this.changeLanguage(storedLang, false); // false = لا تحفظ مرة أخرى لأنها محفوظة
      return storedLang;
    }

    // 2. هل قمنا بالكشف التلقائي في هذه الجلسة من قبل؟ (لتوفير طلبات السيرفر)
    const sessionLang = sessionStorage.getItem('autoDetectedSession');
    if (sessionLang) {
       console.log('⚡ Using session cached detection:', sessionLang);
       this.changeLanguage(sessionLang, false); 
       return sessionLang;
    }

    console.log('🌍 Checking IP for location (First time)...');
    
    let detectedLang = 'en'; // قيمة افتراضية
    let countryCode = 'US';

    try {
      // محاولة 1: خدمة ipapi.co
      const response = await fetch('https://ipapi.co/json/');
      if (response.ok) {
        const data = await response.json();
        countryCode = data.country_code;
        console.log('📍 IP Service 1 (ipapi.co) detected:', countryCode);
      } else {
        throw new Error('Service 1 failed');
      }
    } catch (e1) {
      console.warn('⚠️ Service 1 failed, trying Service 2...');
      try {
        // محاولة 2: خدمة ip-api.com (احتياطية)
        const response2 = await fetch('http://ip-api.com/json/'); // ملاحظة: قد لا تعمل على https في بعض الأحيان لذا الحذر
        if (response2.ok) {
             const data2 = await response2.json();
             countryCode = data2.countryCode;
             console.log('📍 IP Service 2 (ip-api) detected:', countryCode);
        }
      } catch (e2) {
        console.warn('❌ Both IP services failed. Falling back to browser.');
      }
    }

    // خريطة الدول
    const countryMap = {
      'SY': 'ar', 'LB': 'ar', 'JO': 'ar', 'SA': 'ar', 'AE': 'ar', 
      'QA': 'ar', 'KW': 'ar', 'BH': 'ar', 'OM': 'ar', 'EG': 'ar', 'TR': 'ar',
      'DE': 'de', 'AT': 'de', 'CH': 'de'
    };

    // تحديد اللغة بناءً على الدولة
    if (countryMap[countryCode]) {
        detectedLang = countryMap[countryCode];
    } else {
        // 3. إذا فشل الـ IP أو الدولة غير موجودة -> نستخدم لغة المتصفح
        const browserLang = navigator.language || navigator.userLanguage || 'en';
        console.log('💻 Checking Browser Language:', browserLang);
        
        if (browserLang.startsWith('ar')) detectedLang = 'ar';
        else if (browserLang.startsWith('de')) detectedLang = 'de';
    }

    console.log(`🎯 Final Decision: ${detectedLang}`);

    // تطبيق اللغة
    await this.changeLanguage(detectedLang, false);
    
    // حفظ في الجلسة فقط (ليس التخزين الدائم) لكي لا نعيد الطلب كل مرة نعمل ريفريش
    sessionStorage.setItem('autoDetectedSession', detectedLang);
    
    return detectedLang;
  },

  /**
   * دالة تغيير اللغة وتطبيق الاتجاه
   */
  async changeLanguage(lang, isUserChoice = true) {
    // 1. تغيير اللغة في i18n
    await i18n.changeLanguage(lang);
    
    // 2. تحديث الاتجاه (HTML Dir)
  

    // 3. حفظ الاختيار (فقط إذا كان اختيار المستخدم يدوياً)
    if (isUserChoice) {
        console.log('💾 Saving user choice to localStorage:', lang);
        localStorage.setItem('userLanguageChoice', lang);
        localStorage.removeItem('autoDetectedLanguage'); // تنظيف
    }

    return lang;
  },

  getLanguageSource() {
    if (localStorage.getItem('userLanguageChoice')) return 'manual';
    return 'auto';
  },

  getAvailableLanguages() {
    return ['en', 'de', 'ar'];
  }
};

// Default Export
export default i18n;
>>>>>>> 31f9cb48248f2759ad6ba46eeb75e3c66f4dae52
