import { About } from "@/features/about";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <About.Header />
      <About.Body />
    </div>
  );
}
