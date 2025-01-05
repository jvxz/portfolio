import MotionItem from "@/components/motion/motion-item";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import MotionParent from "@/components/motion/motion-parent";
import { fadeStaggerChild } from "@/lib/constants";
import { Icons } from "@/components/ui/icons";

const PROFICIENCIES = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Git",
  "React",
  "NextJS",
  "SASS",
  "Tailwind",
  "Drizzle",
];

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
        className="flex flex-wrap items-center gap-3"
      >
        {PROFICIENCIES.map((e) => (
          <MotionItem variants={fadeStaggerChild} key={e}>
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger className="cursor-default">
                  {Icons[e as keyof typeof Icons]({
                    className: "size-10",
                  })}
                </TooltipTrigger>
                <TooltipContent>
                  {e === "NextJS" ? "Next.js" : e}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </MotionItem>
        ))}
      </MotionParent>
    </MotionItem>
  );
}
