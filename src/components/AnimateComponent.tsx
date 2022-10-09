import { motion } from "framer-motion";

export default function AnimateComponent({ children, delay = 0 }) {
    return (
        <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay }}>
            {children}
        </motion.div>
    );
}
