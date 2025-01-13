import { Icons } from "@/components/ui/icons";
import { FileImage, Paintbrush } from "lucide-react";

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

const TAGIFY_STACK: Stack[] = [
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

const PINCH_STACK: Stack[] = [
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

const GLOSS_STACK: Stack[] = [
    {
        icon: Icons.TypeScript,
        name: "TypeScript",
        url: "https://www.typescriptlang.org"
    },
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
const SVGC_STACK: Stack[] = [
    {
        icon: Icons.TypeScript,
        name: "TypeScript",
        url: "https://www.typescriptlang.org"
    },
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
        url: "https://zustand.dev"
    },
    {
        icon: Icons.ShadcnUI,
        name: "shadcn/ui",
        url: "https://ui.shadcn.com"
    },
]


export const projects = [
    {
        title: "svgc",
        subtitle: "react icon component generator",
        description:
            "svgc is a simple web app that allows you to generate react icon components from svg files. supports most mainstream svg files",
        href: "https://svgc.wisp.bio",
        icon: FileImage,
        sourceCode: "https://github.com/jvxz/svgc",
        stack: SVGC_STACK,
    },
    {
        title: "gloss",
        subtitle: "shadcn/ui theme generator",
        description:
            "gloss is an accessible theme generator for the shadcn/ui library. pick your hue and choose from a variety of styles to generate a theme for your project!",
        href: "https://gloss.wisp.bio",
        icon: Paintbrush,
        sourceCode: "https://github.com/jvxz/gloss",
        stack: GLOSS_STACK,
    },
    // {
    //     title: "tagify",
    //     subtitle: "online audio metadata editor",
    //     description:
    //         "tagify is a web app that makes it easy for you to edit the id3 metadata tags in your audio files! supports most mainstream audio formats",
    //     href: "https://tagify.wisp.bio",
    //     icon: FileAudioIcon,
    //     sourceCode: "https://github.com/jvxz/tagify",
    //     stack: TAGIFY_STACK,
    // },
    // {
    //     title: "pinch",
    //     subtitle: "online mobile wallpaper cropper",
    //     description:
    //         "pinch is a simple web app that allows you to crop your mobile wallpapers to your desired size! supports most mainstream devices, including custom settings",
    //     href: "https://pinch.wisp.bio",
    //     icon: TabletSmartphoneIcon,
    //     sourceCode: "https://github.com/jvxz/pinch",
    //     stack: PINCH_STACK,
    // },
];


