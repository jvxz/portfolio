import Image from "next/image";

const SIZE = 28;

function Icon({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={SIZE}
      height={SIZE}
      className={"m-0 " + className}
    />
  );
}

export function ReactIcon() {
  return (
    <Icon
      src="https://utfs.io/f/c7CSJBhCYkEGilDTOztlBuQTtx83gA4LMSK17ZvNRymhDYe9"
      alt="react"
    />
  );
}

export function TailwindIcon() {
  return (
    <Icon
      src="https://utfs.io/f/c7CSJBhCYkEG1TFW7LzLlg7udZtwqpNcCIh53SeGfxBTYPJo"
      alt="tailwind"
    />
  );
}

export function NextjsIcon() {
  return (
    <Icon
      src="https://utfs.io/f/c7CSJBhCYkEGU7KAbxJvEgZMY461nWCF2vN3BPRywSIXcLk7"
      alt="next.js"
    />
  );
}

export function ShadcnIcon() {
  return (
    <Icon
      src="https://utfs.io/f/c7CSJBhCYkEG5Zd4hzTUxtMj6qgeNbn23vhZVR01YQaBpWfG"
      alt="shadcn/ui"
    />
  );
}

export function ReactQueryIcon() {
  return (
    <Icon
      src="https://utfs.io/f/c7CSJBhCYkEGRMjj5g4PSqhxg7nCsJoOXemVfG1Izb0twQMk"
      alt="react query"
    />
  );
}
export function ZustandIcon() {
  return (
    <Icon
      src="https://utfs.io/f/c7CSJBhCYkEGrJc7bCmjlFT4gO8etaXksB6S5fKA7Vb9UMwh"
      alt="zustand"
    />
  );
}

export function ZodIcon() {
  return (
    <Icon
      src="https://utfs.io/f/c7CSJBhCYkEGsBYPVGucsBrR9LQbHGM0jU75SmEuCWzaYkA4"
      alt="zod"
    />
  );
}
