import { ArrowUp, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative py-12 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center justify-center gap-6">
          {/* Back to top button */}
          <a
            href="#hero"
            className="p-4 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 hover:from-primary/30 hover:to-purple-500/30 text-primary transition-all duration-300 hover:scale-110 glow-card group"
            aria-label="Back to top"
          >
            <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform duration-300" />
          </a>

          {/* Copyright text */}
          <div className="text-center space-y-2">
            <p className="text-muted-foreground text-sm flex items-center gap-2 justify-center">
              Made with <Heart size={16} className="text-red-500 animate-pulse-subtle" fill="currentColor" /> by
              <span className="font-semibold text-gradient">Sanjay Jayakumar</span>
            </p>
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
