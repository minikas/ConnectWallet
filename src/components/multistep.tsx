"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import useMeasure from "react-use-measure";
import { AnimatePresence, motion } from "framer-motion";

import { ConnectWallet } from "./connectWallet";
import { AboutWallets } from "./aboutWallets";
import { SelectAccount } from "./selectAccount";

export const Multistep = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const [view, setView] = useState("default");
  const [elementRef, bounds] = useMeasure();
  const previousHeightRef = useRef(0);

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

  // Adjusts the duration of the opacity animation
  // based on the height difference between renders
  const opacityDuration = useMemo(() => {
    const MIN_DURATION = 0.15;
    const MAX_DURATION = 0.27;

    if (!previousHeightRef.current) {
      previousHeightRef.current = bounds.height;
      return MIN_DURATION;
    }

    const heightDifference = Math.abs(
      bounds.height - previousHeightRef.current
    );
    previousHeightRef.current = bounds.height;

    const duration = Math.min(
      Math.max(heightDifference / 500, MIN_DURATION),
      MAX_DURATION
    );

    return duration;
  }, [bounds.height]);

  return (
    <motion.div
      className="w-full hover:bg-muted/30 bg-muted/20 duration-300 transition-colors border rounded-lg h-fit"
      animate={{
        height: mounted ? "auto" : bounds.height,
        transition: {
          duration: 0.27,
          ease: [0.25, 1, 0.5, 1],
        },
      }}
    >
      <div ref={elementRef}>
        <AnimatePresence initial={false} mode="popLayout" custom={view}>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96 }}
            key={view}
            transition={{
              duration: opacityDuration,
              ease: [0.26, 0.08, 0.25, 1],
            }}
          >
            {content}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
