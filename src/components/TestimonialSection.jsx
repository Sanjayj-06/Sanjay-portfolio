import { FileText, Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

const testimonialsData = [
  {
    id: 1,
    name: "Dr R Arumuganthan",
    designationLines: [
      "Retired Professor of Mathematics,",
      "Former Dean - Students Union ,",
      "Former Contoller of Examination,",
      "Former HOD - Mathematics,",
      "PSG College of Technology"
    ],
    institution: "",
    content: `It is my pleasure to recommend Mr Sanjay J, a final year student of BE CS (Artificial Intelligence and Machine Learning). I have had the opportunity to work with him through several student and institutional initiatives, where he has consistently demonstrated leadership, commitment, and professionalism.

Sanjay played an active role in organizing Kriya 2026, one of the flagship national-level technical symposiums of PSG College of Technology. He notably served as the moderator for the panel discussion titled "Mitigating Job Displacement in the Age of AI," engaging with distinguished panellists from government, industry, and technology sectors. His ability to facilitate meaningful discussions, communicate effectively, and confidently manage a high-profile session reflected maturity and strong interpersonal skills. The session marked a significant milestone as one of the first panel discussions conducted as part of Kriya.

Beyond this, Sanjay has consistently contributed to the student community through various leadership roles, including serving as Joint Secretary of the Computer Science and Engineering Association for two consecutive years. He has also been an active member of the Students' Union, Head of Events at the Cyber Security Club, and an Executive Member of Tamil Mandram. His dedication, organizational abilities, and willingness to take initiative make him a dependable leader and a valuable contributor to any team.

I wish him all the best and hope he will bring laurels to self and all.`,
    avatarUrl: "/RAM.webp", // Optional: place photo in public directory and link here (e.g. "/prof_sudha.jpg")
    initials: "RA",
    gradientClass: "from-blue-500 to-indigo-500",
    lorUrl: "/Sanjay Reco.pdf" // Point to actual file in public/
  },
  {
    id: 2,
    name: "Dr B Vinoth Kumar",
    designationLines: [
      "Professor and Head",
      "Department of Information Technology",
      "PSG College of Technology"
    ],
    institution: "",
    content: `I have had the opportunity to work closely with Sanjay on Institutional initiatives. 

Sanjay played a significant role in the development and deployment of the official websites for the PSG AI Consortium and AI Spectrum, contributing effectively to both the technical implementation and maintenance of these platforms. He has also been actively involved in hosting and managing multiple websites under institutional domains, showcasing his ability to handle responsibilities with diligence and attention to detail.

Beyond his technical contributions, Sanjay was an active member of the organizing team for AI Spectrum 2025, where he worked collaboratively with faculty members, industry experts, and student volunteers to ensure the successful execution of the event. His commitment, adaptability, and willingness to take ownership of tasks make him a dependable team member and a promising software professional.

I appreciate his enthusiasm for learning and his dedication towards delivering quality outcomes in every responsibility he undertakes.`,
    avatarUrl: "/BVK.png", // Optional: place photo in public directory and link here (e.g. "/prof_sudha.jpg")
    initials: "RA",
    gradientClass: "from-blue-500 to-indigo-500",
    lorUrl: "" // Point to actual file in public/
  },
   {
    id: 3,
    name: "Dr N Gopika Rani",
    designationLines: [
      "Assistant Professor (SG)",
      "Department of CSE",
      "PSG College of Technology"
    ],
    institution: "",
    content: `I am pleased to recommend Mr. Sanjay J, a highly motivated and accomplished fourth-year student who has consistently demonstrated excellence in academics, technical activities, and leadership throughout his academic journey.

Sanjay has exhibited exceptional organizational and administrative skills by successfully coordinating numerous department-level, intra-college, and inter-college events. His ability to plan effectively, communicate clearly, manage teams efficiently, and ensure the smooth execution of activities has contributed significantly to the success of various academic, technical, and cultural programs.

In addition to his event management responsibilities, Sanjay has actively participated in technical initiatives, workshops, seminars, and student development activities. His dedication, professionalism, problem-solving abilities, and commitment to continuous learning have distinguished him among his peers. He consistently demonstrates leadership, accountability, and a collaborative spirit in every task he undertakes.

Sanjay's positive attitude, strong work ethic, and ability to inspire and coordinate teams have earned him the respect and appreciation of both faculty members and fellow students. He has proven himself to be a dependable and capable individual who can effectively handle responsibilities while maintaining high standards of performance.

As a fourth-year student preparing to embark on the next stage of his academic and professional career, Sanjay has shown great potential to excel in roles that require leadership, administration, teamwork, and technical competence. I am confident that he will continue to achieve success and make valuable contributions wherever he chooses to pursue his future endeavors.

I wish him every success in his future pursuits.
`,
    avatarUrl: "/ngr.png", // Optional: place photo in public directory and link here (e.g. "/prof_sudha.jpg")
    initials: "",
    gradientClass: "from-blue-500 to-indigo-500",
    lorUrl: "" // Point to actual file in public/
  },
  
];

export const TestimonialSection = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3, once: true });
  const [cardsRef, cardsVisible] = useScrollAnimation({ threshold: 0.2, once: true });

  return (
    <section 
      id="testimonials" 
      className="py-24 md:py-32 px-4 relative overflow-hidden bg-background"
    >
      {/* Background decoration elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 dark:opacity-30">
        <div className="absolute top-1/4 left-1/10 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
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
             <span className="text-gradient font-serif italic">Testimonials</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-indigo-500 mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
            Kind words and support from professors and mentors who have guided my journey.
          </p>
        </div>

        {/* Testimonials Grid (Landscape list layout) */}
        <div 
          ref={cardsRef}
          className="space-y-8 lg:space-y-10"
        >
          {testimonialsData.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={cn(
                "group relative glass-premium rounded-[2rem] p-8 md:p-10 card-hover transition-all duration-700 flex flex-col md:flex-row gap-8 justify-between text-left",
                cardsVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Quote Ornament */}
              <div className="absolute top-8 right-8 text-primary/10 group-hover:text-primary/20 transition-colors duration-300 pointer-events-none">
                <Quote size={56} className="transform rotate-180" />
              </div>

              {/* Profile Details (Left Column on Desktop, Top Column on Mobile) */}
              <div className="flex flex-col justify-between shrink-0 w-full md:w-[280px] border-b md:border-b-0 md:border-r border-border/50 pb-6 md:pb-0 md:pr-8 space-y-4 relative z-10">
                <div className="space-y-4 flex flex-col items-start text-left">
                  {/* Photo Frame - Square with rounded corners, larger size */}
                  <div className="w-50 h-50 rounded-2xl border border-border/80 flex items-center justify-center overflow-hidden shadow-sm shrink-0 relative bg-card">
                    {testimonial.avatarUrl ? (
                      <img 
                        src={testimonial.avatarUrl} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className={cn(
                        "w-full h-full bg-gradient-to-br flex items-center justify-center font-bold text-white text-2xl",
                        testimonial.gradientClass
                      )}>
                        {testimonial.initials}
                      </div>
                    )}
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                      {testimonial.name}
                    </h3>
                    <p className="text-xs text-gradient font-bold uppercase tracking-wider">
                      {testimonial.institution}
                    </p>
                  </div>

                  {/* Designation */}
                  <div className="text-xs text-muted-foreground font-semibold leading-relaxed space-y-1">
                    {testimonial.designationLines ? (
                      testimonial.designationLines.map((line, idx) => (
                        <p key={idx}>{line}</p>
                      ))
                    ) : (
                      <p>{testimonial.designation}</p>
                    )}
                  </div>
                </div>

                {/* View LOR Button */}
                {testimonial.lorUrl && (
                  <div className="pt-2 md:pt-4">
                    <a 
                      href={testimonial.lorUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/20 text-primary text-xs font-bold hover:bg-primary/5 hover:border-primary transition-all duration-300 hover:scale-105 active:scale-95 shadow-xs cursor-pointer bg-card/40"
                    >
                      <FileText className="h-4 w-4" />
                      <span>View LOR</span>
                    </a>
                  </div>
                )}
              </div>

              {/* Recommendation Content (Right Column on Desktop, Bottom Column on Mobile) */}
              <div className="flex-1 flex flex-col justify-center space-y-4 relative z-10">
                <div className="space-y-4 text-muted-foreground text-sm leading-relaxed text-justify italic">
                  {testimonial.content.split("\n\n").map((para, i) => (
                    <p key={i}>
                      {i === 0 ? "“" : ""}{para.trim()}{i === testimonial.content.split("\n\n").length - 1 ? "”" : ""}
                    </p>
                  ))}
                </div>
              </div>

              {/* Glowing hover accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
