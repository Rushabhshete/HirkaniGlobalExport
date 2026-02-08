"use client";

import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";

export default function NotFoundClient({ suggestedProducts = [] }) {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-16 bg-background">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-down will-animate">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-accent/60 mb-8">
            <Search className="h-12 w-12 text-primary" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Oops! This Spice is Missing
          </h1>

          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-10">
            We couldn’t find the page you’re looking for. It may have been moved,
            or the recipe for this link has changed. Let’s get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Primary CTA */}
            <Link
              href="/"
              className="
                px-8 py-4 rounded-md font-semibold
                text-white
                bg-gradient-brand
                hover:brightness-110
                transition
              "
            >
              Back to Home
            </Link>

            {/* Secondary CTA */}
            <Link
              href="/products"
              className="
                px-8 py-4 rounded-md font-semibold
                text-primary
                border border-border
                hover:bg-accent/40
                transition
                inline-flex items-center justify-center
              "
            >
              Explore Our Spices
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Suggestions */}
        <section className="border-t border-border pt-16 animate-fade-up will-animate delay-200">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Try these authentic flavors instead
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {suggestedProducts.map((product) => (
              <ProductCard key={product.slug} {...product} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
