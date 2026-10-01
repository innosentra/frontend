import React, { useState, useEffect,useMemo, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';

// الاستيرادات الأساسية
import './styles/global.css';
import "@fontsource/sn-pro/400.css";
import "@fontsource/sn-pro/600.css";
import "@fontsource/sn-pro/700.css";

// النظام الدولي
import i18n, { languageService } from './i18n';

// المكونات
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import Loader from './components/Loader';
import { Analytics } from '@vercel/analytics/react';

// الصفحات
import { Contact } from './components/Contact';
import { RetailSolutions } from './components/RetailSolutions';
import { Traffic } from './components/Traffic';
import { Software } from './components/Software';
import { Security } from './components/Security';
import { Industry } from './components/Industry'; 
import { Construction } from './components/Construction';
import { DataRecovery } from './components/DataRecovery';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfUse } from './components/TermsOfUse';
import { CookiesSettings } from './components/CookiesSettings';
import { SecurityInfo } from './components/SecurityInfo';
import { SiteInfo } from './components/SiteInfo';
import { DemoRequest } from './components/DemoRequest';
import { Agriculture } from './components/Agriculture';
import { EdgeAnalytics } from './components/EdgeAnalytics';
import { SurveillanceTower } from './components/SurveillanceTower';
import { HomeMonitor } from './components/HomeMonitor';
import heroImage from './images/logo.webp';


const preloadImage = (src) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve();
    img.onerror = () => {
        console.warn('Failed to preload image:', src); // للتنبيه فقط
        resolve(); 
    };
  });
};

const HomeLoader = ({ savedComponents, onSave }) => {
  // استخدام useMemo لتجنب إعادة إنشاء المصفوفة في كل ريندر
  const homeNames = useMemo(() => ['Hero','Offer','About','Software','Chart','SolutionsList','LegalMenu'], []);
  
  const [loadedCount, setLoadedCount] = useState(0);
  const [components, setComponents] = useState({});

  // نستخدم المتغير المستورد بدلاً من كتابة المسار يدوياً
  const heroImageSrc = heroImage; 

  // الإجمالي = عدد الكومبوننت + 1 (للصورة)
  const total = homeNames.length + 1; 
  
  // حماية من القسمة على صفر أو تجاوز 100%
  const progress = Math.min(100, Math.round((loadedCount / total) * 100));

  useEffect(() => {
    if (savedComponents) return;

    let mounted = true;

    // 1. تحميل الكومبوننتات
    homeNames.forEach((name) => {
      import(`./components/${name}.js`)
        .then((mod) => {
          if (!mounted) return;
          const Comp = mod[name] ?? mod.default ?? mod;
          setComponents((prev) => ({ ...prev, [name]: Comp }));
          setLoadedCount((c) => c + 1);
        })
        .catch((err) => {
           console.error(`Failed to load component ${name}`, err);
           if (mounted) setLoadedCount((c) => c + 1);
        });
    });

    // 2. تحميل صورة الـ Hero بشكل مسبق
    preloadImage(heroImageSrc).then(() => {
        if (mounted) setLoadedCount((c) => c + 1);
    });

    return () => { mounted = false; };
  }, [savedComponents, homeNames, heroImageSrc]); // أضفنا heroImageSrc للمصفوفة

  // useEffect منفصل للتحقق من الانتهاء
  useEffect(() => {
      if (savedComponents) return; // لا حاجة للتحقق إذا كانت محفوظة

      const allComponentsLoaded = Object.keys(components).length === homeNames.length;
      // نتحقق أن العداد وصل للرقم النهائي (يعني الصورة والكومبوننتات انتهوا)
      const everythingReady = loadedCount >= total; 

      if (allComponentsLoaded && everythingReady) {
          // تأخير بسيط جداً لضمان سلاسة الحركة
          const timer = setTimeout(() => onSave(components), 100);
          return () => clearTimeout(timer);
      }
  }, [components, loadedCount, homeNames.length, onSave, total, savedComponents]);

  // ... باقي كود العرض (الـ return) كما هو في كودك الأصلي
  if (savedComponents) {
     const { Hero, Offer, About, Software, Chart, SolutionsList, LegalMenuComp } = savedComponents;
     return (
       <>
         {Hero && <Hero />}
         {Offer && <Offer />}
         {About && <About />}
         {Software && <Software />}
         {Chart && <Chart />}
         {SolutionsList && <SolutionsList />}
         {LegalMenuComp && <LegalMenuComp />}
       </>
     );
  }

  if (loadedCount < total) {
    return <Loader progress={progress} />;
  }

  // Fallback render (لحظة التبديل)
  const Hero = components.Hero;
  // ... إلخ
  return <Loader progress={100} />; // أو null، لكن يفضل إبقاء اللودر حتى ينفذ onSave
};

// سياق اللغة العالمي
export const LanguageContext = createContext({
  language: 'en',
  setLanguage: () => {},
  languageSource: 'default',
  isAutoDetected: false,
  availableLanguages: []
});

// مكون توفير السياق
const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [languageSource, setLanguageSource] = useState('default');
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initializeLanguage = async () => {
      try {
        // الكشف التلقائي عند التحميل الأولي فقط
        const detectedLang = await languageService.detectAndApply();
        
        setLanguage(detectedLang);
        setLanguageSource(languageService.getLanguageSource());
        setIsInitialized(true);
        
        // تحديث اتجاه الصفحة
       
        
      } catch (error) {
        console.error('Language initialization failed:', error);
        setLanguage('en');
        setIsInitialized(true);
      }
    };

    initializeLanguage();
  }, []);

  const handleLanguageChange = async (newLang) => {
    try {
      await languageService.changeLanguage(newLang, true);
      setLanguage(newLang);
      setLanguageSource('manual');
    } catch (error) {
      console.error('Failed to change language:', error);
    }
  };

  if (!isInitialized) {
    return (
      <div className="app-initialization">
        <Loader 
          progress={0} 
          message="جاري تهيئة النظام بلغتك المفضلة..."
          subMessage="Initializing in your preferred language..."
        />
      </div>
    );
  }

  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage: handleLanguageChange,
      languageSource,
      isAutoDetected: languageSource === 'auto',
      availableLanguages: languageService.getAvailableLanguages()
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

function AppContent() {
  const [homeComponents, setHomeComponents] = useState(null);

  const handleHomeLoad = (comps) => {
    const formatted = {
      Hero: comps.Hero,
      Offer: comps.Offer,
      About: comps.About,
      Software: comps.Software,
      Chart: comps.Chart,
      SolutionsList: comps.SolutionsList,
      LegalMenuComp: comps.LegalMenu 
    };
    setHomeComponents(formatted);
  };

  return (
    <Router>
      
        <Navbar />
        
        <Routes>
          <Route path="/" element={
            <HomeLoader 
              savedComponents={homeComponents} 
              onSave={handleHomeLoad} 
            />
          } />
          
          <Route path="/supermarket" element={<RetailSolutions />} />
          <Route path="/traffic" element={<Traffic />} />
          <Route path="/security" element={<Security />} />
          <Route path="/industry" element={<Industry />} />
          <Route path="/construction" element={<Construction />} />
          <Route path="/data-recovery" element={<DataRecovery />} />
          <Route path="/site-info" element={<SiteInfo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookies" element={<CookiesSettings />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="/agriculture" element={<Agriculture />} />
          <Route path="/edge-analytics" element={<EdgeAnalytics />} />
          <Route path="/surveillance-tower" element={<SurveillanceTower />} />
          <Route path="/home-monitor" element={<HomeMonitor />} />
          <Route path="/security-info" element={<SecurityInfo />} />
          <Route path="/request-demo" element={<DemoRequest />} />
        </Routes>

        <Footer />
        <Analytics />
        
        {/* شريط معلومات اللغة (للأغراض التنموية) */}
       
    
    </Router>
  );
}

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </I18nextProvider>
  );
}

export default App;