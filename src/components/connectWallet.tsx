"use client";

import { WalletCard } from "./walletCard";

export function ConnectWallet() {
  return (
    <section className="flex flex-col gap-6 hover:bg-muted/30 bg-muted/20 duration-300 transition-colors border rounded-lg p-6 h-fit w-full">
      <header className="flex flex-col gap-1 items-center">
        <h3 className="font-bold text-xl">Connect Wallet</h3>
        <span className="text-sm text-muted-foreground">
          Select what wallet you want to connect
        </span>
      </header>
      <div className="flex flex-col gap-2 overflow-auto max-h-[285px]">
        <WalletCard icon="PolkadotJS" active>
          PolkadotJS
        </WalletCard>
        <WalletCard icon="Talisman" active>
          Talisman
        </WalletCard>
        <WalletCard icon="SubWallet">SubWallet</WalletCard>
        <WalletCard icon="Enkrypt">Enkrypt</WalletCard>
      </div>
    </section>
  );
}
