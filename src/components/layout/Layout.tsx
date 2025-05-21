
import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { 
  Search, 
  Menu, 
  X, 
  User, 
  LogIn,
  Bell,
  Home, 
  Grid, 
  MessageSquare, 
  Settings 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {isMobile && (
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
            )}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-ai-purple to-ai-blue rounded-lg flex items-center justify-center text-white font-bold">
                AI
              </div>
              <span className="font-bold text-xl hidden sm:inline">AIExplorer</span>
            </Link>
          </div>

          {/* Search bar */}
          <div className="hidden md:flex items-center max-w-md w-full relative">
            <Input 
              type="text" 
              placeholder="Search for AI tools & tutorials..." 
              className="pr-10"
            />
            <Search size={18} className="absolute right-3 text-muted-foreground" />
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            {!isMobile && (
              <Button variant="outline" size="sm">
                <Search size={18} className="md:hidden" />
                <span className="hidden md:inline">Submit Tool</span>
              </Button>
            )}
            
            {isLoggedIn ? (
              <>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell size={20} />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-ai-pink rounded-full"></span>
                </Button>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>U</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to="/profile">Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/settings">Settings</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => setIsLoggedIn(false)}>
                      Log out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <Button variant="default" size="sm" onClick={() => setIsLoggedIn(true)}>
                <LogIn size={18} className="mr-2" /> 
                <span>Sign In</span>
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div className="fixed inset-0 pt-16 z-40 bg-background/95 backdrop-blur-sm">
          <nav className="container px-4 py-6 flex flex-col space-y-6">
            <div className="relative w-full">
              <Input 
                type="text" 
                placeholder="Search for AI tools & tutorials..." 
                className="pr-10 w-full"
              />
              <Search size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            </div>
            
            <NavItem to="/" icon={<Home size={20} />} label="Home" />
            <NavItem to="/categories" icon={<Grid size={20} />} label="Categories" />
            <NavItem to="/forum" icon={<MessageSquare size={20} />} label="Community" />
            <NavItem to="/profile" icon={<User size={20} />} label="Profile" />
            
            <div className="mt-auto pt-6 border-t">
              <Button className="w-full">Submit Tool</Button>
            </div>
          </nav>
        </div>
      )}

      {/* Main content with sidebar on desktop */}
      <div className="flex flex-1">
        {!isMobile && (
          <aside className="hidden md:block w-56 lg:w-64 border-r border-border p-4 space-y-6">
            <nav className="space-y-1">
              <NavItem to="/" icon={<Home size={20} />} label="Home" />
              <NavItem to="/categories" icon={<Grid size={20} />} label="Categories" />
              <NavItem to="/forum" icon={<MessageSquare size={20} />} label="Community" />
              <NavItem to="/profile" icon={<User size={20} />} label="Profile" />
              <NavItem to="/settings" icon={<Settings size={20} />} label="Settings" />
            </nav>
            
            <div className="pt-4 border-t">
              <h3 className="font-medium mb-2 text-sm text-muted-foreground">Popular Tags</h3>
              <div className="flex flex-wrap gap-1">
                <TagPill label="ChatGPT" />
                <TagPill label="Midjourney" />
                <TagPill label="AI Writing" />
                <TagPill label="Stable Diffusion" />
                <TagPill label="GPT-4" />
              </div>
            </div>
          </aside>
        )}

        <main className="flex-1 min-w-0">
          {children}
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-ai-purple to-ai-blue rounded-lg flex items-center justify-center text-white font-bold">
                  AI
                </div>
                <span className="font-bold text-xl">AIExplorer</span>
              </div>
              <p className="mt-2 text-muted-foreground">
                Your ultimate guide to discovering and learning about AI tools.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <FooterLink to="/categories">AI Categories</FooterLink>
                <FooterLink to="/forum">Community</FooterLink>
                <FooterLink to="/about">About Us</FooterLink>
                <FooterLink to="/contact">Contact</FooterLink>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <div className="space-y-2">
                <FooterLink to="/privacy">Privacy Policy</FooterLink>
                <FooterLink to="/terms">Terms of Service</FooterLink>
                <FooterLink to="/cookies">Cookie Policy</FooterLink>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} AIExplorer. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

const NavItem = ({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) => {
  return (
    <NavLink 
      to={to} 
      className={({ isActive }) => 
        `flex items-center space-x-3 px-3 py-2 rounded-md ${
          isActive 
            ? "bg-primary text-primary-foreground" 
            : "hover:bg-muted/80"
        }`
      }
    >
      {icon}
      <span>{label}</span>
    </NavLink>
  );
};

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  return (
    <Link to={to} className="block text-muted-foreground hover:text-foreground transition-colors">
      {children}
    </Link>
  );
};

const TagPill = ({ label }: { label: string }) => {
  return (
    <Link 
      to={`/tag/${label.toLowerCase()}`}
      className="inline-block px-2 py-1 rounded-full text-xs bg-secondary hover:bg-secondary/80 transition-colors"
    >
      {label}
    </Link>
  );
};

export default Layout;
