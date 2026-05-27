import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "@/helper/Providers";
import AppErrorBoundary from "@/components/ErrorBoundary";
import WhatsAppButton from "@/components/WhatsAppButton";
import RFQFloatingWidget from "@/components/RFQFloatingWidget";
import NavigationProgressBar from "@/components/NavigationProgressBar";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fourzaa Global | Premium Indian Agro Products Exporter",
  description: "Fourzaa Global exports premium quality spices, agricultural, herbal and dehydrated products from India to global markets.",
  icons: {
    icon: "/fourzaa_logo_new.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AppErrorBoundary>
          <Providers>
            <Suspense fallback={null}>
              <NavigationProgressBar />
            </Suspense>
            <Header />
            {children}
            <Footer />
            <WhatsAppButton />
            <RFQFloatingWidget />
          </Providers>
        </AppErrorBoundary>
      </body>
    </html>
  );
}
