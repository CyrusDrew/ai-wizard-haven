
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare, Home, RefreshCw, Clock } from 'lucide-react';
import HotToolsList from '@/components/tools/HotToolsList';
import HotArticlesSection from '@/components/sections/HotArticlesSection';

const ServiceUnavailable = () => {
  return (
    <div className="min-h-screen bg-secondary/20">
      <div className="container mx-auto px-4 py-8">
        {/* Error Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-4xl">
              503
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">服务暂时不可用</h1>
          <p className="text-xl text-muted-foreground mb-2">
            服务器正在维护或负载过高，暂时无法提供服务
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            预计恢复时间：约30分钟，感谢您的耐心等待
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <Button onClick={() => window.location.reload()}>
              <RefreshCw size={16} className="mr-2" />
              检查恢复
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
                获取更新
              </Link>
            </Button>
          </div>

          {/* Maintenance Info */}
          <Card className="max-w-md mx-auto mb-8 bg-purple-50 border-purple-200">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 text-purple-700">
                <Clock size={20} />
                <div className="text-left">
                  <p className="font-medium">维护信息：</p>
                  <ul className="text-sm mt-1 space-y-1">
                    <li>• 系统性能优化中</li>
                    <li>• 新功能部署准备</li>
                    <li>• 安全更新安装</li>
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

export default ServiceUnavailable;
