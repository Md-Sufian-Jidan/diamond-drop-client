import { useState } from "react";

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

// Optional simple Lightbox modal
function Lightbox({ image, onClose }) {
    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 cursor-pointer"
            onClick={onClose}
        >
            <img
                src={image}
                alt="Proof enlarged"
                className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
            />
        </div>
    );
}

const ProofGallery = () => {
    const [selected, setSelected] = useState(null);

    return (
        <section className="py-20 px-4 bg-transparent text-white max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gold mb-4 text-center">Proof of Successful Top-Ups</h2>
            <p className="text-gray-300 mb-12 text-center">
                Real screenshots showing our verified deliveries and payments.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {proofItems.map(({ id, title, description, imageUrl }) => (
                    <div
                        key={id}
                        className="relative cursor-pointer rounded-2xl overflow-hidden bg-white/10 border border-white/20 backdrop-blur-lg shadow-md hover:scale-105 transition-transform duration-300"
                        onClick={() => setSelected(imageUrl)}
                    >
                        <img
                            src={imageUrl}
                            alt={title}
                            className="w-full h-64 object-cover filter blur-sm"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4">
                            <h3 className="text-white font-semibold text-lg">{title}</h3>
                            <p className="text-gray-300 text-sm">{description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {selected && <Lightbox image={selected} onClose={() => setSelected(null)} />}
        </section>
    );
};

export default ProofGallery;
