import { Coffee, Code, Palette, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200 flex items-center">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/4010b2cc-159a-4035-bfae-425e886b0da9.png" 
              alt="Código com Café" 
              className="w-20 h-20 object-contain"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
            Código com Café
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed animate-fade-in">
            Desenvolvemos soluções digitais excepcionais com a energia do café. 
            <br className="hidden md:block" />
            Transformamos ideias em experiências digitais memoráveis.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-lg">
              <Code className="h-5 w-5 text-[#DF6E2B]" />
              <span className="text-gray-800 font-medium">Desenvolvimento Web</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-lg">
              <Palette className="h-5 w-5 text-[#DF6E2B]" />
              <span className="text-gray-800 font-medium">UI/UX Design</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-lg">
              <Rocket className="h-5 w-5 text-[#DF6E2B]" />
              <span className="text-gray-800 font-medium">Inovação Digital</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button 
              onClick={scrollToPortfolio}
              size="lg" 
              className="bg-[#DF6E2B] hover:bg-[#c5611f] text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Ver Projetos
            </Button>
            <Button 
              onClick={scrollToContact}
              variant="outline" 
              size="lg"
              className="border-[#DF6E2B] text-[#DF6E2B] hover:bg-orange-50 px-8 py-4 text-lg font-semibold shadow-lg"
            >
              Fale Conosco
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
