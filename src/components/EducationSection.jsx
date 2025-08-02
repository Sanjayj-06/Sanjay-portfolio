import { GraduationCap, Calendar, MapPin } from "lucide-react";

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
  return (
    <section id="education" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Education</span>
        </h2>
        
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          My academic journey and educational background that shaped my knowledge and skills.
        </p>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {educationData.map((education) => (
            <div
              key={education.id}
              className="group relative bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/30"
            >
              {/* Institution Image/Logo */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 overflow-hidden">
                  <img 
                    src={education.image} 
                    alt={education.institution}
                    className="w-full h-full object-contain p-2"
                    onError={(e) => {
                      // Fallback to graduation cap icon if image fails to load
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'block';
                    }}
                  />
                  <GraduationCap 
                    className="h-8 w-8 md:h-10 md:w-10 text-primary" 
                    style={{ display: 'none' }}
                  />
                </div>
              </div>

              {/* Institution Details */}
              <div className="text-center space-y-3">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {education.institution}
                </h3>
                
                <p className="text-lg font-semibold text-primary">
                  {education.course}
                </p>
                
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{education.duration}</span>
                </div>
                
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{education.location}</span>
                </div>
                
                <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                  {education.description}
                </p>
              </div>

              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
