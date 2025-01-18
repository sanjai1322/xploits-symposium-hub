import { useEffect, useRef, useState } from "react";
import Timer from "./Timer";
import { Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    let scrollTimeout: number;
    let lastScrollTime = Date.now();
    const scrollThreshold = 50;

    const handleScroll = () => {
      const currentTime = Date.now();
      if (currentTime - lastScrollTime < scrollThreshold) {
        return;
      }
      
      lastScrollTime = currentTime;
      if (!isScrolling) {
        setIsScrolling(true);
      }

      if (scrollTimeout) {
        cancelAnimationFrame(scrollTimeout);
      }

      scrollTimeout = requestAnimationFrame(() => {
        const aboutSection = document.getElementById('about');
        if (!aboutSection) return;

        if (window.scrollY > window.innerHeight / 3) {
          aboutSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
        
        setTimeout(() => {
          setIsScrolling(false);
        }, 150);
      });
    };

    window.addEventListener('wheel', handleScroll, { passive: true });
    window.addEventListener('touchmove', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
      if (scrollTimeout) {
        cancelAnimationFrame(scrollTimeout);
      }
    };
  }, [isScrolling]);

  return (
    <section 
      ref={sectionRef}
      id="home" 
      className="min-h-screen relative overflow-hidden smooth-scroll-section bg-background"
    >
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center min-h-screen text-center">
        <div className="mb-12 mt-20 md:mt-0">
          <img 
            src="/lovable-uploads/e7be3152-f7d6-4327-8a4b-7767aeebf22e.png" 
            alt="Xploits Logo" 
            className="w-32 h-32 md:w-48 md:h-48 object-contain animate-float"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent animate-fade">
          XPLOITS 2025
        </h1>
        
        <Timer />
        
        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mt-12 max-w-2xl mx-auto animate-fade">
          Unleash Your Technical Prowess at the Most Anticipated Tech Symposium
        </p>
        
        <div className="mt-12">
          <Button
            className="px-6 py-4 md:px-8 md:py-6 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white rounded-full text-lg md:text-xl font-semibold relative group overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            onClick={() => window.open('#register', '_blank')}
          >
            Register Now
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-scroll-mouse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;