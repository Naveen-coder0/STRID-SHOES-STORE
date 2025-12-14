import { Link } from "react-router-dom";
import { ShoppingBag, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <ShoppingBag className="w-8 h-8 text-primary" />
              <span className="font-display text-2xl tracking-wider">STRIDE</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium footwear for those who demand excellence. Step into greatness with every stride.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-xl tracking-wider">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["Home", "Shop", "About", "Contact"].map((link) => (
                <Link
                  key={link}
                  to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-display text-xl tracking-wider">Legal</h4>
            <div className="flex flex-col gap-2">
              <Link
                to="/terms"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Terms & Conditions
              </Link>
              <Link
                to="/terms"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Disclaimer
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display text-xl tracking-wider">Contact</h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:naveen.maan2006@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                naveen.maan2006@gmail.com
              </a>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Phone className="w-4 h-4" />
                +91 9467269782
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4" />
                Chandigrah, India
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Stride. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Support: <a href="mailto:naveen.maan2006@gmail.com" className="text-primary hover:underline">naveen.maan2006@gmail.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
