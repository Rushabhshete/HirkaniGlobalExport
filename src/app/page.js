import Hero from "@/components/Hero";
import { products } from "@/data/products";
import Link from "next/link";
import HomeSectionsClient from "@/components/HomeSectionsClient";

export default function Home() {
  const featuredProducts = products.filter((p) => !p.isComingSoon).slice(0, 3);

  return (
    <main className="bg-white">
      <Hero />

      <HomeSectionsClient featuredProducts={featuredProducts} />

      <section className="py-16 bg-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Import Premium Spices?
          </h2>
          <p className="text-lg sm:text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Contact us today for bulk pricing and custom export solutions tailored
            to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-orange-600 bg-white hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-600"
            >
              Get Export Quote
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-orange-700 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-600"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
