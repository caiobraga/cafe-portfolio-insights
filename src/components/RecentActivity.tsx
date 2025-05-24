
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { GitCommit, FileCode, Bug, Star } from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'commit',
    user: 'Carlos Silva',
    action: 'fez commit no projeto',
    target: 'E-commerce Platform',
    time: '2 horas atrás',
    icon: GitCommit,
    color: 'text-green-600'
  },
  {
    id: 2,
    type: 'code',
    user: 'Ana Costa',
    action: 'criou novo componente',
    target: 'Dashboard Admin',
    time: '4 horas atrás',
    icon: FileCode,
    color: 'text-blue-600'
  },
  {
    id: 3,
    type: 'bug',
    user: 'João Santos',
    action: 'corrigiu bug crítico',
    target: 'API Gateway',
    time: '6 horas atrás',
    icon: Bug,
    color: 'text-red-600'
  },
  {
    id: 4,
    type: 'star',
    user: 'Maria Oliveira',
    action: 'finalizou funcionalidade',
    target: 'Mobile App',
    time: '1 dia atrás',
    icon: Star,
    color: 'text-yellow-600'
  }
];

const RecentActivity = () => {
  return (
    <Card className="border-coffee-200">
      <CardHeader className="pb-4">
        <CardTitle className="text-coffee-900 flex items-center gap-2">
          Atividade Recente
          <Badge variant="secondary" className="bg-coffee-100 text-coffee-700">
            {activities.length}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity) => {
          const IconComponent = activity.icon;
          return (
            <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-coffee-50 transition-colors">
              <Avatar className="w-8 h-8 border border-coffee-200">
                <AvatarImage src={`/api/placeholder/32/32`} alt={activity.user} />
                <AvatarFallback className="bg-coffee-100 text-coffee-700 text-xs">
                  {activity.user.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <IconComponent className={`h-4 w-4 ${activity.color}`} />
                  <span className="text-sm font-medium text-coffee-900">{activity.user}</span>
                  <span className="text-sm text-coffee-600">{activity.action}</span>
                </div>
                <p className="text-sm font-medium text-coffee-800">{activity.target}</p>
                <p className="text-xs text-coffee-500 mt-1">{activity.time}</p>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
