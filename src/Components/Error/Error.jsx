import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Error = () => {
    return (
        <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center overflow-hidden px-6 text-center text-white">
            {/* Background particles */}
            <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
                <motion.div
                    className="absolute top-10 left-1/4 w-2 h-2 bg-royal rounded-full blur-md"
                    animate={{ y: [0, 20, 0], opacity: [1, 0.4, 1] }}
                    transition={{ duration: 6, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-10 right-1/3 w-3 h-3 bg-crystal rounded-full blur-md"
                    animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 7, repeat: Infinity }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 w-4 h-4 bg-gold rounded-full blur-xl"
                    animate={{ x: [0, 15, -15, 0] }}
                    transition={{ duration: 10, repeat: Infinity }}
                />
            </div>

            {/* Content */}
            <motion.div
                className="relative z-10 flex flex-col items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                {/* Diamond Illustration */}
                <motion.img
                    src={'/public/free-fire.png'}
                    alt="Diamond Illustration"
                    className="w-48 h-48 object-contain mb-6 drop-shadow-[0_0_20px_rgba(0,255,255,0.6)]"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                />

                {/* Headings */}
                <h1 className="text-6xl font-extrabold text-gold mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-white mb-2">
                    Page Not Found
                </h2>
                <p className="text-gray-300 max-w-md mb-6">
                    It looks like this page vanished into the battleground. Let's get you back.
                </p>

                {/* CTA Button */}
                <Link
                    to="/"
                    className="bg-royal hover:bg-royal-dark text-white px-6 py-3 rounded-xl shadow-gold transition font-medium"
                >
                    Return to Home
                </Link>
            </motion.div>
        </div>
    );
};

export default Error;
