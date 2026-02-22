import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3, once: true });
  const [contentRef, contentVisible] = useScrollAnimation({ threshold: 0.2, once: true });

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
      e.target.reset();
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden bg-gradient-to-b from-background via-secondary/30 to-background">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div 
          ref={titleRef}
          className={cn(
            "transition-all duration-1000 mb-16",
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.
          </p>
        </div>

        <div 
          ref={contentRef}
          className={cn(
            "grid grid-cols-1 lg:grid-cols-2 gap-12 transition-all duration-1000",
            contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gradient">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 group-hover:scale-110 transition-transform duration-300 glow-card">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-1">Email</h4>
                    <a
                      href="mailto:sanjayjayakumar91@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      sanjayjayakumar91@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 group-hover:scale-110 transition-transform duration-300 glow-card">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-1">Phone</h4>
                    <a
                      href="tel:+919789710033"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      +91 9789710033
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 group-hover:scale-110 transition-transform duration-300 glow-card">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-1">Location</h4>
                    <p className="text-muted-foreground">
                      13/1 Jamiya Nagar, Kovaipudur, Coimbatore 641042
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card-glass p-8 rounded-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-6 relative z-10">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background/50 backdrop-blur-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background/50 backdrop-blur-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background/50 backdrop-blur-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                  placeholder="Hello! I'd like to discuss..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                  isSubmitting && "opacity-70 cursor-not-allowed"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={18} className={cn(isSubmitting && "animate-pulse")} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
