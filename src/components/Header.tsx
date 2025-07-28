import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Linkedin, Globe } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Header = () => {
  const { language, setLanguage, t, isRTL } = useLanguage();
  
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-bold text-xl bg-gradient-primary bg-clip-text text-transparent">
            {t('footer.brand')}
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              {t('nav.about')}
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              {t('nav.skills')}
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              {t('nav.experience')}
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              {t('nav.projects')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              {t('nav.contact')}
            </button>
          </div>

          <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
            <Button variant="ghost" size="sm" onClick={toggleLanguage}>
              <Globe className="w-4 h-4" />
              <span className="ml-1">{language === 'en' ? 'العربية' : 'English'}</span>
            </Button>
            <Button variant="ghost" size="sm">
              <Github className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Linkedin className="w-4 h-4" />
            </Button>
            <Button variant="hero" size="sm">
              <Download className="w-4 h-4" />
              {t('nav.resume')}
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;