import { type PropsWithChildren, useRef, useState } from "react";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface AnimatedNavBtnProps extends PropsWithChildren {
  href: string;
}

export const AnimatedNavBtn = ({ href, children }: AnimatedNavBtnProps) => {
  const [isHidden, setIsHidden] = useState(false);

  const { scrollY } = useScroll();

  const prevYRef = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    const diff = y - prevYRef.current;
    if (Math.abs(diff) > 50) {
      setIsHidden(diff > 0);
      prevYRef.current = y;
    }
  });

  return (
    <motion.a
      href={href}
      className={cn(
        buttonVariants({
          className: "bg-transparent hover:bg-transparent text-xs",
          variant: "primary",
          size: "sm",
        }),
      )}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
      animate={isHidden ? "hidden" : "visible"}
      onFocusCapture={() => setIsHidden(false)}
      transition={{ duration: 0.2 }}
      whileHover="visible"
    >
      {children}
    </motion.a>
  );
};
