import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Research", href: "#research" },
  { name: "Videos", href: "#videos" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.slice(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-500",
        isScrolled 
          ? "py-3 bg-background/70 backdrop-blur-xl shadow-lg border-b border-border/50" 
          : "py-5 bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl md:text-2xl font-bold flex items-center group"
          href="#hero"
        >
          <span className="relative z-10 transition-all duration-300">
            <span className="bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent group-hover:from-purple-500 group-hover:via-primary group-hover:to-purple-500 transition-all duration-500"> 
              Sanjay Jayakumar 
            </span>
          </span>
        </a>

        {/* desktop nav */}
        <div className="hidden lg:flex space-x-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative group",
                activeSection === item.href.slice(1)
                  ? "text-primary"
                  : "text-foreground/70 hover:text-primary"
              )}
            >
              {item.name}
              <span className={cn(
                "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary to-purple-500 transition-all duration-300 rounded-full",
                activeSection === item.href.slice(1) ? "w-3/4" : "w-0 group-hover:w-3/4"
              )}></span>
            </a>
          ))}
        </div>

        {/* mobile nav */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="lg:hidden p-2 text-foreground z-50 hover:text-primary transition-colors duration-300 hover:scale-110"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center",
            "transition-all duration-500 lg:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-6 text-center">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "text-2xl font-semibold transition-all duration-300 hover:text-primary hover:scale-110",
                  activeSection === item.href.slice(1) ? "text-primary scale-110" : "text-foreground/80",
                  isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
                style={{ transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms' }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
          
          {/* Decorative gradient in mobile menu */}
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-50 animate-pulse-subtle"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl opacity-50 animate-pulse-subtle" style={{animationDelay: '1s'}}></div>
        </div>
      </div>
    </nav>
  );
};
