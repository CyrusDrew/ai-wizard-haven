import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Search, Calendar, Clock, Eye, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import HotArticlesSection from '@/components/sections/HotArticlesSection';

const Articles = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data for articles by category
  const articleCategories = [
    {
      id: 'tutorials',
      name: 'AI使用教程',
      articles: [
        {
          id: '1',
          title: 'ChatGPT新手完全指南：从入门到精通',
          excerpt: '详细介绍ChatGPT的基本功能、高级技巧和实际应用场景...',
          image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
          author: 'AI专家',
          date: '2024-01-15',
          readTime: '10分钟',
          views: 1200,
          tags: ['ChatGPT', '教程', '入门']
        },
        {
          id: '2',
          title: 'Midjourney绘图技巧：打造专业级AI艺术作品',
          excerpt: '学习Midjourney的高级提示词技巧，创作令人惊艳的AI艺术作品...',
          image: 'https://images.unsplash.com/photo-1686191128892-fd6e0c3a2889?auto=format&fit=crop&w=800&q=80',
          author: 'AI艺术家',
          date: '2024-01-10',
          readTime: '15分钟',
          views: 890,
          tags: ['Midjourney', '绘图', 'AI艺术']
        }
      ]
    },
    {
      id: 'docs',
      name: '学习文档',
      articles: [
        {
          id: '3',
          title: '深度学习基础：神经网络原理详解',
          excerpt: '从零开始理解神经网络的工作原理和基本概念...',
          image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80',
          author: 'ML研究员',
          date: '2024-01-08',
          readTime: '25分钟',
          views: 2100,
          tags: ['深度学习', '神经网络', '理论']
        },
        {
          id: '4',
          title: 'Transformer架构深入解析',
          excerpt: '详细解读Transformer模型的核心机制和应用...',
          image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80',
          author: 'AI研究员',
          date: '2024-01-05',
          readTime: '30分钟',
          views: 1560,
          tags: ['Transformer', '机器学习', '架构']
        }
      ]
    },
    {
      id: 'reviews',
      name: 'AI工具评测',
      articles: [
        {
          id: '5',
          title: '2024年最佳AI写作工具对比评测',
          excerpt: '全面对比市面上主流AI写作工具的功能、价格和使用体验...',
          image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
          author: '工具评测师',
          date: '2024-01-12',
          readTime: '20分钟',
          views: 1890,
          tags: ['评测', 'AI写作', '工具对比']
        },
        {
          id: '6',
          title: 'Claude vs ChatGPT：哪个更适合你？',
          excerpt: '详细对比Claude和ChatGPT的优缺点，帮你选择最合适的AI助手...',
          image: 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?auto=format&fit=crop&w=800&q=80',
          author: 'AI分析师',
          date: '2024-01-07',
          readTime: '12分钟',
          views: 2340,
          tags: ['Claude', 'ChatGPT', '对比']
        }
      ]
    },
    {
      id: 'news',
      name: 'AI最新资讯',
      articles: [
        {
          id: '7',
          title: 'OpenAI发布GPT-4 Turbo：性能提升成本降低',
          excerpt: 'OpenAI最新发布的GPT-4 Turbo带来了哪些重要改进...',
          image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
          author: 'AI记者',
          date: '2024-01-14',
          readTime: '8分钟',
          views: 3200,
          tags: ['OpenAI', 'GPT-4', '新闻']
        },
        {
          id: '8',
          title: 'Google Gemini正式发布：挑战GPT-4的新选择',
          excerpt: 'Google推出的Gemini模型有哪些亮点和创新功能...',
          image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&w=800&q=80',
          author: 'AI记者',
          date: '2024-01-11',
          readTime: '10分钟',
          views: 2800,
          tags: ['Google', 'Gemini', '发布']
        }
      ]
    }
  ];

  // Real-time news data for sidebar
  const realtimeNews = [
    {
      id: 'news1',
      title: 'Microsoft投资100亿美元发展AI技术',
      time: '2小时前',
      category: '投资新闻'
    },
    {
      id: 'news2',
      title: 'AI芯片市场预计2025年将达到1000亿美元',
      time: '4小时前',
      category: '市场分析'
    },
    {
      id: 'news3',
      title: '欧盟通过AI法案：全球首个AI监管框架',
      time: '6小时前',
      category: '政策法规'
    },
    {
      id: 'news4',
      title: 'Anthropic发布Claude 3：多模态AI的新突破',
      time: '8小时前',
      category: '产品发布'
    },
    {
      id: 'news5',
      title: 'AI在医疗诊断中的准确率超过95%',
      time: '10小时前',
      category: '技术突破'
    }
  ];

  const allArticles = articleCategories.flatMap(category => 
    category.articles.map(article => ({ ...article, category: category.name }))
  );

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">AI文章中心</h1>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            探索最新的AI技术教程、深度学习文档、工具评测和行业资讯
          </p>
          
          {/* Search */}
          <div className="relative max-w-md mb-6">
            <Input
              type="text"
              placeholder="搜索文章..."
              className="pr-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content - 3/4 width */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="all">全部</TabsTrigger>
                <TabsTrigger value="tutorials">使用教程</TabsTrigger>
                <TabsTrigger value="docs">学习文档</TabsTrigger>
                <TabsTrigger value="reviews">工具评测</TabsTrigger>
                <TabsTrigger value="news">最新资讯</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all">
                <div className="grid grid-cols-1 gap-6 mt-6">
                  {allArticles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              </TabsContent>
              
              {articleCategories.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <div className="grid grid-cols-1 gap-6 mt-6">
                    {category.articles.map((article) => (
                      <ArticleCard key={article.id} article={article} />
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Sidebar - 1/4 width */}
          <div className="lg:col-span-1 space-y-6">
            {/* Hot Articles */}
            <HotArticlesSection />
            
            {/* Real-time News */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp size={20} />
                  实时资讯
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-80">
                  <div className="space-y-4">
                    {realtimeNews.map((news) => (
                      <div key={news.id} className="border-b border-border pb-3 last:border-b-0">
                        <h4 className="text-sm font-medium line-clamp-2 hover:text-primary cursor-pointer transition-colors">
                          {news.title}
                        </h4>
                        <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                          <Badge variant="outline" className="text-xs">
                            {news.category}
                          </Badge>
                          <span>{news.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const ArticleCard = ({ article }: { article: any }) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link to={`/articles/${article.id}`} className="md:col-span-1">
          <div className="aspect-video bg-muted">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover transition-transform hover:scale-105"
            />
          </div>
        </Link>
        
        <CardContent className="md:col-span-2 p-5">
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              {article.tags.slice(0, 2).map((tag: string) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <Link to={`/articles/${article.id}`}>
              <h3 className="font-semibold text-lg line-clamp-2 hover:text-primary transition-colors">
                {article.title}
              </h3>
            </Link>
            
            <p className="text-muted-foreground line-clamp-2 text-sm">
              {article.excerpt}
            </p>
            
            <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  {article.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {article.readTime}
                </span>
              </div>
              <span className="flex items-center gap-1">
                <Eye size={12} />
                {article.views}
              </span>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default Articles;
