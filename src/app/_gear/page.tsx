import Breadcrumbs from "@/components/breadcrumbs";

export default function Page() {
  return (
    <main className="motion-preset-slide-up-md flex flex-col gap-6">
      <Breadcrumbs />
      <article className="prose prose-neutral dark:prose-invert">
        <h2>hardware</h2>
      </article>
    </main>
  );
}
