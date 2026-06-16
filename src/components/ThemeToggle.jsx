import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else if (storedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      // Default to dark mode
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed top-5 right-5 z-50 p-2.5 rounded-full transition-all duration-300",
        "border border-border/80 bg-card/80 text-foreground shadow-sm hover:shadow-md backdrop-blur-md",
        "hover:text-primary hover:border-primary/30 hover:scale-110 active:scale-95 focus:outline-hidden cursor-pointer"
      )}
      aria-label="Toggle Theme"
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5 text-amber-500 animate-pulse-subtle" />
      ) : (
        <Moon className="h-5 w-5 text-indigo-600" />
      )}
    </button>
  );
};
