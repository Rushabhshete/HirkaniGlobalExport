export default function ShippingPolicy() {
  return (
    <main className="min-h-screen bg-background py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Shipping & Delivery Policy
          </h1>
          <p className="text-foreground/70">
            This page outlines our shipping methods, estimated timelines, and
            responsibilities regarding international shipments and export
            logistics. It serves as a professional placeholder for export
            operations.
          </p>
        </header>

        {/* Content */}
        <div className="glass p-8 rounded-2xl space-y-8">
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              Shipping Methods
            </h2>
            <p className="text-foreground/70">
              We ship via sea freight, air freight, and courier partners
              depending on order size and destination. The shipping method will
              be agreed upon per order during quotation.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              Customs & Duties
            </h2>
            <p className="text-foreground/70">
              Import duties, taxes, and customs-related fees are the
              responsibility of the importer unless otherwise specified in the
              contractual agreement.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              Tracking & Delivery Times
            </h2>
            <p className="text-foreground/70">
              Once an order is dispatched, tracking information will be
              provided where applicable. Delivery timelines are estimates and
              may vary due to customs clearance, carrier schedules, or external
              factors beyond our control.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
