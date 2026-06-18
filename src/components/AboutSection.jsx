import { Briefcase, Code, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

export const AboutSection = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3, once: true });
  const [contentRef, contentVisible] = useScrollAnimation({ threshold: 0.2, once: true });
  const [cardsRef, cardsVisible] = useScrollAnimation({ threshold: 0.2, once: true });

  return (
    <section id="about" className="py-24 md:py-32 px-4 relative overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20 dark:opacity-30">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
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
          <h2 className="text-3xl md:text-5xl font-bold mb-3">
            About <span className="text-gradient font-serif italic">Sanjay</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Bio Column */}
          <div 
            ref={contentRef}
            className={cn(
              "space-y-6 transition-all duration-1000 delay-200 text-left",
              contentVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            )}
          >
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground/90 leading-snug">
              AI Research Engineer &  <br />
              <span className="text-primary font-serif italic font-semibold">Software Developer</span>
            </h3>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed text-justify">
              I am Sanjay Jayakumar, a Computer Science and Engineering student at PSG College of Technology with a strong passion for Artificial Intelligence, Machine Learning, Deep Learning, and Software Engineering.

My work focuses on developing intelligent, sustainable, and human-centric software systems that combine cutting-edge AI research with robust engineering principles. Currently undergoing my Summer Internship at Software Engineering Research Center , IIITH
            </p>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed text-justify">
              Beyond technical development, I actively contribute to the student community through leadership roles in the Computer Science and Engineering Association (CSEA), where I organize technical events, mentor students, and promote innovation-driven learning. I enjoy bridging the gap between research and engineering by building scalable, reliable, and impactful technologies that address real-world challenges.
            </p>

            {/* Custom CTA Action Row */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link 
                to="/#contact" 
                className="cosmic-button text-center min-w-[140px] shadow-sm cursor-pointer"
              >
                <span>Get In Touch</span>
              </Link>

              <a
                href="/Sanjay J Resume Copy (1).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-border bg-card/85 text-foreground font-semibold hover:border-primary/50 hover:text-primary transition-all duration-300 hover:scale-105 active:scale-95 text-center cursor-pointer shadow-xs min-w-[140px]"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Cards Column */}
          <div 
            ref={cardsRef}
            className={cn(
              "grid grid-cols-1 gap-6 transition-all duration-1000 delay-300",
              cardsVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}
          >
            {/* Card 1 - Software Dev */}
            <div className="glass-premium p-6 md:p-8 rounded-[1.75rem] card-hover group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex items-start gap-5 relative z-10 text-left">
                <div className="p-3.5 rounded-2xl bg-primary/10 border border-primary/20 text-primary group-hover:scale-110 transition-transform duration-500 shadow-xs">
                  <Code className="h-6 w-6" />
                </div>
                <div className="flex-1 space-y-1">
                  <h4 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                    Software Engineering
                  </h4>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Designing and developing scalable, production-ready applications using modern software engineering principles, full-stack technologies, and efficient system architectures.
                  </p>   
                </div>
              </div>
            </div>

            {/* Card 2 - AI/ML/DL */}
            <div className="glass-premium p-6 md:p-8 rounded-[1.75rem] card-hover group relative overflow-hidden" style={{transitionDelay: '100ms'}}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex items-start gap-5 relative z-10 text-left">
                <div className="p-3.5 rounded-2xl bg-primary/10 border border-primary/20 text-primary group-hover:scale-110 transition-transform duration-500 shadow-xs">
                  <User className="h-6 w-6" />
                </div>
                <div className="flex-1 space-y-1">
                  <h4 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                    AI, ML & DL Development
                  </h4>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Researching and building intelligent systems using Machine Learning, Deep Learning, Computer Vision, and Natural Language Processing for real-world applications.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 - Leadership/Management */}
            <div className="glass-premium p-6 md:p-8 rounded-[1.75rem] card-hover group relative overflow-hidden" style={{transitionDelay: '200ms'}}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex items-start gap-5 relative z-10 text-left">
                <div className="p-3.5 rounded-2xl bg-primary/10 border border-primary/20 text-primary group-hover:scale-110 transition-transform duration-500 shadow-xs">
                  <Briefcase className="h-6 w-6" />
                </div>
                <div className="flex-1 space-y-1">
                  <h4 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                    Leadership & Community Impact
                  </h4>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Leading technical initiatives, organizing large-scale events, mentoring students, and fostering innovation through active involvement in the Computer Science and Engineering Association.
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
