
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const carouselImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=1200&q=80",
    title: "AI创新大会 · 东京站",
    subtitle: "探索AI技术的无限可能",
    badge: "热门活动"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80",
    title: "WaytoAGI 全球AI大会",
    subtitle: "连接AI前沿技术与产业应用",
    badge: "即将开始"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    title: "AI切碎大会",
    subtitle: "深度解析AI技术发展趋势",
    badge: "精彩回顾"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    title: "MCP Server 全球应用创新大赛",
    subtitle: "挖掘AI应用创新潜力",
    badge: "报名中"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    title: "AI是一道光，照进千行百业",
    subtitle: "D20全球设计师长峰会",
    badge: "直播中"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1200&q=80",
    title: "视觉创意产业创新日",
    subtitle: "AI赋能创意设计新时代",
    badge: "火热报名"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1200&q=80",
    title: "智能编程助手大比拼",
    subtitle: "探索代码生成AI的边界",
    badge: "技术前沿"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    title: "AI教育革命论坛",
    subtitle: "重塑未来学习方式",
    badge: "教育创新"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1200&q=80",
    title: "自动化办公AI工具展",
    subtitle: "提升工作效率的AI解决方案",
    badge: "效率提升"
  }
];

const sideImages = [
  {
    src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=400&q=80",
    title: "AI现亮workshop",
    subtitle: "5月25日 | 24个城市联合办",
    badge: "workshop"
  },
  {
    src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&q=80",
    title: "AI是一道光，照进千行百业",
    subtitle: "D20全球设计师长峰会",
    badge: "峰会"
  },
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80",
    title: "MCP server 全球应用创新大赛",
    subtitle: "挖掘AI应用无限可能",
    badge: "大赛"
  },
  {
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80",
    title: "AI视觉创意产业创新日",
    subtitle: "探索AI在视觉创意领域的应用",
    badge: "创新日"
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[400px]">
        {/* Main Carousel */}
        <div className="lg:col-span-2 relative rounded-xl overflow-hidden bg-gradient-to-br from-blue-600 to-purple-700">
          <div className="relative w-full h-full">
            {carouselImages.map((image, index) => (
              <div
                key={image.id}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-red-500 px-2 py-1 rounded text-xs font-medium">
                      {image.badge}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">{image.title}</h2>
                  <p className="text-white/90">{image.subtitle}</p>
                </div>
              </div>
            ))}
            
            {/* Navigation Arrows */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white"
              onClick={prevSlide}
            >
              <ChevronLeft size={24} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white"
              onClick={nextSlide}
            >
              <ChevronRight size={24} />
            </Button>
            
            {/* Dots Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-white' : 'bg-white/50'
                  }`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Side Images */}
        <div className="grid grid-rows-2 gap-4">
          {sideImages.slice(0, 2).map((image, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600 cursor-pointer hover:scale-105 transition-transform"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-blue-500 px-2 py-1 rounded text-xs font-medium">
                    {image.badge}
                  </span>
                </div>
                <h3 className="font-bold text-sm mb-1 line-clamp-2">{image.title}</h3>
                <p className="text-white/90 text-xs line-clamp-2">{image.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {sideImages.slice(2).map((image, index) => (
          <div
            key={index + 2}
            className="relative rounded-xl overflow-hidden bg-gradient-to-br from-teal-500 to-blue-600 cursor-pointer hover:scale-105 transition-transform h-[120px]"
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-2 left-2 right-2 text-white">
              <div className="flex items-center gap-1 mb-1">
                <span className="bg-green-500 px-1.5 py-0.5 rounded text-xs font-medium">
                  {image.badge}
                </span>
              </div>
              <h3 className="font-bold text-xs line-clamp-2">{image.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
