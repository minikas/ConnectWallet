"use client";

import { ArrowLeft } from "lucide-react";
import {
  PropsWithChildren,
  useMemo,
  ComponentProps,
  useEffect,
  useState,
} from "react";
import { Copy as CopyIcon } from "lucide-react";

import { Icons } from "./connect-icons";

import { Copy } from "@/components/ui/copy";
import { Skeleton as SkeletonComponent } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

export const truncateString = (value: string, size = 8) => {
  const firstPart = value.slice(0, size);
  const lastPart = value.slice(value.length - size);

  return `${firstPart}...${lastPart}`;
};

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
    <section className="flex flex-col gap-6 py-6 h-fit w-full">
      <header className="flex justify-between gap-1 items-center px-6">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 scale-150" />
        </Button>
        <h3 className="font-bold text-md text-center flex-1">Select Account</h3>
        <div className="w-8" />
      </header>
      <div className="flex flex-col px-6 gap-2 overflow-auto max-h-[285px]">
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
          : new Array(4).fill(null).map((_, index) => <Skeleton key={index} />)}
      </div>
    </section>
  );
}

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

export function Profile(props: ComponentProps<"svg">) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 29" {...props}>
      <path
        opacity="0.4"
        d="M13.5011 5.17709C14.8561 5.17709 15.9545 4.07871 15.9545 2.7238C15.9545 1.36888 14.8561 0.270508 13.5011 0.270508C12.1463 0.270508 11.0479 1.36888 11.0479 2.7238C11.0479 4.07871 12.1463 5.17709 13.5011 5.17709Z"
        fill="currentColor"
      ></path>
      <path
        opacity="0.4"
        d="M13.5011 11.0648C14.8561 11.0648 15.9545 9.96639 15.9545 8.6115C15.9545 7.25658 14.8561 6.1582 13.5011 6.1582C12.1463 6.1582 11.0479 7.25658 11.0479 8.6115C11.0479 9.96639 12.1463 11.0648 13.5011 11.0648Z"
        fill="white"
      ></path>
      <path
        opacity="0.4"
        d="M8.40055 8.12143C9.75546 8.12143 10.8539 7.02305 10.8539 5.66814C10.8539 4.31322 9.75546 3.21484 8.40055 3.21484C7.04564 3.21484 5.94727 4.31322 5.94727 5.66814C5.94727 7.02305 7.04564 8.12143 8.40055 8.12143Z"
        fill="white"
      ></path>
      <path
        opacity="0.9"
        d="M3.30192 11.0648C4.65684 11.0648 5.75522 9.96639 5.75522 8.6115C5.75522 7.25658 4.65684 6.1582 3.30192 6.1582C1.94701 6.1582 0.848633 7.25658 0.848633 8.6115C0.848633 9.96639 1.94701 11.0648 3.30192 11.0648Z"
        fill="currentColor"
      ></path>
      <path
        opacity="0.9"
        d="M8.40055 14.0091C9.75546 14.0091 10.8539 12.9107 10.8539 11.5559C10.8539 10.2009 9.75546 9.10254 8.40055 9.10254C7.04564 9.10254 5.94727 10.2009 5.94727 11.5559C5.94727 12.9107 7.04564 14.0091 8.40055 14.0091Z"
        fill="white"
      ></path>
      <path
        opacity="0.4"
        d="M3.30192 16.9524C4.65684 16.9524 5.75522 15.8541 5.75522 14.4992C5.75522 13.1442 4.65684 12.0459 3.30192 12.0459C1.94701 12.0459 0.848633 13.1442 0.848633 14.4992C0.848633 15.8541 1.94701 16.9524 3.30192 16.9524Z"
        fill="white"
      ></path>
      <path
        opacity="0.9"
        d="M3.30192 22.8412C4.65684 22.8412 5.75522 21.7428 5.75522 20.3879C5.75522 19.033 4.65684 17.9346 3.30192 17.9346C1.94701 17.9346 0.848633 19.033 0.848633 20.3879C0.848633 21.7428 1.94701 22.8412 3.30192 22.8412Z"
        fill="currentColor"
      ></path>
      <path
        opacity="0.9"
        d="M8.40055 19.8959C9.75546 19.8959 10.8539 18.7975 10.8539 17.4425C10.8539 16.0877 9.75546 14.9893 8.40055 14.9893C7.04564 14.9893 5.94727 16.0877 5.94727 17.4425C5.94727 18.7975 7.04564 19.8959 8.40055 19.8959Z"
        fill="white"
      ></path>
      <path
        opacity="0.4"
        d="M8.40055 25.7855C9.75546 25.7855 10.8539 24.6871 10.8539 23.3323C10.8539 21.9773 9.75546 20.8789 8.40055 20.8789C7.04564 20.8789 5.94727 21.9773 5.94727 23.3323C5.94727 24.6871 7.04564 25.7855 8.40055 25.7855Z"
        fill="white"
      ></path>
      <path
        opacity="0.4"
        d="M13.5011 28.7289C14.8561 28.7289 15.9545 27.6305 15.9545 26.2756C15.9545 24.9207 14.8561 23.8223 13.5011 23.8223C12.1463 23.8223 11.0479 24.9207 11.0479 26.2756C11.0479 27.6305 12.1463 28.7289 13.5011 28.7289Z"
        fill="currentColor"
      ></path>
      <path
        opacity="0.4"
        d="M13.5011 22.8412C14.8561 22.8412 15.9545 21.7428 15.9545 20.3879C15.9545 19.033 14.8561 17.9346 13.5011 17.9346C12.1463 17.9346 11.0479 19.033 11.0479 20.3879C11.0479 21.7428 12.1463 22.8412 13.5011 22.8412Z"
        fill="white"
      ></path>
      <path
        opacity="0.4"
        d="M18.5998 25.7855C19.9547 25.7855 21.0531 24.6871 21.0531 23.3323C21.0531 21.9773 19.9547 20.8789 18.5998 20.8789C17.2449 20.8789 16.1465 21.9773 16.1465 23.3323C16.1465 24.6871 17.2449 25.7855 18.5998 25.7855Z"
        fill="white"
      ></path>
      <path
        opacity="0.9"
        d="M23.6985 22.8412C25.0533 22.8412 26.1517 21.7428 26.1517 20.3879C26.1517 19.033 25.0533 17.9346 23.6985 17.9346C22.3435 17.9346 21.2451 19.033 21.2451 20.3879C21.2451 21.7428 22.3435 22.8412 23.6985 22.8412Z"
        fill="currentColor"
      ></path>
      <path
        opacity="0.9"
        d="M18.5998 19.8959C19.9547 19.8959 21.0531 18.7975 21.0531 17.4425C21.0531 16.0877 19.9547 14.9893 18.5998 14.9893C17.2449 14.9893 16.1465 16.0877 16.1465 17.4425C16.1465 18.7975 17.2449 19.8959 18.5998 19.8959Z"
        fill="white"
      ></path>
      <path
        opacity="0.4"
        d="M23.6985 16.9524C25.0533 16.9524 26.1517 15.8541 26.1517 14.4992C26.1517 13.1442 25.0533 12.0459 23.6985 12.0459C22.3435 12.0459 21.2451 13.1442 21.2451 14.4992C21.2451 15.8541 22.3435 16.9524 23.6985 16.9524Z"
        fill="white"
      ></path>
      <path
        opacity="0.9"
        d="M23.6985 11.0648C25.0533 11.0648 26.1517 9.96639 26.1517 8.6115C26.1517 7.25658 25.0533 6.1582 23.6985 6.1582C22.3435 6.1582 21.2451 7.25658 21.2451 8.6115C21.2451 9.96639 22.3435 11.0648 23.6985 11.0648Z"
        fill="currentColor"
      ></path>
      <path
        opacity="0.9"
        d="M18.5998 14.0091C19.9547 14.0091 21.0531 12.9107 21.0531 11.5559C21.0531 10.2009 19.9547 9.10254 18.5998 9.10254C17.2449 9.10254 16.1465 10.2009 16.1465 11.5559C16.1465 12.9107 17.2449 14.0091 18.5998 14.0091Z"
        fill="white"
      ></path>
      <path
        opacity="0.4"
        d="M18.5998 8.12143C19.9547 8.12143 21.0531 7.02305 21.0531 5.66814C21.0531 4.31322 19.9547 3.21484 18.5998 3.21484C17.2449 3.21484 16.1465 4.31322 16.1465 5.66814C16.1465 7.02305 17.2449 8.12143 18.5998 8.12143Z"
        fill="white"
      ></path>
      <path
        d="M13.5011 16.9524C14.8561 16.9524 15.9545 15.8541 15.9545 14.4992C15.9545 13.1442 14.8561 12.0459 13.5011 12.0459C12.1463 12.0459 11.0479 13.1442 11.0479 14.4992C11.0479 15.8541 12.1463 16.9524 13.5011 16.9524Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}
