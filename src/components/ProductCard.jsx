"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
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
  const { formatPrice } = useCurrency();

  const displayPrice = useMemo(() => {
    if (!price && price !== 0) return "";

    // support numeric prices or strings like "$12.50/kg"
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
    >

<div className="relative h-48 w-full">
  <Image
    src={image}
    alt={name}
    fill
    sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 25vw"
    className="object-cover transition-transform duration-500 hover:scale-110"
  />
</div>

      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-medium px-2 py-1 rounded bg-green-100 text-green-700">
            {category}
          </span>
          <span className="text-xs text-gray-500">Origin: {origin}</span>
        </div>

        {isComingSoon && (
          <span className="text-xs font-semibold px-2 py-1 rounded bg-orange-100 text-orange-700">
            Coming Soon
          </span>
        )}

        <h3 className="text-lg font-semibold text-gray-900 mt-2">{name}</h3>
        <p className="text-sm text-gray-600 mt-2 line-clamp-2">{description}</p>

        <div className="flex items-center justify-between mt-4">
          <p className="text-orange-600 font-bold">{displayPrice}</p>
          {!isComingSoon && (
              <Link
                href={`/products/${encodeURIComponent(slug)}`}
                className="px-4 py-2 text-sm font-medium bg-orange-600 text-white rounded hover:bg-orange-700 transition-colors"
              >
              View Details
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
