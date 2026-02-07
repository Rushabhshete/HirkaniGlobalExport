import React from "react";

export default function ShippingPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <main className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Shipping & Delivery Policy
          </h1>

          <p className="text-gray-700 mb-4">
            This page outlines our shipping methods, estimated timelines, and
            responsibilities regarding international shipments and export
            logistics. It is a professional placeholder for export operations.
          </p>

          <section className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Shipping Methods
            </h2>
            <p className="text-gray-600">
              We ship via sea freight, air freight, and courier partners
              depending on order size and destination. Shipping method will be
              agreed per order.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Customs & Duties
            </h2>
            <p className="text-gray-600">
              Import duties, taxes, and customs fees are the responsibility of
              the importer unless otherwise agreed in the contract.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Tracking & Delivery Times
            </h2>
            <p className="text-gray-600">
              Once shipped, tracking information will be provided. Delivery
              times are estimates and may vary due to customs or carrier
              schedules.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
