
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogPostProps {
  id: string;
  title: string;
  excerpt: string;
  image?: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  tags: string[];
  className?: string;
}

const BlogPostCard = ({
  id,
  title,
  excerpt,
  image,
  author,
  date,
  readTime,
  tags,
  className,
}: BlogPostProps) => {
  return (
    <Card className={cn("overflow-hidden transition-all hover:shadow-md", className)}>
      <Link to={`/articles/${id}`} className="block">
        <div className="aspect-video bg-muted">
          <img
            src={image || "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"}
            alt={title}
            className="h-full w-full object-cover transition-transform hover:scale-105"
          />
        </div>
      </Link>
      
      <CardContent className="p-5">
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2 mb-2">
            {tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="secondary" className="font-normal">
                {tag}
              </Badge>
            ))}
            {tags.length > 2 && (
              <Badge variant="outline" className="font-normal">
                +{tags.length - 2}
              </Badge>
            )}
          </div>
          
          <Link to={`/articles/${id}`} className="block">
            <h3 className="font-semibold text-xl line-clamp-2 hover:text-primary transition-colors">
              {title}
            </h3>
          </Link>
          
          <p className="text-muted-foreground line-clamp-3 text-sm">
            {excerpt}
          </p>
        </div>
      </CardContent>
      
      <CardFooter className="px-5 py-4 border-t bg-muted/10 flex flex-wrap justify-between items-center">
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback>{author.name[0]}</AvatarFallback>
          </Avatar>
          <div className="text-sm font-medium">{author.name}</div>
        </div>
        <div className="flex items-center text-xs text-muted-foreground gap-3">
          <span className="flex items-center gap-1">
            <Calendar size={14} />
            {date}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {readTime}
          </span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default BlogPostCard;
