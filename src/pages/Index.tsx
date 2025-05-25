
import { useState, useRef } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import CategoryIcon from '@/components/CategoryIcon';
import ToolCard from '@/components/card/ToolCard';
import BlogPostCard from '@/components/card/BlogPostCard';
import ArticleWaterfall from '@/components/articles/ArticleWaterfall';
import HeroCarousel from '@/components/carousel/HeroCarousel';
import HotArticlesSection from '@/components/sections/HotArticlesSection';
import { categories, tools, blogPosts } from '@/data/mockData';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect } from 'react';

const Index = () => {
  const featuredCarouselRef = useRef(null);
  const moreToolsCarouselRef = useRef(null);
  const popularCategories = categories.slice(0, 8);
  const [selectedCategory, setSelectedCategory] = useState<string>(popularCategories[0]?.slug || '');
  
  const featuredTools = tools.filter(tool => tool.featured);
  const moreTools = tools.filter(tool => !tool.featured);

  // Filter tools based on selected category
  const filteredCategoryTools = tools.filter(tool => tool.categorySlug === selectedCategory);

  // Auto scroll the carousels every 4 seconds
  useEffect(() => {
    const featuredInterval = setInterval(() => {
      if (featuredCarouselRef.current && featuredCarouselRef.current.scrollNext) {
        featuredCarouselRef.current.scrollNext();
      }
    }, 4000);
    
    const moreToolsInterval = setInterval(() => {
      if (moreToolsCarouselRef.current && moreToolsCarouselRef.current.scrollNext) {
        moreToolsCarouselRef.current.scrollNext();
      }
    }, 5000);
    
    return () => {
      clearInterval(featuredInterval);
      clearInterval(moreToolsInterval);
    };
  }, []);

  const handleCategoryClick = (categorySlug: string) => {
    setSelectedCategory(categorySlug);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Hero Carousel */}
        <HeroCarousel />

        {/* Categories Section - "Golden Area" with icons */}
        <section className="mb-12 mt-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Popular Categories</h2>
            <Button variant="outline" asChild>
              <Link to="/categories">View All Categories</Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {popularCategories.map((category) => (
              <div 
                key={category.id}
                onClick={() => handleCategoryClick(category.slug)}
                className={`flex flex-col items-center justify-center p-5 rounded-lg hover:shadow-md transition-all duration-200 border border-border cursor-pointer ${
                  selectedCategory === category.slug ? 'bg-primary/10 border-primary' : 'bg-white dark:bg-gray-800'
                }`}
              >
                <CategoryIcon category={category} className="border-0 p-0 hover:shadow-none" />
              </div>
            ))}
          </div>
        </section>

        {/* Tools Grid Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">
              {categories.find(c => c.slug === selectedCategory)?.name || 'Tools'}
            </h2>
            <span className="text-muted-foreground text-sm">
              {filteredCategoryTools.length} tools found
            </span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-4">
            {filteredCategoryTools.slice(0, 24).map((tool) => (
              <div key={tool.id} className="group cursor-pointer">
                <Link to={`/tools/${tool.id}`} className="block">
                  <div className="flex flex-col items-center p-4 rounded-lg border border-border hover:shadow-md transition-all duration-200 bg-white dark:bg-gray-800">
                    <div className="w-12 h-12 mb-3 rounded-lg overflow-hidden">
                      {tool.image ? (
                        <img 
                          src={tool.image} 
                          alt={tool.name} 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-ai-purple to-ai-blue"></div>
                      )}
                    </div>
                    <h3 className="font-medium text-sm text-center line-clamp-1 mb-1">{tool.name}</h3>
                    <p className="text-xs text-muted-foreground text-center line-clamp-2">{tool.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          
          {filteredCategoryTools.length > 24 && (
            <div className="text-center mt-6">
              <Button variant="outline" asChild>
                <Link to={`/categories/${selectedCategory}`}>
                  View More Tools
                </Link>
              </Button>
            </div>
          )}
        </section>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content - 3/4 width */}
          <div className="lg:col-span-3">
            {/* Featured Tools Section */}
            <section className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold">Featured Tools</h2>
                <Button variant="ghost" size="sm" className="text-primary flex items-center">
                  <TrendingUp size={16} className="mr-1" /> 
                  Trending
                </Button>
              </div>

              {/* Featured Tools Carousel */}
              <div className="mb-8">
                <Carousel 
                  className="w-full" 
                  setApi={(api) => {
                    featuredCarouselRef.current = api;
                  }}
                >
                  <CarouselContent className="-ml-4">
                    {featuredTools.map((tool) => (
                      <CarouselItem key={tool.id} className="pl-4 md:basis-1/2 lg:basis-1/2">
                        <ToolCard {...tool} className="h-full" />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="hidden md:flex">
                    <CarouselPrevious />
                    <CarouselNext />
                  </div>
                </Carousel>
              </div>
              
              {/* Explore More Tools Carousel */}
              <div className="mt-12 mb-8">
                <h3 className="text-xl font-semibold mb-6">Explore More Tools</h3>
                <Carousel 
                  className="w-full"
                  setApi={(api) => {
                    moreToolsCarouselRef.current = api;
                  }}
                >
                  <CarouselContent className="-ml-4">
                    {moreTools.slice(0, 8).map((tool) => (
                      <CarouselItem key={tool.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                        <ToolCard {...tool} className="h-full" />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="hidden md:flex">
                    <CarouselPrevious />
                    <CarouselNext />
                  </div>
                </Carousel>
              </div>
              
              {/* Latest Articles Waterfall after featured tools */}
              <ArticleWaterfall />
            </section>
          </div>

          {/* Sidebar - 1/4 width */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <HotArticlesSection />
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <section className="bg-gradient-to-r from-ai-purple/10 to-ai-blue/10 rounded-xl p-8 text-center mb-8 mt-8">
          <h2 className="text-2xl font-semibold mb-2">Stay Updated with AI Trends</h2>
          <p className="text-muted-foreground mb-4 max-w-lg mx-auto">
            Get the latest AI tools, tutorials, and insights delivered to your inbox weekly.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Your email address" className="h-12 px-4 border border-gray-300 rounded-md flex-1" />
            <Button className="h-12">Subscribe</Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
