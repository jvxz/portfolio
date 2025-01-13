import MotionItem from "@/components/motion/motion-item";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { fadeStaggerChild, fadeStaggerParent, projects } from "@/lib/constants";
import MotionParent from "@/components/motion/motion-parent";
import { Button } from "@/components/ui/button";
import GithubIcon from "@/components/logos/github";
import { type Icons } from "@/components/ui/icons";

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
        {projects.map((project) => (
          <MotionItem variants={fadeStaggerChild} key={project.title}>
            <ProjectCard {...project} />
          </MotionItem>
        ))}
      </MotionParent>
    </MotionItem>
  );
}

function ProjectCard({
  stack,
  title,
  subtitle,
  description,
  href,
  icon: Icon,
  sourceCode,
}: {
  stack: {
    name: string;
    icon: (typeof Icons)[keyof typeof Icons];
    url: string;
  }[];
  title: string;
  subtitle: string;
  description: string;
  href: string;
  icon: React.ElementType;
  sourceCode: string;
}) {
  return (
    <Card className="bg-card transition-colors">
      <CardHeader className="flex justify-between">
        <Link
          className="w-fit no-underline underline-offset-4 hover:underline"
          target="_blank"
          href={href}
        >
          <CardTitle className="flex items-center gap-2">
            {title}
            <Icon className="size-5" />
            <ExternalLink className="size-5" />
          </CardTitle>
        </Link>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent className="prose flex flex-col gap-4 pt-4 dark:prose-invert *:m-0">
        <div className="flex-1">
          <p className="m-0">{description}</p>
        </div>
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-1">
            <h3 className="m-0">stack</h3>
            <div className="flex flex-wrap items-center gap-2 *:m-0 *:h-fit">
              {stack.map((e) => {
                return (
                  <Tooltip key={e.name} delayDuration={100}>
                    <TooltipTrigger>
                      <Link href={e.url} target="_blank">
                        {e.icon({
                          className: "size-8",
                          style: { textShadow: "0 0 10px #000" },
                        })}
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
          <Button
            asChild
            className="mr-8 hidden no-underline underline-offset-4 hover:underline md:flex"
            variant="link"
            size="icon"
          >
            <Link href={sourceCode} target="_blank">
              <GithubIcon className="size-5" />
              source code
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
