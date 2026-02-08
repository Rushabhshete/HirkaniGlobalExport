"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle({ className = "" }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = (resolvedTheme || "dark") === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className={`
        relative inline-flex h-7 w-12
        items-center rounded-full
        border border-border
        bg-accent
        transition-colors
        focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-ring
        ${mounted ? "" : "opacity-80"}
        ${className}
      `}
    >
      {/* Knob */}
      <span
        className={`
          absolute left-0.5 top-0.5
          h-6 w-6 rounded-full
          bg-background
          shadow-md
          flex items-center justify-center
          transition-transform duration-300 ease-out
          ${isDark ? "translate-x-5" : "translate-x-0"}
        `}
      >
        {isDark ? (
          <Moon className="h-3.5 w-3.5 text-foreground" />
        ) : (
          <Sun className="h-3.5 w-3.5 text-primary" />
        )}
      </span>
    </button>
  );
}
