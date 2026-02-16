import { Rocket } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import circuitPattern from "@/assets/circuit-pattern.jpg";

const Products = () => {
  return (
    <Layout>
      <section className="min-h-[80vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={circuitPattern} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-8 animate-pulse-glow">
              <Rocket size={36} className="text-primary-foreground" />
            </div>
            <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-3">Coming Soon</p>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
              Our Products
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We're building innovative products that will redefine semiconductor design automation. Stay tuned for exciting announcements.
            </p>
            <div className="glass rounded-xl p-8 max-w-md mx-auto">
              <p className="text-sm text-muted-foreground mb-4">Be the first to know when we launch.</p>
              <a
                href="mailto:hr@glitchip.in"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all shadow-glow"
              >
                Notify Me
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
