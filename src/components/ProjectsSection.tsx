
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  demoUrl: string;
  repoUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured online store with cart, checkout, and payment integration.",
    image: "/placeholder.svg",
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A drag-and-drop kanban board for organizing tasks and projects.",
    image: "/placeholder.svg",
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Real-time weather data visualization with forecasts and historical data.",
    image: "/placeholder.svg",
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    id: 4,
    title: "Social Media Clone",
    description: "A social networking platform with profiles, posts, and messaging.",
    image: "/placeholder.svg",
    demoUrl: "#",
    repoUrl: "#",
  },
];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  
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
      id="projects" 
      ref={sectionRef} 
      className="py-20 px-6 bg-muted/40 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-web-pattern opacity-5 dark:opacity-10"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className={cn(
          "text-center font-bangers text-4xl mb-16",
          "transition-all duration-700 transform",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10",
        )}>
          <span className="relative inline-block">
            Missions
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary transform scale-x-0 origin-left transition-transform duration-500 delay-300" 
              style={{ transform: isVisible ? 'scaleX(1)' : 'scaleX(0)' }}></span>
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={cn(
                "marvel-card bg-card overflow-hidden rounded-lg shadow-lg border border-border",
                "transition-all duration-700 transform",
                "dark:border-white/10",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                { "delay-300": index === 0 || index === 1 },
                { "delay-500": index === 2 || index === 3 },
              )}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div 
                className={cn(
                  "h-48 overflow-hidden relative",
                  activeProject === project.id ? "h-56 transition-all duration-500" : "transition-all duration-500",
                )}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className={cn(
                    "w-full h-full object-cover transition-transform duration-700",
                    activeProject === project.id ? "scale-110" : "scale-100"
                  )}
                />
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-500",
                  activeProject === project.id ? "opacity-100" : ""
                )}></div>
              </div>
              <div className={cn(
                "p-6",
                activeProject === project.id && "bg-gradient-shimmer"
              )}>
                <h3 className="font-orbitron text-xl mb-2 relative">
                  {project.title}
                  <span className={cn(
                    "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-500",
                    activeProject === project.id ? "w-full" : ""
                  )}></span>
                </h3>
                <p className="text-muted-foreground mb-6">{project.description}</p>
                <div className="flex justify-between">
                  <a 
                    href={project.demoUrl} 
                    className="text-primary hover:underline font-medium group flex items-center boom-effect"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <span className="relative z-10">Live Demo</span>
                    <span className="ml-1 transform translate-x-0 transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </a>
                  <a 
                    href={project.repoUrl} 
                    className="text-secondary hover:underline font-medium group flex items-center boom-effect"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <span className="relative z-10">View Code</span>
                    <span className="ml-1 transform translate-y-0 transition-transform duration-300 group-hover:translate-y-[-2px] group-hover:translate-x-1">↗</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
