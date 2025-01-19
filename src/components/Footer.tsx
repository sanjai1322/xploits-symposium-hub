import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-background/95 backdrop-blur-sm border-t border-primary/20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4 animate-fade-in">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Contact President
            </h3>
            <div className="space-y-2">
              <a href="tel:+1234567890" className="flex items-center space-x-2 text-gray-400 hover:text-primary transition-colors">
                <Phone size={18} />
                <span>+1 (234) 567-890</span>
              </a>
              <a href="mailto:president@xploits.edu" className="flex items-center space-x-2 text-gray-400 hover:text-primary transition-colors">
                <Mail size={18} />
                <span>president@xploits.edu</span>
              </a>
            </div>
          </div>
          
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Location
            </h3>
            <div className="flex items-start space-x-2 text-gray-400">
              <MapPin size={18} className="mt-1 flex-shrink-0" />
              <p>SRM Valliammai Engineering College, Kattankulathur, Chennai</p>
            </div>
          </div>
          
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.268102623864!2d80.03873787507392!3d12.82594418747622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f70d79722631%3A0x49afcd4648f94894!2sSRM%20Valliammai%20Engineering%20College!5e0!3m2!1sen!2sin!4v1737311088553!5m2!1sen!2sin"
              className="w-full h-48 rounded-lg border border-primary/20"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </div>
      
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30 hover:border-primary/50 transition-all duration-300 animate-fade-in group"
        >
          <ArrowUp className="text-primary group-hover:scale-110 transition-transform" />
        </button>
      )}
    </footer>
  );
};

export default Footer;