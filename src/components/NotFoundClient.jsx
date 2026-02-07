"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";

export default function NotFoundClient({ suggestedProducts = [] }) {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-16 bg-white">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-orange-50 mb-8">
            <Search className="h-12 w-12 text-orange-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Oops! This Spice is Missing
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            We couldn't find the page you're looking for. It might have been
            moved, or perhaps the recipe for this link has changed. Let's get
            you back on track!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-8 py-4 bg-orange-600 text-white rounded-md font-semibold hover:bg-orange-700 transition-all shadow-md hover:shadow-lg"
            >
              Back to Home
            </Link>
            <Link
              href="/products"
              className="px-8 py-4 border-2 border-orange-600 text-orange-600 rounded-md font-semibold hover:bg-orange-50 transition-all inline-flex items-center justify-center"
            >
              Explore Our Spices
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-t border-gray-100 pt-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Try these authentic flavors instead
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {suggestedProducts.map((product) => (
              <ProductCard key={product.slug} {...product} />
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
}
