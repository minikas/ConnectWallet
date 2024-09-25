import Link from "next/link";

import { ToogleMode } from "@/components/toogleMode";
import { ConnectWallet } from "@/components/connectWallet";
import { AboutWallets } from "@/components/aboutWallets";
import { SelectAccount } from "@/components/selectAccount";

export default function Home() {
  return (
    <div className=" min-h-screen p-2 sm:p-10 flex flex-col">
      <div className="flex-1 w-full max-w-md mx-auto border rounded-lg flex flex-col items-center p-10 gap-16">
        <header className="flex gap-2 items-center ">
          <div className="w-7 h-7 bg-pink-500 rounded-full" />
          <p className="text-xs font-mono">
            Taught by
            <Link
              target="_blank"
              href="https://github.com/minikas"
              className="ml-2 font-bold text-pink-500"
            >
              Kas Ferreira
            </Link>
          </p>
        </header>
        <main className="flex gap-10 flex-col w-full flex-1">
          <SelectAccount />
          <AboutWallets />
          <ConnectWallet />
        </main>
        <footer>
          <ToogleMode />
        </footer>
      </div>
    </div>
  );
}
