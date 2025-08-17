import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    id:1,
    title: "Joint Secretary",
    company: "Computer Science Engineers Association (CSEA) 2025 - 2026",
    location: "PSG College of Technology, Coimbatore",
    duration: "Aug 2025 - Present",
    description: []
  },
  {
    id: 2,
    title: "Mobile Application Prototype Developer",
    company: "Inria Grenoble & PSG College of Technology",
    location: "Remote",
    duration: "Jan 2025 - May 2025",
    description: [
      "Contributed to front-end, back-end, and database development for a mobile app prototype.",
      "Built cross-platform mobile app using React Native, Tailwind and worked on backend APIs and MySQL database integration.",
      "Collaborated on system integration for an international startup project incubated at Inria.",
      "Contributed to the early-stage success of the AIBILL prototype in an international research-industry setting."
    ]
  },
  {
    id: 3,
    title: "Joint Secretary",
    company: "Computer Science Engineers Association (CSEA) 2024 - 2025",
    location: "PSG College of Technology, Coimbatore",
    duration: "Aug 2024 - May 2025",
    description: [
      "Organising Secretary of Infinitum 2025 (Intra College Tech Symposium) featuring coding contests, tech talks, and project showcases.",
      "Coordinator for 3 technical events, 3 workshops of CSEA, and 2 ceremonies.",
      "Managed the yearly budget of CSEA and two affiliated clubs (GHCC and The Eye) for the academic year 2024–2025.",
      "Coordinated 5 events conducted by CSEA for Kriya '25 (Students Union Tech Fest)."
    ]
  }
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Professional <span className="text-primary">Experience</span>
        </h2>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className="bg-card p-6 md:p-8 rounded-lg shadow-xs border border-border hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                    {experience.title}
                  </h3>
                  <p className="text-lg font-medium text-primary mb-2">
                    {experience.company}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{experience.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{experience.location}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                {experience.description.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
