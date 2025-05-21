
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Tag } from "@/components/ui/tag";
import { Calendar, Clock } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ColorVariant } from "./ToolCard";

interface BlogPostCardProps {
  id: string;
  title: string;
  excerpt: string;
  author: {
    name: string;
    avatar?: string;
  };
  date: string;
  readTime: string;
  image?: string;
  tags: string[];
  className?: string;
}

const BlogPostCard = ({
  id,
  title,
  excerpt,
  author,
  date,
  readTime,
  image,
  tags,
  className,
}: BlogPostCardProps) => {
  const tagColorMap: Record<number, ColorVariant> = {
    0: 'blue',
    1: 'purple',
    2: 'pink',
    3: 'orange',
    4: 'green'
  };

  return (
    <Link to={`/blog/${id}`} className={cn("blog-card flex flex-col rounded-lg overflow-hidden border border-border hover:shadow-md transition-all duration-200", className)}>
      {image && (
        <div className="h-48 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex flex-wrap gap-1 mb-3">
          {tags.slice(0, 2).map((tag, i) => (
            <Tag 
              key={tag} 
              size="sm" 
              variant={`ai-${tagColorMap[i % 5]}`}
              onClick={(e) => {
                e.preventDefault();
                // Tag link navigation would go here
              }}
            >
              {tag}
            </Tag>
          ))}
        </div>
        <h3 className="font-semibold text-xl mb-2 line-clamp-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{excerpt}</p>
        <div className="flex items-center justify-between mt-auto pt-3 border-t">
          <div className="flex items-center">
            <Avatar className="h-6 w-6 mr-2">
              <AvatarImage src={author.avatar} alt={author.name} />
              <AvatarFallback>{author.name[0]}</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">{author.name}</span>
          </div>
          <div className="flex items-center text-muted-foreground text-xs">
            <Calendar size={14} className="mr-1" />
            <span>{date}</span>
            <span className="mx-1">•</span>
            <Clock size={14} className="mr-1" />
            <span>{readTime}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogPostCard;
