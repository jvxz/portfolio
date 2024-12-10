import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <main className="container absolute inset-0 mx-auto mt-32 flex max-w-[625] flex-col gap-12">
      <article className="flex flex-col gap-6">
        <section className="flex justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold">jamie jacobs</h1>
            <h2 className="text-lg">
              aspiring web developer{" "}
              <span className="text-sm text-muted-foreground">est. 2024</span>
            </h2>
          </div>
          <div className="flex gap-1">
            <Button variant="ghost">profile</Button>
            <Button variant="ghost">projects</Button>
            <Button variant="ghost">contact</Button>
          </div>
        </section>
      </article>
      <article className="prose dark:prose-invert">
        <p>
          hello! i am an aspiring web developer based in north georgia. i enjoy
          using my time by coming up with new ideas or building ideas i have
          written down.
        </p>
      </article>
      <article className="prose dark:prose-invert">
        <h3>projects</h3>
        <div className="flex gap-2 *:flex-1"></div>
      </article>
    </main>
  );
}
