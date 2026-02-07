import React from "react";

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <main className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Terms & Conditions
          </h1>

          <p className="text-gray-700 mb-4">
            The following Terms & Conditions govern all quotations, orders and
            shipments. This page contains professional, export-oriented
            placeholders suitable for business use and integration with payment
            processors.
          </p>

          <section className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Quotations
            </h2>
            <p className="text-gray-600">
              All quotations provided are valid for the stated period only and
              are subject to availability and confirmation. Prices do not
              include taxes, duties, or customs clearance unless explicitly
              stated.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Orders & Payment
            </h2>
            <p className="text-gray-600">
              Orders are accepted subject to our confirmation. Payment terms
              (such as LC, T/T, or other methods) will be agreed per contract.
              Any integration points with payment gateways must comply with our
              security and privacy requirements.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Delivery & Risk
            </h2>
            <p className="text-gray-600">
              Delivery terms are defined by the agreed incoterm (e.g., FOB,
              CIF). Risk transfers as per the incoterm selected and as described
              in the commercial contract.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Governing Law
            </h2>
            <p className="text-gray-600">
              These terms are governed by the laws agreed between the
              contracting parties. Any disputes shall be resolved through the
              agreed dispute resolution mechanism.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
