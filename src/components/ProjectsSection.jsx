import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title : "Sudar AI",
    description: "An AI Powered solution for Multigrade classrooms to assist teachers and students in content creation, grading, and instruction delivery.",
    image: "/sudar.png",
    tags: ["React", "TailwindCSS", "FastAPI", "Docker", "PostgreSQL"],
    demoUrl: "",
    githubUrl: ""
  },
  {
    id: 2,
    title : "Agent Flow",
    description: "Agentic AI Driven Workflow Automation System implemented with a usecase of the working inside PSG AI Consortium at PSG Tech",
    image: "/IP.png",
    tags: ["Python" , "Java script"],
    demoUrl: "",
    githubUrl: "https://github.com/RohithDharshan/ip_project"
  },
  {
    id: 2,
    title : "Dia Sole",
    description: "An Application customised to monitor & analyze foot health done in collaboration with PSG IMS&R, Coimbatore.",
    image: "/diasole.jpg",
    tags: ["Dart","Flutter"],
    demoUrl: "",
    githubUrl: ""
  },
  {
    id: 3,
    title: "Command Gateway",
    description: "A full-stack secure management gateway system enforcing regex-based execution rules, API key validation, and credit billing control.",
    image: "/command_gateway.png",
    tags: ["React", "TailwindCSS", "FastAPI", "Docker", "PostgreSQL"],
    demoUrl: "",
    githubUrl: ""
  },
  {
    id: 4,
    title: "AI Spectrum Website",
    description: "Official web interface designed for the AI Spectrum International Conference organized by the PSG AI Consortium.",
    image: "/image.png",
    tags: ["React", "TailwindCSS", "Docker"],
    demoUrl: "https://aiconsortium.psgtech.ac.in/aispectrum",
    githubUrl: "https://github.com/Dhanush-2k22/AISpectrum.git",
  },
  {
    id: 5,
    title: "Q&A System using Pretrained Model",
    description: "Built a Question Answer system model and analysed how it behaves using Pretrained models.",
    image: "/QA.jpg",
    tags: ["Python","Javascript"],
    demoUrl: "",
    githubUrl: "https://github.com/Sanjayj-06/QA-System-using-pretrained-models",
  },
  {
    id: 6,
    title: "Gender & Age Prediction",
    description: "Deep learning computer vision system trained to predict age ranges and gender classifications from image inputs.",
    image: "/age.webp",
    tags: ["Python", "OpenCV", "Deep Learning"],
    demoUrl: "",
    githubUrl: "https://github.com/Sanjayj-06/Gender_Age_Prediction.git",
  },
  {
    id: 7,
    title: "ICAMM 26 Website",
    description: "Official conference website for ICAMM 26, featuring schedule timetables, paper submissions, and speaker keynotes.",
    image: "/icamm.png",
    tags: ["React", "TailwindCSS", "Docker"],
    demoUrl: "https://icamm.psgtech.ac.in",
    githubUrl: "https://github.com/Sanjayj-06/ICAMM-26.git",
  },
  {
    id: 8,
    title: "PSG AI Consortium",
    description: "Official Website of PSG AI Consortium",
    image: "/aic.png",
    tags: ["React", "TailwindCSS", "Docker"],
    demoUrl: "https://aiconsortium.psgtech.ac.in",
    githubUrl: "",
  },
];

export const ProjectsSection = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3, once: true });
  const [projectsRef, projectsVisible] = useScrollAnimation({ threshold: 0.1, once: true });

  return (
    <section id="projects" className="py-24 md:py-32 px-4 relative overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 dark:opacity-30">
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Section Title */}
        <div 
          ref={titleRef}
          className={cn(
            "transition-all duration-1000 mb-16 text-center",
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-3">
            Featured <span className="text-gradient font-serif italic">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-indigo-500 mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
            A selective showcase of my recent projects.
          </p>
        </div>

        {/* Projects Grid */}
        <div 
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={cn(
                "group glass-premium rounded-[1.75rem] overflow-hidden card-hover transition-all duration-700 flex flex-col justify-between text-left",
                projectsVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              
              <div className="flex flex-col">
                {/* Unified Image Container */}
                <div className="relative aspect-video overflow-hidden bg-secondary/30 border-b border-border/80">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle light/dark top gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60 pointer-events-none"></div>
                  
                  {/* Floating Action Links (visible on hover) */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white text-slate-900 hover:bg-white/90 hover:scale-110 transition-all duration-300 shadow-md cursor-pointer"
                        title="Live Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white text-slate-900 hover:bg-white/90 hover:scale-110 transition-all duration-300 shadow-md cursor-pointer"
                        title="View Repository"
                      >
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Card Info Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-2.5 py-1 text-[10px] font-semibold tracking-wide border border-primary/20 rounded-md bg-primary/5 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer (For mobile/fallback access) */}
              {(project.demoUrl || project.githubUrl) ? (
                <div className="p-6 pt-0 mt-auto flex items-center gap-4 text-xs font-semibold">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span>GitHub</span>
                      <Github size={12} />
                    </a>
                  )}
                </div>
              ) : (
                <div className="p-6 pt-0 mt-auto">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground">Academic / Protected Project</span>
                </div>
              )}

              {/* Hover highlight overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent rounded-[1.75rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to Github section */}
        <div className="text-center mt-16">
          <a
            className="cosmic-button inline-flex items-center gap-2 group cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Sanjayj-06"
          >
            <span>Explore All Repositories</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};
