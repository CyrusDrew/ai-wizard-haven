
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
  
  const featuredTools = tools.filter(tool => tool.featured);
  const popularCategories = categories.slice(0, 8);
  const moreTools = tools.filter(tool => !tool.featured);

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
              <CategoryIcon key={category.id} category={category} />
            ))}
          </div>
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
