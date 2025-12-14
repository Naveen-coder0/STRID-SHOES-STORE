import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ShieldCheck, Truck, RotateCcw } from "lucide-react";
import Layout from "@/components/Layout";
import SizeSelector from "@/components/SizeSelector";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { toast } from "@/hooks/use-toast";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // ✅ STATE (INSIDE COMPONENT)
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === id);

  const relatedProducts = products
    .filter((p) => p.category === product?.category && p.id !== id)
    .slice(0, 4);

  if (!product) {
    return (
      <Layout>
        <div className="section-padding pt-32 text-center">
          <h1 className="font-display text-4xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-primary hover:underline">
            Back to Shop
          </Link>
        </div>
      </Layout>
    );
  }

  // ✅ TOTAL PRICE BASED ON QUANTITY
  const totalPrice = product.price * quantity;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  // ✅ PAY NOW HANDLER
  const handlePayNow = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        description: "Choose your preferred size before proceeding.",
        variant: "destructive",
      });
      return;
    }

    const paymentUrl =
      `https://payment-system-tau.vercel.app/` +
      `?name=${encodeURIComponent(product.name)}` +
      `&price=${totalPrice}` +
      `&qty=${quantity}` +
      `&size=${selectedSize}`;

    window.location.href = paymentUrl;
  };

  return (
    <>
      <Helmet>
        <title>{product.name} | STRIDE</title>
        <meta
          name="description"
          content={`${product.description.slice(0, 150)}...`}
        />
      </Helmet>

      <Layout>
        <section className="section-padding pt-32">
          <div className="container-custom">

            {/* BACK */}
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </button>

            <div className="grid lg:grid-cols-2 gap-12">

              {/* IMAGE */}
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-secondary">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* DETAILS */}
              <div className="space-y-8">
                <div>
                  <span className="text-primary text-sm uppercase">
                    {product.category}
                  </span>

                  <h1 className="font-display text-4xl">
                    {product.name}
                  </h1>

                  <p className="text-3xl font-semibold">
                    {formatPrice(totalPrice)}
                  </p>
                </div>

                <p className="text-muted-foreground">
                  {product.description}
                </p>

                {/* SIZE */}
                <SizeSelector
                  sizes={product.sizes}
                  selected={selectedSize}
                  onSelect={setSelectedSize}
                />

                {/* QUANTITY */}
                <div>
                  <p className="font-medium mb-2">Quantity</p>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setQuantity(q => Math.max(1, q - 1))}
                      className="w-10 h-10 rounded-full border text-xl"
                    >
                      −
                    </button>
                    <span className="text-lg font-semibold">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(q => q + 1)}
                      className="w-10 h-10 rounded-full border text-xl"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* PAY NOW */}
                <button
                  onClick={handlePayNow}
                  className="w-full btn-primary py-4 rounded-full text-lg"
                >
                  Pay Now – {formatPrice(totalPrice)}
                </button>

                {/* TRUST */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                  {[
                    { icon: ShieldCheck, label: "Authentic" },
                    { icon: Truck, label: "Fast Delivery" },
                    { icon: RotateCcw, label: "Easy Returns" },
                  ].map((item) => (
                    <div key={item.label} className="text-center">
                      <item.icon className="mx-auto text-primary" />
                      <p className="text-xs text-muted-foreground">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            </div>

            {/* RELATED */}
            {relatedProducts.length > 0 && (
              <div className="mt-24">
                <h2 className="font-display text-3xl mb-8">
                  YOU MAY ALSO LIKE
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {relatedProducts.map((p, i) => (
                    <ProductCard key={p.id} product={p} index={i} />
                  ))}
                </div>
              </div>
            )}

          </div>
        </section>
      </Layout>
    </>
  );
};

export default ProductDetails;
