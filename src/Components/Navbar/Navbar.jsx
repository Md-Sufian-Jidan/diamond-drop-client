import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "Home", path: "/" },
    { name: "Top-Up", path: "/topup" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Contact", path: "/contact" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50">
            <div className="backdrop-blur-md bg-white/30 shadow-md">
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="text-xl font-bold text-royal">
                        DiamondDrop
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex space-x-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-text hover:text-royal transition duration-200 font-medium"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-text">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            className="overflow-hidden md:hidden bg-white/60 backdrop-blur-md px-4 pt-2 pb-4 shadow-md"
                        >
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className="block py-2 text-text font-medium hover:text-royal transition"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Navbar;
