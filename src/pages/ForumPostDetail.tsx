
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { useParams, Link } from 'react-router-dom';
import { Heart, MessageSquare, Flag, Share2, ArrowUp, ArrowDown, Reply, Edit, Trash } from 'lucide-react';
import { forumTopics } from '@/data/mockData';
import { useState } from 'react';

const ForumPostDetail = () => {
  const { id } = useParams();
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState([
    {
      id: 'c1',
      author: { name: 'Jane Smith', avatar: '', role: 'Member' },
      content: "I've been using ChatGPT for product descriptions and it's been a huge time-saver. The key is to provide detailed examples of your brand voice and the specific product details. I've found that giving it 2-3 examples of good descriptions helps it match my style better.",
      date: '2 days ago',
      likes: 15,
      userLiked: false,
      replies: [
        {
          id: 'r1',
          author: { name: 'Mark Williams', avatar: '', role: 'Member' },
          content: "Thanks for sharing your approach! How long does it usually take you to review and edit the outputs?",
          date: '1 day ago',
          likes: 5,
          userLiked: false,
        }
      ]
    },
    {
      id: 'c2',
      author: { name: 'Alex Chen', avatar: '', role: 'Moderator' },
      content: "I prefer Jasper AI for product descriptions because it has templates specifically designed for e-commerce. It costs a bit more than using ChatGPT, but the specialized features save me tons of time.",
      date: '1 day ago',
      likes: 8,
      userLiked: true,
      replies: []
    },
    {
      id: 'c3',
      author: { name: 'Sarah Johnson', avatar: '', role: 'Member' },
      content: "Has anyone tried using Claude for this purpose? I'm wondering how it compares to ChatGPT and Jasper for product descriptions.",
      date: '12 hours ago',
      likes: 3,
      userLiked: false,
      replies: []
    }
  ]);
  
  const topic = forumTopics.find(t => t.id === id);
  
  if (!topic) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Topic not found</h1>
          <p className="text-muted-foreground mb-8">The forum topic you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/forum">Back to Forum</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const handleLikeComment = (commentId: string, isReply = false, parentId?: string) => {
    setComments(prev => prev.map(comment => {
      if (isReply && parentId && comment.id === parentId) {
        return {
          ...comment,
          replies: comment.replies.map(reply => 
            reply.id === commentId
              ? { ...reply, likes: reply.userLiked ? reply.likes - 1 : reply.likes + 1, userLiked: !reply.userLiked }
              : reply
          )
        };
      } else if (!isReply && comment.id === commentId) {
        return { 
          ...comment, 
          likes: comment.userLiked ? comment.likes - 1 : comment.likes + 1,
          userLiked: !comment.userLiked 
        };
      }
      return comment;
    }));
  };

  const handleSubmitComment = () => {
    if (!newComment.trim()) return;
    
    const newCommentObj = {
      id: `c${comments.length + 1}`,
      author: { name: 'Current User', avatar: '', role: 'Member' },
      content: newComment,
      date: 'Just now',
      likes: 0,
      userLiked: false,
      replies: []
    };
    
    setComments(prev => [...prev, newCommentObj]);
    setNewComment('');
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/forum" className="text-primary hover:underline flex items-center gap-1 mb-4">
            <ArrowDown className="rotate-90 h-4 w-4" /> Back to Forum
          </Link>
          
          <div className="flex gap-2 mb-2">
            <Badge>{topic.category}</Badge>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold mb-4">{topic.title}</h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src={topic.author.avatar} alt={topic.author.name} />
                <AvatarFallback>{topic.author.name[0]}</AvatarFallback>
              </Avatar>
              <span>{topic.author.name}</span>
            </div>
            <span>Posted {topic.date}</span>
            <span>{topic.views} views</span>
            <span>{topic.replies} replies</span>
          </div>
        </div>
        
        {/* Main Topic Content */}
        <Card className="p-6 mb-8">
          <div className="prose max-w-none mb-6">
            <p>
              Hi everyone,
            </p>
            <p>
              I'm looking for recommendations on the best AI tool for generating product descriptions for my e-commerce store. 
              I sell handmade jewelry and need to create unique, engaging descriptions for about 200 products.
            </p>
            <p>
              I've tried ChatGPT but I'm finding the outputs a bit generic. Has anyone had success with other tools specifically 
              for product descriptions? I'm willing to pay for a good solution that saves me time.
            </p>
            <p>
              Thanks in advance for your advice!
            </p>
          </div>
          
          {/* Post Actions */}
          <div className="flex justify-between items-center pt-4 border-t">
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" className="gap-2">
                <Heart size={16} />
                <span>42</span>
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <MessageSquare size={16} />
                <span>{topic.replies}</span>
              </Button>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm">
                <Share2 size={16} className="mr-2" />
                Share
              </Button>
              <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                <Flag size={16} className="mr-2" />
                Report
              </Button>
            </div>
          </div>
        </Card>
        
        {/* Comments Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Replies ({comments.length})</h2>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Sort by:</span>
            <Button variant="ghost" size="sm">Newest</Button>
            <Button variant="ghost" size="sm">Top</Button>
          </div>
        </div>
        
        {/* Comments */}
        <div className="space-y-6 mb-8">
          {comments.map((comment) => (
            <div key={comment.id} className="border rounded-lg overflow-hidden">
              <div className="p-4 bg-card">
                {/* Comment header */}
                <div className="flex justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={comment.author.avatar} alt={comment.author.name} />
                      <AvatarFallback>{comment.author.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium flex items-center gap-2">
                        {comment.author.name}
                        {comment.author.role === 'Moderator' && (
                          <Badge variant="outline" className="text-xs">Moderator</Badge>
                        )}
                      </div>
                      <div className="text-xs text-muted-foreground">{comment.date}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Edit size={14} />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:text-destructive">
                      <Trash size={14} />
                    </Button>
                  </div>
                </div>
                
                {/* Comment content */}
                <div className="mb-3">
                  <p>{comment.content}</p>
                </div>
                
                {/* Comment actions */}
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8"
                      onClick={() => handleLikeComment(comment.id)}
                    >
                      <ArrowUp className={comment.userLiked ? "text-primary fill-primary" : ""} size={16} />
                    </Button>
                    <span>{comment.likes}</span>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ArrowDown size={16} />
                    </Button>
                  </div>
                  <Button variant="ghost" size="sm" className="h-8 gap-1">
                    <Reply size={14} />
                    Reply
                  </Button>
                </div>
              </div>
              
              {/* Replies */}
              {comment.replies.length > 0 && (
                <div className="bg-muted/40 px-4 py-3 border-t">
                  {comment.replies.map(reply => (
                    <div key={reply.id} className="mb-3 pb-3 last:mb-0 last:pb-0">
                      <div className="flex justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={reply.author.avatar} alt={reply.author.name} />
                            <AvatarFallback>{reply.author.name[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium text-sm">{reply.author.name}</div>
                            <div className="text-xs text-muted-foreground">{reply.date}</div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-2 pl-8">
                        <p className="text-sm">{reply.content}</p>
                      </div>
                      <div className="flex items-center gap-4 text-sm pl-8">
                        <div className="flex items-center gap-1">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-6 w-6"
                            onClick={() => handleLikeComment(reply.id, true, comment.id)}
                          >
                            <ArrowUp className={reply.userLiked ? "text-primary fill-primary" : ""} size={14} />
                          </Button>
                          <span className="text-xs">{reply.likes}</span>
                          <Button variant="ghost" size="icon" className="h-6 w-6">
                            <ArrowDown size={14} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Add Comment */}
        <div className="mb-8">
          <h3 className="font-medium mb-3">Add your reply</h3>
          <Textarea 
            placeholder="Write your reply..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="mb-3"
            rows={5}
          />
          <Button onClick={handleSubmitComment} disabled={!newComment.trim()}>
            Post Reply
          </Button>
        </div>
        
        {/* Similar Topics */}
        <div className="border-t pt-6">
          <h2 className="text-xl font-semibold mb-4">Similar Topics</h2>
          <div className="space-y-3">
            {forumTopics.filter(t => t.id !== topic.id).slice(0, 3).map(topic => (
              <div key={topic.id} className="border rounded-lg p-3 hover:bg-muted/30">
                <Link to={`/forum/topic/${topic.id}`} className="hover:text-primary">
                  <h3 className="font-medium mb-1">{topic.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{topic.replies} replies</span>
                    <span>{topic.views} views</span>
                    <span>Posted by {topic.author.name}</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ForumPostDetail;
