import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Cpu, Shield, Settings, Brain, ArrowRight, Users, Globe, Zap, Award } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import heroBg from "@/assets/hero-bg.jpg";
import circuitPattern from "@/assets/circuit-pattern.jpg";

const services = [
  {
    icon: Cpu,
    title: "Physical Design",
    desc: "End-to-end physical design services from floorplanning to signoff, ensuring optimal PPA across advanced technology nodes.",
  },
  {
    icon: Shield,
    title: "Design Verification",
    desc: "Comprehensive verification methodologies using UVM, formal verification, and emulation for first-time-right silicon.",
  },
  {
    icon: Settings,
    title: "DFT",
    desc: "Design for Testability solutions including scan insertion, ATPG, BIST, and boundary scan for robust manufacturing test coverage.",
  },
  {
    icon: Brain,
    title: "AI Automation",
    desc: "Leveraging AI/ML to automate EDA flows, optimize design parameters, and accelerate time-to-market.",
  },
];

const stats = [
  { value: "50+", label: "Engineers", icon: Users },
  { value: "Global", label: "Reach", icon: Globe },
  { value: "99%", label: "Silicon Success", icon: Zap },
  { value: "10+", label: "Years Experience", icon: Award },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              VLSI Design & Semiconductor Solutions
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight mb-6">
              Engineering the{" "}
              <span className="text-gradient">Future of Silicon</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
              Glitchip Technologies delivers world-class VLSI design services — from physical design to AI-powered automation — enabling semiconductor companies to achieve first-time-right silicon.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-primary text-primary-foreground font-semibold transition-all hover:opacity-90 shadow-glow"
              >
                Explore Services <ArrowRight size={18} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg glass text-foreground font-semibold transition-all hover:bg-secondary"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1} className="text-center">
                <stat.icon className="mx-auto mb-3 text-primary" size={28} />
                <p className="text-3xl font-display font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-3">What We Do</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">Our Core Services</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.1}>
                <div className="group p-6 rounded-xl glass hover:shadow-glow transition-all duration-500 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-5">
                    <s.icon size={22} className="text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
                  <Link to="/services" className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-4 hover:gap-2 transition-all">
                    Learn more <ArrowRight size={14} />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={circuitPattern} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Ready to Build the Next Generation of Chips?
            </h2>
            <p className="text-muted-foreground mb-8">
              Partner with Glitchip Technologies for reliable, high-quality VLSI design services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:hr@glitchip.in"
                className="px-8 py-4 rounded-lg bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-all shadow-glow"
              >
                Contact Us
              </a>
              <Link
                to="/careers"
                className="px-8 py-4 rounded-lg glass text-foreground font-semibold hover:bg-secondary transition-all"
              >
                View Careers
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
