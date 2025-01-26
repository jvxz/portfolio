"use client";
import { IconBrandGithub, IconBrandLinkedin } from "justd-icons";
import { Button, Link } from "ui";

const links = [
  {
    label: "github",
    icon: IconBrandGithub,
    href: "https://github.com/jvxz",
  },
  {
    label: "linkedin",
    icon: IconBrandLinkedin,
    href: "https://www.linkedin.com/in/jamiejacobsdev/",
  },
];

function Header() {
  return (
    <section className="flex justify-between">
      <div>
        <p className="text-xl font-semibold">Jamie Jacobs</p>
        <p className="text-muted-fg">frontend engineer est. 2024</p>
      </div>
      <div className="flex gap-2">
        {links.map(({ label, icon: Icon, href }) => (
          <Link href={href} key={label}>
            <Button
              aria-label={label}
              size="square-petite"
              appearance="plain"
              className="*:scale-125"
            >
              <Icon />
            </Button>
          </Link>
        ))}
      </div>
    </section>
  );
}

export { Header };
