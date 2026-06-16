import { Linkedin, Calendar, ExternalLink, ArrowUpRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

export const LinkedInSection = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3, once: true });
  const [gridRef, gridVisible] = useScrollAnimation({ threshold: 0.1, once: true });

  const post = {
    title: "Panel Discussion on Mitigating Job Displacement in the Age of AI",
    description: "Moderated a panel discussion at PSG Tech, Coimbatore, focusing on solutions, policy frameworks, and educational shifts to mitigate job displacement in the era of rapid AI adoption.",
    date: "March 2026",
    thumbnail: "/pannel.jpg",
    link: "https://www.linkedin.com/in/sanjayj06", // Direct link to your profile/posts page
    category: "Panel Discussion"
  };

  return (
    <section id="linkedin" className="py-24 md:py-32 px-4 relative overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 dark:opacity-30">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Section Title */}
        <div 
          ref={titleRef}
          className={cn(
            "transition-all duration-1000 mb-12 text-center",
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-3 flex items-center justify-center gap-3">
            LinkedIn <span className="text-gradient font-serif italic">Updates</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-indigo-500 mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
            My recent professional share, event highlight, and updates from LinkedIn.
          </p>
        </div>

        {/* Centered Single Post Card matching Video Section Grid Layout */}
        <div 
          ref={gridRef}
          className="flex justify-center w-full"
        >
          <a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "group glass-premium rounded-[1.75rem] overflow-hidden card-hover transition-all duration-700 flex flex-col justify-between text-left cursor-pointer w-full max-w-lg",
              gridVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-8"
            )}
          >
            <div>
              {/* Thumbnail Header with Floating Date and Hover Overlay */}
              <div className="relative aspect-video overflow-hidden bg-secondary/35 border-b border-border/80">
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Floating Date Badge */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/75 text-white text-[10px] font-bold uppercase tracking-wider">
                  {post.date}
                </div>

                {/* Category Tag Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary/95 text-white text-[10px] font-bold uppercase tracking-wider">
                  {post.category}
                </div>

                {/* Hover Overlay with LinkedIn Icon & Call To Action */}
                <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0077b5] border border-white/25 text-white font-semibold text-xs shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <Linkedin className="h-4 w-4 fill-white" />
                    <span>View on LinkedIn</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </div>
                </div>
              </div>

              {/* Content body text */}
              <div className="p-6 space-y-3">
                <h3 className="font-bold text-lg md:text-xl text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed text-justify">
                  {post.description}
                </p>
              </div>
            </div>

            {/* Card Footer */}
            <div className="px-6 pb-6 pt-2 mt-auto flex items-center justify-between text-xs text-muted-foreground border-t border-border/10">
              <div className="flex items-center gap-1.5 font-semibold text-primary">
                <Linkedin className="h-3.5 w-3.5 fill-current" />
                <span>linkedin.com</span>
              </div>
              <ExternalLink className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
            </div>
          </a>
        </div>

        {/* View Profile Call to Action */}
        <div className="flex justify-center pt-16">
          <a
            href="https://www.linkedin.com/in/sanjayj06"
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-button shadow-md flex items-center gap-2.5 group cursor-pointer"
          >
            <Linkedin className="h-4.5 w-4.5" />
            <span>Connect on LinkedIn</span>
            <ExternalLink className="h-3.5 w-3.5 opacity-70 group-hover:translate-x-0.5 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};
