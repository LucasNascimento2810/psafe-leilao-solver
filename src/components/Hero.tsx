import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/lawyer-hero.jpg";
import logoPSafe from "@/assets/logo-psafe.png"; // ← Adicione sua logo aqui

const Hero = () => {
  const whatsappNumber = "556198699470";
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de falar sobre suspensão/anulação de leilão."
  );

  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
      "_blank"
    );
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        {/* Legal icons pattern */}
        <div className="absolute top-20 left-10 text-accent/30 text-6xl">⚖️</div>
        <div className="absolute top-40 right-20 text-accent/30 text-5xl">📋</div>
        <div className="absolute bottom-32 left-20 text-accent/30 text-5xl">🏛️</div>
        <div className="absolute bottom-20 right-32 text-accent/30 text-6xl">⚖️</div>
      </div>

      {/* Content Container */}
      <div className="container relative z-10 px-4 py-12 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8 animate-fade-in lg:pr-12">
            {/* LOGO */}
            <div className="flex justify-start mb-8">
              <img
                src={logoPSafe}
                alt="PSafe Advocacia"
                className="w-40 md:w-48 object-contain drop-shadow-lg"
              />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in-up">
              Seu imóvel não precisa ir a leilão.
            </h1>

            <p
              className="text-xl md:text-2xl text-white/90 font-light animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Tome a frente e defenda o que é seu.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 pt-6 animate-scale-in"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                size="lg"
                onClick={handleWhatsAppClick}
                className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-6 text-lg rounded-md shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar com um advogado agora
              </Button>
            </div>

            <div
              className="flex flex-wrap gap-6 pt-8 text-sm text-white/80 animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
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

          {/* Right Side - Professional Image */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Decorative background circle */}
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl scale-110" />
              
              {/* Professional image */}
              <img
                src={heroImage}
                alt="Dr. Pablo Safe - Advogado Especialista"
                className="relative z-10 w-full max-w-lg h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
