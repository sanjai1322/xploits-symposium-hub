import { Trophy, Star, Award, Code, FileText } from "lucide-react";
import { useEffect, useRef } from "react";
import { Button } from "./ui/button";

const events = [
  {
    title: "Code Combat",
    icon: <Trophy className="text-primary" size={32} />,
    description: "Battle it out in our intense coding competition. Solve complex problems and showcase your programming prowess.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  },
  {
    title: "Tech Quiz",
    icon: <Star className="text-primary" size={32} />,
    description: "Test your technical knowledge across various domains in this fast-paced quiz competition.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },
  {
    title: "Project Expo",
    icon: <Award className="text-primary" size={32} />,
    description: "Present your innovative projects and get feedback from industry experts.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
  },
  {
    title: "Hackathon",
    icon: <Code className="text-primary" size={32} />,
    description: "24-hour coding marathon to build solutions for real-world problems.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },
  {
    title: "Paper Presentation",
    icon: <FileText className="text-primary" size={32} />,
    description: "Present your research papers and showcase your technical writing skills.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
  }
];

const Events = () => {
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
      id="events" 
      className="py-20 relative overflow-hidden smooth-scroll-section"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Events
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-black/30 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all duration-500"
            >
              <div className="absolute inset-0">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              
              <div className="relative p-6 flex flex-col h-full min-h-[320px]">
                <div className="flex-1">
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {event.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors">
                    {event.description}
                  </p>
                </div>
                
                <Button
                  className="mt-6 w-full bg-white/10 hover:bg-primary/20 border border-white/20 hover:border-primary transition-all duration-300"
                  onClick={() => window.open(`#${event.title.toLowerCase().replace(' ', '-')}`, '_self')}
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;