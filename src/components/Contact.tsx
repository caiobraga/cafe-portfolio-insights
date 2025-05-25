
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Coffee, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import confetti from 'canvas-confetti';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    subject: '',
    message: ''
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#DF6E2B', '#F5A623', '#B85A1F', '#8B4513', '#A0522D']
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('codigo-com-cafe-contacts')
        .insert([{
          name: formData.name,
          company: formData.company || null,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        }]);

      if (error) {
        throw error;
      }

      // Trigger confetti and show success message
      triggerConfetti();
      setShowSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        company: '',
        email: '',
        subject: '',
        message: ''
      });

      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato! Retornaremos em breve.",
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);

    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast({
        title: "Erro ao enviar",
        description: "Ocorreu um erro ao enviar sua mensagem. Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-coffee-50 to-coffee-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-coffee-400 rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-coffee-300 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-coffee-500 rounded-full"></div>
        <div className="absolute bottom-40 right-10 w-14 h-14 bg-coffee-400 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-coffee-200/50 px-4 py-2 rounded-full mb-6">
            <Coffee className="h-5 w-5 text-coffee-600" />
            <span className="text-coffee-700 font-medium">Vamos Conversar</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-coffee-900 mb-6 leading-tight">
            Transforme sua <span className="text-coffee-600">Ideia</span> em Realidade
          </h2>
          <p className="text-xl text-coffee-700 max-w-3xl mx-auto leading-relaxed">
            Está pronto para dar vida ao seu projeto? Entre em contato conosco 
            e vamos tomar um café enquanto discutimos suas ideias inovadoras.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Informações de Contato */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-coffee-900 mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-coffee-500 to-coffee-600 rounded-full"></div>
                Entre em Contato
              </h3>
              <p className="text-coffee-600 mb-8 leading-relaxed text-lg">
                Estamos sempre prontos para novos desafios. Seja para um projeto pequeno 
                ou uma transformação digital completa, queremos ouvir sua ideia.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-500 border-coffee-200 group hover:border-coffee-400 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-coffee-500 to-coffee-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <info.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-coffee-900 mb-2 text-lg">
                          {info.title}
                        </h4>
                        <a 
                          href={info.link}
                          className="text-coffee-600 hover:text-coffee-700 transition-colors text-lg font-medium"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-to-r from-coffee-600 via-coffee-700 to-coffee-600 rounded-3xl p-10 text-white shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Coffee className="h-8 w-8" />
                </div>
                <h4 className="text-2xl font-bold">Café Virtual</h4>
              </div>
              <p className="opacity-90 leading-relaxed text-lg">
                Que tal marcarmos um café virtual? Podemos conversar sobre seu projeto 
                em uma videoconferência descontraída e cheia de boas ideias.
              </p>
            </div>
          </div>

          {/* Formulário de Contato */}
          <Card className="shadow-2xl border-coffee-200 bg-white/90 backdrop-blur-sm relative overflow-hidden">
            {showSuccess && (
              <div className="absolute inset-0 bg-green-50/95 backdrop-blur-sm z-10 flex items-center justify-center">
                <div className="text-center p-8">
                  <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6 animate-bounce" />
                  <h3 className="text-3xl font-bold text-green-700 mb-4">Parabéns!</h3>
                  <p className="text-green-600 text-lg">
                    Sua mensagem foi enviada com sucesso! <br />
                    Retornaremos em breve.
                  </p>
                </div>
              </div>
            )}
            
            <CardContent className="p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-8 bg-gradient-to-b from-coffee-500 to-coffee-600 rounded-full"></div>
                <h3 className="text-3xl font-bold text-coffee-900">
                  Envie sua Mensagem
                </h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="name" className="text-coffee-800 font-semibold text-lg">
                      Nome *
                    </Label>
                    <Input 
                      id="name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Seu nome completo"
                      className="border-coffee-200 focus:border-coffee-500 h-12 text-lg"
                      required
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="company" className="text-coffee-800 font-semibold text-lg">
                      Empresa
                    </Label>
                    <Input 
                      id="company" 
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Sua empresa"
                      className="border-coffee-200 focus:border-coffee-500 h-12 text-lg"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="email" className="text-coffee-800 font-semibold text-lg">
                    Email *
                  </Label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu@email.com"
                    className="border-coffee-200 focus:border-coffee-500 h-12 text-lg"
                    required
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="subject" className="text-coffee-800 font-semibold text-lg">
                    Assunto *
                  </Label>
                  <Input 
                    id="subject" 
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Como podemos ajudar?"
                    className="border-coffee-200 focus:border-coffee-500 h-12 text-lg"
                    required
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="message" className="text-coffee-800 font-semibold text-lg">
                    Mensagem *
                  </Label>
                  <Textarea 
                    id="message" 
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Conte-nos mais sobre seu projeto..."
                    rows={6}
                    className="border-coffee-200 focus:border-coffee-500 text-lg resize-none"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-coffee-600 to-coffee-700 hover:from-coffee-700 hover:to-coffee-800 text-white py-4 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] h-14"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Enviando...
                    </div>
                  ) : (
                    <>
                      <Send className="h-6 w-6 mr-3" />
                      Enviar Mensagem
                    </>
                  )}
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
