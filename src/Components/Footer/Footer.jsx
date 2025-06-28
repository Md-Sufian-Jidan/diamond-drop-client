import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-background backdrop-blur-md text-text border-t border-border">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm font-sans">
                {/* Brand */}
                <div>
                    <h2 className="text-xl font-heading font-bold text-royal mb-3">DiamondDrop</h2>
                    <p className="text-light">
                        Premium Free Fire Diamond Top-Up service. Fast, safe, and reliable.
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <h3 className="font-semibold mb-3 text-heading">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><Link to="/" className="hover:text-royal-dark transition-colors">Home</Link></li>
                        <li><Link to="/top-up" className="hover:text-royal-dark transition-colors">Top-Up</Link></li>
                        <li><Link to="/how-it-works" className="hover:text-royal-dark transition-colors">How It Works</Link></li>
                        <li><Link to="/contact" className="hover:text-royal-dark transition-colors">Contact</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="font-semibold mb-3 text-heading">Contact Us</h3>
                    <ul className="space-y-2 text-light">
                        <li className="flex items-center gap-2"><Mail size={16} /> support@diamonddrop.gg</li>
                        <li className="flex items-center gap-2"><Phone size={16} />+880 1xxxxxxxxxx</li>
                        <li className="flex items-center gap-2"><MapPin size={16} />Dhaka, Bangladesh</li>
                    </ul>
                </div>

                {/* Newsletter / Social */}
                <div>
                    <h3 className="font-semibold mb-3 text-heading">Stay Updated</h3>
                    <p className="text-light">
                        Follow us on social media for the latest offers and drops.
                    </p>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="text-center text-xs text-light border-t border-border py-4">
                © {new Date().getFullYear()} <span className="font-semibold">DiamondDrop</span>. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
