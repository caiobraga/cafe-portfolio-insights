
import { Code, Palette, Smartphone, Globe, Database, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Desenvolvimento Web",
      description: "Criamos sites e aplicações web modernas, responsivas e otimizadas para performance.",
      features: ["React, Vue, Angular", "Node.js, Python, PHP", "APIs RESTful", "PWA"]
    },
    {
      icon: Smartphone,
      title: "Apps Mobile",
      description: "Desenvolvemos aplicativos nativos e híbridos para iOS e Android.",
      features: ["React Native", "Flutter", "Ionic", "Apps Nativas"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Criamos interfaces intuitivas e experiências de usuário memoráveis.",
      features: ["Design System", "Prototipagem", "User Research", "Wireframes"]
    },
    {
      icon: Globe,
      title: "E-commerce",
      description: "Soluções completas para vendas online com integração de pagamentos.",
      features: ["Shopify, WooCommerce", "Pagamentos Online", "Gestão de Estoque", "Analytics"]
    },
    {
      icon: Database,
      title: "Sistemas Corporativos",
      description: "ERPs, CRMs e sistemas personalizados para sua empresa.",
      features: ["Automação", "Relatórios", "Integrações", "Cloud"]
    },
    {
      icon: Shield,
      title: "Consultoria Tech",
      description: "Orientação estratégica para transformação digital da sua empresa.",
      features: ["Arquitetura", "Code Review", "Performance", "Segurança"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-coffee-900 mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-coffee-700 max-w-3xl mx-auto leading-relaxed">
            Oferecemos soluções completas em tecnologia para impulsionar o crescimento 
            do seu negócio no mundo digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-coffee-200 group">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-coffee-500 to-coffee-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold text-coffee-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-coffee-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="bg-coffee-50 px-3 py-1 rounded-full text-sm text-coffee-700 font-medium">
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-coffee-600 to-coffee-700 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-6">
            Precisa de uma Solução Personalizada?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Cada negócio é único. Desenvolvemos soluções sob medida para suas necessidades específicas.
          </p>
          <button className="bg-white text-coffee-700 px-8 py-4 rounded-lg font-semibold hover:bg-coffee-50 transition-all duration-300 shadow-lg hover:shadow-xl">
            Falar com Especialista
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
