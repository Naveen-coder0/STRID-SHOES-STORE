import { Helmet } from "react-helmet-async";
import { Target, Heart, Users } from "lucide-react";
import Layout from "@/components/Layout";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About STRIDE | Our Story & Mission - Premium Sneaker Store</title>
        <meta
          name="description"
          content="Learn about STRIDE's mission to bring authentic, premium sneakers to enthusiasts worldwide. Discover our story, values, and commitment to quality footwear."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="section-padding pt-32 relative overflow-hidden">
          <div 
            className="absolute inset-0 opacity-10"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1920')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          />
          <div className="container-custom relative z-10 text-center space-y-6">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Our Story
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-wide">
              ABOUT <span className="gradient-text">STRIDE</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
              Born from a passion for premium footwear, STRIDE is your destination 
              for authentic sneakers that combine style, comfort, and craftsmanship.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="section-padding bg-card">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                  Our Mission
                </span>
                <h2 className="font-display text-4xl md:text-5xl tracking-wide">
                  ELEVATING EVERY STEP
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  At STRIDE, we believe that great shoes do more than protect your feet—they 
                  express who you are. Our mission is to connect sneaker enthusiasts with 
                  authentic, premium footwear from the world's most respected brands.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We carefully curate our collection to ensure every pair meets our high 
                  standards for quality, style, and performance. Whether you're hitting 
                  the streets or the gym, we've got the perfect pair waiting for you.
                </p>
              </div>
              <div className="relative animate-fade-in" style={{ animationDelay: "200ms" }}>
                <img
                  src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=600&fit=crop"
                  alt="Premium sneakers collection"
                  className="rounded-3xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center space-y-4 mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                What We Stand For
              </span>
              <h2 className="font-display text-4xl md:text-5xl tracking-wide">
                OUR VALUES
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "Authenticity",
                  description:
                    "Every product we sell is 100% genuine, sourced directly from authorized retailers and brand partners.",
                },
                {
                  icon: Heart,
                  title: "Passion",
                  description:
                    "We're sneaker enthusiasts ourselves. We understand the thrill of finding that perfect pair.",
                },
                {
                  icon: Users,
                  title: "Community",
                  description:
                    "We're building more than a store—we're creating a community of people who share our love for premium footwear.",
                },
              ].map((value, index) => (
                <div
                  key={value.title}
                  className="text-center p-8 rounded-2xl bg-card border border-border card-glow animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl tracking-wide mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="section-padding bg-card border-y border-border">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "50K+", label: "Happy Customers" },
                { value: "500+", label: "Products" },
                { value: "5", label: "Premium Brands" },
                { value: "99%", label: "Satisfaction Rate" },
              ].map((stat, index) => (
                <div 
                  key={stat.label}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="font-display text-4xl md:text-5xl text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
