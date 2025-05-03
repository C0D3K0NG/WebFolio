
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

interface IntroOverlayProps {
  onComplete: () => void;
}

const IntroOverlay = ({ onComplete }: IntroOverlayProps) => {
  const [phase, setPhase] = useState<'quote' | 'logo' | 'complete'>('quote');
  const [skipped, setSkipped] = useState(false);

  useEffect(() => {
    if (skipped) {
      onComplete();
      return;
    }

    const quoteTimer = setTimeout(() => {
      setPhase('logo');
      
      const logoTimer = setTimeout(() => {
        setPhase('complete');
        onComplete();
      }, 2000);
      
      return () => clearTimeout(logoTimer);
    }, 3000);
    
    return () => clearTimeout(quoteTimer);
  }, [onComplete, skipped]);

  const handleSkip = () => {
    setSkipped(true);
  };

  if (phase === 'complete') return null;

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <button 
        onClick={handleSkip} 
        className="absolute top-4 right-4 text-white/50 text-sm hover:text-white z-10"
      >
        Skip Intro
      </button>
      
      {phase === 'quote' && (
        <div className={cn(
          "text-center px-8 animate-fade-in",
        )}>
          <p className="text-white/90 text-xl md:text-3xl font-serif italic">
            "With great power comes great responsibility..."
          </p>
        </div>
      )}
      
      {phase === 'logo' && (
        <div className="animate-fade-in">
          <svg 
            className="w-20 h-20 md:w-32 md:h-32" 
            viewBox="0 0 100 100" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M50 10C27.909 10 10 27.909 10 50C10 72.091 27.909 90 50 90C72.091 90 90 72.091 90 50C90 27.909 72.091 10 50 10Z" 
              fill="none" 
              stroke="#E62429" 
              strokeWidth="2" 
            />
            <path 
              d="M50 20C33.431 20 20 33.431 20 50C20 66.569 33.431 80 50 80C66.569 80 80 66.569 80 50C80 33.431 66.569 20 50 20Z" 
              fill="#E62429" 
            />
            <path 
              d="M35 37L50 65L65 37M30 50H70" 
              stroke="white" 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default IntroOverlay;
