import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { Suspense } from "react";
import { Info } from "@/helper/contact-page-helper";

export default function ContactPage() {
  return (
    <main className="py-8 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600">
            Get in touch for export inquiries, bulk orders, or product details.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* LEFT: Contact Info (unchanged) */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 space-y-6">
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
                  "Monday - Friday: 9:00 AM - 6:00 PM IST",
                  "Saturday: 9:00 AM - 2:00 PM IST",
                ]}
              />
            </div>
          </div>

          {/* RIGHT: SAME FORM (client) */}
          <Suspense fallback={<div>Loading form...</div>}>
            <ContactForm />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
