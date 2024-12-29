import MotionItem from "@/app/components/motion/motion-item";
import { Icon } from "@/app/components/icons";
import { type IconType } from "@/app/components/icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import MotionParent from "@/app/components/motion/motion-parent";
import { fadeStaggerChild } from "@/lib/constants";

const PROFICIENCIES = [
  "html",
  "css",
  "javascript",
  "typescript",
  "git",
  // "nodejs",
  "react",
  "nextjs",
  "tailwind",
  // "postgresql",
  "drizzle",
] as IconType[];

export default function IndexProficiencies() {
  return (
    <MotionItem
      variants={fadeStaggerChild}
      className="prose prose-neutral dark:prose-invert"
    >
      <h2>proficiencies</h2>
      <MotionParent
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,

            transition: {
              delay: 0.1,

              staggerChildren: 0.075,
            },
          },
          exit: {
            opacity: 0,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        initial="hidden"
        animate="show"
        exit="exit"
        className="flex items-center gap-3"
      >
        {PROFICIENCIES.map((e) => (
          <MotionItem variants={fadeStaggerChild} key={e}>
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger className="cursor-default">
                  <Icon className="pointer-events-none" icon={e} size={42} />
                </TooltipTrigger>
                <TooltipContent>
                  {e === "nodejs" ? "node.js" : e === "nextjs" ? "next.js" : e}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </MotionItem>
        ))}
      </MotionParent>
    </MotionItem>
  );
}
