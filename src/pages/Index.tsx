
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Features from "../components/home/Features";
import CTA from "../components/home/CTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
