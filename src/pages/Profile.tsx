
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
  Trash
} from 'lucide-react';
import { useState } from 'react';

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
                
                <div className="border-t mt-4 pt-4">
                  <Button variant="outline" className="w-full" asChild>
                    <a href="/settings">
                      <Settings size={16} className="mr-2" /> Advanced Settings
                    </a>
                  </Button>
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
                    <a href="/settings/password">Change Password</a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-left" asChild>
                    <a href="/settings/sessions">Active Sessions</a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-left" asChild>
                    <a href="/settings/data">Download Your Data</a>
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
