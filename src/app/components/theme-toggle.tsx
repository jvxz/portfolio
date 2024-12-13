"use client";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="p-0"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? <Sun /> : <Moon />}
    </Button>
  );
}
