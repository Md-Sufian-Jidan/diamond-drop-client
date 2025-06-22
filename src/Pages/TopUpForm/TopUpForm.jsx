import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const diamondPackages = [
    { label: "100 Diamonds", value: "100" },
    { label: "310 Diamonds", value: "310" },
    { label: "520 Diamonds", value: "520" },
    { label: "1060 Diamonds", value: "1060" },
];

const paymentMethods = [
    { label: "Paytm", value: "paytm" },
    { label: "Google Pay", value: "gpay" },
    { label: "PhonePe", value: "phonepe" },
];

const TopUpForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Top-Up Submitted:", data);
        alert("Top-Up request submitted successfully!");
        reset();
    };

    return (
        <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
            <motion.form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-lg bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20 space-y-6 text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-bold text-gold text-center">
                    Top-Up Your Free Fire Diamonds
                </h2>

                {/* Free Fire UID */}
                <div>
                    <label className="block mb-1 font-medium">Free Fire UID</label>
                    <input
                        type="text"
                        placeholder="Enter your UID"
                        {...register("uid", {
                            required: "UID is required",
                            pattern: {
                                value: /^[0-9]{6,20}$/,
                                message: "Enter a valid UID",
                            },
                        })}
                        className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/20 focus:outline-none focus:ring-2 focus:ring-royal"
                    />
                    {errors.uid && (
                        <p className="text-red-400 text-sm mt-1">{errors.uid.message}</p>
                    )}
                </div>

                {/* Diamond Package */}
                <div>
                    <label className="block mb-1 font-medium">Select Diamond Package</label>
                    <select
                        {...register("diamonds", { required: "Select a diamond package" })}
                        className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-royal"
                    >
                        <option value="">Choose...</option>
                        {diamondPackages.map((pkg) => (
                            <option key={pkg.value} value={pkg.value}>
                                {pkg.label}
                            </option>
                        ))}
                    </select>
                    {errors.diamonds && (
                        <p className="text-red-400 text-sm mt-1">{errors.diamonds.message}</p>
                    )}
                </div>

                {/* Payment Method */}
                <div>
                    <label className="block mb-2 font-medium">Payment Method</label>
                    <div className="space-y-2">
                        {paymentMethods.map((method) => (
                            <label
                                key={method.value}
                                className="flex items-center gap-2 p-3 rounded-xl bg-black/20 hover:bg-black/30 cursor-pointer transition"
                            >
                                <input
                                    type="radio"
                                    value={method.value}
                                    {...register("payment", { required: "Choose a payment method" })}
                                />
                                {method.label}
                            </label>
                        ))}
                    </div>
                    {errors.payment && (
                        <p className="text-red-400 text-sm mt-1">{errors.payment.message}</p>
                    )}
                </div>

                {/* Submit Button */}
                <motion.button
                    type="submit"
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-royal hover:bg-royal-dark text-white py-3 rounded-xl font-semibold transition shadow-lg"
                >
                    Confirm Top-Up
                </motion.button>
            </motion.form>
        </div>
    );
};

export default TopUpForm;
