import { Link } from "react-router-dom";
import { Percent, Truck, Clock, Gift } from "lucide-react";

const promos = [
  {
    icon: Percent,
    title: "30% OFF",
    subtitle: "Selected Nike Styles",
    link: "/shop",
    accent: true
  },
  {
    icon: Truck,
    title: "Free Shipping",
    subtitle: "On Orders Over ₹5,000",
    link: "/shop",
    accent: false
  },
  {
    icon: Clock,
    title: "Flash Sale",
    subtitle: "Ends in 24 Hours",
    link: "/shop",
    accent: true
  },
  {
    icon: Gift,
    title: "Buy 2 Get 1",
    subtitle: "On All Puma Shoes",
    link: "/shop",
    accent: false
  }
];

const PromoBanner = () => {
  return (
    <section className="py-6 bg-primary/10 border-y border-primary/20">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {promos.map((promo, index) => (
            <Link
              key={index}
              to={promo.link}
              className={`group flex items-center gap-3 p-4 rounded-xl transition-all duration-300 hover:scale-105 ${
                promo.accent 
                  ? "bg-primary/20 hover:bg-primary/30" 
                  : "bg-card/50 hover:bg-card"
              }`}
            >
              <div className={`p-3 rounded-full ${
                promo.accent ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
              }`}>
                <promo.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className={`font-display text-lg tracking-wide ${
                  promo.accent ? "text-primary" : "text-foreground"
                }`}>
                  {promo.title}
                </h3>
                <p className="text-xs text-muted-foreground">{promo.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
