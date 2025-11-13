import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import lawyerImage from "@/assets/lawyer-professional.png";
import logoPSafe from "@/assets/logo-psafe.png";

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
      {/* Decorative Background Elements - Legal Symbols */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <svg className="absolute top-20 left-10 w-24 h-24 text-accent/10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L4 6v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-8-4z"/>
        </svg>
        <svg className="absolute top-40 right-20 w-32 h-32 text-accent/8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 3v2H4v14h16V5h-5V3h7v18H2V3h7zm3 2V3h6v2h-6z"/>
        </svg>
        <svg className="absolute bottom-32 left-20 w-28 h-28 text-accent/10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3l1 9h8l-6.5 5 2.5 8-5-4-5 4 2.5-8L3 12h8l1-9z"/>
        </svg>
        <svg className="absolute bottom-20 right-32 w-20 h-20 text-accent/12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L4 6v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-8-4z"/>
        </svg>
      </div>

      {/* Content Container */}
      <div className="container relative z-10 px-4 py-16 lg:py-20 mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6 lg:space-y-8 animate-fade-in order-2 lg:order-1">
            {/* LOGO */}
            <div className="flex justify-center lg:justify-start mb-6">
              <img
                src={logoPSafe}
                alt="PSafe Advocacia"
                className="w-32 md:w-40 object-contain drop-shadow-lg"
              />
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight animate-fade-in-up text-center lg:text-left">
              Seu imóvel não precisa ir a leilão.
            </h1>

            <p
              className="text-lg md:text-xl lg:text-2xl text-white/90 font-light animate-fade-in text-center lg:text-left"
              style={{ animationDelay: "0.2s" }}
            >
              Tome a frente e defenda o que é seu.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 pt-4 animate-scale-in justify-center lg:justify-start"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                size="lg"
                onClick={handleWhatsAppClick}
                className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-6 text-base md:text-lg rounded-md shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar com um advogado agora
              </Button>
            </div>

            <div
              className="flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-6 pt-6 text-sm text-white/80 animate-fade-in"
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
          <div className="relative flex justify-center lg:justify-end animate-fade-in order-1 lg:order-2" style={{ animationDelay: "0.3s" }}>
            <div className="relative max-w-md lg:max-w-lg xl:max-w-xl">
              {/* Professional image with clean background */}
              <img
                src={lawyerImage}
                alt="Dr. Pablo Safe - Advogado Especialista"
                className="relative z-10 w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
