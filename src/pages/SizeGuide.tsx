import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Ruler } from "lucide-react";

const mensSizes = [
  { us: 6, uk: 5.5, eu: 38.5, cm: 24 },
  { us: 7, uk: 6, eu: 40, cm: 25 },
  { us: 8, uk: 7, eu: 41, cm: 26 },
  { us: 9, uk: 8, eu: 42.5, cm: 27 },
  { us: 10, uk: 9, eu: 44, cm: 28 },
  { us: 11, uk: 10, eu: 45, cm: 29 },
  { us: 12, uk: 11, eu: 46, cm: 30 },
];

const womensSizes = [
  { us: 5, uk: 2.5, eu: 35.5, cm: 22 },
  { us: 6, uk: 3.5, eu: 36.5, cm: 23 },
  { us: 7, uk: 4.5, eu: 38, cm: 24 },
  { us: 8, uk: 5.5, eu: 39, cm: 25 },
  { us: 9, uk: 6.5, eu: 40.5, cm: 26 },
  { us: 10, uk: 7.5, eu: 42, cm: 27 },
];

const SizeGuide = () => {
  return (
    <>
      <Helmet>
        <title>Size Guide - Find Your Perfect Fit | STRIDE</title>
        <meta
          name="description"
          content="Find your perfect shoe size with STRIDE's comprehensive size guide. Convert between US, UK, EU sizes. Tips for measuring your feet accurately."
        />
      </Helmet>
      <Layout>
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="font-display text-4xl md:text-6xl tracking-wide mb-4">
                SIZE <span className="gradient-text">GUIDE</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Find your perfect fit with our comprehensive sizing chart
              </p>
            </div>

            {/* How to Measure */}
            <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 mb-12">
              <div className="flex items-start gap-4">
                <Ruler className="w-10 h-10 text-primary flex-shrink-0" />
                <div>
                  <h2 className="font-display text-xl mb-3">How to Measure Your Feet</h2>
                  <ol className="space-y-2 text-muted-foreground">
                    <li>1. Stand on a piece of paper with your heel against a wall</li>
                    <li>2. Mark the longest point of your foot on the paper</li>
                    <li>3. Measure the distance from the wall to the mark in centimeters</li>
                    <li>4. Use the measurement to find your size in the charts below</li>
                    <li>5. Measure in the evening when feet are at their largest</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Men's Size Chart */}
            <div className="mb-12">
              <h2 className="font-display text-2xl mb-6">Men's Sizes</h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-card/50 border border-border rounded-xl overflow-hidden">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">US</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">UK</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">EU</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">CM</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mensSizes.map((size, index) => (
                      <tr
                        key={index}
                        className="border-t border-border hover:bg-muted/30 transition-colors"
                      >
                        <td className="px-6 py-4 text-muted-foreground">{size.us}</td>
                        <td className="px-6 py-4 text-muted-foreground">{size.uk}</td>
                        <td className="px-6 py-4 text-muted-foreground">{size.eu}</td>
                        <td className="px-6 py-4 text-muted-foreground">{size.cm}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Women's Size Chart */}
            <div className="mb-12">
              <h2 className="font-display text-2xl mb-6">Women's Sizes</h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-card/50 border border-border rounded-xl overflow-hidden">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">US</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">UK</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">EU</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">CM</th>
                    </tr>
                  </thead>
                  <tbody>
                    {womensSizes.map((size, index) => (
                      <tr
                        key={index}
                        className="border-t border-border hover:bg-muted/30 transition-colors"
                      >
                        <td className="px-6 py-4 text-muted-foreground">{size.us}</td>
                        <td className="px-6 py-4 text-muted-foreground">{size.uk}</td>
                        <td className="px-6 py-4 text-muted-foreground">{size.eu}</td>
                        <td className="px-6 py-4 text-muted-foreground">{size.cm}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-card/50 border border-border rounded-xl p-6">
              <h3 className="font-display text-xl mb-4">Sizing Tips</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• If you're between sizes, we recommend going up half a size</li>
                <li>• Athletic shoes often fit slightly smaller - consider sizing up</li>
                <li>• Width varies by brand - check product descriptions for fit notes</li>
                <li>• Break-in period: Leather shoes may stretch slightly with wear</li>
                <li>• Still unsure? Our customer service team is happy to help!</li>
              </ul>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default SizeGuide;
