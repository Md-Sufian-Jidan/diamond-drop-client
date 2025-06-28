import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const packages = [
  {
    id: 1,
    diamonds: 100,
    price: "₹80",
    originalPrice: "₹99",
    bestSeller: false,
  },
  {
    id: 2,
    diamonds: 310,
    price: "₹240",
    originalPrice: "₹280",
    bestSeller: true,
  },
  {
    id: 3,
    diamonds: 520,
    price: "₹400",
    originalPrice: "₹450",
    bestSeller: false,
  },
  {
    id: 4,
    diamonds: 1060,
    price: "₹780",
    originalPrice: "₹899",
    bestSeller: false,
  },
];

const DiamondPackages = () => {
  const navigate = useNavigate();

  return (
    <section className="py-10 px-6 bg-background text-text">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-heading font-bold mb-4 text-gold DEFAULT">
          Popular Diamond Packages
        </h2>
        <p className="text-crystal dark:text-crystal-dark mb-12">
          Choose from our most popular and affordable top-up options.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative rounded-2xl p-6 bg-card bg-opacity-20 backdrop-blur-xl shadow-soft border border-border hover:scale-105 transition-transform duration-300 flex flex-col"
            >
              {pkg.bestSeller && (
                <div className="absolute -top-3 -right-3 bg-gold DEFAULT text-black text-xs font-bold px-3 py-1 rounded-full shadow-gold">
                  Best Seller
                </div>
              )}

              <h3 className="text-2xl font-heading font-bold mb-2">{pkg.diamonds} Diamonds</h3>

              <div className="mb-4">
                <span className="text-royal DEFAULT text-xl font-semibold">{pkg.price}</span>{" "}
                {pkg.originalPrice && (
                  <span className="text-crystal light:text-crystal-dark line-through ml-2">
                    {pkg.originalPrice}
                  </span>
                )}
              </div>

              <button
                onClick={() => navigate("/top-up")}
                className="mt-auto w-full bg-royal DEFAULT hover:bg-royal-dark text-card font-semibold py-2 px-4 rounded-xl shadow-gold transition-colors"
              >
                Top-Up Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiamondPackages;
