
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const PartnersCarousel = () => {
  const partners = [
    {
      name: 'TechCorp',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop',
    },
    {
      name: 'InnovaSoft',
      logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop',
    },
    {
      name: 'DigitalFlow',
      logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200&h=100&fit=crop',
    },
    {
      name: 'StartupHub',
      logo: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=200&h=100&fit=crop',
    },
    {
      name: 'CloudTech',
      logo: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=200&h=100&fit=crop',
    },
    {
      name: 'WebSolutions',
      logo: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&h=100&fit=crop',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-coffee-900 mb-4">
            Empresas que Confiam em Nós
          </h2>
          <p className="text-coffee-700 max-w-2xl mx-auto">
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
                  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 h-24 flex items-center justify-center">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-12 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
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
