import { Button } from "@/components/ui/button";
import whatsappLogo from "@/assets/whatsapp-logo.png";

const FloatingWhatsApp = () => {
  const whatsappNumber = "556198699470";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de falar sobre suspensão/anulação de leilão.");
  
  const handleClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Pulsing glow effect */}
      <div className="absolute inset-0 rounded-full bg-[hsl(var(--whatsapp))] opacity-40 animate-ping" />
      
      <Button
        onClick={handleClick}
        size="lg"
        className="relative rounded-full w-16 h-16 shadow-2xl bg-[hsl(var(--whatsapp))] hover:bg-[hsl(var(--whatsapp-hover))] text-white hover:scale-110 transition-all duration-300"
        aria-label="Contato via WhatsApp"
      >
        <img src={whatsappLogo} alt="WhatsApp" className="h-8 w-8" />
      </Button>
    </div>
  );
};

export default FloatingWhatsApp;
