
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
    icon: `<img src="src/icons/html.svg" alt="HTML" class="w-full h-full dark:filter dark:invert dark:brightness-100 dark:sepia-0 dark:hue-rotate-[0deg] dark:[filter:brightness(0)_saturate(100%)_invert(17%)_sepia(100%)_saturate(7466%)_hue-rotate(357deg)_brightness(119%)_contrast(124%)]" />`,
  },
  {
    id: 2,
    name: "CSS",
    icon: `<img src="src/icons/css.svg" alt="CSS" class="w-full h-full dark:filter dark:invert dark:brightness-100 dark:sepia-0 dark:hue-rotate-[0deg] dark:[filter:brightness(0)_saturate(100%)_invert(17%)_sepia(100%)_saturate(7466%)_hue-rotate(357deg)_brightness(119%)_contrast(124%)]" />`,
  },
  {
    id: 3,
    name: "JavaScript",
    icon: `<img src="src/icons/js.svg" alt="JavaScript" class="w-full h-full dark:filter dark:invert dark:brightness-100 dark:sepia-0 dark:hue-rotate-[0deg] dark:[filter:brightness(0)_saturate(100%)_invert(17%)_sepia(100%)_saturate(7466%)_hue-rotate(357deg)_brightness(119%)_contrast(124%)]" />`,
  },
  {
    id: 4,
    name: "React",
    icon: `<img src="src/icons/react.svg" alt="React" class="w-full h-full dark:filter dark:invert dark:brightness-100 dark:sepia-0 dark:hue-rotate-[0deg] dark:[filter:brightness(0)_saturate(100%)_invert(17%)_sepia(100%)_saturate(7466%)_hue-rotate(357deg)_brightness(119%)_contrast(124%)]" />`,
  },
  {
    id: 5,
    name: "SQL",
    icon: `<img src="src/icons/sql.svg" alt="SQL" class="w-full h-full dark:filter dark:invert dark:brightness-100 dark:sepia-0 dark:hue-rotate-[0deg] dark:[filter:brightness(0)_saturate(100%)_invert(17%)_sepia(100%)_saturate(7466%)_hue-rotate(357deg)_brightness(119%)_contrast(124%)]" />`,
  },
  {
    id: 6,
    name: "TypeScript",
    icon: `<img src="src/icons/typescript.svg" alt="TypeScript" class="w-full h-full dark:filter dark:invert dark:brightness-100 dark:sepia-0 dark:hue-rotate-[0deg] dark:[filter:brightness(0)_saturate(100%)_invert(17%)_sepia(100%)_saturate(7466%)_hue-rotate(357deg)_brightness(119%)_contrast(124%)]" />`,
  },
  {
    id: 7,
    name: "Next.js",
    icon: `<img src="src/icons/nextjs.svg" alt="Next.js" class="w-full h-full dark:filter dark:invert dark:brightness-100 dark:sepia-0 dark:hue-rotate-[0deg] dark:[filter:brightness(0)_saturate(100%)_invert(17%)_sepia(100%)_saturate(7466%)_hue-rotate(357deg)_brightness(119%)_contrast(124%)]" />`,
  },
  {
    id: 8,
    name: "Tailwind CSS",
    icon: `<img src="src/icons/tailwind.svg" alt="Tailwind CSS" class="w-full h-full dark:filter dark:invert dark:brightness-100 dark:sepia-0 dark:hue-rotate-[0deg] dark:[filter:brightness(0)_saturate(100%)_invert(17%)_sepia(100%)_saturate(7466%)_hue-rotate(357deg)_brightness(119%)_contrast(124%)]" />`,
  },
  {
    id: 9,
    name: "Python",
    icon: `<img src="src/icons/python.svg" alt="Python" class="w-full h-full dark:filter dark:invert dark:brightness-100 dark:sepia-0 dark:hue-rotate-[0deg] dark:[filter:brightness(0)_saturate(100%)_invert(17%)_sepia(100%)_saturate(7466%)_hue-rotate(357deg)_brightness(119%)_contrast(124%)]" />`,
  },
  {
    id: 10,
    name: "Docker",
    icon: `<img src="src/icons/docker.svg" alt="Docker" class="w-full h-full dark:filter dark:invert dark:brightness-100 dark:sepia-0 dark:hue-rotate-[0deg] dark:[filter:brightness(0)_saturate(100%)_invert(17%)_sepia(100%)_saturate(7466%)_hue-rotate(357deg)_brightness(119%)_contrast(124%)]" />`,
  },
  {
    id: 11,
    name: "Kubernetes",
    icon: `<img src="src/icons/kubernetes.svg" alt="Kubernetes" class="w-full h-full dark:filter dark:invert dark:brightness-100 dark:sepia-0 dark:hue-rotate-[0deg] dark:[filter:brightness(0)_saturate(100%)_invert(17%)_sepia(100%)_saturate(7466%)_hue-rotate(357deg)_brightness(119%)_contrast(124%)]" />`,
  },
  {
    id: 12,
    name: "PostgreSQL",
    icon: `<img src="src/icons/postgres.svg" alt="PostgreSQL" class="w-full h-full dark:filter dark:invert dark:brightness-100 dark:sepia-0 dark:hue-rotate-[0deg] dark:[filter:brightness(0)_saturate(100%)_invert(17%)_sepia(100%)_saturate(7466%)_hue-rotate(357deg)_brightness(119%)_contrast(124%)]" />`,
  },
  {
    id: 13,
    name: "MongoDB",
    icon: `<img src="src/icons/mongodb.svg" alt="MongoDB" class="w-full h-full dark:filter dark:invert dark:brightness-100 dark:sepia-0 dark:hue-rotate-[0deg] dark:[filter:brightness(0)_saturate(100%)_invert(17%)_sepia(100%)_saturate(7466%)_hue-rotate(357deg)_brightness(119%)_contrast(124%)]" />`,
  },
  {
    id: 14,
    name: "Firebase",
    icon: `<img src="src/icons/firebase.svg" alt="Firebase" class="w-full h-full dark:filter dark:invert dark:brightness-100 dark:sepia-0 dark:hue-rotate-[0deg] dark:[filter:brightness(0)_saturate(100%)_invert(17%)_sepia(100%)_saturate(7466%)_hue-rotate(357deg)_brightness(119%)_contrast(124%)]" />`,
  },
  {
    id: 15,
    name: "AWS",
    icon: `<img src="src/icons/aws.svg" alt="AWS" class="w-full h-full dark:filter dark:invert dark:brightness-100 dark:sepia-0 dark:hue-rotate-[0deg] dark:[filter:brightness(0)_saturate(100%)_invert(17%)_sepia(100%)_saturate(7466%)_hue-rotate(357deg)_brightness(119%)_contrast(124%)]" />`,
  },
  {
    id: 16,
    name: "GitHub",
    icon: `<img src="src/icons/github.svg" alt="GitHub" class="w-full h-full dark:filter dark:invert dark:brightness-100 dark:sepia-0 dark:hue-rotate-[0deg] dark:[filter:brightness(0)_saturate(100%)_invert(17%)_sepia(100%)_saturate(7466%)_hue-rotate(357deg)_brightness(119%)_contrast(124%)]" />`,
  },
  {
    id: 17,
    name: "Figma",
    icon: `<img src="src/icons/figma.svg" alt="Figma" class="w-full h-full dark:filter dark:invert dark:brightness-100 dark:sepia-0 dark:hue-rotate-[0deg] dark:[filter:brightness(0)_saturate(100%)_invert(17%)_sepia(100%)_saturate(7466%)_hue-rotate(357deg)_brightness(119%)_contrast(124%)]" />`,
  },
  {
    id: 18,
    name: "Canva",
    icon: `<img src="src/icons/canva.svg" alt="Canva" class="w-full h-full dark:filter dark:invert dark:brightness-100 dark:sepia-0 dark:hue-rotate-[0deg] dark:[filter:brightness(0)_saturate(100%)_invert(17%)_sepia(100%)_saturate(7466%)_hue-rotate(357deg)_brightness(119%)_contrast(124%)]" />`,
  },
  {
    id: 19,
    name: "Postman",
    icon: `<img src="src/icons/postman.svg" alt="Postman" class="w-full h-full dark:filter dark:invert dark:brightness-100 dark:sepia-0 dark:hue-rotate-[0deg] dark:[filter:brightness(0)_saturate(100%)_invert(17%)_sepia(100%)_saturate(7466%)_hue-rotate(357deg)_brightness(119%)_contrast(124%)]" />`,
  },
  {
    id: 20,
    name: "Kali Linux",
    icon: `<img src="src/icons/kali.svg" alt="Kali Linux" class="w-full h-full dark:filter dark:invert dark:brightness-100 dark:sepia-0 dark:hue-rotate-[0deg] dark:[filter:brightness(0)_saturate(100%)_invert(17%)_sepia(100%)_saturate(7466%)_hue-rotate(357deg)_brightness(119%)_contrast(124%)]" />`,
  },
];

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  
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
      className="py-20 px-6 relative web-bg dark:venom-bg"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className={cn(
          "text-center font-bangers text-4xl mb-16",
          "transition-all duration-700",
          isVisible ? "opacity-100" : "opacity-0",
        )}>
          <span className="relative inline-block">
            Powers & Gadgets
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary transform scale-x-0 origin-left transition-transform duration-500 delay-300" 
              style={{ transform: isVisible ? 'scaleX(1)' : 'scaleX(0)' }}></span>
          </span>
        </h2>
        
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={skill.id}
              className={cn(
                "flex flex-col items-center",
                "transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                { "delay-100": index % 5 === 0 },
                { "delay-200": index % 5 === 1 },
                { "delay-300": index % 5 === 2 },
                { "delay-400": index % 5 === 3 },
                { "delay-500": index % 5 === 4 },
              )}
            >
              <div 
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center p-2 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                dangerouslySetInnerHTML={{ __html: skill.icon }}
              />
              <span className="mt-2 text-xs sm:text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
