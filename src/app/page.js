import Hero from "@/components/Hero";
import { products } from "@/data/products";
import Link from "next/link";
import HomeSectionsClient from "@/components/HomeSectionsClient";

export default function Home() {
  const featuredProducts = products
    .filter((p) => !p.isComingSoon)
    .slice(0, 3);

  return (
    <main className="bg-background">
      {/* HERO */}
      <Hero />

      {/* SECTIONS */}
      <HomeSectionsClient featuredProducts={featuredProducts} />

      {/* =====================
          FINAL CTA
          ===================== */}
      <section className="relative py-20 overflow-hidden">
        {/* Gradient backdrop */}
        <div className="absolute inset-0 -z-10 bg-gradient-brand opacity-90" />

        {/* Soft overlay for contrast */}
        <div className="absolute inset-0 -z-10 bg-black/10 dark:bg-black/30" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-up will-animate">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 ">
            Ready to Import Premium Spices?
          </h2>

          <p className="text-lg sm:text-xl  mb-10 max-w-2xl mx-auto">
            Contact us today for bulk pricing and custom export solutions tailored
            to your business needs.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* Primary CTA */}
            <Link
              href="/contact"
              className="
                inline-flex items-center justify-center
                  px-6 py-3 rounded-lg
                  font-medium text-white
                  bg-gradient-brand
                  hover:brightness-110
                  transition
                  group
              "
            >
              Get Export Quote
            </Link>

            {/* Secondary CTA */}
            <Link
              href="/products"
              className="
                inline-flex items-center justify-center
                  px-8 py-3 rounded-xl
                  bg-surface border border-border
                  font-semibold
                  hover:bg-accent
                  transition
              "
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
