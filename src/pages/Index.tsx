
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import WebDivider from '@/components/WebDivider';
import ScrollSpider from '@/components/ScrollSpider';
import IntroOverlay from '@/components/IntroOverlay';

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);
  
  useEffect(() => {
    // Check for theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (savedTheme === 'light') {
      document.documentElement.classList.remove('dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    }
    
    // Check if intro has been seen before in this session
    const introSeen = sessionStorage.getItem('introSeen');
    if (introSeen) {
      setShowIntro(false);
      setContentVisible(true);
    }
  }, []);
  
  const handleIntroComplete = () => {
    setShowIntro(false);
    setContentVisible(true);
    sessionStorage.setItem('introSeen', 'true');
  };
  
  return (
    <div className={cn(
      "min-h-screen web-bg dark:venom-bg",
      "dark:grunge-bg",
      !contentVisible ? "overflow-hidden" : ""
    )}>
      {showIntro && <IntroOverlay onComplete={handleIntroComplete} />}
      
      <div className={cn(
        "transition-opacity duration-1000",
        contentVisible ? "opacity-100" : "opacity-0"
      )}>
        <Navbar />
        <ScrollSpider />
        
        <main>
          <HeroSection />
          
          <WebDivider />
          <AboutSection />
          
          <WebDivider />
          <ProjectsSection />
          
          <WebDivider />
          <SkillsSection />
          
          <WebDivider />
          <ContactSection />
        </main>
        
        <footer className="py-10 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Web Developer. All rights reserved.</p>
          <p className="mt-2 font-light">With great power comes great responsibility.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
