import MotionItem from "@/components/motion/motion-item";
import ThemeToggle from "@/components/theme-toggle";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { fadeStaggerChild } from "@/lib/constants";
import { Link } from "next-view-transitions";

export default function IndexProfile() {
  return (
    <MotionItem variants={fadeStaggerChild} className="flex flex-col gap-6">
      <section className="flex justify-between">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <Avatar className="size-8">
              <AvatarImage src="https://github.com/jvxz.png" />
              <AvatarFallback>jj</AvatarFallback>
            </Avatar>
            <h1 className="text-2xl font-bold">jamie jacobs</h1>
          </div>
          <h2 className="text-lg">
            frontend web developer{" "}
            <span className="text-sm text-muted-foreground">est. 2024</span>
          </h2>
          <div className="flex items-center gap-2">
            {["20 years old", "he/any", "en-us", "utc-5"].map((e) => (
              <Badge variant="outline" key={e}>
                {e}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex items-start gap-1 sm:items-center">
          <Button asChild size="icon" variant="ghost">
            <Link href="https://github.com/jvxz/portfolio">
              <Icons.GitHub />
            </Link>
          </Button>
          <ThemeToggle className="size-[32px]" />
        </div>
      </section>
      <section className="prose prose-neutral dark:prose-invert">
        <p>
          hello! i am an aspiring web developer based in north georgia. i enjoy
          using my time by coming up with new ideas or building ideas i have
          written down. coding has been an aspiration of mine since i was 14,
          but i never took it seriously until 2024.
        </p>
        <p>
          my main focus in my personal projects is full-stack, though i am most
          fluent in frontend development. many things interest me in both
          frontend and backend, so i strive every day to learn and improve my
          skills! 😇
        </p>
      </section>
    </MotionItem>
  );
}
