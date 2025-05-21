
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
  CardContent
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tag } from '@/components/ui/tag';
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
  Check
} from 'lucide-react';
import { tools, blogPosts } from '@/data/mockData';
import BlogPostCard from '@/components/card/BlogPostCard';

// Mock reviews data
const reviews = [
  {
    id: 'review1',
    user: {
      name: 'Robert Chen',
      avatar: '',
    },
    rating: 5,
    date: 'May 10, 2025',
    content: 'This tool has completely transformed my workflow. The UI is intuitive, and the AI capabilities are impressive.',
    helpful: 24,
    notHelpful: 2,
  },
  {
    id: 'review2',
    user: {
      name: 'Jessica Miller',
      avatar: '',
    },
    rating: 4,
    date: 'May 8, 2025',
    content: 'Very good tool, but there are some features I wish it had. Overall a great experience and worth the price.',
    helpful: 18,
    notHelpful: 3,
  },
  {
    id: 'review3',
    user: {
      name: 'David Wilson',
      avatar: '',
    },
    rating: 5,
    date: 'May 5, 2025',
    content: "The customer service is exceptional, and the AI performs better than any other solution I've tried.",
    helpful: 12,
    notHelpful: 1,
  },
];

// Mock pros and cons
const pros = [
  'Intuitive user interface',
  'Exceptional AI capabilities',
  'Regular updates and improvements',
  'Helpful documentation and tutorials',
  'Good value for money',
];

const cons = [
  'Advanced features require paid subscription',
  'May have a learning curve for beginners',
  'Limited integration options with some platforms',
];

// Mock pricing plans
const pricingPlans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    features: [
      'Basic AI responses',
      'Up to 20 queries per day',
      'Standard response time',
      'Web interface only',
    ],
    recommended: false,
  },
  {
    name: 'Plus',
    price: '$20',
    period: 'per month',
    features: [
      'Faster response time',
      'Up to 100 queries per day',
      'Priority support',
      'API access',
      'Advanced features',
    ],
    recommended: true,
  },
  {
    name: 'Pro',
    price: '$42',
    period: 'per month',
    features: [
      'Unlimited queries',
      'Fastest response time',
      '24/7 priority support',
      'Full API access',
      'Team collaboration',
      'Custom solutions',
    ],
    recommended: false,
  },
];

const ToolDetail = () => {
  const { id } = useParams<{ id: string }>();
  const tool = tools.find((t) => t.id === id) || tools[0];
  
  // Related blog posts - filter by matching tags
  const relatedPosts = blogPosts.filter((post) => 
    post.tags.some(tag => tool.tags.includes(tag))
  ).slice(0, 3);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Tool Header */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow overflow-hidden mb-8">
          <div className={`h-32 bg-gradient-to-r from-ai-${tool.colorVariant} to-ai-blue`}></div>
          <div className="p-6 md:p-8 relative">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Tag size="sm" variant={`ai.${tool.colorVariant}`}>
                    {tool.category}
                  </Tag>
                  {tool.featured && (
                    <Tag size="sm" variant="ai.orange">Featured</Tag>
                  )}
                </div>
                
                <h1 className="text-3xl font-bold mb-2">{tool.name}</h1>
                
                <p className="text-muted-foreground mb-4 max-w-3xl">
                  {tool.description}
                </p>
                
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center">
                    <div className="flex items-center mr-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          size={16} 
                          className={`${star <= Math.round(tool.rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="font-medium">{tool.rating.toFixed(1)}</span>
                    <span className="text-muted-foreground ml-1">({reviews.length} reviews)</span>
                  </div>
                  
                  <span className="text-muted-foreground flex items-center">
                    <Globe size={16} className="mr-1" /> Web, iOS, Android
                  </span>
                  
                  <span className="text-muted-foreground flex items-center">
                    <DollarSign size={16} className="mr-1" /> Freemium
                  </span>
                  
                  <span className="text-muted-foreground flex items-center">
                    <Calendar size={16} className="mr-1" /> Updated May 2025
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0">
                <Button>Try It Now</Button>
                <Button variant="outline">
                  <ExternalLink size={16} className="mr-2" /> Visit Website
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Tool Info */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview">
              <TabsList className="mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="pricing">Pricing</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="alternatives">Alternatives</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold mb-4">About {tool.name}</h2>
                    <p className="mb-4">
                      {tool.name} is a powerful AI tool that helps users accomplish tasks more efficiently through artificial intelligence. 
                      It uses advanced machine learning algorithms to understand user inputs and provide relevant outputs.
                    </p>
                    <p className="mb-4">
                      Whether you're looking to automate repetitive tasks, generate creative content, or analyze complex data, 
                      {tool.name} offers a comprehensive suite of features designed to streamline your workflow and enhance productivity.
                    </p>
                    <p>
                      The platform is constantly evolving with regular updates and new features based on user feedback and technological advancements.
                    </p>
                  </CardContent>
                </Card>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4 text-ai-green flex items-center">
                        <Check size={20} className="mr-2 text-ai-green" /> Pros
                      </h3>
                      <ul className="space-y-2">
                        {pros.map((pro, index) => (
                          <li key={index} className="flex items-start">
                            <Check size={16} className="mr-2 mt-1 text-ai-green" />
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4 text-destructive flex items-center">
                        <ThumbsDown size={20} className="mr-2 text-destructive" /> Cons
                      </h3>
                      <ul className="space-y-2">
                        {cons.map((con, index) => (
                          <li key={index} className="flex items-start">
                            <ThumbsDown size={16} className="mr-2 mt-1 text-destructive" />
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="features">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
                    
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-xl font-medium mb-2">Natural Language Understanding</h3>
                        <p className="text-muted-foreground">
                          Advanced algorithms that understand context, nuance, and intent in human language, 
                          allowing for more natural and effective communication with the AI.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-medium mb-2">Multi-modal Capabilities</h3>
                        <p className="text-muted-foreground">
                          Process and generate content across different formats including text, images, and 
                          structured data, providing versatile solutions for diverse needs.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-medium mb-2">Customization Options</h3>
                        <p className="text-muted-foreground">
                          Tailor the AI's behavior and outputs to match your specific requirements, 
                          with options to fine-tune parameters and create personalized templates.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-medium mb-2">Enterprise Integration</h3>
                        <p className="text-muted-foreground">
                          Seamlessly connect with your existing tools and workflows through robust APIs 
                          and pre-built connectors for popular platforms and services.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-medium mb-2">Analytics & Insights</h3>
                        <p className="text-muted-foreground">
                          Gain valuable insights into usage patterns, performance metrics, and content 
                          effectiveness through comprehensive analytics dashboards.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="pricing">
                <h2 className="text-2xl font-semibold mb-6">Pricing Plans</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {pricingPlans.map((plan, index) => (
                    <Card key={index} className={`relative ${plan.recommended ? 'border-primary border-2' : ''}`}>
                      {plan.recommended && (
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                            Most Popular
                          </span>
                        </div>
                      )}
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold">{plan.name}</h3>
                        <div className="mt-4 mb-6">
                          <span className="text-3xl font-bold">{plan.price}</span>
                          <span className="text-muted-foreground"> {plan.period}</span>
                        </div>
                        <ul className="space-y-3 mb-6">
                          {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <Check size={16} className="mr-2 mt-1 text-ai-green" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button 
                          className={`w-full ${plan.recommended ? '' : 'bg-secondary text-secondary-foreground hover:bg-secondary/90'}`} 
                          variant={plan.recommended ? 'default' : 'secondary'}
                        >
                          {plan.name === 'Free' ? 'Get Started' : 'Subscribe Now'}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="reviews">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-semibold">User Reviews</h2>
                    <Button>Write a Review</Button>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 rounded-lg border p-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-8">
                      <div className="text-center">
                        <div className="text-5xl font-bold mb-2">{tool.rating.toFixed(1)}</div>
                        <div className="flex justify-center mb-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star 
                              key={star} 
                              size={18} 
                              className={`${star <= Math.round(tool.rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                        <div className="text-sm text-muted-foreground">Based on {reviews.length} reviews</div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="space-y-2">
                          {[5, 4, 3, 2, 1].map((rating) => {
                            const percentage = (reviews.filter(r => Math.floor(r.rating) === rating).length / reviews.length) * 100;
                            return (
                              <div key={rating} className="flex items-center">
                                <span className="w-12 text-sm">{rating} stars</span>
                                <div className="w-full bg-secondary rounded-full h-2 mx-2">
                                  <div className="bg-amber-400 h-2 rounded-full" style={{ width: `${percentage}%` }}></div>
                                </div>
                                <span className="w-8 text-sm text-right">{Math.round(percentage)}%</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <Card key={review.id}>
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center">
                              <Avatar className="h-10 w-10 mr-3">
                                <AvatarImage src={review.user.avatar} alt={review.user.name} />
                                <AvatarFallback>{review.user.name[0]}</AvatarFallback>
                              </Avatar>
                              <div>
                                <h4 className="font-medium">{review.user.name}</h4>
                                <div className="flex items-center mt-1">
                                  {[1, 2, 3, 4, 5].map((star) => (
                                    <Star 
                                      key={star} 
                                      size={14} 
                                      className={`${star <= review.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`} 
                                    />
                                  ))}
                                  <span className="text-xs text-muted-foreground ml-2">{review.date}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="mb-4">{review.content}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <button className="text-sm flex items-center text-muted-foreground hover:text-foreground">
                                <ThumbsUp size={14} className="mr-1" /> Helpful ({review.helpful})
                              </button>
                              <button className="text-sm flex items-center text-muted-foreground hover:text-foreground">
                                <ThumbsDown size={14} className="mr-1" /> Not helpful ({review.notHelpful})
                              </button>
                            </div>
                            <button className="text-sm flex items-center text-muted-foreground hover:text-foreground">
                              <Flag size={14} className="mr-1" /> Report
                            </button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="alternatives">
                <h2 className="text-2xl font-semibold mb-6">Alternative AI Tools</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {tools.filter(t => t.id !== tool.id && t.category === tool.category).slice(0, 3).map((alt) => (
                    <ToolCard key={alt.id} {...alt} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Tool Tags</h3>
                  <Button variant="ghost" size="sm">
                    <Share2 size={16} className="mr-2" /> Share
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tool.tags.map((tag) => (
                    <Tag key={tag} size="sm">{tag}</Tag>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {relatedPosts.map((post) => (
                    <div key={post.id} className="flex items-start pb-4 last:pb-0 last:mb-0 last:border-0 border-b">
                      <div>
                        <h4 className="font-medium text-sm mb-1 line-clamp-2">
                          <a href={`/blog/${post.id}`} className="hover:text-primary">
                            {post.title}
                          </a>
                        </h4>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock size={12} className="mr-1" /> {post.readTime}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full mt-4">
                  View All Articles
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Community Discussion</h3>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Questions</span>
                    <span className="text-sm font-medium">42</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Answers</span>
                    <span className="text-sm font-medium">156</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Active users</span>
                    <span className="text-sm font-medium">89</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <a href="/forum">
                    <MessageSquare size={16} className="mr-2" /> Join Discussion
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ToolDetail;
