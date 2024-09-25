"use client";

import { ArrowLeft } from "lucide-react";

import { Button } from "./ui/button";
import { SelectAccountCard } from "./selectAccountCard";

export function SelectAccount() {
  return (
    <section className="flex flex-col gap-6 hover:bg-muted/30 bg-muted/20 duration-300 transition-colors border rounded-lg py-6 h-fit w-full">
      <header className="flex justify-between gap-1 items-center px-6">
        <Button variant="ghost" size="icon">
          <ArrowLeft className="w-4 h-4 scale-150" />
        </Button>
        <h3 className="font-bold text-md text-center flex-1">Select Wallet</h3>
        <div className="w-8" />
      </header>
      <div className="flex flex-col px-3 gap-2">
        <SelectAccountCard address="5FUT9bza2Q7VKeW28CtbQjBTJSb6jQzAus1eRvRpsNEjPAZa">
          My Wallet
        </SelectAccountCard>
        <SelectAccountCard address="5FUT9bza2Q7VKeW28CtbQjBTJSb6jQzAus1eRvRpsNEjPAZa">
          Wallt test
        </SelectAccountCard>
      </div>
    </section>
  );
}
