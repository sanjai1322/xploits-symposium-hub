import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const events = [
  {
    id: 1,
    name: "PAPER PRESENTATION",
    description: "Present your innovative ideas and research papers",
    rules: [
      "Team size: Maximum 2 members per team",
      "Time limit: 10 minutes presentation + 5 minutes Q&A",
      "Format: PPT must be in 16:9 ratio",
      "Topics must be related to current technology trends",
      "Abstract submission deadline: Check website for updates"
    ]
  },
  {
    id: 2,
    name: "DEV-DOMINATION",
    description: "Showcase your development skills in this coding challenge",
    rules: [
      "Individual participation only",
      "Time limit: 3 hours",
      "Choose from: Web Dev, App Dev, or Game Dev",
      "Use of specified frameworks only",
      "Code plagiarism will lead to disqualification"
    ]
  },
  {
    id: 3,
    name: "TRAILBLAZERS",
    description: "Navigate through technical challenges and puzzles",
    rules: [
      "Team size: 2-3 members",
      "Multiple rounds of technical challenges",
      "Time limit varies per round",
      "Both hardware and software challenges",
      "Teams must complete all challenges to qualify"
    ]
  },
  {
    id: 4,
    name: "TECHQUIZ",
    description: "Test your technical knowledge in this exciting quiz competition",
    rules: [
      "Team size: 2 members",
      "Multiple rounds with increasing difficulty",
      "Topics: Programming, Tech History, Current Affairs",
      "Rapid fire round in finals",
      "Decision of quiz master is final"
    ]
  },
  {
    id: 5,
    name: "THE SHERLOCK MATRIX",
    description: "Solve complex technical mysteries and debugging challenges",
    rules: [
      "Individual or pair participation",
      "Multiple stages of problem-solving",
      "Time limit: 2 hours total",
      "Focus on debugging and problem analysis",
      "Extra points for optimal solutions"
    ]
  }
];

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<(typeof events)[0] | null>(null);

  return (
    <section id="events" className="min-h-screen py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">
          Events
        </h2>
        
        <Tabs defaultValue="tab1" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-transparent h-auto p-4">
            <TabsTrigger 
              value="tab1"
              className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary relative overflow-hidden group"
            >
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                <img 
                  src="/lovable-uploads/b3cae842-45e0-4322-8cc8-92e08e38231d.png" 
                  alt="Tab background" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="relative z-10">Technical</span>
            </TabsTrigger>
            <TabsTrigger 
              value="tab2"
              className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary relative overflow-hidden group"
            >
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                <img 
                  src="/lovable-uploads/b3cae842-45e0-4322-8cc8-92e08e38231d.png" 
                  alt="Tab background" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="relative z-10">Non-Technical</span>
            </TabsTrigger>
            <TabsTrigger 
              value="tab3"
              className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary relative overflow-hidden group"
            >
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                <img 
                  src="/lovable-uploads/b3cae842-45e0-4322-8cc8-92e08e38231d.png" 
                  alt="Tab background" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="relative z-10">Workshop</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="tab1" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event, index) => (
                <div
                  key={event.id}
                  className="glass-effect p-6 rounded-xl cursor-pointer transform hover:scale-105 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedEvent(event)}
                >
                  <h3 className="text-xl font-bold mb-3 text-primary">{event.name}</h3>
                  <p className="text-gray-300">{event.description}</p>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tab2">
            <div className="text-center text-gray-400 py-8">
              Coming Soon...
            </div>
          </TabsContent>

          <TabsContent value="tab3">
            <div className="text-center text-gray-400 py-8">
              Workshop details will be announced shortly.
            </div>
          </TabsContent>
        </Tabs>

        <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-primary mb-4">
                {selectedEvent?.name}
              </DialogTitle>
            </DialogHeader>
            <div className="mt-4">
              <h4 className="text-lg font-semibold mb-2">Description:</h4>
              <p className="text-gray-300 mb-4">{selectedEvent?.description}</p>
              
              <h4 className="text-lg font-semibold mb-2">Rules & Guidelines:</h4>
              <ScrollArea className="h-[200px] rounded-md border p-4">
                <ul className="list-disc pl-4 space-y-2">
                  {selectedEvent?.rules.map((rule, index) => (
                    <li key={index} className="text-gray-300">{rule}</li>
                  ))}
                </ul>
              </ScrollArea>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Events;