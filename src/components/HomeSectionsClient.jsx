"use client";

import { motion } from "framer-motion";
import { Package, Shield, Truck, Award } from "lucide-react";
import ProductCard from "@/components/ProductCard";

export default function HomeSectionsClient({ featuredProducts }) {
  return (
    <>
      <section className="py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Reliable Indian spice exports with global compliance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto px-4"
        >
          <Feature icon={Package} title="Premium Quality" />
          <Feature icon={Shield} title="Certified Export" />
          <Feature icon={Truck} title="Global Shipping" />
          <Feature icon={Award} title="15+ Years Experience" />
        </motion.div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">
            Featured Products
          </h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {featuredProducts.map((p) => (
              <ProductCard key={p.slug} {...p} />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

/* ---------- Helper ---------- */

function Feature({ icon: Icon, title }) {
  return (
    <div className="text-center">
      <Icon className="h-10 w-10 mx-auto text-orange-600 mb-3" />
      <h3 className="font-semibold">{title}</h3>
    </div>
  );
}