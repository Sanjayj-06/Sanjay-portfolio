import { Briefcase, Code, User } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

export const AboutSection = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3, once: true });
  const [contentRef, contentVisible] = useScrollAnimation({ threshold: 0.2, once: true });
  const [cardsRef, cardsVisible] = useScrollAnimation({ threshold: 0.2, once: true });

  return (
    <section id="about" className="py-32 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
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
            About <span className="text-gradient">Sanjay</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div 
            ref={contentRef}
            className={cn(
              "space-y-6 transition-all duration-1000 delay-200",
              contentVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            )}
          >
            <h3 className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
              Passionate Software and AI Developer
            </h3>

            <p className="text-muted-foreground text-lg leading-relaxed">
              A Computer Science and Engineering student at PSG College of Technology with a focus on AI and Machine Learning , Deep Learning. He enjoys building full-stack applications, contributing to research, and leading tech initiatives.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              His works and area of interest spans including software development, AI Research and development, and organizing tech events with a blend of leadership experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a 
                href="#contact" 
                className="cosmic-button text-center"
              >
                Get In Touch
              </a>

              <a
                href=""
                className="px-8 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 text-center"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div 
            ref={cardsRef}
            className={cn(
              "grid grid-cols-1 gap-6 transition-all duration-1000 delay-400",
              cardsVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            )}
          >
            <div className="card-glass p-8 rounded-2xl card-hover group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex items-start gap-4 relative z-10">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 group-hover:scale-110 transition-transform duration-300">
                  <Code className="h-7 w-7 text-primary" />
                </div>
                <div className="text-left flex-1">
                  <h4 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                    Software Development
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Creating responsive websites and mobile applications with modern frameworks.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-glass p-8 rounded-2xl card-hover group relative overflow-hidden" style={{transitionDelay: '100ms'}}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex items-start gap-4 relative z-10">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 group-hover:scale-110 transition-transform duration-300">
                  <User className="h-7 w-7 text-primary" />
                </div>
                <div className="text-left flex-1">
                  <h4 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                    AI, ML & DL Development
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Building intelligent systems and applications using machine learning and artificial intelligence.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-glass p-8 rounded-2xl card-hover group relative overflow-hidden" style={{transitionDelay: '200ms'}}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex items-start gap-4 relative z-10">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="h-7 w-7 text-primary" />
                </div>
                <div className="text-left flex-1">
                  <h4 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                    Project Management
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Leading projects from conception to completion with agile methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
