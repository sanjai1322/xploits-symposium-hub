import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-white">
      <Header />
      <Hero />
      <About />
      <Events />
    </div>
  );
};

export default Index;