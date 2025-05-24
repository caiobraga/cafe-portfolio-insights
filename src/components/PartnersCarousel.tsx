
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const PartnersCarousel = () => {
  const partners = [
    {
      name: 'Vetner',
      description: 'Cuidados Pet',
      logo: 'https://vetner.com.br/assets/logo-vetner.png',
    },
    {
      name: 'Indooh',
      description: 'Mídia em Transporte',
      logo: 'https://indooh.com.br/assets/logo.png',
    },
    {
      name: 'Prêmio da Música Capixaba',
      description: 'Cultura e Música',
      logo: 'https://www.premiodamusicacapixaba.com.br/assets/logo.png',
    },
    {
      name: 'UTI dos Games',
      description: 'Gaming e Tecnologia',
      logo: 'https://utidosgames.com.br/assets/logo.png',
    },
    {
      name: 'GB Projeto 3D',
      description: 'Modelagem 3D',
      logo: 'https://gb-projeto-3d.vercel.app/assets/logo.png',
    },
    {
      name: 'Prefeituras',
      description: 'Gestão Pública',
      logo: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&h=100&fit=crop',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Empresas que Confiam em Nós
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Temos o orgulho de trabalhar com empresas inovadoras que compartilham nossa paixão por tecnologia
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {partners.map((partner, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="p-1">
                  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 h-32 flex flex-col items-center justify-center border border-orange-100 hover:border-[#DF6E2B]">
                    <div className="h-12 mb-2 flex items-center">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-h-12 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&q=80&auto=format`;
                        }}
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-sm font-semibold text-gray-900">{partner.name}</h3>
                      <p className="text-xs text-gray-600">{partner.description}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default PartnersCarousel;
