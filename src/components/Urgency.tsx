import { Button } from "@/components/ui/button";
import { AlertCircle, MessageCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Urgency = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const whatsappNumber = "556198699470";
  const whatsappMessage = encodeURIComponent("🚨 URGENTE! Preciso de ajuda imediata com leilão.");
  
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  return (
    <section className="py-16 bg-gradient-to-br from-destructive/10 via-background to-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-destructive rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div 
          ref={ref}
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-destructive/10 mb-6 animate-pulse">
            <AlertCircle className="w-10 h-10 text-destructive" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Seu leilão está marcado? Tempo é crucial!
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Quanto mais próximo da data do leilão, menor a margem de ação. 
            <span className="text-foreground font-semibold"> Não espere até o último momento.</span> Entre em contato agora e proteja seu patrimônio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              onClick={handleWhatsAppClick}
              className="bg-destructive hover:bg-destructive/90 text-white font-semibold px-8 py-6 animate-pulse-glow"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Atendimento Urgente via WhatsApp
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            ⚡ Resposta prioritária em casos de urgência
          </p>
        </div>
      </div>
    </section>
  );
};

export default Urgency;
