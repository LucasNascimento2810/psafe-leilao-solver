import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingWhatsApp = () => {
  const whatsappNumber = "55619869470";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de falar sobre suspensão/anulação de leilão.");
  
  const handleClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  return (
    <Button
      onClick={handleClick}
      size="lg"
      className="fixed bottom-6 right-6 z-50 rounded-full w-16 h-16 shadow-2xl bg-accent hover:bg-accent/90 text-white hover:scale-110 transition-all duration-300 animate-pulse"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </Button>
  );
};

export default FloatingWhatsApp;
