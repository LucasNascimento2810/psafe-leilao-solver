import { Card } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    location: "São Paulo - SP",
    text: "Conseguiram suspender o leilão do meu imóvel em tempo recorde. Atendimento excelente e muito profissional!",
    rating: 5
  },
  {
    name: "João Santos",
    location: "Rio de Janeiro - RJ",
    text: "Equipe muito competente. Identificaram irregularidades que eu nem imaginava e salvaram meu patrimônio.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que nossos clientes dizem
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-8 bg-card border-border hover:border-accent transition-all duration-300 hover:shadow-lg relative"
            >
              <div className="absolute top-6 right-6 text-accent/20">
                <Quote className="w-12 h-12" />
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
