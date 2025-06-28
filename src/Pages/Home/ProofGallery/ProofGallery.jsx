import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const proofItems = [
    {
        id: 1,
        title: "Before & After Diamond Count",
        description: "UID blurred for privacy",
        imageUrl: "/screenshots/diamond_before_after.png",
    },
    {
        id: 2,
        title: "QR Payment Receipt",
        description: "Sample successful payment",
        imageUrl: "/screenshots/qr_payment_receipt.png",
    },
    {
        id: 3,
        title: "UID Screenshot",
        description: "Blurred UID, delivered diamonds",
        imageUrl: "/screenshots/uid_blurred.png",
    },
    // Add more as needed
];

function Lightbox({ image, onClose }) {
    return (
        <AnimatePresence>
            {image && (
                <>
                    {/* Overlay */}
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-80 z-50 cursor-pointer"
                        onClick={onClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.8 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    />

                    {/* Image container */}
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="relative max-w-4xl max-h-full rounded-2xl overflow-hidden shadow-soft bg-card bg-opacity-90">
                            {/* Close button */}
                            <button
                                onClick={onClose}
                                className="absolute top-3 right-3 text-gold hover:text-royal-dark text-3xl font-bold z-50 focus:outline-none focus:ring-2 focus:ring-gold rounded"
                                aria-label="Close lightbox"
                            >
                                &times;
                            </button>

                            {/* Image */}
                            <img
                                src={image}
                                alt="Proof screenshot"
                                className="max-w-full max-h-[80vh] object-contain rounded-2xl"
                                loading="lazy"
                            />
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

const ProofGallery = () => {
    const [selected, setSelected] = useState(null);

    return (
        <section className="py-10 px-6 bg-background text-text">
            <h2 className="text-4xl font-heading font-bold text-gold mb-4 text-center">
                Proof of Successful Top-Ups
            </h2>
            <p className="text-crystal mb-12 text-center">
                Real screenshots showing our verified deliveries and payments.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {proofItems.map(({ id, title, description, imageUrl }) => (
                    <div
                        key={id}
                        role="button"
                        tabIndex={0}
                        onClick={() => setSelected(imageUrl)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") setSelected(imageUrl);
                        }}
                        className="relative cursor-pointer rounded-2xl overflow-hidden bg-card bg-opacity-20 border border-border backdrop-blur-xl shadow-soft hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-gold"
                    >
                        <img
                            src={imageUrl}
                            alt={title}
                            className="w-full h-64 object-cover filter blur-sm"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4">
                            <h3 className="text-gold font-semibold text-lg">{title}</h3>
                            <p className="text-crystal text-sm">{description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {selected && <Lightbox image={selected} onClose={() => setSelected(null)} />}
        </section>
    );
};

export default ProofGallery;
