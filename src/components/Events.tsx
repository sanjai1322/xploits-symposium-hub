import { Trophy, Star, Award, Code, FileText } from "lucide-react";
import { useEffect, useRef } from "react";

const events = [
  {
    title: "Code Combat",
    icon: <Trophy className="text-primary" size={32} />,
    description: "Battle it out in our intense coding competition. Solve complex problems and showcase your programming prowess."
  },
  {
    title: "Tech Quiz",
    icon: <Star className="text-primary" size={32} />,
    description: "Test your technical knowledge across various domains in this fast-paced quiz competition."
  },
  {
    title: "Project Expo",
    icon: <Award className="text-primary" size={32} />,
    description: "Present your innovative projects and get feedback from industry experts."
  },
  {
    title: "Hackathon",
    icon: <Code className="text-primary" size={32} />,
    description: "24-hour coding marathon to build solutions for real-world problems."
  },
  {
    title: "Paper Presentation",
    icon: <FileText className="text-primary" size={32} />,
    description: "Present your research papers and showcase your technical writing skills."
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
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Events
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="group perspective-1000 animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 transition-transform duration-500 transform-style-3d group-hover:rotate-y-180">
                <div className="absolute inset-0 glass-effect p-8 rounded-2xl backface-hidden">
                  <div className="flex flex-col items-center justify-center h-full">
                    <div className="mb-4 transform group-hover:scale-110 transition-transform">
                      {event.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-primary group-hover:text-secondary transition-colors">
                      {event.title}
                    </h3>
                  </div>
                </div>
                
                <div className="absolute inset-0 glass-effect p-8 rounded-2xl backface-hidden rotate-y-180">
                  <div className="flex items-center justify-center h-full">
                    <p className="text-gray-300 text-center">
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