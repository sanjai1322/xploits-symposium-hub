import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleRegisterClick = () => {
    window.open('https://forms.gle/M2zhZTj9mCv9ZReo6', '_blank');
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background shadow-lg" : "bg-background/30 backdrop-blur-md"
      }`}
    >
      <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <nav className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src="/img uploads/e7be3152-f7d6-4327-8a4b-7767aeebf22e.png" 
              alt="Xploits Logo" 
              className="w-8 h-8 md:w-10 md:h-10 object-contain"
            />
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              XPLOITS
            </span>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-primary transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Events"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-white hover:text-primary transition-colors group font-medium"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
            <button 
              onClick={handleRegisterClick}
              className="px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full relative group overflow-hidden hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10">Register Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden mt-4 p-4 space-y-4 bg-background/95 backdrop-blur-md rounded-lg animate-fade-in absolute left-4 right-4 top-full border border-primary/20">
            {["Home", "About", "Events"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-white hover:text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <button 
              onClick={handleRegisterClick}
              className="w-full px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full relative group overflow-hidden"
            >
              <span className="relative z-10">Register Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;