
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MessageSquare, Home, Search } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary/20 px-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-gradient-to-r from-ai-purple to-ai-blue rounded-lg flex items-center justify-center text-white font-bold text-3xl">
            404
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4">Page not found</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild>
            <Link to="/">
              <Home size={16} className="mr-2" />
              Back to Home
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/forum">
              <MessageSquare size={16} className="mr-2" />
              Ask the Community
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
