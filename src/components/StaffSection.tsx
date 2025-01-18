import { useEffect } from "react";
import { Card, CardContent } from "./ui/card";

const leadershipMembers = [
  {
    name: "Arun Kumar",
    role: "Technical Lead",
    image: "/lovable-uploads/4a9fd3b3-4446-4439-aa46-b2e2a9b8b6ba.png"
  },
  {
    name: "Priya Sharma",
    role: "Event Coordinator",
    image: "/lovable-uploads/9ddf7ebd-3313-492f-b639-6b67b097c5e6.png"
  },
  {
    name: "Rahul Dev",
    role: "Creative Director",
    image: "/lovable-uploads/0b6883e0-1b56-4e13-9d69-4edfaa77b119.png"
  },
  {
    name: "Lakshmi Priya",
    role: "Operations Head",
    image: "/lovable-uploads/3982e581-1a86-4c80-a92e-f61a2c46a49f.png"
  },
  {
    name: "Vikram Singh",
    role: "Marketing Lead",
    image: "/lovable-uploads/3fe05ba9-4ba7-4e4a-82b1-d4d158470107.png"
  }
];

const staffMembers = [
  {
    name: "James Anderson",
    role: "Event Coordinator",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=600&fit=crop"
  },
  {
    name: "Lisa Chen",
    role: "Technical Lead",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop"
  },
  {
    name: "Mark Thompson",
    role: "Operations Manager",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop"
  }
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
        rootMargin: '50px'
      }
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
            Our Leadership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {leadershipMembers.map((member, index) => (
              <Card key={index} className="staff-card opacity-0 bg-background/20 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="relative w-full aspect-[3/4] mx-auto mb-4 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2 group-hover:text-primary transition-colors">{member.name}</h3>
                  <p className="text-gray-400 text-center">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="staff" className="py-20 relative overflow-hidden bg-background/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Our Staff
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {staffMembers.map((member, index) => (
              <Card key={index} className="staff-card opacity-0 bg-background/20 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="relative w-full aspect-[3/4] mx-auto mb-4 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2 group-hover:text-primary transition-colors">{member.name}</h3>
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