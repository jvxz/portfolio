import MotionItem from "@/app/components/motion/motion-item";
import { Button } from "@/components/ui/button";
import { Asterisk } from "lucide-react";
import { Link } from "next-view-transitions";

export default function IndexProfile({
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
    <MotionItem variants={variants} className="flex flex-col gap-6">
      <section className="flex justify-between">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <h1 className="text-2xl font-bold">jamie jacobs</h1>
            <Asterisk className="motion-preset-pop size-8" />
          </div>
          <h2 className="text-lg">
            aspiring web developer{" "}
            <span className="text-sm text-muted-foreground">est. 2024</span>
          </h2>
        </div>
        <div className="flex gap-1">
          <Button asChild variant="ghost">
            <Link replace href="/contact">
              contact
            </Link>
          </Button>
        </div>
      </section>
      <section className="prose dark:prose-invert">
        <p>
          hello! i am an aspiring web developer based in north georgia. i enjoy
          using my time by coming up with new ideas or building ideas i have
          written down.
        </p>
        <p>
          coding has been an aspiration of mine since i was in high school, but
          i never took it seriously until 2024. i now work every day to improve
          my skills!
        </p>
      </section>
    </MotionItem>
  );
}
