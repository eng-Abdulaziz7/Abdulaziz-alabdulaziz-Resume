import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard. Built for scalability and performance.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      features: [
        "Real-time inventory tracking",
        "Secure payment processing",
        "Admin dashboard with analytics",
        "Mobile-responsive design"
      ],
      github: "#",
      live: "#",
      status: "Completed"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking capabilities.",
      image: "/api/placeholder/600/400",
      technologies: ["Vue.js", "Express.js", "MongoDB", "Socket.io"],
      features: [
        "Real-time collaboration",
        "Project timeline tracking",
        "Team member assignments",
        "File attachments and comments"
      ],
      github: "#",
      live: "#",
      status: "Completed"
    },
    {
      title: "Weather Analytics Dashboard",
      description: "Advanced weather analytics platform with data visualization, forecasting, and historical weather data analysis for multiple locations worldwide.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "D3.js", "Python", "FastAPI", "Redis"],
      features: [
        "Interactive data visualizations",
        "7-day weather forecasting",
        "Historical data analysis",
        "Multi-location tracking"
      ],
      github: "#",
      live: "#",
      status: "In Progress"
    },
    {
      title: "AI Content Generator",
      description: "An AI-powered content generation tool that helps users create blog posts, social media content, and marketing copy using advanced language models.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "OpenAI API", "Prisma", "Tailwind"],
      features: [
        "Multiple content types",
        "AI-powered suggestions",
        "Content template library",
        "Usage analytics"
      ],
      github: "#",
      live: "#",
      status: "Planning"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-500/20 text-green-400";
      case "In Progress":
        return "bg-blue-500/20 text-blue-400";
      case "Planning":
        return "bg-yellow-500/20 text-yellow-400";
      default:
        return "bg-gray-500/20 text-gray-400";
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A showcase of my recent work and the technologies I've used to bring ideas to life.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-smooth group">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <div className="h-48 bg-gradient-primary/20 flex items-center justify-center">
                    <Eye className="w-12 h-12 text-primary/50" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className={`${getStatusColor(project.status)} border-none`}>
                      {project.status}
                    </Badge>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-smooth">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-muted-foreground text-xs">
                          <div className="w-1 h-1 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground text-sm">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
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

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-4">
                    <Button variant="hero" size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Button>
                    <Button variant="glass" size="sm" className="flex-1">
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* View All Projects Button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/10">
              View All Projects on GitHub
              <Github className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;