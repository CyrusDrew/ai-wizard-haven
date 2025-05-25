
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const HotToolsList = () => {
  const hotTools = [
    { id: 1, name: '豆包', logo: '🫘', category: 'AI助手' },
    { id: 2, name: '叶司AI', logo: '🍃', category: 'AI生成' },
    { id: 3, name: '问小白', logo: '❓', category: 'AI问答' },
    { id: 4, name: 'AiPPT', logo: '📊', category: 'AI制作' },
    { id: 5, name: '秘塔AI搜索', logo: '🔍', category: 'AI搜索' },
    { id: 6, name: 'Trae', logo: '⚡', category: 'AI编程' },
    { id: 7, name: '堆友AI', logo: '🤖', category: 'AI助手' },
    { id: 8, name: '美图设计室', logo: '🎨', category: 'AI设计' },
    { id: 9, name: '程序AI设计', logo: '💻', category: 'AI设计' },
    { id: 10, name: '办公小浣熊', logo: '🦝', category: 'AI办公' },
    { id: 11, name: '绘蛙', logo: '🐸', category: 'AI绘画' },
    { id: 12, name: '和子空间', logo: '🌌', category: 'AI创作' }
  ];

  return (
    <Card>
      <CardHeader className="pb-4">
        <CardTitle className="text-lg">🔥 热门工具</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {hotTools.map((tool) => (
            <div 
              key={tool.id} 
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted cursor-pointer transition-colors"
            >
              <Avatar className="h-8 w-8">
                <AvatarFallback className="text-sm">
                  {tool.logo}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium truncate">{tool.name}</h4>
                <p className="text-xs text-muted-foreground truncate">{tool.category}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default HotToolsList;
