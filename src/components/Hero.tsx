import { useEffect, useRef } from "react";
import Timer from "./Timer";
import { Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);

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

    return () => observer.disconnect();
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="home" 
      className="min-h-screen relative overflow-hidden smooth-scroll-section"
      style={{
        backgroundImage: "url('/lovable-uploads/c2e8bfa3-d560-4120-af73-9f0cf5ebf157.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px]">
        <div className="absolute inset-0 opacity-30">
          {Array.from({ length: 50 }).map((_, i) => (
            <Sparkles
              key={i}
              className="absolute text-primary/20 animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 10 + 5}s`,
                transform: `scale(${Math.random() * 0.5 + 0.5})`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center min-h-screen text-center">
        <div className="mb-12 mt-20">
          <img 
            src="/lovable-uploads/e7be3152-f7d6-4327-8a4b-7767aeebf22e.png" 
            alt="Xploits Logo" 
            className="w-48 h-48 object-contain animate-float"
          />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent animate-fade">
          XPLOITS 2025
        </h1>
        
        <Timer />
        
        <p className="text-xl md:text-2xl text-gray-300 mt-12 max-w-2xl mx-auto animate-fade">
          Unleash Your Technical Prowess at the Most Anticipated Tech Symposium
        </p>
        
        <div className="mt-12 space-y-6">
          <Button
            className="px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white rounded-full text-lg font-semibold relative group overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            onClick={() => window.open('#register', '_blank')}
          >
            Register Now
          </Button>
          
          <div 
            onClick={scrollToAbout}
            className="cursor-pointer animate-bounce mt-12 flex flex-col items-center text-gray-400 hover:text-white transition-colors duration-300"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;