import { Calendar, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

const experiences = [
  {
    id:1,
    title: "Joint Secretary",
    company: "Computer Science Engineering Association (CSEA) 2025 - 2026",
    location: "PSG College of Technology, Coimbatore",
    duration: "Aug 2025 - Present",
    description: []
  },
  {
    id: 2,
    title: "Mobile Application Prototype Developer",
    company: "AI BILL , Inria Grenoble & PSG College of Technology",
    location: "Remote",
    duration: "Jan 2025 - May 2025",
    description: [
      "Contributed to front-end, back-end, and database development for a mobile app prototype.",
      "Built cross-platform mobile app using React Native, Tailwind and worked on backend APIs and MySQL database integration.",
      "Collaborated on system integration for an international startup project incubated at Inria.",
      "Contributed to the early-stage success of the AIBILL prototype in an international research-industry setting."
    ]
  },
  {
    id: 3,
    title: "Joint Secretary",
    company: "Computer Science Engineering Association (CSEA) 2024 - 2025",
    location: "PSG College of Technology, Coimbatore",
    duration: "Aug 2024 - May 2025",
    description: [
      "Organising Secretary of Infinitum 2025 (Intra College Tech Symposium) featuring coding contests, tech talks, and project showcases.",
      "Coordinator for 3 technical events, 3 workshops of CSEA, and 2 ceremonies.",
      "Managed the yearly budget of CSEA and two affiliated clubs (GHCC and The Eye) for the academic year 2024–2025.",
      "Coordinated 5 events conducted by CSEA for Kriya '25 (Students Union Tech Fest)."
    ]
  }
];

export const ExperienceSection = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3, once: true });
  const [listRef, listVisible] = useScrollAnimation({ threshold: 0.1, once: true });

  return (
    <section id="experience" className="py-32 px-4 relative overflow-hidden bg-gradient-to-b from-background via-secondary/30 to-background">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
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
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div ref={listRef} className="relative">
          {/* Timeline line - Enhanced */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-purple-500 to-pink-500 rounded-full shadow-lg hidden sm:block"></div>
          
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className={cn(
                  "relative transition-all duration-700",
                  listVisible 
                    ? "opacity-100 translate-x-0" 
                    : "opacity-0 -translate-x-10"
                )}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Timeline dot - Enhanced */}
                <div className="absolute left-1.5 md:left-5.5 w-6 h-6 bg-gradient-to-br from-primary to-purple-500 rounded-full border-4 border-background shadow-[0_0_20px_rgba(139,92,246,0.5)] hidden sm:block z-20 animate-pulse-subtle"></div>
                
                <div className="sm:ml-16 md:ml-20">
                  <div className="relative bg-card border-2 border-primary/30 p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:border-primary/50 transition-all duration-500 group overflow-hidden">
                    {/* Box gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/5 to-transparent opacity-50"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Corner decorations */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary rounded-tl-xl"></div>
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary rounded-tr-xl"></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary rounded-bl-xl"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary rounded-br-xl"></div>
                    
                    <div className="relative z-10">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                            {experience.title}
                          </h3>
                          <p className="text-lg font-semibold text-gradient mb-3">
                            {experience.company}
                          </p>
                        </div>
                        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2 bg-gradient-to-r from-primary/20 to-purple-500/20 px-4 py-2 rounded-lg border border-primary/30 shadow-md">
                            <Calendar className="h-4 w-4 text-primary" />
                            <span className="font-semibold text-foreground">{experience.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 bg-gradient-to-r from-primary/20 to-purple-500/20 px-4 py-2 rounded-lg border border-primary/30 shadow-md">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span className="font-semibold text-foreground">{experience.location}</span>
                          </div>
                        </div>
                      </div>

                      {experience.description.length > 0 && (
                        <div className="space-y-3 mt-6 pt-6 border-t border-primary/20">
                          {experience.description.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10 hover:bg-primary/10 hover:border-primary/20 transition-all duration-300">
                              <div className="w-2 h-2 bg-gradient-to-br from-primary to-purple-500 rounded-full mt-2 flex-shrink-0 shadow-sm"></div>
                              <p className="text-muted-foreground leading-relaxed flex-1">{item}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
