import "@/styles/globals.css";
import Providers from "./components/providers";
import { type Metadata } from "next";
import { Radio_Canada_Big } from "next/font/google";
import Particles from "@/components/ui/particles";
import MotionParent from "./components/motion/motion-parent";

const radioCanadaBig = Radio_Canada_Big({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-radio-canada-big",
});

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${radioCanadaBig.variable}`}>
      <body className="h-screen antialiased">
        <Particles />
        <Providers>
          <MotionParent
            className="container absolute inset-0 mx-auto mt-32 flex max-w-[625] flex-col gap-12"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* <div className="flex items-center justify-between"></div> */}
            {children}
          </MotionParent>
        </Providers>
      </body>
    </html>
  );
}
