import { Button } from "@/components/ui/button";
import Breadcrumbs from "@/components/breadcrumbs";
import { Mail } from "lucide-react";
import ContactForm from "@/features/contact/form";
import ThemeToggle from "@/components/theme-toggle";
import GithubIcon from "@/components/logos/github";
import Link from "next/link";

export default function Page() {
  return (
    <main className="motion-preset-slide-up-sm flex w-full flex-col gap-6">
      <div className="flex items-center justify-between">
        <Breadcrumbs />
        <ThemeToggle />
      </div>
      {/* <article className="prose prose-neutral dark:prose-invert prose-a:text-foreground">
        <h2>let&apos;s talk!</h2>
        <p>questions? comments? criticism? let me know!</p>
        <div className="flex flex-col">
          <Button
            variant="link"
            className="self-start text-foreground no-underline"
          >
            <Mail className="text-foreground" />
            jamie@wisp.bio
          </Button>
          <Button
            asChild
            className="self-start text-foreground no-underline"
            variant="link"
          >
            <Link
              href="https://github.com/jvxz"
              target="_blank"
              className="no-underline"
            >
              <GithubIcon className="text-foreground" />
              @jvxz
            </Link>
          </Button>
        </div>
      </article> */}
      {/* <ContactForm /> */}
    </main>
  );
}
