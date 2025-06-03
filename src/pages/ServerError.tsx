
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, Home, RefreshCw, AlertTriangle } from 'lucide-react';
import HotToolsList from '@/components/tools/HotToolsList';
import HotArticlesSection from '@/components/sections/HotArticlesSection';

const ServerError = () => {
  return (
    <div className="min-h-screen bg-secondary/20">
      <div className="container mx-auto px-4 py-8">
        {/* Error Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-4xl">
              500
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">服务器内部错误</h1>
          <p className="text-xl text-muted-foreground mb-2">
            抱歉，服务器遇到了意外错误，无法完成您的请求
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            我们已收到错误报告，技术团队正在紧急修复中，请稍后重试
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <Button onClick={() => window.location.reload()}>
              <RefreshCw size={16} className="mr-2" />
              重新加载
            </Button>
            <Button variant="outline" asChild>
              <Link to="/">
                <Home size={16} className="mr-2" />
                返回首页
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/forum">
                <MessageSquare size={16} className="mr-2" />
                反馈问题
              </Link>
            </Button>
          </div>

          {/* Error Info */}
          <Card className="max-w-md mx-auto mb-8 bg-orange-50 border-orange-200">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 text-orange-700">
                <AlertTriangle size={20} />
                <div className="text-left">
                  <p className="font-medium">可能的解决方案：</p>
                  <ul className="text-sm mt-1 space-y-1">
                    <li>• 刷新页面重试</li>
                    <li>• 检查网络连接</li>
                    <li>• 稍后再次访问</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Hot Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <HotToolsList />
          </div>
          <div className="lg:col-span-2">
            <HotArticlesSection showTitle={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServerError;
