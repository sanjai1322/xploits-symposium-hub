import { useEffect } from "react";
import { Card, CardContent } from "./ui/card";

const leadershipMembers = [
  {
    name: "R.Layanya",
    role: "President",
    image: "public/lovable-uploads/7352be3a-1f54-4652-b0c2-d14468fd7f26.png",
  },
  {
    name: "R. Mukesh Raaj",
    role: "Vice-President",
    image: "/public/img uploads/WhatsApp Image 2025-01-20 at 09.50.53_cb3de241.jpg",
  },
  {
    name: "V.Vignesh",
    role: "Secretary",
    image: "public/img uploads/0b6883e0-1b56-4e13-9d69-4edfaa77b119.png",
  },
  {
    name: "R.Karthi",
    role: "Joint Secretary",
    image: "/public/img uploads/4a9fd3b3-4446-4439-aa46-b2e2a9b8b6ba.png",
  },
  {
    name: "M.Vannamathi",
    role: "Treasurer",
    image: "public/img uploads/3982e581-1a86-4c80-a92e-f61a2c46a49f.png",
  },
];

const staffMembers = [
  {
    name: "Dr.S.Narayanan",
    role: "HOD-Department of Information Technology",
    image: "/public/img uploads/57d4118b-e509-49d9-be31-a59cff58f272.png",
  },
  {
    name: "Dr.S.Suresh Kumar",
    role: "Assistant Professor (sr.G)",
    image:
      "/public/img uploads/3e409326-6d39-4320-aadb-e4de7ff1ac59.png",
  },
  {
    name: "Ms.D.Nisha",
    role: "Assistant Professor (Sr.G)",
    image:
      "/public/img uploads/cfb30667-9eb9-48a0-8354-dd14b2997609.png",
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
