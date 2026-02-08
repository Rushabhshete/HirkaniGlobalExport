"use client";

import { ThemeProvider } from "next-themes";
import { CurrencyProvider } from "./CurrencyContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <CurrencyProvider>
        {children}
        <ToastContainer position="top-right" />
      </CurrencyProvider>
    </ThemeProvider>
  );
}
