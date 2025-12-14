import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I find my shoe size?",
    answer: "We recommend measuring your feet in the evening when they're at their largest. Use our size guide available on each product page. If you're between sizes, we suggest going up a half size for comfort."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for unworn shoes in their original packaging. Simply contact our support team to initiate a return. Refunds are processed within 5-7 business days after we receive the item."
  },
  {
    question: "How long does shipping take?",
    answer: "Standard shipping takes 5-7 business days. Express shipping (2-3 business days) is available for an additional fee. Free shipping is available on orders over ₹5,000."
  },
  {
    question: "Are all products authentic?",
    answer: "Yes, we guarantee 100% authenticity on all our products. We source directly from authorized distributors and brand partners. Every item comes with original packaging and authenticity verification."
  },
  {
    question: "How do I track my order?",
    answer: "Once your order ships, you'll receive a confirmation email with tracking information. You can also track your order by logging into your account or contacting our support team."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Currently, we ship within India only. We're working on expanding our international shipping capabilities. Sign up for our newsletter to be notified when we launch international shipping."
  },
  {
    question: "Can I cancel or modify my order?",
    answer: "Orders can be cancelled or modified within 2 hours of placement. After this window, the order enters processing and cannot be changed. Contact our support team immediately if you need assistance."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept UPI, all major credit and debit cards, net banking, and popular wallets. All transactions are secured with industry-standard encryption."
  },
  {
    question: "Do you have a loyalty program?",
    answer: "Yes! Our STRIDE Rewards program lets you earn points on every purchase. Points can be redeemed for discounts on future orders. Sign up is free and automatic with your first purchase."
  },
  {
    question: "How do I contact customer support?",
    answer: "You can reach us via email at support@stridestore.com or through our contact page. Our support team is available Monday-Saturday, 9 AM - 6 PM IST."
  }
];

const FAQ = () => {
  return (
    <>
      <Helmet>
        <title>FAQ - Frequently Asked Questions | STRIDE</title>
        <meta
          name="description"
          content="Find answers to common questions about shipping, returns, sizing, and more at STRIDE. Get help with your sneaker shopping experience."
        />
      </Helmet>
      <Layout>
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="font-display text-4xl md:text-6xl tracking-wide mb-4">
                FREQUENTLY <span className="gradient-text">ASKED</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Got questions? We've got answers.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card/50 border border-border rounded-xl px-6 data-[state=open]:bg-card"
                >
                  <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-12 text-center p-8 bg-primary/10 rounded-2xl border border-primary/20">
              <h2 className="font-display text-2xl mb-3">Still have questions?</h2>
              <p className="text-muted-foreground mb-6">
                Our support team is here to help you.
              </p>
              <a
                href="/contact"
                className="btn-primary px-8 py-3 rounded-full inline-block text-primary-foreground font-semibold"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default FAQ;
