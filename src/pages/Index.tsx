import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Stats from "@/components/Stats";
import Process from "@/components/Process";
import About from "@/components/About";
import TrustBadges from "@/components/TrustBadges";
import Testimonials from "@/components/Testimonials";
import Urgency from "@/components/Urgency";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <TrustBadges />
      <Benefits />
      <Stats />
      <Process />
      <About />
      <Testimonials />
      <Urgency />
      <FAQ />
      <ContactForm />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
