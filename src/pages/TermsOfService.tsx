
import Layout from '@/components/layout/Layout';

const TermsOfService = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
              <p className="mb-4">
                By accessing and using AIExplorer, you accept and agree to be bound by the terms and provision 
                of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Use License</h2>
              <p className="mb-4">
                Permission is granted to temporarily download one copy of the materials on AIExplorer's website 
                for personal, non-commercial transitory viewing only. This is the grant of a license, not a 
                transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">User Accounts</h2>
              <p className="mb-4">
                When you create an account with us, you must provide information that is accurate, complete, 
                and current at all times. You are responsible for:
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>Safeguarding your password and account information</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Prohibited Uses</h2>
              <p className="mb-4">You may not use our service:</p>
              <ul className="list-disc list-inside mb-4">
                <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                <li>To submit false or misleading information</li>
                <li>To upload or transmit viruses or any other type of malicious code</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Content</h2>
              <p className="mb-4">
                Our service allows you to post, link, store, share and otherwise make available certain information, 
                text, graphics, videos, or other material. You are responsible for the content that you post to the 
                service, including its legality, reliability, and appropriateness.
              </p>
              <p className="mb-4">
                By posting content to the service, you grant us the right and license to use, modify, publicly perform, 
                publicly display, reproduce, and distribute such content on and through the service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Disclaimers</h2>
              <p className="mb-4">
                The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, 
                this Company excludes all representations, warranties, conditions and terms related to our website and your use thereof.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
              <p className="mb-4">
                In no event shall AIExplorer, nor its directors, employees, partners, agents, suppliers, or affiliates, 
                be liable for any indirect, incidental, special, consequential, or punitive damages, including without 
                limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Termination</h2>
              <p className="mb-4">
                We may terminate or suspend your account and bar access to the service immediately, without prior notice 
                or liability, under our sole discretion, for any reason whatsoever including without limitation if you 
                breach the Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <p className="mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <ul className="list-none mb-4">
                <li>Email: legal@aiexplorer.com</li>
                <li>Address: [Your Company Address]</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsOfService;
