import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import CategoryFilter from "@/components/CategoryFilter";
import { products } from "@/data/products";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Shop All Sneakers | STRIDE - Premium Footwear Collection</title>
        <meta
          name="description"
          content="Browse our complete collection of premium sneakers. Filter by brand - Nike, Adidas, Puma, New Balance, Reebok. Free shipping on orders over ₹5000."
        />
      </Helmet>
      <Layout>
        <section className="section-padding pt-32">
          <div className="container-custom">
            {/* Header */}
            <div className="text-center space-y-4 mb-12">
              <h1 className="font-display text-5xl md:text-7xl tracking-wide">
                ALL <span className="gradient-text">SNEAKERS</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Explore our complete collection of premium footwear from the world's top brands.
              </p>
            </div>

            {/* Filter */}
            <div className="mb-12">
              <CategoryFilter
                selected={selectedCategory}
                onSelect={setSelectedCategory}
              />
            </div>

            {/* Products Count */}
            <div className="mb-8">
              <p className="text-muted-foreground">
                Showing <span className="text-foreground font-medium">{filteredProducts.length}</span> products
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">
                  No products found in this category.
                </p>
              </div>
            )}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Shop;
