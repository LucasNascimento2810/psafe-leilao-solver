import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/lawyer-hero.jpg";

const Hero = () => {
  const whatsappNumber = "5561986994700";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de falar sobre suspensão/anulação de leilão.");
  
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: '90%',
          backgroundPosition: 'center 35%',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#1a2332',
        }}
      >
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 mx-auto text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in-up">
            Seu imóvel não precisa ir a leilão.
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 font-light max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Tome a frente e defenda o que é seu.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg"
              onClick={handleWhatsAppClick}
              className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-6 text-lg rounded-md shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Falar com um advogado agora
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 pt-8 text-sm text-white/80 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>Atendimento rápido e sigiloso</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>Atuação em todo o Brasil</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
