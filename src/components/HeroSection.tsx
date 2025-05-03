
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Sparkles } from "lucide-react";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  const [hoverEffect, setHoverEffect] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
    
    const timer = setTimeout(() => {
      setHoverEffect(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Skyline silhouette with animation */}
      <div className="absolute top-0 left-0 w-full">
        <svg
          className="w-full h-auto"
          viewBox="0 0 1200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="skyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--sky-start-color)" />
              <stop offset="100%" stopColor="var(--sky-end-color)" />
            </linearGradient>
            <style>
              {`
                :root {
                  --sky-start-color: #0C1A2B;
                  --sky-end-color: #1A2C4D;
                }
                
                .dark {
                  --sky-start-color: #1B1B1B;
                  --sky-end-color: #2D1B21;
                }
              `}
            </style>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          
          <rect className="fill-[url(#skyGradient)]" width="1200" height="200" />
          
          <path 
            className="dark:fill-venom-red fill-spidey-red transition-all duration-1000" 
            d="M0,200 L0,100 L40,100 L60,60 L80,100 L100,40 L120,80 L140,20 L160,60 L180,100 L220,100 L240,60 L260,100 L280,80 L300,100 L320,40 L340,100 L380,100 L400,60 L420,100 L440,80 L460,30 L480,100 L520,50 L540,100 L560,80 L580,100 L600,30 L620,100 L660,100 L680,60 L700,20 L720,60 L740,100 L760,80 L780,40 L800,60 L820,100 L860,100 L880,60 L900,100 L920,50 L940,100 L980,100 L1000,40 L1020,100 L1040,70 L1060,100 L1080,50 L1100,100 L1140,100 L1160,70 L1180,100 L1200,60 L1200,200 Z" 
          />
          
          <path 
            className="dark:fill-black/60 fill-spidey-blue/90" 
            d="M0,200 L0,130 L20,130 L40,110 L60,130 L80,120 L100,130 L120,110 L140,120 L160,130 L180,120 L200,130 L220,110 L240,130 L260,120 L280,110 L300,130 L320,120 L340,130 L360,110 L380,130 L400,120 L420,130 L440,110 L460,130 L480,120 L500,110 L520,130 L540,120 L560,130 L580,110 L600,130 L620,120 L640,110 L660,130 L680,120 L700,130 L720,110 L740,130 L760,120 L780,130 L800,110 L820,130 L840,120 L860,110 L880,130 L900,120 L920,130 L940,110 L960,130 L980,120 L1000,130 L1020,110 L1040,130 L1060,120 L1080,130 L1100,110 L1120,130 L1140,120 L1160,130 L1180,110 L1200,130 L1200,200 Z" 
          />
          
          {/* Add stars in dark mode */}
          <g className="dark:opacity-100 opacity-0 transition-opacity duration-1000">
            {Array.from({ length: 20 }).map((_, i) => (
              <circle
                key={i}
                cx={Math.random() * 1200}
                cy={Math.random() * 100}
                r={Math.random() * 1.5 + 0.5}
                fill="#fff"
                className="animate-pulse-glow"
                style={{ animationDelay: `${Math.random() * 3}s` }}
              />
            ))}
          </g>
        </svg>
      </div>
      
      {/* Content with enhanced animations */}
      <div className="relative z-10 text-center px-6">
        <h1 className={cn(
          "font-bangers text-5xl sm:text-6xl md:text-7xl mb-4",
          "transition-all duration-700",
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        )}>
          <HoverCard openDelay={0} closeDelay={100}>
            <HoverCardTrigger asChild>
              <span 
                className={cn(
                  "text-primary relative cursor-pointer transition-all duration-300",
                  hoverEffect ? "hover:text-gradient-spidey dark:hover:text-gradient-venom" : ""
                )}
              >
                RAJDEEP
              </span>
            </HoverCardTrigger>
            <HoverCardContent className="p-2 bg-card/80 backdrop-blur-sm border-primary/20 w-auto">
              <div className="text-xs font-normal">Web Developer</div>
            </HoverCardContent>
          </HoverCard>{" "}
          <HoverCard openDelay={0} closeDelay={100}>
            <HoverCardTrigger asChild>
              <span 
                className={cn(
                  "relative cursor-pointer transition-all duration-300",
                  hoverEffect ? "hover:text-primary" : ""
                )}
              >
                SAHA
              </span>
            </HoverCardTrigger>
            <HoverCardContent className="p-2 bg-card/80 backdrop-blur-sm border-primary/20 w-auto">
              <div className="text-xs font-normal">Designer & Developer</div>
            </HoverCardContent>
          </HoverCard>
        </h1>
        
        <p className={cn(
          "text-lg md:text-xl mb-8 font-orbitron relative",
          "transition-all duration-700 delay-300",
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        )}>
          <span className="relative">
            Full-Stack Web-Slinger
            <span className={cn(
              "absolute -bottom-1 left-0 w-full h-0.5 bg-primary scale-x-0",
              "transition-transform duration-700 delay-1000",
              loaded ? "scale-x-100" : ""
            )}></span>
          </span>
        </p>
        
        {/* Spider thread with enhanced animation */}
        <div className="relative h-16 w-[2px] mx-auto bg-foreground/30 mb-8 overflow-visible">
          <div className={cn(
            "absolute -bottom-3 -left-[10px] animate-bounce-small",
            "transition-all duration-700 delay-500",
            loaded ? "opacity-100" : "opacity-0",
          )}>
            <div className="relative">
              {/* Spider */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="filter drop-shadow-lg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" className="animate-pulse-glow" />
                <path 
                  d="M8 9L12 16L16 9M7 12H17" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="animate-web-swing"
                />
              </svg>
              
              {/* Radial glow effect */}
              {loaded && (
                <div className="absolute inset-0 -z-10 bg-primary/20 rounded-full blur-md animate-pulse"></div>
              )}
            </div>
          </div>
        </div>
        
        {/* CTAs with enhanced effects */}
        <div className={cn(
          "flex flex-col sm:flex-row items-center justify-center gap-4",
          "transition-all duration-700 delay-700",
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        )}>
          <a 
            href="#projects"
            className={cn(
              "bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-medium",
              "transition-all duration-300 transform hover:scale-105 hover:shadow-lg boom-effect",
              "relative group overflow-hidden"
            )}
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore My Work
              <Sparkles className="w-4 h-4 animate-pulse" />
            </span>
          </a>
          <a 
            href="#skills" 
            className={cn(
              "bg-secondary text-secondary-foreground hover:bg-secondary/90 px-6 py-3 rounded-lg font-medium",
              "transition-all duration-300 transform hover:scale-105 hover:shadow-lg boom-effect",
              "relative group overflow-hidden"
            )}
          >
            <span className="relative z-10">View Skills</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
