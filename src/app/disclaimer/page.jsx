import React from "react";

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-white">
      <main className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Disclaimer</h1>

          <p className="text-gray-700 mb-4">
            The information on this website is provided for general
            informational purposes and as a professional placeholder for export
            business communications. We make reasonable efforts to ensure
            accuracy but do not guarantee completeness or suitability for any
            purpose.
          </p>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              No Warranties
            </h2>
            <p className="text-gray-600">
              All products and services are provided as-is. Specific product
              specifications, pricing, and availability must be confirmed via
              formal quotation.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
