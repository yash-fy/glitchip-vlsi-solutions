import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Glitchip" className="h-10 w-10 object-contain" />
              <div>
                <p className="font-display font-bold text-foreground">Glitchip Technologies</p>
                <p className="text-xs text-muted-foreground">Pvt. Ltd.</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Delivering world-class VLSI design services and semiconductor solutions to global clients.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { to: "/", label: "Home" },
                { to: "/services", label: "Services" },
                { to: "/products", label: "Products" },
                { to: "/careers", label: "Careers" },
                { to: "/about", label: "About Us" },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Services</h4>
            <div className="space-y-2">
              {["Physical Design", "Design Verification", "DFT", "AI Automation"].map((s) => (
                <Link key={s} to="/services" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  {s}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="mailto:hr@glitchip.in" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail size={16} className="text-primary" /> hr@glitchip.in
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone size={16} className="text-primary" /> xxxxxxxxxx
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={16} className="text-primary" /> Bengaluru, India
              </div>
            </div>
          </div>
        </div>

        <div className="circuit-line mt-12 mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Glitchip Technologies Pvt. Ltd. All rights reserved.</p>
          <p>Designed & Engineered for Innovation</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
