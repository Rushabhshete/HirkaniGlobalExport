export default function Terms() {
  return (
    <main className="min-h-screen bg-background py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Terms & Conditions
          </h1>
          <p className="text-foreground/70">
            The following Terms & Conditions govern all quotations, orders, and
            shipments. This page contains professional, export-oriented
            placeholders suitable for business use and integration with payment
            processors.
          </p>
        </header>

        {/* Content */}
        <div className="glass p-8 rounded-2xl space-y-8">
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              Quotations
            </h2>
            <p className="text-foreground/70">
              All quotations provided are valid only for the stated period and
              are subject to availability and confirmation. Prices do not
              include taxes, duties, or customs clearance unless explicitly
              stated in writing.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              Orders & Payment
            </h2>
            <p className="text-foreground/70">
              Orders are accepted subject to our confirmation. Payment terms
              such as Letters of Credit (LC), Telegraphic Transfer (T/T), or
              other methods will be agreed per contract. Any payment gateway
              integrations must comply with applicable security and privacy
              requirements.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              Delivery & Risk
            </h2>
            <p className="text-foreground/70">
              Delivery terms are defined by the agreed Incoterm (e.g., FOB,
              CIF). Risk transfers in accordance with the selected Incoterm and
              the provisions of the commercial contract.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              Governing Law
            </h2>
            <p className="text-foreground/70">
              These terms are governed by the laws agreed between the
              contracting parties. Any disputes shall be resolved through the
              dispute resolution mechanism specified in the contract.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
