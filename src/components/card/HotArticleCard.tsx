
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye, Clock, TrendingUp } from 'lucide-react';

interface HotArticleCardProps {
  id: string;
  title: string;
  views: number;
  readTime: string;
  category: string;
  isHot?: boolean;
  className?: string;
}

const HotArticleCard = ({ 
  id, 
  title, 
  views, 
  readTime, 
  category, 
  isHot = false,
  className 
}: HotArticleCardProps) => {
  return (
    <Card className={`hover:shadow-md transition-shadow ${className}`}>
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          {isHot && (
            <div className="flex-shrink-0">
              <TrendingUp size={16} className="text-red-500" />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <Link to={`/articles/${id}`}>
              <h4 className="font-medium text-sm line-clamp-2 hover:text-primary transition-colors mb-2">
                {title}
              </h4>
            </Link>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  {category}
                </Badge>
                <span className="flex items-center gap-1">
                  <Clock size={10} />
                  {readTime}
                </span>
              </div>
              <span className="flex items-center gap-1">
                <Eye size={10} />
                {views}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HotArticleCard;
