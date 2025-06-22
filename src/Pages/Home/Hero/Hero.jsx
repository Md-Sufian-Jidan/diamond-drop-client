import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden text-white px-6">
            {/* 🔮 Animated Particles */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <motion.div
                    className="absolute top-16 left-1/4 w-2 h-2 bg-royal rounded-full blur-md"
                    animate={{ y: [0, 20, 0], opacity: [1, 0.4, 1] }}
                    transition={{ duration: 6, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-10 right-1/3 w-3 h-3 bg-crystal rounded-full blur-md"
                    animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 7, repeat: Infinity }}
                />
                <motion.div
                    className="absolute top-1/2 left-2/3 w-4 h-4 bg-gold rounded-full blur-xl"
                    animate={{ x: [0, 15, -15, 0] }}
                    transition={{ duration: 10, repeat: Infinity }}
                />
            </div>

            {/* 💎 Hero Content */}
            <motion.div
                className="relative z-10 max-w-4xl text-center"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <motion.img
                    src={'/free-fire.png'}
                    alt="Diamond"
                    className="mx-auto w-40 h-40 mb-6 drop-shadow-[0_0_20px_rgba(0,255,255,0.6)]"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: [0.9, 1, 0.95] }}
                    transition={{ duration: 4, repeat: Infinity }}
                />

                <h1 className="text-4xl md:text-6xl font-extrabold text-gold mb-4">
                    Top-Up Free Fire Diamonds Instantly
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-xl mx-auto">
                    Fast. Secure. Trusted by gamers. Power up your game with DiamondDrop.
                </p>

                <Link
                    to="/topup"
                    className="inline-block bg-royal hover:bg-royal-dark text-white px-6 py-3 rounded-xl shadow-xl transition"
                >
                    Get Started
                </Link>
            </motion.div>
        </div>
    );
};

export default Hero;
