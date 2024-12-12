"use client";
import { motion, type MotionProps } from "framer-motion";

interface MotionParentProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
}

export default function MotionParent({
  children,
  className,
  ...motionProps
}: MotionParentProps) {
  return (
    <motion.div className={className} {...motionProps}>
      {children}
    </motion.div>
  );
}
