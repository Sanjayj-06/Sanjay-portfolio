import { ArrowUp, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative py-12 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center justify-center gap-6">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-3.5 rounded-full border border-border/80 bg-card/85 text-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 hover:scale-110 active:scale-95 shadow-xs hover:shadow-md cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp size={20} className="hover:-translate-y-0.5 transition-transform duration-300" />
          </button>

          {/* Copyright text */}
          <div className="text-center space-y-2">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
