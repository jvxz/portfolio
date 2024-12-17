import MotionItem from "@/app/components/motion/motion-item";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Link from "next/link";
import {
  ExternalLink,
  FileAudioIcon,
  TabletSmartphoneIcon,
} from "lucide-react";
import { Icon, type IconType } from "@/app/components/icons";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { fadeStaggerChild } from "@/lib/def";

const TAGIFY_STACK = [
  "react",
  "tailwind",
  "nextjs",
  "reactQuery",
  "zustand",
  "shadcn",
] as IconType[];

const PINCH_STACK = [
  "react",
  "tailwind",
  "nextjs",
  "reactQuery",
  "zustand",
  "shadcn",
  "zod",
] as IconType[];

export default function IndexProjects() {
  return (
    <MotionItem variants={fadeStaggerChild} className="prose dark:prose-invert">
      <h2>projects</h2>
      <div className="flex gap-4 *:flex-1">
        <ProjectCard
          stack={TAGIFY_STACK}
          title="tagify"
          subtitle="online audio metadata editor"
          description="tagify is a web app that makes it easy for you to edit the id3 metadata tags in your audio files! supports most mainstream audio formats"
          href="https://tagify.twirl.sh"
          icon={<FileAudioIcon className="size-5" />}
        />
        <ProjectCard
          stack={PINCH_STACK}
          title="pinch"
          subtitle="online mobile wallpaper cropper"
          description="pinch is a simple web app that allows you to crop your mobile wallpapers to your desired size! supports most mainstream devices, including custom settings"
          href="https://pinch.twirl.sh"
          icon={<TabletSmartphoneIcon className="size-5" />}
        />
      </div>
      <p>i am always thinking/looking for new projects to work on!</p>
    </MotionItem>
  );
}

function ProjectCard({
  stack,
  title,
  subtitle,
  description,
  href,
  icon,
}: {
  stack: IconType[];
  title: string;
  subtitle: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <Card>
      <CardHeader>
        <Link
          className="w-fit no-underline underline-offset-4 hover:underline"
          target="_blank"
          href={href}
        >
          <CardTitle className="flex items-center gap-2">
            {title}
            {icon}
            <ExternalLink className="size-5" />
          </CardTitle>
        </Link>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent className="prose flex flex-col gap-4 pt-4 dark:prose-invert *:m-0">
        <div className="min-h-36 flex-1">
          <p className="m-0">{description}</p>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="m-0">stack</h3>
          <div className="flex flex-wrap items-center gap-2 *:m-0 *:h-fit">
            {stack.map((e) => {
              return (
                <Tooltip key={e} delayDuration={100}>
                  <TooltipTrigger>
                    <Link href={e} target="_blank">
                      <Icon icon={e} size={28} />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{e}</p>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
