import { useEffect } from "react";
import { Mail, Phone } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const StaffSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".staff-card").forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const staffMembers = [
    {
      name: "Dr. John Doe",
      role: "Head of Department",
      image: "/placeholder.svg"
    },
    {
      name: "Prof. Jane Smith",
      role: "Senior Professor",
      image: "/placeholder.svg"
    },
    {
      name: "Dr. Mike Johnson",
      role: "Technical Lead",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section id="staff" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Our Leadership
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {staffMembers.map((member, index) => (
            <Card key={index} className="staff-card opacity-0 bg-background/20 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">{member.name}</h3>
                <p className="text-gray-400 text-center">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StaffSection;