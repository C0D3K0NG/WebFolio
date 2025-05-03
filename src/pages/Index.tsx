
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
  const [scrollProgress, setScrollProgress] = useState(0);
  
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
    
    // Add scroll progress tracking
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = Math.min(window.scrollY / totalHeight, 1);
      setScrollProgress(progress);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      
      {/* Progress bar */}
      <div className="fixed top-0 left-0 z-50 w-full h-1">
        <div 
          className="h-full bg-primary transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress * 100}%` }}
        ></div>
      </div>
      
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
        
        <footer className="py-10 text-center text-sm text-muted-foreground relative">
          <p>&copy; {new Date().getFullYear()} Web Developer. All rights reserved.</p>
          <p className="mt-2 font-light">With great power comes great responsibility.</p>
          
          {/* Web decoration in footer */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden h-8 pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 1200 20" preserveAspectRatio="none">
              <path 
                d="M0,0 L1200,0 L1200,10 C900,15 600,0 300,10 L0,0 Z" 
                fill="currentColor" 
                fillOpacity="0.05" 
              />
            </svg>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
