"use client";

import { ChevronRight } from "lucide-react";

import { Button } from "./ui/button";
import { WalletCard } from "./walletCard";

export function ConnectWallet({
  onNext,
  onGetInfo,
}: {
  onNext: () => void;
  onGetInfo: () => void;
}) {
  return (
    <section className="flex flex-col gap-6 p-6 h-fit w-full">
      <header className="flex flex-col gap-1 items-center">
        <h3 className="font-bold text-xl">Connect Wallet</h3>
        <span className="text-sm text-muted-foreground">
          Select what wallet you want to connect
        </span>
      </header>
      <div className="flex flex-col gap-2">
        {wallets.map((wallet) => (
          <WalletCard
            key={wallet.name}
            icon={wallet.icon}
            active={wallet.active}
            onClick={onNext}
            href={wallet.href}
          >
            {wallet.name}
          </WalletCard>
        ))}
      </div>
      <div className="pt-2 border-t">
        <Button
          onClick={onGetInfo}
          variant="link"
          className="flex items-center justify-between gap-2 text-muted-foreground/60 w-full"
        >
          <span>Read more about wallets</span>
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </section>
  );
}

const wallets = [
  {
    name: "PolkadotJS",
    href: "https://polkadot.js.org/extension/",
    icon: "PolkadotJS",
    active: true,
  },
  {
    name: "Talisman",
    href: "https://www.talisman.xyz/",
    icon: "Talisman",
    active: true,
  },
  {
    name: "SubWallet",
    href: "https://www.subwallet.app/",
    icon: "SubWallet",
    active: false,
  },
  {
    name: "Enkrypt",
    href: "https://www.enkrypt.com/",
    icon: "Enkrypt",
    active: false,
  },
];
