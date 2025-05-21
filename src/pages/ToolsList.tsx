
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { categories, tools } from '@/data/mockData';
import ToolCard from '@/components/card/ToolCard';
import { ColorVariant } from '@/components/card/ToolCard';

// Get unique list of all tags from tools
const allTags = Array.from(new Set(tools.flatMap(tool => tool.tags)));

const ToolsList = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [minRating, setMinRating] = useState(0);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [filteredTools, setFilteredTools] = useState(tools);
  
  const category = categories.find(c => c.slug === categorySlug);
  
  // Apply filters
  useEffect(() => {
    let result = tools;
    
    // Filter by category if provided
    if (categorySlug) {
      result = result.filter(tool => tool.categorySlug === categorySlug);
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        tool => 
          tool.name.toLowerCase().includes(query) || 
          tool.description.toLowerCase().includes(query) ||
          tool.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    // Filter by tags
    if (selectedTags.length > 0) {
      result = result.filter(
        tool => selectedTags.some(tag => tool.tags.includes(tag))
      );
    }
    
    // Filter by rating
    if (minRating > 0) {
      result = result.filter(tool => tool.rating >= minRating);
    }
    
    setFilteredTools(result);
  }, [categorySlug, searchQuery, selectedTags, minRating]);
  
  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };
  
  const clearFilters = () => {
    setSearchQuery('');
    setSelectedTags([]);
    setMinRating(0);
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            {category ? category.name : 'All AI Tools'}
          </h1>
          <p className="text-muted-foreground">
            {category 
              ? `Discover the best ${category.name.toLowerCase()} to enhance your workflow and creativity.`
              : 'Browse our comprehensive collection of AI tools across various categories.'}
          </p>
        </div>
        
        {/* Search and Filter UI */}
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          {/* Search Bar */}
          <div className="flex-1">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search tools by name, description, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            </div>
          </div>
          
          {/* Filter Toggle (mobile) */}
          <div className="lg:hidden">
            <Button 
              variant="outline" 
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="w-full flex items-center justify-center"
            >
              <SlidersHorizontal size={18} className="mr-2" />
              {filtersOpen ? 'Hide Filters' : 'Show Filters'}
            </Button>
          </div>
          
          {/* Applied Filters */}
          {(searchQuery || selectedTags.length > 0 || minRating > 0) && (
            <div className="flex flex-wrap gap-2 mt-4">
              {searchQuery && (
                <div className="flex items-center bg-muted rounded-full px-3 py-1 text-sm">
                  <span>Search: {searchQuery}</span>
                  <X 
                    size={14} 
                    className="ml-2 cursor-pointer" 
                    onClick={() => setSearchQuery('')}
                  />
                </div>
              )}
              
              {selectedTags.map(tag => (
                <div key={tag} className="flex items-center bg-muted rounded-full px-3 py-1 text-sm">
                  <span>{tag}</span>
                  <X 
                    size={14} 
                    className="ml-2 cursor-pointer" 
                    onClick={() => toggleTag(tag)}
                  />
                </div>
              ))}
              
              {minRating > 0 && (
                <div className="flex items-center bg-muted rounded-full px-3 py-1 text-sm">
                  <span>Rating: {minRating}+ stars</span>
                  <X 
                    size={14} 
                    className="ml-2 cursor-pointer" 
                    onClick={() => setMinRating(0)}
                  />
                </div>
              )}
              
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={clearFilters}
                className="text-muted-foreground"
              >
                Clear all
              </Button>
            </div>
          )}
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-64 ${filtersOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-card rounded-lg border p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold">Filters</h2>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={clearFilters}
                >
                  Reset
                </Button>
              </div>
              
              {/* Rating Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-2">Minimum Rating</h3>
                <Slider
                  value={[minRating]}
                  min={0}
                  max={5}
                  step={0.5}
                  onValueChange={([value]) => setMinRating(value)}
                  className="my-4"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Any</span>
                  <span>{minRating} stars+</span>
                </div>
              </div>
              
              {/* Tags Filter */}
              <div>
                <h3 className="text-sm font-medium mb-2">Tags</h3>
                <ScrollArea className="h-64 pr-4">
                  <div className="space-y-2">
                    {allTags.map(tag => (
                      <div key={tag} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`tag-${tag}`} 
                          checked={selectedTags.includes(tag)}
                          onCheckedChange={() => toggleTag(tag)}
                        />
                        <label 
                          htmlFor={`tag-${tag}`}
                          className="text-sm cursor-pointer flex-1"
                        >
                          {tag}
                        </label>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </div>
          </div>
          
          {/* Results Grid */}
          <div className="flex-1">
            {filteredTools.length === 0 ? (
              <div className="text-center py-16">
                <h3 className="text-xl font-medium mb-2">No tools found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filters to find what you're looking for.
                </p>
                <Button 
                  variant="outline" 
                  onClick={clearFilters}
                  className="mt-4"
                >
                  Clear all filters
                </Button>
              </div>
            ) : (
              <>
                <p className="mb-4 text-muted-foreground">
                  Found {filteredTools.length} {filteredTools.length === 1 ? 'tool' : 'tools'}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredTools.map(tool => (
                    <ToolCard key={tool.id} {...tool} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ToolsList;
