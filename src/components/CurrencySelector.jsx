"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useCurrency, CURRENCY_OPTIONS } from "@/helper/CurrencyContext";

export default function CurrencySelector() {
  const { currency, setCurrencyByCode } = useCurrency();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-accent transition text-sm font-medium text-foreground"
      >
        <img src={`https://flagcdn.com/w20/${currency.flagCode}.png`} alt={currency.code} className="w-5 h-auto inline-block rounded-sm shadow-sm" />
        <span>{currency.code}</span>
        <ChevronDown className="h-4 w-4 opacity-50" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-surface border border-border rounded-md shadow-lg z-50 overflow-hidden">
          {CURRENCY_OPTIONS.map((option) => (
            <button
              key={option.code}
              onClick={() => {
                setCurrencyByCode(option.code);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm flex items-center space-x-2 hover:bg-accent transition ${
                currency.code === option.code ? "bg-accent/50 font-semibold text-primary" : "text-foreground"
              }`}
            >
              <img src={`https://flagcdn.com/w20/${option.flagCode}.png`} alt={option.code} className="w-5 h-auto inline-block rounded-sm shadow-sm" />
              <span>{option.code}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
