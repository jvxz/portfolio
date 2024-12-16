import IndexProfile from "@/features/index/profile";
import IndexProjects from "@/features/index/projects";
import MotionParent from "./components/motion/motion-parent";
import IndexProficiencies from "@/features/index/proficiencies";
import { fadeStaggerChild, fadeStaggerParent } from "@/lib/def";

export default function Page() {
  return (
    <MotionParent
      className="flex flex-col gap-12"
      variants={fadeStaggerParent}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <IndexProfile variants={fadeStaggerChild} />
      <IndexProficiencies variants={fadeStaggerChild} />
      <IndexProjects variants={fadeStaggerChild} />
    </MotionParent>
  );
}
