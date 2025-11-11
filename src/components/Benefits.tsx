import { Shield, Scale, Clock, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const benefits = [
  {
    icon: Shield,
    title: "Suspensão imediata de leilões irregulares",
    description: "Identificamos irregularidades e agimos rapidamente para proteger seu patrimônio"
  },
  {
    icon: Scale,
    title: "Atuação jurídica completa e personalizada",
    description: "Análise detalhada do seu caso com estratégias jurídicas sob medida"
  },
  {
    icon: Clock,
    title: "Atendimento rápido e humanizado",
    description: "Respondemos em até 24h com toda atenção que seu caso merece"
  },
  {
    icon: MapPin,
    title: "Atuação nacional em casos de leilão",
    description: "Presença em todo território brasileiro para defender seus direitos"
  }
];

const Benefits = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que escolher a PSafe Advocacia
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </div>

        <div 
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index}
                className="p-8 text-center border-border hover:border-accent transition-all duration-500 hover:shadow-xl hover:scale-105 bg-card group"
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6 group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-110">
                  <Icon className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
