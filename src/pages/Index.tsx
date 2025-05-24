
import { useState } from 'react';
import DashboardHeader from '@/components/DashboardHeader';
import StatCard from '@/components/StatCard';
import ProjectCard from '@/components/ProjectCard';
import RecentActivity from '@/components/RecentActivity';
import QuickActions from '@/components/QuickActions';
import { 
  FolderOpen, 
  Clock, 
  CheckCircle, 
  TrendingUp,
  BarChart3,
  Users,
  Coffee
} from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'Plataforma completa de e-commerce com sistema de pagamentos integrado, gestão de estoque e painel administrativo.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    status: 'Concluído' as const,
    date: 'Dezembro 2023',
    githubUrl: 'https://github.com/codigo-com-cafe/ecommerce',
    liveUrl: 'https://ecommerce-demo.com'
  },
  {
    title: 'Dashboard Administrativo',
    description: 'Sistema de dashboard para análise de dados e métricas em tempo real com visualizações interativas.',
    technologies: ['Vue.js', 'TypeScript', 'Chart.js', 'Firebase'],
    status: 'Em Desenvolvimento' as const,
    date: 'Janeiro 2024',
    githubUrl: 'https://github.com/codigo-com-cafe/dashboard'
  },
  {
    title: 'API Gateway',
    description: 'Sistema de API Gateway para microserviços com autenticação, rate limiting e monitoramento.',
    technologies: ['Python', 'FastAPI', 'Redis', 'Docker'],
    status: 'Concluído' as const,
    date: 'Novembro 2023',
    githubUrl: 'https://github.com/codigo-com-cafe/api-gateway'
  },
  {
    title: 'Mobile App',
    description: 'Aplicativo mobile para gestão de tarefas e produtividade com sincronização em nuvem.',
    technologies: ['React Native', 'Expo', 'MongoDB', 'AWS'],
    status: 'Planejado' as const,
    date: 'Fevereiro 2024'
  }
];

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-coffee-50 to-orange-50">
      <DashboardHeader onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      
      <main className="p-6 space-y-8 animate-fade-in">
        {/* Bem-vindo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-coffee-600 to-coffee-700 rounded-2xl shadow-xl mr-4">
              <Coffee className="h-8 w-8 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-3xl font-bold text-coffee-900 mb-1">
                Bem-vindo ao Dashboard
              </h1>
              <p className="text-coffee-600 text-lg">
                Código com Café - Desenvolvendo o futuro, uma linha por vez
              </p>
            </div>
          </div>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Projetos Ativos"
            value="12"
            change="+2 este mês"
            icon={FolderOpen}
            color="blue"
          />
          <StatCard
            title="Horas Trabalhadas"
            value="1,247"
            change="+15% vs mês anterior"
            icon={Clock}
            color="green"
          />
          <StatCard
            title="Projetos Concluídos"
            value="45"
            change="8 finalizados este mês"
            icon={CheckCircle}
            color="purple"
          />
          <StatCard
            title="Crescimento"
            value="23%"
            change="Receita mensal"
            icon={TrendingUp}
            color="orange"
          />
        </div>

        {/* Seção Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Projetos Recentes */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-coffee-900 flex items-center gap-2">
                <BarChart3 className="h-6 w-6 text-coffee-600" />
                Projetos em Destaque
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <RecentActivity />
            <QuickActions />
          </div>
        </div>

        {/* Métricas Adicionais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-coffee-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-coffee-900">Equipe</h3>
              <Users className="h-5 w-5 text-coffee-600" />
            </div>
            <div className="text-2xl font-bold text-coffee-900 mb-1">8 pessoas</div>
            <p className="text-coffee-600 text-sm">4 desenvolvedores, 2 designers, 2 gestores</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-coffee-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-coffee-900">Tecnologias</h3>
              <Coffee className="h-5 w-5 text-coffee-600" />
            </div>
            <div className="text-2xl font-bold text-coffee-900 mb-1">15+</div>
            <p className="text-coffee-600 text-sm">React, Node.js, Python, AWS e mais</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-coffee-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-coffee-900">Clientes</h3>
              <TrendingUp className="h-5 w-5 text-coffee-600" />
            </div>
            <div className="text-2xl font-bold text-coffee-900 mb-1">25+</div>
            <p className="text-coffee-600 text-sm">Empresas atendidas com sucesso</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
