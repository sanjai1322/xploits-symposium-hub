import { Flame } from "lucide-react";
import Timer from "./Timer";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Animated background with gradient and particles effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1F2C] via-[#2A1F3C] to-[#1A1F2C] animate-gradient-x">
        <div className="absolute inset-0 opacity-30">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-primary/20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                animation: `float ${Math.random() * 10 + 5}s linear infinite`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center min-h-screen text-center">
        <div className="animate-float mb-8 relative group">
          <Flame size={84} className="text-primary animate-pulse group-hover:text-secondary transition-colors duration-300" />
          <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-150 animate-pulse" />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient">
          XPLOITS 2025
        </h1>
        
        <Timer />
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto animate-fade-in">
          Unleash Your Technical Prowess at the Most Anticipated Tech Symposium
        </p>
        
        <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full text-lg font-semibold relative group overflow-hidden animate-fade-in hover:scale-105 transition-transform">
          <span className="relative z-10">Register Now</span>
          <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 animate-glow" />
        </button>
      </div>
    </section>
  );
};

export default Hero;