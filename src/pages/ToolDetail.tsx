
import { useParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tag } from '@/components/ui/tag';
import { Badge } from '@/components/ui/badge';
import { 
  ExternalLink, 
  ThumbsUp, 
  ThumbsDown, 
  Star, 
  Globe, 
  DollarSign,
  Calendar,
  Share2,
  Flag,
  MessageSquare,
  Check,
  Clock,
  Users,
  Download,
  Smartphone,
  Monitor,
  Tablet,
  Zap,
  Shield,
  HeadphonesIcon,
  BookOpen,
  TrendingUp,
  Award,
  Copy,
  Twitter,
  Facebook,
  Linkedin
} from 'lucide-react';
import { tools, blogPosts } from '@/data/mockData';
import ToolCard, { ColorVariant } from '@/components/card/ToolCard';

// Mock detailed tool data
const getToolDetails = (toolId: string) => ({
  screenshots: [
    'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop',
  ],
  keyFeatures: [
    {
      title: '智能文本生成',
      description: '基于GPT技术的高质量内容创作，支持多种文体和语言风格',
      icon: '🤖'
    },
    {
      title: '实时协作',
      description: '多人同时编辑，实时同步，提升团队协作效率',
      icon: '👥'
    },
    {
      title: '模板库',
      description: '内置100+专业模板，覆盖商务、创意、学术等多个领域',
      icon: '📝'
    },
    {
      title: 'API集成',
      description: '开放API接口，轻松集成到你的工作流程中',
      icon: '🔗'
    }
  ],
  technicalSpecs: {
    platforms: ['Web', 'iOS', 'Android', 'Chrome Extension'],
    languages: ['中文', 'English', '日本語', 'Español', 'Français'],
    integrations: ['Slack', 'Discord', 'Notion', 'Google Docs', 'Microsoft Teams'],
    apiAvailable: true,
    offlineMode: false,
    dataEncryption: true
  },
  useCases: [
    {
      title: '内容营销',
      description: '快速生成高质量的营销文案、博客文章和社交媒体内容',
      industries: ['营销', '电商', '媒体']
    },
    {
      title: '学术写作',
      description: '辅助研究论文、报告和学术文档的撰写和编辑',
      industries: ['教育', '科研', '出版']
    },
    {
      title: '商务沟通',
      description: '生成专业的邮件、提案和商业文档',
      industries: ['咨询', '金融', '企业服务']
    }
  ],
  changelog: [
    {
      version: '2.1.0',
      date: '2025-05-15',
      changes: ['新增多语言支持', '优化AI响应速度', '修复已知问题']
    },
    {
      version: '2.0.5',
      date: '2025-05-01',
      changes: ['增加团队协作功能', '新增API文档', '界面优化']
    },
    {
      version: '2.0.0',
      date: '2025-04-15',
      changes: ['全新界面设计', '性能大幅提升', '新增移动端支持']
    }
  ]
});

// Mock reviews data
const reviews = [
  {
    id: 'review1',
    user: {
      name: '李明华',
      avatar: '',
      role: '产品经理',
      company: '科技公司'
    },
    rating: 5,
    date: '2025-05-10',
    title: '极大提升了工作效率',
    content: '这个工具完全改变了我的内容创作流程。AI生成的内容质量很高，而且界面直观易用。特别是团队协作功能，让我们的工作效率提升了300%。客服响应也很及时，总体体验非常棒！',
    helpful: 24,
    notHelpful: 2,
    verified: true
  },
  {
    id: 'review2',
    user: {
      name: 'Sarah Johnson',
      avatar: '',
      role: '内容创作者',
      company: '自由职业'
    },
    rating: 4,
    date: '2025-05-08',
    title: '功能丰富，值得推荐',
    content: '作为一名自由撰稿人，这个工具帮我节省了大量时间。AI生成的内容需要一些调整，但作为初稿已经相当不错。希望能增加更多的创意写作模板。',
    helpful: 18,
    notHelpful: 3,
    verified: true
  },
  {
    id: 'review3',
    user: {
      name: '王小明',
      avatar: '',
      role: '学生',
      company: '清华大学'
    },
    rating: 5,
    date: '2025-05-05',
    title: '学生党的福音',
    content: '免费版本已经能满足我大部分需求了。写论文、做报告都很有帮助。AI的建议很中肯，帮我改进了很多表达方式。强烈推荐给同学们！',
    helpful: 12,
    notHelpful: 1,
    verified: false
  },
];

// Mock pricing plans
const pricingPlans = [
  {
    name: '免费版',
    price: '¥0',
    period: '永久免费',
    features: [
      '每月5000字生成额度',
      '基础AI模型',
      '3个预设模板',
      '基础导出功能',
      '社区支持'
    ],
    recommended: false,
    popular: false
  },
  {
    name: '专业版',
    price: '¥99',
    period: '每月',
    originalPrice: '¥149',
    features: [
      '每月50000字生成额度',
      '高级AI模型',
      '50+专业模板',
      '团队协作（5人）',
      '优先客服支持',
      '高级导出选项',
      'API访问权限'
    ],
    recommended: true,
    popular: true
  },
  {
    name: '企业版',
    price: '¥299',
    period: '每月',
    features: [
      '无限字数生成',
      '最高级AI模型',
      '100+企业模板',
      '无限团队成员',
      '专属客户经理',
      '自定义集成',
      '数据安全保障',
      '私有部署选项'
    ],
    recommended: false,
    popular: false
  },
];

const ToolDetail = () => {
  const { id } = useParams<{ id: string }>();
  const tool = tools.find((t) => t.id === id) || tools[0];
  const toolDetails = getToolDetails(tool.id);
  
  // Related blog posts - filter by matching tags
  const relatedPosts = blogPosts.filter((post) => 
    post.tags.some(tag => tool.tags.includes(tag))
  ).slice(0, 3);

  // Helper function to convert colorVariant to the correct variant format for Tag component
  const getTagVariant = (colorVariant: ColorVariant) => {
    return `ai-${colorVariant}` as "ai-blue" | "ai-purple" | "ai-pink" | "ai-orange" | "ai-green";
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = `${tool.name} - AI工具推荐`;
    
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`);
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`);
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        break;
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Tool Header */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-8">
          <div className={`h-40 bg-gradient-to-r from-ai-${tool.colorVariant} to-ai-blue relative`}>
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
          <div className="p-6 md:p-8 relative">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <Tag size="sm" variant={getTagVariant(tool.colorVariant as ColorVariant)}>
                    {tool.category}
                  </Tag>
                  {tool.featured && (
                    <Badge className="bg-ai-orange text-white">
                      <Award size={12} className="mr-1" />
                      精选推荐
                    </Badge>
                  )}
                  <Badge variant="outline" className="text-ai-green border-ai-green">
                    <TrendingUp size={12} className="mr-1" />
                    热门工具
                  </Badge>
                </div>
                
                <h1 className="text-4xl font-bold mb-3">{tool.name}</h1>
                
                <p className="text-lg text-muted-foreground mb-4 max-w-3xl">
                  {tool.description}
                </p>
                
                <div className="flex flex-wrap items-center gap-6 mb-4">
                  <div className="flex items-center">
                    <div className="flex items-center mr-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          size={18} 
                          className={`${star <= Math.round(tool.rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="font-semibold text-lg">{tool.rating.toFixed(1)}</span>
                    <span className="text-muted-foreground ml-2">({reviews.length}条评价)</span>
                  </div>
                  
                  <div className="flex items-center text-muted-foreground">
                    <Users size={16} className="mr-2" />
                    <span>10,000+ 用户</span>
                  </div>
                  
                  <div className="flex items-center text-muted-foreground">
                    <Download size={16} className="mr-2" />
                    <span>免费试用</span>
                  </div>
                  
                  <div className="flex items-center text-muted-foreground">
                    <Calendar size={16} className="mr-2" />
                    <span>更新于 2025年5月</span>
                  </div>
                </div>

                {/* Platform Support */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-sm font-medium">支持平台：</span>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Monitor size={16} />
                      <span>网页版</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Smartphone size={16} />
                      <span>移动端</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Tablet size={16} />
                      <span>平板</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-3 min-w-[200px]">
                <Button size="lg" className="text-lg px-8">
                  <ExternalLink size={18} className="mr-2" />
                  立即体验
                </Button>
                <Button variant="outline" size="lg">
                  <Globe size={18} className="mr-2" />
                  访问官网
                </Button>
                
                {/* Share Buttons */}
                <div className="flex gap-2 mt-2">
                  <Button variant="ghost" size="sm" onClick={() => handleShare('twitter')}>
                    <Twitter size={16} />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => handleShare('facebook')}>
                    <Facebook size={16} />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => handleShare('linkedin')}>
                    <Linkedin size={16} />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => handleShare('copy')}>
                    <Copy size={16} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Tool Info */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-6 mb-6">
                <TabsTrigger value="overview">概览</TabsTrigger>
                <TabsTrigger value="features">功能特色</TabsTrigger>
                <TabsTrigger value="screenshots">界面预览</TabsTrigger>
                <TabsTrigger value="pricing">价格方案</TabsTrigger>
                <TabsTrigger value="reviews">用户评价</TabsTrigger>
                <TabsTrigger value="alternatives">相似工具</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-6">
                {/* About Section */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen size={24} />
                      关于 {tool.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-base leading-relaxed">
                      {tool.name} 是一款基于先进人工智能技术的内容创作工具，专为提高创作效率和内容质量而设计。
                      无论您是内容创作者、营销专员、学生还是企业用户，都能从这款工具中受益匪浅。
                    </p>
                    <p className="mb-4 text-base leading-relaxed">
                      通过集成最新的GPT技术和自然语言处理算法，{tool.name} 能够理解复杂的创作需求，
                      并生成高质量、个性化的内容。工具支持多种内容类型，从商业文案到学术论文，从创意故事到技术文档。
                    </p>
                    <p className="text-base leading-relaxed">
                      我们致力于让AI技术真正服务于创作者，让每个人都能轻松创作出优质内容。
                    </p>
                  </CardContent>
                </Card>

                {/* Key Features */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap size={24} />
                      核心功能
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {toolDetails.keyFeatures.map((feature, index) => (
                        <div key={index} className="flex gap-4 p-4 rounded-lg border bg-secondary/20">
                          <div className="text-2xl">{feature.icon}</div>
                          <div>
                            <h4 className="font-semibold mb-2">{feature.title}</h4>
                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Use Cases */}
                <Card>
                  <CardHeader>
                    <CardTitle>应用场景</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {toolDetails.useCases.map((useCase, index) => (
                        <div key={index} className="border-l-4 border-primary pl-4">
                          <h4 className="font-semibold mb-1">{useCase.title}</h4>
                          <p className="text-muted-foreground mb-2">{useCase.description}</p>
                          <div className="flex gap-2">
                            {useCase.industries.map((industry) => (
                              <Badge key={industry} variant="secondary">{industry}</Badge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Technical Specs */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield size={24} />
                      技术规格
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-3">支持平台</h4>
                        <div className="space-y-2">
                          {toolDetails.technicalSpecs.platforms.map((platform) => (
                            <div key={platform} className="flex items-center gap-2">
                              <Check size={16} className="text-ai-green" />
                              <span>{platform}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium mb-3">支持语言</h4>
                        <div className="space-y-2">
                          {toolDetails.technicalSpecs.languages.map((language) => (
                            <div key={language} className="flex items-center gap-2">
                              <Check size={16} className="text-ai-green" />
                              <span>{language}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium mb-3">集成支持</h4>
                        <div className="space-y-2">
                          {toolDetails.technicalSpecs.integrations.slice(0, 3).map((integration) => (
                            <div key={integration} className="flex items-center gap-2">
                              <Check size={16} className="text-ai-green" />
                              <span>{integration}</span>
                            </div>
                          ))}
                          <div className="text-sm text-muted-foreground">
                            +{toolDetails.technicalSpecs.integrations.length - 3} 更多
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium mb-3">安全特性</h4>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Check size={16} className="text-ai-green" />
                            <span>数据加密传输</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Check size={16} className="text-ai-green" />
                            <span>API 访问控制</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Check size={16} className="text-ai-green" />
                            <span>GDPR 合规</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="features">
                <Card>
                  <CardHeader>
                    <CardTitle>详细功能介绍</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-ai-blue">智能内容生成</h3>
                        <p className="text-muted-foreground mb-4">
                          基于最新的大语言模型技术，能够理解上下文语境，生成连贯、准确、具有创意的内容。
                          支持多种文体风格，从正式的商业文档到轻松的社交媒体内容。
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <Check size={16} className="mt-1 text-ai-green" />
                            <span>支持50+种内容类型模板</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check size={16} className="mt-1 text-ai-green" />
                            <span>智能语法检查和优化建议</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check size={16} className="mt-1 text-ai-green" />
                            <span>多语言内容生成和翻译</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-ai-purple">团队协作</h3>
                        <p className="text-muted-foreground mb-4">
                          强大的实时协作功能，让团队成员可以同时编辑文档，实时查看彼此的修改，
                          并通过内置的评论和建议系统进行有效沟通。
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <Check size={16} className="mt-1 text-ai-green" />
                            <span>实时多人编辑</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check size={16} className="mt-1 text-ai-green" />
                            <span>版本历史管理</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check size={16} className="mt-1 text-ai-green" />
                            <span>权限管理和分享控制</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-ai-orange">高级定制</h3>
                        <p className="text-muted-foreground mb-4">
                          提供丰富的自定义选项，用户可以根据自己的需求调整AI的行为模式，
                          创建专属的写作风格和模板。
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <Check size={16} className="mt-1 text-ai-green" />
                            <span>自定义写作风格</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check size={16} className="mt-1 text-ai-green" />
                            <span>个人模板库</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check size={16} className="mt-1 text-ai-green" />
                            <span>API集成和自动化</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="screenshots">
                <Card>
                  <CardHeader>
                    <CardTitle>界面预览</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {toolDetails.screenshots.map((screenshot, index) => (
                        <div key={index} className="rounded-lg overflow-hidden border">
                          <img 
                            src={screenshot} 
                            alt={`界面截图 ${index + 1}`}
                            className="w-full h-64 object-cover hover:scale-105 transition-transform cursor-pointer"
                          />
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mt-4 text-center">
                      点击图片查看大图
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="pricing">
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold mb-2">选择适合您的方案</h2>
                    <p className="text-muted-foreground">
                      从免费试用到企业解决方案，我们为每种需求提供合适的价格方案
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {pricingPlans.map((plan, index) => (
                      <Card key={index} className={`relative ${plan.recommended ? 'border-primary border-2 shadow-lg' : ''}`}>
                        {plan.popular && (
                          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                            <Badge className="bg-primary text-white px-4 py-1">
                              最受欢迎
                            </Badge>
                          </div>
                        )}
                        <CardHeader className="text-center">
                          <CardTitle className="text-xl">{plan.name}</CardTitle>
                          <div className="mt-4">
                            <div className="flex items-baseline justify-center gap-2">
                              <span className="text-4xl font-bold">{plan.price}</span>
                              <span className="text-muted-foreground">/{plan.period}</span>
                            </div>
                            {plan.originalPrice && (
                              <div className="text-sm text-muted-foreground line-through">
                                原价 {plan.originalPrice}
                              </div>
                            )}
                          </div>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-3 mb-6">
                            {plan.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <Check size={16} className="mt-1 text-ai-green flex-shrink-0" />
                                <span className="text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <Button 
                            className={`w-full ${plan.recommended ? '' : 'bg-secondary text-secondary-foreground hover:bg-secondary/90'}`} 
                            variant={plan.recommended ? 'default' : 'secondary'}
                          >
                            {plan.name === '免费版' ? '立即开始' : '选择此方案'}
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  <div className="text-center text-sm text-muted-foreground">
                    <p>所有付费方案支持7天免费试用 • 随时可以取消订阅</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews">
                <div className="space-y-6">
                  {/* Review Summary */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="text-center">
                          <div className="text-5xl font-bold mb-2">{tool.rating.toFixed(1)}</div>
                          <div className="flex justify-center mb-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star 
                                key={star} 
                                size={20} 
                                className={`${star <= Math.round(tool.rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`} 
                              />
                            ))}
                          </div>
                          <div className="text-sm text-muted-foreground">基于 {reviews.length} 条用户评价</div>
                        </div>
                        
                        <div>
                          <h4 className="font-medium mb-4">评分分布</h4>
                          {[5, 4, 3, 2, 1].map((rating) => {
                            const count = reviews.filter(r => Math.floor(r.rating) === rating).length;
                            const percentage = (count / reviews.length) * 100;
                            return (
                              <div key={rating} className="flex items-center gap-3 mb-2">
                                <span className="w-8 text-sm">{rating}星</span>
                                <div className="flex-1 bg-secondary rounded-full h-2">
                                  <div 
                                    className="bg-amber-400 h-2 rounded-full" 
                                    style={{ width: `${percentage}%` }}
                                  ></div>
                                </div>
                                <span className="w-12 text-sm text-right">{count}条</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Review Actions */}
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">用户评价</h3>
                    <Button>写评价</Button>
                  </div>
                  
                  {/* Individual Reviews */}
                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <Card key={review.id}>
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-start gap-3">
                              <Avatar className="h-12 w-12">
                                <AvatarImage src={review.user.avatar} alt={review.user.name} />
                                <AvatarFallback>{review.user.name[0]}</AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="flex items-center gap-2 mb-1">
                                  <h4 className="font-medium">{review.user.name}</h4>
                                  {review.verified && (
                                    <Badge variant="secondary" className="text-xs">
                                      <Check size={10} className="mr-1" />
                                      已验证
                                    </Badge>
                                  )}
                                </div>
                                <div className="text-sm text-muted-foreground mb-2">
                                  {review.user.role} • {review.user.company}
                                </div>
                                <div className="flex items-center gap-2">
                                  <div className="flex">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                      <Star 
                                        key={star} 
                                        size={14} 
                                        className={`${star <= review.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`} 
                                      />
                                    ))}
                                  </div>
                                  <span className="text-xs text-muted-foreground">{review.date}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <h5 className="font-medium mb-2">{review.title}</h5>
                          <p className="mb-4 leading-relaxed">{review.content}</p>
                          
                          <div className="flex items-center justify-between pt-4 border-t">
                            <div className="flex items-center gap-4">
                              <button className="text-sm flex items-center gap-1 text-muted-foreground hover:text-foreground">
                                <ThumbsUp size={14} />
                                有帮助 ({review.helpful})
                              </button>
                              <button className="text-sm flex items-center gap-1 text-muted-foreground hover:text-foreground">
                                <ThumbsDown size={14} />
                                无帮助 ({review.notHelpful})
                              </button>
                            </div>
                            <button className="text-sm flex items-center gap-1 text-muted-foreground hover:text-foreground">
                              <Flag size={14} />
                              举报
                            </button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="alternatives">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-semibold mb-2">相似工具推荐</h2>
                    <p className="text-muted-foreground">
                      探索更多同类型的AI工具，找到最适合你需求的解决方案
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tools.filter(t => t.id !== tool.id && t.category === tool.category).slice(0, 6).map((alt) => (
                      <ToolCard key={alt.id} {...alt} />
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">快速操作</h3>
                <div className="space-y-3">
                  <Button className="w-full" size="lg">
                    <ExternalLink size={16} className="mr-2" />
                    立即试用
                  </Button>
                  <Button variant="outline" className="w-full">
                    <BookOpen size={16} className="mr-2" />
                    查看文档
                  </Button>
                  <Button variant="outline" className="w-full">
                    <HeadphonesIcon size={16} className="mr-2" />
                    联系客服
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Tool Tags */}
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">工具标签</h3>
                  <Button variant="ghost" size="sm" onClick={() => handleShare('copy')}>
                    <Share2 size={16} className="mr-1" />
                    分享
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tool.tags.map((tag) => (
                    <Tag key={tag} size="sm">{tag}</Tag>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Latest Updates */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">更新日志</h3>
                <div className="space-y-4">
                  {toolDetails.changelog.slice(0, 3).map((update, index) => (
                    <div key={index} className="border-l-2 border-primary pl-3">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline">{update.version}</Badge>
                        <span className="text-sm text-muted-foreground">{update.date}</span>
                      </div>
                      <ul className="text-sm space-y-1">
                        {update.changes.map((change, idx) => (
                          <li key={idx} className="text-muted-foreground">• {change}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Related Articles */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">相关文章</h3>
                <div className="space-y-4">
                  {relatedPosts.map((post) => (
                    <div key={post.id} className="group">
                      <h4 className="font-medium text-sm mb-1 line-clamp-2 group-hover:text-primary cursor-pointer">
                        <a href={`/articles/${post.id}`}>
                          {post.title}
                        </a>
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock size={12} />
                        <span>{post.readTime}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full mt-4">
                  查看更多文章
                </Button>
              </CardContent>
            </Card>
            
            {/* Community Stats */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">社区讨论</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm flex items-center gap-2">
                      <MessageSquare size={14} />
                      讨论话题
                    </span>
                    <span className="text-sm font-medium">42</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm flex items-center gap-2">
                      <Users size={14} />
                      活跃用户
                    </span>
                    <span className="text-sm font-medium">89</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm flex items-center gap-2">
                      <Star size={14} />
                      好评率
                    </span>
                    <span className="text-sm font-medium">96%</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4" asChild>
                  <a href="/forum">
                    <MessageSquare size={16} className="mr-2" />
                    加入讨论
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Similar Tools Section */}
        <section className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">相似工具推荐</h2>
            <Button variant="outline" asChild>
              <a href={`/categories/${tool.categorySlug}`}>
                查看更多 {tool.category} 工具
              </a>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools
              .filter(t => 
                t.id !== tool.id && 
                (t.categorySlug === tool.categorySlug || 
                 t.tags.some(tag => tool.tags.includes(tag)))
              )
              .slice(0, 4)
              .map(similarTool => (
                <ToolCard key={similarTool.id} {...similarTool} />
              ))
            }
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ToolDetail;
