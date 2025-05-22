
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
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// Define the form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Tool name must be at least 2 characters." }),
  website: z.string().url({ message: "Please enter a valid URL." }),
  description: z.string().min(100, { message: "Description must be at least 100 characters." }),
  category: z.string().min(1, { message: "Please select a category." }),
  tags: z.string().optional(),
  priceModel: z.string(),
  hasAPI: z.boolean().default(false),
  hasDemo: z.boolean().default(false),
  contactEmail: z.string().email({ message: "Please enter a valid email address." }),
  termsAgreed: z.boolean().refine(val => val === true, { 
    message: "You must agree to the terms to submit a tool." 
  })
});

type FormValues = z.infer<typeof formSchema>;

const SubmitTool = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [logo, setLogo] = useState<File | null>(null);
  const [screenshot, setScreenshot] = useState<File | null>(null);
  
  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      website: '',
      description: '',
      category: '',
      tags: '',
      priceModel: 'freemium',
      hasAPI: false,
      hasDemo: false,
      contactEmail: '',
      termsAgreed: false
    }
  });
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: 'logo' | 'screenshot') => {
    const file = e.target.files?.[0] || null;
    if (field === 'logo') {
      setLogo(file);
    } else {
      setScreenshot(file);
    }
  };
  
  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Tool submitted successfully",
        description: "Your tool will be reviewed by our team and published soon.",
      });
      setIsSubmitting(false);
      
      // Reset form
      form.reset();
      setLogo(null);
      setScreenshot(null);
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
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Basic Information</CardTitle>
                  <CardDescription>
                    Provide essential details about the tool
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tool Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter the tool name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="website"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Website URL</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="https://"
                            type="url"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Describe what the tool does, its features, and benefits"
                            rows={5}
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Minimum 100 characters. Include key features and use cases.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
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
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Category</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {categories.map(category => (
                              <SelectItem key={category.id} value={category.slug}>
                                {category.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="tags"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tags</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Add comma-separated tags (e.g., NLP, Text Generation, Content)"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Add up to 5 tags that describe the tool's functionality or purpose.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="priceModel"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Pricing Model</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select pricing model" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="free">Free</SelectItem>
                            <SelectItem value="freemium">Freemium</SelectItem>
                            <SelectItem value="paid">Paid</SelectItem>
                            <SelectItem value="subscription">Subscription</SelectItem>
                            <SelectItem value="enterprise">Enterprise/Custom</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="flex flex-col gap-3">
                    <FormField
                      control={form.control}
                      name="hasAPI"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>Has API Access</FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="hasDemo"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>Has Free Demo/Trial</FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />
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
                        {logo ? (
                          <img 
                            src={URL.createObjectURL(logo)} 
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
                        {screenshot ? (
                          <img 
                            src={URL.createObjectURL(screenshot)} 
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
                  <FormField
                    control={form.control}
                    name="contactEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contact Email</FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            placeholder="your@email.com"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          We'll notify you when your submission is approved or if we need more information.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>
              
              <FormField
                control={form.control}
                name="termsAgreed"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md mb-6">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        I confirm that I have the right to submit this tool and agree to the terms of service
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              
              <div className="flex justify-center">
                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Tool"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Layout>
  );
};

export default SubmitTool;
