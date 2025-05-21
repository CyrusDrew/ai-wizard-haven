
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Tag } from "@/components/ui/tag";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface ToolCardProps {
  id: string;
  name: string;
  description: string;
  category: string;
  categorySlug: string;
  tags: string[];
  rating: number;
  image: string;
  className?: string;
  featured?: boolean;
  colorVariant?: 'purple' | 'blue' | 'pink' | 'orange' | 'green';
}

const ToolCard = ({ 
  id, 
  name, 
  description, 
  category,
  categorySlug,
  tags, 
  rating, 
  image,
  className,
  featured = false,
  colorVariant = 'purple'
}: ToolCardProps) => {
  const colorClasses = {
    purple: "from-ai-purple to-ai-blue",
    blue: "from-ai-blue to-cyan-400",
    pink: "from-ai-pink to-ai-purple",
    orange: "from-ai-orange to-yellow-500",
    green: "from-ai-green to-teal-500"
  };

  const tagColorMap = {
    0: 'blue',
    1: 'purple',
    2: 'pink',
    3: 'orange',
    4: 'green'
  } as const;
  
  return (
    <Link to={`/tools/${id}`} className={cn("tool-card overflow-hidden flex flex-col", className)}>
      <div className={cn(
        "h-40 relative overflow-hidden",
        featured && "animate-pulse-glow"
      )}>
        {image ? (
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className={cn(
            "w-full h-full bg-gradient-to-br",
            colorClasses[colorVariant]
          )}></div>
        )}
        <div className="absolute top-2 left-2">
          <Tag 
            to={`/categories/${categorySlug}`} 
            size="sm" 
            variant={`ai.${colorVariant}` as any}
          >
            {category}
          </Tag>
        </div>
        {featured && (
          <Badge className="absolute top-2 right-2 bg-ai-orange text-white border-0">
            Featured
          </Badge>
        )}
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-semibold text-lg">{name}</h3>
          <div className="flex items-center">
            <Star size={14} className="text-amber-400 fill-amber-400" />
            <span className="text-sm ml-1">{rating.toFixed(1)}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{description}</p>
        <div className="mt-auto pt-2 flex flex-wrap gap-1">
          {tags.slice(0, 3).map((tag, i) => (
            <Tag 
              key={tag} 
              to={`/tag/${tag.toLowerCase()}`}
              size="sm" 
              variant={`ai.${tagColorMap[i % 5]}`}
            >
              {tag}
            </Tag>
          ))}
          {tags.length > 3 && (
            <span className="text-xs text-muted-foreground self-center">+{tags.length - 3}</span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ToolCard;
