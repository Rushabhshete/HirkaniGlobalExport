import Link from "next/link";
import { products } from "@/data/products"; //
import { ChevronRight, Globe, Shield, Package } from "lucide-react";

export const metadata = {
  title: "Sitemap | Spice Export Co.",
  description: "A complete map of all pages, products, and legal policies on the Spice Export Co. website.",
};

export default function Sitemap() {
  const mainLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Refund Policy", href: "/refund-policy" },
    { name: "Shipping Policy", href: "/shipping-policy" },
    { name: "Cookie Policy", href: "/cookie-policy" },
  ];

  return (
    <main className="py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-12">Sitemap</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-sans">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <Globe className="mr-2 text-orange-600 h-5 w-5" /> Main Pages
            </h2>
            <ul className="space-y-4">
              {mainLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="flex items-center text-gray-600 hover:text-orange-600 transition-colors">
                    <ChevronRight className="h-4 w-4 mr-2" /> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <Package className="mr-2 text-orange-600 h-5 w-5" /> Products
            </h2>
            <ul className="space-y-4">
              {products.map((product) => (
                <li key={product.slug}>
                  <Link href={`/products/${product.slug}`} className="flex items-center text-gray-600 hover:text-orange-600 transition-colors">
                    <ChevronRight className="h-4 w-4 mr-2" /> {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <Shield className="mr-2 text-orange-600 h-5 w-5" /> Legal
            </h2>
            <ul className="space-y-4">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="flex items-center text-gray-600 hover:text-orange-600 transition-colors">
                    <ChevronRight className="h-4 w-4 mr-2" /> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}