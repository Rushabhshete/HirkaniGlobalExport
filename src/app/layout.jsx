import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "@/helper/Providers";
import AppErrorBoundary from "@/components/ErrorBoundary";

export const metadata = {
  title: "Fourzaa Global | Premium Spice Exporters",
  description:
    "Fourzaa Global is an Indian exporter of premium-quality spices supplying international markets.",
  icons: {
    icon: "/icon.png",          // 32x32 or 48x48
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased">
        <AppErrorBoundary>
          <Providers>
            <Header />
            {children}
            <Footer />
          </Providers>
        </AppErrorBoundary>
      </body>
    </html>
  );
}
