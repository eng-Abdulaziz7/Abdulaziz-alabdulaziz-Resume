import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Linkedin } from "lucide-react";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-bold text-xl bg-gradient-primary bg-clip-text text-transparent">
            Portfolio
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Contact
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Github className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Linkedin className="w-4 h-4" />
            </Button>
            <Button variant="hero" size="sm">
              <Download className="w-4 h-4" />
              Resume
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;