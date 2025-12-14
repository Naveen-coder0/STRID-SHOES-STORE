import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Disclaimer | STRIDE - Legal Information</title>
        <meta
          name="description"
          content="Read STRIDE's terms and conditions, privacy policy, and disclaimer. Understand your rights and our policies regarding purchases and usage."
        />
      </Helmet>
      <Layout>
        <section className="section-padding pt-32">
          <div className="container-custom max-w-4xl">
            <div className="text-center space-y-4 mb-12">
              <h1 className="font-display text-5xl md:text-6xl tracking-wide">
                TERMS & <span className="gradient-text">DISCLAIMER</span>
              </h1>
              <p className="text-muted-foreground">
                Last updated: {new Date().toLocaleDateString("en-IN", { month: "long", year: "numeric" })}
              </p>
            </div>

            <div className="space-y-12 text-muted-foreground">
              {/* Terms of Use */}
              <section className="space-y-4">
                <h2 className="font-display text-2xl text-foreground tracking-wide">
                  1. TERMS OF USE
                </h2>
                <p>
                  By accessing and using the STRIDE website, you accept and agree to be bound by 
                  these Terms and Conditions. If you disagree with any part of these terms, 
                  please do not use our website.
                </p>
                <p>
                  We reserve the right to modify these terms at any time. Changes will be 
                  effective immediately upon posting on the website. Your continued use of 
                  the site following any changes constitutes acceptance of those changes.
                </p>
              </section>

              {/* Products & Pricing */}
              <section className="space-y-4">
                <h2 className="font-display text-2xl text-foreground tracking-wide">
                  2. PRODUCTS & PRICING
                </h2>
                <p>
                  All products displayed on STRIDE are subject to availability. We make every 
                  effort to display accurate product images and descriptions, but we cannot 
                  guarantee that your monitor's display will accurately reflect the actual 
                  product colors.
                </p>
                <p>
                  Prices are listed in Indian Rupees (INR) and are subject to change without 
                  notice. We reserve the right to correct any pricing errors and to refuse 
                  or cancel orders placed at incorrect prices.
                </p>
              </section>

              {/* Payment */}
              <section className="space-y-4">
                <h2 className="font-display text-2xl text-foreground tracking-wide">
                  3. PAYMENT & ORDERS
                </h2>
                <p>
                  Payment is processed through our secure payment gateway. By placing an order, 
                  you confirm that the payment information you provide is accurate and that you 
                  are authorized to use the payment method.
                </p>
                <p>
                  We reserve the right to refuse or cancel any order for any reason, including 
                  but not limited to product availability, errors in pricing or product 
                  information, or suspected fraudulent activity.
                </p>
              </section>

              {/* Shipping & Delivery */}
              <section className="space-y-4">
                <h2 className="font-display text-2xl text-foreground tracking-wide">
                  4. SHIPPING & DELIVERY
                </h2>
                <p>
                  We aim to dispatch orders within 1-2 business days. Delivery times vary 
                  depending on your location and typically range from 3-7 business days 
                  within India.
                </p>
                <p>
                  Risk of loss and title for items purchased pass to you upon delivery of 
                  the items to the carrier. We are not responsible for delays caused by 
                  carriers or customs clearance.
                </p>
              </section>

              {/* Returns & Refunds */}
              <section className="space-y-4">
                <h2 className="font-display text-2xl text-foreground tracking-wide">
                  5. RETURNS & REFUNDS
                </h2>
                <p>
                  We offer a 30-day return policy for unworn items in their original 
                  packaging. To initiate a return, please contact our support team at 
                  support@strideshoes.com.
                </p>
                <p>
                  Refunds will be processed within 7-10 business days after we receive 
                  and inspect the returned item. Original shipping costs are non-refundable.
                </p>
              </section>

              {/* Disclaimer */}
              <section className="space-y-4">
                <h2 className="font-display text-2xl text-foreground tracking-wide">
                  6. DISCLAIMER
                </h2>
                <p>
                  The information provided on this website is for general informational 
                  purposes only. While we strive to keep the information up to date and 
                  accurate, we make no representations or warranties of any kind about 
                  the completeness, accuracy, reliability, suitability, or availability 
                  of the website or products.
                </p>
                <p>
                  In no event will we be liable for any loss or damage including without 
                  limitation, indirect or consequential loss or damage, arising from the 
                  use of this website.
                </p>
              </section>

              {/* Privacy */}
              <section className="space-y-4">
                <h2 className="font-display text-2xl text-foreground tracking-wide">
                  7. PRIVACY POLICY
                </h2>
                <p>
                  We collect and process personal information in accordance with applicable 
                  data protection laws. Information collected includes name, email, shipping 
                  address, and payment details necessary to process your orders.
                </p>
                <p>
                  We do not sell or share your personal information with third parties 
                  except as necessary to process orders and provide customer support.
                </p>
              </section>

              {/* Contact */}
              <section className="space-y-4">
                <h2 className="font-display text-2xl text-foreground tracking-wide">
                  8. CONTACT INFORMATION
                </h2>
                <p>
                  For any questions regarding these terms, please contact us:
                </p>
                <p className="text-foreground">
                  Email: <a href="mailto:support@strideshoes.com" className="text-primary hover:underline">support@strideshoes.com</a>
                </p>
              </section>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Terms;
