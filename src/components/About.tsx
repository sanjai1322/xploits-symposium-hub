import { Building, Code } from "lucide-react";
import { useEffect, useRef } from "react";

const About = () => {
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
    <section id="about" className="py-20 relative overflow-hidden smooth-scroll-section" ref={sectionRef}>
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-gradient">
          About The Symposium
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="group">
            <div className="bg-secondary/10 p-8 rounded-2xl border border-primary/20 group-hover:border-primary/40 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-6">
                <Building className="text-primary mr-4" size={32} />
                <h3 className="text-2xl font-bold text-primary group-hover:text-secondary transition-colors">About College</h3>
              </div>
              <p className="text-gray-300 group-hover:text-white transition-colors">
                Our institution stands as a beacon of technical excellence, fostering innovation and 
                nurturing future tech leaders. With state-of-the-art facilities and expert faculty, 
                we provide the perfect platform for students to excel in their chosen fields.
              </p>
            </div>
          </div>
          
          <div className="group">
            <div className="bg-primary/10 p-8 rounded-2xl border border-secondary/20 group-hover:border-secondary/40 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-6">
                <Code className="text-secondary mr-4" size={32} />
                <h3 className="text-2xl font-bold text-secondary">About Department</h3>
              </div>
              <p className="text-gray-300 group-hover:text-white transition-colors">
                The Department of Technology has been at the forefront of technical education, 
                consistently producing industry-ready professionals. Our focus on practical learning 
                and research has established us as a leading department in the region.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;