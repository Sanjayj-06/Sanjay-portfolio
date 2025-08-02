import { BookOpen } from "lucide-react";

const coursework = [
  "Data Structures",
  "Design and Analysis of Algorithms",
  "Machine Learning",
  "Database Management Systems",
  "Object-Oriented Programming",
  "Software Engineering",
  "Operating Systems",
  "Computer Organisation and Architecture",
  "Discrete Mathematics",
  "Linear Algebra",
  "Probability and Statistics",
];

export const CourseworkSection = () => {
  return (
    <section id="coursework" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Academic <span className="text-primary">Coursework</span>
        </h2>

        <div className="bg-card p-8 md:p-12 rounded-lg shadow-xs border border-border">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-full bg-primary/10">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Computer Science & Engineering Course</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
            {coursework.map((course, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-muted-foreground">{course}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
