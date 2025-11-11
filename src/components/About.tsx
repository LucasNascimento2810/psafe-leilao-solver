import { Card } from "@/components/ui/card";
import { Award, Users, TrendingUp } from "lucide-react";
import lawyerImage from "@/assets/lawyer-hero.jpg";

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src={lawyerImage} 
                  alt="Advogado PSafe Advocacia"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              </div>
              
              {/* Stats Card */}
              <Card className="absolute -bottom-6 -right-6 p-6 bg-white shadow-xl border-accent/20 hidden lg:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">+10 anos</div>
                    <div className="text-sm text-muted-foreground">de experiência</div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Sobre a PSafe Advocacia
                </h2>
                <div className="w-20 h-1 bg-accent mb-6" />
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                A <span className="font-semibold text-foreground">PSafe Advocacia</span> atua com foco em soluções jurídicas rápidas e seguras para proteger o patrimônio dos clientes em situações de leilões judiciais e extrajudiciais.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Nossa equipe possui ampla experiência na identificação de irregularidades processuais e na elaboração de estratégias eficazes para suspensão e anulação de leilões, sempre priorizando o melhor resultado para nossos clientes.
              </p>

              {/* Mini Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Atendimento personalizado</h4>
                    <p className="text-sm text-muted-foreground">Cada caso recebe atenção individual</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Alta taxa de sucesso</h4>
                    <p className="text-sm text-muted-foreground">Resultados comprovados</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
