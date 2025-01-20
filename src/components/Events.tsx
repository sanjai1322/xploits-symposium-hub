import { Trophy, Star, Award, Code, FileText } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";

const events = [
  {
    title: "PAPER PRESENTATION",
    icon: <FileText className="text-primary" size={32} />,
    description: "Present your research papers and showcase your technical writing skills.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    rules: [
      "Individual or team of 2",
      "15 minutes presentation time",
      "Original research work only",
      "Abstract submission required",
      "IEEE format mandatory"
    ]
  },
  {
    title: "DEV-DOMINATION",
    icon: <Code className="text-primary" size={32} />,
    description: "Battle it out in our intense coding competition. Solve complex problems and showcase your programming prowess.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    rules: [
      "Time limit of 3 hours",
      "Individual participation only",
      "Multiple programming languages supported",
      "Automated testing system",
      "Points based on code efficiency and correctness"
    ]
  },
  {
    title: "TRAILBLAZERS",
    icon: <Award className="text-primary" size={32} />,
    description: "Present your innovative projects and get feedback from industry experts.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    rules: [
      "Team size: 2-4 members",
      "Project must be original work",
      "Live demonstration required",
      "10 minutes presentation time",
      "Q&A session with judges"
    ]
  },
  {
    title: "TECHQUIZ",
    icon: <Star className="text-primary" size={32} />,
    description: "Test your technical knowledge across various domains in this fast-paced quiz competition.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    rules: [
      "Teams of 2 members",
      "Multiple rounds of elimination",
      "Topics include programming, networking, and technology trends",
      "Rapid fire rounds included",
      "Negative marking applicable"
    ]
  },
  {
    title: "THE SHERLOCK MATRIX",
    icon: <Trophy className="text-primary" size={32} />,
    description: "Solve mysteries and puzzles using your analytical and technical skills in this unique challenge.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    rules: [
      "Teams of 2-3 members",
      "Multiple levels of challenges",
      "Time-based scoring system",
      "Clues and hints provided",
      "Final mystery challenge"
    ]
  }
];

const Events = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedEvent, setSelectedEvent] = useState<typeof events[0] | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLearnMore = (event: typeof events[0]) => {
    setSelectedEvent(event);
    setIsDialogOpen(true);
  };

  return (
    <>
      <section 
        ref={sectionRef}
        id="events" 
        className="py-20 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background" />
        
        <div className="container mx-auto px-6 relative z-10 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Events
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-black/30 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="absolute inset-0">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                
                <div className="relative p-6 flex flex-col h-full min-h-[320px]">
                  <div className="flex-1">
                    <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {event.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                      {event.title}
                    </h3>
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {event.description}
                    </p>
                  </div>
                  
                  <Button
                    className="mt-6 w-full bg-white/10 hover:bg-primary/20 border border-white/20 hover:border-primary transition-all duration-300"
                    onClick={() => handleLearnMore(event)}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px] bg-background/95 backdrop-blur-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold flex items-center gap-3">
              {selectedEvent?.icon}
              {selectedEvent?.title}
            </DialogTitle>
            <DialogDescription>
              {selectedEvent?.description}
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="h-[300px] w-full rounded-md border p-4">
            <div className="pr-4">
              <h4 className="text-lg font-semibold mb-3 text-primary">Rules & Guidelines</h4>
              <ul className="space-y-2">
                {selectedEvent?.rules.map((rule, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Events;