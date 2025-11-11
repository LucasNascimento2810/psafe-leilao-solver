import { Shield, Lock, Clock, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const badges = [
  {
    icon: Shield,
    title: "Segurança Jurídica",
    description: "Profissionais habilitados OAB"
  },
  {
    icon: Lock,
    title: "Sigilo Garantido",
    description: "LGPD e confidencialidade total"
  },
  {
    icon: Clock,
    title: "Atendimento Ágil",
    description: "Resposta em até 24h"
  },
  {
    icon: CheckCircle,
    title: "Sem Compromisso",
    description: "Primeira análise gratuita"
  }
];

const TrustBadges = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section className="py-12 bg-secondary/20 border-y border-border">
      <div className="container px-4 mx-auto">
        <div 
          ref={ref}
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div 
                key={index}
                className="flex flex-col items-center text-center p-4"
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-3">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <h4 className="font-semibold text-foreground text-sm mb-1">
                  {badge.title}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {badge.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
