"use client";

import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "./ui/button";
import { SelectAccountCard } from "./selectAccountCard";

type Account = {
  address: string;
  provider: string;
  balance: string;
  name: string;
};
export function SelectAccount({
  loading,
  onBack,
}: {
  loading?: boolean;
  onBack: () => void;
}) {
  const [accounts, setAccounts] = useState<Account[]>(
    loading ? [] : fakeAccounts
  );

  useEffect(() => {
    if (accounts.length || loading) return;
    const clear = setTimeout(() => setAccounts(fakeAccounts), 5000);
    return () => clearTimeout(clear);
  }, [accounts, loading]);

  return (
    <section className="flex flex-col gap-6 hover:bg-muted/30 bg-muted/20 duration-300 transition-colors border rounded-lg py-6 h-fit w-full">
      <header className="flex justify-between gap-1 items-center px-6">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 scale-150" />
        </Button>
        <h3 className="font-bold text-md text-center flex-1">Select Account</h3>
        <div className="w-8" />
      </header>

      <div className="flex flex-col px-3 gap-2 overflow-auto max-h-[285px]">
        {!!accounts.length
          ? accounts.map((account) => (
              <SelectAccountCard
                key={account.address}
                address={account.address}
                provider={account.provider}
                balance={account.balance}
              >
                {account.name}
              </SelectAccountCard>
            ))
          : new Array(4)
              .fill(null)
              .map((_, index) => <SelectAccountCard.Skeleton key={index} />)}
      </div>
    </section>
  );
}

const fakeAccounts: Account[] = [
  {
    address: "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",
    provider: "PolkadotJS",
    balance: "1000",
    name: "Alice's PolkadotJS",
  },
  {
    address: "5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty",
    provider: "Talisman",
    balance: "2500",
    name: "Bob's Talisman",
  },
  {
    address: "5DAAnrj7VHTznn2AWBemMuyBwZWs6FNFjdyVXUeYum3PTXFy",
    provider: "SubWallet",
    balance: "750",
    name: "Charlie's SubWallet",
  },
  {
    address: "5CiPPseXPECbkjWCa6MnjNokrgYjMqmKndv2rSnekmSK2DjL",
    provider: "PolkadotJS",
    balance: "3200",
    name: "Dave's PolkadotJS",
  },
  {
    address: "5FLSigC9HGRKVhB9FiEo4Y3koPsNmBmLJbpXg2mp1hXcS59Y",
    provider: "SubWallet",
    balance: "1800",
    name: "Eve's SubWallet",
  },
];
