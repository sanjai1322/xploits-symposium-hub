import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-background/80 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">
            XPLOITS
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-primary transition-colors">Home</a>
            <a href="#about" className="text-white hover:text-primary transition-colors">About</a>
            <a href="#events" className="text-white hover:text-primary transition-colors">Events</a>
            <button className="px-6 py-2 bg-primary text-white rounded-full hover:bg-opacity-90 transition-all animate-glow">
              Register Now
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#home" className="block text-white hover:text-primary transition-colors">Home</a>
            <a href="#about" className="block text-white hover:text-primary transition-colors">About</a>
            <a href="#events" className="block text-white hover:text-primary transition-colors">Events</a>
            <button className="w-full px-6 py-2 bg-primary text-white rounded-full hover:bg-opacity-90 transition-all">
              Register Now
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;