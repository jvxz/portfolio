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
  Paintbrush,
  TabletSmartphoneIcon,
} from "lucide-react";
import { Icon, type IconType } from "@/app/components/icons";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import {
  fadeStaggerChild,
  fadeStaggerParent,
  GLOSS_STACK,
  PINCH_STACK,
  TAGIFY_STACK,
} from "@/lib/constants";
import MotionParent from "@/app/components/motion/motion-parent";

export default function IndexProjects() {
  return (
    <MotionItem variants={fadeStaggerChild} className="prose dark:prose-invert">
      <h2>projects</h2>
      <MotionParent
        className="flex flex-col gap-4 *:flex-1"
        variants={fadeStaggerParent}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <MotionItem variants={fadeStaggerChild}>
          <ProjectCard
            stack={GLOSS_STACK}
            title="gloss"
            subtitle="shadcn/ui theme generator"
            description="gloss is an accessible theme generator for the shadcn/ui library. pick your hue and choose from a variety of styles to generate a theme for your project!"
            href="https://gloss.wisp.bio"
            icon={<Paintbrush className="size-5" />}
          />
        </MotionItem>
        <MotionItem variants={fadeStaggerChild}>
          <ProjectCard
            stack={TAGIFY_STACK}
            title="tagify"
            subtitle="online audio metadata editor"
            description="tagify is a web app that makes it easy for you to edit the id3 metadata tags in your audio files! supports most mainstream audio formats"
            href="https://tagify.wisp.bio"
            icon={<FileAudioIcon className="size-5" />}
          />
        </MotionItem>
        <MotionItem variants={fadeStaggerChild}>
          <ProjectCard
            stack={PINCH_STACK}
            title="pinch"
            subtitle="online mobile wallpaper cropper"
            description="pinch is a simple web app that allows you to crop your mobile wallpapers to your desired size! supports most mainstream devices, including custom settings"
            href="https://pinch.wisp.bio"
            icon={<TabletSmartphoneIcon className="size-5" />}
          />
        </MotionItem>
      </MotionParent>
      {/* <p>i am always thinking/looking for new projects to work on!</p> */}
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
    <Card className="transition-colors">
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
        <div className="flex-1">
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
