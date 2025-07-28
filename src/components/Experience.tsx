import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      period: "2022 - Present",
      type: "Full-time",
      description: "Leading development of enterprise web applications using React, Node.js, and AWS. Mentoring junior developers and architecting scalable solutions for 100k+ users.",
      achievements: [
        "Improved application performance by 40% through optimization",
        "Led a team of 5 developers on major product releases",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Architected microservices handling 1M+ requests per day"
      ],
      technologies: ["React", "TypeScript", "Node.js", "AWS", "PostgreSQL", "Docker"]
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "Remote",
      period: "2020 - 2022",
      type: "Full-time",
      description: "Developed and maintained multiple client projects using modern web technologies. Worked closely with design and product teams to deliver high-quality user experiences.",
      achievements: [
        "Built 10+ responsive web applications from scratch",
        "Reduced bug reports by 50% through comprehensive testing",
        "Implemented real-time features using WebSocket technology",
        "Optimized database queries improving response time by 35%"
      ],
      technologies: ["React", "Vue.js", "Express.js", "MongoDB", "Redis", "Jest"]
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Pro",
      location: "New York, NY",
      period: "2019 - 2020",
      type: "Full-time",
      description: "Focused on creating pixel-perfect, responsive user interfaces for various client projects. Collaborated with UX designers to implement complex interactive features.",
      achievements: [
        "Delivered 20+ client projects on time and within budget",
        "Improved mobile performance scores by 30%",
        "Created reusable component library used across projects",
        "Mentored 2 junior developers"
      ],
      technologies: ["React", "JavaScript", "SASS", "Webpack", "Figma"]
    },
    {
      title: "Junior Web Developer",
      company: "WebSolutions LLC",
      location: "Austin, TX",
      period: "2018 - 2019",
      type: "Full-time",
      description: "Started my professional journey building websites and web applications. Gained experience in full-stack development and modern development practices.",
      achievements: [
        "Learned and applied modern web development frameworks",
        "Contributed to 15+ successful project deliveries",
        "Improved coding skills through peer reviews and mentorship",
        "Earned recognition for dedication and quick learning"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Git"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              My journey through various roles and the impact I've made along the way.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px w-px h-full bg-border"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow"></div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <Card className="p-6 bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-smooth">
                      <div className="space-y-4">
                        {/* Header */}
                        <div className="space-y-2">
                          <div className="flex items-center justify-between flex-wrap gap-2">
                            <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                            <Badge variant="secondary" className="bg-primary/20 text-primary">
                              {exp.type}
                            </Badge>
                          </div>
                          
                          <div className="flex items-center space-x-4 text-muted-foreground text-sm">
                            <div className="flex items-center space-x-1">
                              <Building className="w-4 h-4" />
                              <span>{exp.company}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.period}</span>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Achievements */}
                        <div className="space-y-2">
                          <h4 className="font-semibold text-foreground">Key Achievements:</h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, achievementIndex) => (
                              <li key={achievementIndex} className="flex items-start text-muted-foreground text-sm">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div className="space-y-2">
                          <h4 className="font-semibold text-foreground">Technologies:</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <Badge 
                                key={techIndex} 
                                variant="outline" 
                                className="text-xs border-primary/30 text-primary"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;