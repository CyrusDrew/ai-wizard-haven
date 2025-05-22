
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, Heart, Bookmark, Share, MessageSquare } from 'lucide-react';
import { blogPosts } from '@/data/mockData';
import { useState } from 'react';

const ArticleDetail = () => {
  const { id } = useParams();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(42);
  
  // Find the article based on the ID from the URL
  const article = blogPosts.find(post => post.id === id);
  
  if (!article) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Article not found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  // Related articles (excluding current article)
  const relatedArticles = blogPosts
    .filter(post => post.id !== article.id && post.tags.some(tag => article.tags.includes(tag)))
    .slice(0, 3);

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Article Header */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex gap-2 mb-4">
            {article.tags.map(tag => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>
          
          <div className="flex items-center gap-4 mb-6">
            <Avatar className="h-10 w-10">
              <AvatarImage src={article.author.avatar} alt={article.author.name} />
              <AvatarFallback>{article.author.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">{article.author.name}</div>
              <div className="text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {article.date}
                </span>
              </div>
            </div>
            <div className="ml-auto flex items-center gap-2 text-sm">
              <span className="flex items-center gap-1 text-muted-foreground">
                <Clock size={14} />
                {article.readTime}
              </span>
            </div>
          </div>
        </div>
        
        {/* Featured Image */}
        <div className="max-w-4xl mx-auto mb-8 rounded-lg overflow-hidden">
          <img 
            src={article.image || "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=2000&q=80"} 
            alt={article.title} 
            className="w-full h-auto object-cover aspect-video"
          />
        </div>
        
        {/* Article Content */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="prose prose-lg dark:prose-invert mx-auto">
            {/* This would be the actual article content from a CMS or database */}
            <p className="text-lg mb-4">{article.excerpt}</p>
            
            <p className="mb-4">
              AI technology continues to evolve at an unprecedented pace, transforming industries and creating new opportunities for innovation. 
              As these tools become more sophisticated, understanding their capabilities and limitations becomes increasingly important.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">The Evolution of AI Tools</h2>
            
            <p className="mb-4">
              From basic rule-based systems to advanced neural networks, the journey of AI development has been remarkable. 
              Today's tools can generate human-like text, create stunning visuals, compose music, and even assist in scientific research.
            </p>
            
            <p className="mb-4">
              As users, we must learn how to effectively prompt these systems to get the most beneficial results. This involves understanding
              the strengths and weaknesses of different models, as well as the ethical considerations of their use.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Practical Applications</h2>
            
            <p className="mb-4">
              The practical applications of these technologies span virtually every industry. In healthcare, AI is assisting with diagnosis and 
              treatment planning. In education, personalized learning experiences are being created with AI tutors. 
              Creative industries are seeing new tools for art, music, and content creation.
            </p>
            
            <p className="mb-8">
              As these tools continue to develop, staying informed about their capabilities and best practices for their use will be essential 
              for professionals across all fields.
            </p>
          </div>
          
          {/* Article Actions */}
          <div className="flex justify-between items-center border-t border-b py-4 my-8">
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" className="flex gap-2" onClick={handleLike}>
                <Heart size={18} className={isLiked ? "fill-red-500 text-red-500" : ""} />
                <span>{likeCount}</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex gap-2">
                <MessageSquare size={18} />
                <span>24</span>
              </Button>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" onClick={handleBookmark}>
                <Bookmark size={18} className={isBookmarked ? "fill-primary" : ""} />
              </Button>
              <Button variant="ghost" size="sm">
                <Share size={18} />
              </Button>
            </div>
          </div>
          
          {/* Author Bio */}
          <div className="bg-muted/50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-medium mb-2">About the Author</h3>
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={article.author.avatar} alt={article.author.name} />
                <AvatarFallback>{article.author.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{article.author.name}</div>
                <p className="text-sm text-muted-foreground">AI technology writer and researcher with over 10 years of experience in the field. Specializing in the ethical implications of AI and its practical applications.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Articles */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map(relatedArticle => (
              <Card key={relatedArticle.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <Link to={`/articles/${relatedArticle.id}`}>
                  <div className="aspect-video bg-muted">
                    <img 
                      src={relatedArticle.image || "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"} 
                      alt={relatedArticle.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium mb-2 line-clamp-2">{relatedArticle.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{relatedArticle.excerpt}</p>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ArticleDetail;
