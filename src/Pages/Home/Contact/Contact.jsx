import { useForm } from "react-hook-form";
import { FaWhatsapp, FaTelegramPlane, FaEnvelope } from "react-icons/fa";

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                alert("Query submitted successfully!");
                reset();
                resolve();
            }, 1500);
        });
    };

    return (
        <section className="px-6 py-10 bg-background text-text">
            <h2 className="text-4xl font-bold text-gold mb-8 text-center font-heading">Contact Us</h2>
            <div className="flex flex-col md:flex-row gap-10 md:gap-20 max-w-4xl mx-auto">
                {/* Contact Links */}
                <div className="flex flex-col gap-6 md:w-1/3 text-center md:text-left">
                    <h3 className="text-2xl font-semibold mb-4 text-text font-heading">Reach Us Directly</h3>

                    <a
                        href="https://wa.me/1234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-card bg-opacity-20 backdrop-blur-xl p-4 rounded-xl hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400"
                    >
                        <FaWhatsapp className="text-green-400 w-6 h-6" />
                        <span>WhatsApp</span>
                    </a>

                    <a
                        href="https://t.me/yourtelegramhandle"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-card bg-opacity-20 backdrop-blur-xl p-4 rounded-xl hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <FaTelegramPlane className="text-blue-400 w-6 h-6" />
                        <span>Telegram</span>
                    </a>

                    <a
                        href="mailto:support@diamonddrop.com"
                        className="flex items-center gap-3 bg-card bg-opacity-20 backdrop-blur-xl p-4 rounded-xl hover:bg-yellow-500 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    >
                        <FaEnvelope className="text-yellow-400 w-6 h-6" />
                        <span>Email Us</span>
                    </a>
                </div>

                {/* Quick Query Form */}
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="md:w-2/3 bg-card bg-opacity-20 backdrop-blur-xl border border-border rounded-2xl p-8 shadow-soft"
                    noValidate
                >
                    <h3 className="text-2xl font-semibold mb-6 text-center md:text-left text-text font-heading">
                        Quick Query
                    </h3>

                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-1 font-medium text-text">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Your Name"
                            className={`w-full rounded-md px-4 py-2 text-text bg-card bg-opacity-30 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold transition ${errors.name ? "border-red-500 border-2" : "border border-border"
                                }`}
                            {...register("name", { required: "Name is required" })}
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-1 font-medium text-text">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="your.email@example.com"
                            className={`w-full rounded-md px-4 py-2 text-text bg-card bg-opacity-30 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold transition ${errors.email ? "border-red-500 border-2" : "border border-border"
                                }`}
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Invalid email address",
                                },
                            })}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="message" className="block mb-1 font-medium text-text">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows="4"
                            placeholder="Your message..."
                            className={`w-full rounded-md px-4 py-2 text-text bg-card bg-opacity-30 placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-gold transition ${errors.message ? "border-red-500 border-2" : "border border-border"
                                }`}
                            {...register("message", { required: "Message is required" })}
                        ></textarea>
                        {errors.message && (
                            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gold text-black font-semibold py-3 rounded-xl hover:bg-yellow-400 transition-colors disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    >
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </button>

                    {isSubmitSuccessful && (
                        <p className="mt-4 text-green-400 font-semibold text-center">
                            Thank you! We will get back to you shortly.
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
};

export default Contact;
