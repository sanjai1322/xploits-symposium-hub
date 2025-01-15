import { Trophy, Star, Award } from "lucide-react";

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
    icon: <Trophy className="text-primary" size={32} />,
    description: "24-hour coding marathon to build solutions for real-world problems."
  },
  {
    title: "Paper Presentation",
    icon: <Star className="text-primary" size={32} />,
    description: "Present your research papers and showcase your technical writing skills."
  }
];

const Events = () => {
  return (
    <section id="events" className="py-20 bg-background/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Events
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="card-flip bg-secondary/10 p-8 rounded-2xl hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="card-front flex flex-col items-center">
                {event.icon}
                <h3 className="text-2xl font-bold mt-4 mb-2 text-primary">{event.title}</h3>
              </div>
              <div className="card-back p-6">
                <p className="text-gray-300">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;