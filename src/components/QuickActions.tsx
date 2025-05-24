
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, FileText, Users, Settings, Coffee, Code } from 'lucide-react';

const quickActions = [
  {
    icon: Plus,
    label: 'Novo Projeto',
    description: 'Criar um novo projeto',
    color: 'bg-green-500 hover:bg-green-600'
  },
  {
    icon: FileText,
    label: 'Relatório',
    description: 'Gerar relatório mensal',
    color: 'bg-blue-500 hover:bg-blue-600'
  },
  {
    icon: Users,
    label: 'Equipe',
    description: 'Gerenciar membros',
    color: 'bg-purple-500 hover:bg-purple-600'
  },
  {
    icon: Coffee,
    label: 'Coffee Break',
    description: 'Pausar para um café',
    color: 'bg-coffee-500 hover:bg-coffee-600'
  },
  {
    icon: Code,
    label: 'Code Review',
    description: 'Revisar código pendente',
    color: 'bg-orange-500 hover:bg-orange-600'
  },
  {
    icon: Settings,
    label: 'Configurações',
    description: 'Ajustar preferências',
    color: 'bg-gray-500 hover:bg-gray-600'
  }
];

const QuickActions = () => {
  return (
    <Card className="border-coffee-200">
      <CardHeader>
        <CardTitle className="text-coffee-900">Ações Rápidas</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {quickActions.map((action, index) => {
            const IconComponent = action.icon;
            return (
              <Button
                key={index}
                variant="outline"
                className="h-auto p-4 flex flex-col items-center space-y-2 border-coffee-200 hover:border-coffee-300 hover:bg-coffee-50 transition-all duration-200"
              >
                <div className={`p-2 rounded-lg text-white ${action.color} transition-colors`}>
                  <IconComponent className="h-5 w-5" />
                </div>
                <div className="text-center">
                  <p className="font-medium text-sm text-coffee-900">{action.label}</p>
                  <p className="text-xs text-coffee-600 mt-1">{action.description}</p>
                </div>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;
