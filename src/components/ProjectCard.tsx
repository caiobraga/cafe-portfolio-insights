
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Calendar } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  status: 'Concluído' | 'Em Desenvolvimento' | 'Planejado';
  date: string;
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectCard = ({ 
  title, 
  description, 
  technologies, 
  status, 
  date, 
  githubUrl, 
  liveUrl 
}: ProjectCardProps) => {
  const statusColors = {
    'Concluído': 'bg-green-100 text-green-800 border-green-200',
    'Em Desenvolvimento': 'bg-yellow-100 text-yellow-800 border-yellow-200',
    'Planejado': 'bg-blue-100 text-blue-800 border-blue-200'
  };

  return (
    <Card className="h-full border-coffee-200 hover:shadow-lg transition-all duration-300 hover:border-coffee-300">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg font-semibold text-coffee-900 line-clamp-2">
            {title}
          </CardTitle>
          <Badge className={`ml-2 ${statusColors[status]} text-xs font-medium`}>
            {status}
          </Badge>
        </div>
        <div className="flex items-center text-sm text-coffee-600 mt-2">
          <Calendar className="h-4 w-4 mr-1" />
          {date}
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <p className="text-coffee-700 text-sm mb-4 line-clamp-3">{description}</p>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {technologies.map((tech, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="text-xs bg-coffee-100 text-coffee-700 border-coffee-200"
            >
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-2">
          {githubUrl && (
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1 border-coffee-300 text-coffee-700 hover:bg-coffee-50"
            >
              <Github className="h-4 w-4 mr-1" />
              GitHub
            </Button>
          )}
          {liveUrl && (
            <Button 
              size="sm" 
              className="flex-1 bg-coffee-600 hover:bg-coffee-700 text-white"
            >
              <ExternalLink className="h-4 w-4 mr-1" />
              Ver Projeto
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
