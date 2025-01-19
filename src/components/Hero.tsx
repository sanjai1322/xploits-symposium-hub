import { useEffect, useRef } from "react";
import Timer from "./Timer";
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

  const handleRegisterClick = () => {
    window.open('https://forms.gle/M2zhZTj9mCv9ZReo6', '_blank');
  };

  return (
    <section 
      ref={sectionRef}
      id="home" 
      className="min-h-screen relative overflow-hidden smooth-scroll-section bg-hero-pattern bg-cover bg-center bg-fixed bg-no-repeat pt-24 md:pt-32"
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-96px)] text-center">
        <div className="mb-12">
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
            onClick={handleRegisterClick}
          >
            Register Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;