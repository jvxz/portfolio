import { Button } from "@/components/ui/button";
import Breadcrumbs from "../components/breadcrumbs";
import { Mail } from "lucide-react";
import DiscordIcon from "../components/logos/discord";
import ContactForm from "@/features/contact/form";
import ThemeToggle from "../components/theme-toggle";
import BlueskyIcon from "../components/logos/bluesky";

export default function Page() {
  return (
    <main className="motion-preset-slide-up-sm flex w-full flex-col gap-6">
      <div className="flex items-center justify-between">
        <Breadcrumbs />
        <ThemeToggle />
      </div>
      <article className="prose prose-neutral dark:prose-invert">
        <h2>let&apos;s talk!</h2>
        <p>questions? comments? criticism? let me know!</p>
        <div className="flex flex-col">
          <Button variant="link" className="self-start text-foreground">
            <Mail className="text-foreground" />
            biz@jamie.bio
          </Button>
          <Button className="self-start text-foreground" variant="link">
            <DiscordIcon className="text-foreground" />
            @nhhnh
          </Button>
          <Button className="self-start text-foreground" variant="link">
            <BlueskyIcon className="text-foreground" />
            @jamie.bio
          </Button>
        </div>
      </article>
      <ContactForm />
    </main>
  );
}
