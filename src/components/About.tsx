import { Card } from "@/components/ui/card";
import { Code, Rocket, Users, Trophy } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
  const { t, isRTL } = useLanguage();
  
  const stats = [
    { icon: Code, label: "about.projects", value: "50+" },
    { icon: Users, label: "about.clients", value: "30+" },
    { icon: Rocket, label: "about.experience", value: "5+" },
    { icon: Trophy, label: "about.awards", value: "8" },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('about.title')}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('about.description')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">
                  Crafting Digital Excellence
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a passionate full-stack developer with expertise in modern web technologies. 
                  My journey began 5 years ago when I discovered the power of code to solve real-world problems.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I specialize in React, TypeScript, Node.js, and cloud technologies. I believe in 
                  writing clean, maintainable code and creating user experiences that delight and inspire.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
                  or mentoring upcoming developers in the community.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">What I Bring:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    5+ years of professional development experience
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Full-stack expertise from frontend to cloud deployment
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Strong focus on performance and user experience
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Agile methodology and team collaboration
                  </li>
                </ul>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-smooth text-center">
                  <div className="space-y-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-lg">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{t(stat.label)}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;