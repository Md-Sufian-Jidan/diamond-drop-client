import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "Home", path: "/" },
    { name: "Top-Up", path: "/top-up" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Contact", path: "/contact" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50">
            <div className="bg-card/30 backdrop-blur-md shadow-soft">
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="text-2xl font-heading font-bold text-royal hover:text-royal-dark transition-colors"
                    >
                        DiamondDrop
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex space-x-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-text font-medium hover:text-royal-dark transition-colors duration-200"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to={'/login'}>Login</Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-text hover:text-royal-dark transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </nav>

                {/* Mobile Dropdown */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden md:hidden bg-card/70 backdrop-blur-md px-4 pt-2 pb-4 shadow-soft"
                        >
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className="block py-2 text-text font-medium hover:text-royal-dark transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link to={'/login'}>Login</Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>

    );
};

export default Navbar;
