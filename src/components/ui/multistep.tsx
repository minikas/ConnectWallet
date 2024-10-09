"use client";

import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useMemo,
  useRef,
  useState,
  createContext,
  Fragment,
  Children,
  isValidElement,
  ReactNode,
} from "react";
import useMeasure from "react-use-measure";
import { AnimatePresence, motion } from "framer-motion";

const Multistep = ({
  initialView,
  children,
}: PropsWithChildren<{ initialView: string }>) => {
  const [view, setView] = useState(initialView);
  const [elementRef, bounds] = useMeasure();
  const previousHeightRef = useRef(0);

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

  const content = useMemo(() => {
    const childArray = Children.toArray(children);
    return childArray.find((child) => {
      if (!isValidElement(child)) return;

      const childKey = child?.key?.replace(/^\.\$/, "");
      return childKey === view;
    });
  }, [children, view]);

  return (
    <Context.Provider value={{ view, setView }}>
      <motion.div
        className="w-full hover:bg-muted/30 bg-muted/20 duration-300 transition-colors border rounded-lg h-fit"
        animate={{
          height: bounds.height,
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
    </Context.Provider>
  );
};

const Step = ({ children }: { children: ReactNode }) => {
  return <Fragment>{children}</Fragment>;
};

type State = {
  view: string;
  setView: Dispatch<SetStateAction<string>>;
};

const Context = createContext<State>({
  view: "",
  setView: () => {},
});

export const useMultistep = () => {
  const state = useContext(Context);
  if (!state) {
    throw new Error("useMultistep must be used within a Multistep component");
  }
  return state;
};

Multistep.Step = Step;
export { Multistep };
