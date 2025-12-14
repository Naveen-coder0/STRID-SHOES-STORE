import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag, Search } from "lucide-react";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "FAQ", path: "/faq" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20 px-4 md:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <ShoppingBag className="w-8 h-8 text-primary" />
            <span className="font-display text-2xl md:text-3xl tracking-wider">
              STRIDE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${
                  isActive(link.path)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop Search & Shop Button */}
          <div className="hidden lg:flex items-center gap-4">
            <SearchBar />
            <Link
              to="/shop"
              className="btn-primary px-6 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wider text-primary-foreground"
            >
              <span className="relative z-10">Shop Now</span>
            </Link>
          </div>

          {/* Mobile Controls */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setShowMobileSearch(!showMobileSearch)}
              className="p-2 text-foreground"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        {showMobileSearch && (
          <div className="lg:hidden px-4 pb-4 animate-fade-in">
            <SearchBar isMobile onClose={() => setShowMobileSearch(false)} />
          </div>
        )}

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border animate-fade-in">
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium uppercase tracking-wider py-2 ${
                    isActive(link.path)
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="btn-primary px-6 py-3 rounded-full text-center font-semibold uppercase tracking-wider text-primary-foreground mt-2"
              >
                <span className="relative z-10">Shop Now</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
