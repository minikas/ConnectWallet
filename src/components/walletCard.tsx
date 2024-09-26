"use client";

import { PropsWithChildren } from "react";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

import * as Icons from "./icons";
import { Button } from "./ui/button";

import { cn } from "@/lib/utils";

export function WalletCard({
  icon,
  active,
  onClick,
  href,
  children,
}: PropsWithChildren<{
  icon: string;
  active?: boolean;
  onClick?: () => void;
  href: Url;
}>) {
  const IconComponent = Icons[icon as keyof typeof Icons];
  return (
    <div
      role="button"
      className={cn(
        "flex items-center justify-between gap-2 p-3 rounded-lg",
        active
          ? "bg-muted-foreground/10 hover:bg-muted-foreground/15 hover:scale-105 transition-all duration-200 cursor-pointer"
          : "opacity-50"
      )}
      onClick={active ? onClick : undefined}
    >
      <div className="flex items-center gap-3">
        <IconComponent className="w-7 h-7 scale-110" />
        <span className="text-sm font-bold">{children}</span>
      </div>
      {!active && (
        <Button size="sm" variant="ghost" asChild>
          <Link href={href} target="_blank">
            Setup
          </Link>
        </Button>
      )}
    </div>
  );
}
