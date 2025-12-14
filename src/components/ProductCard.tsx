import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="bg-card rounded-2xl overflow-hidden card-glow">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-secondary">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {product.featured && (
            <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
              Featured
            </span>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-5 space-y-3">
          <span className="text-xs font-medium uppercase tracking-wider text-primary">
            {product.category}
          </span>
          <h3 className="font-display text-xl md:text-2xl tracking-wide line-clamp-1">
            {product.name}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold">{formatPrice(product.price)}</span>
            <span className="flex items-center gap-1 text-sm text-muted-foreground group-hover:text-primary transition-colors">
              View Details
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
