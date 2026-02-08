import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { Suspense } from "react";
import { Info } from "@/helper/contact-page-helper";

export default function ContactPage() {
  return (
    <main className="py-12 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-10 animate-fade-up will-animate">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Get in touch for export inquiries, bulk orders, or detailed product
            information. Our team responds within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* LEFT: Contact Info */}
          <div className="lg:col-span-1 animate-fade-up will-animate delay-100">
            <div className="glass p-6 rounded-xl space-y-6">
              <Info
                icon={Mail}
                title="Email"
                lines={["export@spicecompany.com", "sales@spicecompany.com"]}
              />
              <Info
                icon={Phone}
                title="Phone"
                lines={["+91 98765 43210", "+91 98765 43211"]}
              />
              <Info
                icon={MapPin}
                title="Address"
                lines={[
                  "123 Export Plaza",
                  "Andheri East, Mumbai",
                  "Maharashtra 400069, India",
                ]}
              />
              <Info
                icon={Clock}
                title="Business Hours"
                lines={[
                  "Monday – Friday: 9:00 AM – 6:00 PM IST",
                  "Saturday: 9:00 AM – 2:00 PM IST",
                ]}
              />
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <Suspense fallback={<div className="text-foreground/60">Loading form…</div>}>
            <ContactForm />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
