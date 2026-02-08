export default function RefundPolicy() {
  return (
    <main className="min-h-screen bg-background py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Refund & Cancellation Policy
          </h1>
          <p className="text-foreground/70">
            This policy outlines the conditions for cancellations, claims, and
            refunds related to export orders. It serves as a clear and
            professional placeholder for export-oriented commerce.
          </p>
        </header>

        {/* Content */}
        <div className="glass p-8 rounded-2xl space-y-8">
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              Cancellations
            </h2>
            <p className="text-foreground/70">
              Orders may be cancelled only within the timeframe specified in the
              sales confirmation. Cancellations may be subject to charges to
              cover processing, preparation, and logistics costs already
              incurred.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              Claims & Returns
            </h2>
            <p className="text-foreground/70">
              In the event of damaged, defective, or non-conforming goods,
              buyers must notify us within the claim period specified in the
              contract. All claims are reviewed based on documentation and
              evidence provided.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              Refunds
            </h2>
            <p className="text-foreground/70">
              Refunds, where applicable, will be processed using the original
              payment method after verification, agreement between parties, and
              completion of any required formalities.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
