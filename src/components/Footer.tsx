import { Button } from "@/components/ui/button";
import { Heart, ArrowUp } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t, isRTL } = useLanguage();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-subtle border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="font-bold text-2xl bg-gradient-primary bg-clip-text text-transparent">
                {t('hero.name')}
              </div>
              <p className="text-muted-foreground">
                Full Stack Developer passionate about creating exceptional digital experiences 
                with modern technologies.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">{t('footer.quickLinks')}</h4>
              <div className="space-y-2">
                {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((link) => (
                  <button
                    key={link}
                    onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="block text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">{t('footer.contact')}</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>alex.johnson@email.com</p>
                <p>+1 (555) 123-4567</p>
                <p>San Francisco, CA</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/50">
            <div className="flex items-center space-x-2 text-muted-foreground text-sm">
              <span>{t('footer.copyright')}</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span></span>
            </div>

            {/* Back to Top */}
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="mt-4 md:mt-0 text-muted-foreground hover:text-primary"
            >
              <ArrowUp className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              {t('footer.backToTop')}
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;