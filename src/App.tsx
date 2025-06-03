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
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";

// Auth Pages
import AuthPage from "./pages/Auth/AuthPage";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ResetPassword from "./pages/Auth/ResetPassword";

// Import error pages
import ServerError from "./pages/ServerError";
import BadGateway from "./pages/BadGateway";
import ServiceUnavailable from "./pages/ServiceUnavailable";
import GatewayTimeout from "./pages/GatewayTimeout";

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
          
          {/* Legal Pages */}
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          
          {/* Auth Routes - 合并登录注册页面 */}
          <Route path="/login" element={<AuthPage />} />
          <Route path="/register" element={<AuthPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          
          {/* Error Pages */}
          <Route path="/500" element={<ServerError />} />
          <Route path="/502" element={<BadGateway />} />
          <Route path="/503" element={<ServiceUnavailable />} />
          <Route path="/504" element={<GatewayTimeout />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
