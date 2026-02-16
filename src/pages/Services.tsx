import { Cpu, Shield, Settings, Brain, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const servicesData = [
  {
    id: "physical-design",
    icon: Cpu,
    title: "Physical Design",
    subtitle: "From RTL to GDSII",
    description:
      "Our Physical Design team delivers end-to-end solutions across advanced technology nodes (7nm, 5nm, 3nm and below). We work with industry-leading EDA tools and proven methodologies to ensure optimal Power, Performance, and Area (PPA) for your SoC and ASIC designs.",
    capabilities: [
      "Floorplanning & Power Planning",
      "Placement & CTS (Clock Tree Synthesis)",
      "Routing & Optimization",
      "Static Timing Analysis (STA)",
      "Physical Verification (DRC/LVS/ERC)",
      "IR Drop & EM Analysis",
      "ECO Implementation",
      "Multi-voltage & Low Power Design (UPF/CPF)",
    ],
  },
  {
    id: "design-verification",
    icon: Shield,
    title: "Design Verification",
    subtitle: "First-Time-Right Silicon",
    description:
      "Our Verification team employs state-of-the-art methodologies to ensure comprehensive functional and formal verification of complex SoC/ASIC designs. We leverage UVM-based environments, advanced coverage-driven techniques, and emulation platforms.",
    capabilities: [
      "UVM-based Verification Environment Development",
      "Constrained Random Verification",
      "Formal Verification & Equivalence Checking",
      "Assertion-Based Verification (SVA)",
      "Coverage-Driven Verification Closure",
      "System-Level Verification & Emulation",
      "VIP Development & Integration",
      "Low Power Verification (UPF)",
    ],
  },
  {
    id: "dft",
    icon: Settings,
    title: "Design for Testability (DFT)",
    subtitle: "Manufacturing-Ready Designs",
    description:
      "Our DFT experts ensure your designs are manufacturing-test-ready with comprehensive test strategies that maximize fault coverage while minimizing test time and cost. We support all major DFT architectures and methodologies.",
    capabilities: [
      "Scan Insertion & ATPG",
      "Memory BIST (MBIST)",
      "Logic BIST (LBIST)",
      "Boundary Scan (JTAG / IEEE 1149.1)",
      "Compression Techniques (DFTMAX / EDT)",
      "At-Speed Testing (Launch-on-Shift / Launch-on-Capture)",
      "Fault Simulation & Coverage Analysis",
      "DFT Architecture Planning & Optimization",
    ],
  },
  {
    id: "ai-automation",
    icon: Brain,
    title: "AI Automation Services",
    subtitle: "Smarter Design Flows",
    description:
      "We harness the power of Artificial Intelligence and Machine Learning to revolutionize traditional EDA workflows. Our AI-driven solutions optimize design parameters, predict design outcomes, and significantly reduce turnaround time.",
    capabilities: [
      "AI-Powered Design Space Exploration",
      "ML-Based Timing Prediction & Optimization",
      "Automated Floorplan Generation",
      "Smart ECO Guidance",
      "Intelligent Test Pattern Optimization",
      "EDA Flow Automation & Scripting",
      "Predictive Analytics for Design Quality",
      "Custom ML Model Development for EDA",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-3">Our Expertise</p>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
              VLSI Design <span className="text-gradient">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive semiconductor design services powered by experienced engineers and cutting-edge methodologies.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 space-y-24">
          {servicesData.map((service, i) => (
            <AnimatedSection key={service.id} direction={i % 2 === 0 ? "left" : "right"}>
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6">
                    <service.icon size={26} className="text-primary-foreground" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-foreground mb-2">{service.title}</h2>
                  <p className="text-primary font-medium mb-4">{service.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
                <div className="glass rounded-xl p-8">
                  <h3 className="text-sm font-semibold text-primary tracking-wider uppercase mb-6">Key Capabilities</h3>
                  <div className="space-y-3">
                    {service.capabilities.map((cap) => (
                      <div key={cap} className="flex items-start gap-3">
                        <CheckCircle size={18} className="text-primary mt-0.5 shrink-0" />
                        <span className="text-sm text-foreground">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">Need a Custom Solution?</h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Our team can tailor solutions to your specific project requirements and technology node.
            </p>
            <a
              href="mailto:hr@glitchip.in"
              className="inline-block px-8 py-4 rounded-lg bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-all shadow-glow"
            >
              Get in Touch
            </a>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
