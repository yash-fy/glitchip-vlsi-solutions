import { Target, Eye, Heart, Headphones, Mail, Phone, MapPin } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import aboutBg from "@/assets/about-bg.jpg";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "To deliver high-quality, reliable VLSI design services that empower semiconductor companies to bring innovative products to market faster and with greater confidence.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    desc: "To be a globally recognized leader in semiconductor design services, driving innovation through engineering excellence and AI-powered automation.",
  },
  {
    icon: Heart,
    title: "Culture & Values",
    desc: "We foster a culture of collaboration, continuous learning, and technical excellence. Our engineers thrive in an environment that encourages innovation, integrity, and mutual respect.",
  },
  {
    icon: Headphones,
    title: "Technical Excellence",
    desc: "Our team of experienced engineers brings deep domain expertise across VLSI design disciplines, using industry-leading tools and proven methodologies for first-time-right silicon success.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={aboutBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <AnimatedSection className="max-w-3xl">
            <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-3">About Us</p>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
              Glitchip <span className="text-gradient">Technologies</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Glitchip Technologies Pvt. Ltd. is a Bengaluru-based VLSI design services company founded by industry veterans with deep expertise in semiconductor design, verification, and automation. We partner with global semiconductor and systems companies to deliver high-quality silicon solutions across advanced technology nodes.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">Who We Are</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  At Glitchip Technologies, we combine deep semiconductor domain knowledge with modern engineering practices to deliver exceptional VLSI design services. Our team of skilled engineers brings decades of collective experience across physical design, verification, DFT, and AI-driven automation.
                </p>
                <p>
                  We work with clients ranging from fabless semiconductor companies to systems integrators, providing flexible engagement models — from dedicated project teams to individual engineering resource augmentation.
                </p>
                <p>
                  Headquartered in Bengaluru, India's silicon hub, we leverage the rich talent pool and vibrant semiconductor ecosystem to build a world-class engineering organization.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "50+", label: "Engineers" },
                  { value: "Global", label: "Client Base" },
                  { value: "5nm", label: "Advanced Nodes" },
                  { value: "99%", label: "Silicon Success" },
                ].map((stat) => (
                  <div key={stat.label} className="glass rounded-xl p-6 text-center">
                    <p className="text-2xl font-display font-bold text-gradient">{stat.value}</p>
                    <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission/Vision/Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">What Drives Us</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div className="glass rounded-xl p-8 h-full hover:shadow-glow transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-5">
                    <v.icon size={22} className="text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-3">{v.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground">Get in Touch</h2>
            <p className="text-muted-foreground mt-2">We'd love to hear from you.</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Mail, label: "Email", value: "hr@glitchip.in", href: "mailto:hr@glitchip.in" },
              { icon: Phone, label: "Phone", value: "xxxxxxxxxx", href: "tel:xxxxxxxxxx" },
              { icon: MapPin, label: "Location", value: "Bengaluru, India", href: "#" },
            ].map((item, i) => (
              <AnimatedSection key={item.label} delay={i * 0.1}>
                <a href={item.href} className="glass rounded-xl p-6 text-center block hover:shadow-glow transition-all duration-300">
                  <item.icon className="mx-auto mb-3 text-primary" size={24} />
                  <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                  <p className="text-foreground font-medium text-sm">{item.value}</p>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
