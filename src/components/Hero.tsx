import { useEffect, useRef } from "react";
import Timer from "./Timer";
import { Sparkles } from "lucide-react";

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

  return (
    <section 
      ref={sectionRef}
      id="home" 
      className="min-h-screen pt-20 relative overflow-hidden smooth-scroll-section bg-gradient-to-br from-background via-background/95 to-background/90"
    >
      <div className="absolute inset-0">
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
        <div className="mb-12 mt-[-80px]">
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
        
        <button className="mt-12 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full text-lg font-semibold relative group overflow-hidden hover:scale-105 transition-all duration-300">
          <span className="relative z-10">Register Now</span>
          <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      </div>
    </section>
  );
};

export default Hero;