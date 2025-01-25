import Footer from "@/components/footer";
import Providers from "@/components/providers";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import Particles from "@/components/ui/particles";
import "@/styles/globals.css";
import { type Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import { IBM_Plex_Sans } from "next/font/google";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ibm-plex-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
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
      <html lang="en" className={`${ibmPlexSans.variable}`}>
        <body className="relative min-h-screen overflow-x-hidden antialiased before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-[url('https://github.com/ui-layouts/uilayouts/blob/main/apps/ui-layout/public/noise.gif?raw=true')] before:opacity-[0.02] before:content-['']">
          <Particles className="absolute inset-0 -z-10" />
          <Providers>
            <main className="container relative mx-auto flex max-w-[625px] pt-24">
              {children}
            </main>
            <Footer />
          </Providers>
          <TailwindIndicator />
        </body>
      </html>
    </ViewTransitions>
  );
}
