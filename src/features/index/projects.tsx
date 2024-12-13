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
  );
}
