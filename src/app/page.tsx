import Link from "next/link";

import { ToogleMode } from "@/components/toogleMode";

export default function Home() {
  return (
    <div className=" min-h-screen p-2 sm:p-10 flex flex-col">
      <div className="flex-1 w-full max-w-md mx-auto border rounded-lg grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-10 gap-16">
        <header>
          <ToogleMode />
        </header>
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          Main
        </main>
        <footer className="row-start-3 flex gap-2 items-center ">
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
        </footer>
      </div>
    </div>
  );
}
