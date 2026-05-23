"use client";

import { createContext, useContext, useState, useEffect } from "react";

const RFQContext = createContext();

export function RFQProvider({ children }) {
  const [rfqItems, setRfqItems] = useState([]);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("fourzaa_rfq_cart");
      if (stored) {
        setRfqItems(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Error loading RFQ cart from localStorage", e);
    }
    setIsHydrated(true);
  }, []);

  // Save to localStorage when items change
  useEffect(() => {
    if (!isHydrated) return;
    try {
      localStorage.setItem("fourzaa_rfq_cart", JSON.stringify(rfqItems));
    } catch (e) {
      console.error("Error saving RFQ cart to localStorage", e);
    }
  }, [rfqItems, isHydrated]);

  const addToRFQ = (product) => {
    setRfqItems((prev) => {
      const existing = prev.find((item) => item.slug === product.slug);
      if (existing) {
        return prev; // Already in RFQ
      }
      
      // Parse a default number from minOrderQty if possible, e.g. "1 Ton" -> 1
      let defaultQty = 1;
      if (product.minOrderQty) {
        const parsed = parseFloat(product.minOrderQty);
        if (!isNaN(parsed)) defaultQty = parsed;
      }

      return [
        ...prev,
        {
          slug: product.slug,
          name: product.name,
          image: product.image,
          category: product.category,
          unit: product.unit || "Ton",
          quantity: defaultQty,
        },
      ];
    });
  };

  const removeFromRFQ = (slug) => {
    setRfqItems((prev) => prev.filter((item) => item.slug !== slug));
  };

  const updateQuantity = (slug, quantity) => {
    setRfqItems((prev) =>
      prev.map((item) =>
        item.slug === slug ? { ...item, quantity: Math.max(0.1, quantity) } : item
      )
    );
  };

  const clearRFQ = () => {
    setRfqItems([]);
  };

  return (
    <RFQContext.Provider
      value={{
        rfqItems,
        isHydrated,
        addToRFQ,
        removeFromRFQ,
        updateQuantity,
        clearRFQ,
      }}
    >
      {children}
    </RFQContext.Provider>
  );
}

export function useRFQ() {
  const context = useContext(RFQContext);
  if (!context) {
    throw new Error("useRFQ must be used within an RFQProvider");
  }
  return context;
}
