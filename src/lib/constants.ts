import { Icons } from "@/components/ui/icons";

export const fadeStaggerParent = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export const fadeStaggerChild = {
    hidden: {
        opacity: 0,
        y: 27.5,
        transition: { duration: 0.45, type: "spring" },
    },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, type: "spring" },
    },
};

type Stack = {
    icon: typeof Icons[keyof typeof Icons];
    name: string;
    url: string;
}

export const TAGIFY_STACK: Stack[] = [
    {
        icon: Icons.React,
        name: "React",
        url: "https://react.dev"
    },
    {
        icon: Icons.Tailwind,
        name: "Tailwind CSS",
        url: "https://tailwindcss.com"
    },
    {
        icon: Icons.NextJS,
        name: "Next.js",
        url: "https://nextjs.org"
    },
    {
        icon: Icons.ReactQuery,
        name: "React Query",
        url: "https://tanstack.com/query"
    },
    {
        icon: Icons.Zustand,
        name: "Zustand",
        url: "https://zustand-demo.pmnd.rs"
    },
    {
        icon: Icons.ShadcnUI,
        name: "shadcn/ui",
        url: "https://ui.shadcn.com"
    },
]

export const PINCH_STACK: Stack[] = [
    {
        icon: Icons.React,
        name: "React",
        url: "https://react.dev"
    },
    {
        icon: Icons.Tailwind,
        name: "Tailwind CSS",
        url: "https://tailwindcss.com"
    },
    {
        icon: Icons.NextJS,
        name: "Next.js",
        url: "https://nextjs.org"
    },
    {
        icon: Icons.ReactQuery,
        name: "React Query",
        url: "https://tanstack.com/query"
    },
    {
        icon: Icons.Zustand,
        name: "Zustand",
        url: "https://zustand-demo.pmnd.rs"
    },
    {
        icon: Icons.ShadcnUI,
        name: "shadcn/ui",
        url: "https://ui.shadcn.com"
    },
    {
        icon: Icons.Zod,
        name: "Zod",
        url: "https://zod.dev"
    }
]

export const GLOSS_STACK: Stack[] = [
    {
        icon: Icons.React,
        name: "React",
        url: "https://react.dev"
    },
    {
        icon: Icons.Tailwind,
        name: "Tailwind CSS",
        url: "https://tailwindcss.com"
    },
    {
        icon: Icons.NextJS,
        name: "Next.js",
        url: "https://nextjs.org"
    },
    {
        icon: Icons.PostgreSQL,
        name: "PostgreSQL",
        url: "https://www.postgresql.org"
    },
    {
        icon: Icons.Zustand,
        name: "Zustand",
        url: "https://zustand.dev"
    },
    {
        icon: Icons.ShadcnUI,
        name: "shadcn/ui",
        url: "https://ui.shadcn.com"
    },
    {
        icon: Icons.Drizzle,
        name: "Drizzle",
        url: "https://orm.drizzle.team"
    },
    {
        icon: Icons.BetterAuth,
        name: "better-auth",
        url: "https://www.better-auth.com"
    }
]

