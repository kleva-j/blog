import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function ModeToggle() {
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

  const bgColor = theme === "theme-light" ? "#ffffff" : "#272727";

  const handleClick = () => {
    if (theme === "theme-light") setThemeState("dark");
    else setThemeState("theme-light");
  };

  return (
    <div className="size-full rounded-[14px] flex items-center justify-center">
      <MotionConfig
        transition={{ duration: 0.4, type: "tween", ease: "easeInOut" }}
      >
        <AnimatePresence initial={false}>
          <motion.button
            className={`relative isolate flex items-center rounded-full p-2 border ${
              theme === "theme-light" ? "justify-end" : "justify-start"
            }`}
            animate={{ backgroundColor: bgColor }}
            style={{ height: 100, width: 200 }}
            onClick={handleClick}
          >
            <motion.div
              className="absolute left-0 -z-10 flex w-full justify-between text-xl font-medium tracking-[0.0475rem]"
              animate={{
                color: theme === "theme-light" ? "#797979" : "#A2A2A2",
              }}
            >
              <span className="flex w-full justify-center">light</span>
              <span className="flex w-full justify-center">dark</span>
            </motion.div>

            <motion.div
              layout
              className="flex aspect-square h-full rounded-full border-2 p-2 shadow-[0px_12px_43px_0px_rgba(0,0,0,0.70)]"
              animate={{
                backgroundColor:
                  theme === "theme-light" ? "#ffffff" : "#363636",
                borderColor: theme === "theme-light" ? "#D8D8D8" : "#535353",
              }}
            >
              <motion.div
                className="h-full w-full rounded-full"
                animate={{
                  color: theme === "theme-light" ? "#D6D6D6" : "#464646",
                  boxShadow:
                    theme === "theme-light"
                      ? "2px 80px 72.5px -31px rgba(0, 0, 0, 0.2) inset, 0px 4px 13.4px 0px rgba(0, 0, 0, 0.43)"
                      : "2px 80px 72.5px -31px rgba(0, 0, 0, 0.49) inset, 0px 4px 13.4px 0px rgba(0, 0, 0, 0.43)",
                }}
              />
            </motion.div>
          </motion.button>
        </AnimatePresence>
      </MotionConfig>
    </div>
  );
}
