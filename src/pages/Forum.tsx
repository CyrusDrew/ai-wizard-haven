
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Search, MessageSquare, Flame, Plus } from 'lucide-react';
import { forumTopics } from '@/data/mockData';

const Forum = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold">Community Forum</h1>
            <p className="text-muted-foreground">
              Ask questions, share knowledge, and connect with other AI enthusiasts
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Input 
                type="text" 
                placeholder="Search topics..." 
                className="w-[200px] pl-8"
              />
              <Search size={16} className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground" />
            </div>
            <Button>
              <Plus size={16} className="mr-2" />
              New Topic
            </Button>
          </div>
        </div>
        
        {/* Categories and Topics */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Categories */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg border p-5">
              <h3 className="font-semibold mb-4">Categories</h3>
              <div className="space-y-2">
                <CategoryItem name="Usage Tips" count={82} active={true} />
                <CategoryItem name="Troubleshooting" count={64} />
                <CategoryItem name="Tool Comparisons" count={47} />
                <CategoryItem name="Optimization" count={31} />
                <CategoryItem name="Advanced Usage" count={26} />
                <CategoryItem name="News & Updates" count={18} />
                <CategoryItem name="Show & Tell" count={35} />
                <CategoryItem name="General Discussion" count={59} />
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg border p-5">
              <h3 className="font-semibold mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">ChatGPT</Badge>
                <Badge variant="secondary">Midjourney</Badge>
                <Badge variant="secondary">GPT-4</Badge>
                <Badge variant="secondary">Stable Diffusion</Badge>
                <Badge variant="secondary">Pricing</Badge>
                <Badge variant="secondary">API</Badge>
                <Badge variant="secondary">Fine-tuning</Badge>
                <Badge variant="secondary">Beginners</Badge>
              </div>
            </div>
          </div>
          
          {/* Main Content - Topics */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="latest">
              <div className="flex justify-between mb-6">
                <TabsList>
                  <TabsTrigger value="latest">Latest</TabsTrigger>
                  <TabsTrigger value="trending">Trending</TabsTrigger>
                  <TabsTrigger value="unanswered">Unanswered</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="latest" className="space-y-4">
                {forumTopics.map((topic) => (
                  <TopicCard key={topic.id} topic={topic} />
                ))}
              </TabsContent>
              
              <TabsContent value="trending">
                {forumTopics.filter(topic => topic.isHot).map((topic) => (
                  <TopicCard key={topic.id} topic={topic} />
                ))}
              </TabsContent>
              
              <TabsContent value="unanswered">
                {forumTopics.filter(topic => topic.replies < 5).map((topic) => (
                  <TopicCard key={topic.id} topic={topic} />
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const CategoryItem = ({ name, count, active = false }: { name: string; count: number; active?: boolean }) => {
  return (
    <a 
      href={`/forum/category/${name.toLowerCase().replace(/\s+/g, '-')}`}
      className={`flex items-center justify-between px-3 py-2 rounded-md ${
        active 
          ? 'bg-primary/10 text-primary' 
          : 'hover:bg-secondary'
      }`}
    >
      <span className={active ? 'font-medium' : ''}>{name}</span>
      <span className="text-xs bg-secondary px-2 py-1 rounded-full">{count}</span>
    </a>
  );
};

const TopicCard = ({ topic }: { topic: any }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border hover:shadow-md transition-shadow">
      <div className="p-4 sm:p-5">
        <div className="flex items-start gap-4">
          <Avatar className="hidden sm:flex h-10 w-10">
            <AvatarImage src={topic.author.avatar} alt={topic.author.name} />
            <AvatarFallback>{topic.author.name[0]}</AvatarFallback>
          </Avatar>
          
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
              <h3 className="font-medium text-lg break-words">
                <a href={`/forum/topic/${topic.id}`} className="hover:text-primary">
                  {topic.title}
                </a>
              </h3>
              {topic.isHot && (
                <Badge className="ml-0 sm:ml-2 w-fit bg-ai-orange border-0 text-white">
                  <Flame size={12} className="mr-1" /> Hot
                </Badge>
              )}
            </div>
            
            <div className="flex flex-wrap items-center text-xs text-muted-foreground gap-x-4 gap-y-2">
              <span className="inline-flex items-center">
                <Badge variant="secondary" className="mr-2">{topic.category}</Badge>
              </span>
              <span>Posted by {topic.author.name}</span>
              <span>{topic.date}</span>
            </div>
          </div>
          
          <div className="flex flex-col items-end gap-2 text-center">
            <div className="flex items-center text-sm">
              <MessageSquare size={14} className="mr-1 text-muted-foreground" />
              <span className="font-medium">{topic.replies}</span>
            </div>
            <div className="text-xs text-muted-foreground">{topic.views} views</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forum;
