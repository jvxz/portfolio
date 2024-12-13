import IndexProfile from "@/features/index/profile";
import IndexProjects from "@/features/index/projects";
import MotionParent from "./components/motion/motion-parent";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,

    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 27.5,
    transition: { duration: 0.45, type: "spring" },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, type: "spring" },
  },
};

export default function Page() {
  return (
    <MotionParent
      className="flex flex-col gap-12"
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <IndexProfile variants={item} />
      <IndexProjects variants={item} />
    </MotionParent>
  );
}
