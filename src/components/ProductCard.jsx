"use client";

import Link from "next/link";
import ImageWithSkeleton from "@/components/ImageWithSkeleton";
import { useCurrency } from "@/helper/CurrencyContext";
import { useRFQ } from "@/helper/RFQContext";
import { TiltCard } from "./MotionWrapper";

export default function ProductCard({ slug, name, image, numericPrice, unit, category }) {
  const { formatPrice, isLoading } = useCurrency();
  const { addToRFQ, rfqItems } = useRFQ();

  const isAdded = rfqItems.some((item) => item.slug === slug);

  const handleAddRFQ = (e) => {
    e.preventDefault();
    addToRFQ({ slug, name, image, category, unit, minOrderQty: "1" });
  };

  return (
    <TiltCard className="group flex flex-col bg-surface border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
      <Link href={`/products/${encodeURIComponent(slug)}`} className="relative h-52 w-full overflow-hidden block">
        <ImageWithSkeleton
          src={image}
          alt={name}
          fill
          imageClassName="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full shadow-sm">
          {category}
        </div>
      </Link>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-1">{name}</h3>
        
        <div className="mb-4">
          {isLoading ? (
            <div className="h-6 w-24 bg-border animate-pulse rounded"></div>
          ) : (
            <span className="text-xl font-black text-primary">
              {formatPrice(numericPrice)} <span className="text-sm font-medium text-foreground/60">/ {unit}</span>
            </span>
          )}
        </div>
        
        <div className="mt-auto flex gap-2">
          <Link 
            href={`/products/${encodeURIComponent(slug)}`}
            className="flex-1 inline-flex items-center justify-center px-3 py-2.5 text-xs font-bold text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-colors text-center"
          >
            Details
          </Link>
          <button 
            onClick={handleAddRFQ}
            className={`flex-1 inline-flex items-center justify-center px-3 py-2.5 text-xs font-bold rounded-lg border transition-all text-center ${
              isAdded 
                ? "bg-gold text-white border-gold shadow-gold drop-shadow-gold" 
                : "bg-surface border-border text-foreground hover:bg-accent"
            }`}
          >
            {isAdded ? "Added ✓" : "Add to RFQ"}
          </button>
        </div>
      </div>
    </TiltCard>
  );
}
