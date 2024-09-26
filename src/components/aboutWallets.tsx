"use client";

import { ArrowLeft } from "lucide-react";
import { useMemo, useState } from "react";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useAnimation,
  PanInfo,
} from "framer-motion";
import useMeasure from "react-use-measure";

import { Button } from "./ui/button";
import { Blockchain, Wallet } from "./icons";

import { cn } from "@/lib/utils";

export function AboutWallets({ onBack }: { onBack: () => void }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(0);

  const [ref, bounds] = useMeasure();
  const controls = useAnimation();

  const content = useMemo(() => {
    switch (currentStep) {
      case 0:
        return <WalletComponent />;
      case 1:
        return <Web3Component />;
      default:
        break;
    }
  }, [currentStep]);

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const threshold = 50;
    if (info.offset.x > threshold && currentStep > 0) {
      setDirection(-1);
      setCurrentStep((prev) => prev - 1);
    } else if (info.offset.x < -threshold && currentStep < 1) {
      setDirection(1);
      setCurrentStep((prev) => prev + 1);
    } else {
      controls.start({ x: 0 });
    }
  };

  return (
    <section className="flex flex-col gap-6 p-6 h-fit w-full overflow-hidden">
      <header className="flex justify-between gap-1 items-center">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 scale-150" />
        </Button>
        <h3 className="font-bold text-md text-center flex-1">About Wallets</h3>
        <div className="w-8" />
      </header>
      <MotionConfig transition={{ duration: 0.5, type: "spring", bounce: 0 }}>
        <motion.div animate={{ height: bounds.height }}>
          <div ref={ref} style={{ position: "relative" }}>
            <AnimatePresence
              mode="popLayout"
              initial={false}
              custom={direction}
            >
              <motion.div
                key={currentStep}
                variants={variants}
                initial="initial"
                animate="active"
                exit="exit"
                custom={direction}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
              >
                {content}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </MotionConfig>
      <div className="flex items-center justify-center my-2">
        <Action
          active={currentStep === 0}
          onClick={() => {
            if (!currentStep) return;
            setDirection(-1);
            setCurrentStep((prev) => prev - 1);
          }}
        />
        <Action
          active={currentStep === 1}
          onClick={() => {
            if (currentStep === 2) {
              setCurrentStep(0);
              setDirection(-1);
              return;
            }
            setDirection(1);
            setCurrentStep((prev) => prev + 1);
          }}
        />
      </div>
    </section>
  );
}

const Action = ({
  active,
  onClick,
}: {
  active: boolean;
  onClick: () => void;
}) => (
  <Button
    className="bg-transparent hover:bg-transparent px-1 py-2 group"
    onClick={onClick}
  >
    <div
      className={cn(
        "w-7 h-1 p-0 rounded-full group-hover:scale-y-[3] transition-transform duration-300",
        active ? "bg-primary" : "bg-muted hover:bg-muted"
      )}
    />
  </Button>
);
const variants = {
  initial: (direction: number) => {
    return { x: `${110 * direction}%`, opacity: 0 };
  },
  active: { x: "0%", opacity: 1 },
  exit: (direction: number) => {
    return { x: `${-110 * direction}%`, opacity: 0 };
  },
};

function WalletComponent() {
  return (
    <div className="flex flex-col items-center gap-2">
      <Wallet className="w-56" />
      <h4 className="font-bold text-lg">Your wallet, your keys</h4>
      <p className="text-sm text-muted-foreground/80 text-center">
        Wallets securely store your private keys, enabling safe management of
        digital assets and interaction with blockchain applications.
      </p>
    </div>
  );
}

function Web3Component() {
  return (
    <div className="flex flex-col items-center gap-2">
      <Blockchain className="w-56 mb-5" />
      <h4 className="font-bold text-lg">Discover the Polkadot Universe</h4>
      <p className="text-sm text-muted-foreground/80 text-center">
        Dive into the Polkadot network to connect, build, and innovate across a
        thriving ecosystem of interoperable blockchains.
      </p>
    </div>
  );
}
