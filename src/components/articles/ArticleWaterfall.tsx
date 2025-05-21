
import { useEffect, useState, useRef } from 'react';
import BlogPostCard from '@/components/card/BlogPostCard';
import { blogPosts } from '@/data/mockData';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';

const MAX_ARTICLES = 30;
const INITIAL_LOAD = 6;
const LOAD_MORE_COUNT = 6;

const ArticleWaterfall = () => {
  const [visiblePosts, setVisiblePosts] = useState(blogPosts.slice(0, INITIAL_LOAD));
  const [hasMore, setHasMore] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const loadingRef = useRef<HTMLDivElement>(null);

  const loadMorePosts = () => {
    if (visiblePosts.length >= MAX_ARTICLES) {
      setHasMore(false);
      return;
    }
    
    const nextBatch = blogPosts.slice(
      visiblePosts.length,
      Math.min(visiblePosts.length + LOAD_MORE_COUNT, MAX_ARTICLES)
    );
    
    setVisiblePosts(prev => [...prev, ...nextBatch]);
    
    if (visiblePosts.length + LOAD_MORE_COUNT >= MAX_ARTICLES) {
      setHasMore(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && hasMore) {
          loadMorePosts();
        }
      },
      { threshold: 0.1 }
    );

    if (loadingRef.current) {
      observer.observe(loadingRef.current);
    }

    return () => {
      if (loadingRef.current) {
        observer.unobserve(loadingRef.current);
      }
    };
  }, [hasMore, visiblePosts.length]);

  return (
    <section className="my-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold flex items-center">
          <FileText size={24} className="mr-2 text-ai-purple" />
          Latest Articles
        </h2>
      </div>
      
      <ScrollArea className="w-full" style={{ maxHeight: 'calc(100vh - 200px)' }}>
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visiblePosts.map((post) => (
            <BlogPostCard 
              key={post.id}
              {...post}
              className="h-full"
            />
          ))}
        </div>
        
        <div ref={loadingRef} className="py-8 text-center">
          {hasMore ? (
            <Button 
              variant="outline" 
              onClick={loadMorePosts}
              className="mx-auto"
            >
              Load More Articles
            </Button>
          ) : visiblePosts.length >= MAX_ARTICLES ? (
            <p className="text-muted-foreground">You've reached the end of the articles.</p>
          ) : null}
        </div>
      </ScrollArea>
    </section>
  );
};

export default ArticleWaterfall;
