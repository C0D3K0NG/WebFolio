
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
import { Sparkles } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoverItem, setHoverItem] = useState<string | null>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const navItems = [
    { name: "Origin Story", href: "#about" },
    { name: "Missions", href: "#projects" },
    { name: "Powers & Gadgets", href: "#skills" },
    { name: "Spider-Signal", href: "#contact" },
  ];
  
  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-6 py-4",
        scrolled 
          ? "bg-background/80 backdrop-blur-lg shadow-md" 
          : "bg-background/50 backdrop-blur-sm shadow-sm", // Added background and subtle shadow for better visibility when not scrolled
        "after:absolute after:inset-0 after:bg-grunge-texture after:opacity-10 after:pointer-events-none after:z-[-1]"
      )}
    >
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
              className="text-sm font-medium relative px-1 py-1"
              onMouseEnter={() => setHoverItem(item.name)}
              onMouseLeave={() => setHoverItem(null)}
            >
              <span className="relative z-10">{item.name}</span>
              {hoverItem === item.name && (
                <span className="absolute inset-0 bg-primary/10 dark:bg-primary/20 rounded-md animate-scale-in"></span>
              )}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="hidden md:block">
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-md transition-all hover:scale-105 hover:shadow-lg hover:bg-primary/90"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get in touch</span>
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
      
      {/* Mobile menu */}
      <div 
        className={cn(
          "fixed inset-0 z-50 bg-background/95 backdrop-blur-lg md:hidden transition-all duration-300 flex flex-col items-center justify-center",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="absolute inset-0 bg-grunge-texture opacity-20 pointer-events-none"></div>
        
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-6 right-6 hover:rotate-90 transition-all duration-300"
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
        
        <div className="flex flex-col items-center space-y-6">
          {navItems.map((item, index) => (
            <a 
              key={item.name}
              href={item.href}
              className={cn(
                "text-xl font-medium hover:text-primary transition-colors",
                "relative overflow-hidden px-4 py-1",
                "animate-fade-in", 
                { "delay-100": index === 0 },
                { "delay-200": index === 1 },
                { "delay-300": index === 2 },
                { "delay-400": index === 3 }
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="relative z-10">{item.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
