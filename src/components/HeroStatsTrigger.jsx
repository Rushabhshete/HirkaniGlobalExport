"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroStatsTrigger() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full h-100 lg:h-125"
    >
      <Image
        src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80"
        alt="Indian spices in wooden bowls"
        fill
        className="rounded-2xl shadow-xl object-cover"
        priority
      />

      {/* Simplified Badge from your original design */}
      <div className="absolute -bottom-4 -left-4 bg-white p-5 rounded-xl shadow-lg border border-orange-50">
        <p className="text-sm font-bold text-gray-900">50+ Countries</p>
        <p className="text-xs text-gray-500 font-medium">Worldwide Export</p>
      </div>
    </motion.div>
  );
}