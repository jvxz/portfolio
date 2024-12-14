import MotionItem from "@/app/components/motion/motion-item";
import { Icon } from "@/app/components/icons";
import { type IconType } from "@/app/components/icons";

const PROFICIENCIES = [
  "javascript",
  "typescript",
  "nodejs",
  "react",
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
      <div className="flex items-center gap-2">
        {PROFICIENCIES.map((e) => (
          <Icon icon={e} key={e} size={42} />
        ))}
      </div>
    </MotionItem>
  );
}
