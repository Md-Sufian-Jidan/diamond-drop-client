import { useState } from "react";

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
        <section className="max-w-5xl mx-auto px-6 py-20 bg-transparent text-black">
            <h2 className="text-4xl font-bold text-gold mb-10 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
                {faqs.map(({ question, answer }, i) => (
                    <div
                        key={i}
                        className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 cursor-pointer"
                        onClick={() => toggle(i)}
                    >
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-semibold">{question}</h3>
                            <span className="text-2xl select-none">{openIndex === i ? "−" : "+"}</span>
                        </div>
                        {openIndex === i && (
                            <p className="mt-4 text-gray-300 text-sm leading-relaxed">{answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Faq;
