
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingUp } from 'lucide-react';
import HotArticleCard from '@/components/card/HotArticleCard';

const hotArticles24h = [
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
  }
];

const hotArticles7d = [
  {
    id: '4',
    title: 'Midjourney绘图技巧：打造专业级AI艺术作品',
    views: 8900,
    readTime: '15分钟',
    category: 'AI艺术'
  },
  {
    id: '5',
    title: 'Claude vs ChatGPT：哪个更适合你？',
    views: 12340,
    readTime: '12分钟',
    category: '对比分析'
  },
  {
    id: '6',
    title: 'AI编程助手全面对比：GitHub Copilot vs Cursor',
    views: 9800,
    readTime: '18分钟',
    category: '开发工具'
  },
  {
    id: '7',
    title: '如何用AI写出专业的技术文档',
    views: 7600,
    readTime: '14分钟',
    category: 'AI写作'
  },
  {
    id: '8',
    title: 'Stable Diffusion 3.0：下一代AI图像生成',
    views: 15200,
    readTime: '16分钟',
    category: 'AI图像'
  }
];

interface HotArticlesSectionProps {
  className?: string;
  showTitle?: boolean;
}

const HotArticlesSection = ({ className = '', showTitle = true }: HotArticlesSectionProps) => {
  const [activeTab, setActiveTab] = useState('24h');

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
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="24h" className="text-xs">24小时</TabsTrigger>
            <TabsTrigger value="7d" className="text-xs">7天</TabsTrigger>
          </TabsList>
          
          <TabsContent value="24h" className="mt-0">
            <div className="space-y-3">
              {hotArticles24h.map((article, index) => (
                <HotArticleCard 
                  key={article.id}
                  {...article}
                  isHot={index < 2}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="7d" className="mt-0">
            <div className="space-y-3">
              {hotArticles7d.map((article, index) => (
                <HotArticleCard 
                  key={article.id}
                  {...article}
                  isHot={index < 3}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default HotArticlesSection;
