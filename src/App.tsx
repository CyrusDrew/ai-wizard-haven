
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
import NotFound from "./pages/NotFound";
import ArticleDetail from "./pages/ArticleDetail";
import SubmitTool from "./pages/SubmitTool";
import Articles from "./pages/Articles";

// Auth Pages
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ResetPassword from "./pages/Auth/ResetPassword";

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
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<ArticleDetail />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/forum/topic/:id" element={<ForumPostDetail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/submit-tool" element={<SubmitTool />} />
          
          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
