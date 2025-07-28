import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, MapPin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-subtle relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Photo */}
          <div className="mb-8 animate-slide-up">
            <div className="relative inline-block">
              <img 
                src={profilePhoto} 
                alt="Profile" 
                className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto shadow-glow border-4 border-primary/30"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 animate-glow"></div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="space-y-2">
              <p className="text-primary font-semibold tracking-wide uppercase text-sm md:text-base">
                Full Stack Developer
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Alex Johnson
              </h1>
              <div className="flex items-center justify-center text-muted-foreground mt-4">
                <MapPin className="w-4 h-4 mr-2" />
                <span>San Francisco, CA</span>
              </div>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Passionate about crafting exceptional digital experiences with modern technologies. 
              Specialized in React, Node.js, and cloud architecture with 5+ years of industry experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto"
              >
                <Mail className="w-5 h-5" />
                Get In Touch
              </Button>
              <Button 
                variant="glass" 
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="w-full sm:w-auto"
              >
                View My Work
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              <ArrowDown className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;