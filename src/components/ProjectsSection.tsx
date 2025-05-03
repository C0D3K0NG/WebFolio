
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
      className="py-20 px-6 bg-muted/40"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className={cn(
          "text-center font-bangers text-4xl mb-16",
          "transition-all duration-700",
          isVisible ? "opacity-100" : "opacity-0",
        )}>
          Missions
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={cn(
                "bg-card overflow-hidden rounded-lg shadow-lg border border-border",
                "transition-all duration-700",
                "transform hover:-translate-y-2 hover:shadow-xl",
                "dark:grunge-bg",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                { "delay-300": index === 0 || index === 1 },
                { "delay-500": index === 2 || index === 3 },
              )}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-orbitron text-xl mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-6">{project.description}</p>
                <div className="flex justify-between">
                  <a 
                    href={project.demoUrl} 
                    className="text-primary hover:underline font-medium"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.repoUrl} 
                    className="text-secondary hover:underline font-medium"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    View Code
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
