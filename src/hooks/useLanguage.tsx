import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    'nav.about': 'About',
    'nav.skills': 'Skills', 
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.resume': 'Resume',
    
    // Hero
    'hero.greeting': 'Hi, I\'m',
    'hero.name': 'Abdulaziz',
    'hero.title': 'Full Stack Developer',
    'hero.location': 'Based in Saudi Arabia',
    'hero.bio': 'Passionate about creating exceptional digital experiences through clean code and innovative solutions. I specialize in modern web technologies and love turning complex problems into simple, beautiful designs.',
    'hero.getInTouch': 'Get In Touch',
    'hero.viewWork': 'View My Work',
    'hero.scrollDown': 'Scroll down to discover more',
    
    // About
    'about.title': 'About Me',
    'about.description': 'I\'m a passionate full-stack developer with a love for creating efficient, scalable, and user-friendly applications. My journey in tech started with curiosity and has evolved into a deep commitment to crafting exceptional digital experiences.',
    'about.projects': 'Projects Completed',
    'about.clients': 'Happy Clients', 
    'about.experience': 'Years Experience',
    'about.awards': 'Awards Won',
    
    // Skills
    'skills.title': 'Skills & Expertise',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.cloud': 'Cloud & DevOps',
    'skills.tools': 'Tools & Others',
    'skills.certifications': 'Certifications',
    
    // Experience
    'experience.title': 'Professional Experience',
    'experience.description': 'A journey through my professional career, showcasing the roles and responsibilities that have shaped my expertise in software development.',
    
    // Projects
    'projects.title': 'Featured Projects',
    'projects.description': 'Here are some of the projects I\'ve worked on recently. Each project represents a unique challenge and solution.',
    'projects.liveDemo': 'Live Demo',
    'projects.code': 'Code',
    'projects.viewAll': 'View All Projects on GitHub',
    'projects.status.completed': 'Completed',
    'projects.status.inProgress': 'In Progress',
    'projects.status.planning': 'Planning',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.description': 'I\'m always interested in new opportunities and interesting projects. Let\'s connect!',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.availability': 'Currently available for freelance projects',
    
    // Footer
    'footer.brand': 'Portfolio',
    'footer.quickLinks': 'Quick Links',
    'footer.contact': 'Contact',
    'footer.backToTop': 'Back to Top',
    'footer.copyright': '© 2024 Abdulaziz. All rights reserved.',
  },
  ar: {
    // Header
    'nav.about': 'نبذة عني',
    'nav.skills': 'المهارات',
    'nav.experience': 'الخبرة',
    'nav.projects': 'المشاريع',
    'nav.contact': 'التواصل',
    'nav.resume': 'السيرة الذاتية',
    
    // Hero
    'hero.greeting': 'مرحباً، أنا',
    'hero.name': 'عبدالعزيز',
    'hero.title': 'مطور ويب متكامل',
    'hero.location': 'مقيم في المملكة العربية السعودية',
    'hero.bio': 'شغوف بإنشاء تجارب رقمية استثنائية من خلال الكود النظيف والحلول المبتكرة. أتخصص في تقنيات الويب الحديثة وأحب تحويل المشاكل المعقدة إلى تصاميم بسيطة وجميلة.',
    'hero.getInTouch': 'تواصل معي',
    'hero.viewWork': 'اطلع على أعمالي',
    'hero.scrollDown': 'اسحب لأسفل لاكتشاف المزيد',
    
    // About
    'about.title': 'نبذة عني',
    'about.description': 'أنا مطور ويب متكامل شغوف بحب إنشاء تطبيقات فعالة وقابلة للتطوير وسهلة الاستخدام. بدأت رحلتي في التقنية بالفضول وتطورت إلى التزام عميق بصناعة تجارب رقمية استثنائية.',
    'about.projects': 'المشاريع المكتملة',
    'about.clients': 'العملاء الراضون',
    'about.experience': 'سنوات الخبرة',
    'about.awards': 'الجوائز المحققة',
    
    // Skills
    'skills.title': 'المهارات والخبرات',
    'skills.frontend': 'الواجهة الأمامية',
    'skills.backend': 'الواجهة الخلفية',
    'skills.cloud': 'الحوسبة السحابية والـ DevOps',
    'skills.tools': 'الأدوات وأخرى',
    'skills.certifications': 'الشهادات',
    
    // Experience
    'experience.title': 'الخبرة المهنية',
    'experience.description': 'رحلة عبر مسيرتي المهنية، تعرض الأدوار والمسؤوليات التي شكلت خبرتي في تطوير البرمجيات.',
    
    // Projects
    'projects.title': 'المشاريع المميزة',
    'projects.description': 'هنا بعض المشاريع التي عملت عليها مؤخراً. كل مشروع يمثل تحدياً وحلاً فريداً.',
    'projects.liveDemo': 'عرض مباشر',
    'projects.code': 'الكود',
    'projects.viewAll': 'عرض جميع المشاريع على GitHub',
    'projects.status.completed': 'مكتمل',
    'projects.status.inProgress': 'قيد التنفيذ',
    'projects.status.planning': 'قيد التخطيط',
    
    // Contact
    'contact.title': 'تواصل معي',
    'contact.description': 'أنا دائماً مهتم بالفرص الجديدة والمشاريع المثيرة للاهتمام. لنتواصل!',
    'contact.name': 'الاسم',
    'contact.email': 'البريد الإلكتروني',
    'contact.subject': 'الموضوع',
    'contact.message': 'الرسالة',
    'contact.send': 'إرسال الرسالة',
    'contact.phone': 'الهاتف',
    'contact.location': 'الموقع',
    'contact.availability': 'متاح حالياً لمشاريع العمل الحر',
    
    // Footer
    'footer.brand': 'المعرض',
    'footer.quickLinks': 'روابط سريعة',
    'footer.contact': 'التواصل',
    'footer.backToTop': 'العودة للأعلى',
    'footer.copyright': '© 2024 عبدالعزيز. جميع الحقوق محفوظة.',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  const isRTL = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};