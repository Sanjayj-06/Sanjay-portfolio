import { Calendar, MapPin, Briefcase } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

const experiences = [
  {
    id: 1,
title: "Summer Research Intern",
company: "Software Engineering Research Center, IIIT Hyderabad",
location: "Hyderabad, Telangana",
duration: "May 2026 - Present",
    description: [
      
    ]
  },
  {
    id: 2,
    title: "Joint Secretary",
    company: "Computer Science Engineering Association (CSEA) 2025 - 2026",
    location: "PSG College of Technology, Coimbatore",
    duration: "Aug 2025 - April 2026",
    description: [
      "Leading department student body initiatives, coordinating academic-industry integration, and scheduling expert guest lectures.",
      "Directing planning and executive operations of CSEA and managing associated student technical divisions."
    ]
  },
  {
    id: 3,
    title: "Head of Events",
    company: "Cyber Security Club",
    location: "PSG College of Technology, Coimbatore",
    duration: "Sep 2025 - Present",
    description: [
      "Organizing CTF (Capture the Flag) hackathons, cybersecurity training workshops, and expert student guidance events."
    ]
  },
  {
    id: 4,
    title: "Mobile Application Prototype Developer",
    company: "AI BILL, INRIA Grenoble & PSG College of Technology Joint Project",
    location: "Remote / Grenoble, France",
    duration: "Jan 2025 - May 2025",
    description: [
      "Contributed to front-end, back-end, and database engineering for an international startup prototype incubated at INRIA.",
      "Built cross-platform interfaces using React Native, Tailwind CSS and integrated RESTful APIs with MySQL database.",
      "Collaborated closely with researchers and engineers to deliver early-stage prototype validation and verification."
    ]
  },
  {
    id: 5,
    title: "Joint Secretary",
    company: "Computer Science Engineering Association (CSEA) 2024 - 2025",
    location: "PSG College of Technology, Coimbatore",
    duration: "Aug 2024 - May 2025",
    description: [
      "Organizing Secretary of Infinitum 2025 (Intra-College Technical Symposium), featuring coding hackathons, technical paper contests, and product showcases.",
      "Managed annual operational budgets for CSEA and affiliated student bodies.",
      "Coordinated 5 signature technical challenges for Kriya '25 (Annual Students Union Tech Festival)."
    ]
  }
];

export const ExperienceSection = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3, once: true });
  const [listRef, listVisible] = useScrollAnimation({ threshold: 0.1, once: true });

  return (
    <section id="experience" className="py-24 md:py-32 px-4 relative overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 dark:opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        
        {/* Section Title */}
        <div 
          ref={titleRef}
          className={cn(
            "transition-all duration-1000 mb-16 text-center",
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-3">
            Professional <span className="text-gradient font-serif italic">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-indigo-500 mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
            My professional, industrial, and leadership endeavors inside academic projects and student associations.
          </p>
        </div>

        <div ref={listRef} className="relative pl-0 sm:pl-8">
          {/* Vertical timeline track line */}
          <div className="absolute left-[33px] top-2 bottom-2 w-[1.5px] bg-border/80 hidden sm:block"></div>
          
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className={cn(
                  "relative transition-all duration-700 flex flex-col sm:flex-row items-stretch",
                  listVisible 
                    ? "opacity-100 translate-x-0" 
                    : "opacity-0 -translate-x-8"
                )}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                {/* Timeline node circle marker */}
                <div className="absolute left-[25px] top-8 w-4.5 h-4.5 rounded-full bg-background border-2 border-primary shadow-xs z-10 hidden sm:block">
                  <span className="absolute inset-1 rounded-full bg-primary animate-ping opacity-60"></span>
                  <span className="absolute inset-1 rounded-full bg-primary"></span>
                </div>
                
                {/* Info Card container */}
                <div className="w-full sm:ml-8 flex-1">
                  <div className="relative glass-premium p-6 md:p-8 rounded-[1.75rem] card-hover flex flex-col justify-between text-left h-full">
                    
                    <div className="space-y-4">
                      {/* Header row */}
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                        <div className="space-y-1">
                          <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                            {experience.title}
                          </h3>
                          <p className="text-sm md:text-base font-semibold text-gradient">
                            {experience.company}
                          </p>
                        </div>
                        
                        {/* Status Badges */}
                        <div className="flex flex-wrap gap-2 text-xs text-muted-foreground md:self-start">
                          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-secondary/40 font-medium">
                            <Calendar className="h-3.5 w-3.5 text-primary" />
                            <span>{experience.duration}</span>
                          </div>
                          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-secondary/40 font-medium">
                            <MapPin className="h-3.5 w-3.5 text-primary" />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Achievements lists */}
                      {experience.description.length > 0 && (
                        <div className="space-y-2.5 pt-4 border-t border-border/80">
                          {experience.description.map((item, idx) => (
                            <div 
                              key={idx} 
                              className="flex items-start gap-3 text-sm md:text-base text-muted-foreground leading-relaxed hover:text-foreground transition-colors duration-300"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0"></div>
                              <p className="flex-1">{item}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Subtle hovering gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[1.75rem]"></div>
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
