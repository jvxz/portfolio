import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import MotionParent from "./components/motion/motion-parent";
import MotionItem from "./components/motion/motion-item";

const container = {
  initial: { opacity: 0, y: 5 },
  animate: { opacity: 1, y: 0, transition: { delayChildren: 0.2 } },
};

export default function Page() {
  return (
    <MotionParent
      variants={container}
      initial="initial"
      animate="animate"
      className="container absolute inset-0 mx-auto mt-32 flex max-w-[625] flex-col gap-12"
    >
      <MotionItem className="flex flex-col gap-6">
        <section className="flex justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold">jamie jacobs</h1>
            <h2 className="text-lg">
              aspiring web developer{" "}
              <span className="text-sm text-muted-foreground">est. 2024</span>
            </h2>
          </div>
          <div className="flex gap-1">
            <Button variant="ghost">profile</Button>
            <Button variant="ghost">projects</Button>
            <Button variant="ghost">contact</Button>
          </div>
        </section>
        <section className="prose dark:prose-invert">
          <p>
            hello! i am an aspiring web developer based in north georgia. i
            enjoy using my time by coming up with new ideas or building ideas i
            have written down.
          </p>
          <p>
            coding has been an aspiration of mine since i was in high school,
            but i never took it seriously until 2024. i now work every day to
            improve my skills!
          </p>
        </section>
      </MotionItem>
      {/* <article className="prose dark:prose-invert"></article> */}
      <MotionItem className="prose dark:prose-invert">
        <h2>projects</h2>
        <div className="flex gap-4 *:flex-1">
          <Card>
            <CardHeader>
              <CardTitle>tagify</CardTitle>
              <CardDescription>online audio metadata editor</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                tagify is a web app that makes it easy for you to edit the id3
                metadata tags in your audio files!
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Link
                className="w-fit no-underline underline-offset-4 hover:underline"
                target="_blank"
                href="https://pinch.twirl.sh"
              >
                <CardTitle className="flex items-center gap-2">
                  tagify
                  <ExternalLink className="size-5" />
                </CardTitle>
              </Link>
              <CardDescription>online mobile wallpaper cropper</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                pinch is a simple web app that allows you to crop your mobile
                wallpapers to your desired size!
              </p>
              <div className="flex items-center gap-2"></div>
            </CardContent>
          </Card>
        </div>
      </MotionItem>
    </MotionParent>
  );
}
