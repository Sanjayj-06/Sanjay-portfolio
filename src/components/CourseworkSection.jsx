import { BookOpen } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

const coursework = [
  "Data Structures",
  "Design and Analysis of Algorithms",
  "Machine Learning",
  "Deep Learning",
  "Artificial Intelligence",
  "Database Management Systems",
  "Optimisation Techniques",
  "Natural Language Processing",
  "Internet of Things",
  "Embedded Systems",
  "Data Privacy and Security",
  "Object-Oriented Programming",
  "Software Engineering",
  "Parllel and Distributed Systems",
  "Operating Systems",
  "Computer Networks",
  "Data Visualisation and Exploration",
  "Computer Organisation and Architecture",
  "Discrete Mathematics",
  "Linear Algebra",
  "Probability and Statistics",
];

export const CourseworkSection = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3, once: true });
  const [contentRef, contentVisible] = useScrollAnimation({ threshold: 0.2, once: true });

  return (
    <section id="coursework" className="py-32 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div 
          ref={titleRef}
          className={cn(
            "transition-all duration-1000 mb-16",
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Academic <span className="text-gradient">Coursework</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div 
          ref={contentRef}
          className={cn(
            "card-glass p-8 md:p-12 rounded-2xl card-hover transition-all duration-1000 relative overflow-hidden group",
            contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 glow-card">
                <BookOpen className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Computer Science & Engineering Courses</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {coursework.map((course, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></div>
                  <span className="text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">
                    {course}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
