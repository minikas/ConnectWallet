"use client";

import { PropsWithChildren, useMemo } from "react";
import { Copy as CopyIcon } from "lucide-react";

import { Profile } from "./icons";
import { Copy } from "./ui/copy";
import * as Icons from "./icons";

import { truncateString } from "@/helpers/truncateString";
import { Skeleton as SkeletonComponent } from "@/components/ui/skeleton";

function SelectAccountCard({
  address,
  provider,
  balance = "0.00",
  children,
}: PropsWithChildren<{
  address: string;
  provider: string;
  balance?: string;
}>) {
  const shortAddress = useMemo(() => truncateString(address, 12), [address]);
  const IconComponent = Icons[provider as keyof typeof Icons];

  return (
    <div className="flex items-center gap-2 py-3 px-3 rounded-lg bg-muted-foreground/5 hover:bg-muted-foreground/15 hover:scale-[102%] transition-all duration-200 cursor-pointer">
      <div className="relative rounded-full w-10 h-10 flex items-center justify-center bg-muted-foreground/20">
        <Profile className="w-6 h-6" />
        <IconComponent className="absolute bottom-0 -left-1 w-5 h-5" />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <div className="flex items-center justify-between">
          <span className="font-bold text-sm">{children}</span>
          <span className="text-xs text-muted-foreground/40">${balance}</span>
        </div>
        <Copy value={address}>
          <div className="flex items-center gap-1 text-muted-foreground/90 w-fit">
            <CopyIcon className="w-2 h-2" />
            <span className="text-xs">{shortAddress}</span>
          </div>
        </Copy>
      </div>
    </div>
  );
}

export function Skeleton() {
  return (
    <div className="flex items-center gap-2 py-3 px-3 rounded-lg bg-muted-foreground/5">
      <SkeletonComponent className="min-w-10 h-10 rounded-full" />
      <div className="flex flex-col gap-1 w-full">
        <div className="flex items-center justify-between">
          <SkeletonComponent className="w-44 h-4" />
          <SkeletonComponent className="w-12 h-3" />
        </div>
        <SkeletonComponent className="w-20 h-3" />
      </div>
    </div>
  );
}
SelectAccountCard.Skeleton = Skeleton;
export { SelectAccountCard };
