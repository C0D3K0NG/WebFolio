
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="py-20 px-6 relative web-bg dark:venom-bg"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className={cn(
          "text-center font-bangers text-4xl mb-16",
          "transition-all duration-700",
          isVisible ? "opacity-100" : "opacity-0",
        )}>
          <span className="relative inline-block">
            Origin Story
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary transform scale-x-0 origin-left transition-transform duration-500 delay-300" 
              style={{ transform: isVisible ? 'scaleX(1)' : 'scaleX(0)' }}></span>
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className={cn(
            "relative flex justify-center",
            "transition-all duration-700 delay-300",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10",
          )}>
            <div 
              className={cn(
                "w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4",
                "transition-all duration-500",
                "relative comic-panel",
                hovering ? "border-primary shadow-[0_0_15px_rgb(var(--primary)_/_0.7)]" : "border-primary"
              )}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              <img 
                src="/placeholder.svg" 
                alt="Developer portrait" 
                className={cn(
                  "w-full h-full object-cover transition-all duration-700",
                  hovering ? "scale-110" : "scale-100"
                )}
              />
              {/* Comic-style effect overlay */}
              <div className={cn(
                "absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/30",
                "opacity-0 transition-opacity duration-500",
                hovering ? "opacity-100" : ""
              )}></div>
              
              {/* Dot pattern overlay (for comic feel) */}
              <div className={cn(
                "absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none",
                "bg-[radial-gradient(circle,_rgba(0,0,0,0.1)_1px,_transparent_1px)]",
                "bg-[length:8px_8px]",
                hovering ? "opacity-40" : ""
              )}></div>
            </div>
            
            {/* Decorative elements */}
            <div className={cn(
              "absolute -bottom-5 -right-5 w-20 h-20 rounded-full border-2 border-secondary opacity-0",
              "transition-all duration-700 delay-700",
              isVisible ? "opacity-20 translate-x-0" : "translate-x-10"
            )}></div>
            <div className={cn(
              "absolute -top-5 -left-5 w-14 h-14 rounded-full border-2 border-primary opacity-0",
              "transition-all duration-700 delay-900",
              isVisible ? "opacity-20 translate-x-0" : "-translate-x-10"
            )}></div>
          </div>
          
          <div className={cn(
            "bg-card p-8 rounded-lg shadow-lg overflow-hidden",
            "transition-all duration-700 delay-500",
            "marvel-card relative",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10",
            "dark:grunge-bg",
          )}>
            {/* Comic-style border */}
            <div className="absolute inset-0 border-2 border-dashed border-foreground/10 pointer-events-none m-2 rounded-lg"></div>
            
            <h3 className="font-orbitron text-xl mb-4 relative">
              <span className="relative z-10 inline-block">Hello there!</span>
              <span className={cn(
                "absolute bottom-0 left-0 h-1 bg-primary",
                "transition-all duration-700 delay-1000 w-0",
                isVisible ? "w-32" : ""
              )}></span>
            </h3>
            
            <p className={cn(
              "mb-4",
              "relative z-10 transition-all duration-700 delay-1000",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            )}>
              Just like Peter Parker discovered his powers after being bitten by a radioactive spider, 
              I discovered my passion for web development when I first created a simple HTML page that 
              actually worked!
            </p>
            
            <p className={cn(
              "mb-4",
              "relative z-10 transition-all duration-700 delay-1200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            )}>
              Since then, I've been swinging through the digital landscape, crafting websites and web 
              applications that combine functionality with stunning design. I specialize in React, 
              TypeScript, and modern web development practices.
            </p>
            
            <p className={cn(
              "relative z-10 transition-all duration-700 delay-1400",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            )}>
              Whether I'm building complex web applications or simple landing pages, I bring the same 
              level of dedication to every project—because with great coding power comes great responsibility.
            </p>
            
            {/* Comic-style accent elements */}
            <div className={cn(
              "absolute -bottom-4 -right-4 w-16 h-16 rounded-full border-4 border-primary/30 opacity-0",
              "transition-all duration-1000 delay-1500",
              isVisible ? "opacity-100" : ""
            )}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
