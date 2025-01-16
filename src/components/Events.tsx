import { Trophy, Star, Award, Code, FileText } from "lucide-react";
import { useEffect, useRef } from "react";

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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-video transition-all duration-500 transform-gpu group-hover:scale-105">
                <div className="absolute inset-0 backdrop-blur-lg bg-black/40 rounded-2xl overflow-hidden border border-primary/20">
                  <div className="relative h-1/2">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-center mb-4">
                      <div className="transform group-hover:scale-110 transition-transform duration-300">
                        {event.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-primary group-hover:text-secondary transition-colors mb-3">
                      {event.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;