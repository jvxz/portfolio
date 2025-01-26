import { Providers } from "@/components/providers";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import "@/styles/globals.css";
import { type Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import { IBM_Plex_Sans, Wittgenstein } from "next/font/google";

const catamaran = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--next-font-sans",
  weight: ["400"],
});

const wittgenstein = Wittgenstein({
  subsets: ["latin"],
  display: "swap",
  variable: "--next-font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "jamie jacobs",
  description: "jamie's portfolio",
  icons: [{ rel: "icon", url: "https://github.com/jvxz.png" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ViewTransitions>
      <html
        lang="en"
        className={`${catamaran.variable} ${wittgenstein.variable}`}
      >
        <body className="relative min-h-screen overflow-x-hidden antialiased before:pointer-events-none before:absolute before:top-0 before:left-0 before:z-10 before:h-full before:w-full before:bg-[url('https://github.com/ui-layouts/uilayouts/blob/main/apps/ui-layout/public/noise.gif?raw=true')] before:opacity-[0.02] before:content-['']">
          <Providers>{children}</Providers>
          <TailwindIndicator />
        </body>
      </html>
    </ViewTransitions>
  );
}
