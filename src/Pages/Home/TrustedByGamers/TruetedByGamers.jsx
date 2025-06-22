import React from "react";
import { FaShieldAlt, FaLock, FaHandshake } from "react-icons/fa";

const badges = [
    {
        id: 1,
        icon: <FaShieldAlt className="text-gold w-10 h-10" />,
        label: "Anti-Scam Protection",
    },
    {
        id: 2,
        icon: <FaHandshake className="text-crystal w-10 h-10" />,
        label: "Official Partners",
    },
    {
        id: 3,
        icon: <FaLock className="text-royal w-10 h-10" />,
        label: "Secure Payments",
    },
];

const TrustedByGamers = () => {
    return (
        <section className="max-w-6xl mx-auto px-6 py-16 bg-white/10 backdrop-blur-lg rounded-2xl text-white">
            <h2 className="text-4xl font-bold text-gold mb-12 text-center">Trusted By Gamers</h2>
            <div className="flex flex-wrap justify-center gap-16">
                {badges.map(({ id, icon, label }) => (
                    <div
                        key={id}
                        className="flex flex-col items-center gap-4 cursor-default transform transition-transform hover:scale-110"
                    >
                        <div className="p-4 bg-white/20 rounded-full">{icon}</div>
                        <span className="text-lg font-semibold">{label}</span>
                    </div>
                ))}
            </div>

            {/* Partner logos example */}
            <div className="mt-16 flex flex-wrap justify-center items-center gap-12">
                {/* Replace with actual partner logo images */}
                <img
                    src="/partners/logo1.png"
                    alt="Partner 1"
                    className="h-16 object-contain grayscale hover:grayscale-0 transition-all"
                />
                <img
                    src="/partners/logo2.png"
                    alt="Partner 2"
                    className="h-16 object-contain grayscale hover:grayscale-0 transition-all"
                />
                <img
                    src="/partners/logo3.png"
                    alt="Partner 3"
                    className="h-16 object-contain grayscale hover:grayscale-0 transition-all"
                />
            </div>
        </section>
    );
};

export default TrustedByGamers;
