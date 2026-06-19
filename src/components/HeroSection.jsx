import { ArrowRight, Linkedin, Github, Mail, Download, Video, GraduationCap, Award, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import headshot from "../assets/1379bc7d-2bb1-4376-a1e6-08b06069b8ec (1).jpg";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 pt-16 pb-8 md:pt-20 md:pb-10 overflow-hidden bg-grid-pattern bg-background text-foreground"
    >
      {/* Radial ambient lighting elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-40 dark:opacity-60">
        <div className="absolute top-1/4 left-1/12 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-subtle"></div>
        <div className="absolute bottom-1/4 right-1/12 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse-subtle" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container max-w-7xl mx-auto z-10 relative">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 xl:gap-16">
          
          {/* Photo Column - Left Column on Desktop, Top Column on Mobile */}
          <div className="flex-shrink-0 relative w-full lg:w-auto flex items-center justify-center opacity-0 animate-scale-in lg:-translate-y-8" style={{animationDelay: '0.2s'}}>
            <div className="relative w-70 h-65 sm:w-[380px] sm:h-[320px] md:w-[460px] md:h-[380px] lg:w-[540px] lg:h-[440px] xl:w-[600px] xl:h-[480px]">
              
              {/* Decorative backgrounds */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary to-indigo-600 opacity-10 dark:opacity-20 blur-2xl transition-all duration-500 hover:opacity-30"></div>
              <div className="absolute -inset-1.5 rounded-[2.2rem] bg-gradient-to-tr from-primary/30 via-indigo-500/20 to-purple-600/30 opacity-60 blur-xs animate-pulse-subtle"></div>
              
              {/* Photo Frame Container */}
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-border/80 shadow-2xl bg-card">
                <img
                  src={headshot}
                  alt="Sanjay Jayakumar"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              </div>
              
            </div>
          </div>

          {/* Text Content - Right Column on Desktop, Bottom Column on Mobile */}
          <div className="flex-1 text-left space-y-4 max-w-2xl">
            <div className="space-y-2">
              {/* Premium Heading in clean bold sans-serif font on a single line */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-tight opacity-0 animate-scale-in sm:whitespace-nowrap font-sans">
                <span className="text-foreground">Sanjay </span>
                <span className="text-gradient">Jayakumar</span>
              </h1>
            </div>

            {/* Subtitle / Focus Areas */}
            <div className="opacity-0 animate-fade-in-delay-1 space-y-1">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground/90 flex flex-wrap items-center gap-x-2 gap-y-1">
                <span>AI Research Engineer & Software Developer</span>
                <span className="text-primary/40 hidden sm:inline">•</span>
                <span className="text-primary font-serif italic">Final Year CSE Student @ PSG TECH</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl opacity-0 animate-fade-in-delay-2 text-justify">
              Passionate about developing intelligent software architectures and sustainable AI solutions that are reliable, scalable, and impactful. Bridging research and engineering to solve real-world challenges through innovation.
            </p>

            {/* Area of Interest */}
            <div className="opacity-0 animate-fade-in-delay-2 text-sm leading-relaxed max-w-xl pt-1">
              <span className="font-bold text-foreground block md:inline uppercase tracking-wider text-xs text-primary mb-0.5 md:mb-0 mr-2">
                Area of Interest:
              </span>
              <span className="text-muted-foreground font-semibold">
                Software Engineering , Machine Learning , Deep Learning , Development of AI driven Sustainable Software Systems
              </span>
            </div>

            {/* CTA Actions & Social Links Merged in one compact row */}
            <div className="flex flex-wrap items-center gap-4 pt-2 opacity-0 animate-fade-in-delay-3">
              <div className="flex flex-wrap gap-3">
                <Link 
                  to="/about" 
                  className="cosmic-button shadow-md flex items-center gap-2 group cursor-pointer"
                >
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-300" />
                  <span>Know more</span>
                </Link>
                <Link 
                  to="/videos"
                  className="px-5 py-2.5 rounded-full border border-border bg-card/80 text-foreground font-semibold hover:border-primary/50 hover:text-primary transition-all duration-300 hover:scale-105 active:scale-95 shadow-xs flex items-center gap-2 text-sm cursor-pointer"
                >
                  <Video className="h-4 w-4 text-primary" />
                  <span>Watch Talks</span>
                </Link>
              </div>

              {/* Minimalist Inline Vertical Divider */}
              <div className="w-[1px] h-6 bg-border/80 hidden xl:block"></div>

              {/* Inline Social Icons */}
              <div className="flex items-center gap-2">
                <a 
                  href="https://www.linkedin.com/in/sanjayj06" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full border border-border hover:border-primary/30 text-foreground/85 hover:text-primary transition-all duration-300 hover:scale-110 shadow-xs cursor-pointer bg-card/50"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4.5 w-4.5" />
                </a>
                <a 
                  href="https://github.com/Sanjayj-06" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full border border-border hover:border-primary/30 text-foreground/85 hover:text-primary transition-all duration-300 hover:scale-110 shadow-xs cursor-pointer bg-card/50"
                  aria-label="GitHub"
                >
                  <Github className="h-4.5 w-4.5" />
                </a>
                <a 
                  href="mailto:sanjayjayakumar91@gmail.com"
                  className="p-2.5 rounded-full border border-border hover:border-primary/30 text-foreground/85 hover:text-primary transition-all duration-300 hover:scale-110 shadow-xs cursor-pointer bg-card/50"
                  aria-label="Email"
                >
                  <Mail className="h-4.5 w-4.5" />
                </a>
                <a 
                  href="https://wa.me/919789710033" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full border border-border hover:border-primary/30 text-foreground/85 hover:text-primary transition-all duration-300 hover:scale-110 shadow-xs cursor-pointer bg-card/50"
                  aria-label="WhatsApp"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 16 16" 
                    fill="currentColor" 
                    className="h-4.5 w-4.5"
                  >
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Mini stats showcase for Academics/Industry */}
            <div className="grid grid-cols-3 gap-4 border-t border-border/60 pt-3 mt-4 max-w-xl opacity-0 animate-fade-in-delay-4">
              <div className="space-y-0.5 text-left">
                <div className="flex items-center gap-1.5 text-primary">
                  <Award className="h-4 w-4" />
                  <span className="text-lg md:text-xl font-bold tracking-tight text-foreground">13+</span>
                </div>
                <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">Projects Completed</p>
              </div>
              <div className="space-y-0.5 text-left">
                <div className="flex items-center gap-1.5 text-primary">
                  <FileText className="h-4 w-4" />
                  <span className="text-lg md:text-xl font-bold tracking-tight text-foreground">2</span>
                </div>
                <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">Research Presentations & Paper</p>
              </div>
              <div className="space-y-0.5 text-left">
                <div className="flex items-center gap-1.5 text-primary">
                  <GraduationCap className="h-4 w-4" />
                  <span className="text-lg md:text-xl font-bold tracking-tight text-foreground">2</span>
                </div>
                <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">Internship Experience</p>
              </div>
              <div className="space-y-0.5 text-left">
                <div className="flex items-center gap-1.5 text-primary">
                  <GraduationCap className="h-4 w-4" />
                  <span className="text-lg md:text-xl font-bold tracking-tight text-foreground">4+</span>
                </div>
                <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">Leadership Positions</p>
              </div>
              <div className="space-y-0.5 text-left">
                <div className="flex items-center gap-1.5 text-primary">
                  <GraduationCap className="h-4 w-4" />
                  <span className="text-lg md:text-xl font-bold tracking-tight text-foreground">5+</span>
                </div>
                <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">Hackathons Attended</p>
              </div>
              <div className="space-y-0.5 text-left">
                <div className="flex items-center gap-1.5 text-primary">
                  <GraduationCap className="h-4 w-4" />
                  <span className="text-lg md:text-xl font-bold tracking-tight text-foreground">30+</span>
                </div>
                <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">Events Organised</p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
