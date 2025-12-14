import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Truck, Clock, MapPin, Package } from "lucide-react";

const shippingOptions = [
  {
    icon: Truck,
    title: "Standard Shipping",
    time: "5-7 Business Days",
    price: "₹99",
    description: "Reliable delivery for non-urgent orders"
  },
  {
    icon: Clock,
    title: "Express Shipping",
    time: "2-3 Business Days",
    price: "₹249",
    description: "Faster delivery when you need it quick"
  },
  {
    icon: MapPin,
    title: "Same Day Delivery",
    time: "Within 24 Hours",
    price: "₹499",
    description: "Available in select metro cities only"
  }
];

const Shipping = () => {
  return (
    <>
      <Helmet>
        <title>Shipping Information | STRIDE - Fast & Reliable Delivery</title>
        <meta
          name="description"
          content="Learn about STRIDE's shipping options, delivery times, and policies. Free shipping on orders over ₹5,000. Fast and reliable delivery across India."
        />
      </Helmet>
      <Layout>
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="font-display text-4xl md:text-6xl tracking-wide mb-4">
                SHIPPING <span className="gradient-text">INFO</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Fast, reliable delivery right to your doorstep
              </p>
            </div>

            {/* Free Shipping Banner */}
            <div className="bg-primary/20 border border-primary/30 rounded-2xl p-6 mb-12 text-center">
              <Package className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="font-display text-2xl mb-2">FREE SHIPPING</h2>
              <p className="text-muted-foreground">
                On all orders over ₹5,000 • No promo code needed
              </p>
            </div>

            {/* Shipping Options */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {shippingOptions.map((option, index) => (
                <div
                  key={index}
                  className="bg-card/50 border border-border rounded-xl p-6 hover:bg-card transition-colors"
                >
                  <option.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-display text-xl mb-2">{option.title}</h3>
                  <p className="text-primary font-semibold mb-1">{option.time}</p>
                  <p className="text-2xl font-bold text-foreground mb-2">{option.price}</p>
                  <p className="text-sm text-muted-foreground">{option.description}</p>
                </div>
              ))}
            </div>

            {/* Shipping Details */}
            <div className="space-y-8">
              <div className="bg-card/50 border border-border rounded-xl p-6">
                <h3 className="font-display text-xl mb-4">Delivery Coverage</h3>
                <p className="text-muted-foreground mb-4">
                  We currently ship to all major cities and towns across India. Delivery times may vary based on your location:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Metro Cities (Mumbai, Delhi, Bangalore, etc.): 2-4 days</li>
                  <li>• Tier 2 Cities: 4-6 days</li>
                  <li>• Other Areas: 6-8 days</li>
                </ul>
              </div>

              <div className="bg-card/50 border border-border rounded-xl p-6">
                <h3 className="font-display text-xl mb-4">Order Tracking</h3>
                <p className="text-muted-foreground">
                  Once your order ships, you'll receive a confirmation email with tracking information. 
                  You can track your package in real-time through our partner courier's website or app.
                </p>
              </div>

              <div className="bg-card/50 border border-border rounded-xl p-6">
                <h3 className="font-display text-xl mb-4">Delivery Attempts</h3>
                <p className="text-muted-foreground">
                  Our courier partners will attempt delivery up to 3 times. If unsuccessful, 
                  the package will be held at the nearest hub for 7 days before being returned.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Shipping;
