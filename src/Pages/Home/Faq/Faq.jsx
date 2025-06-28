import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "How long does delivery take?",
        answer: "Delivery is usually instant or within a few minutes after payment confirmation.",
    },
    {
        question: "Is UID enough to receive diamonds?",
        answer:
            "Yes! Providing the correct Free Fire UID is essential to receive your diamonds without issues.",
    },
    {
        question: "How do I contact support?",
        answer:
            "You can contact our 24/7 support via the chat widget on our site or email support@diamonddrop.com.",
    },
];

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="px-6 py-10 bg-background text-text">
            <h2 className="text-4xl font-bold text-gold mb-10 text-center font-heading">
                Frequently Asked Questions
            </h2>
            <div className="space-y-6 max-w-4xl mx-auto">
                {faqs.map(({ question, answer }, i) => (
                    <div
                        key={i}
                        role="button"
                        tabIndex={0}
                        onClick={() => toggle(i)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                                e.preventDefault();
                                toggle(i);
                            }
                        }}
                        className="bg-card bg-opacity-20 backdrop-blur-xl border border-border rounded-2xl p-6 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold"
                        aria-expanded={openIndex === i}
                        aria-controls={`faq-panel-${i}`}
                        aria-labelledby={`faq-header-${i}`}
                    >
                        <div className="flex justify-between items-center">
                            <h3
                                id={`faq-header-${i}`}
                                className="text-lg font-semibold text-text"
                            >
                                {question}
                            </h3>
                            <span
                                className="text-2xl select-none text-gold"
                                aria-hidden="true"
                            >
                                {openIndex === i ? "−" : "+"}
                            </span>
                        </div>

                        <AnimatePresence initial={false}>
                            {openIndex === i && (
                                <motion.p
                                    id={`faq-panel-${i}`}
                                    className="mt-4 text-crystal text-sm leading-relaxed"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {answer}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Faq;
