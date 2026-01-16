import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo-energique.svg";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <img 
              src={logo} 
              alt="Energique" 
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="text-primary-foreground/80 leading-relaxed">
              Powering a sustainable future through innovative solar, wind, and battery storage solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-70 transition-opacity" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:opacity-70 transition-opacity">About Us</Link></li>
              <li><Link to="/services" className="hover:opacity-70 transition-opacity">Our Services</Link></li>
              <li><Link to="/projects" className="hover:opacity-70 transition-opacity">Projects</Link></li>
              <li><Link to="/news" className="hover:opacity-70 transition-opacity">News & Insights</Link></li>
              <li><Link to="/contact" className="hover:opacity-70 transition-opacity">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services/solar" className="hover:opacity-70 transition-opacity">Solar Energy</Link></li>
              <li><Link to="/services/wind" className="hover:opacity-70 transition-opacity">Wind Power</Link></li>
              <li><Link to="/services/storage" className="hover:opacity-70 transition-opacity">Battery Storage</Link></li>
              <li><Link to="/quote" className="hover:opacity-70 transition-opacity">Get a Quote</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>123 Renewable Way<br />Green City, EC 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:opacity-70 transition-opacity">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:info@energique.com" className="hover:opacity-70 transition-opacity">
                  info@energique.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
          <p>© 2024 Energique. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
