
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';
import { useState } from 'react';
import { Upload, Info, AlertCircle } from 'lucide-react';
import { categories } from '@/data/mockData';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';

const SubmitTool = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    website: '',
    description: '',
    category: '',
    tags: '',
    priceModel: 'freemium',
    hasAPI: false,
    hasDemo: false,
    logo: null as File | null,
    screenshot: null as File | null,
    contactEmail: '',
    termsAgreed: false
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (name: string) => {
    setFormData(prev => ({ ...prev, [name]: !prev[name as keyof typeof prev] }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: 'logo' | 'screenshot') => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, [field]: file }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Tool submitted successfully",
        description: "Your tool will be reviewed by our team and published soon.",
      });
      setIsSubmitting(false);
      
      // Reset form
      setFormData({
        name: '',
        website: '',
        description: '',
        category: '',
        tags: '',
        priceModel: 'freemium',
        hasAPI: false,
        hasDemo: false,
        logo: null,
        screenshot: null,
        contactEmail: '',
        termsAgreed: false
      });
    }, 1500);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Submit an AI Tool</h1>
            <p className="text-muted-foreground">
              Share an AI tool with our community and help others discover valuable resources
            </p>
          </div>
          
          <Alert className="mb-8">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Before you submit</AlertTitle>
            <AlertDescription>
              Please ensure the tool is related to AI and has not already been submitted. 
              All submissions are reviewed by our team before publishing.
            </AlertDescription>
          </Alert>
          
          <form onSubmit={handleSubmit}>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>
                  Provide essential details about the tool
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <FormLabel htmlFor="name">Tool Name</FormLabel>
                  <Input 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter the tool name"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <FormLabel htmlFor="website">Website URL</FormLabel>
                  <Input 
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://"
                    required
                    type="url"
                  />
                </div>
                
                <div className="space-y-2">
                  <FormLabel htmlFor="description">Description</FormLabel>
                  <Textarea 
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Describe what the tool does, its features, and benefits"
                    required
                    rows={5}
                  />
                  <p className="text-xs text-muted-foreground">
                    Minimum 100 characters. Include key features and use cases.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Categorization</CardTitle>
                <CardDescription>
                  Help users find the tool more easily
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <FormLabel htmlFor="category">Category</FormLabel>
                  <Select
                    onValueChange={(value) => handleSelectChange('category', value)}
                    value={formData.category}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(category => (
                        <SelectItem key={category.id} value={category.slug}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <FormLabel htmlFor="tags">Tags</FormLabel>
                  <Input 
                    id="tags"
                    name="tags"
                    value={formData.tags}
                    onChange={handleChange}
                    placeholder="Add comma-separated tags (e.g., NLP, Text Generation, Content)"
                  />
                  <p className="text-xs text-muted-foreground">
                    Add up to 5 tags that describe the tool's functionality or purpose.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <FormLabel htmlFor="priceModel">Pricing Model</FormLabel>
                  <Select
                    onValueChange={(value) => handleSelectChange('priceModel', value)}
                    value={formData.priceModel}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select pricing model" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="free">Free</SelectItem>
                      <SelectItem value="freemium">Freemium</SelectItem>
                      <SelectItem value="paid">Paid</SelectItem>
                      <SelectItem value="subscription">Subscription</SelectItem>
                      <SelectItem value="enterprise">Enterprise/Custom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex flex-col gap-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="hasAPI" 
                      checked={formData.hasAPI}
                      onCheckedChange={() => handleCheckboxChange('hasAPI')}
                    />
                    <FormLabel htmlFor="hasAPI" className="cursor-pointer">Has API Access</FormLabel>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="hasDemo" 
                      checked={formData.hasDemo}
                      onCheckedChange={() => handleCheckboxChange('hasDemo')}
                    />
                    <FormLabel htmlFor="hasDemo" className="cursor-pointer">Has Free Demo/Trial</FormLabel>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Media</CardTitle>
                <CardDescription>
                  Upload images to showcase the tool
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <FormLabel htmlFor="logo">Logo</FormLabel>
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 border rounded-md flex items-center justify-center bg-muted">
                      {formData.logo ? (
                        <img 
                          src={URL.createObjectURL(formData.logo)} 
                          alt="Logo preview" 
                          className="h-full w-full object-contain p-1"
                        />
                      ) : (
                        <Info size={24} className="text-muted-foreground" />
                      )}
                    </div>
                    <div className="flex-1">
                      <Input
                        id="logo"
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileChange(e, 'logo')}
                        className="max-w-sm"
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Square image recommended, max 2MB
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <FormLabel htmlFor="screenshot">Screenshot</FormLabel>
                  <div className="flex flex-col gap-3">
                    <div className="h-40 border rounded-md flex items-center justify-center bg-muted">
                      {formData.screenshot ? (
                        <img 
                          src={URL.createObjectURL(formData.screenshot)} 
                          alt="Screenshot preview" 
                          className="h-full w-full object-contain p-2"
                        />
                      ) : (
                        <div className="flex flex-col items-center text-muted-foreground">
                          <Upload size={32} />
                          <span className="text-sm mt-2">Upload a screenshot</span>
                        </div>
                      )}
                    </div>
                    <Input
                      id="screenshot"
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileChange(e, 'screenshot')}
                    />
                    <p className="text-xs text-muted-foreground">
                      A screenshot showcasing the tool's interface or output. Max 5MB.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  We'll use this to contact you about the submission
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <FormLabel htmlFor="contactEmail">Contact Email</FormLabel>
                  <Input 
                    id="contactEmail"
                    name="contactEmail"
                    value={formData.contactEmail}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    type="email"
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    We'll notify you when your submission is approved or if we need more information.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex items-center space-x-2 mb-6">
              <Checkbox 
                id="termsAgreed" 
                checked={formData.termsAgreed}
                onCheckedChange={() => handleCheckboxChange('termsAgreed')}
                required
              />
              <label
                htmlFor="termsAgreed"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I confirm that I have the right to submit this tool and agree to the terms of service
              </label>
            </div>
            
            <div className="flex justify-center">
              <Button type="submit" size="lg" disabled={isSubmitting || !formData.termsAgreed}>
                {isSubmitting ? "Submitting..." : "Submit Tool"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default SubmitTool;
