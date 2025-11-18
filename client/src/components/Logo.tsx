import { motion } from "framer-motion";
import logoSrc from "@/assets/favicon.png";

interface LogoProps {
  className?: string;
  size?: number;
}

export function Logo({ className = "", size = 32 }: LogoProps) {
  return (
    <motion.div
      className={`relative inline-flex items-center justify-center rounded-full bg-gradient-to-br from-primary/20 via-background/40 to-accent/20 p-1 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      style={{ width: size + 12, height: size + 12 }}
    >
      <img
        src={logoSrc}
        alt="Logo ShadowCoder"
        className="object-contain rounded-lg drop-shadow-[0_0_16px_rgba(103,232,249,0.35)]"
        style={{ width: size, height: size }}
      />
      <motion.span
        className="absolute inset-0 -z-10 rounded-full blur-2xl bg-primary/30 opacity-70"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}

