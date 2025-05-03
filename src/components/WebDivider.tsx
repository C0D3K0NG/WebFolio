
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface WebDividerProps {
  className?: string;
}

const WebDivider = ({ className }: WebDividerProps) => {
  const dividerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100");
        }
      },
      { threshold: 0.5 }
    );

    if (dividerRef.current) {
      observer.observe(dividerRef.current);
    }

    return () => {
      if (dividerRef.current) {
        observer.unobserve(dividerRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={dividerRef} 
      className={cn(
        "web-divider opacity-0 transition-opacity duration-1000",
        className
      )}
    />
  );
};

export default WebDivider;
