
import ProjectCard from './ProjectCard';

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Moderno",
      description: "Plataforma completa de e-commerce com design responsivo, sistema de pagamentos integrado e painel administrativo avançado.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      status: "Concluído" as const,
      date: "Dezembro 2023",
      githubUrl: "https://github.com/codigo-com-cafe",
      liveUrl: "https://projeto-demo.com"
    },
    {
      title: "Dashboard Analytics",
      description: "Sistema de análise de dados em tempo real com visualizações interativas e relatórios personalizáveis para tomada de decisões.",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Chart.js", "Docker"],
      status: "Concluído" as const,
      date: "Novembro 2023",
      githubUrl: "https://github.com/codigo-com-cafe",
      liveUrl: "https://dashboard-demo.com"
    },
    {
      title: "App Mobile Fitness",
      description: "Aplicativo móvel para acompanhamento de exercícios, nutrição e metas de saúde com sincronização em tempo real.",
      technologies: ["React Native", "Firebase", "Redux", "Expo", "TypeScript"],
      status: "Em Desenvolvimento" as const,
      date: "Janeiro 2024",
      githubUrl: "https://github.com/codigo-com-cafe"
    },
    {
      title: "Sistema de Gestão",
      description: "ERP completo para pequenas e médias empresas com módulos de vendas, estoque, financeiro e recursos humanos.",
      technologies: ["Angular", "Spring Boot", "MySQL", "AWS", "Material UI"],
      status: "Concluído" as const,
      date: "Outubro 2023",
      githubUrl: "https://github.com/codigo-com-cafe",
      liveUrl: "https://erp-demo.com"
    },
    {
      title: "Plataforma Educacional",
      description: "Sistema de ensino à distância com videoaulas, exercícios interativos e acompanhamento de progresso dos alunos.",
      technologies: ["Next.js", "Prisma", "Supabase", "Stripe", "Mux"],
      status: "Em Desenvolvimento" as const,
      date: "Fevereiro 2024",
      githubUrl: "https://github.com/codigo-com-cafe"
    },
    {
      title: "Marketplace Digital",
      description: "Plataforma que conecta fornecedores e compradores com sistema de avaliações, chat integrado e pagamentos seguros.",
      technologies: ["Laravel", "Vue.js", "Redis", "PayPal", "Bootstrap"],
      status: "Planejado" as const,
      date: "Março 2024"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-coffee-50 to-coffee-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-coffee-900 mb-6">
            Nossos Projetos
          </h2>
          <p className="text-xl text-coffee-700 max-w-3xl mx-auto leading-relaxed">
            Explore alguns dos projetos que desenvolvemos com paixão e dedicação. 
            Cada solução é única e pensada especialmente para atender as necessidades dos nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-coffee-600 mb-8">
            Interessado em ver mais projetos ou iniciar o seu?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-coffee-600 hover:bg-coffee-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Ver Todos os Projetos
            </button>
            <button className="border-2 border-coffee-600 text-coffee-700 hover:bg-coffee-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
