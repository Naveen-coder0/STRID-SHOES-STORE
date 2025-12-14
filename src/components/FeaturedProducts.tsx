import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-12">
          <div className="space-y-2">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Curated Selection
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-wide">
              FEATURED PICKS
            </h2>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="font-medium">View All</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
