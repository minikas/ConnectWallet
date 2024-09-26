"use client";

import { useMemo, useState } from "react";
import useMeasure from "react-use-measure";
import { AnimatePresence, motion } from "framer-motion";

import { ConnectWallet } from "./connectWallet";
import { AboutWallets } from "./aboutWallets";
import { SelectAccount } from "./selectAccount";

export const Multistep = () => {
  const [view, setView] = useState("default");
  const [elementRef, bounds] = useMeasure();

  const content = useMemo(() => {
    switch (view) {
      case "selectAccounts":
        return <SelectAccount onBack={() => setView("default")} />;
      case "aboutWallets":
        return <AboutWallets onBack={() => setView("default")} />;

      default:
        return (
          <ConnectWallet
            onNext={() => setView("selectAccounts")}
            onGetInfo={() => setView("aboutWallets")}
          />
        );
    }
  }, [view]);

  return (
    <AnimatePresence initial={false} mode="popLayout" custom={view}>
      <motion.div
        key={view}
        ref={elementRef}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.27, ease: [0.26, 0.08, 0.25, 1] }}
      >
        {content}
      </motion.div>
    </AnimatePresence>
  );
};
