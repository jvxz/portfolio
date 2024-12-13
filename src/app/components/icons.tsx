import Image from "next/image";

const SIZE = 32;

function Icon({ src, alt }: { src: string; alt: string }) {
  return <Image src={src} alt={alt} width={SIZE} height={SIZE} />;
}
