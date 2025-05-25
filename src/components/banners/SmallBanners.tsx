
import { Card } from '@/components/ui/card';

const SmallBanners = () => {
  const banners = [
    {
      id: 1,
      title: 'AI创新大会 · 东京站',
      subtitle: '探索AI技术的无限可能',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=400&q=80',
      bgColor: 'bg-gradient-to-r from-red-500 to-orange-500',
      textColor: 'text-white'
    },
    {
      id: 2,
      title: 'WaytoAGI 全球AI大会',
      subtitle: '连接AI前沿技术与产业应用',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&q=80',
      bgColor: 'bg-gradient-to-r from-cyan-400 to-blue-500',
      textColor: 'text-white'
    },
    {
      id: 3,
      title: 'AI切碎大会',
      subtitle: '深度解析AI技术发展趋势',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80',
      bgColor: 'bg-gradient-to-r from-blue-400 to-purple-500',
      textColor: 'text-white'
    }
  ];

  return (
    <div className="space-y-3">
      {banners.map((banner) => (
        <Card 
          key={banner.id} 
          className="relative overflow-hidden cursor-pointer hover:shadow-md transition-shadow border-0 h-24"
        >
          <div className="absolute inset-0">
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          </div>
          <div className="relative p-3 h-full flex flex-col justify-center text-white">
            <h4 className="font-bold text-sm mb-1 line-clamp-1">{banner.title}</h4>
            <p className="text-xs opacity-90 line-clamp-1">{banner.subtitle}</p>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default SmallBanners;
