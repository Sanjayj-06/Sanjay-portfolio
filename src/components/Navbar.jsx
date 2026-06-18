import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Education", href: "/education" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Research", href: "/research" },
  { name: "Videos", href: "/videos" },
  { name: "Contact", href: "/#contact" },
];

export const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Check if contact section is scrolled into view (near the bottom)
      const contactElement = document.getElementById("contact");
      if (contactElement) {
        const rect = contactElement.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.6) {
          setActiveSection("contact");
          return;
        }
      }

      // Otherwise determine active tab based on path
      const path = location.pathname;
      if (path === "/") {
        setActiveSection("home");
      } else {
        setActiveSection(path.slice(1));
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const getIsActive = (itemHref) => {
    if (itemHref === "/") return activeSection === "home";
    return activeSection === itemHref.replace("/", "").replace("#", "");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-40 pointer-events-none">
      <div
        className={cn(
          "mx-auto pointer-events-auto transition-all duration-300 ease-in-out",
          isScrolled
            ? "mt-4 w-[92%] max-w-6xl rounded-full bg-card/75 border border-border/80 shadow-md backdrop-blur-xl py-2 px-6"
            : "mt-0 w-full max-w-full bg-transparent py-5 pl-8 pr-20"
        )}
      >
        <div className="flex items-center justify-between w-full">
        <Link
          className="text-lg md:text-xl font-bold flex items-center group"
          to="/"
        >
          <span className="relative z-10 font-sans tracking-tight font-extrabold">
            <span className="bg-gradient-to-r from-primary via-indigo-500 to-primary bg-clip-text text-transparent group-hover:from-indigo-500 group-hover:to-primary transition-all duration-500">
              Sanjay Jayakumar
            </span>
          </span>
        </Link>

        {/* desktop nav */}
        <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navItems.map((item) => {
            const isActive = getIsActive(item.href);
            const linkProps = {
              key: item.name,
              className: cn(
                "px-3 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all duration-300 relative group",
                isActive
                  ? "text-primary"
                  : "text-foreground/75 hover:text-primary"
              )
            };

            const linkContent = (
              <>
                {item.name}
                <span className={cn(
                  "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary to-indigo-500 transition-all duration-300 rounded-full",
                  isActive ? "w-1/2" : "w-0 group-hover:w-1/2"
                )}></span>
              </>
            );

            if (item.href.startsWith("/")) {
              return (
                <Link to={item.href} {...linkProps}>
                  {linkContent}
                </Link>
              );
            } else {
              return (
                <a href={item.href} {...linkProps}>
                  {linkContent}
                </a>
              );
            }
          })}
        </div>

        {/* mobile nav */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="lg:hidden p-2 text-foreground z-50 hover:text-primary transition-colors duration-300 hover:scale-110 cursor-pointer"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={cn(
            "fixed inset-0 bg-background/98 backdrop-blur-2xl z-40 flex flex-col items-center justify-center",
            "transition-all duration-500 lg:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-6 text-center">
            {navItems.map((item, index) => {
              const isActive = getIsActive(item.href);
              const linkProps = {
                key: item.name,
                className: cn(
                  "text-xl font-bold transition-all duration-300 hover:text-primary hover:scale-110",
                  isActive ? "text-primary scale-110" : "text-foreground/80",
                  isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                ),
                style: { transitionDelay: isMenuOpen ? `${index * 40}ms` : '0ms' },
                onClick: () => setIsMenuOpen(false)
              };

              if (item.href.startsWith("/")) {
                return (
                  <Link to={item.href} {...linkProps}>
                    {item.name}
                  </Link>
                );
              } else {
                return (
                  <a href={item.href} {...linkProps}>
                    {item.name}
                  </a>
                );
              }
            })}
          </div>

          {/* Decorative gradient in mobile menu */}
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-50 animate-pulse-subtle"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl opacity-50 animate-pulse-subtle" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </div>
  </nav>
  );
};
