import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

const educationData = [
  {
    id: 1,
    institution: "PSG College of Technology",
    course: "B.E. Computer Science and Engineering(AI & ML)",
    duration: "2023 - 2027",
    image: "/psgtech.jpg",
    location: "Coimbatore, Tamil Nadu",
    description: "Pursuing Bachelor's degree in Computer Science with AI and Machine Learning"
  },
  {
    id: 2,
    institution: "CS Academy",
    course: "Higher Secondary - CBSE",
    duration: "2021 - 2023",
    image: "/cs.png",
    location: "Tamil Nadu",
    description: "Completed Higher Secondary - CBSE with Mathematics, Physics, Chemistry and Computer Science"
  },
  {
    id: 3,
    institution: "Nirmala Matha Convent School ICSE/ISC",
    course: "Secondary Education - ICSE/ISC",
    duration: "2012 - 2021",
    image: "/nmcs_logo.png",
    location: "Tamil Nadu",
    description: "Completed Secondary Education with excellent academic performance"
  }
];

export const EducationSection = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3, once: true });
  const [cardsRef, cardsVisible] = useScrollAnimation({ threshold: 0.1, once: true });

  return (
    <section id="education" className="py-32 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
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
            <span className="text-gradient">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto">
            My academic journey and educational background that shaped my knowledge and skills.
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
                "group relative card-glass rounded-2xl p-8 card-hover transition-all duration-700",
                cardsVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Institution Image/Logo */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden glow-card">
                  <img 
                    src={education.image} 
                    alt={education.institution}
                    className="w-full h-full object-contain p-2"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'block';
                    }}
                  />
                  <GraduationCap 
                    className="h-10 w-10 md:h-12 md:w-12 text-primary" 
                    style={{ display: 'none' }}
                  />
                </div>
              </div>

              {/* Institution Details */}
              <div className="text-center space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {education.institution}
                </h3>
                
                <p className="text-base font-semibold text-gradient">
                  {education.course}
                </p>
                
                <div className="flex items-center justify-center gap-2 text-muted-foreground bg-primary/10 px-3 py-1.5 rounded-full inline-flex">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">{education.duration}</span>
                </div>
                
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm">{education.location}</span>
                </div>
                
                <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                  {education.description}
                </p>
              </div>

              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
