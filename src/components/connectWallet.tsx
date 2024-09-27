"use client";

import { ChevronRight } from "lucide-react";

import { Button } from "./ui/button";
import { WalletCard } from "./walletCard";
import { useMultistep } from "./ui/multistep";

export function ConnectWallet({ loading = false }: { loading?: boolean }) {
  const { setView } = useMultistep();
  return (
    <section className="flex flex-col gap-6 p-6 h-fit w-full">
      <header className="flex flex-col gap-1 items-center">
        <h3 className="font-bold text-xl">Connect Wallet</h3>
        <span className="text-sm text-muted-foreground">
          Select what wallet you want to connect
        </span>
      </header>
      <div className="flex flex-col gap-2">
        {loading
          ? new Array(4)
              .fill(null)
              .map((_, i) => <WalletCard.Skeleton key={i} />)
          : wallets.map((wallet) => (
              <WalletCard
                key={wallet.name}
                icon={wallet.icon}
                active={wallet.active}
                onClick={() => setView("selectAccounts")}
                href={wallet.href}
              >
                {wallet.name}
              </WalletCard>
            ))}
      </div>
      <div className="pt-2 border-t">
        <Button
          onClick={() => setView("aboutWallets")}
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
