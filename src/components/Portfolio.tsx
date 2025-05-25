import ProjectCard from './ProjectCard';

const Portfolio = () => {
  const projects = [
    {
      title: "CAL IA APP",
      description: "Aplicativo de inteligência artificial para controle de calorias, baseado no escaneamento de pratos.",
      technologies: ["React Native", "AI", "Machine Learning", "Firebase"],
      status: "Concluído" as const,
      date: "2024",
      githubUrl: "https://github.com/codigo-com-cafe/cal_ai",
      image: "https://github.com/user-attachments/assets/0e0d35e1-a664-4ab4-a71d-ba5500b72845"
    },
    {
      title: "MANGUEY APP",
      description: "Aplicativo voltado para um evento internacional que exibe produtos de uma determinada empresa.",
      technologies: ["React Native", "Expo", "TypeScript"],
      status: "Concluído" as const,
      date: "2024",
      githubUrl: "https://github.com/codigo-com-cafe/mangueyapp",
      image: "https://github.com/user-attachments/assets/2e15654f-ca8b-4c99-8f57-837c8e17da54"
    },
    {
      title: "COLINK",
      description: "Plataforma de gerenciamento de arquivos para Prefeituras.",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      status: "Concluído" as const,
      date: "2024",
      githubUrl: "https://github.com/codigo-com-cafe/colink",
      image: "https://github.com/user-attachments/assets/a8d73ae2-65f6-47e8-8396-ee8f4604154a"
    },
    {
      title: "DATA GEOSIS",
      description: "Ferramenta para análise de dados geoespaciais.",
      technologies: ["Python", "React", "GIS", "PostgreSQL"],
      status: "Concluído" as const,
      date: "2024",
      githubUrl: "https://github.com/codigo-com-cafe/geosis_web2",
      image: "https://github.com/user-attachments/assets/12f286e1-5716-42f6-a82e-acde8ff7d2dd"
    },
    {
      title: "PRÊMIO DA MÚSICA CAPIXABA",
      description: "Plataforma para organização e gestão do Prêmio da Música Capixaba.",
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      status: "Concluído" as const,
      date: "2024",
      githubUrl: "https://github.com/codigo-com-cafe/premio-da-musica-capixaba",
      liveUrl: "https://www.premiodamusicacapixaba.com.br/",
      image: "https://github.com/user-attachments/assets/f70c5338-474b-4558-92d1-aa430fcec2d7"
    },
    {
      title: "VETNERS APP",
      description: "Aplicativo para gerenciamento de cuidados pet.",
      technologies: ["React Native", "Node.js", "PostgreSQL", "Firebase"],
      status: "Concluído" as const,
      date: "2024",
      githubUrl: "https://github.com/codigo-com-cafe/vetners_app",
      liveUrl: "https://vetner.com.br/",
      image: "https://github.com/user-attachments/assets/db8628d0-455a-4931-b0eb-57f965692f7d"
    },
    {
      title: "INDOOH APP",
      description: "Aplicativo para gerenciamento de mídia em carros de transporte por aplicativo.",
      technologies: ["React Native", "Node.js", "MongoDB", "IoT"],
      status: "Concluído" as const,
      date: "2024",
      githubUrl: "https://github.com/codigo-com-cafe/indooh_app",
      liveUrl: "https://indooh.com.br/",
      image: "https://github.com/user-attachments/assets/1865a6ff-876e-4ef4-8d0a-eb2c4527901b"
    },
    {
      title: "UTI DOS GAMES",
      description: "Landing page para uma empresa local de games.",
      technologies: ["React", "Tailwind CSS", "TypeScript"],
      status: "Concluído" as const,
      date: "2024",
      githubUrl: "https://github.com/codigo-com-cafe/uti_games",
      liveUrl: "https://utidosgames.com.br/",
      image: "https://github.com/user-attachments/assets/f3783d09-97de-4a1e-b3fa-c8dd87cfe4cc"
    },
    {
      title: "GB PROJETO 3D",
      description: "Ferramenta para visualização e edição de modelos 3D de roupas.",
      technologies: ["Three.js", "React", "WebGL", "TypeScript"],
      status: "Concluído" as const,
      date: "2024",
      githubUrl: "https://github.com/codigo-com-cafe/gb_projeto_3d",
      liveUrl: "https://gb-projeto-3d.vercel.app/",
      image: "https://github.com/user-attachments/assets/af3cdf8f-affa-4da2-a2a7-087a8fe97954"
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossos Projetos
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
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
          <p className="text-lg text-gray-700 mb-8">
            Interessado em ver mais projetos ou iniciar o seu?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-[#DF6E2B] hover:bg-[#c5611f] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Ver Todos os Projetos
            </button>
            <button 
              onClick={scrollToContact}
              className="border-2 border-[#DF6E2B] text-[#DF6E2B] hover:bg-orange-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
