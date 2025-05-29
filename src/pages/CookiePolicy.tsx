
import Layout from '@/components/layout/Layout';

const CookiePolicy = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">What Are Cookies</h2>
              <p className="mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
                They are widely used to make websites work more efficiently and to provide information to website owners.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">How We Use Cookies</h2>
              <p className="mb-4">
                AIExplorer uses cookies for several purposes:
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>To enable certain functions of the website</li>
                <li>To provide analytics and track website usage</li>
                <li>To store your preferences and settings</li>
                <li>To personalize content and advertisements</li>
                <li>To improve your browsing experience</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-medium mb-3">Essential Cookies</h3>
              <p className="mb-4">
                These cookies are necessary for the website to function properly. They enable basic functions like 
                page navigation, access to secure areas, and user authentication.
              </p>
              
              <h3 className="text-xl font-medium mb-3">Performance Cookies</h3>
              <p className="mb-4">
                These cookies collect information about how visitors use our website, such as which pages are visited 
                most often and if users get error messages. This helps us improve how our website works.
              </p>
              
              <h3 className="text-xl font-medium mb-3">Functionality Cookies</h3>
              <p className="mb-4">
                These cookies allow the website to remember choices you make and provide enhanced, more personal features. 
                They may be set by us or by third-party providers whose services we have added to our pages.
              </p>
              
              <h3 className="text-xl font-medium mb-3">Targeting/Advertising Cookies</h3>
              <p className="mb-4">
                These cookies are used to deliver advertisements more relevant to you and your interests. They also help 
                limit the number of times you see an advertisement and measure the effectiveness of advertising campaigns.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Third-Party Cookies</h2>
              <p className="mb-4">
                We may use third-party services that set cookies on our website. These include:
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>Google Analytics - for website analytics</li>
                <li>Social media platforms - for social sharing features</li>
                <li>Advertising networks - for targeted advertising</li>
                <li>Content delivery networks - for website performance</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Managing Cookies</h2>
              <p className="mb-4">
                You can control and manage cookies in various ways:
              </p>
              
              <h3 className="text-xl font-medium mb-3">Browser Settings</h3>
              <p className="mb-4">
                Most browsers allow you to manage cookie settings. You can usually find these settings in the 
                'Options' or 'Preferences' menu of your browser.
              </p>
              
              <h3 className="text-xl font-medium mb-3">Opt-Out Tools</h3>
              <p className="mb-4">
                You can opt out of certain third-party cookies through the following tools:
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>Network Advertising Initiative opt-out page</li>
                <li>Digital Advertising Alliance opt-out page</li>
                <li>European Interactive Digital Advertising Alliance opt-out page</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Cookie Retention</h2>
              <p className="mb-4">
                The length of time cookies remain on your device depends on their type:
              </p>
              <ul className="list-disc list-inside mb-4">
                <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
                <li><strong>Persistent cookies:</strong> Remain until their expiry date or until you delete them</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Changes to This Cookie Policy</h2>
              <p className="mb-4">
                We may update this Cookie Policy from time to time. We will notify you of any changes by posting 
                the new Cookie Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this Cookie Policy, please contact us at:
              </p>
              <ul className="list-none mb-4">
                <li>Email: cookies@aiexplorer.com</li>
                <li>Address: [Your Company Address]</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CookiePolicy;
