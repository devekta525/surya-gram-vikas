"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handle = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(handle);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full border border-border/40 bg-card/20 backdrop-blur-md animate-pulse" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex items-center justify-center w-10 h-10 rounded-full border border-border/40 bg-card/30 hover:bg-card/80 backdrop-blur-md text-foreground transition-all duration-300 hover:scale-105 active:scale-95 group focus:outline-none"
      aria-label="Toggle Theme"
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: -10, opacity: 0, rotate: -45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 10, opacity: 0, rotate: 45 }}
          transition={{ duration: 0.2 }}
          className="relative z-10"
        >
          {isDark ? (
            <Sun className="w-5 h-5 text-amber-400 group-hover:rotate-45 transition-transform duration-500" />
          ) : (
            <Moon className="w-5 h-5 text-slate-700 group-hover:-rotate-12 transition-transform duration-500" />
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  );
}
