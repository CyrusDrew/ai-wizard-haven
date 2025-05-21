
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import ToolCard from '@/components/card/ToolCard';
import { Tag } from '@/components/ui/tag';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import { tools, categories } from '@/data/mockData';

const ToolsList = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const category = categories.find((cat) => cat.slug === categorySlug);
  const categoryTools = categorySlug 
    ? tools.filter((tool) => tool.categorySlug === categorySlug)
    : tools;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold">{category ? category.name : 'All AI Tools'}</h1>
            <p className="text-muted-foreground">
              {category 
                ? `Explore ${categoryTools.length} AI tools in the ${category.name} category`
                : `Browse all ${tools.length} AI tools across all categories`
              }
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button 
              variant={showFilters ? "secondary" : "outline"}
              onClick={() => setShowFilters(!showFilters)}
              size="sm"
            >
              <Filter size={16} className="mr-2" /> Filters
            </Button>
            <div className="relative">
              <Input 
                type="text" 
                placeholder="Search tools..." 
                className="w-[200px] pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search size={16} className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground" />
            </div>
          </div>
        </div>
        
        {/* Filter Section */}
        {showFilters && (
          <div className="bg-secondary/50 rounded-lg p-4 mb-8 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <h3 className="font-medium mb-2 flex items-center">
                <SlidersHorizontal size={16} className="mr-2" /> Price
              </h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Checkbox id="free" />
                  <label htmlFor="free" className="ml-2 text-sm">Free</label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="freemium" />
                  <label htmlFor="freemium" className="ml-2 text-sm">Freemium</label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="paid" />
                  <label htmlFor="paid" className="ml-2 text-sm">Paid</label>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Features</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Checkbox id="api" />
                  <label htmlFor="api" className="ml-2 text-sm">API Available</label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="mobile" />
                  <label htmlFor="mobile" className="ml-2 text-sm">Mobile App</label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="desktop" />
                  <label htmlFor="desktop" className="ml-2 text-sm">Desktop App</label>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Rating</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Checkbox id="4plus" />
                  <label htmlFor="4plus" className="ml-2 text-sm">4+ Stars</label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="3plus" />
                  <label htmlFor="3plus" className="ml-2 text-sm">3+ Stars</label>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                <Tag size="sm">OpenAI</Tag>
                <Tag size="sm">NLP</Tag>
                <Tag size="sm">Vision AI</Tag>
                <Tag size="sm">Marketing</Tag>
                <Tag size="sm">Free</Tag>
              </div>
            </div>
          </div>
        )}

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categoryTools.map((tool) => (
            <ToolCard key={tool.id} {...tool} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ToolsList;
