
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
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
      className="py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className={cn(
          "text-center font-bangers text-4xl mb-16",
          "transition-all duration-700",
          isVisible ? "opacity-100" : "opacity-0",
        )}>
          Origin Story
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className={cn(
            "relative flex justify-center",
            "transition-all duration-700 delay-300",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10",
          )}>
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
              <img 
                src="/placeholder.svg" 
                alt="Developer portrait" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-secondary opacity-20"></div>
          </div>
          
          <div className={cn(
            "bg-card p-8 rounded-lg shadow-lg",
            "transition-all duration-700 delay-500",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10",
            "dark:grunge-bg",
          )}>
            <h3 className="font-orbitron text-xl mb-4">Hello there!</h3>
            <p className="mb-4">
              Just like Peter Parker discovered his powers after being bitten by a radioactive spider, 
              I discovered my passion for web development when I first created a simple HTML page that 
              actually worked!
            </p>
            <p className="mb-4">
              Since then, I've been swinging through the digital landscape, crafting websites and web 
              applications that combine functionality with stunning design. I specialize in React, 
              TypeScript, and modern web development practices.
            </p>
            <p>
              Whether I'm building complex web applications or simple landing pages, I bring the same 
              level of dedication to every project—because with great coding power comes great responsibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
