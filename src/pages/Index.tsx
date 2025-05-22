
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Search, TrendingUp } from 'lucide-react';
import CategoryIcon from '@/components/CategoryIcon';
import ToolCard from '@/components/card/ToolCard';
import BlogPostCard from '@/components/card/BlogPostCard';
import ArticleWaterfall from '@/components/articles/ArticleWaterfall';
import { categories, tools, blogPosts } from '@/data/mockData';

const Index = () => {
  const [activeTab, setActiveTab] = useState('tools');
  const [searchQuery, setSearchQuery] = useState('');

  const featuredTools = tools.filter(tool => tool.featured);
  const popularCategories = categories.slice(0, 8);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12 pt-4 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Discover & Learn About <span className="gradient-text">AI Tools</span>
          </h1>
          <p className="text-xl text-muted-foreground mx-auto max-w-2xl mb-8">
            Your ultimate guide to exploring the best AI tools and tutorials to enhance your workflow and creativity.
          </p>
          <div className="relative max-w-xl mx-auto">
            <Input
              type="text"
              placeholder="Search for AI tools, tutorials, or topics..."
              className="pr-10 h-12 text-base"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          </div>
        </section>

        {/* Categories Section - "Golden Area" with icons */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Popular Categories</h2>
            <Button variant="outline" asChild>
              <a href="/categories">View All Categories</a>
            </Button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {popularCategories.map((category) => (
              <CategoryIcon key={category.id} category={category} />
            ))}
          </div>
        </section>

        {/* Content Tabs */}
        <section className="mb-8">
          <Tabs defaultValue="tools" onValueChange={(value) => setActiveTab(value)}>
            <div className="flex items-center justify-between mb-6">
              <TabsList>
                <TabsTrigger value="tools">Featured Tools</TabsTrigger>
                <TabsTrigger value="articles">Latest Articles</TabsTrigger>
              </TabsList>
              <Button variant="ghost" size="sm" className="text-primary flex items-center">
                <TrendingUp size={16} className="mr-1" /> 
                Trending
              </Button>
            </div>

            <TabsContent value="tools">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredTools.map((tool) => (
                  <ToolCard key={tool.id} {...tool} />
                ))}
              </div>
              <div className="mt-12 mb-8">
                <h3 className="text-xl font-semibold mb-6">Explore More Tools</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {tools.filter(tool => !tool.featured).slice(0, 4).map((tool) => (
                    <ToolCard key={tool.id} {...tool} />
                  ))}
                </div>
              </div>
              
              {/* Latest Articles Waterfall - Moved here after the featured tools section */}
              <ArticleWaterfall />
            </TabsContent>

            <TabsContent value="articles">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts.slice(0, 2).map((post) => (
                  <BlogPostCard 
                    key={post.id} 
                    {...post} 
                    className="h-full"
                  />
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                {blogPosts.slice(2, 5).map((post) => (
                  <BlogPostCard 
                    key={post.id} 
                    {...post} 
                    className="h-full"
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Newsletter Section */}
        <section className="bg-gradient-to-r from-ai-purple/10 to-ai-blue/10 rounded-xl p-8 text-center mb-8">
          <h2 className="text-2xl font-semibold mb-2">Stay Updated with AI Trends</h2>
          <p className="text-muted-foreground mb-4 max-w-lg mx-auto">
            Get the latest AI tools, tutorials, and insights delivered to your inbox weekly.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input type="email" placeholder="Your email address" className="h-12" />
            <Button className="h-12">Subscribe</Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
