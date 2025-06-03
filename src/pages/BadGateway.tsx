
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare, Home, RefreshCw, Wifi } from 'lucide-react';
import HotToolsList from '@/components/tools/HotToolsList';
import HotArticlesSection from '@/components/sections/HotArticlesSection';

const BadGateway = () => {
  return (
    <div className="min-h-screen bg-secondary/20">
      <div className="container mx-auto px-4 py-8">
        {/* Error Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-4xl">
              502
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">网关错误</h1>
          <p className="text-xl text-muted-foreground mb-2">
            服务器网关配置异常，暂时无法处理您的请求
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            这通常是临时性问题，我们正在努力恢复服务
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <Button onClick={() => window.location.reload()}>
              <RefreshCw size={16} className="mr-2" />
              重试连接
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
                联系客服
              </Link>
            </Button>
          </div>

          {/* Network Status */}
          <Card className="max-w-md mx-auto mb-8 bg-yellow-50 border-yellow-200">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 text-yellow-700">
                <Wifi size={20} />
                <div className="text-left">
                  <p className="font-medium">网络状态检查：</p>
                  <ul className="text-sm mt-1 space-y-1">
                    <li>• 检查您的网络连接</li>
                    <li>• 尝试访问其他网站</li>
                    <li>• 联系网络服务商</li>
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

export default BadGateway;
