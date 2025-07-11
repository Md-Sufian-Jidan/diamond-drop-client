import { motion } from "framer-motion";
import { UserCircle, PackageSearch, CreditCard, CheckCircle } from "lucide-react";

const steps = [
    {
        icon: <UserCircle className="h-10 w-10 text-royal" />,
        title: "Enter Your Free Fire UID",
        desc: "Provide your player UID so we can send diamonds to the right account.",
    },
    {
        icon: <PackageSearch className="h-10 w-10 text-gold" />,
        title: "Select a Diamond Package",
        desc: "Choose the best package for your needs from our popular options.",
    },
    {
        icon: <CreditCard className="h-10 w-10 text-cyan-400" />,
        title: "Choose Payment Method",
        desc: "Pay securely using QR, UPI, or your preferred local option.",
    },
    {
        icon: <CheckCircle className="h-10 w-10 text-green-400" />,
        title: "Get Your Diamonds!",
        desc: "Sit back and relax—your diamonds will be delivered instantly.",
    },
];

const HowItWorks = () => {
    return (
        <section className="py-10 px-6 bg-background text-text">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-heading font-bold text-gold DEFAULT mb-4">
                    How It Works
                </h2>
                <p className="text-crystal mb-12">
                    It's simple, fast, and secure to top-up your Free Fire diamonds with DiamondDrop.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-card bg-opacity-20 border border-border backdrop-blur-xl rounded-2xl p-6 text-left shadow-soft hover:scale-105 transition-transform duration-300"
                        >
                            <div className="mb-4 text-royal DEFAULT text-4xl">{step.icon}</div>
                            <h3 className="text-xl font-semibold text-text mb-2">{step.title}</h3>
                            <p className="text-crystal text-sm">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
