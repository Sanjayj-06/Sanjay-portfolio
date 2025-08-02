import { ArrowDown, Linkedin, Github, Mail, Download } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-6xl mx-auto text-center z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          {/* Photo Section */}
          <div className="flex-shrink-0 opacity-0 animate-fade-in-delay-1">
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img
                  src="/sanjay photo.jpg"
                  alt="Sanjay Jayakumar"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 flex-1">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-primary opacity-0 animate-fade-in-delay-1 font-serif tracking-wide">
                Sanjay J
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium opacity-0 animate-fade-in-delay-2">
              AI Enthusiast & Full Stack Developer
            </h2>

            <div className="flex justify-center gap-6 pt-4 opacity-0 animate-fade-in-delay-3">
              <a 
                href="https://www.linkedin.com/in/sanjayj06" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://github.com/Sanjayj-06" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-110"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="mailto:sanjayjayakumar91@gmail.com"
                className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-110"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>

            <div className="flex justify-center pt-6 opacity-0 animate-fade-in-delay-4">
              <a 
                href="/path-to-your-resume.pdf" 
                download="Sanjay_Jayakumar_Resume.pdf"
                className="cosmic-button flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
