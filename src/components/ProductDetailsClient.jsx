"use client";

import { useState, useEffect } from "react";
import ImageWithSkeleton from "@/components/ImageWithSkeleton";
import Link from "next/link";
import { CircleDot } from "lucide-react";
import { useCurrency } from "@/helper/CurrencyContext";
import ProductCard from "./ProductCard";
import { getRelatedProducts } from "@/data/products";

import { useRFQ } from "@/helper/RFQContext";

export default function ProductDetailsClient({ product }) {
  const { formatPrice, isLoading } = useCurrency();
  const [mainImage, setMainImage] = useState(product.image);
  const { addToRFQ, rfqItems } = useRFQ();

  useEffect(() => {
    setMainImage(product.image);
  }, [product.image]);

  const isAdded = rfqItems.some((item) => item.slug === product.slug);

  const thumbnails = product.images && product.images.length > 0 ? product.images : [product.image];

  const relatedProducts = getRelatedProducts(product);

  return (
    <div className="animate-fade-in will-animate">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        
        {/* LEFT: Image Gallery */}
        <div className="flex flex-col gap-4">
          <div className="relative w-full aspect-square md:aspect-video lg:aspect-square bg-surface border border-border rounded-2xl overflow-hidden shadow-sm">
            <ImageWithSkeleton
              src={mainImage}
              alt={product.name}
              fill
              priority
              imageClassName="object-cover"
            />
          </div>
          <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
            {thumbnails.map((thumb, idx) => (
              <button
                key={idx}
                onClick={() => setMainImage(thumb)}
                className={`relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all ${
                  mainImage === thumb ? "border-primary opacity-100" : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <ImageWithSkeleton src={thumb} alt={`Thumbnail ${idx + 1}`} fill imageClassName="object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT: Product Info */}
        <div className="flex flex-col">
          <div className="mb-2">
            <span className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold">
              {product.category}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{product.name}</h1>
          
          <div className="mb-6">
            {isLoading ? (
              <div className="h-10 w-32 bg-border animate-pulse rounded"></div>
            ) : (
              <div className="text-3xl font-black text-primary">
                {formatPrice(product.numericPrice)}{" "}
                <span className="text-lg font-medium text-foreground/60">/ {product.unit}</span>
              </div>
            )}
            <p className="text-sm text-foreground/50 mt-1">Min. Order: {product.minOrderQty}</p>
          </div>

          <p className="text-foreground/80 text-lg mb-8 leading-relaxed">
            {product.description}
          </p>

          <h3 className="text-xl font-bold text-foreground mb-4">Specifications</h3>
          <div className="bg-surface border border-border rounded-xl overflow-hidden mb-8">
            {Object.entries(product.specifications).map(([key, value], index) => (
              <div 
                key={key} 
                className={`flex px-4 py-3 ${index !== 0 ? 'border-t border-border' : ''} ${index % 2 === 0 ? 'bg-background/50' : ''}`}
              >
                <div className="w-1/3 flex items-center text-foreground/70 font-medium">
                  <CircleDot className="w-4 h-4 mr-2 text-primary" />
                  {key}
                </div>
                <div className="w-2/3 text-foreground font-semibold">
                  {value}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-auto">
            <Link
              href={isAdded ? "/contact?rfq=true" : `/contact?product=${encodeURIComponent(product.name)}`}
              className="flex-1 flex justify-center items-center px-8 py-4 bg-gradient-brand text-white font-bold rounded-lg hover:brightness-110 transition shadow-md shadow-gold-hover"
            >
              {isAdded ? "Review Bulk Quote" : "Request Single Quote"}
            </Link>
            <button
              onClick={() => addToRFQ(product)}
              className={`flex-1 flex justify-center items-center px-8 py-4 font-bold rounded-lg border-2 transition-all ${
                isAdded 
                  ? "bg-gold text-white border-gold shadow-gold drop-shadow-gold" 
                  : "border-primary text-primary hover:bg-primary/5"
              }`}
            >
              {isAdded ? "Added to RFQ ✓" : "Add to RFQ"}
            </button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="pt-16 border-t border-border">
          <h2 className="text-2xl font-bold text-foreground mb-8">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
