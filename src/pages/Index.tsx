import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import StaffSection from "@/components/StaffSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-white">
      <Header />
      <Hero />
      <About />
      <Events />
      <StaffSection />
      <Footer />
    </div>
  );
};

export default Index;