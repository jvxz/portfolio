"use client";
import { motion, type MotionProps } from "framer-motion";

interface MotionItemProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
}

export default function MotionItem({
  children,
  className,
  ...motionProps
}: MotionItemProps) {
  return (
    <motion.article className={className} {...motionProps}>
      {children}
    </motion.article>
  );
}
