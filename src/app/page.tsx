import Link from "next/link";

import { ToogleMode } from "@/components/toogleMode";
import { ConnectWallet } from "@/components/connectWallet";
import { AboutWallets } from "@/components/aboutWallets";
import { SelectAccount } from "@/components/selectAccount";

export default function Home() {
  return (
    <div className=" min-h-screen flex flex-col gap-2">
      <div className="flex-1 w-full max-w-md mx-auto flex flex-col items-center p-10 gap-10">
        <header className="flex gap-2 items-center ">
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
        </header>
        <main className="flex gap-10 flex-col w-full flex-1">
          <ConnectWallet />
        </main>
        <footer>
          <ToogleMode />
        </footer>
      </div>
      <div className="relative w-full flex-1 overflow-hidden border-t p-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
        <div className="flex gap-10 animate-carousel">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex gap-10 flex-shrink-0">
              <div className="flex-shrink-0 w-[360px]">
                <ConnectWallet />
              </div>
              <div className="flex-shrink-0 w-[360px]">
                <SelectAccount />
              </div>
              <div className="flex-shrink-0 w-[360px]">
                <SelectAccount loading />
              </div>
              <div className="flex-shrink-0 w-[360px]">
                <AboutWallets />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
