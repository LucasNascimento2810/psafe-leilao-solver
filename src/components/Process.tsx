import { Button } from "@/components/ui/button";
import { FileText, Search, Gavel } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import whatsappLogo from "@/assets/whatsapp-logo.png";

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Envie os dados do seu leilão",
    description: "Compartilhe as informações básicas do leilão através do WhatsApp ou formulário"
  },
  {
    number: "02",
    icon: Search,
    title: "Receba análise jurídica gratuita",
    description: "Nossa equipe analisa seu caso e identifica as melhores estratégias"
  },
  {
    number: "03",
    icon: Gavel,
    title: "Ação imediata para suspender",
    description: "Tomamos as medidas legais necessárias para proteger seu patrimônio"
  }
];

const Process = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  
  const whatsappNumber = "556198699470";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de entender melhor o processo de suspensão de leilão.");
  
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Como funciona o processo para suspender ou anular um leilão
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </div>

        <div 
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary text-white text-2xl font-bold mb-6">
                    {step.number}
                  </div>
                  
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-accent/30" />
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            onClick={handleWhatsAppClick}
            className="bg-[hsl(var(--whatsapp))] hover:bg-[hsl(var(--whatsapp-hover))] text-white font-semibold px-8 py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <img src={whatsappLogo} alt="WhatsApp" className="mr-2 h-5 w-5" />
            Falar com advogado
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Process;
