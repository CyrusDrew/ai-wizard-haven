import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, Heart, Bookmark, Share, MessageSquare, Send, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import SmallBanners from '@/components/banners/SmallBanners';
import HotToolsList from '@/components/tools/HotToolsList';

// Mock article data since blogPosts might not be available
const mockArticles = [
  {
    id: '1',
    title: 'ChatGPT新手完全指南：从入门到精通',
    excerpt: '详细介绍ChatGPT的基本功能、高级技巧和实际应用场景，帮助新手快速掌握这个强大的AI工具。',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=2000&q=80',
    author: { name: 'AI专家', avatar: '' },
    date: '2024-01-15',
    readTime: '10分钟',
    tags: ['ChatGPT', '教程', '入门']
  },
  {
    id: '2',
    title: 'Midjourney绘图技巧：打造专业级AI艺术作品',
    excerpt: '学习Midjourney的高级提示词技巧，创作令人惊艳的AI艺术作品，从基础操作到高级技法全面覆盖。',
    image: 'https://images.unsplash.com/photo-1686191128892-fd6e0c3a2889?auto=format&fit=crop&w=2000&q=80',
    author: { name: 'AI艺术家', avatar: '' },
    date: '2024-01-10',
    readTime: '15分钟',
    tags: ['Midjourney', '绘图', 'AI艺术']
  },
  {
    id: '3',
    title: '深度学习基础：神经网络原理详解',
    excerpt: '从零开始理解神经网络的工作原理和基本概念，为深入学习AI技术打下坚实基础。',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=2000&q=80',
    author: { name: 'ML研究员', avatar: '' },
    date: '2024-01-08',
    readTime: '25分钟',
    tags: ['深度学习', '神经网络', '理论']
  }
];

// Mock hot articles data
const hotArticles24h = [
  { id: '1', title: 'ChatGPT 4.0最新功能详解', views: 15420, publishTime: '2小时前' },
  { id: '2', title: 'Midjourney V6绘画技巧大全', views: 12350, publishTime: '4小时前' },
  { id: '3', title: 'Claude 3.5 Sonnet性能测试报告', views: 9870, publishTime: '6小时前' },
  { id: '4', title: 'AI写作工具Jasper使用心得', views: 8540, publishTime: '8小时前' },
  { id: '5', title: 'Stable Diffusion本地部署教程', views: 7230, publishTime: '10小时前' },
];

const hotArticles7d = [
  { id: '6', title: 'AI工具大盘点：2024年最值得关注的50个工具', views: 45230, publishTime: '2天前' },
  { id: '7', title: '深度学习入门：从零开始的AI之路', views: 38750, publishTime: '3天前' },
  { id: '8', title: 'GPT-4 vs Claude 3：全面对比分析', views: 32140, publishTime: '4天前' },
  { id: '9', title: 'AI绘画工具选择指南：Midjourney、DALL-E还是Stable Diffusion？', views: 28960, publishTime: '5天前' },
  { id: '10', title: '智能客服机器人搭建完整教程', views: 25840, publishTime: '6天前' },
];

// Mock real-time news
const realtimeNews = [
  { id: '1', title: 'OpenAI发布GPT-4 Turbo最新更新', publishTime: '10分钟前', isHot: true },
  { id: '2', title: 'Google Bard集成Gemini Pro模型', publishTime: '25分钟前', isHot: false },
  { id: '3', title: 'Microsoft Copilot新增图像生成功能', publishTime: '1小时前', isHot: true },
  { id: '4', title: 'Adobe推出AI视频编辑工具Premiere Pro AI', publishTime: '2小时前', isHot: false },
  { id: '5', title: '百度文心一言4.0正式上线', publishTime: '3小时前', isHot: false },
];

// Mock comments data
const mockComments = [
  {
    id: '1',
    user: { name: '张三', avatar: '' },
    content: '这篇文章写得很详细，对我很有帮助！特别是关于AI工具的使用技巧部分。',
    publishTime: '2小时前',
    likes: 15,
    isLiked: false,
  },
  {
    id: '2',
    user: { name: '李四', avatar: '' },
    content: '作者的观点很独到，希望能看到更多这样高质量的内容。期待下一篇文章！',
    publishTime: '4小时前',
    likes: 8,
    isLiked: true,
  },
  {
    id: '3',
    user: { name: '王五', avatar: '' },
    content: '实用性很强，已经按照文章中的方法实践了，效果不错。谢谢分享！',
    publishTime: '6小时前',
    likes: 12,
    isLiked: false,
  },
];

const ArticleDetail = () => {
  const { id } = useParams();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(42);
  const [comments, setComments] = useState(mockComments);
  const [newComment, setNewComment] = useState('');
  const [hotArticleTab, setHotArticleTab] = useState('24h');
  
  console.log('ArticleDetail - Current ID:', id);
  
  // Find the article based on the ID from the URL
  const article = mockArticles.find(post => post.id === id);
  
  console.log('ArticleDetail - Found article:', article);
  
  if (!article) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">文章未找到</h1>
          <p className="text-muted-foreground mb-8">您要查找的文章不存在或已被删除。</p>
          <Button asChild>
            <Link to="/articles">返回文章列表</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  // Related articles (excluding current article)
  const relatedArticles = mockArticles
    .filter(post => post.id !== article.id && post.tags.some(tag => article.tags.includes(tag)))
    .slice(0, 3);

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      const comment = {
        id: String(comments.length + 1),
        user: { name: '当前用户', avatar: '' },
        content: newComment,
        publishTime: '刚刚',
        likes: 0,
        isLiked: false,
      };
      setComments([comment, ...comments]);
      setNewComment('');
    }
  };

  const handleCommentLike = (commentId: string) => {
    setComments(comments.map(comment => 
      comment.id === commentId 
        ? { 
            ...comment, 
            isLiked: !comment.isLiked,
            likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1
          }
        : comment
    ));
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Article Header */}
            <div className="mb-8">
              <div className="flex gap-2 mb-4">
                {article.tags.map(tag => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>
              
              <div className="flex items-center gap-4 mb-6">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={article.author.avatar} alt={article.author.name} />
                  <AvatarFallback>{article.author.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{article.author.name}</div>
                  <div className="text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {article.date}
                    </span>
                  </div>
                </div>
                <div className="ml-auto flex items-center gap-2 text-sm">
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Clock size={14} />
                    {article.readTime}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Featured Image */}
            <div className="mb-8 rounded-lg overflow-hidden">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-auto object-cover aspect-video"
              />
            </div>
            
            {/* Article Content */}
            <div className="mb-12">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg mb-4">{article.excerpt}</p>
                
                <p className="mb-4">
                  随着人工智能技术的不断发展，AI工具已经深入到我们生活和工作的方方面面。从内容创作到数据分析，从图像生成到代码编写，各种AI工具正在重塑着我们的工作方式和创造方式。
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">AI工具的发展历程</h2>
                
                <p className="mb-4">
                  从早期的基于规则的专家系统到如今的大语言模型，AI工具的发展经历了几个重要阶段。当前最受关注的ChatGPT、Claude、Midjourney等工具，代表了AI技术发展的最新成果。
                </p>
                
                <p className="mb-4">
                  这些工具不仅在技术层面有了突破性进展，在用户体验和实用性方面也有了显著提升。用户可以通过自然语言与AI进行交互，获得高质量的输出结果。
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">实际应用场景</h2>
                
                <p className="mb-4">
                  在内容创作领域，AI工具可以帮助写作者生成创意、优化文章结构、提升表达效果。在设计领域，AI绘画工具能够根据文字描述生成精美的图像和艺术作品。在编程领域，AI代码助手可以提高开发效率，减少错误。
                </p>
                
                <p className="mb-4">
                  教育、医疗、金融等传统行业也在积极拥抱AI技术，探索AI工具在各自领域的应用可能性。这种跨行业的普及应用，正在推动整个社会的数字化转型。
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">未来发展趋势</h2>
                
                <p className="mb-8">
                  展望未来，AI工具将变得更加智能化、个性化和专业化。多模态AI的发展将使工具能够同时处理文本、图像、音频等多种数据类型，为用户提供更全面的解决方案。同时，随着技术的成熟和成本的降低，AI工具将更加普及，成为每个人都能使用的基础工具。
                </p>
              </div>
              
              {/* Article Actions */}
              <div className="flex justify-between items-center border-t border-b py-4 my-8">
                <div className="flex gap-4">
                  <Button variant="ghost" size="sm" className="flex gap-2" onClick={handleLike}>
                    <Heart size={18} className={isLiked ? "fill-red-500 text-red-500" : ""} />
                    <span>{likeCount}</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="flex gap-2">
                    <MessageSquare size={18} />
                    <span>{comments.length}</span>
                  </Button>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" onClick={handleBookmark}>
                    <Bookmark size={18} className={isBookmarked ? "fill-primary" : ""} />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share size={18} />
                  </Button>
                </div>
              </div>
              
              {/* Author Bio */}
              <div className="bg-muted/50 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-medium mb-2">关于作者</h3>
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={article.author.avatar} alt={article.author.name} />
                    <AvatarFallback>{article.author.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{article.author.name}</div>
                    <p className="text-sm text-muted-foreground">AI技术研究员和科技作家，专注于人工智能领域的前沿技术研究和实践应用。拥有10年以上的AI行业经验，致力于推广AI技术的普及和应用。</p>
                  </div>
                </div>
              </div>

              {/* Comments Section */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-6">用户评论 ({comments.length})</h3>
                
                {/* Comment Input */}
                <div className="mb-6">
                  <Textarea
                    placeholder="写下你的想法..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="mb-2"
                  />
                  <div className="flex justify-end">
                    <Button onClick={handleCommentSubmit} size="sm">
                      <Send size={14} className="mr-1" />
                      发表评论
                    </Button>
                  </div>
                </div>

                {/* Comments List */}
                <div className="space-y-4">
                  {comments.map((comment) => (
                    <Card key={comment.id}>
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={comment.user.avatar} alt={comment.user.name} />
                              <AvatarFallback>{comment.user.name[0]}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium text-sm">{comment.user.name}</div>
                              <div className="text-xs text-muted-foreground">{comment.publishTime}</div>
                            </div>
                          </div>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => handleCommentLike(comment.id)}
                            className="flex items-center gap-1"
                          >
                            <Heart size={14} className={comment.isLiked ? "fill-red-500 text-red-500" : ""} />
                            <span className="text-xs">{comment.likes}</span>
                          </Button>
                        </div>
                        <p className="text-sm">{comment.content}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Related Articles */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">相关推荐</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map(relatedArticle => (
                  <Card key={relatedArticle.id} className="overflow-hidden hover:shadow-md transition-shadow">
                    <Link to={`/articles/${relatedArticle.id}`}>
                      <div className="aspect-video bg-muted">
                        <img 
                          src={relatedArticle.image} 
                          alt={relatedArticle.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium mb-2 line-clamp-2">{relatedArticle.title}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">{relatedArticle.excerpt}</p>
                      </div>
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Small Banners */}
            <SmallBanners />
            
            {/* Real-time News */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <TrendingUp size={18} className="mr-2 text-red-500" />
                  实时资讯
                </h3>
                <div className="space-y-3">
                  {realtimeNews.map((news) => (
                    <div key={news.id} className="border-b pb-3 last:border-0 last:pb-0">
                      <div className="flex items-start justify-between">
                        <h4 className="font-medium text-sm line-clamp-2 flex-1">
                          {news.isHot && <span className="text-red-500 mr-1">🔥</span>}
                          {news.title}
                        </h4>
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">{news.publishTime}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Hot Articles */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">全站热门文章</h3>
                </div>
                <div className="flex gap-2 mb-4">
                  <Button 
                    variant={hotArticleTab === '24h' ? 'default' : 'outline'} 
                    size="sm"
                    onClick={() => setHotArticleTab('24h')}
                  >
                    24小时
                  </Button>
                  <Button 
                    variant={hotArticleTab === '7d' ? 'default' : 'outline'} 
                    size="sm"
                    onClick={() => setHotArticleTab('7d')}
                  >
                    7天
                  </Button>
                </div>
                <div className="space-y-3">
                  {(hotArticleTab === '24h' ? hotArticles24h : hotArticles7d).map((article, index) => (
                    <div key={article.id} className="border-b pb-3 last:border-0 last:pb-0">
                      <div className="flex items-start gap-2">
                        <span className={`text-sm font-bold w-6 h-6 rounded flex items-center justify-center text-xs ${
                          index < 3 ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-600'
                        }`}>
                          {index + 1}
                        </span>
                        <div className="flex-1">
                          <h4 className="font-medium text-sm line-clamp-2 mb-1">{article.title}</h4>
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <span>{article.publishTime}</span>
                            <span>{article.views.toLocaleString()} 阅读</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Hot Tools List */}
            <HotToolsList />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ArticleDetail;
