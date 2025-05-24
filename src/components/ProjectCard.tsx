
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
  image?: string;
}

const ProjectCard = ({ 
  title, 
  description, 
  technologies, 
  status, 
  date, 
  githubUrl, 
  liveUrl,
  image 
}: ProjectCardProps) => {
  const statusColors = {
    'Concluído': 'bg-green-100 text-green-800 border-green-200',
    'Em Desenvolvimento': 'bg-yellow-100 text-yellow-800 border-yellow-200',
    'Planejado': 'bg-blue-100 text-blue-800 border-blue-200'
  };

  return (
    <Card className="h-full border-orange-200 hover:shadow-lg transition-all duration-300 hover:border-[#DF6E2B] bg-white">
      {image && (
        <div className="w-full h-48 overflow-hidden rounded-t-lg">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg font-semibold text-gray-900 line-clamp-2">
            {title}
          </CardTitle>
          <Badge className={`ml-2 ${statusColors[status]} text-xs font-medium`}>
            {status}
          </Badge>
        </div>
        <div className="flex items-center text-sm text-gray-600 mt-2">
          <Calendar className="h-4 w-4 mr-1" />
          {date}
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <p className="text-gray-700 text-sm mb-4 line-clamp-3">{description}</p>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {technologies.map((tech, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="text-xs bg-orange-100 text-[#DF6E2B] border-orange-200"
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
              className="flex-1 border-orange-300 text-gray-700 hover:bg-orange-50"
              onClick={() => window.open(githubUrl, '_blank')}
            >
              <Github className="h-4 w-4 mr-1" />
              GitHub
            </Button>
          )}
          {liveUrl && (
            <Button 
              size="sm" 
              className="flex-1 bg-[#DF6E2B] hover:bg-[#c5611f] text-white"
              onClick={() => window.open(liveUrl, '_blank')}
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
