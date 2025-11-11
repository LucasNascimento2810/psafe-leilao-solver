import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    auctionType: "",
    city: "",
    message: "",
    acceptPolicy: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.acceptPolicy) {
      toast({
        title: "Erro",
        description: "Por favor, aceite a Política de Privacidade para continuar.",
        variant: "destructive"
      });
      return;
    }

    // Format message for WhatsApp
    const whatsappNumber = "5511999999999";
    const message = `
*Novo Contato - PSafe Advocacia*

*Nome:* ${formData.name}
*WhatsApp:* ${formData.whatsapp}
*Tipo de Leilão:* ${formData.auctionType}
*Cidade/UF:* ${formData.city}

*Mensagem:*
${formData.message}
    `.trim();

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
    
    toast({
      title: "Mensagem enviada!",
      description: "Em breve entraremos em contato via WhatsApp.",
    });

    // Reset form
    setFormData({
      name: "",
      whatsapp: "",
      auctionType: "",
      city: "",
      message: "",
      acceptPolicy: false
    });
  };

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Fale agora com um advogado especializado
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-4" />
            <p className="text-muted-foreground text-lg">
              Preencha o formulário e receba atendimento prioritário
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-card border border-border rounded-lg p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nome completo *</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Seu nome completo"
                  className="border-input"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="whatsapp">WhatsApp *</Label>
                <Input
                  id="whatsapp"
                  required
                  type="tel"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                  placeholder="(11) 99999-9999"
                  className="border-input"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="auctionType">Tipo de leilão *</Label>
                <Select
                  required
                  value={formData.auctionType}
                  onValueChange={(value) => setFormData({...formData, auctionType: value})}
                >
                  <SelectTrigger className="border-input">
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="imovel">Imóvel</SelectItem>
                    <SelectItem value="veiculo">Veículo</SelectItem>
                    <SelectItem value="outros">Outros</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="city">Cidade/UF</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                  placeholder="Ex: São Paulo - SP"
                  className="border-input"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Mensagem</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Descreva brevemente sua situação..."
                rows={5}
                className="border-input resize-none"
              />
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox
                id="policy"
                checked={formData.acceptPolicy}
                onCheckedChange={(checked) => setFormData({...formData, acceptPolicy: checked as boolean})}
                className="mt-1"
              />
              <Label 
                htmlFor="policy" 
                className="text-sm text-muted-foreground cursor-pointer leading-relaxed"
              >
                Li e aceito a <a href="#" className="text-accent hover:underline">Política de Privacidade</a>. 
                Autorizo o uso dos meus dados para contato.
              </Label>
            </div>

            <Button 
              type="submit"
              size="lg"
              className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-6"
            >
              <Send className="mr-2 h-5 w-5" />
              Enviar e falar com advogado
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              Resposta garantida em até 24 horas
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
