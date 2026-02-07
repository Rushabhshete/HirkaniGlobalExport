import React from "react";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <main className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Refund & Cancellation Policy
          </h1>

          <p className="text-gray-700 mb-4">
            This policy describes conditions for cancellations, returns, and
            refunds for export orders. It is intended as a clear, professional
            placeholder for export-oriented commerce.
          </p>

          <section className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Cancellations
            </h2>
            <p className="text-gray-600">
              Orders may be cancelled within the timeframe specified in the
              sales confirmation. Cancellation may be subject to fees to cover
              processing and logistics.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Claims & Returns
            </h2>
            <p className="text-gray-600">
              For damaged or non-conforming goods, please notify us within the
              specified claim period. Claims will be reviewed and resolved per
              the terms of sale and evidence submitted.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Refunds
            </h2>
            <p className="text-gray-600">
              Refunds, where applicable, will be processed using the original
              payment method after verification and agreement between parties.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
