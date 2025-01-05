import "@/styles/globals.css";
import Providers from "@/components/providers";
import { type Metadata } from "next";
import { Radio_Canada_Big } from "next/font/google";
import Particles from "@/components/ui/particles";
import { ViewTransitions } from "next-view-transitions";
import Footer from "@/components/footer";

const radioCanadaBig = Radio_Canada_Big({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-radio-canada-big",
});

export const metadata: Metadata = {
  title: "jamie jacobs",
  description: "jamie's portfolio!",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ViewTransitions>
      <html lang="en" className={`${radioCanadaBig.variable}`}>
        <body className="relative min-h-screen overflow-x-hidden antialiased before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-[url('https://github.com/ui-layouts/uilayouts/blob/main/apps/ui-layout/public/noise.gif?raw=true')] before:opacity-[0.02] before:content-['']">
          <Particles className="absolute inset-0 -z-10" />
          <Providers>
            <main className="container relative mx-auto flex max-w-[625px] pt-24">
              {children}
            </main>
            <Footer />
          </Providers>
        </body>
      </html>
    </ViewTransitions>
  );
}
