
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { 
  MessageSquare, 
  Image, 
  Code, 
  FileText, 
  Music, 
  Video, 
  Database, 
  Brain, 
  Layers, 
  Lightbulb 
} from "lucide-react";

interface CategoryIconProps {
  category: {
    id: string;
    name: string;
    slug: string;
    icon: string;
    count: number;
  };
  className?: string;
  asFilter?: boolean;
  onClick?: () => void;
}

const iconMap: Record<string, React.ReactNode> = {
  chatbots: <MessageSquare size={24} />,
  imageGenerators: <Image size={24} />,
  codingTools: <Code size={24} />,
  writingTools: <FileText size={24} />,
  audioTools: <Music size={24} />,
  videoTools: <Video size={24} />,
  dataTools: <Database size={24} />,
  researchTools: <Brain size={24} />,
  productivity: <Layers size={24} />,
  creativity: <Lightbulb size={24} />,
};

const colorVariants: Record<string, string> = {
  chatbots: "bg-ai-purple text-white",
  imageGenerators: "bg-ai-blue text-white",
  codingTools: "bg-ai-green text-white", 
  writingTools: "bg-ai-orange text-white",
  audioTools: "bg-ai-pink text-white",
  videoTools: "bg-purple-500 text-white",
  dataTools: "bg-teal-500 text-white",
  researchTools: "bg-amber-500 text-white",
  productivity: "bg-cyan-500 text-white",
  creativity: "bg-rose-500 text-white",
};

const CategoryIcon = ({ category, className, asFilter = false, onClick }: CategoryIconProps) => {
  const icon = iconMap[category.icon] || <MessageSquare size={24} />;
  const colorClass = colorVariants[category.icon] || "bg-gray-500 text-white";
  
  const content = (
    <>
      <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-3", colorClass)}>
        {icon}
      </div>
      <h3 className="text-sm font-medium">{category.name}</h3>
      <p className="text-xs text-muted-foreground">{category.count} tools</p>
    </>
  );

  if (asFilter || onClick) {
    return (
      <div 
        onClick={onClick}
        className={cn(
          "flex flex-col items-center justify-center p-5 rounded-lg hover:shadow-md transition-all duration-200 bg-white dark:bg-gray-800 border border-border cursor-pointer", 
          className
        )}
      >
        {content}
      </div>
    );
  }
  
  return (
    <Link 
      to={`/categories/${category.slug}`} 
      className={cn(
        "flex flex-col items-center justify-center p-5 rounded-lg hover:shadow-md transition-all duration-200 bg-white dark:bg-gray-800 border border-border", 
        className
      )}
    >
      {content}
    </Link>
  );
};

export default CategoryIcon;
