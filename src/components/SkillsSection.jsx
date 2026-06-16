import { useState } from "react";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const skills = [
  // Frontend
  { name: "HTML5 / CSS3", level: 95, category: "frontend" },
  { name: "JavaScript (ES6+)", level: 90, category: "frontend" },
  { name: "React & React Native", level: 90, category: "frontend" },
  { name: "TypeScript", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },

  // Backend & Databases
  { name: "Python (ML/DL libraries)", level: 90, category: "backend" },
  { name: "Java", level: 75, category: "backend" },
  { name: "C & C++", level: 80, category: "backend" },
  { name: "Node.js & Express", level: 60, category: "backend" },
  { name: "Relational SQL (MySQL/PostgreSQL)", level: 75, category: "backend" },
  { name: "FastAPI", level: 80, category: "backend" },

  // Tools & Platforms
  { name: "Git & GitHub Version Control", level: 90, category: "tools" },
  { name: "Docker Containerization", level: 75, category: "tools" },
  { name: "Figma UX Design", level: 85, category: "tools" },
  { name: "VS Code & Development Environments", level: 95, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3, once: true });
  const [skillsRef, skillsVisible] = useScrollAnimation({ threshold: 0.1, once: true });

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  
  return (
    <section id="skills" className="py-24 md:py-32 px-4 relative overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 dark:opacity-30">
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Section Title */}
        <div 
          ref={titleRef}
          className={cn(
            "transition-all duration-1000 mb-12 text-center",
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-3">
            Core Technical <span className="text-gradient font-serif italic">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-indigo-500 mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
            A comprehensive mapping of my computational fluencies, development stacks, and engineering tools.
          </p>
        </div>

        {/* Categories Pills Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 capitalize cursor-pointer",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-sm scale-105"
                  : "bg-card/60 border border-border/80 text-foreground/80 hover:text-primary hover:border-primary/30 hover:scale-105"
              )}
            >
              {category === "all" ? "All Skills" : category}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div 
          ref={skillsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className={cn(
                "glass-premium p-6 rounded-2xl card-hover group relative overflow-hidden transition-all duration-700 flex flex-col justify-between text-left",
                skillsVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${index * 30}ms` }}
            >
              <div className="space-y-4">
                {/* Skill Name */}
                <h3 className="font-bold text-base md:text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                  {skill.name}
                </h3>
                
                {/* Skill Category Pill */}
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-md">
                  {skill.category}
                </span>
              </div>
              
              {/* Level indicator */}
              <div className="mt-6 space-y-1.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-muted-foreground font-medium">Proficiency</span>
                  <span className="font-bold text-foreground">{skill.level}%</span>
                </div>
                
                {/* Visual meter track */}
                <div className="relative w-full bg-secondary/50 h-1.5 rounded-full overflow-hidden">
                  <div
                    className={cn(
                      "absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ease-out",
                      "bg-gradient-to-r from-primary to-indigo-500",
                      skillsVisible && "animate-shimmer"
                    )}
                    style={{ 
                      width: skillsVisible ? `${skill.level}%` : '0%',
                      backgroundSize: '200% 100%',
                    }}
                  ></div>
                </div>
              </div>

              {/* Hover highlight overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
