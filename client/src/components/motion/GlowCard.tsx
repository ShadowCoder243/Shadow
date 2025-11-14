import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "violet" | "blue";
}

export function GlowCard({ children, className = "", glowColor = "violet" }: GlowCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={cn("group", className)}
    >
      <Card className={cn(
        "relative overflow-hidden border-border backdrop-blur-sm",
        "hover:border-primary/50 transition-all duration-300",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:opacity-0 hover:before:opacity-10 before:transition-opacity",
        glowColor === "violet" && "before:from-primary before:to-transparent",
        glowColor === "blue" && "before:from-accent before:to-transparent"
      )}>
        {children}
      </Card>
    </motion.div>
  );
}
