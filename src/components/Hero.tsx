import { Flame } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen hero-gradient flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-float mb-8">
          <Flame size={64} className="mx-auto text-primary" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          XPLOITS 2025
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Unleash Your Technical Prowess at the Most Anticipated Tech Symposium
        </p>
        <button className="px-8 py-3 bg-primary text-white rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all animate-glow">
          Register Now
        </button>
      </div>
    </section>
  );
};

export default Hero;