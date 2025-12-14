import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | STRIDE</title>
        <meta
          name="description"
          content="Read STRIDE's privacy policy. Learn how we collect, use, and protect your personal information when you shop with us."
        />
      </Helmet>
      <Layout>
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="font-display text-4xl md:text-6xl tracking-wide mb-4">
                PRIVACY <span className="gradient-text">POLICY</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Last updated: December 2024
              </p>
            </div>

            <div className="prose prose-invert max-w-none space-y-8">
              <div className="bg-card/50 border border-border rounded-xl p-6">
                <h2 className="font-display text-xl mb-4 text-foreground">Information We Collect</h2>
                <p className="text-muted-foreground mb-4">
                  We collect information you provide directly to us, such as when you create an account, 
                  make a purchase, or contact us for support. This may include:
                </p>
                <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                  <li>Name and contact information (email, phone, address)</li>
                  <li>Payment information (processed securely through our payment partners)</li>
                  <li>Order history and preferences</li>
                  <li>Communications with our support team</li>
                </ul>
              </div>

              <div className="bg-card/50 border border-border rounded-xl p-6">
                <h2 className="font-display text-xl mb-4 text-foreground">How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">
                  We use the information we collect to:
                </p>
                <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                  <li>Process and fulfill your orders</li>
                  <li>Send order confirmations and shipping updates</li>
                  <li>Respond to your questions and requests</li>
                  <li>Improve our products and services</li>
                  <li>Send promotional communications (with your consent)</li>
                  <li>Detect and prevent fraud</li>
                </ul>
              </div>

              <div className="bg-card/50 border border-border rounded-xl p-6">
                <h2 className="font-display text-xl mb-4 text-foreground">Information Sharing</h2>
                <p className="text-muted-foreground">
                  We do not sell, trade, or rent your personal information to third parties. 
                  We may share your information with trusted service providers who assist us in 
                  operating our website, conducting our business, or servicing you. These partners 
                  are bound by confidentiality agreements and are only authorized to use your 
                  information as necessary to provide their services.
                </p>
              </div>

              <div className="bg-card/50 border border-border rounded-xl p-6">
                <h2 className="font-display text-xl mb-4 text-foreground">Data Security</h2>
                <p className="text-muted-foreground">
                  We implement industry-standard security measures to protect your personal information. 
                  All payment transactions are encrypted using SSL technology. However, no method of 
                  transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div className="bg-card/50 border border-border rounded-xl p-6">
                <h2 className="font-display text-xl mb-4 text-foreground">Cookies</h2>
                <p className="text-muted-foreground">
                  We use cookies and similar technologies to enhance your browsing experience, 
                  analyze site traffic, and personalize content. You can control cookies through 
                  your browser settings, but disabling them may affect site functionality.
                </p>
              </div>

              <div className="bg-card/50 border border-border rounded-xl p-6">
                <h2 className="font-display text-xl mb-4 text-foreground">Your Rights</h2>
                <p className="text-muted-foreground mb-4">
                  You have the right to:
                </p>
                <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Withdraw consent where applicable</li>
                </ul>
              </div>

              <div className="bg-card/50 border border-border rounded-xl p-6">
                <h2 className="font-display text-xl mb-4 text-foreground">Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have questions about this Privacy Policy or our data practices, 
                  please contact us at privacy@stridestore.com or through our Contact page.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Privacy;
