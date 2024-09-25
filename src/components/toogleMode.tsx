"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function ToogleMode() {
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    if (theme === "system" || !theme) setTheme("system");
  }, [setTheme, theme]);

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <ToggleGroup
      type="single"
      value={theme}
      onValueChange={(value) => value && setTheme(value)}
      className="rounded-full border"
    >
      <ToggleGroupItem
        value="system"
        aria-label="Toggle auto"
        className="rounded-full"
      >
        <p className="text-sm font-medium">Auto</p>
      </ToggleGroupItem>
      <ToggleGroupItem
        value="dark"
        aria-label="Toggle dark"
        className="rounded-full"
      >
        <Moon className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="light"
        aria-label="Toggle light"
        className="rounded-full"
      >
        <Sun className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
