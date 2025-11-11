import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    question: "Em quanto tempo é possível suspender um leilão?",
    answer: "O tempo varia conforme a urgência e complexidade do caso. Em situações de iminência do leilão, podemos atuar em regime de urgência e obter liminares em 24 a 48 horas. Quanto antes você nos procurar, maiores as chances de sucesso."
  },
  {
    question: "Quais são os principais motivos para anular um leilão?",
    answer: "Os motivos mais comuns incluem: vícios na notificação, erros no processo de execução, falta de avaliação atualizada do bem, irregularidades no edital, valores de lance muito abaixo do mercado, e ausência de tentativas de acordo antes do leilão."
  },
  {
    question: "Preciso pagar algo antecipadamente?",
    answer: "Trabalhamos com total transparência. Após a análise inicial gratuita do seu caso, apresentamos um orçamento claro com todas as condições. Cada caso é avaliado individualmente para definirmos a melhor estratégia e valores."
  },
  {
    question: "Vocês atuam em todo o Brasil?",
    answer: "Sim! Nossa atuação é nacional. Temos experiência em processos em diversos estados brasileiros e utilizamos recursos tecnológicos que nos permitem atuar de forma ágil em qualquer região do país."
  },
  {
    question: "O que acontece depois que o leilão é suspenso?",
    answer: "Após a suspensão, trabalhamos em estratégias para resolver a dívida de forma mais favorável, como negociação de valores, parcelamento, ou até mesmo a anulação definitiva do processo caso identifiquemos irregularidades graves."
  },
  {
    question: "Qual a diferença entre suspensão e anulação de leilão?",
    answer: "A suspensão é uma medida temporária que interrompe o leilão enquanto analisamos o caso. Já a anulação cancela definitivamente o leilão quando comprovamos irregularidades graves no processo. Nossa estratégia depende das particularidades de cada situação."
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
