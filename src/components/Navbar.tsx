
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
import { Sparkles, ChevronRight } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoverItem, setHoverItem] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (navRef.current) {
      const rect = navRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMousePosition({ x, y });
    }
  };
  
  const navItems = [
    { name: "Origin Story", href: "#about" },
    { name: "Missions", href: "#projects" },
    { name: "Powers & Gadgets", href: "#skills" },
    { name: "Spider-Signal", href: "#contact" },
  ];
  
  return (
    <nav
      ref={navRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-6 py-4",
        scrolled 
          ? "bg-background/80 backdrop-blur-lg shadow-md dark:bg-background/95" 
          : "bg-background/50 backdrop-blur-sm shadow-sm", 
        "after:absolute after:inset-0 after:bg-grunge-texture after:opacity-10 after:pointer-events-none after:z-[-1]"
      )}
    >
      {/* Animated gradient line at top */}
      <div className="absolute top-0 left-0 w-full h-[2px] overflow-hidden">
        <div className="h-full w-[200%] bg-gradient-to-r from-primary/80 via-secondary/50 to-primary/80 animate-scroll-x"></div>
      </div>
      
      {/* Spotlight effect */}
      <div 
        className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-0 transition-opacity duration-300 pointer-events-none z-[-1]"
        style={{ 
          opacity: scrolled ? 0 : 0.5,
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(var(--primary), 0.15), transparent 70%)`,
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a 
            href="#" 
            className="font-bangers text-2xl group relative"
          >
            <span className="text-primary transition-all duration-300 group-hover:text-foreground">RAJDEEP</span>
            <span className="transition-all duration-300 group-hover:text-primary"> SAHA</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className="text-sm font-medium relative px-1 py-1 group"
              onMouseEnter={() => setHoverItem(item.name)}
              onMouseLeave={() => setHoverItem(null)}
            >
              <div className="flex items-center">
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-[-2px]">{item.name}</span>
                <ChevronRight className={cn(
                  "w-0 h-4 opacity-0 transition-all duration-300 transform",
                  hoverItem === item.name ? "w-5 opacity-100 translate-x-0" : "-translate-x-2"
                )} />
              </div>
              {hoverItem === item.name ? (
                <span className="absolute inset-0 bg-primary/10 dark:bg-primary/20 rounded-md animate-scale-in"></span>
              ) : (
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              )}
            </a>
          ))}
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="hidden md:block">
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-md transition-all hover:scale-105 hover:shadow-lg hover:bg-primary/90 relative overflow-hidden group"
            >
              <span className="relative z-10">Get in touch</span>
              <Sparkles className="w-4 h-4 relative z-10" />
              
              {/* Button shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
                <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-45 animate-shimmer-slow"></div>
              </div>
            </a>
          </div>
          
          <ThemeToggle />
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center relative overflow-hidden group"
            aria-label="Toggle menu"
          >
            <div className="relative z-10">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="feather feather-menu transition-all duration-300"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </div>
            <span className="absolute inset-0 scale-0 group-hover:scale-100 origin-center bg-primary/10 dark:bg-primary/20 rounded-full transition-all duration-300"></span>
          </button>
        </div>
      </div>
      
      {/* Mobile menu with improved animations */}
      <div 
        className={cn(
          "fixed inset-0 z-50 bg-background/95 backdrop-blur-lg md:hidden transition-all duration-500 flex flex-col items-center justify-center",
          mobileMenuOpen 
            ? "opacity-100 pointer-events-auto clip-path-circle-full" 
            : "opacity-0 pointer-events-none clip-path-circle-small"
        )}
      >
        <div className="absolute inset-0 bg-grunge-texture opacity-20 pointer-events-none"></div>
        
        {/* Comic-style burst effect */}
        <div className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
          "w-[200vmax] h-[200vmax] rounded-full",
          "bg-gradient-to-r from-transparent via-primary/5 to-transparent",
          "transition-transform duration-1000",
          mobileMenuOpen ? "scale-100" : "scale-0"
        )}></div>
        
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-6 right-6 hover:rotate-90 transition-all duration-300 z-10"
          aria-label="Close menu"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <div className="flex flex-col items-center space-y-6 relative z-10">
          {navItems.map((item, index) => (
            <a 
              key={item.name}
              href={item.href}
              className={cn(
                "text-xl font-medium transition-all duration-300",
                "relative overflow-hidden px-4 py-1 group",
                mobileMenuOpen ? "animate-fade-in translate-y-0 opacity-100" : "opacity-0 translate-y-8",
                { "transition-delay-100": index === 0 },
                { "transition-delay-200": index === 1 },
                { "transition-delay-300": index === 2 },
                { "transition-delay-400": index === 3 }
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="relative z-10 group-hover:text-primary">{item.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
