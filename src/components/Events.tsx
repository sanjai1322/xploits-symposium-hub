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
import { Card } from "./ui/card";

const events = [
  {
    title: "PAPER PRESENTATION",
    icon: <FileText className="text-primary" size={32} />,
    description: "Present your research papers and showcase your technical writing skills.",
    image: "/img uploads/3982e581-1a86-4c80-a92e-f61a2c46a49f.png",
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
    image: "/img uploads/3e409326-6d39-4320-aadb-e4de7ff1ac59.png",
    rules: [
      "ROUND 1 : Live monitoring; no external help or devices.",
      "Use only the quiz platform; 45 mins max.",
      "Report issues; violations = disqualification.",
      "Round 2 : No AI tools; internet only for images and colors.",
      "Live monitoring; misuse = disqualification.",
      "Finish website within the time limit."
    ]
  },
  {
    title: "TRAILBLAZERS",
    icon: <Award className="text-primary" size={32} />,
    description: "Present your innovative projects and get feedback from industry experts.",
    image: "/img uploads/4a9fd3b3-4446-4439-aa46-b2e2a9b8b6ba.png",
    rules: [
      "Each team consists of 2 members.",
      "A buzzer app is used to signal readiness to answer a question.",
      "Questions will be displayed with marks based on difficulty:",
      "Round 1: 1-mark (easy) and 2-mark (moderate) questions.",
      "Round 2: 3-mark (difficult) and 5-mark (very difficult) questions.",
      "Teams move forward on the 25-box board based on the marks of the questions they answer correctly:",
      " 1 mark = 1 box forward.",
      "2 marks = 2 boxes forward, and so on.",
      "Incorrect answers result in no movement.The team that crosses the 25th box first will be declared the winner."
    ]
  },
  {
    title: "TECHQUIZ",
    icon: <Star className="text-primary" size={32} />,
    description: "Test your technical knowledge across various domains in this fast-paced quiz competition.",
    image: "/img uploads/57d4118b-e509-49d9-be31-a59cff58f272.png",
    rules: [
      "The test will be monitored live by invigilators present in the classroom to ensure fair play.",
      "Accessing any external websites, tabs, or applications apart from the quiz platform is strictly prohibited.",
      "Participants are not allowed to use mobile phones, smartwatches, or any electronic devices during the test.",
      "The test duration is 30 minutes(based on participation duration can change). Ensure you manage your time effectively as no extra time will be provided.",
      "Any attempt to seek external help, communicate with other participants, or violate the rules will result in immediate disqualification.",
      "In case of any technical issues, report them immediately to the invigilator.",
      "Failure to comply with these rules will lead to disqualification. Stay focused and showcase your knowledge!"
    ]
  },
  {
    title: "THE SHERLOCK MATRIX",
    icon: <Trophy className="text-primary" size={32} />,
    description: "Solve mysteries and puzzles using your analytical and technical skills in this unique challenge.",
    image: "/img uploads/9ddf7ebd-3313-492f-b639-6b67b097c5e6.png",
    rules: [
      "We will setup a crime scene in a room and document will be provided before entering the scene.",
      "Kindly bring a notebook and a pen.",
      "Each team can consist of 2 - 3 members only.",
      "This event has a total of 2 rounds, participants shortlisted from the first round will be moved to the second round.",
      "The team is allowed to view the crime location for a particular time and you can have note of it.",
      "The first round is questionnaire about the crime scene and the second round is the justification round.",
      "No product should be touched or damaged, it will lead to disqualification.",
      "The most accurate answering team will be the winner."
    ]
  }
];

const generalInstructions = [
  "The symposium will begin at 9:00 am and conclude at 4:00 pm.",
  "On spot registration will start at 8:30 and close at 11:00.",
  "Registration fee should be paid at the venue.",
  "Payment will only be accepted through cash.",
  "Each participant should pay Rs.150 and can participate up to three events.",
  "All the events will be conducted parallelly.",
  "Lunch break will be issued after the end of round 1.",
  "Refreshments and lunch will be provided.",
  "Winners and Runners will be awarded with certificates and cash prizes."
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

          {/* General Instructions Card */}
          <Card className="mb-16 p-6 bg-black/30 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all duration-300 group">
            <h3 className="text-2xl font-bold mb-4 text-primary">General Instructions</h3>
            <ScrollArea className="h-[200px] w-full rounded-md">
              <ul className="space-y-2 pr-4">
                {generalInstructions.map((instruction, index) => (
                  <li 
                    key={index}
                    className="flex items-start gap-2 group-hover:translate-x-2 transition-transform duration-300"
                  >
                    <span className="text-primary">•</span>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {instruction}
                    </span>
                  </li>
                ))}
              </ul>
            </ScrollArea>
          </Card>
          
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
