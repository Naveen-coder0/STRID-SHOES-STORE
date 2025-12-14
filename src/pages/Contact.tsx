import { Helmet } from "react-helmet-async";
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";
import Layout from "@/components/Layout";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | STRIDE - Get in Touch for Support & Inquiries</title>
        <meta
          name="description"
          content="Contact STRIDE for any questions about orders, products, or support. Email us at naveen.maan2006@gmail.com. We're here to help!"
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="section-padding pt-32">
          <div className="container-custom text-center space-y-6">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Get In Touch
            </span>
            <h1 className="font-display text-5xl md:text-7xl tracking-wide">
              CONTACT <span className="gradient-text">US</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have a question about an order or just want to say hello? 
              We'd love to hear from you. Our team is here to help.
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="section-padding pt-8">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                {
                  icon: Mail,
                  title: "Email Us",
                  content: "naveen.maan2006@gmail.com",
                  link: "mailto:naveen.maan2006@gmail.com",
                },
                {
                  icon: Phone,
                  title: "Call Us",
                  content: "+91 9467269782",
                  link: "tel:+919467269782",
                },
                {
                  icon: MapPin,
                  title: "Visit Us",
                  content: "Chandigrah India",
                  link: null,
                },
                {
                  icon: Clock,
                  title: "Working Hours",
                  content: "Mon - Sat: 10AM - 10PM",
                  link: null,
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl bg-card border border-border text-center card-glow animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-lg tracking-wide mb-2">{item.title}</h3>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{item.content}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Main Contact Section */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Contact Form */}
              <div className="bg-card rounded-3xl p-8 border border-border animate-fade-in">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="w-6 h-6 text-primary" />
                  <h2 className="font-display text-2xl tracking-wide">SEND A MESSAGE</h2>
                </div>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Full Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email Address</label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Subject</label>
                    <input
                      type="text"
                      placeholder="How can we help?"
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <textarea
                      rows={5}
                      placeholder="Tell us more about your inquiry..."
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full btn-primary py-4 rounded-full font-semibold uppercase tracking-wider text-primary-foreground"
                  >
                    <span className="relative z-10">Send Message</span>
                  </button>
                </form>
              </div>

              {/* Support Info */}
              <div className="space-y-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
                <div className="bg-card rounded-3xl p-8 border border-border">
                  <h2 className="font-display text-2xl tracking-wide mb-4">
                    NEED IMMEDIATE HELP?
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    For urgent inquiries about your order or product questions, 
                    reach out to our support team directly via email.
                  </p>
                  <a
                    href="mailto:naveen.maan2006@gmail.com"
                    className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                  >
                    <Mail className="w-5 h-5" />
                    naveen.maan2006@gmail.com
                  </a>
                </div>

                <div className="bg-card rounded-3xl p-8 border border-border">
                  <h2 className="font-display text-2xl tracking-wide mb-4">
                    FREQUENTLY ASKED
                  </h2>
                  <div className="space-y-4">
                    {[
                      "How long does shipping take?",
                      "What is your return policy?",
                      "Are all products authentic?",
                      "How can I track my order?",
                    ].map((question) => (
                      <div
                        key={question}
                        className="flex items-center justify-between py-3 border-b border-border last:border-0"
                      >
                        <span className="text-muted-foreground">{question}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
