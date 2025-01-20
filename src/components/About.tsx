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
              <div className="space-y-4 text-gray-300 group-hover:text-white transition-colors">
                <p>
                  The Department has flourished with XploITs - Explore in IT – a student's forum in the year 2004 
                  is a platform for the students to enrich their administrative skills and to exhibit their talents 
                  by the way of organizing events like symposia, seminar, workshop and conferences, etc.
                </p>
                <p>
                  The Department strives to develop long Term relationships with Industries and market the Student's 
                  Talents effectively. The students are thus being provided high level 'Leads and Pathways' that will 
                  enable them to gain access to a broad range of 'High Potential' and 'Hi-Tech' Career Opportunities.
                </p>
                <p>
                  Six numbers of well-equipped Hi-tech laboratories with 217 high end machines with internet connection, 
                  Centre of excellence for Graphic and Multimedia and Cyber safety and digital forensics in addition with 
                  3D printing, Well-structured class rooms and laboratories are provided to the students to carry out the experiments.
                </p>
                <p>
                  The department has increased the intake of the student's strength to 120 in the year 2008. A highly 
                  qualified team of 14 Faculty members including 5 Doctorates and the Research Expertise in the areas of 
                  specialization are disseminated in the department to guide the students to excel in their academic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;