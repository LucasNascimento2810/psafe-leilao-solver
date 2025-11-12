import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    question: "É possível recuperar um imóvel que já foi arrematado em leilão?",
    answer: "Sim. Em diversos casos, é possível reverter a arrematação, especialmente quando são identificadas irregularidades no procedimento, ausência de notificação adequada, vícios contratuais ou abuso por parte da instituição financeira. Cada caso requer análise jurídica detalhada."
  },
  {
    question: "O que devo fazer ao receber uma notificação de leilão do meu imóvel?",
    answer: "O ideal é procurar imediatamente um advogado especializado. O tempo é um fator determinante para suspender o leilão e preservar o imóvel. A atuação preventiva permite ingressar com medidas judiciais antes que a perda do bem se concretize."
  },
  {
    question: "Preciso estar em Brasília para ser atendido pelo escritório?",
    answer: "Não. Apesar de nossa sede estar localizada em Brasília/DF, atendemos clientes em todo o Brasil por meio de atendimento online seguro e eficiente, garantindo o mesmo nível de acompanhamento e qualidade em qualquer estado."
  },
  {
    question: "O escritório cobra honorários antecipados?",
    answer: "Oferecemos condições de pagamento facilitadas, analisadas conforme a realidade financeira de cada cliente. Em muitos casos, é possível negociar parcelamentos ou formas alternativas de pagamento."
  },
  {
    question: "Quanto tempo leva o processo de recuperação do imóvel?",
    answer: "O prazo varia conforme a complexidade do caso e o tipo de procedimento (judicial ou extrajudicial). Após a análise inicial, nossa equipe fornece uma estimativa realista baseada nas etapas processuais e no histórico de casos semelhantes."
  },
  {
    question: "O que diferencia o PSAFE de outros escritórios?",
    answer: "Nossa experiência de mais de 19 anos de atuação jurídica, aliada à especialização em leilões judiciais e extrajudiciais, nos permite adotar estratégias personalizadas, com total transparência e comprometimento em cada caso, priorizando sempre a proteção do patrimônio do cliente."
  }
];

const FAQ = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div 
          ref={ref}
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Perguntas Frequentes
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-4" />
            <p className="text-muted-foreground text-lg">
              Tire suas dúvidas sobre suspensão e anulação de leilões
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card hover:border-accent transition-colors"
              >
                <AccordionTrigger className="text-left hover:text-accent hover:no-underline py-6">
                  <span className="font-semibold text-foreground">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-10">
            <p className="text-muted-foreground">
              Não encontrou sua dúvida? 
              <a href="#contato" className="text-accent font-semibold hover:underline ml-1">
                Entre em contato conosco
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
