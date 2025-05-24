
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp } from 'lucide-react';
import HotArticleCard from '@/components/card/HotArticleCard';

const hotArticles = [
  {
    id: '1',
    title: 'ChatGPT新手完全指南：从入门到精通',
    views: 1200,
    readTime: '10分钟',
    category: 'AI教程'
  },
  {
    id: '2', 
    title: '2024年最佳AI写作工具对比评测',
    views: 1890,
    readTime: '20分钟',
    category: '工具评测'
  },
  {
    id: '3',
    title: 'OpenAI发布GPT-4 Turbo：性能提升成本降低',
    views: 3200,
    readTime: '8分钟',
    category: 'AI资讯'
  },
  {
    id: '4',
    title: 'Midjourney绘图技巧：打造专业级AI艺术作品',
    views: 890,
    readTime: '15分钟',
    category: 'AI艺术'
  },
  {
    id: '5',
    title: 'Claude vs ChatGPT：哪个更适合你？',
    views: 2340,
    readTime: '12分钟',
    category: '对比分析'
  }
];

interface HotArticlesSectionProps {
  className?: string;
  showTitle?: boolean;
}

const HotArticlesSection = ({ className = '', showTitle = true }: HotArticlesSectionProps) => {
  return (
    <Card className={`${className}`}>
      {showTitle && (
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-lg">
            <TrendingUp size={20} className="text-red-500" />
            热门文章
          </CardTitle>
        </CardHeader>
      )}
      <CardContent className={showTitle ? "pt-0" : ""}>
        <div className="space-y-3">
          {hotArticles.map((article, index) => (
            <HotArticleCard 
              key={article.id}
              {...article}
              isHot={index < 3}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default HotArticlesSection;
