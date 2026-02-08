import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/data/products";
import { ChevronLeft } from "lucide-react";
import ProductDetailsClient from "@/components/ProductDetailsClient";

export default async function ProductDetailsPage({ params }) {
  const { slug } = params;

  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="py-12 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <div className="mb-6 animate-fade-up will-animate">
          <Link
            href="/products"
            className="
              inline-flex items-center
              text-sm font-medium
              text-foreground/70
              hover:text-primary
              transition
            "
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back to products
          </Link>
        </div>

        {/* Product details */}
        <ProductDetailsClient product={product} />
      </div>
    </main>
  );
}
