"use client";

import { PropsWithChildren } from "react";
import Link from "next/link";

import * as Icons from "./icons";
import { Button } from "./ui/button";

import { cn } from "@/lib/utils";

export function WalletCard({
  icon,
  active,
  children,
}: PropsWithChildren<{ icon: keyof typeof Icons; active?: boolean }>) {
  const IconComponent = Icons[icon];
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-2 p-3 rounded-lg",
        active
          ? "bg-muted-foreground/10 hover:bg-muted-foreground/15 hover:scale-105 transition-all duration-200 cursor-pointer"
          : "opacity-50"
      )}
    >
      <div className="flex items-center gap-3">
        <IconComponent className="w-7 h-7 scale-110" />
        <span className="text-sm font-bold">{children}</span>
      </div>
      {!active && (
        <Button size="sm" variant="ghost" asChild>
          <Link href="/setup" target="_blank">
            Setup
          </Link>
        </Button>
      )}
    </div>
  );
}
