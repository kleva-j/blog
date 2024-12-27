import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

interface IconToggleProps {
  onToggle?: (toggled: boolean) => void;
}

export const IconToggle = (props: IconToggleProps) => {
  const [theme, setThemeState] = useState<"theme-light" | "dark" | "system">(
    "theme-light",
  );

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setThemeState(isDarkMode ? "dark" : "theme-light");
  }, []);

  useEffect(() => {
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  }, [theme]);

  const handleClick = () => {
    if (theme === "theme-light") setThemeState("dark");
    else setThemeState("theme-light");
  };

  const isLightMode = theme === "theme-light";

  return (
    <MotionConfig transition={{ duration: 0.2, type: "tween", ease: "easeIn" }}>
      <AnimatePresence initial={false}>
        <motion.button
          className={cn(
            "relative isolate flex items-center h-7 w-11 cursor-pointer border rounded-full duration-200",
            !isLightMode
              ? "bg-neutral-950/40 border-neutral-500/20"
              : "bg-gray-300 border-transparent",
          )}
          onClick={handleClick}
          type="button"
        >
          <motion.div
            animate={{
              x: isLightMode ? "7%" : "100%",
              scale: isLightMode ? 1 : 0.99,
            }}
            className={cn(
              "flex items-center justify-center rounded-full bg-white dark:bg-neutral-950/30 shadow-lg transition-all duration-200 size-5",
            )}
          >
            <span className="relative grid place-items-center">
              <Sun
                size={15}
                strokeWidth={3}
                className={cn(
                  "h-full w-full p-1 text-gray-500 transition-opacity duration-200",
                  isLightMode ? "opacity-100" : "opacity-0",
                )}
              />
              <Moon
                size={13}
                strokeWidth={2}
                className={cn(
                  "absolute left-0 top-0 h-full w-full p-[1px] text-gray-500 transition-opacity duration-200",
                  isLightMode ? "opacity-0" : "opacity-100",
                )}
              />
            </span>
          </motion.div>
        </motion.button>
      </AnimatePresence>
    </MotionConfig>
  );
};

export default IconToggle;
