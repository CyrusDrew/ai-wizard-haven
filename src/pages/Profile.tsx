
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import {
  Card,
  CardContent
} from '@/components/ui/card';
import { 
  User, 
  Mail, 
  Link as LinkIcon, 
  Settings, 
  Bell, 
  Lock,
  BookMarked,
  MessageSquare,
  Heart,
  Edit,
  Upload,
  Trash,
  Shield,
  Palette,
  Globe,
  LifeBuoy,
  CreditCard,
  Users,
  LogOut
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Mock user data
const userData = {
  name: 'Alex Johnson',
  username: 'alexj',
  email: 'alex.johnson@example.com',
  bio: 'AI enthusiast and software developer. Exploring the latest trends in artificial intelligence and machine learning.',
  avatar: '',
  website: 'https://alexjohnson.dev',
  location: 'San Francisco, CA',
  joinDate: 'May 2024',
};

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeSettingsTab, setActiveSettingsTab] = useState('account');

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow overflow-hidden mb-8">
          <div className="h-32 bg-gradient-to-r from-ai-purple to-ai-blue"></div>
          <div className="p-6 md:p-8 relative">
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="relative">
                <Avatar className="h-24 w-24 border-4 border-background absolute -top-16">
                  <AvatarImage src={userData.avatar || "/placeholder.svg"} alt={userData.name} />
                  <AvatarFallback>{userData.name[0]}</AvatarFallback>
                </Avatar>
              </div>
              
              <div className="flex-1 pt-8 sm:pt-0">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <h1 className="text-2xl font-bold mb-1">{userData.name}</h1>
                    <p className="text-muted-foreground">@{userData.username}</p>
                  </div>
                  <Button variant="outline" onClick={() => setIsEditing(!isEditing)}>
                    <Edit size={16} className="mr-2" />
                    {isEditing ? "Cancel Editing" : "Edit Profile"}
                  </Button>
                </div>
                
                <p className="text-muted-foreground mb-4 max-w-2xl">
                  {userData.bio}
                </p>
                
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                  <span className="flex items-center">
                    <Mail size={14} className="mr-1" />
                    {userData.email}
                  </span>
                  {userData.website && (
                    <a href={userData.website} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary">
                      <LinkIcon size={14} className="mr-1" />
                      {userData.website.replace(/(^\w+:|^)\/\//, '')}
                    </a>
                  )}
                  {userData.location && (
                    <span className="flex items-center">
                      <User size={14} className="mr-1" />
                      {userData.location}
                    </span>
                  )}
                  <span className="flex items-center">
                    <BookMarked size={14} className="mr-1" />
                    Joined {userData.joinDate}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Edit Profile */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="activity">
              <TabsList className="mb-6">
                <TabsTrigger value="activity">Activity</TabsTrigger>
                <TabsTrigger value="bookmarks">Bookmarks</TabsTrigger>
                <TabsTrigger value="comments">Comments</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              
              <TabsContent value="activity" className="space-y-6">
                {isEditing ? (
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-2xl font-semibold mb-6">Edit Profile</h2>
                      <div className="space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                          <Avatar className="h-16 w-16">
                            <AvatarImage src={userData.avatar || "/placeholder.svg"} alt={userData.name} />
                            <AvatarFallback>{userData.name[0]}</AvatarFallback>
                          </Avatar>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <Upload size={14} className="mr-2" />
                              Upload
                            </Button>
                            <Button variant="outline" size="sm" className="text-destructive hover:text-destructive">
                              <Trash size={14} className="mr-2" />
                              Remove
                            </Button>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-1">
                              Display Name
                            </label>
                            <Input id="name" defaultValue={userData.name} />
                          </div>
                          <div>
                            <label htmlFor="username" className="block text-sm font-medium mb-1">
                              Username
                            </label>
                            <Input id="username" defaultValue={userData.username} />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-1">
                            Email
                          </label>
                          <Input id="email" type="email" defaultValue={userData.email} />
                        </div>
                        
                        <div>
                          <label htmlFor="bio" className="block text-sm font-medium mb-1">
                            Bio
                          </label>
                          <Textarea id="bio" rows={4} defaultValue={userData.bio} />
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="website" className="block text-sm font-medium mb-1">
                              Website
                            </label>
                            <Input id="website" defaultValue={userData.website} />
                          </div>
                          <div>
                            <label htmlFor="location" className="block text-sm font-medium mb-1">
                              Location
                            </label>
                            <Input id="location" defaultValue={userData.location} />
                          </div>
                        </div>
                        
                        <div className="flex justify-end gap-2 mt-6">
                          <Button variant="outline" onClick={() => setIsEditing(false)}>
                            Cancel
                          </Button>
                          <Button onClick={() => setIsEditing(false)}>
                            Save Changes
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold mb-2">Recent Activity</h2>
                    
                    <EmptyState 
                      title="No activity yet"
                      description="Your recent activity on the platform will appear here."
                      icon={<User size={40} />}
                    />
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="bookmarks" className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold mb-2">Your Bookmarks</h2>
                  
                  <EmptyState 
                    title="No bookmarks yet"
                    description="Tools and articles you bookmark will appear here for easy reference."
                    icon={<BookMarked size={40} />}
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="comments" className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold mb-2">Your Comments</h2>
                  
                  <EmptyState 
                    title="No comments yet"
                    description="Comments you leave on tools, articles, and discussions will appear here."
                    icon={<MessageSquare size={40} />}
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="settings" className="space-y-6">
                <Tabs defaultValue={activeSettingsTab} onValueChange={setActiveSettingsTab} className="w-full">
                  <div className="flex border-b overflow-x-auto pb-px">
                    <TabsList className="inline-flex h-9 items-center justify-center rounded-none bg-transparent p-0">
                      <TabsTrigger
                        value="account"
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-none border-b-2 border-b-transparent bg-transparent px-4 py-1 pb-3 pt-2 text-sm font-medium ring-offset-background transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                      >
                        <User className="mr-2 h-4 w-4" />
                        Account
                      </TabsTrigger>
                      <TabsTrigger
                        value="notifications"
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-none border-b-2 border-b-transparent bg-transparent px-4 py-1 pb-3 pt-2 text-sm font-medium ring-offset-background transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                      >
                        <Bell className="mr-2 h-4 w-4" />
                        Notifications
                      </TabsTrigger>
                      <TabsTrigger
                        value="privacy"
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-none border-b-2 border-b-transparent bg-transparent px-4 py-1 pb-3 pt-2 text-sm font-medium ring-offset-background transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                      >
                        <Shield className="mr-2 h-4 w-4" />
                        Privacy & Security
                      </TabsTrigger>
                      <TabsTrigger
                        value="appearance"
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-none border-b-2 border-b-transparent bg-transparent px-4 py-1 pb-3 pt-2 text-sm font-medium ring-offset-background transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                      >
                        <Palette className="mr-2 h-4 w-4" />
                        Appearance
                      </TabsTrigger>
                    </TabsList>
                  </div>

                  <TabsContent value="account" className="space-y-6 pt-6">
                    <div>
                      <h3 className="text-lg font-medium">Account Settings</h3>
                      <p className="text-sm text-muted-foreground">
                        Update your account settings and manage your preferences
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Display Name</label>
                        <Input defaultValue={userData.name} />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email Address</label>
                        <Input defaultValue={userData.email} disabled />
                        <p className="text-xs text-muted-foreground">
                          Your email address is used for notifications and sign-in
                        </p>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">Interface Language</label>
                        <select className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                          <option value="en-US">English (United States)</option>
                          <option value="es">Español</option>
                          <option value="fr">Français</option>
                          <option value="de">Deutsch</option>
                          <option value="zh">中文</option>
                          <option value="ja">日本語</option>
                        </select>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <label className="text-sm font-medium">Two-Factor Authentication</label>
                            <p className="text-xs text-muted-foreground">
                              Add an extra layer of security to your account
                            </p>
                          </div>
                          <Switch />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <label className="text-sm font-medium">Allow Mentions</label>
                            <p className="text-xs text-muted-foreground">
                              Let other users mention you in comments and posts
                            </p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 pb-2 border-t">
                      <Button variant="destructive">
                        <LogOut className="mr-2 h-4 w-4" />
                        Log Out
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="notifications" className="space-y-6 pt-6">
                    <div>
                      <h3 className="text-lg font-medium">Notification Preferences</h3>
                      <p className="text-sm text-muted-foreground">
                        Manage how you receive notifications and alerts
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-4">
                        <h4 className="text-sm font-semibold">Email Notifications</h4>

                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div>
                              <label className="text-sm font-medium">Tool Updates</label>
                              <p className="text-xs text-muted-foreground">
                                Receive updates when tools you follow get updated
                              </p>
                            </div>
                            <Switch defaultChecked />
                          </div>

                          <div className="flex items-center justify-between">
                            <div>
                              <label className="text-sm font-medium">New Articles</label>
                              <p className="text-xs text-muted-foreground">
                                Be notified about new articles and tutorials
                              </p>
                            </div>
                            <Switch defaultChecked />
                          </div>

                          <div className="flex items-center justify-between">
                            <div>
                              <label className="text-sm font-medium">Comment Replies</label>
                              <p className="text-xs text-muted-foreground">
                                Get notified when someone replies to your comment
                              </p>
                            </div>
                            <Switch defaultChecked />
                          </div>

                          <div className="flex items-center justify-between">
                            <div>
                              <label className="text-sm font-medium">Weekly Newsletter</label>
                              <p className="text-xs text-muted-foreground">
                                Weekly digest of top AI tools and articles
                              </p>
                            </div>
                            <Switch defaultChecked />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-sm font-semibold">Push Notifications</h4>

                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div>
                              <label className="text-sm font-medium">Enable Push Notifications</label>
                              <p className="text-xs text-muted-foreground">
                                Allow browser notifications from this site
                              </p>
                            </div>
                            <Switch />
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="privacy" className="space-y-6 pt-6">
                    <div>
                      <h3 className="text-lg font-medium">Privacy & Security</h3>
                      <p className="text-sm text-muted-foreground">
                        Manage your privacy settings and account security
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-4">
                        <h4 className="text-sm font-semibold">Privacy Options</h4>

                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div>
                              <label className="text-sm font-medium">Public Profile</label>
                              <p className="text-xs text-muted-foreground">
                                Allow others to see your profile information
                              </p>
                            </div>
                            <Switch defaultChecked />
                          </div>

                          <div className="flex items-center justify-between">
                            <div>
                              <label className="text-sm font-medium">Show Email Address</label>
                              <p className="text-xs text-muted-foreground">
                                Make your email visible to other users
                              </p>
                            </div>
                            <Switch />
                          </div>

                          <div className="flex items-center justify-between">
                            <div>
                              <label className="text-sm font-medium">Activity Visibility</label>
                              <p className="text-xs text-muted-foreground">
                                Allow others to see your activity on the platform
                              </p>
                            </div>
                            <Switch defaultChecked />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-sm font-semibold">Security</h4>

                        <div className="space-y-4">
                          <Button variant="outline" className="w-full justify-start">
                            <Lock className="mr-2 h-4 w-4" />
                            Change Password
                          </Button>
                          
                          <Button variant="outline" className="w-full justify-start">
                            <Shield className="mr-2 h-4 w-4" />
                            Active Sessions
                          </Button>
                          
                          <Button variant="outline" className="w-full justify-start">
                            <Download className="mr-2 h-4 w-4" />
                            Download Your Data
                          </Button>
                          
                          <Button variant="outline" className="w-full justify-start text-destructive">
                            <Trash className="mr-2 h-4 w-4" />
                            Delete Account
                          </Button>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="appearance" className="space-y-6 pt-6">
                    <div>
                      <h3 className="text-lg font-medium">Appearance</h3>
                      <p className="text-sm text-muted-foreground">
                        Customize the look and feel of the application
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Theme</label>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="flex items-center space-x-2">
                            <input type="radio" id="light" name="theme" className="form-radio" checked />
                            <label htmlFor="light" className="text-sm cursor-pointer">Light</label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input type="radio" id="dark" name="theme" className="form-radio" />
                            <label htmlFor="dark" className="text-sm cursor-pointer">Dark</label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input type="radio" id="system" name="theme" className="form-radio" />
                            <label htmlFor="system" className="text-sm cursor-pointer">System</label>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">Font Size</label>
                        <select className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                          <option value="sm">Small</option>
                          <option value="md" selected>Medium</option>
                          <option value="lg">Large</option>
                          <option value="xl">Extra Large</option>
                        </select>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <label className="text-sm font-medium">Reduce Animations</label>
                            <p className="text-xs text-muted-foreground">
                              Minimize animations for better performance
                            </p>
                          </div>
                          <Switch />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <label className="text-sm font-medium">Compact View</label>
                            <p className="text-xs text-muted-foreground">
                              Show more content with less spacing
                            </p>
                          </div>
                          <Switch />
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Right Column - Settings */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Settings size={18} className="mr-2" /> Account Settings
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Email Notifications</h4>
                      <p className="text-sm text-muted-foreground">Receive email updates</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Public Profile</h4>
                      <p className="text-sm text-muted-foreground">Make your profile visible</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Two-Factor Auth</h4>
                      <p className="text-sm text-muted-foreground">Enhanced account security</p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Bell size={18} className="mr-2" /> Notification Preferences
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label htmlFor="replies" className="cursor-pointer">Replies to comments</label>
                    <Switch id="replies" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="mentions" className="cursor-pointer">Mentions</label>
                    <Switch id="mentions" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="updates" className="cursor-pointer">Tool updates</label>
                    <Switch id="updates" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="new-tools" className="cursor-pointer">New tools</label>
                    <Switch id="new-tools" />
                  </div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="newsletter" className="cursor-pointer">Weekly newsletter</label>
                    <Switch id="newsletter" defaultChecked />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Lock size={18} className="mr-2" /> Privacy
                </h3>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full justify-start text-left" asChild>
                    <Link to="/profile?tab=settings">Change Password</Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-left" asChild>
                    <Link to="/profile?tab=settings">Active Sessions</Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-left" asChild>
                    <Link to="/profile?tab=settings">Download Your Data</Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-destructive text-left">
                    Delete Account
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const Download = ({ className, ...props }: React.ComponentProps<typeof User>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const EmptyState = ({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) => {
  return (
    <div className="bg-secondary/30 border-dashed border-2 border-secondary rounded-xl p-10 text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/50 mb-4">
        <div className="text-muted-foreground">
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4 max-w-sm mx-auto">
        {description}
      </p>
      <Button variant="outline">Get Started</Button>
    </div>
  );
};

export default Profile;
