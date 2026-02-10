"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import NavLink from "./NavLink";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* backdrop for glass */}
      <div className="absolute inset-0 -z-10 bg-gradient-brand opacity-10 dark:opacity-20" />

      <div className="glass glass-thick">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* LOGO */}
            <Link href="/" className="flex items-center ">
              <Image
                src="/fourzaalogo.png"
                alt="Fourzaa Global"
                width={50}
                height={50}
                className="object-contain"
                priority
                sizes="50px"
                quality={80}
              />
              <span className="text-lg sm:text-xl font-bold text-foreground">
                Fourzaa
                <span className="bg-gradient-brand bg-clip-text text-transparent">
                  Global
                </span>
              </span>
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex space-x-1">
                {navigation.map((item) => (
                  <NavLink key={item.name} href={item.href} className="group">
                    {item.name}
                  </NavLink>
                ))}
              </div>

              {/* THEME SWITCH (single source) */}
              <ThemeToggle />

              {/* CTA */}
              <Link
                href="/contact"
                className="
                  inline-flex items-center
                  px-5 py-2.5
                  text-sm font-bold
                  rounded-full
                  text-white
                  bg-gradient-brand
                  hover:brightness-110
                  transition
                "
              >
                Get a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* MOBILE CONTROLS */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />

              <button
                onClick={() => setIsMenuOpen((v) => !v)}
                className="p-2 rounded-md hover:bg-accent transition text-foreground"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* MOBILE MENU */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border glass animate-fade-down">
              <div className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                ))}

                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="
                    inline-flex justify-center
                    px-4 py-2
                    font-bold text-white
                    rounded-full
                    bg-gradient-brand
                    hover:brightness-110
                  "
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
