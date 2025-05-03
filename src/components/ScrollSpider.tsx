
import { useState, useEffect } from "react";

const ScrollSpider = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [documentHeight, setDocumentHeight] = useState(0);
  
  useEffect(() => {
    const updatePosition = () => {
      const newPosition = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      setScrollPosition(newPosition);
      setDocumentHeight(height);
    };
    
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);
  
  const calculatePosition = () => {
    const scrollPercentage = scrollPosition / documentHeight;
    const position = 20 + (scrollPercentage * 60); // 20% to 80% of viewport height
    return `${position}vh`;
  };
  
  return (
    <div 
      className="fixed right-6 z-30 transition-all duration-200 opacity-60 hover:opacity-100" 
      style={{ top: calculatePosition() }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
        <path 
          d="M8 9L12 16L16 9M7 12H17" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default ScrollSpider;
