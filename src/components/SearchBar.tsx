import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";
import { products } from "@/data/products";

interface SearchBarProps {
  onClose?: () => void;
  isMobile?: boolean;
}

const SearchBar = ({ onClose, isMobile = false }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<typeof products>([]);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.trim()) {
      const filtered = products.filter(
        (product) =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered.slice(0, 5));
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (productId: string) => {
    navigate(`/product/${productId}`);
    setQuery("");
    setIsOpen(false);
    onClose?.();
  };

  const handleSearchAll = () => {
    if (query.trim()) {
      navigate(`/shop?search=${encodeURIComponent(query)}`);
      setQuery("");
      setIsOpen(false);
      onClose?.();
    }
  };

  return (
    <div ref={containerRef} className={`relative ${isMobile ? "w-full" : "w-64"}`}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearchAll()}
          placeholder="Search shoes..."
          className="w-full pl-10 pr-10 py-2 bg-muted/50 border border-border rounded-full text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-card border border-border rounded-xl shadow-xl z-50 overflow-hidden animate-fade-in">
          {results.map((product) => (
            <button
              key={product.id}
              onClick={() => handleSelect(product.id)}
              className="w-full flex items-center gap-3 p-3 hover:bg-muted/50 transition-colors text-left"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-12 h-12 object-cover rounded-lg"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">
                  {product.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {product.category} • ₹{product.price.toLocaleString()}
                </p>
              </div>
            </button>
          ))}
          <button
            onClick={handleSearchAll}
            className="w-full p-3 text-sm text-primary font-medium hover:bg-primary/10 transition-colors border-t border-border"
          >
            View all results for "{query}"
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
