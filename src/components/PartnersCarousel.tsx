import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { useEffect } from 'react';
import type { EmblaCarouselType } from 'embla-carousel';

const PartnersCarousel = () => {
  const partners = [
    {
      name: 'Vetner',
      description: 'Cuidados Pet',
      logo: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&h=100&fit=crop',
    },
    {
      name: 'Indooh',
      description: 'Mídia em Transporte',
      logo: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&h=100&fit=crop',
    },
    {
      name: 'Prêmio da Música Capixaba',
      description: 'Cultura e Música',
      logo: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=200&h=100&fit=crop',
    },
    {
      name: 'UTI dos Games',
      description: 'Gaming e Tecnologia',
      logo: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=200&h=100&fit=crop',
    },
    {
      name: 'Prefeituras',
      description: 'Gestão Pública',
      logo: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&h=100&fit=crop',
    },
  ];

  const createAutoplayPlugin = () => {
    return {
      name: 'autoplay',
      options: { active: true, breakpoints: {} },
      init: (embla: any) => {
        let interval: NodeJS.Timeout;
        
        const autoplay = () => {
          if (embla.canScrollNext()) {
            embla.scrollNext();
          } else {
            embla.scrollTo(0);
          }
        };
        
        const startAutoplay = () => {
          interval = setInterval(autoplay, 3000);
        };
        
        const stopAutoplay = () => {
          if (interval) clearInterval(interval);
        };
        
        embla.on('pointerDown', stopAutoplay);
        embla.on('pointerUp', startAutoplay);
        
        startAutoplay();
        
        return () => {
          stopAutoplay();
        };
      },
      destroy: () => {
        // Cleanup is handled in the init return function
      }
    };
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
          plugins={[createAutoplayPlugin()]}
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
        </Carousel>
      </div>
    </section>
  );
};

export default PartnersCarousel;
