import Link from "next/link";
import { Leaf, ArrowRight } from "lucide-react";
import NavLink from "./NavLink";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo - Static */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="bg-orange-600 p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900">
              Spice<span className="text-orange-600">Export</span>
            </span>
          </Link>

          {/* Desktop Navigation - Uses Client NavLinks */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-1">
              {navigation.map((item) => (
                <NavLink key={item.name} href={item.href}>
                  {item.name}
                </NavLink>
              ))}
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold rounded-full text-white bg-gray-900 hover:bg-orange-600 transition-all shadow-sm"
            >
              Get a Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Mobile Navigation - Client Component */}
          <MobileMenu navigation={navigation} />

        </div>
      </nav>
    </header>
  );
}