import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { TrendingUp, Users, Award, Clock } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    number: "98%",
    label: "Taxa de sucesso",
    description: "em casos analisados"
  },
  {
    icon: Users,
    number: "+500",
    label: "Clientes atendidos",
    description: "em todo Brasil"
  },
  {
    icon: Award,
    number: "+10",
    label: "Anos de experiência",
    description: "em direito imobiliário"
  },
  {
    icon: Clock,
    number: "24h",
    label: "Tempo médio",
    description: "de primeira resposta"
  }
];

const Stats = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section className="py-16 bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div 
          ref={ref}
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="text-center"
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 mb-4">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white font-semibold mb-1">
                  {stat.label}
                </div>
                <div className="text-white/70 text-sm">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
