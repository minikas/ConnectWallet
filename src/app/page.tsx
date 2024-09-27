import type { Metadata } from "next";

import Screen from "./screen";

export const metadata: Metadata = {
  title: "Connect Wallet Demo",
  description:
    "A Next.js application demonstrating a 'Connect Wallet' component UI for Substrate-based wallets such as Polkadot.js and Talisman.",
};

export default function Home() {
  return <Screen />;
}
