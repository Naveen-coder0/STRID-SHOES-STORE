import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const images = product.images;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [fade, setFade] = useState(true);

  // 🔁 Auto image slider
  useEffect(() => {
    if (isHovering || images.length <= 1) return;

    const interval = setInterval(() => {
      setFade(false); // fade out
      setTimeout(() => {
        setCurrentIndex((prev) =>
          prev === images.length - 1 ? 0 : prev + 1
        );
        setFade(true); // fade in
      }, 200);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovering, images.length]);

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div
        className="bg-card rounded-2xl overflow-hidden card-glow"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* IMAGE */}
        <div className="relative aspect-square overflow-hidden bg-secondary">
          <img
            src={images[currentIndex]}
            alt={product.name}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
            loading="eager"
          />
        </div>

        {/* CONTENT */}
        <div className="p-5 space-y-3">
          <span className="text-xs uppercase tracking-wider text-primary">
            {product.category}
          </span>

          <h3 className="font-display text-xl line-clamp-1">
            {product.name}
          </h3>

          <div className="flex items-center justify-between">
            <span className="font-semibold">₹{product.price}</span>
            <span className="flex items-center gap-1 text-sm text-muted-foreground group-hover:text-primary">
              View Details
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
