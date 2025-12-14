import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CheckCircle, Package, Mail, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";

const ThankYou = () => {
  return (
    <>
      <Helmet>
        <title>Thank You for Your Order | STRIDE</title>
        <meta
          name="description"
          content="Thank you for your purchase at STRIDE. Your order has been confirmed and will be shipped soon."
        />
      </Helmet>
      <Layout>
        <section className="section-padding pt-32 min-h-screen flex items-center">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center space-y-8">
              {/* Success Icon */}
              <div className="animate-scale-in">
                <div className="w-24 h-24 mx-auto rounded-full bg-primary/10 flex items-center justify-center animate-pulse-glow">
                  <CheckCircle className="w-12 h-12 text-primary" />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-4 animate-fade-in" style={{ animationDelay: "200ms" }}>
                <h1 className="font-display text-5xl md:text-6xl tracking-wide">
                  THANK <span className="gradient-text">YOU!</span>
                </h1>
                <p className="text-muted-foreground text-lg">
                  Your order has been confirmed and will be on its way soon.
                </p>
              </div>

              {/* Order Info */}
              <div 
                className="bg-card rounded-2xl p-6 border border-border space-y-4 animate-fade-in"
                style={{ animationDelay: "300ms" }}
              >
                <div className="flex items-center justify-center gap-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Package className="w-5 h-5 text-primary" />
                    <span>Order processing</span>
                  </div>
                  <div className="w-px h-6 bg-border" />
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>Confirmation email sent</span>
                  </div>
                </div>
              </div>

              {/* What's Next */}
              <div 
                className="text-left bg-card rounded-2xl p-8 border border-border animate-fade-in"
                style={{ animationDelay: "400ms" }}
              >
                <h2 className="font-display text-xl tracking-wide mb-4">WHAT'S NEXT?</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                    <span>You'll receive an order confirmation email shortly.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                    <span>We'll notify you when your order ships with tracking details.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                    <span>Your order will arrive within 3-7 business days.</span>
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <div 
                className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
                style={{ animationDelay: "500ms" }}
              >
                <Link
                  to="/shop"
                  className="btn-primary px-8 py-4 rounded-full font-semibold uppercase tracking-wider text-primary-foreground inline-flex items-center justify-center gap-2 group"
                >
                  <span className="relative z-10">Continue Shopping</span>
                  <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/"
                  className="px-8 py-4 rounded-full font-semibold uppercase tracking-wider border border-border hover:border-primary/50 hover:bg-secondary/50 transition-all inline-flex items-center justify-center"
                >
                  Back to Home
                </Link>
              </div>

              {/* Support */}
              <p className="text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "600ms" }}>
                Questions? Contact us at{" "}
                <a href="mailto:support@strideshoes.com" className="text-primary hover:underline">
                  support@strideshoes.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ThankYou;
