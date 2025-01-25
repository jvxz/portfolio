import IndexProfile from "@/features/index/profile";
import IndexProjects from "@/features/index/projects";
import MotionParent from "@/components/motion/motion-parent";
import IndexProficiencies from "@/features/index/proficiencies";
import { fadeStaggerParent } from "@/lib/constants";
import IndexContact from "@/features/index/contact";

export default function Page() {
  return (
    <MotionParent
      className="mx-auto flex max-w-[350px] flex-col gap-12 sm:max-w-[450px] md:mx-6 md:max-w-(--breakpoint-lg)"
      variants={fadeStaggerParent}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <IndexProfile />
      <IndexProficiencies />
      <IndexProjects />
      <IndexContact />
    </MotionParent>
  );
}
