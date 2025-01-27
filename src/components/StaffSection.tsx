import { useEffect } from "react";
import { Card, CardContent } from "./ui/card";

const leadershipMembers = [
  {
    name: "R.Layanya",
    role: "President",
    image: "https://github.com/sanjai1322/xploits-symposium-hub/blob/bfbbc656f97ac9f0ed46b83c42052d52c284ab49/public/img%20uploads/Layanya.jpg",
  },
  {
    name: "R. Mukesh Raaj",
    role: "Vice-President",
    image: "https://unsplash.com/photos/zNUA3uru5rU",
  },
  {
    name: "V.Vignesh",
    role: "Secretary",
    image: "https://github.com/sanjai1322/xploits-symposium-hub/blob/bfbbc656f97ac9f0ed46b83c42052d52c284ab49/public/img%20uploads/Vignsh.jpg",
  },
  {
    name: "R.Karthi",
    role: "Joint Secretary",
    image: "https://github.com/sanjai1322/xploits-symposium-hub/blob/bfbbc656f97ac9f0ed46b83c42052d52c284ab49/public/img%20uploads/karthi.jpg",
  },
  {
    name: "M.Vannamathi",
    role: "Treasurer",
    image: "https://github.com/sanjai1322/xploits-symposium-hub/blob/bfbbc656f97ac9f0ed46b83c42052d52c284ab49/public/img%20uploads/Vannamathi.jpg",
  },
];

const staffMembers = [
  {
    name: "Dr.S.Narayanan",
    role: "HOD-Department of Information Technology",
    image: "https://github.com/sanjai1322/xploits-symposium-hub/blob/bfbbc656f97ac9f0ed46b83c42052d52c284ab49/public/img%20uploads/narayanan_sir.jpg",
  },
  {
    name: "Dr.S.Suresh Kumar",
    role: "Assistant Professor (sr.G)",
    image:
      "https://github.com/sanjai1322/xploits-symposium-hub/blob/bfbbc656f97ac9f0ed46b83c42052d52c284ab49/public/img%20uploads/Suresh.jpg",
  },
  {
    name: "Ms.D.Nisha",
    role: "Assistant Professor (Sr.G)",
    image:
      "https://drive.google.com/file/d/1TOwF0H3Klq_ygVJCXxgmBqAxRhyo5JGb/view?usp=drive_link",
  },
];

const StaffSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      },
    );

    document.querySelectorAll(".staff-card").forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section id="leadership" className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {leadershipMembers.map((member, index) => (
              <Card
                key={index}
                className="staff-card opacity-0 bg-background/20 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="relative w-full aspect-[3/4] mx-auto mb-4 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-gray-400 text-center">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        id="staff"
        className="py-20 relative overflow-hidden bg-background/50"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Special Thanks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {staffMembers.map((member, index) => (
              <Card
                key={index}
                className="staff-card opacity-0 bg-background/20 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="relative w-full aspect-[3/4] mx-auto mb-4 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-gray-400 text-center">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default StaffSection;
