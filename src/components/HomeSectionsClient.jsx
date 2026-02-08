"use client";

import { Package, Shield, Truck, Award } from "lucide-react";
import ProductCard from "@/components/ProductCard";

export default function HomeSectionsClient({ featuredProducts }) {
  return (
    <>
      {/* =====================
          WHY CHOOSE US
          ===================== */}
      <section className="py-16 bg-surface">
        {/* Heading */}
        <div className="max-w-7xl mx-auto px-4 text-center mb-12 animate-fade-up will-animate">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Why Choose Us
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Reliable Indian spice exports with global compliance.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
          <Feature
            icon={Package}
            title="Premium Quality"
            delay="delay-100"
          />
          <Feature
            icon={Shield}
            title="Certified Export"
            delay="delay-200"
          />
          <Feature
            icon={Truck}
            title="Global Shipping"
            delay="delay-300"
          />
          <Feature
            icon={Award}
            title="5+ Years Experience"
            delay="delay-400"
          />
        </div>
      </section>

      {/* =====================
          FEATURED PRODUCTS
          ===================== */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-foreground animate-fade-up will-animate">
            Featured Products
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={product.slug}
                className={`animate-fade-up will-animate delay-${(index + 1) * 100}`}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* =====================
   Feature Item
   ===================== */

function Feature({ icon: Icon, title, delay }) {
  return (
    <div
      className={`text-center animate-fade-up will-animate ${delay}`}
    >
      <Icon className="h-10 w-10 mx-auto mb-3 text-primary" />
      <h3 className="font-semibold text-foreground">{title}</h3>
    </div>
  );
}
