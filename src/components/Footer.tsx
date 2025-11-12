import { Mail, Phone, Shield } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">PSafe Advocacia</h3>
            <p className="text-white/80 leading-relaxed">
              Especialistas em suspensão e anulação de leilões judiciais e extrajudiciais.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <a 
                href="tel:+5511999999999" 
                className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>(11) 99999-9999</span>
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

          {/* Legal Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Informações</h4>
            <div className="space-y-2 text-white/80 text-sm">
              <p>CNPJ: 00.000.000/0001-00</p>
              <p>OAB/SP: 000.000</p>
              <a 
                href="#" 
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Shield className="w-4 h-4" />
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60 text-sm">
          <p>® 2020 PSAFE | Todos os direitos reservados.</p>
          <p className="mt-2">Política de Privacidade | Termos de Uso</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
