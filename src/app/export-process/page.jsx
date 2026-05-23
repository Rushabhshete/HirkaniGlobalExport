import Breadcrumb from "@/components/Breadcrumb";
import ExportProcess from "@/components/ExportProcess";

export const metadata = {
  title: "Export Process | Fourzaa Global",
  description: "Learn about our rigorous sourcing, processing, packaging, and shipping procedures.",
};

export default function ExportProcessPage() {
  return (
    <main className="w-full bg-background min-h-screen">
      {/* Page Banner */}
      <div className="page-banner" style={{ backgroundImage: "url('/images/banner_export.png')" }}>
        <div className="page-banner-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl font-bold text-white mb-4 animate-fade-up will-animate">
            Export Process
          </h1>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Export Process" }]} />
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-surface border border-border p-12 rounded-2xl shadow-sm mb-16 animate-fade-up will-animate">
            <h2 className="text-2xl font-bold text-foreground mb-6">Our Commitment to Quality</h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              At Fourzaa Global, we believe that quality is not just a standard, but a promise. Our export process is designed to ensure that every product that leaves our facility meets the highest international standards of safety, purity, and freshness.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              From the moment we source raw materials from trusted local farmers to the final loading of containers, every step is meticulously monitored and documented. We employ state-of-the-art machinery for cleaning and processing, followed by export-grade packaging to preserve the natural aroma and nutrients of our products during transit.
            </p>
          </div>
          
          <div className="animate-fade-up will-animate delay-200">
            <ExportProcess />
          </div>
        </div>
      </section>
    </main>
  );
}
