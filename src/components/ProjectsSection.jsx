import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI Spectrum Website",
    description: "Official Website for AI Spectrum , A International Conference conducted by PSG AI Consortium",
    image: "/src/assets/image.png",
    tags: ["React", "TailwindCSS", "Docker"],
    demoUrl: "https://aiconsortium.psgtech.ac.in/aispectrum",
    githubUrl: "https://github.com/Dhanush-2k22/AISpectrum.git",
  },
  {
    id: 2,
    title: "Gender Age Prediction",
    description:
      "A Model that predicts your age and gender based on your image",
    image: "/src/assets/age.webp",
    tags: ["Python", "OpenCV", "Deep Learning"],
    demoUrl: "#",
    githubUrl: "https://github.com/Sanjayj-06/Gender_Age_Prediction.git",
  },
  {
    id: 3,
    title: "ICAMM 26 Website",
    description:
      "Official website for the ICAMM 26 conference, featuring speaker profiles, schedules, and registration.",
    image: "/src/assets/Color-white.jpg",
    tags: ["React", "TailwindCSS", "Docker"],
    demoUrl: "#",
    githubUrl: "https://github.com/Sanjayj-06/ICAMM-26.git",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group space-y-4"
            >
              {/* Image Section */}
              <div className="h-40 overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content Card */}
              <div className="bg-card p-6 rounded-lg shadow-xs border border-border card-hover">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Sanjayj-06"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
