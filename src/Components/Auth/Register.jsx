import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log("Registering with:", data);
        // Simulate a delay for UI purposes
        setTimeout(() => {
            navigate("/login");
        }, 1000);
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="min-h-screen flex items-center justify-center bg-background px-4"
        >
            <div className="bg-card shadow-soft rounded-2xl p-8 max-w-md w-full">
                <h2 className="text-2xl font-bold text-royal mb-6 text-center">
                    Create an Account
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <div className="mb-4">
                        <label htmlFor="name" className="block font-medium text-text mb-1">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            {...register("name", { required: "Name is required" })}
                            className={`w-full px-4 py-2 rounded-md border ${errors.name ? "border-red-500" : "border-border"
                                } text-text`}
                            placeholder="John Doe"
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block font-medium text-text mb-1">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Invalid email format",
                                },
                            })}
                            className={`w-full px-4 py-2 rounded-md border ${errors.email ? "border-red-500" : "border-border"
                                } text-text`}
                            placeholder="you@example.com"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block font-medium text-text mb-1">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters",
                                },
                            })}
                            className={`w-full px-4 py-2 rounded-md border ${errors.password ? "border-red-500" : "border-border"
                                } text-text`}
                            placeholder="••••••"
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gold text-black font-semibold py-2.5 rounded-xl hover:bg-yellow-400 transition-colors disabled:opacity-60"
                    >
                        {isSubmitting ? "Registering..." : "Register"}
                    </button>
                </form>

                <p className="mt-4 text-center text-sm text-text">
                    Already have an account?{" "}
                    <button
                        onClick={() => navigate("/login")}
                        className="text-royal font-medium hover:underline"
                    >
                        Login
                    </button>
                </p>
            </div>
        </motion.section>
    );
};

export default Register;
