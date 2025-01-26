import { Providers } from "@/components/providers";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import "@/styles/globals.css";
import { type Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import { Radio_Canada_Big, Wittgenstein } from "next/font/google";

const radioCanadaBig = Radio_Canada_Big({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-radio-canada-big",
  weight: ["400"],
});

const wittgenstein = Wittgenstein({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-wittgenstein",
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
        className={`${radioCanadaBig.variable} ${wittgenstein.variable}`}
      >
        <body className="relative min-h-screen overflow-x-hidden antialiased before:pointer-events-none before:absolute before:top-0 before:left-0 before:z-10 before:h-full before:w-full before:bg-[url('https://github.com/ui-layouts/uilayouts/blob/main/apps/ui-layout/public/noise.gif?raw=true')] before:opacity-[0.02] before:content-['']">
          <Providers>{children}</Providers>
          <TailwindIndicator />
        </body>
      </html>
    </ViewTransitions>
  );
}
