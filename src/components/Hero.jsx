"use client";

import Link from "next/link";
import ImageWithSkeleton from "@/components/ImageWithSkeleton";
import { TextBlurRotator } from "@/components/MotionWrapper";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-start overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithSkeleton
          src="/images/hero_background.png"
          alt="Agriculture Field"
          fill
          priority
          imageClassName="object-cover"
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="max-w-2xl text-white">
         <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up will-animate">
  <span className="block text-gold">Exporting Premium</span>

  <span className="block min-h-[1.25em] relative">
    <TextBlurRotator
      texts={[
        "Indian Spices",
        "Agricultural Products",
        "Herbal Products",
        "Dehydrated Products",
        "Healthy Snacks",
        "Handmade Products",
      ]}
    />
  </span>

  <span className="block">Worldwide</span>
</h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-8 animate-fade-up will-animate delay-100">
            Trusted supplier of spices, agricultural, herbal, and dehydrated products to global markets with exceptional quality and reliability.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-up will-animate delay-200">
            <Link
              href="/contact"
              className="px-8 py-3.5 text-base font-bold rounded-lg text-white bg-gradient-brand hover:brightness-110 transition shadow-lg"
            >
              Request Quote
            </Link>
            <Link
              href="/products"
              className="px-8 py-3.5 text-base font-bold rounded-lg text-white border-2 border-white/80 hover:bg-white/10 hover:border-white transition backdrop-blur-sm"
            >
              View Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
