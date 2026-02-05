import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimationProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
}

export const FadeIn = ({ children, delay = 0, duration = 0.5, className = "" }: AnimationProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const StaggerContainer = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
                hidden: { opacity: 0 },
                show: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.1,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const StaggerItem = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
