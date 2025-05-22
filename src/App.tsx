
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Categories from "./pages/Categories";
import ToolsList from "./pages/ToolsList";
import ToolDetail from "./pages/ToolDetail";
import Forum from "./pages/Forum";
import ForumPostDetail from "./pages/ForumPostDetail";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import ArticleDetail from "./pages/ArticleDetail";
import SubmitTool from "./pages/SubmitTool";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:categorySlug" element={<ToolsList />} />
          <Route path="/tools/:id" element={<ToolDetail />} />
          <Route path="/articles/:id" element={<ArticleDetail />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/forum/topic/:id" element={<ForumPostDetail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/submit-tool" element={<SubmitTool />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
