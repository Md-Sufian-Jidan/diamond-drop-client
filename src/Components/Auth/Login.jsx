import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // Simulate login and navigate to dashboard or home
        navigate("/");
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen flex items-center justify-center bg-background px-4"
        >
            <div className="bg-card rounded-2xl shadow-soft p-8 w-full max-w-md border border-border">
                <h2 className="text-2xl font-heading text-heading mb-6 text-center">Login to Your Account</h2>

                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-text">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            className={`w-full px-4 py-2 rounded-md border ${errors.email ? "border-red-500" : "border-border"
                                } focus:outline-none focus:ring-2 focus:ring-royal`}
                            placeholder="you@example.com"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^\S+@\S+\.\S+$/,
                                    message: "Invalid email address",
                                },
                            })}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-text">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            className={`w-full px-4 py-2 rounded-md border ${errors.password ? "border-red-500" : "border-border"
                                } focus:outline-none focus:ring-2 focus:ring-royal`}
                            placeholder="••••••••"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters",
                                },
                            })}
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gold text-black font-semibold py-2 rounded-xl hover:bg-gold-light transition-colors disabled:opacity-50"
                    >
                        {isSubmitting ? "Logging in..." : "Login"}
                    </button>
                </form>

                <p className="mt-6 text-sm text-center text-text">
                    Don't have an account?
                    <Link to="/register" className="text-royal ml-1 hover:underline">
                        Register here
                    </Link>
                </p>
            </div>
        </motion.section>
    );
}

export default Login;