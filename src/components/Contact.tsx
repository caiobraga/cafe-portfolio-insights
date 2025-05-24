
import { Mail, Phone, MapPin, Send, Coffee } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "contato@codigocomcafe.com",
      link: "mailto:contato@codigocomcafe.com"
    },
    {
      icon: Phone,
      title: "Telefone",
      value: "+55 (11) 99999-9999",
      link: "tel:+5511999999999"
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "São Paulo, SP",
      link: "#"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-coffee-50 to-coffee-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-coffee-900 mb-6">
            Vamos Conversar?
          </h2>
          <p className="text-xl text-coffee-700 max-w-3xl mx-auto leading-relaxed">
            Está pronto para transformar sua ideia em realidade? Entre em contato conosco 
            e vamos tomar um café enquanto discutimos seu projeto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Informações de Contato */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-coffee-900 mb-6">
                Entre em Contato
              </h3>
              <p className="text-coffee-600 mb-8 leading-relaxed">
                Estamos sempre prontos para novos desafios. Seja para um projeto pequeno 
                ou uma transformação digital completa, queremos ouvir sua ideia.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border-coffee-200">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-coffee-500 to-coffee-600 rounded-lg flex items-center justify-center">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-coffee-900 mb-1">
                          {info.title}
                        </h4>
                        <a 
                          href={info.link}
                          className="text-coffee-600 hover:text-coffee-700 transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-to-r from-coffee-600 to-coffee-700 rounded-2xl p-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Coffee className="h-8 w-8" />
                <h4 className="text-xl font-bold">Café Virtual</h4>
              </div>
              <p className="opacity-90 leading-relaxed">
                Que tal marcarmos um café virtual? Podemos conversar sobre seu projeto 
                em uma videoconferência descontraída e cheia de boas ideias.
              </p>
            </div>
          </div>

          {/* Formulário de Contato */}
          <Card className="shadow-xl border-coffee-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-coffee-900 mb-6">
                Envie sua Mensagem
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-coffee-800 font-medium">
                      Nome
                    </Label>
                    <Input 
                      id="name" 
                      placeholder="Seu nome"
                      className="border-coffee-200 focus:border-coffee-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company" className="text-coffee-800 font-medium">
                      Empresa
                    </Label>
                    <Input 
                      id="company" 
                      placeholder="Sua empresa"
                      className="border-coffee-200 focus:border-coffee-500"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-coffee-800 font-medium">
                    Email
                  </Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="seu@email.com"
                    className="border-coffee-200 focus:border-coffee-500"
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="text-coffee-800 font-medium">
                    Assunto
                  </Label>
                  <Input 
                    id="subject" 
                    placeholder="Como podemos ajudar?"
                    className="border-coffee-200 focus:border-coffee-500"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-coffee-800 font-medium">
                    Mensagem
                  </Label>
                  <Textarea 
                    id="message" 
                    placeholder="Conte-nos mais sobre seu projeto..."
                    rows={6}
                    className="border-coffee-200 focus:border-coffee-500"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-coffee-600 hover:bg-coffee-700 text-white py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
