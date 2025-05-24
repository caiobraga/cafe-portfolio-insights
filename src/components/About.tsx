
import { Coffee, Users, Award, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Coffee,
      title: "Paixão pelo Código",
      description: "Cada linha de código é escrita com dedicação e atenção aos detalhes."
    },
    {
      icon: Users,
      title: "Foco no Cliente",
      description: "Priorizamos as necessidades dos nossos clientes em cada projeto."
    },
    {
      icon: Award,
      title: "Qualidade Premium",
      description: "Entregamos soluções de alta qualidade que superam expectativas."
    },
    {
      icon: Heart,
      title: "Experiência Única",
      description: "Criamos experiências digitais que conectam e encantam usuários."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-coffee-900 mb-6">
            Sobre Nós
          </h2>
          <p className="text-xl text-coffee-700 max-w-3xl mx-auto leading-relaxed">
            Somos uma equipe apaixonada por tecnologia e café, dedicada a criar 
            soluções digitais inovadoras que impulsionam o sucesso dos nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-coffee-200">
              <CardContent className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-coffee-500 to-coffee-600 rounded-full flex items-center justify-center shadow-lg">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-coffee-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-coffee-600 leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-coffee-600 to-coffee-700 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-6">
            Pronto para Transformar Sua Ideia em Realidade?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Vamos tomar um café e conversar sobre o seu próximo projeto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white/20 px-6 py-3 rounded-full backdrop-blur-sm">
              <span className="font-semibold">+50 Projetos Entregues</span>
            </div>
            <div className="bg-white/20 px-6 py-3 rounded-full backdrop-blur-sm">
              <span className="font-semibold">100% Satisfação do Cliente</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
