"use client";

import { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCurrency } from "@/helper/CurrencyContext";

export default function ProductCard({
  slug,
  name,
  image,
  price,
  category,
  description,
  origin = "India",
  isComingSoon = false,
}) {
  const { formatPrice, isLoading } = useCurrency();

  const displayPrice = useMemo(() => {
    if (!price && price !== 0) return "";

    let unit = "";
    let numericValue = 0;

    if (typeof price === "number") {
      numericValue = price;
    } else if (typeof price === "string") {
      const match = price.match(/[\d.,]+/);
      numericValue = match ? parseFloat(match[0].replace(/,/g, "")) : 0;
      if (price.includes("/")) {
        const parts = price.split("/");
        unit = parts[1] ? `/${parts[1]}` : "";
      }
    }

    return `${formatPrice(numericValue)}${unit}`;
  }, [price, formatPrice]);

  return (
    <div
      className="
        bg-surface
        rounded-xl
        border border-border
        overflow-hidden
        shadow-sm
        hover:shadow-lg
        transition
        animate-fade-up will-animate
        hover:-translate-y-1
      "
    >
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 hover:scale-105"
          quality={70}
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Meta */}
        <div className="flex justify-between items-center mb-2">
          <span
            className="
              text-xs font-medium
              px-2 py-1 rounded-full
            glass glass-thick
              glass-text-muted
            "
          >
            {category}
          </span>

          <span className="text-xs glass-text-muted">
            Origin: {origin}
          </span>
        </div>

        {isComingSoon && (
          <span
            className="
              inline-block mt-1
              text-xs font-semibold
              px-2 py-1 rounded-full
             glass glass-thick
              
            "
          >
            Coming Soon
          </span>
        )}

        <h3 className="text-lg font-semibold text-foreground mt-2">
          {name}
        </h3>

        <p className="text-sm glass-text-muted mt-2 line-clamp-2">
          {description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4">
          <p className="text-primary font-bold">
            {isLoading ? (
              <span className="inline-block animate-pulse bg-gray-300 h-5 w-20 rounded"></span>
            ) : (
              displayPrice
            )}
          </p>

          {!isComingSoon && (
            <Link
              href={`/products/${encodeURIComponent(slug)}`}
              className="
                px-4 py-2
                text-sm font-medium
                rounded-md
                text-white
                bg-gradient-brand
                hover:brightness-110
                transition
              "
            >
              View Details
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
