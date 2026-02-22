import { Calendar, MapPin, FileText } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

const research = [
  {
    id: 1,
    title: "Neuro Prune: An Adaptive Approach for Efficient Deep Neural Network Optimisation on Edge Devices",
    description: "A pruning algorithm optimizing DNNs for edge devices using reinforcement learning and the Lottery Ticket Hypothesis.",
    image: "/Screenshot 2025-08-01 223249.png",
    conference: "International Conference on Applied Mathematical Models 2025",
    achievements: [
      "Co-authored 'Neuro Prune', a pruning algorithm optimizing DNNs for edge devices using reinforcement learning and the Lottery Ticket Hypothesis.",
      "Achieved 0.22% accuracy improvement on ResNet-18 with reduced inference time and computational load.",
      "Enabled energy-efficient, real-time AI deployment on resource-constrained environments.",
      "Presented this Research Paper at International Conference on Applied Mathematical Models 2025 titled 'Neuro Prune: An Adaptive Approach for Efficient Deep Neural Network Optimisation on Edge Devices'."
    ],
    tags: ["Deep Learning", "Edge Computing", "Neural Network Optimization", "Reinforcement Learning"],
    publishedYear: "2025",
    status: "Presented"
  }
];

export const ResearchSection = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3, once: true });
  const [contentRef, contentVisible] = useScrollAnimation({ threshold: 0.2, once: true });

  return (
    <section id="research" className="py-32 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
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
            Research <span className="text-gradient">Publications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div 
          ref={contentRef}
          className="space-y-8"
        >
          {research.map((paper) => (
            <div
              key={paper.id}
              className={cn(
                "card-glass p-8 rounded-2xl card-hover group relative overflow-hidden transition-all duration-1000",
                contentVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10"
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="space-y-8 relative z-10">
                {/* Image Section - Landscape */}
                <div className="w-full">
                  <div className="h-64 md:h-80 lg:h-96 overflow-hidden rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-500">
                    <img
                      src={paper.image}
                      alt={paper.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="space-y-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors duration-300">
                        {paper.title}
                      </h3>
                      <p className="text-lg font-semibold text-gradient mb-3">
                        {paper.conference}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {paper.description}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 text-sm">
                      <div className="flex items-center gap-2 bg-primary/10 px-3 py-1.5 rounded-full">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="font-medium">{paper.publishedYear}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-green-500/10 px-3 py-1.5 rounded-full">
                        <FileText className="h-4 w-4 text-green-600" />
                        <span className="text-green-600 font-medium">{paper.status}</span>
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {paper.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1.5 text-xs font-medium border border-primary/30 rounded-full bg-primary/5 text-primary hover:bg-primary/10 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Achievements */}
                  <div className="space-y-3">
                    <h4 className="text-lg font-bold text-foreground">Key Achievements</h4>
                    {paper.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 shadow-sm"></div>
                        <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                      </div>
                    ))}
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
