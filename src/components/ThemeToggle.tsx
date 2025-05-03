
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  
  useEffect(() => {
    // Check for user preference on initial load
    const isDarkMode = document.documentElement.classList.contains('dark');
    setDarkMode(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative w-16 h-8 rounded-full p-1 transition-colors duration-300",
        darkMode ? "bg-venom-red" : "bg-spidey-red"
      )}
      aria-label={darkMode ? "Switch to Spidey Mode" : "Switch to Venom Mode"}
    >
      <span className="sr-only">{darkMode ? "Switch to Spidey Mode" : "Switch to Venom Mode"}</span>
      <div
        className={cn(
          "flex items-center justify-center w-6 h-6 rounded-full transition-transform duration-300 bg-white",
          darkMode ? "translate-x-8" : "translate-x-0"
        )}
      >
        {darkMode ? (
          // Venom symbol (simple eyes shape)
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 4L4 7L6 4M6 4L8 7L10 4" stroke="#1B1B1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : (
          // Spider symbol (simplified)
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="6" cy="6" r="5" stroke="#E62429" strokeWidth="2"/>
            <line x1="6" y1="2" x2="6" y2="10" stroke="#E62429" strokeWidth="2"/>
            <line x1="2" y1="6" x2="10" y2="6" stroke="#E62429" strokeWidth="2"/>
          </svg>
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
