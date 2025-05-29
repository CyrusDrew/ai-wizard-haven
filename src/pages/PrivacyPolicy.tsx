
import Layout from '@/components/layout/Layout';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p className="mb-4">
                Welcome to AIExplorer. We respect your privacy and are committed to protecting your personal data. 
                This privacy policy will inform you about how we look after your personal data when you visit our 
                website and tell you about your privacy rights and how the law protects you.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <h3 className="text-xl font-medium mb-3">Personal Information</h3>
              <ul className="list-disc list-inside mb-4">
                <li>Name and email address when you register</li>
                <li>Profile information you choose to provide</li>
                <li>Comments and forum posts</li>
                <li>Communication preferences</li>
              </ul>
              
              <h3 className="text-xl font-medium mb-3">Usage Information</h3>
              <ul className="list-disc list-inside mb-4">
                <li>Pages you visit and time spent on our site</li>
                <li>Search queries and tool interactions</li>
                <li>Device information and browser type</li>
                <li>IP address and location data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <ul className="list-disc list-inside mb-4">
                <li>To provide and maintain our service</li>
                <li>To personalize your experience</li>
                <li>To send you newsletters and updates (with your consent)</li>
                <li>To improve our website and services</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Data Sharing</h2>
              <p className="mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                except as described in this policy. We may share information with:
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>Service providers who assist in operating our website</li>
                <li>Law enforcement when required by law</li>
                <li>Business partners for joint services (with your consent)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc list-inside mb-4">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Delete your personal data</li>
                <li>Restrict processing of your data</li>
                <li>Data portability</li>
                <li>Object to processing</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <ul className="list-none mb-4">
                <li>Email: privacy@aiexplorer.com</li>
                <li>Address: [Your Company Address]</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
