"use client";

import { PropsWithChildren, useMemo } from "react";
import { Copy as CopyIcon } from "lucide-react";

import { Profile } from "./icons";
import { Copy } from "./ui/copy";

import { truncateString } from "@/helpers/truncateString";

export function SelectAccountCard({
  address,
  children,
}: PropsWithChildren<{ address: string }>) {
  const shortAddress = useMemo(() => truncateString(address, 12), [address]);
  return (
    <div className="flex items-center gap-2 py-3 px-3 rounded-lg bg-muted-foreground/10 hover:bg-muted-foreground/15 hover:scale-[102%] transition-all duration-200 cursor-pointer">
      <div className="rounded-full w-10 h-10 flex items-center justify-center bg-muted-foreground/20">
        <Profile className="w-6 h-6" />
      </div>
      <div className="flex flex-col gap-1">
        <span className="font-bold text-sm">{children}</span>
        <Copy value={address}>
          <div className="flex items-center gap-1 text-muted-foreground/90">
            <CopyIcon className="w-2 h-2" />
            <span className="text-xs">{shortAddress}</span>
          </div>
        </Copy>
      </div>
    </div>
  );
}
