
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar } from 'lucide-react';

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
        
        <div className="flex flex-wrap gap-1">
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
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
