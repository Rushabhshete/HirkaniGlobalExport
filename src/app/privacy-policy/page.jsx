import React from "react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-foreground/70">
            This Privacy Policy describes the types of information collected,
            how it is used, and the measures we take to protect individuals’
            data. This document serves as a professional placeholder suitable
            for listing with payment gateways and partners.
          </p>
        </header>

        {/* Content */}
        <div className="glass p-8 rounded-2xl space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Information We Collect
            </h2>
            <p className="text-foreground/70">
              We collect information that you voluntarily provide when you
              request a quote, contact us, or subscribe to updates. This may
              include your name, company details, contact information, and
              inquiry details.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              How We Use Information
            </h2>
            <p className="text-foreground/70">
              Information is used to respond to inquiries, process requests,
              provide quotations, and improve our services. We do not sell
              personal data to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Security
            </h2>
            <p className="text-foreground/70">
              We implement reasonable technical and organizational measures to
              protect personal data. However, no method of transmission over
              the internet can be guaranteed to be 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Third-Party Services
            </h2>
            <p className="text-foreground/70">
              We may use trusted third-party service providers for email,
              analytics, and payments. These providers are contractually
              obligated to handle data securely and responsibly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Contact
            </h2>
            <p className="text-foreground/70">
              For privacy-related inquiries, please contact{" "}
              <span className="font-medium text-foreground">
                info@fourzaaglobal.com
              </span>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
