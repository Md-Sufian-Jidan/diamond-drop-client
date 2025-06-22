import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-white/30 backdrop-blur-md text-text border-t border-border mt-10">
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
                {/* Brand */}
                <div>
                    <h2 className="text-xl font-bold text-royal mb-2">DiamondDrop</h2>
                    <p className="text-gray-600">
                        Premium Free Fire Diamond Top-Up service. Fast, safe, and reliable.
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <h3 className="font-semibold mb-2">Quick Links</h3>
                    <ul className="space-y-1">
                        <li><Link to="/" className="hover:text-royal">Home</Link></li>
                        <li><Link to="/topup" className="hover:text-royal">Top-Up</Link></li>
                        <li><Link to="/how-it-works" className="hover:text-royal">How It Works</Link></li>
                        <li><Link to="/contact" className="hover:text-royal">Contact</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="font-semibold mb-2">Contact Us</h3>
                    <ul className="space-y-1 text-gray-600">
                        <li className="flex items-center gap-2"><Mail size={16} /> support@diamonddrop.gg</li>
                        <li className="flex items-center gap-2"><Phone size={16} /> +91 98765 43210</li>
                        <li className="flex items-center gap-2"><MapPin size={16} /> New Delhi, India</li>
                    </ul>
                </div>

                {/* Newsletter / Note */}
                <div>
                    <h3 className="font-semibold mb-2">Stay Updated</h3>
                    <p className="text-gray-600">Follow us on social media for the latest offers and drops.</p>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="text-center text-xs text-gray-500 border-b border-border py-4">
                © {new Date().getFullYear()} DiamondDrop. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
