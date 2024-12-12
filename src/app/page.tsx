import MotionParent from "./components/motion/motion-parent";
import IndexProfile from "@/features/index/profile";
import IndexProjects from "@/features/index/projects";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Page() {
  return (
    <MotionParent
      variants={container}
      initial="hidden"
      animate="show"
      className="container absolute inset-0 mx-auto mt-32 flex max-w-[625] flex-col gap-12"
    >
      <IndexProfile />
      <IndexProjects />
    </MotionParent>
  );
}
