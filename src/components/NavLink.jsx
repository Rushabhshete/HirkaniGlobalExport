"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children, onClick }) {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`relative px-3 lg:px-1.5 xl:px-3 py-2 text-sm font-semibold whitespace-nowrap transition-colors ${
        isActive ? "text-primary" : "text-foreground/70 hover:text-primary"
      }`}
    >
      {children}
      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-full" />
      )}
    </Link>
  );
}
