import { ArrowDown, Linkedin, Github, Mail, Download, Video } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-subtle"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-subtle" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="container max-w-7xl mx-auto text-center z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          {/* Photo Gallery Section */}
          <div className="flex-shrink-0 relative w-full lg:w-auto opacity-0 animate-scale-in" style={{animationDelay: '0.2s'}}>
            <div className="relative mx-auto" style={{width: 'min(600px, 90vw)', height: 'min(600px, 90vw)'}}>
              {/* Main Photo - Center */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 group">
                <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-2xl overflow-hidden border-4 border-primary/30 shadow-2xl transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-[0_0_40px_rgba(139,92,246,0.4)] glow-card">
                  <img
                    src="/sanjay photo.jpg"
                    alt="Sanjay Jayakumar"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {/* Corner accent */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full animate-pulse-subtle"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-500 rounded-full animate-pulse-subtle" style={{animationDelay: '0.5s'}}></div>
              </div>

              {/* Side Photo 1 - Top Left */}
              <div className="absolute top-4 left-4 z-10 opacity-0 animate-fade-in-delay-1">
                <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-xl overflow-hidden border-2 border-border/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 glow-card bg-card/50 backdrop-blur-sm">
                  <img
                    src="/inf26vot.JPG"
                    alt="Sanjay Jayakumar Professional"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Side Photo 2 - Top Right */}
              <div className="absolute top-4 right-4 z-10 opacity-0 animate-fade-in-delay-2">
                <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-xl overflow-hidden border-2 border-border/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 glow-card bg-card/50 backdrop-blur-sm">
                  <img
                    src="/gallery/15f99ca5-9dfc-45ab-a8b2-cf5c08997850.jpg"
                    alt="Sanjay Jayakumar Speaking"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Side Photo 3 - Bottom Left */}
              <div className="absolute bottom-4 left-4 z-10 opacity-0 animate-fade-in-delay-3">
                <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-xl overflow-hidden border-2 border-border/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 glow-card bg-card/50 backdrop-blur-sm">
                  <img
                    src="/sanjay 2.jpg"
                    alt="Sanjay Jayakumar Team"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Side Photo 4 - Bottom Right */}
              <div className="absolute bottom-4 right-4 z-10 opacity-0 animate-fade-in-delay-4">
                <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-xl overflow-hidden border-2 border-border/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 glow-card bg-card/50 backdrop-blur-sm">
                  <img
                    src="/interaction.jpg"
                    alt="Sanjay Jayakumar Event"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Decorative floating elements */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse-subtle"></div>
                <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-purple-500 rounded-full animate-pulse-subtle" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute top-3/4 left-3/4 w-2 h-2 bg-pink-500 rounded-full animate-pulse-subtle" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-8 flex-1 mt-8 lg:mt-0">
            <div className="space-y-5">
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight opacity-0 animate-fade-in-delay-2 leading-tight">
                <span className="text-gradient font-serif tracking-wide block">
                  Sanjay J
                </span>
              </h1>
            </div>
            
            <div className="opacity-0 animate-fade-in-delay-2 space-y-3">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">
                <span className="text-white">AI Developer & Full Stack Engineer</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 rounded-full mx-auto"></div>
            </div>

            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3 leading-relaxed">
              Specializing in artificial intelligence, machine learning, and full-stack development. 
              Creating innovative solutions that bridge technology and user experience.
            </p>

            <div className="flex flex-wrap justify-center gap-3 pt-4 opacity-0 animate-fade-in-delay-3">
              <a 
                href="https://www.linkedin.com/in/sanjayj06" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-gradient-to-br from-primary/15 to-purple-500/15 hover:from-primary/25 hover:to-purple-500/25 text-primary transition-all duration-300 hover:scale-110 glow-card group border border-primary/10"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a 
                href="https://github.com/Sanjayj-06" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-gradient-to-br from-primary/15 to-purple-500/15 hover:from-primary/25 hover:to-purple-500/25 text-primary transition-all duration-300 hover:scale-110 glow-card group border border-primary/10"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a 
                href="mailto:sanjayjayakumar91@gmail.com"
                className="p-4 rounded-xl bg-gradient-to-br from-primary/15 to-purple-500/15 hover:from-primary/25 hover:to-purple-500/25 text-primary transition-all duration-300 hover:scale-110 glow-card group border border-primary/10"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-4 pt-6 opacity-0 animate-fade-in-delay-4">
              <a 
                href="/Sanjay J Resume Copy (1).pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="cosmic-button flex items-center gap-2 shadow-xl group"
              >
                <Download className="h-5 w-5" />
                <span>Resume</span>
              </a>
              <a 
                href="#contact"
                className="px-8 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
              >
                Contact Me
              </a>
              <a 
                href="#videos"
                className="px-8 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <Video className="h-5 w-5" />
                <span>Take a look at the recent talks</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-10">
        <span className="text-sm text-muted-foreground mb-2 font-medium">Scroll to explore</span>
        <ArrowDown className="h-6 w-6 text-primary drop-shadow-lg" />
      </div>
    </section>
  );
};
