import MotionItem from "@/app/components/motion/motion-item";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { Link } from "next-view-transitions";
import GithubIcon from "@/app/components/logos/github";

export default function IndexContact() {
  return (
    <MotionItem className="prose prose-neutral dark:prose-invert prose-a:text-foreground">
      <h2>currently looking for work! </h2>
      <p>if you have any questions or comments, i would love to chat!</p>
      <div className="flex flex-col">
        <Button
          variant="link"
          className="self-start text-foreground no-underline"
          asChild
        >
          <Link href="mailto:jamie@wisp.bio">
            <Mail className="text-foreground" />
            jamie@wisp.bio
          </Link>
        </Button>
        <Button
          asChild
          className="self-start text-foreground no-underline"
          variant="link"
        >
          <Link
            href="https://github.com/jvxz"
            target="_blank"
            className="no-underline"
          >
            <GithubIcon className="text-foreground" />
            @jvxz
          </Link>
        </Button>
      </div>
    </MotionItem>
  );
}
