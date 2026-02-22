import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title : "Sudar AI",
    description: "An AI Powered solution for Multigrade classrooms to assist teachers and students",
    image: "/sudar.png",
    tags: ["React", "TailwindCSS", "FastAPI", "Docker", "Postgress"],
    demoUrl: "",
    githubUrl: ""
  },
  {
    id: 2,
    title: "Command Gateway",
    description: "A full-stack Command Gateway system to securely manage command execution through regex-based rule enforcement, API-key authentication, and credit-based usage control.",
    image: "/command_gateway.png",
    tags: ["React", "TailwindCSS", "FastAPI", "Docker", "Postgress"],
    demoUrl: "",
    githubUrl: ""
  },
  {
    id: 3,
    title: "AI Spectrum Website",
    description: "Official Website for AI Spectrum , A International Conference conducted by PSG AI Consortium",
    image: "/image.png",
    tags: ["React", "TailwindCSS", "Docker"],
    demoUrl: "https://aiconsortium.psgtech.ac.in/aispectrum",
    githubUrl: "https://github.com/Dhanush-2k22/AISpectrum.git",
  },
  {
    id: 4,
    title: "Gender and Age Prediction",
    description:
      "A Model that predicts your age and gender based on your input image",
    image: "/age.webp",
    tags: ["Python", "OpenCV", "Deep Learning"],
    demoUrl: "#",
    githubUrl: "https://github.com/Sanjayj-06/Gender_Age_Prediction.git",
  },
  {
    id: 5,
    title: "ICAMM 26 Website",
    description:
      "Official website for the ICAMM 26 conference, featuring speaker profiles, schedules, and registration.",
    image: "/icamm.png",
    tags: ["React", "TailwindCSS", "Docker"],
    demoUrl: "https://icamm.psgtech.ac.in",
    githubUrl: "https://github.com/Sanjayj-06/ICAMM-26.git",
  },
];

export const ProjectsSection = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3, once: true });
  const [projectsRef, projectsVisible] = useScrollAnimation({ threshold: 0.1, once: true });

  return (
    <section id="projects" className="py-32 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div 
          ref={titleRef}
          className={cn(
            "transition-all duration-1000 mb-16",
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto">
            Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
          </p>
        </div>

        <div 
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={cn(
                "group space-y-4 transition-all duration-700",
                projectsVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                />
                {/* Overlay icons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/90 text-primary hover:bg-white hover:scale-110 transition-all duration-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/90 text-primary hover:bg-white hover:scale-110 transition-all duration-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>

              {/* Content Card */}
              <div className="card-glass p-6 rounded-2xl card-hover relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-medium border border-primary/30 rounded-full bg-primary/5 text-primary hover:bg-primary/10 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            className="cosmic-button inline-flex items-center gap-2 group"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Sanjayj-06"
          >
            Check My Github 
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};
