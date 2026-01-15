"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Card({ children, className, ...props }: React.ComponentProps<typeof motion.div>) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={cn(
                "bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 shadow-xl",
                "hover:border-slate-700 hover:shadow-2xl hover:shadow-blue-500/10 transition-colors",
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
}
