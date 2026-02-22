import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-gradient-to-r from-primary to-purple-600 text-white shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.7)] group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6 group-hover:animate-bounce" />
        </button>
      )}
    </>
  );
};
