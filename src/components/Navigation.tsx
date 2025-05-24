
import { useState } from 'react';
import { Coffee, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Início', href: '#home' },
    { label: 'Sobre', href: '#about' },
    { label: 'Serviços', href: '#services' },
    { label: 'Projetos', href: '#portfolio' },
    { label: 'Contato', href: '#contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-coffee-200 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-coffee-600 to-coffee-700 rounded-xl shadow-lg">
              <Coffee className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-coffee-900">
              Código com Café
            </span>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-coffee-700 hover:text-coffee-900 font-medium transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-coffee-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <Button className="bg-coffee-600 hover:bg-coffee-700 text-white shadow-lg">
              Iniciar Projeto
            </Button>
          </div>

          {/* Menu Mobile Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-coffee-700" />
            ) : (
              <Menu className="h-6 w-6 text-coffee-700" />
            )}
          </Button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-coffee-200 bg-white/95 backdrop-blur-md">
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-coffee-700 hover:text-coffee-900 font-medium transition-colors duration-200 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button className="bg-coffee-600 hover:bg-coffee-700 text-white mt-4">
                Iniciar Projeto
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
