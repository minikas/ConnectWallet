"use client";

import { ArrowLeft } from "lucide-react";

import { Button } from "./ui/button";
import { Wallet } from "./icons";

export function AboutWallets({ onBack }: { onBack: () => void }) {
  return (
    <section className="flex flex-col gap-6 p-6 h-fit w-full">
      <header className="flex justify-between gap-1 items-center">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 scale-150" />
        </Button>
        <h3 className="font-bold text-md text-center flex-1">About Wallets</h3>
        <div className="w-8" />
      </header>
      <div className="flex flex-col items-center gap-2">
        <Wallet className="w-44" />
        <h4 className="font-bold text-lg">Your wallet, your keys</h4>
        <p className="text-sm text-muted-foreground/80 text-center">
          Wallets securely store your private keys, enabling safe management of
          digital assets and interaction with blockchain applications.
        </p>
      </div>
      <div className="flex items-center justify-center gap-2 my-5">
        <div className="w-7 h-1 bg-white rounded-full" />
        <div className="w-5 h-1 bg-white rounded-full opacity-15" />
        <div className="w-5 h-1 bg-white rounded-full opacity-15" />
      </div>
    </section>
  );
}
