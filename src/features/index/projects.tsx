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
import {
  NextjsIcon,
  ReactIcon,
  ReactQueryIcon,
  ShadcnIcon,
  TailwindIcon,
  ZodIcon,
  ZustandIcon,
} from "@/app/components/icons";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

const TAGIFY_STACK = [
  {
    name: "react",
    href: "https://react.dev",
    icon: ReactIcon,
  },
  {
    name: "tailwind",
    href: "https://tailwindcss.com",
    icon: TailwindIcon,
  },
  {
    name: "next.js",
    href: "https://nextjs.org",
    icon: NextjsIcon,
  },
  {
    name: "tanstack query",
    href: "https://tanstack.com/query/latest",
    icon: ReactQueryIcon,
  },
  {
    name: "zustand",
    href: "https://zustand-demo.pmnd.rs/",
    icon: ZustandIcon,
  },
  {
    name: "shadcn/ui",
    href: "https://ui.shadcn.com",
    icon: ShadcnIcon,
  },
];

const PINCH_STACK = [
  {
    name: "react",
    href: "https://react.dev",
    icon: ReactIcon,
  },
  {
    name: "tailwind",
    href: "https://tailwindcss.com",
    icon: TailwindIcon,
  },
  {
    name: "next.js",
    href: "https://nextjs.org",
    icon: NextjsIcon,
  },
  {
    name: "tanstack query",
    href: "https://tanstack.com/query/latest",
    icon: ReactQueryIcon,
  },
  {
    name: "shadcn/ui",
    href: "https://ui.shadcn.com",
    icon: ShadcnIcon,
  },
  {
    name: "zustand",
    href: "https://zustand-demo.pmnd.rs/",
    icon: ZustandIcon,
  },
  {
    name: "zod",
    href: "https://zod.dev",
    icon: ZodIcon,
  },
];

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
  stack: { name: string; href: string; icon: React.ElementType }[];
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
            {icon}
            {title}
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
                <Tooltip key={e.name} delayDuration={100}>
                  <TooltipTrigger>
                    <Link href={e.href} target="_blank">
                      <e.icon />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{e.name}</p>
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
