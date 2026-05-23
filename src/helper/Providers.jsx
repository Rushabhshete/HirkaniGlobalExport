"use client";

import { ThemeProvider } from "next-themes";
import { CurrencyProvider } from "./CurrencyContext";
import { RFQProvider } from "./RFQContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <CurrencyProvider>
        <RFQProvider>
          {children}
          <ToastContainer position="top-right" />
        </RFQProvider>
      </CurrencyProvider>
    </ThemeProvider>
  );
}
