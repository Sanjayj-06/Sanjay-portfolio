import { Calendar, FileText, Bookmark, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

const research = [
  {
    id: 1,
    title: "Neuro Prune: An Adaptive Approach for Efficient Deep Neural Network Optimisation on Edge Devices",
    description: "A novel neural network pruning framework optimized for edge computing constraints. Developed using reinforcement learning policies combined with the Lottery Ticket Hypothesis to achieve maximum model shrinkage with negligible accuracy degradation.",
    image: "/Screenshot 2025-08-01 223249.png",
    conference: "International Conference on Applied Mathematical Models 2025",
    achievements: [
      "Co-authored 'Neuro Prune', a pruning algorithm optimizing DNNs for edge devices using reinforcement learning and the Lottery Ticket Hypothesis.",
      "Achieved a 0.22% accuracy improvement on ResNet-18 while significantly reducing inference latency and memory footprints.",
      "Enabled energy-efficient, real-time AI deployments on highly resource-constrained IoT and mobile environments.",
      "Formally presented this research work at the International Conference on Applied Mathematical Models (ICAMM 2025)."
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
    <section id="research" className="py-24 md:py-32 px-4 relative overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 dark:opacity-30">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
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
            Research & <span className="text-gradient font-serif italic">Publications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-indigo-500 mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
            Scientific investigations, co-authored publications, and mathematical models for modern neural network optimizations.
          </p>
        </div>

        {/* Research Papers List */}
        <div 
          ref={contentRef}
          className="space-y-8"
        >
          {research.map((paper) => (
            <div
              key={paper.id}
              className={cn(
                "glass-premium p-6 md:p-10 lg:p-12 rounded-[2.25rem] card-hover group relative overflow-hidden transition-all duration-1000 text-left",
                contentVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              )}
            >
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative z-10">
                
                {/* Paper Image Frame */}
                <div className="w-full lg:w-2/5 flex-shrink-0">
                  <div className="h-48 sm:h-64 md:h-80 w-full overflow-hidden rounded-[1.5rem] border border-border/80 shadow-md group-hover:shadow-lg transition-all duration-500 bg-secondary/35">
                    <img
                      src={paper.image}
                      alt={paper.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Paper Content Details */}
                <div className="flex-1 space-y-6">
                  
                  {/* Badges and metadata */}
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary">
                      <Bookmark className="h-3.5 w-3.5" />
                      <span>{paper.status}</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-secondary/40 text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5 text-primary" />
                      <span>{paper.publishedYear}</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-secondary/40 text-muted-foreground">
                      <FileText className="h-3.5 w-3.5 text-primary" />
                      <span>ICAMM 2025</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                      {paper.title}
                    </h3>
                    
                    <p className="text-sm font-semibold text-gradient uppercase tracking-wide">
                      {paper.conference}
                    </p>
                    
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {paper.description}
                    </p>
                  </div>

                  {/* Tech Keywords Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {paper.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="px-2.5 py-1 text-[10px] font-semibold tracking-wide border border-border rounded-md bg-secondary/40 text-foreground/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Achievements Highlights list */}
                  <div className="space-y-4 pt-6 border-t border-border/80">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-foreground/80 flex items-center gap-2">
                      <Award className="h-4 w-4 text-primary" />
                      <span>Key Research Contributions</span>
                    </h4>
                    
                    <div className="space-y-3">
                      {paper.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-sm md:text-base text-muted-foreground leading-relaxed hover:text-foreground transition-colors duration-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <p className="flex-1">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              {/* Hover highlight overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent rounded-[2.25rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
