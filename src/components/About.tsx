import { Building, Code, ScrollText } from "lucide-react";
import { useEffect, useRef } from "react";
import { ScrollArea } from "./ui/scroll-area";

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

        {/* General Instructions Box */}
        <div className="mb-16 hover-scale">
          <div className="bg-secondary/10 p-8 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300">
            <div className="flex items-center mb-6">
              <ScrollText className="text-primary mr-4" size={32} />
              <h3 className="text-2xl font-bold text-primary">General Instructions</h3>
            </div>
            <ScrollArea className="h-[300px] w-full pr-4">
              <div className="space-y-4 text-gray-300">
                <p>1. The symposium will begin at 9:00 am and conclude at 4:00 pm.</p>
                <p>2. On spot registration will start at 8:30 and close at 11:00.</p>
                <p>3. Registration fee should be paid at the venue.</p>
                <p>4. Payment will only be accepted through cash.</p>
                <p>5. Each participant should pay Rs.150 and can participate up to three events.</p>
                <p>6. All the events will be conducted parallelly.</p>
                <p>7. Lunch break will be issued after the end of round 1.</p>
                <p>8. Refreshments and lunch will be provided.</p>
                <p>9. Winners and Runners will be awarded with certificates and cash prizes.</p>
              </div>
            </ScrollArea>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="group">
            <div className="bg-secondary/10 p-8 rounded-2xl border border-primary/20 group-hover:border-primary/40 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-6">
                <Building className="text-primary mr-4" size={32} />
                <h3 className="text-2xl font-bold text-primary group-hover:text-secondary transition-colors">About College</h3>
              </div>
              <div className="space-y-4 text-gray-300 group-hover:text-white transition-colors">
                <p>
                  SRM Valliammai Engineering college (An Autonomous Institution) was established on September 9, 1999 
                  and presently conducts 11 Under graduate courses and 8 Post graduate courses. The college has highly 
                  qualified, dynamic and dedicated renowned faculty both from academic and industrial background. Besides, 
                  the students bring laurels to the college by securing university ranks.
                </p>
                <p>
                  The SRM Valliammai Engineering College is a part of the SRM Group of Educational Institutions, sponsored 
                  by the Valliammai Society. The Valliammai Society was founded by Dr.T.R.Paarivendhar, a well-known 
                  educationist, in the name of his mother Tmt.R.Valliammai, under whose care and guidance he attained 
                  greater heights in his personal development and whose ideals continue to inspire him. It is approved by 
                  AICTE, New Delhi, Accredited by NBA, A 'Grade Accreditation by NAAC, ISO certified and affiliated to 
                  Anna University, Chennai.
                </p>
                <p>
                  Our Institute is recognized as SIRO by DST and has been granted by 2(f) & 12(b) status by UGC and also 
                  centrally funded by FIST of DST and Incubation Centre by MSME, Govt. of India. The objective of the 
                  institution is to promote the development and growth of true, effective and efficient Engineering Professional.
                </p>
              </div>
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