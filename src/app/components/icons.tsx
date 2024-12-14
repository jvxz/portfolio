import Image, { type ImageProps } from "next/image";

export type IconType =
  | "nodejs"
  | "react"
  | "tailwind"
  | "nextjs"
  | "shadcn"
  | "reactQuery"
  | "zustand"
  | "zod"
  | "javascript"
  | "typescript";

const DEFAULT_SIZE = 28;

const ICON_URLS = {
  nodejs: "https://utfs.io/f/c7CSJBhCYkEGzSo8rEdxhWRM39y40k1PqQgb8LF2sVXxHTGd",
  react: "https://utfs.io/f/c7CSJBhCYkEGilDTOztlBuQTtx83gA4LMSK17ZvNRymhDYe9",
  tailwind:
    "https://utfs.io/f/c7CSJBhCYkEG1TFW7LzLlg7udZtwqpNcCIh53SeGfxBTYPJo",
  nextjs: "https://utfs.io/f/c7CSJBhCYkEGU7KAbxJvEgZMY461nWCF2vN3BPRywSIXcLk7",
  shadcn: "https://utfs.io/f/c7CSJBhCYkEG5Zd4hzTUxtMj6qgeNbn23vhZVR01YQaBpWfG",
  reactQuery:
    "https://utfs.io/f/c7CSJBhCYkEGRMjj5g4PSqhxg7nCsJoOXemVfG1Izb0twQMk",
  zustand: "https://utfs.io/f/c7CSJBhCYkEGrJc7bCmjlFT4gO8etaXksB6S5fKA7Vb9UMwh",
  zod: "https://utfs.io/f/c7CSJBhCYkEGsBYPVGucsBrR9LQbHGM0jU75SmEuCWzaYkA4",
  javascript:
    "https://utfs.io/f/c7CSJBhCYkEG9ip2x6YgGJKBbmMafNCDzUH5OjrTd6ePXQWc",
  typescript:
    "https://utfs.io/f/c7CSJBhCYkEGs3TW3aucsBrR9LQbHGM0jU75SmEuCWzaYkA4",
};

function Icon({
  icon,
  className,
  size = DEFAULT_SIZE,
  ...props
}: {
  icon: IconType;
  className?: string;
  size?: number;
  props?: ImageProps;
}) {
  return (
    <Image
      src={ICON_URLS[icon]}
      alt={icon}
      width={size}
      height={size}
      className={"m-0 " + className}
      {...props}
    />
  );
}

export { Icon };
