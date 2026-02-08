"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus, Minus } from "lucide-react";
import { useCurrency } from "@/helper/CurrencyContext";

export default function ProductDetailsClient({ product }) {
  const [mainImage, setMainImage] = useState(product.image);
  const [quantity, setQuantity] = useState(1);
  const [packagingOption, setPackagingOption] = useState(
    product.packaging?.[0]
  );

  const { formatPrice } = useCurrency();

  const gallery = [
    product.image,
    "https://placehold.co/800x400",
    "https://placehold.co/800x400",
  ];

  const basePrice = useMemo(() => {
    const match = product.price.match(/[\d.,]+/);
    return match ? parseFloat(match[0].replace(/,/g, "")) : 0;
  }, [product.price]);

  const packagingCosts = {
    "1kg bags": 0.5,
    "5kg bags": 1.8,
    "25kg bulk": 6.0,
    "500g bags": 0.35,
    "250g jars": 0.4,
    "500g jars": 0.7,
    "1kg containers": 1.2,
    "200g jars": 0.3,
    "400g jars": 0.6,
  };

  const fob = +(basePrice * quantity).toFixed(2);
  const packagingCost = +(
    (packagingCosts[packagingOption] || 0.5) * quantity
  ).toFixed(2);
  const logistics = +(fob * 0.1).toFixed(2);
  const total = +(fob + packagingCost + logistics).toFixed(2);

  const increase = () => setQuantity((q) => q + 1);
  const decrease = () => setQuantity((q) => Math.max(1, q - 1));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* =====================
          GALLERY
          ===================== */}
      <div className="animate-fade-up will-animate">
        <div className="glass rounded-xl overflow-hidden">
          <Image
            src={mainImage}
            alt={product.name}
            width={800}
            height={400}
            className="w-full h-72 object-cover"
          />

          <div className="p-4 flex gap-2 overflow-x-auto">
            {gallery.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setMainImage(img)}
                className={`
                  w-20 h-20 rounded-md overflow-hidden
                  border transition
                  ${
                    mainImage === img
                      ? "border-primary"
                      : "border-border hover:border-primary/50"
                  }
                `}
              >
                <Image
                  src={img}
                  alt={`${product.name} ${idx + 1}`}
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* =====================
          DETAILS
          ===================== */}
      <div className="lg:col-span-2 animate-fade-up will-animate delay-100">
        <h1 className="text-2xl font-bold text-foreground mb-2">
          {product.name}
        </h1>

        <p className="text-sm glass-text-subtle mb-4">
          Origin: India • Export Quality
        </p>

        <p className="glass-text-muted mb-6">
          {product.description}
        </p>

        {/* =====================
            PACKAGING & PRICING
            ===================== */}
        <div className="bg-accent p-6 rounded-xl mb-6">
          <h3 className="text-lg font-semibold mb-4 text-foreground">
            Packaging & Pricing
          </h3>

          {/* Packaging */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-foreground">
              Packaging Option
            </label>

            <div className="flex flex-wrap gap-2">
              {product.packaging?.map((p) => (
                <button
                  key={p}
                  onClick={() => setPackagingOption(p)}
                  className={`
                    px-3 py-2 rounded-full text-sm transition
                    ${
                      packagingOption === p
                        ? "bg-primary text-primary-foreground"
                        : "bg-background border border-border hover:bg-accent"
                    }
                  `}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2 text-foreground">
              Quantity
            </label>

            <div className="inline-flex items-center border border-border rounded-md bg-background">
              <button
                onClick={decrease}
                className="px-3 py-2 hover:bg-accent transition"
              >
                <Minus className="h-4 w-4" />
              </button>

              <input
                type="number"
                value={quantity}
                min={1}
                onChange={(e) =>
                  setQuantity(Math.max(1, Number(e.target.value || 1)))
                }
                className="
                  w-20 text-center py-2
                  border-x border-border
                  bg-background
                  focus:outline-none
                "
              />

              <button
                onClick={increase}
                className="px-3 py-2 hover:bg-accent transition"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Pricing */}
          <div className="border-t border-border pt-4 space-y-2 text-sm text-foreground">
            <div className="flex justify-between">
              <span>FOB</span>
              <span>{formatPrice(fob)}</span>
            </div>
            <div className="flex justify-between">
              <span>Packaging</span>
              <span>{formatPrice(packagingCost)}</span>
            </div>
            <div className="flex justify-between">
              <span>Logistics</span>
              <span>{formatPrice(logistics)}</span>
            </div>
            <div className="flex justify-between font-semibold text-base">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>
          </div>
        </div>

        {/* =====================
            CTA
            ===================== */}
        <Link
          href={`/contact?product=${encodeURIComponent(
            product.name
          )}&quantity=${quantity}`}
          className="
            inline-flex items-center justify-center
            px-6 py-3 rounded-md
            font-semibold
            text-white
            bg-gradient-brand
            hover:brightness-110
            transition
          "
        >
          Request Quote
        </Link>
      </div>
    </div>
  );
}
