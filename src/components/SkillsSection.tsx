
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface Skill {
  id: number;
  name: string;
  icon: string;
}

const skills: Skill[] = [
  {
    id: 1,
    name: "HTML",
    icon: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M13 16L18 10L15 6L8 15L13 16Z"/>
        <path d="M2 12L7 4L13 3L17 7L12 20L2 12Z"/>
      </svg>
    `,
  },
  {
    id: 2,
    name: "CSS",
    icon: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 2C14.6522 2 17.1957 3.05357 19.0711 4.92893C20.9464 6.8043 22 9.34783 22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22"/>
      </svg>
    `,
  },
  {
    id: 3,
    name: "JavaScript",
    icon: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"/>
      </svg>
    `,
  },
  {
    id: 4,
    name: "React",
    icon: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <circle cx="19" cy="5" r="2"/>
        <circle cx="5" cy="19" r="2"/>
        <circle cx="5" cy="5" r="2"/>
        <circle cx="19" cy="19" r="2"/>
        <path d="M5 5L19 19M5 19L19 5"/>
      </svg>
    `,
  },
  {
    id: 5,
    name: "Node.js",
    icon: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 22L3 17V7L12 2L21 7V17L12 22Z"/>
        <path d="M12 22L12 11"/>
        <path d="M17 14L7 7"/>
      </svg>
    `,
  },
  {
    id: 6,
    name: "TypeScript",
    icon: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M16 18L22 12L16 6"/>
        <path d="M8 6L2 12L8 18"/>
      </svg>
    `,
  },
  {
    id: 7,
    name: "Next.js",
    icon: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 3L20 3"/>
        <path d="M6 8L18 8"/>
        <path d="M8 12L16 12"/>
        <path d="M10 17L14 17"/>
      </svg>
    `,
  },
  {
    id: 8,
    name: "Tailwind CSS",
    icon: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 4H20V20H4z"/>
        <path d="M9 9C9 7.89543 9.89543 7 11 7H13C14.1046 7 15 7.89543 15 9V15C15 16.1046 14.1046 17 13 17H11C9.89543 17 9 16.1046 9 15z"/>
      </svg>
    `,
  },
];

const SkillsSection = () => {
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
      id="skills" 
      ref={sectionRef} 
      className="py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className={cn(
          "text-center font-bangers text-4xl mb-16",
          "transition-all duration-700",
          isVisible ? "opacity-100" : "opacity-0",
        )}>
          Powers & Gadgets
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={skill.id}
              className={cn(
                "flex flex-col items-center",
                "transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                { "delay-100": index % 4 === 0 },
                { "delay-200": index % 4 === 1 },
                { "delay-300": index % 4 === 2 },
                { "delay-400": index % 4 === 3 },
              )}
            >
              <div className="group relative">
                <div className="w-20 h-20 rounded-full flex items-center justify-center bg-muted border border-border group-hover:border-primary transition-colors duration-300">
                  <div 
                    className="w-10 h-10 text-foreground group-hover:text-primary transition-colors duration-300"
                    dangerouslySetInnerHTML={{ __html: skill.icon }}
                  />
                </div>
                <div className="absolute -inset-0.5 rounded-full opacity-0 group-hover:opacity-20 bg-primary transition-opacity duration-300" />
              </div>
              <p className="mt-4 font-medium text-center">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
