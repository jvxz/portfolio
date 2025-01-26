import { Layout as LayoutComponent } from "@/features/layout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="container flex max-w-[825px] gap-6 p-18">
      <LayoutComponent.Links />
      {children}
    </main>
  );
}
