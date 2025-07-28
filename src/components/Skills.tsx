import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/useLanguage";

const Skills = () => {
  const { t, isRTL } = useLanguage();
  
  const skillCategories = [
    {
      title: "skills.frontend",
      icon: "🎨",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Vue.js", level: 75 },
        { name: "HTML/CSS", level: 95 },
      ]
    },
    {
      title: "skills.backend",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Redis", level: 75 },
      ]
    },
    {
      title: "skills.cloud",
      icon: "☁️",
      skills: [
        { name: "AWS", level: 85 },
        { name: "Docker", level: 80 },
        { name: "Kubernetes", level: 70 },
        { name: "CI/CD", level: 85 },
        { name: "Terraform", level: 75 },
        { name: "Nginx", level: 80 },
      ]
    },
    {
      title: "skills.tools",
      icon: "🛠️",
      skills: [
        { name: "Git", level: 95 },
        { name: "Jest", level: 85 },
        { name: "Figma", level: 80 },
        { name: "Jira", level: 85 },
        { name: "GraphQL", level: 75 },
        { name: "REST APIs", level: 90 },
      ]
    }
  ];

  const certifications = [
    "AWS Certified Solutions Architect",
    "Google Cloud Professional",
    "React Professional Certificate",
    "MongoDB Developer Certification"
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('skills.title')}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="p-6 bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-smooth">
                <div className="space-y-6">
                  <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                    <span className="text-2xl">{category.icon}</span>
                    <h3 className="text-xl font-semibold text-foreground">{t(category.title)}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-foreground font-medium">{skill.name}</span>
                          <span className="text-primary text-sm font-semibold">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-8 text-foreground">{t('skills.certifications')}</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {certifications.map((cert, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm bg-primary/20 text-primary hover:bg-primary/30 transition-smooth"
                >
                  {cert}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;