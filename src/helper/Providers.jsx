"use client";

import { CurrencyProvider } from "./CurrencyContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Providers({ children }) {
  return (
    <CurrencyProvider>
      {children}
      <ToastContainer position="top-right" />
    </CurrencyProvider>
  );
}
