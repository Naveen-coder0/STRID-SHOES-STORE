import { Zap, Shield, Truck, RefreshCw } from "lucide-react";

const highlights = [
  {
    icon: Zap,
    title: "Authentic Products",
    description: "100% genuine sneakers from authorized retailers worldwide.",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Your transactions are protected with industry-standard encryption.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Express shipping to your doorstep within 3-5 business days.",
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    description: "Hassle-free 30-day return policy for your peace of mind.",
  },
];

const BrandHighlights = () => {
  return (
    <section className="section-padding bg-card border-y border-border">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="text-center space-y-4 p-6 rounded-2xl bg-secondary/30 hover:bg-secondary/50 transition-colors duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl tracking-wide">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandHighlights;
