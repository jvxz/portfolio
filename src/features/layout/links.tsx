import Link from "next/link";

const links = [
  { label: "about", href: "/" },
  { label: "profile", href: "/profile" },
  { label: "projects", href: "/projects" },
  { label: "contact", href: "/contact" },
];

function Links() {
  return (
    <div className="border-fg/20 flex size-fit flex-col gap-1 border-r pr-4">
      {links.map((link) => (
        <Link
          className="text-muted-fg hover:text-fg w-fit font-serif text-lg tracking-tight italic transition-colors duration-300"
          href={link.href}
          key={link.label}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}

export { Links };
