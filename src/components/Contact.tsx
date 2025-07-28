import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Contact = () => {
  const { t, isRTL } = useLanguage();
  
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "alex.johnson@email.com",
      href: "mailto:alex.johnson@email.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('contact.title')}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('contact.description')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 bg-gradient-card border-border/50 shadow-card">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-2">Send Message</h3>
                  <p className="text-muted-foreground">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        First Name *
                      </label>
                      <Input 
                        placeholder="John" 
                        className="bg-background/50 border-border/50 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Last Name *
                      </label>
                      <Input 
                        placeholder="Doe" 
                        className="bg-background/50 border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Email Address *
                    </label>
                    <Input 
                      type="email" 
                      placeholder="john.doe@example.com" 
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Subject *
                    </label>
                    <Input 
                      placeholder="Project Collaboration" 
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Message *
                    </label>
                    <Textarea 
                      placeholder="Tell me about your project or idea..." 
                      rows={6}
                      className="bg-background/50 border-border/50 focus:border-primary resize-none"
                    />
                  </div>

                  <Button variant="hero" size="lg" className="w-full">
                    <Mail className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                    {t('contact.send')}
                  </Button>
                </form>
              </div>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="p-8 bg-gradient-card border-border/50 shadow-card">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-2">Contact Information</h3>
                    <p className="text-muted-foreground">
                      Prefer to reach out directly? Here are my contact details.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {contactInfo.map((contact, index) => (
                      <a 
                        key={index}
                        href={contact.href}
                        className="flex items-center space-x-4 p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-smooth group"
                      >
                        <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-smooth">
                          <contact.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{contact.label}</p>
                          <p className="text-foreground font-medium">{contact.value}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </Card>

              {/* Social Links */}
              <Card className="p-8 bg-gradient-card border-border/50 shadow-card">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Follow Me</h3>
                    <p className="text-muted-foreground">
                      Connect with me on social media for updates and insights.
                    </p>
                  </div>

                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-lg hover:bg-primary/30 transition-smooth group"
                        aria-label={social.label}
                      >
                        <social.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-smooth" />
                      </a>
                    ))}
                  </div>
                </div>
              </Card>

              {/* Availability */}
              <Card className="p-8 bg-gradient-card border-border/50 shadow-card">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Availability</h3>
                    <p className="text-muted-foreground">
                      Currently open to new opportunities and interesting projects.
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-glow"></div>
                    <span className="text-green-400 font-medium">Available for work</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;