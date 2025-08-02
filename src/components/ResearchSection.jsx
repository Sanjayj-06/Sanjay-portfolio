import { Calendar, MapPin, FileText } from "lucide-react";

const research = [
  {
    id: 1,
    title: "Neuro Prune: An Adaptive Approach for Efficient Deep Neural Network Optimisation on Edge Devices",
    description: "A pruning algorithm optimizing DNNs for edge devices using reinforcement learning and the Lottery Ticket Hypothesis.",
    image: "/src/assets/Screenshot 2025-08-01 223249.png",
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
  return (
    <section id="research" className="py-24 px-4 relative bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Research <span className="text-primary">Publications</span>
        </h2>

        <div className="space-y-8">
          {research.map((paper, index) => (
            <div
              key={paper.id}
              className="bg-card p-6 md:p-8 rounded-lg shadow-xs border border-border hover:shadow-md transition-shadow duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Image Section */}
                <div className="lg:col-span-1">
                  <div className="h-48 lg:h-full overflow-hidden rounded-lg">
                    <img
                      src={paper.image}
                      alt={paper.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:col-span-2 space-y-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2 leading-tight">
                        {paper.title}
                      </h3>
                      <p className="text-lg font-medium text-primary mb-2">
                        {paper.conference}
                      </p>
                      <p className="text-muted-foreground mb-4">
                        {paper.description}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{paper.publishedYear}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FileText className="h-4 w-4" />
                        <span className="text-green-600 font-medium">{paper.status}</span>
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {paper.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Achievements */}
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-foreground mb-3">Key Achievements</h4>
                    {paper.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
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
