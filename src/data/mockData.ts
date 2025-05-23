
// Mock data for AI tools
import { ColorVariant } from "@/components/card/ToolCard";

export const categories = [
  { id: 'cat1', name: 'Chatbots', slug: 'chatbots', icon: 'chatbots', count: 45 },
  { id: 'cat2', name: 'Image Generators', slug: 'image-generators', icon: 'imageGenerators', count: 38 },
  { id: 'cat3', name: 'Coding Tools', slug: 'coding-tools', icon: 'codingTools', count: 27 },
  { id: 'cat4', name: 'Writing Tools', slug: 'writing-tools', icon: 'writingTools', count: 32 },
  { id: 'cat5', name: 'Audio Tools', slug: 'audio-tools', icon: 'audioTools', count: 19 },
  { id: 'cat6', name: 'Video Tools', slug: 'video-tools', icon: 'videoTools', count: 24 },
  { id: 'cat7', name: 'Data Tools', slug: 'data-tools', icon: 'dataTools', count: 16 },
  { id: 'cat8', name: 'Research Tools', slug: 'research-tools', icon: 'researchTools', count: 21 },
  { id: 'cat9', name: 'Productivity', slug: 'productivity', icon: 'productivity', count: 35 },
  { id: 'cat10', name: 'Creativity', slug: 'creativity', icon: 'creativity', count: 28 },
];

export const tools = [
  {
    id: 'tool1',
    name: 'ChatGPT',
    description: 'An advanced AI chatbot developed by OpenAI that can understand and generate human-like text based on context.',
    category: 'Chatbots',
    categorySlug: 'chatbots',
    tags: ['OpenAI', 'NLP', 'Conversational AI'],
    rating: 4.8,
    image: '',
    featured: true,
    colorVariant: 'green' as ColorVariant,
  },
  {
    id: 'tool2',
    name: 'Midjourney',
    description: 'AI image generation tool that creates artistic visuals based on text prompts with stunning detail and creativity.',
    category: 'Image Generators',
    categorySlug: 'image-generators',
    tags: ['Art', 'Graphics', 'Visual AI'],
    rating: 4.7,
    image: '',
    featured: true,
    colorVariant: 'purple' as ColorVariant,
  },
  {
    id: 'tool3',
    name: 'GitHub Copilot',
    description: 'AI pair programmer that helps you write code faster with suggestions based on comments and existing code.',
    category: 'Coding Tools',
    categorySlug: 'coding-tools',
    tags: ['Programming', 'Code Generation', 'Development'],
    rating: 4.6,
    image: '',
    colorVariant: 'blue' as ColorVariant,
  },
  {
    id: 'tool4',
    name: 'Jasper',
    description: 'AI content creation assistant that helps marketing teams create blog posts, social media, and ads faster.',
    category: 'Writing Tools',
    categorySlug: 'writing-tools',
    tags: ['Marketing', 'Copywriting', 'Content'],
    rating: 4.5,
    image: '',
    colorVariant: 'orange' as ColorVariant,
  },
  {
    id: 'tool5',
    name: 'Murf AI',
    description: 'Text-to-speech platform with realistic AI voices for creating voiceovers, narrations, and audio content.',
    category: 'Audio Tools',
    categorySlug: 'audio-tools',
    tags: ['Voice', 'Text-to-Speech', 'Audio'],
    rating: 4.4,
    image: '',
    colorVariant: 'pink' as ColorVariant,
  },
  {
    id: 'tool6',
    name: 'Synthesia',
    description: 'AI video creation platform that turns text into videos with realistic avatars speaking your script.',
    category: 'Video Tools',
    categorySlug: 'video-tools',
    tags: ['Video', 'Avatars', 'Presentation'],
    rating: 4.5,
    image: '',
    colorVariant: 'purple' as ColorVariant,
  },
  {
    id: 'tool7',
    name: 'Claude',
    description: 'Conversational AI assistant by Anthropic designed for helpful, harmless, and honest interactions.',
    category: 'Chatbots',
    categorySlug: 'chatbots',
    tags: ['Anthropic', 'NLP', 'Safety'],
    rating: 4.7,
    image: '',
    colorVariant: 'blue' as ColorVariant,
  },
  {
    id: 'tool8',
    name: 'Notion AI',
    description: 'AI writing assistant integrated into Notion to help draft, edit, summarize, and improve your content.',
    category: 'Writing Tools',
    categorySlug: 'writing-tools',
    tags: ['Productivity', 'Notes', 'Organization'],
    rating: 4.6,
    image: '',
    featured: true,
    colorVariant: 'green' as ColorVariant,
  },
];

export const blogPosts = [
  {
    id: 'post1',
    title: 'The Ultimate Guide to Prompt Engineering for ChatGPT',
    excerpt: 'Learn the essential techniques to craft effective prompts that get the most out of ChatGPT and other AI language models.',
    author: {
      name: 'Alex Johnson',
      avatar: '',
    },
    date: 'May 15, 2025',
    readTime: '8 min read',
    image: '',
    tags: ['Tutorials', 'ChatGPT', 'Prompt Engineering'],
  },
  {
    id: 'post2',
    title: 'How AI Image Generators Are Transforming Graphic Design',
    excerpt: 'Explore how tools like Midjourney and DALL-E are changing the way designers work and opening new creative possibilities.',
    author: {
      name: 'Sarah Chen',
      avatar: '',
    },
    date: 'May 10, 2025',
    readTime: '6 min read',
    image: '',
    tags: ['Design', 'AI Art', 'Trends'],
  },
  {
    id: 'post3',
    title: 'Getting Started with GitHub Copilot for Developers',
    excerpt: 'A beginner-friendly guide to setting up and using GitHub Copilot to supercharge your coding workflow.',
    author: {
      name: 'Michael Peters',
      avatar: '',
    },
    date: 'May 8, 2025',
    readTime: '10 min read',
    image: '',
    tags: ['Coding', 'Development', 'Tools'],
  },
  {
    id: 'post4',
    title: 'The Ethics of AI Content Creation: Challenges and Guidelines',
    excerpt: 'Delving into the ethical considerations of using AI for generating text, images, and other content formats.',
    author: {
      name: 'Priya Shah',
      avatar: '',
    },
    date: 'May 5, 2025',
    readTime: '12 min read',
    image: '',
    tags: ['Ethics', 'AI Policy', 'Content Creation'],
  },
  {
    id: 'post5',
    title: 'Comparing the Top 5 AI Research Assistants in 2025',
    excerpt: 'An in-depth analysis of the leading AI tools that are helping researchers streamline their work and find insights faster.',
    author: {
      name: 'Daniel Wong',
      avatar: '',
    },
    date: 'May 1, 2025',
    readTime: '9 min read',
    image: '',
    tags: ['Research', 'Productivity', 'Tools Comparison'],
  },
  {
    id: 'post6',
    title: 'How to Use AI Voice Generation for Professional Podcasts',
    excerpt: 'Step-by-step guide to leveraging AI voice tools to create professional-sounding podcasts and audio content.',
    author: {
      name: 'Olivia Martinez',
      avatar: '',
    },
    date: 'Apr 28, 2025',
    readTime: '7 min read',
    image: '',
    tags: ['Audio', 'Podcasting', 'Content Creation'],
  },
  {
    id: 'post7',
    title: 'AI Tools for Content Marketing: A Complete Guide',
    excerpt: 'Discover the most effective AI tools to enhance your content marketing strategy and improve ROI.',
    author: {
      name: 'Marcus Johnson',
      avatar: '',
    },
    date: 'Apr 25, 2025',
    readTime: '11 min read',
    image: '',
    tags: ['Marketing', 'Content', 'Tools Comparison'],
  },
  {
    id: 'post8',
    title: 'The Future of Education with AI Learning Assistants',
    excerpt: 'How intelligent tutoring systems are revolutionizing education and personalizing learning experiences.',
    author: {
      name: 'Emily Zhang',
      avatar: '',
    },
    date: 'Apr 22, 2025',
    readTime: '9 min read',
    image: '',
    tags: ['Education', 'AI Applications', 'Learning'],
  },
  {
    id: 'post9',
    title: 'Building Conversational UIs: Best Practices with Modern AI',
    excerpt: 'Learn how to design effective conversational interfaces using the latest AI technologies.',
    author: {
      name: 'Thomas Wilson',
      avatar: '',
    },
    date: 'Apr 18, 2025',
    readTime: '13 min read',
    image: '',
    tags: ['UI Design', 'Conversational AI', 'Development'],
  },
  {
    id: 'post10',
    title: 'AI for Small Business: Cost-Effective Solutions in 2025',
    excerpt: 'A practical guide to implementing AI tools for small businesses with limited budgets.',
    author: {
      name: 'Rebecca Lee',
      avatar: '',
    },
    date: 'Apr 15, 2025',
    readTime: '8 min read',
    image: '',
    tags: ['Small Business', 'Budget', 'Productivity'],
  },
  {
    id: 'post11',
    title: 'Ethical Implications of AI in Healthcare Diagnostics',
    excerpt: 'Examining the ethical considerations around using AI for patient diagnosis and treatment recommendations.',
    author: {
      name: 'Dr. James Carter',
      avatar: '',
    },
    date: 'Apr 12, 2025',
    readTime: '14 min read',
    image: '',
    tags: ['Healthcare', 'Ethics', 'AI Policy'],
  },
  {
    id: 'post12',
    title: 'Top AI Writing Assistants Compared: 2025 Edition',
    excerpt: 'A detailed comparison of leading AI writing tools to help you choose the best one for your needs.',
    author: {
      name: 'Nicole Taylor',
      avatar: '',
    },
    date: 'Apr 8, 2025',
    readTime: '10 min read',
    image: '',
    tags: ['Writing Tools', 'Productivity', 'Comparison'],
  },
  {
    id: 'post13',
    title: 'Creating Photorealistic Images with Stable Diffusion XL',
    excerpt: 'How to use advanced parameters in Stable Diffusion XL to create stunning, photorealistic images.',
    author: {
      name: 'David Chen',
      avatar: '',
    },
    date: 'Apr 5, 2025',
    readTime: '9 min read',
    image: '',
    tags: ['Image Generation', 'Design', 'Tutorials'],
  },
  {
    id: 'post14',
    title: 'AI Music Composition: Tools for Musicians and Producers',
    excerpt: 'Exploring the best AI tools that are helping musicians create original compositions and enhance production.',
    author: {
      name: 'Sarah Johnson',
      avatar: '',
    },
    date: 'Apr 2, 2025',
    readTime: '11 min read',
    image: '',
    tags: ['Music', 'Creative AI', 'Production'],
  },
  {
    id: 'post15',
    title: 'How to Fine-tune Language Models for Specialized Industries',
    excerpt: 'A technical guide to customizing large language models for specific industry vocabularies and knowledge domains.',
    author: {
      name: 'Michael Thompson',
      avatar: '',
    },
    date: 'Mar 30, 2025',
    readTime: '16 min read',
    image: '',
    tags: ['Development', 'LLMs', 'Advanced'],
  },
  {
    id: 'post16',
    title: 'AI Video Editing: Automating Post-Production Workflows',
    excerpt: 'How AI tools are transforming video editing by automating tedious tasks and enhancing creative capabilities.',
    author: {
      name: 'Jessica Miller',
      avatar: '',
    },
    date: 'Mar 28, 2025',
    readTime: '8 min read',
    image: '',
    tags: ['Video', 'Creative AI', 'Production'],
  },
  {
    id: 'post17',
    title: 'Implementing AI Customer Service Chatbots: A Complete Guide',
    excerpt: 'Step-by-step instructions for creating effective customer service chatbots using modern AI technologies.',
    author: {
      name: 'Chris Anderson',
      avatar: '',
    },
    date: 'Mar 25, 2025',
    readTime: '13 min read',
    image: '',
    tags: ['Customer Service', 'Chatbots', 'Implementation'],
  },
  {
    id: 'post18',
    title: 'AI for Data Analysis: Beyond Traditional Business Intelligence',
    excerpt: 'How advanced AI tools are providing deeper insights than traditional BI solutions for data-driven organizations.',
    author: {
      name: 'Samantha Wong',
      avatar: '',
    },
    date: 'Mar 22, 2025',
    readTime: '10 min read',
    image: '',
    tags: ['Data Analysis', 'Business Intelligence', 'Enterprise'],
  },
  {
    id: 'post19',
    title: 'Voice Cloning Ethics: Navigating the New Audio Frontier',
    excerpt: 'Exploring the ethical implications of AI voice cloning technology and establishing responsible use guidelines.',
    author: {
      name: 'Robert Garcia',
      avatar: '',
    },
    date: 'Mar 19, 2025',
    readTime: '12 min read',
    image: '',
    tags: ['Voice AI', 'Ethics', 'Technology Trends'],
  },
  {
    id: 'post20',
    title: 'Using AI for Academic Research: Tools and Methodologies',
    excerpt: 'A comprehensive guide to leveraging AI tools for literature reviews, data analysis, and research acceleration.',
    author: {
      name: 'Dr. Emily Roberts',
      avatar: '',
    },
    date: 'Mar 16, 2025',
    readTime: '15 min read',
    image: '',
    tags: ['Academic', 'Research', 'Methodology'],
  },
  {
    id: 'post21',
    title: 'The Rise of Multimodal AI Models: Applications and Limitations',
    excerpt: 'An in-depth look at AI systems that can process multiple types of data simultaneously and their practical applications.',
    author: {
      name: 'Daniel Kim',
      avatar: '',
    },
    date: 'Mar 13, 2025',
    readTime: '14 min read',
    image: '',
    tags: ['Multimodal AI', 'Technology', 'Advanced'],
  },
  {
    id: 'post22',
    title: 'AI-Powered SEO: Maximizing Content Visibility in 2025',
    excerpt: 'How to use AI tools to optimize your content strategy and improve search engine rankings.',
    author: {
      name: 'Jennifer Martinez',
      avatar: '',
    },
    date: 'Mar 10, 2025',
    readTime: '9 min read',
    image: '',
    tags: ['SEO', 'Marketing', 'Content Strategy'],
  },
  {
    id: 'post23',
    title: 'Personal AI Assistants: Comparing the Market Leaders',
    excerpt: 'A detailed comparison of personal AI assistants and how they\'re changing productivity and daily life.',
    author: {
      name: 'Mark Wilson',
      avatar: '',
    },
    date: 'Mar 7, 2025',
    readTime: '11 min read',
    image: '',
    tags: ['Personal Assistants', 'Productivity', 'Comparison'],
  },
  {
    id: 'post24',
    title: 'AI in Game Development: Procedural Content Generation',
    excerpt: 'How game developers are using AI to create dynamic worlds, characters, and narratives.',
    author: {
      name: 'Alex Turner',
      avatar: '',
    },
    date: 'Mar 4, 2025',
    readTime: '12 min read',
    image: '',
    tags: ['Gaming', 'Development', 'Creative AI'],
  },
  {
    id: 'post25',
    title: 'AI for Financial Analysis: Tools for Investors and Analysts',
    excerpt: 'A review of AI platforms that are transforming financial analysis and investment decision-making.',
    author: {
      name: 'Sophie Chen',
      avatar: '',
    },
    date: 'Mar 1, 2025',
    readTime: '10 min read',
    image: '',
    tags: ['Finance', 'Investment', 'Analysis'],
  },
  {
    id: 'post26',
    title: 'Building AI Models with Limited Training Data',
    excerpt: 'Techniques for developing effective AI models when working with small datasets or limited examples.',
    author: {
      name: 'Ryan Johnson',
      avatar: '',
    },
    date: 'Feb 26, 2025',
    readTime: '13 min read',
    image: '',
    tags: ['Development', 'Machine Learning', 'Technical'],
  },
  {
    id: 'post27',
    title: 'AI for Social Media Management: Automation and Analytics',
    excerpt: 'How to leverage AI tools to streamline social media operations and gain deeper audience insights.',
    author: {
      name: 'Emma Davis',
      avatar: '',
    },
    date: 'Feb 23, 2025',
    readTime: '8 min read',
    image: '',
    tags: ['Social Media', 'Marketing', 'Analytics'],
  },
  {
    id: 'post28',
    title: 'AI Translation Tools: Breaking Down Language Barriers in 2025',
    excerpt: 'An overview of the most advanced AI translation technologies and their practical applications.',
    author: {
      name: 'Carlos Rodriguez',
      avatar: '',
    },
    date: 'Feb 20, 2025',
    readTime: '9 min read',
    image: '',
    tags: ['Translation', 'Language', 'Communication'],
  },
  {
    id: 'post29',
    title: 'Responsible AI Development: Guidelines for Engineers',
    excerpt: 'Best practices for developing AI systems that are ethical, transparent, and beneficial for society.',
    author: {
      name: 'Dr. Lisa Wang',
      avatar: '',
    },
    date: 'Feb 17, 2025',
    readTime: '15 min read',
    image: '',
    tags: ['Ethics', 'Development', 'Best Practices'],
  },
  {
    id: 'post30',
    title: 'AI for E-Commerce: Personalization and Customer Experience',
    excerpt: 'How online retailers are using AI to create personalized shopping experiences and boost conversions.',
    author: {
      name: 'Andrew Smith',
      avatar: '',
    },
    date: 'Feb 14, 2025',
    readTime: '10 min read',
    image: '',
    tags: ['E-Commerce', 'Personalization', 'Customer Experience'],
  },
];

export const forumTopics = [
  {
    id: 'topic1',
    title: "What's the best AI tool for generating product descriptions?",
    category: 'Usage Tips',
    author: {
      name: 'James Wilson',
      avatar: '',
    },
    date: 'May 18, 2025',
    replies: 12,
    views: 156,
    isHot: true,
  },
  {
    id: 'topic2',
    title: 'Troubleshooting: ChatGPT keeps giving irrelevant responses',
    category: 'Troubleshooting',
    author: {
      name: 'Emma Davis',
      avatar: '',
    },
    date: 'May 17, 2025',
    replies: 8,
    views: 97,
    isHot: false,
  },
  {
    id: 'topic3',
    title: 'Midjourney vs DALL-E: Detailed comparison for artistic projects',
    category: 'Tool Comparisons',
    author: {
      name: 'Ryan Zhang',
      avatar: '',
    },
    date: 'May 16, 2025',
    replies: 24,
    views: 310,
    isHot: true,
  },
  {
    id: 'topic4',
    title: 'How to optimize Claude API costs for enterprise use',
    category: 'Optimization',
    author: {
      name: 'Sophia Adams',
      avatar: '',
    },
    date: 'May 15, 2025',
    replies: 6,
    views: 78,
    isHot: false,
  },
  {
    id: 'topic5',
    title: 'Best practices for fine-tuning language models on domain-specific data',
    category: 'Advanced Usage',
    author: {
      name: 'Thomas Lee',
      avatar: '',
    },
    date: 'May 14, 2025',
    replies: 15,
    views: 203,
    isHot: false,
  },
];
