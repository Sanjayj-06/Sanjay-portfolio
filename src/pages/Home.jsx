import { useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { EducationSection } from "../components/EducationSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { SkillsSection } from "../components/SkillsSection";
import { CourseworkSection } from "../components/CourseworkSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ResearchSection } from "../components/ResearchSection";
import { VideoSection } from "../components/VideoSection";
import { ContactSection } from "../components/ContactSection";
import { TestimonialSection } from "../components/TestimonialSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        {path === "/" && <HeroSection />}
        {path === "/about" && <AboutSection />}
        {path === "/education" && <EducationSection />}
        {path === "/experience" && <ExperienceSection />}
        {path === "/projects" && <ProjectsSection />}
        {path === "/research" && <ResearchSection />}
        {path === "/videos" && <VideoSection />}
        {path === "/" && <TestimonialSection />}
        {path === "/" && <ContactSection />}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
