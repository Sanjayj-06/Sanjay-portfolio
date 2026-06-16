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
    <section id="contact" className="py-24 md:py-32 px-4 relative overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 dark:opacity-30">
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-20 left-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Section Title */}
        <div 
          ref={titleRef}
          className={cn(
            "transition-all duration-1000 mb-16 text-center",
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-3 text-center">
            Get In <span className="text-gradient font-serif italic">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-indigo-500 mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
            Have a project in mind, research collaboration interest, or want to connect? I am always open to discussing new opportunities.
          </p>
        </div>

        <div 
          ref={contentRef}
          className={cn(
            "grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch transition-all duration-1000",
            contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {/* Email Card */}
          <div className="glass-premium p-6 md:p-8 rounded-[1.75rem] card-hover group relative overflow-hidden flex flex-col items-center text-center justify-between min-h-[220px]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="flex flex-col items-center z-10 w-full">
              <div className="p-3.5 rounded-2xl bg-primary/10 border border-primary/20 text-primary group-hover:scale-110 transition-transform duration-500 shadow-xs mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300 mb-1">
                Email
              </h3>
              <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider mb-3">Direct Mail</p>
            </div>
            <a
              href="mailto:sanjayjayakumar91@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 font-semibold text-sm break-all z-10"
            >
              sanjayjayakumar91@gmail.com
            </a>
          </div>

          {/* Phone Card */}
          <div className="glass-premium p-6 md:p-8 rounded-[1.75rem] card-hover group relative overflow-hidden flex flex-col items-center text-center justify-between min-h-[220px]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="flex flex-col items-center z-10 w-full">
              <div className="p-3.5 rounded-2xl bg-primary/10 border border-primary/20 text-primary group-hover:scale-110 transition-transform duration-500 shadow-xs mb-4">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300 mb-1">
                Phone
              </h3>
              <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider mb-3">Call or Message</p>
            </div>
            <a
              href="tel:+919789710033"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 font-semibold text-sm z-10"
            >
              +91 9789710033
            </a>
          </div>

          {/* Location Card */}
          <div className="glass-premium p-6 md:p-8 rounded-[1.75rem] card-hover group relative overflow-hidden flex flex-col items-center text-center justify-between min-h-[220px]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="flex flex-col items-center z-10 w-full">
              <div className="p-3.5 rounded-2xl bg-primary/10 border border-primary/20 text-primary group-hover:scale-110 transition-transform duration-500 shadow-xs mb-4">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300 mb-1">
                Location
              </h3>
              <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider mb-3">Current Base</p>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-[240px] font-semibold z-10">
              PSG College of Technology Campus, Coimbatore, Tamil Nadu
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
