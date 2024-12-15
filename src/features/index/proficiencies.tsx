import MotionItem from "@/app/components/motion/motion-item";
import { Icon } from "@/app/components/icons";
import { type IconType } from "@/app/components/icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const PROFICIENCIES = [
  "html",
  "css",
  "javascript",
  "typescript",
  "git",
  "nodejs",
  "react",
  "nextjs",
  "tailwind",
  "postgresql",
  "drizzle",
] as IconType[];

export default function IndexProficiencies({
  variants,
}: {
  variants: {
    hidden: {
      opacity: number;
      y: number;
    };
  };
}) {
  return (
    <MotionItem
      variants={variants}
      className="prose prose-neutral dark:prose-invert"
    >
      <h2>proficiencies</h2>
      <div className="flex items-center gap-3">
        {PROFICIENCIES.map((e) => (
          <TooltipProvider delayDuration={100} key={e}>
            <Tooltip>
              <TooltipTrigger className="cursor-default">
                <Icon className="pointer-events-none" icon={e} size={42} />
              </TooltipTrigger>
              <TooltipContent>
                {e === "nodejs" ? "node.js" : e === "nextjs" ? "next.js" : e}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </MotionItem>
  );
}
