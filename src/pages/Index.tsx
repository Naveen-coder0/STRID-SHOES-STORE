import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import PromoBanner from "@/components/PromoBanner";
import FeaturedProducts from "@/components/FeaturedProducts";
import BrandHighlights from "@/components/BrandHighlights";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>STRIDE - Premium Sneakers & Footwear | Shop Nike, Adidas, Puma</title>
        <meta
          name="description"
          content="Discover premium sneakers from Nike, Adidas, Puma, New Balance & Reebok. Shop authentic footwear with fast delivery. Elevate your style with STRIDE."
        />
      </Helmet>
      <Layout>
        <HeroSection />
        <PromoBanner />
        <FeaturedProducts />
        <BrandHighlights />
        
        {/* CTA Section */}
        <section className="section-padding bg-background relative overflow-hidden">
          <div 
            className="absolute inset-0 opacity-5"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=1920')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          />
          <div className="container-custom relative z-10 text-center space-y-6">
            <h2 className="font-display text-4xl md:text-6xl tracking-wide">
              READY TO <span className="gradient-text">LEVEL UP?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Join thousands of sneaker enthusiasts who trust STRIDE for authentic, 
              premium footwear. Your next favorite pair is waiting.
            </p>
            <Link
              to="/shop"
              className="btn-primary px-10 py-4 rounded-full inline-block text-primary-foreground font-semibold text-lg uppercase tracking-wider"
            >
              Explore Collection
            </Link>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Index;
