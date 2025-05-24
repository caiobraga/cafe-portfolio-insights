
import { Coffee, Github, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-coffee-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-coffee-500 to-coffee-600 rounded-xl shadow-lg">
                <Coffee className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Código com Café</span>
            </div>
            <p className="text-coffee-100 leading-relaxed mb-6 max-w-md">
              Transformamos ideias em experiências digitais memoráveis. 
              Cada projeto é desenvolvido com paixão, dedicação e muito café.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/codigo-com-cafe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-coffee-800 hover:bg-coffee-700 rounded-lg flex items-center justify-center transition-colors duration-200"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:contato@codigocomcafe.com"
                className="w-10 h-10 bg-coffee-800 hover:bg-coffee-700 rounded-lg flex items-center justify-center transition-colors duration-200"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Serviços</h3>
            <div className="space-y-3">
              <a href="#" className="block text-coffee-200 hover:text-white transition-colors duration-200">
                Desenvolvimento Web
              </a>
              <a href="#" className="block text-coffee-200 hover:text-white transition-colors duration-200">
                Apps Mobile
              </a>
              <a href="#" className="block text-coffee-200 hover:text-white transition-colors duration-200">
                UI/UX Design
              </a>
              <a href="#" className="block text-coffee-200 hover:text-white transition-colors duration-200">
                E-commerce
              </a>
              <a href="#" className="block text-coffee-200 hover:text-white transition-colors duration-200">
                Consultoria Tech
              </a>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-coffee-400" />
                <a 
                  href="mailto:contato@codigocomcafe.com"
                  className="text-coffee-200 hover:text-white transition-colors duration-200"
                >
                  contato@codigocomcafe.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-coffee-400" />
                <a 
                  href="tel:+5511999999999"
                  className="text-coffee-200 hover:text-white transition-colors duration-200"
                >
                  +55 (11) 99999-9999
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-coffee-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-coffee-300 text-sm">
              © 2024 Código com Café. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-coffee-300 hover:text-white transition-colors duration-200">
                Política de Privacidade
              </a>
              <a href="#" className="text-coffee-300 hover:text-white transition-colors duration-200">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
