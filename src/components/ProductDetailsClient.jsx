"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus, Minus } from "lucide-react";
import { useCurrency } from "@/helper/CurrencyContext";

export default function ProductDetailsClient({ product }) {
  const [mainImage, setMainImage] = useState(product.image);
  const { formatPrice } = useCurrency();
  const [quantity, setQuantity] = useState(1);
  const [packagingOption, setPackagingOption] = useState(
    product.packaging?.[0],
  );

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
      {/* Gallery */}
      <div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
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
                className={`w-20 h-20 rounded-md overflow-hidden border transition-colors ${
                  mainImage === img ? "border-orange-600" : "border-gray-200"
                }`}
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

      {/* Details */}
      <div className="lg:col-span-2">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          {product.name}
        </h1>
        <p className="text-sm text-gray-500 mb-4">
          Origin: India • Export Quality
        </p>

        <p className="text-gray-700 mb-6">{product.description}</p>

        {/* Packaging */}
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4">Packaging & Pricing</h3>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Packaging Option
            </label>
            <div className="flex flex-wrap gap-2">
              {product.packaging?.map((p) => (
                <button
                  key={p}
                  onClick={() => setPackagingOption(p)}
                  className={`px-3 py-2 rounded-full text-sm transition-colors ${
                    packagingOption === p
                      ? "bg-orange-600 text-white"
                      : "bg-white border hover:bg-gray-100"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Quantity</label>
            <div className="inline-flex items-center border rounded-md bg-white">
              <button onClick={decrease} className="px-3 py-2 hover:bg-gray-50">
                <Minus className="h-4 w-4" />
              </button>
              <input
                type="number"
                value={quantity}
                min={1}
                onChange={(e) =>
                  setQuantity(Math.max(1, Number(e.target.value || 1)))
                }
                className="w-20 text-center border-x py-2 focus:outline-none"
              />
              <button onClick={increase} className="px-3 py-2 hover:bg-gray-50">
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="border-t pt-4 space-y-2 text-sm">
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

        {/* CTA */}
        <div className="flex gap-3">
          <Link
            href={`/contact?product=${encodeURIComponent(
              product.name,
            )}&quantity=${quantity}`}
            className="px-6 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
          >
            Request Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
