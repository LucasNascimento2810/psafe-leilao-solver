import { Mail, Phone } from "lucide-react";
import logoPSafe from "@/assets/logo-psafe.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {/* Brand */}
          <div className="space-y-4">
            <img 
              src={logoPSafe} 
              alt="Logo PSafe Advocacia" 
              className="w-40 md:w-48 object-contain"
            />
            <p className="text-white/80 leading-relaxed">
              Especialistas em suspensão e anulação de leilões judiciais e extrajudiciais.
            </p>
          </div>

          {/* Coluna do meio vazia */}
          <div className="hidden md:block" />

          {/* Contato */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <a
                href="tel:+5561986999470"
                className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>(61) 98699-9470</span>
              </a>
              <a
                href="mailto:contato@psafeadvocacia.com.br"
                className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>contato@psafeadvocacia.com.br</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60 text-sm">
          <p>® {currentYear} PSAFE | Todos os direitos reservados.</p>
          <p className="mt-2">Política de Privacidade | Termos de Uso</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
