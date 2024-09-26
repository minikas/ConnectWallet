"use client";

import Link from "next/link";

import { ToogleMode } from "@/components/toogleMode";
import { ConnectWallet } from "@/components/connectWallet";
import { AboutWallets } from "@/components/aboutWallets";
import { SelectAccount } from "@/components/selectAccount";
import { Multistep } from "@/components/multistep";
import Marquee from "@/components/ui/marquee";

export default function Home() {
  return (
    <div className=" min-h-screen flex flex-col gap-2">
      <div className="flex-1 w-full max-w-md mx-auto flex flex-col items-center p-4 sm:p-10 gap-10 min-h-[670px]">
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
        <Multistep />
        <ToogleMode />
      </div>
      <div className="relative w-full flex-1 overflow-hidden border-t py-10">
        <Marquee pauseOnHover className="[--duration:250s]">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex gap-10 flex-shrink-0">
              <div className="flex-shrink-0 w-[360px]">
                <ConnectWallet onNext={() => {}} onGetInfo={() => {}} />
              </div>
              <div className="flex-shrink-0 w-[360px]">
                <ConnectWallet onNext={() => {}} onGetInfo={() => {}} loading />
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
                <AboutWallets onBack={() => {}} initialStep={1} />
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
