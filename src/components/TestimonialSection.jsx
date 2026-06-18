import { FileText, Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

const testimonialsData = [
  {
    id: 1,
    name: "Dr R Arumuganthan",
    designation: "Retired Professor of Mathematics",
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
                  <p className="text-xs text-muted-foreground font-semibold leading-relaxed">
                    {testimonial.designation}
                  </p>
                </div>

                {/* View LOR Button */}
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
