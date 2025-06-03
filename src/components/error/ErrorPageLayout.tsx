
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ReactNode } from 'react';
import HotToolsList from '@/components/tools/HotToolsList';
import HotArticlesSection from '@/components/sections/HotArticlesSection';

interface ErrorPageLayoutProps {
  errorCode: string;
  title: string;
  description: string;
  subDescription: string;
  primaryAction: {
    label: string;
    onClick: () => void;
    icon: ReactNode;
  };
  infoCard?: {
    icon: ReactNode;
    title: string;
    items: string[];
    bgColor: string;
    textColor: string;
  };
  gradientFrom: string;
  gradientTo: string;
}

const ErrorPageLayout = ({
  errorCode,
  title,
  description,
  subDescription,
  primaryAction,
  infoCard,
  gradientFrom,
  gradientTo
}: ErrorPageLayoutProps) => {
  return (
    <div className="min-h-screen bg-secondary/20">
      <div className="container mx-auto px-4 py-8">
        {/* Error Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <div className={`w-24 h-24 bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-lg flex items-center justify-center text-white font-bold text-4xl`}>
              {errorCode}
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-muted-foreground mb-2">{description}</p>
          <p className="text-sm text-muted-foreground mb-8">{subDescription}</p>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <Button onClick={primaryAction.onClick}>
              {primaryAction.icon}
              {primaryAction.label}
            </Button>
            <Button variant="outline" asChild>
              <Link to="/">
                <span className="mr-2">🏠</span>
                返回首页
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/forum">
                <span className="mr-2">💬</span>
                联系客服
              </Link>
            </Button>
          </div>

          {/* Info Card */}
          {infoCard && (
            <Card className={`max-w-md mx-auto mb-8 ${infoCard.bgColor}`}>
              <CardContent className="p-4">
                <div className={`flex items-center gap-2 ${infoCard.textColor}`}>
                  {infoCard.icon}
                  <div className="text-left">
                    <p className="font-medium">{infoCard.title}</p>
                    <ul className="text-sm mt-1 space-y-1">
                      {infoCard.items.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
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

export default ErrorPageLayout;
