"use client";
import { getGitInfo } from "@/lib/actions";
import { useQuery } from "@tanstack/react-query";
import { type Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import VercelIcon from "./logos/vercel";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const { data, isLoading } = useQuery({
    queryKey: ["gitInfo"],
    queryFn: getGitInfo,
  });

  // console.log(data.data);

  return data ? (
    <footer className="container motion-preset-fade mx-auto flex max-w-[625px] flex-col items-center py-16 text-sm text-muted-foreground">
      <div className="flex items-center gap-1">
        <p className="w-full text-center">
          {/* &copy; {data.data} ({data.data[0].sha.slice(0, 7)}) */}
          &copy; {data[0]?.commit.committer.date.slice(0, 4)}
        </p>
        <span>
          (
          <Link href={data[0]?.html_url as Url} className="hover:underline">
            {data[0]?.sha.slice(0, 7)}
          </Link>
          )
        </span>
      </div>
      <div className="flex items-center gap-1">
        <p>hosted on</p>
        <Button
          asChild
          variant="link"
          className="p-0 text-muted-foreground underline-offset-8 hover:underline"
        >
          <Link href="https://vercel.com" target="_blank">
            <VercelIcon className="size-3" />
          </Link>
        </Button>
      </div>
      <p className="">do not steal.</p>
    </footer>
  ) : isLoading ? (
    <footer className="container mx-auto flex max-w-[625px] flex-col items-center py-16 text-sm text-muted-foreground"></footer>
  ) : (
    <footer className="container mx-auto flex max-w-[625px] flex-col items-center py-16 text-sm text-muted-foreground"></footer>
  );
}
