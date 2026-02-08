"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function MobileMenu({ navigation }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden relative">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        className="
          p-2 rounded-xl
          text-foreground
          hover:bg-accent
          transition
        "
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Menu Panel */}
      {isOpen && (
        <div
          className="
            absolute left-0 right-0 top-14
            z-50
            glass glass-thick
            animate-fade-down will-animate
            border-t border-border
          "
        >
          <div className="flex flex-col space-y-2 p-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="
                  px-4 py-3 rounded-xl
                  text-base font-semibold
                  text-foreground
                  hover:bg-accent
                  transition
                "
              >
                {item.name}
              </Link>
            ))}

            {/* Theme toggle row */}
            <div className="px-4 py-2 flex items-center justify-between">
              <ThemeToggle />
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="
                text-center
                px-4 py-4 mt-2 rounded-xl
                font-bold text-white
                bg-gradient-brand
                hover:brightness-110
                transition
              "
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
