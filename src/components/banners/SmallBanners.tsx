
import { Card } from '@/components/ui/card';

const SmallBanners = () => {
  const banners = [
    {
      id: 1,
      title: 'TRAE',
      subtitle: '国内首个AI INSIDE支持MCP，编程更高效',
      bgColor: 'bg-gradient-to-r from-red-500 to-orange-500',
      textColor: 'text-white'
    },
    {
      id: 2,
      title: 'HisTuriArt.com',
      subtitle: '免费AI生图',
      bgColor: 'bg-gradient-to-r from-cyan-400 to-blue-500',
      textColor: 'text-white'
    },
    {
      id: 3,
      title: 'iTTab新标签页',
      subtitle: '重新定义你的浏览器体验！',
      bgColor: 'bg-gradient-to-r from-blue-400 to-purple-500',
      textColor: 'text-white'
    }
  ];

  return (
    <div className="space-y-3">
      {banners.map((banner) => (
        <Card 
          key={banner.id} 
          className={`${banner.bgColor} ${banner.textColor} p-4 cursor-pointer hover:shadow-md transition-shadow border-0`}
        >
          <h4 className="font-bold text-sm mb-1">{banner.title}</h4>
          <p className="text-xs opacity-90">{banner.subtitle}</p>
        </Card>
      ))}
    </div>
  );
};

export default SmallBanners;
