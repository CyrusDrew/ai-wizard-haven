
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import CategoryIcon from '@/components/CategoryIcon';
import { categories } from '@/data/mockData';
import { Grid } from 'lucide-react';

const Categories = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold">AI Categories</h1>
            <p className="text-muted-foreground">
              Browse all AI tool categories to find the perfect solution for your needs
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Grid size={16} className="mr-2" /> View All Tools
            </Button>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {categories.map((category) => (
            <CategoryIcon key={category.id} category={category} className="h-full" />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
