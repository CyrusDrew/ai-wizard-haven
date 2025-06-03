
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare, Home, RefreshCw, Timer } from 'lucide-react';
import HotToolsList from '@/components/tools/HotToolsList';
import HotArticlesSection from '@/components/sections/HotArticlesSection';

const GatewayTimeout = () => {
  return (
    <div className="min-h-screen bg-secondary/20">
      <div className="container mx-auto px-4 py-8">
        {/* Error Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-4xl">
              504
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">网关超时</h1>
          <p className="text-xl text-muted-foreground mb-2">
            服务器响应时间过长，请求已超时
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            可能是网络拥堵或服务器负载较高导致的
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <Button onClick={() => window.location.reload()}>
              <RefreshCw size={16} className="mr-2" />
              重新请求
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
                报告问题
              </Link>
            </Button>
          </div>

          {/* Timeout Info */}
          <Card className="max-w-md mx-auto mb-8 bg-indigo-50 border-indigo-200">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 text-indigo-700">
                <Timer size={20} />
                <div className="text-left">
                  <p className="font-medium">超时解决方案：</p>
                  <ul className="text-sm mt-1 space-y-1">
                    <li>• 等待片刻后重试</li>
                    <li>• 检查网络连接速度</li>
                    <li>• 尝试使用其他功能</li>
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

export default GatewayTimeout;
