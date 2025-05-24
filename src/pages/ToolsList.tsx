
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, SlidersHorizontal, X, Grid, Filter } from 'lucide-react';
import { categories, tools } from '@/data/mockData';
import ToolCard from '@/components/card/ToolCard';
import { Link } from 'react-router-dom';

// Get unique list of all tags from tools
const allTags = Array.from(new Set(tools.flatMap(tool => tool.tags)));

const priceFilters = [
  { id: 'free', label: '免费工具' },
  { id: 'paid', label: '付费工具' },
  { id: 'freemium', label: '有免费版' }
];

const ToolsList = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPricing, setSelectedPricing] = useState<string[]>([]);
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
    
    // Filter by selected categories
    if (selectedCategories.length > 0) {
      result = result.filter(tool => selectedCategories.includes(tool.categorySlug));
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
  }, [categorySlug, searchQuery, selectedTags, selectedCategories, minRating]);
  
  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };
  
  const toggleCategory = (categorySlug: string) => {
    if (selectedCategories.includes(categorySlug)) {
      setSelectedCategories(selectedCategories.filter(c => c !== categorySlug));
    } else {
      setSelectedCategories([...selectedCategories, categorySlug]);
    }
  };
  
  const clearFilters = () => {
    setSearchQuery('');
    setSelectedTags([]);
    setSelectedCategories([]);
    setSelectedPricing([]);
    setMinRating(0);
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            {category ? category.name : '所有AI工具'}
          </h1>
          <p className="text-muted-foreground">
            {category 
              ? `发现最好的${category.name.toLowerCase()}工具，提升您的工作流程和创造力。`
              : '浏览我们全面的AI工具集合，涵盖各种类别。'}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Categories and Filters */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Categories */}
              {!categorySlug && (
                <Card>
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Grid size={20} />
                      分类筛选
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Button 
                        variant={selectedCategories.length === 0 ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategories([])}
                        className="w-full justify-start"
                      >
                        全部工具
                      </Button>
                      {categories.map(cat => (
                        <Button
                          key={cat.id}
                          variant={selectedCategories.includes(cat.slug) ? "default" : "outline"}
                          size="sm"
                          onClick={() => toggleCategory(cat.slug)}
                          className="w-full justify-start"
                        >
                          {cat.name}
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
              
              {/* Price Filters */}
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">价格筛选</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {priceFilters.map(filter => (
                      <div key={filter.id} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`price-${filter.id}`} 
                          checked={selectedPricing.includes(filter.id)}
                          onCheckedChange={() => {
                            if (selectedPricing.includes(filter.id)) {
                              setSelectedPricing(selectedPricing.filter(p => p !== filter.id));
                            } else {
                              setSelectedPricing([...selectedPricing, filter.id]);
                            }
                          }}
                        />
                        <label 
                          htmlFor={`price-${filter.id}`}
                          className="text-sm cursor-pointer flex-1"
                        >
                          {filter.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Filters */}
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Filter size={20} />
                    高级筛选
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Rating Filter */}
                  <div className="mb-6">
                    <h3 className="text-sm font-medium mb-2">最低评分</h3>
                    <Slider
                      value={[minRating]}
                      min={0}
                      max={5}
                      step={0.5}
                      onValueChange={([value]) => setMinRating(value)}
                      className="my-4"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>任意</span>
                      <span>{minRating} 星+</span>
                    </div>
                  </div>
                  
                  {/* Tags Filter */}
                  <div>
                    <h3 className="text-sm font-medium mb-2">标签筛选</h3>
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
                  
                  <Button 
                    variant="outline" 
                    onClick={clearFilters}
                    className="w-full mt-4"
                  >
                    重置筛选
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Main Content - Tool Results */}
          <div className="lg:col-span-3">
            {/* Search and Applied Filters */}
            <div className="mb-6">
              {/* Search Bar */}
              <div className="relative mb-4">
                <Input
                  type="text"
                  placeholder="搜索工具名称、描述或标签..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pr-10"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              </div>
              
              {/* Applied Filters */}
              {(searchQuery || selectedTags.length > 0 || selectedCategories.length > 0 || minRating > 0) && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {searchQuery && (
                    <Badge variant="secondary" className="flex items-center gap-2">
                      搜索: {searchQuery}
                      <X 
                        size={14} 
                        className="cursor-pointer" 
                        onClick={() => setSearchQuery('')}
                      />
                    </Badge>
                  )}
                  
                  {selectedCategories.map(catSlug => {
                    const cat = categories.find(c => c.slug === catSlug);
                    return (
                      <Badge key={catSlug} variant="secondary" className="flex items-center gap-2">
                        {cat?.name}
                        <X 
                          size={14} 
                          className="cursor-pointer" 
                          onClick={() => toggleCategory(catSlug)}
                        />
                      </Badge>
                    );
                  })}
                  
                  {selectedTags.map(tag => (
                    <Badge key={tag} variant="secondary" className="flex items-center gap-2">
                      {tag}
                      <X 
                        size={14} 
                        className="cursor-pointer" 
                        onClick={() => toggleTag(tag)}
                      />
                    </Badge>
                  ))}
                  
                  {minRating > 0 && (
                    <Badge variant="secondary" className="flex items-center gap-2">
                      评分: {minRating}+ 星
                      <X 
                        size={14} 
                        className="cursor-pointer" 
                        onClick={() => setMinRating(0)}
                      />
                    </Badge>
                  )}
                  
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={clearFilters}
                    className="text-muted-foreground"
                  >
                    清除全部
                  </Button>
                </div>
              )}
            </div>
            
            {/* Results */}
            {filteredTools.length === 0 ? (
              <div className="text-center py-16">
                <h3 className="text-xl font-medium mb-2">未找到工具</h3>
                <p className="text-muted-foreground">
                  请尝试调整搜索或筛选条件来找到您需要的工具。
                </p>
                <Button 
                  variant="outline" 
                  onClick={clearFilters}
                  className="mt-4"
                >
                  清除所有筛选
                </Button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-4">
                  <p className="text-muted-foreground">
                    找到 {filteredTools.length} 个{filteredTools.length === 1 ? '工具' : '工具'}
                  </p>
                  <Button variant="outline" size="sm">
                    按评分排序
                  </Button>
                </div>
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
