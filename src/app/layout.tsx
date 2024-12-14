import "@/styles/globals.css";
import Providers from "./components/providers";
import { type Metadata } from "next";
import { Radio_Canada_Big } from "next/font/google";
import Particles from "@/components/ui/particles";
import { ViewTransitions } from "next-view-transitions";
import Overlay from "./components/overlay";
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
        <body className="h-screen antialiased">
          <Particles />
          <Overlay />
          <Providers>
            <main className="container absolute inset-0 mx-auto mt-24 flex max-w-[625px]">
              {children}
            </main>
          </Providers>
        </body>
      </html>
    </ViewTransitions>
  );
}
