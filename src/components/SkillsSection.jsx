import { useState } from "react";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const skills = [
  // Frontend
  { name: "HTML", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },

  // Backend
  { name: "Python", level: 90, category: "backend" },
  { name: "Java", level: 75, category: "backend" },
  { name: "C", level: 80, category: "backend" },
  { name: "C++", level: 40, category: "backend" },
  { name: "Node.js", level: 30, category: "backend" },
  { name: "SQL", level: 70, category: "backend" },
  

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
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
    <section id="skills" className="py-32 px-4 relative overflow-hidden bg-gradient-to-b from-background via-secondary/30 to-background">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-1/2 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div 
          ref={titleRef}
          className={cn(
            "transition-all duration-1000 mb-12",
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-3 rounded-full font-semibold transition-all duration-300 capitalize text-sm md:text-base",
                activeCategory === category
                  ? "bg-gradient-to-r from-primary to-purple-600 text-primary-foreground shadow-lg scale-105"
                  : "bg-card/50 backdrop-blur-sm text-foreground/80 hover:bg-card border border-border hover:scale-105"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div 
          ref={skillsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className={cn(
                "card-glass p-6 rounded-2xl card-hover group relative overflow-hidden transition-all duration-700",
                skillsVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors duration-300">
                    {skill.name}
                  </h3>
                  <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {skill.level}%
                  </span>
                </div>
                
                <div className="relative w-full bg-secondary/50 h-3 rounded-full overflow-hidden">
                  <div
                    className={cn(
                      "absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ease-out",
                      "bg-gradient-to-r from-primary via-purple-500 to-primary",
                      skillsVisible && "animate-shimmer"
                    )}
                    style={{ 
                      width: skillsVisible ? `${skill.level}%` : '0%',
                      backgroundSize: '200% 100%',
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
