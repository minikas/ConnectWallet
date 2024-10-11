"use client";

import Link from "next/link";
import { CopyIcon } from "lucide-react";
import React, { PropsWithChildren } from "react";

import { ToogleMode } from "@/components/toogleMode";
import { AboutWallets } from "@/components/about-wallets";
import { SelectAccount } from "@/components/select-account";
import Marquee from "@/components/ui/marquee";
import { ConnectWallet } from "@/components/connect-wallet";
import { SelectWallet } from "@/components/select-wallet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy } from "@/components/ui/copy";
import { Button } from "@/components/ui/button";

export default function Screen() {
  return (
    <div className=" min-h-screen flex flex-col gap-2">
      <div className="flex-1 w-full mx-auto flex flex-col items-center p-4 sm:p-10 gap-10 min-h-[740px]">
        <div className="flex gap-2 items-center ">
          <div className="w-7 h-7 bg-pink-500 rounded-full" />
          <p className="text-xs font-mono">
            Crafted by
            <Link
              target="_blank"
              href="https://github.com/minikas"
              className="ml-2 font-bold text-pink-500"
            >
              Kas Ferreira
            </Link>
          </p>
        </div>
        <ToogleMode />
        <div className="flex gap-4 w-full max-w-sm">
          <Tabs defaultValue="install" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-muted-foreground/5 border border-muted">
              <TabsTrigger
                className="data-[state=active]:bg-muted-foreground/20"
                value="code"
              >
                Preview
              </TabsTrigger>
              <TabsTrigger
                className="data-[state=active]:bg-muted-foreground/20"
                value="install"
              >
                Install
              </TabsTrigger>
            </TabsList>
            <TabsContent value="code" className="w-full ">
              <ConnectWallet />
            </TabsContent>
            <TabsContent
              value="install"
              className="flex flex-col gap-4 py-3 w-full"
            >
              <Install>
                npx shadcn-ui@latest add
                https://minikas.github.io/ConnectWallet/connect-wallet.json
              </Install>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <div className="relative w-full flex-1 border-t py-10">
        <div className="absolute z-20 -top-3 left-10 px-2 py-1 bg-muted-foreground/30 rounded-sm">
          <p className="text-xs font-mono">Interactions</p>
        </div>
        <Marquee pauseOnHover className="[--duration:250s]">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex gap-10 flex-shrink-0">
              <div className="flex-shrink-0 w-[360px]">
                <SelectWallet
                  onReadMore={() => {}}
                  onSelectAccount={() => {}}
                />
              </div>
              <div className="flex-shrink-0 w-[360px]">
                <SelectWallet
                  loading
                  onReadMore={() => {}}
                  onSelectAccount={() => {}}
                />
              </div>
              <div className="flex-shrink-0 w-[360px]">
                <SelectAccount onBack={() => {}} />
              </div>
              <div className="flex-shrink-0 w-[360px]">
                <SelectAccount loading onBack={() => {}} />
              </div>
              <div className="flex-shrink-0 w-[360px]">
                <AboutWallets onBack={() => {}} />
              </div>
              <div className="flex-shrink-0 w-[360px]">
                <AboutWallets initialStep={1} onBack={() => {}} />
              </div>
            </div>
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </div>
  );
}

const Install = ({
  title,
  children,
}: PropsWithChildren<{ title?: string }>) => (
  <div className="flex flex-col gap-3">
    {title && (
      <span className="pl-4 text-xs font-medium text-muted-foreground">
        {title}
      </span>
    )}

    <div className="flex items-center justify-between p-4 bg-muted-foreground/5 border border-muted rounded-lg shadow-sm transition-all duration-200 hover:bg-muted-foreground/10">
      <p className="text-sm font-mono break-words max-w-[80%] text-foreground/80">
        {children}
      </p>
      <Copy side="top" value={typeof children === "string" ? children : ""}>
        <Button
          size="icon"
          variant="ghost"
          className="hover:bg-muted-foreground/20"
        >
          <CopyIcon className="w-4 h-4 text-muted-foreground" />
        </Button>
      </Copy>
    </div>
  </div>
);
