export default function Disclaimer() {
  return (
    <main className="min-h-screen bg-background py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Disclaimer
          </h1>
        </header>

        {/* Content */}
        <div className="glass p-8 rounded-2xl space-y-6">
          <p className="text-foreground/70">
            The information on this website is provided for general
            informational purposes and as a professional placeholder for export
            business communications. While we make reasonable efforts to ensure
            accuracy, we do not guarantee completeness, reliability, or
            suitability for any purpose.
          </p>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              No Warranties
            </h2>
            <p className="text-foreground/70">
              All products and services are provided on an “as-is” basis.
              Specific product specifications, pricing, availability, and
              contractual terms must be confirmed through a formal quotation
              and written agreement.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
