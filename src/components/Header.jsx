"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ShoppingBag } from "lucide-react";
import NavLink from "./NavLink";
import CurrencySelector from "./CurrencySelector";
import ThemeToggle from "./ThemeToggle";
import { useRFQ } from "@/helper/RFQContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const { rfqItems, isHydrated } = useRFQ();

  const productCategories = [
    { name: "Spices", href: "/products?category=Spices" },
    { name: "Agricultural Products", href: "/products?category=Agricultural+Products" },
    { name: "Herbal Products", href: "/products?category=Herbal+Products" },
    { name: "Dehydrated Products", href: "/products?category=Dehydrated+Products" },
    { name: "Snacks", href: "/products?category=Snacks" },
    { name: "Handmade Products", href: "/products?category=Handmade+Products" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-surface border-b border-border shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 xl:px-8">
        <div className="flex justify-between items-center h-20">
          {/* LOGO */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/fourzaa_logo_new.png"
              alt="Fourzaa Global"
              width={50}
              height={50}
              className="object-contain lg:w-[45px] lg:h-[45px] xl:w-[50px] xl:h-[50px]"
              priority
            />
            <span className="ml-2 flex flex-col items-start">
              <span className="text-lg lg:text-base xl:text-xl font-bold text-primary leading-none">Fourzaa</span>
              <span className="text-xs lg:text-[10px] xl:text-sm font-semibold text-gold -mt-0.5">Global</span>
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-1">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About Us</NavLink>
            
            {/* Products Dropdown */}
            <div className="relative group"
                 onMouseEnter={() => setIsProductsOpen(true)}
                 onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button 
                className="flex items-center px-3 lg:px-1.5 xl:px-3 py-2 text-sm font-semibold whitespace-nowrap text-foreground/70 hover:text-primary transition-colors"
              >
                Products <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {/* Dropdown Menu */}
              <div 
                className={`absolute left-0 top-full mt-0 w-60 bg-surface border border-border rounded-b-md shadow-lg transition-all duration-200 z-50 overflow-hidden ${
                  isProductsOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
              >
                <div className="py-2">
                  <Link href="/products" className="block px-4 py-3 text-sm text-primary font-bold hover:bg-accent border-b border-border/50">
                    All Products
                  </Link>
                  {productCategories.map((cat) => (
                    <Link
                      key={cat.name}
                      href={cat.href}
                      className="block px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-accent transition-colors"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <NavLink href="/export-process">Export Process</NavLink>
            <NavLink href="/certifications">Certifications</NavLink>
            <NavLink href="/private-labeling">Private Labeling</NavLink>
            <NavLink href="/contact">Contact Us</NavLink>
          </div>

          {/* RIGHT SIDE: CURRENCY & CTA */}
          <div className="hidden lg:flex items-center space-x-1.5 xl:space-x-4">
            <ThemeToggle />
            {isHydrated && rfqItems.length > 0 && (
              <Link
                href="/contact?rfq=true"
                className="relative p-2 rounded-full hover:bg-accent text-foreground/80 transition-colors mr-1"
                title="View RFQ Cart"
              >
                <ShoppingBag className="h-5 w-5 text-primary" />
                <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[9px] font-bold text-white border border-white">
                  {rfqItems.length}
                </span>
              </Link>
            )}
            <CurrencySelector />
            <Link
              href={isHydrated && rfqItems.length > 0 ? "/contact?rfq=true" : "/contact"}
              className="inline-flex items-center px-4 py-2 lg:px-3 lg:py-2 lg:text-xs xl:px-6 xl:py-2.5 xl:text-sm font-bold rounded-full text-white bg-gradient-brand hover:brightness-110 transition shadow-md whitespace-nowrap shadow-gold-hover"
            >
              {isHydrated && rfqItems.length > 0 ? "Review Quote" : "Request Quote"}
            </Link>
          </div>

          {/* MOBILE CONTROLS */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            {isHydrated && rfqItems.length > 0 && (
              <Link
                href="/contact?rfq=true"
                className="relative p-2 rounded-full hover:bg-accent text-foreground/80 transition-colors"
                title="View RFQ Cart"
              >
                <ShoppingBag className="h-5 w-5 text-primary" />
                <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[9px] font-bold text-white border border-white">
                  {rfqItems.length}
                </span>
              </Link>
            )}
            <CurrencySelector />
            <button
              onClick={() => setIsMenuOpen((v) => !v)}
              className="p-2 rounded-md hover:bg-accent transition text-foreground"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full max-h-[calc(100vh-5rem)] overflow-y-auto py-4 border-b border-border bg-surface shadow-xl z-50 animate-fade-down">
            <div className="flex flex-col space-y-2 px-4 sm:px-6">
              <NavLink href="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
              <NavLink href="/about" onClick={() => setIsMenuOpen(false)}>About Us</NavLink>
              <div className="px-4 py-2 font-semibold text-foreground/70">Products</div>
              <div className="pl-8 flex flex-col space-y-2 border-l-2 border-border ml-4">
                <Link href="/products" onClick={() => setIsMenuOpen(false)} className="text-sm font-bold text-primary">All Products</Link>
                {productCategories.map((cat) => (
                  <Link
                    key={cat.name}
                    href={cat.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-sm text-foreground/70 hover:text-primary"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
              <NavLink href="/export-process" onClick={() => setIsMenuOpen(false)}>Export Process</NavLink>
              <NavLink href="/certifications" onClick={() => setIsMenuOpen(false)}>Certifications</NavLink>
              <NavLink href="/private-labeling" onClick={() => setIsMenuOpen(false)}>Private Labeling</NavLink>
              <NavLink href="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</NavLink>
              
              <div className="pt-4 pb-2">
                <Link
                  href={isHydrated && rfqItems.length > 0 ? "/contact?rfq=true" : "/contact"}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex justify-center w-full px-4 py-3 font-bold text-white rounded-full bg-gradient-brand hover:brightness-110 shadow-md"
                >
                  {isHydrated && rfqItems.length > 0 ? "Review Quote" : "Request Quote"}
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
