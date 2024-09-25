"use client";

import { MouseEvent, PropsWithChildren, useState } from "react";
import { TooltipContentProps } from "@radix-ui/react-tooltip";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const Copy = ({
  value,
  side = "left",
  children,
}: PropsWithChildren<{
  value: string | number;
  side?: TooltipContentProps["side"];
}>) => {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState(false);

  const onCopy = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!value) return;
    try {
      await navigator.clipboard.writeText(value.toString());
      if (!state) setState(true);
    } catch (error) {
      console.error("Error copying to clipboard:", error);
    }
  };

  const onMouseOut = () => state && setState(false);

  return (
    <TooltipProvider delayDuration={150}>
      <Tooltip onOpenChange={setOpen} open={open}>
        <TooltipTrigger asChild onClick={onCopy} onMouseOut={onMouseOut}>
          {children}
        </TooltipTrigger>
        <TooltipContent
          side={side}
          onPointerDownOutside={(e) => e.preventDefault()}
        >
          {state ? "Copied" : "Copy"}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
