import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

const educationData = [
  {
    id: 1,
    institution: "PSG College of Technology",
    course: "B.E. Computer Science and Engineering (AI & ML)",
    duration: "2023 - 2027",
    image: "/psgtech.jpg",
    location: "Coimbatore, Tamil Nadu",
    description: "Pursuing specialized Bachelor's degree focused on Machine Learning, Deep Neural Networks, Algorithms, and Core Computer Science subjects."
  },
  {
    id: 2,
    institution: "CS Academy",
    course: "Higher Secondary - CBSE",
    duration: "2021 - 2023",
    image: "/cs.png",
    location: "Coimbatore, Tamil Nadu",
    description: "Completed Higher Secondary education with specialization in Mathematics, Physics, Chemistry, and Computer Science."
  },
  {
    id: 3,
    institution: "Nirmala Matha Convent School",
    course: "Secondary Education - ICSE/ISC",
    duration: "2012 - 2021",
    image: "/nmcs_logo.png",
    location: "Coimbatore, Tamil Nadu",
    description: "Completed primary and secondary education with excellent academic performance and leadership roles."
  }
];

export const EducationSection = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3, once: true });
  const [cardsRef, cardsVisible] = useScrollAnimation({ threshold: 0.1, once: true });

  return (
    <section id="education" className="py-24 md:py-32 px-4 relative overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 dark:opacity-30">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
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
            Academic <span className="text-gradient font-serif italic">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-indigo-500 mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
            My structured educational foundation that shapes my core scientific principles and computer engineering skills.
          </p>
        </div>

        {/* Education Grid */}
        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {educationData.map((education, index) => (
            <div
              key={education.id}
              className={cn(
                "group relative glass-premium rounded-[1.75rem] p-6 md:p-8 card-hover transition-all duration-700 flex flex-col justify-between text-left",
                cardsVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div>
                {/* Logo Frame Container */}
                <div className="flex justify-start mb-6">
                  <div className="w-20 h-20 bg-card rounded-2xl border border-border/80 flex items-center justify-center p-2 group-hover:scale-105 transition-transform duration-500 overflow-hidden shadow-xs relative">
                    <img 
                      src={education.image} 
                      alt={education.institution}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'block';
                      }}
                    />
                    <GraduationCap 
                      className="h-10 w-10 text-primary hidden" 
                    />
                  </div>
                </div>

                {/* Institution Details */}
                <div className="space-y-3">
                  <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {education.institution}
                  </h3>
                  
                  <p className="text-sm md:text-base font-semibold text-gradient">
                    {education.course}
                  </p>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed pt-2">
                    {education.description}
                  </p>
                </div>
              </div>

              {/* Badges footer */}
              <div className="space-y-2 mt-6 pt-6 border-t border-border/60">
                <div className="flex items-center gap-2 text-xs font-semibold text-foreground/80">
                  <Calendar className="h-3.5 w-3.5 text-primary" />
                  <span>{education.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  <span>{education.location}</span>
                </div>
              </div>

              {/* Glowing hover accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-[1.75rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
