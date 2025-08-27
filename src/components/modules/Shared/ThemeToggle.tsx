"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { LuSun } from "react-icons/lu";
import { FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  // Determine the actual theme
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="flex items-center justify-center w-10 h-10 rounded-full border border-black dark:border-white transition-colors duration-300 bg-white dark:bg-black hover:bg-gray-200 dark:hover:bg-gray-700"
      aria-label="Toggle Theme"
    >
      {currentTheme === "dark" ? <LuSun size={20} className="text-yellow-400" /> : <FaMoon size={20} className="text-gray-800" />}
    </button>
  );
};

export default ThemeToggle;
