import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      <div 
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{ background: "var(--gradient-primary)" }}
      />
      <div 
        className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-10"
        style={{ background: "var(--gradient-primary)" }}
      />

      <div className="container-custom relative z-10 px-4 md:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-secondary/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 text-sm animate-fade-in">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">Premium Collection 2024</span>
            </div>

            <h1 
              className="font-display text-5xl md:text-7xl lg:text-8xl leading-none tracking-wide animate-fade-in"
              style={{ animationDelay: "100ms" }}
            >
              STEP INTO
              <br />
              <span className="gradient-text">GREATNESS</span>
            </h1>

            <p 
              className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 animate-fade-in"
              style={{ animationDelay: "200ms" }}
            >
              Discover our curated collection of premium sneakers from the world's most iconic brands. 
              Elevate your style with every step.
            </p>

            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in"
              style={{ animationDelay: "300ms" }}
            >
              <Link
                to="/shop"
                className="btn-primary px-8 py-4 rounded-full font-semibold uppercase tracking-wider text-primary-foreground inline-flex items-center justify-center gap-2 group"
              >
                <span className="relative z-10">Explore Collection</span>
                <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 rounded-full font-semibold uppercase tracking-wider border border-border hover:border-primary/50 hover:bg-secondary/50 transition-all inline-flex items-center justify-center"
              >
                Our Story
              </Link>
            </div>

            {/* Stats */}
            <div 
              className="flex items-center justify-center lg:justify-start gap-8 pt-8 animate-fade-in"
              style={{ animationDelay: "400ms" }}
            >
              {[
                { value: "50K+", label: "Happy Customers" },
                { value: "500+", label: "Premium Styles" },
                { value: "5", label: "Top Brands" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-3xl md:text-4xl text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div 
            className="relative animate-fade-in"
            style={{ animationDelay: "200ms" }}
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-2xl animate-pulse-glow" />
              <img
                src="https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800&h=800&fit=crop"
                alt="Featured Sneaker"
                className="relative z-10 w-full h-full object-cover rounded-3xl animate-float"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
