"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children, className = "", ...props }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      {...props}
      className={`
        relative px-4 py-2 text-sm font-semibold
        transition-colors
        ${
          isActive
            ? "text-primary"
            : "text-foreground/70 hover:text-primary"
        }
        ${className}
      `}
    >
      {children}

      {/* Animated underline */}
      <span
        className={`
          absolute left-1/2 -translate-x-1/2 bottom-0
          h-0.5 rounded-full
          bg-primary
          transition-all duration-300 ease-out
          ${
            isActive
              ? "w-6 opacity-100"
              : "w-0 opacity-0 group-hover:w-6 group-hover:opacity-100"
          }
        `}
      />
    </Link>
  );
}
