import { motion } from "framer-motion";
import { ShieldCheck, Zap, Star, Headset } from "lucide-react";

const features = [
    {
        icon: <Zap className="h-8 w-8 text-royal" />,
        title: "Instant Delivery",
        desc: "Top-up diamonds instantly to your Free Fire account.",
    },
    {
        icon: <ShieldCheck className="h-8 w-8 text-gold" />,
        title: "Safe & Secure",
        desc: "Your UID and transactions are encrypted and protected.",
    },
    {
        icon: <Star className="h-8 w-8 text-yellow-400" />,
        title: "Verified by Gamers",
        desc: "Trusted by thousands of Free Fire players across the world.",
    },
    {
        icon: <Headset className="h-8 w-8 text-cyan-400" />,
        title: "24/7 Support",
        desc: "We're always available to help with your orders and issues.",
    },
];

const WhyChooseUs = () => {
    return (
        <section className="py-10 px-6 bg-background text-text">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-heading font-bold text-gold DEFAULT mb-4">
                    Why Choose DiamondDrop?
                </h2>
                <p className="text-crystal mb-12">
                    Trusted by gamers. Built for speed, safety, and satisfaction.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-card bg-opacity-20 backdrop-blur-xl border border-border p-6 rounded-2xl shadow-soft hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center"
                        >
                            <div className="flex items-center justify-center mb-4 text-royal DEFAULT text-4xl">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-text mb-2">{feature.title}</h3>
                            <p className="text-crystal text-sm">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
