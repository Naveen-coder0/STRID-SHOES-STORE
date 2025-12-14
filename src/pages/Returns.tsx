import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { RotateCcw, CheckCircle, XCircle, Clock } from "lucide-react";

const Returns = () => {
  return (
    <>
      <Helmet>
        <title>Returns & Refunds Policy | STRIDE</title>
        <meta
          name="description"
          content="Learn about STRIDE's 30-day return policy. Easy returns, hassle-free refunds. Shop with confidence knowing you can return if not satisfied."
        />
      </Helmet>
      <Layout>
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="font-display text-4xl md:text-6xl tracking-wide mb-4">
                RETURNS & <span className="gradient-text">REFUNDS</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Shop with confidence - easy returns within 30 days
              </p>
            </div>

            {/* Policy Highlights */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-card/50 border border-border rounded-xl p-6 text-center">
                <RotateCcw className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-display text-lg mb-2">30-Day Returns</h3>
                <p className="text-sm text-muted-foreground">
                  Return any unworn item within 30 days
                </p>
              </div>
              <div className="bg-card/50 border border-border rounded-xl p-6 text-center">
                <CheckCircle className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-display text-lg mb-2">Free Returns</h3>
                <p className="text-sm text-muted-foreground">
                  We cover return shipping costs
                </p>
              </div>
              <div className="bg-card/50 border border-border rounded-xl p-6 text-center">
                <Clock className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-display text-lg mb-2">Quick Refunds</h3>
                <p className="text-sm text-muted-foreground">
                  Refunds processed in 5-7 days
                </p>
              </div>
            </div>

            {/* Return Policy Details */}
            <div className="space-y-8">
              <div className="bg-card/50 border border-border rounded-xl p-6">
                <h3 className="font-display text-xl mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Eligible for Return
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Unworn shoes in original condition</li>
                  <li>• Items with original tags attached</li>
                  <li>• Products in original packaging</li>
                  <li>• Returns initiated within 30 days of delivery</li>
                  <li>• Wrong size or color received</li>
                  <li>• Defective or damaged products</li>
                </ul>
              </div>

              <div className="bg-card/50 border border-border rounded-xl p-6">
                <h3 className="font-display text-xl mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-500" />
                  Not Eligible for Return
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Worn or used shoes</li>
                  <li>• Items without original packaging</li>
                  <li>• Products with removed tags</li>
                  <li>• Items damaged due to misuse</li>
                  <li>• Returns after 30-day window</li>
                  <li>• Sale items marked as final sale</li>
                </ul>
              </div>

              <div className="bg-card/50 border border-border rounded-xl p-6">
                <h3 className="font-display text-xl mb-4">How to Return</h3>
                <ol className="space-y-4 text-muted-foreground">
                  <li className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                    <div>
                      <strong className="text-foreground">Contact Us</strong>
                      <p>Email support@stridestore.com with your order number</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                    <div>
                      <strong className="text-foreground">Get Return Label</strong>
                      <p>We'll send you a prepaid return shipping label</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                    <div>
                      <strong className="text-foreground">Pack & Ship</strong>
                      <p>Pack the item securely and drop it off at any courier partner</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                    <div>
                      <strong className="text-foreground">Get Refunded</strong>
                      <p>Refund processed within 5-7 business days of receiving the item</p>
                    </div>
                  </li>
                </ol>
              </div>

              <div className="bg-card/50 border border-border rounded-xl p-6">
                <h3 className="font-display text-xl mb-4">Exchange Policy</h3>
                <p className="text-muted-foreground">
                  Need a different size or color? We're happy to exchange your item. 
                  The exchange process is similar to returns - contact us, and we'll 
                  arrange for the new item to be shipped once we receive your return. 
                  If there's a price difference, we'll adjust accordingly.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Returns;
