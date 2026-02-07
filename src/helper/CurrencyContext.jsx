"use client";

import { createContext, useContext, useState, useEffect } from "react";

const CurrencyContext = createContext();

const CURRENCY_MAP = {
  IN: { code: "INR", symbol: "₹", rate: 83.0 },
  GB: { code: "GBP", symbol: "£", rate: 0.79 },
  DE: { code: "EUR", symbol: "€", rate: 0.92 },
  FR: { code: "EUR", symbol: "€", rate: 0.92 },
  AE: { code: "AED", symbol: "د.إ", rate: 3.67 },
  US: { code: "USD", symbol: "$", rate: 1.0 },
};

export function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState(CURRENCY_MAP.US);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const detectRegion = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        
        if (data.country_code && CURRENCY_MAP[data.country_code]) {
          setCurrency(CURRENCY_MAP[data.country_code]);
        } else if (data.continent_code === "EU") {
          setCurrency(CURRENCY_MAP.DE);
        }
      } catch (error) {
        console.error("Failed to detect region:", error);
      } finally {
        setIsLoading(false);
      }
    };

    detectRegion();
  }, []);

  const formatPrice = (usdAmount) => {
    const converted = usdAmount * currency.rate;
    try {
      return new Intl.NumberFormat(undefined, {
        style: "currency",
        currency: currency.code,
        minimumFractionDigits: 2,
      }).format(converted);
    } catch (e) {
      // fallback
      return `${currency.symbol}${Number(converted).toFixed(2)}`;
    }
  };

  return (
    <CurrencyContext.Provider value={{ currency, formatPrice, isLoading }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
}