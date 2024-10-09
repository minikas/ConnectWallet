"use client";

import { ChevronRight } from "lucide-react";
import { PropsWithChildren } from "react";

import { Skeleton as SkeletonComponent } from "./ui/skeleton";
import { Icons } from "./connect-icons";
import { Button } from "./ui/button";

import { cn } from "@/lib/utils";

export function SelectWallet({
  loading = false,
  onSelectAccount,
  onReadMore,
}: {
  loading?: boolean;
  onSelectAccount: () => void;
  onReadMore: () => void;
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
        {loading
          ? new Array(4).fill(null).map((_, i) => <Skeleton key={i} />)
          : wallets.map((wallet) => (
              <WalletCard
                key={wallet.name}
                icon={wallet.icon}
                active={wallet.active}
                onClick={onSelectAccount}
                href={wallet.href}
              >
                {wallet.name}
              </WalletCard>
            ))}
      </div>
      <div className="pt-2 border-t">
        <Button
          onClick={onReadMore}
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

function WalletCard({
  icon,
  active,
  onClick,
  href,
  children,
}: PropsWithChildren<{
  icon: string;
  active?: boolean;
  onClick?: () => void;
  href: string;
}>) {
  const IconComponent = Icons[icon as keyof typeof Icons];
  return (
    <div
      role={active ? "button" : undefined}
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
          <a href={href} target="_blank">
            Setup
          </a>
        </Button>
      )}
    </div>
  );
}

const Skeleton = () => (
  <div className="flex items-center justify-between gap-2 p-3 rounded-lg bg-muted-foreground/10">
    <div className="flex items-center gap-3">
      <SkeletonComponent className="w-7 h-7 rounded-full" />
      <SkeletonComponent className="h-4 w-24" />
    </div>
  </div>
);

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
