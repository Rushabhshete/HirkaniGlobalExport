"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";

const CurrencyContext = createContext();

export const CURRENCIES = {
  US: { code: "USD", symbol: "$", rate: 1.0, flagCode: "us" },
  IN: { code: "INR", symbol: "₹", rate: 83.0, flagCode: "in" },
  GB: { code: "GBP", symbol: "£", rate: 0.79, flagCode: "gb" },
  DE: { code: "EUR", symbol: "€", rate: 0.92, flagCode: "eu" },
  AE: { code: "AED", symbol: "د.إ", rate: 3.67, flagCode: "ae" },
  SA: { code: "SAR", symbol: "﷼", rate: 3.75, flagCode: "sa" },
  JP: { code: "JPY", symbol: "¥", rate: 154.0, flagCode: "jp" },
  CA: { code: "CAD", symbol: "C$", rate: 1.36, flagCode: "ca" },
  AU: { code: "AUD", symbol: "A$", rate: 1.53, flagCode: "au" },
};

// Deduplicated list for the selector dropdown
export const CURRENCY_OPTIONS = [
  CURRENCIES.US,
  CURRENCIES.IN,
  CURRENCIES.GB,
  CURRENCIES.DE, // EUR
  CURRENCIES.AE,
  CURRENCIES.SA,
  CURRENCIES.JP,
  CURRENCIES.CA,
  CURRENCIES.AU,
];

export function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState(CURRENCIES.US);
  const [isLoading, setIsLoading] = useState(true);
  const [locale, setLocale] = useState("en-US");

  const setCurrencyByCode = useCallback((code) => {
    const found = CURRENCY_OPTIONS.find((c) => c.code === code);
    if (found) setCurrency(found);
  }, []);

  useEffect(() => {
    setLocale(navigator.language || "en-US");

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    const detectRegion = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/", {
          signal: controller.signal,
        });
        const data = await res.json();

        if (data.country_code && CURRENCIES[data.country_code]) {
          setCurrency(CURRENCIES[data.country_code]);
        } else if (data.continent_code === "EU") {
          setCurrency(CURRENCIES.DE);
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          console.warn("Currency detection failed, using USD:", error.message);
        }
      } finally {
        clearTimeout(timeoutId);
        setIsLoading(false);
      }
    };

    detectRegion();

    return () => {
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, []);

  const formatPrice = useCallback(
    (usdAmount) => {
      if (usdAmount == null || isNaN(usdAmount)) return "";
      const converted = usdAmount * currency.rate;
      try {
        const numStr = Number(converted).toLocaleString(locale, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        });
        // We explicitly prepend the symbol to ensure it always shows correctly across operating systems
        return `${currency.symbol}${numStr}`;
      } catch {
        return `${currency.symbol}${Number(converted).toFixed(2)}`;
      }
    },
    [currency, locale]
  );

  return (
    <CurrencyContext.Provider
      value={{ currency, setCurrencyByCode, formatPrice, isLoading }}
    >
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
