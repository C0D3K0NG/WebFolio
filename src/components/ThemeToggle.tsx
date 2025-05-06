
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
        "relative w-16 h-8 rounded-full p-1 transition-all duration-300 transform hover:scale-105 active:scale-95",
        darkMode ? "bg-venom-red" : "bg-spidey-red"
      )}
      aria-label={darkMode ? "Switch to Spidey Mode" : "Switch to Venom Mode"}
    >
      <span className="sr-only">{darkMode ? "Switch to Spidey Mode" : "Switch to Venom Mode"}</span>
      <div
        className={cn(
          "flex items-center justify-center w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-300 ease-spring",
          darkMode ? "translate-x-8" : "translate-x-0"
        )}
      >
        {darkMode ? (
          // Dark mode icon
          <img 
            src="src/icons/dark-mode.png" 
            alt="Dark Mode" 
            className="w-10 h-10 object-contain"
          />
        ) : (
          // Light mode icon
          <img 
            src="src/icons/light-mode.png" 
            alt="Light Mode" 
            className="w-10 h-10 object-contain"
          />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
