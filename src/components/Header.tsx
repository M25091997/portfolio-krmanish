"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [dark, setDark] = useState(false);

  // Load theme from localStorage
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const isDark = !dark;
    setDark(isDark);

    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50
                    bg-white/80 dark:bg-gray-900
                    backdrop-blur border-b border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        {/* <Link
          href="/"
          className="text-xl font-bold text-violet-600 dark:text-violet-400"
        >
          Manish Kumar
        </Link> */}
         {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold"
        >
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-violet-500 text-white">
            KM
          </span>
          Manish Kumar
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-violet-500">
            Home
          </Link>
          <Link href="#about" className="hover:text-violet-500">
            About
          </Link>
          <Link href="#projects" className="hover:text-violet-500">
            Projects
          </Link>
          <Link href="#jobs" className="hover:text-violet-500">
            Jobs
          </Link>

          <Link
            href="/contact"
            className="px-5 py-2 rounded-lg bg-violet-500 text-white hover:bg-violet-600 transition"
          >
            Contact
          </Link>

          {/* Theme Toggle */}
         <ThemeToggle />
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700"
          >
            {dark ? "🌙" : "☀️"}
          </button>

          <Link
            href="/contact"
            className="px-4 py-2 rounded-lg bg-violet-500 text-white text-sm"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
