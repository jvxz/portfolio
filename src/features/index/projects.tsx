import MotionItem from "@/app/components/motion/motion-item";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
export default function IndexProjects({
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
    <MotionItem variants={variants} className="prose dark:prose-invert">
      <h2>projects</h2>
      <div className="flex gap-4 *:flex-1">
        <Card>
          <CardHeader>
            <CardTitle>tagify</CardTitle>
            <CardDescription>online audio metadata editor</CardDescription>
          </CardHeader>
          <CardContent className="prose pt-4 dark:prose-invert">
            <p>
              tagify is a web app that makes it easy for you to edit the id3
              metadata tags in your audio files!
            </p>
            <h3>stack:</h3>
            <div className="flex flex-wrap items-center gap-2">
              <RiNextjsFill className="size-8" />
              <RiTailwindCssFill className="size-8" />
            </div>
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
      </div>{" "}
    </MotionItem>
  );
}
