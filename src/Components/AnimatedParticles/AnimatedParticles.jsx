import { motion } from "framer-motion";

const ParticleLayer = () => (
    <>
        <motion.div
            className="absolute top-1/4 left-1/3 w-2 h-2 bg-royal rounded-full blur-md"
            animate={{ y: [0, 20, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
            className="absolute bottom-1/4 right-1/2 w-3 h-3 bg-gold rounded-full blur"
            animate={{ x: [0, 15, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
            className="absolute top-2/3 left-2/3 w-4 h-4 bg-crystal rounded-full blur-md"
            animate={{ y: [-10, 10, -10], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 7, repeat: Infinity }}
        />
    </>
);

export default ParticleLayer;
