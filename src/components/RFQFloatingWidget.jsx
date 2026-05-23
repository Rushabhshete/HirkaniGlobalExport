"use client";

import { useState } from "react";
import { useRFQ } from "@/helper/RFQContext";
import { ShoppingBag, X, Trash2, Plus, Minus, Send } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function RFQFloatingWidget() {
  const { rfqItems, isHydrated, removeFromRFQ, updateQuantity, clearRFQ } = useRFQ();
  const [isOpen, setIsOpen] = useState(false);

  if (!isHydrated || rfqItems.length === 0) return null;

  const totalItems = rfqItems.length;

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-white shadow-lg shadow-gold/30 hover:bg-gold/90 transition-all duration-300 hover:scale-110 animate-bounce shadow-gold shadow-gold-hover"
        aria-label="View RFQ Cart"
      >
        <ShoppingBag className="h-6 w-6" />
        <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-white border-2 border-white">
          {totalItems}
        </span>
      </button>

      {/* Drawer Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer Panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-surface shadow-2xl border-l border-border transition-transform duration-300 ease-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border p-5 bg-background">
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-bold text-foreground">RFQ Cart (Bulk Inquiry)</h2>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-accent text-foreground/70"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {rfqItems.map((item) => (
              <div
                key={item.slug}
                className="flex items-center gap-4 rounded-xl border border-border bg-background p-3"
              >
                {/* Product Thumbnail */}
                <div className="relative h-16 w-16 overflow-hidden rounded-lg bg-accent flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm text-foreground truncate">{item.name}</h3>
                  <p className="text-xs text-foreground/60 mb-1.5">{item.category}</p>
                  
                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.slug, Math.max(0.1, item.quantity - 1))}
                      className="p-1 rounded border border-border hover:bg-accent text-foreground/70"
                      disabled={item.quantity <= 0.5}
                    >
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="text-xs font-bold text-foreground min-w-[50px] text-center">
                      {item.quantity} {item.unit}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.slug, item.quantity + 1)}
                      className="p-1 rounded border border-border hover:bg-accent text-foreground/70"
                    >
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                </div>

                {/* Delete Button */}
                <button
                  onClick={() => removeFromRFQ(item.slug)}
                  className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-full transition-colors flex-shrink-0"
                  aria-label={`Remove ${item.name} from RFQ`}
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="border-t border-border p-5 bg-background space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-foreground/70">Total Products Selected:</span>
              <span className="font-bold text-foreground">{totalItems}</span>
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={clearRFQ}
                className="flex-1 py-3 text-xs font-bold border border-border rounded-xl text-foreground/70 hover:bg-accent transition"
              >
                Clear All
              </button>
              <Link
                href="/contact?rfq=true"
                onClick={() => setIsOpen(false)}
                className="flex-[2] flex items-center justify-center gap-2 py-3 text-xs font-bold bg-gradient-brand text-white rounded-xl hover:brightness-110 shadow-md transition"
              >
                <Send className="h-3.5 w-3.5" /> Submit Quote Request
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
