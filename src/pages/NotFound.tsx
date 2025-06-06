
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, Home, Search, RefreshCw, ArrowLeft } from 'lucide-react';
import HotToolsList from '@/components/tools/HotToolsList';
import HotArticlesSection from '@/components/sections/HotArticlesSection';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-secondary/20">
      <div className="container mx-auto px-4 py-8">
        {/* Error Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-gradient-to-r from-ai-purple to-ai-blue rounded-lg flex items-center justify-center text-white font-bold text-4xl">
              404
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">页面未找到</h1>
          <p className="text-xl text-muted-foreground mb-2">
            抱歉，您访问的页面不存在或已被移除
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            可能的原因：链接已过期、页面已删除或URL输入错误
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <Button asChild>
              <Link to="/">
                <Home size={16} className="mr-2" />
                返回首页
              </Link>
            </Button>
            <Button variant="outline" onClick={() => window.history.back()}>
              <ArrowLeft size={16} className="mr-2" />
              返回上页
            </Button>
            <Button variant="outline" asChild>
              <Link to="/forum">
                <MessageSquare size={16} className="mr-2" />
                社区求助
              </Link>
            </Button>
            <Button variant="outline" onClick={() => window.location.reload()}>
              <RefreshCw size={16} className="mr-2" />
              刷新页面
            </Button>
          </div>
        </div>

        {/* Hot Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Hot Tools */}
          <div className="lg:col-span-1">
            <HotToolsList />
          </div>
          
          {/* Hot Articles */}
          <div className="lg:col-span-2">
            <HotArticlesSection showTitle={true} />
          </div>
        </div>

        {/* Quick Navigation */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-lg">快速导航</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link to="/categories" className="flex items-center gap-2 p-3 rounded-lg hover:bg-muted transition-colors">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  🔧
                </div>
                <span className="font-medium">AI工具</span>
              </Link>
              <Link to="/articles" className="flex items-center gap-2 p-3 rounded-lg hover:bg-muted transition-colors">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  📝
                </div>
                <span className="font-medium">技术文章</span>
              </Link>
              <Link to="/forum" className="flex items-center gap-2 p-3 rounded-lg hover:bg-muted transition-colors">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  💬
                </div>
                <span className="font-medium">社区讨论</span>
              </Link>
              <Link to="/submit-tool" className="flex items-center gap-2 p-3 rounded-lg hover:bg-muted transition-colors">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  ➕
                </div>
                <span className="font-medium">提交工具</span>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NotFound;
