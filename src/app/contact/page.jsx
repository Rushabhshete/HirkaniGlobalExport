import dynamic from "next/dynamic";
import { Suspense } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const ContactForm = dynamic(() => import("@/components/ContactForm"), { ssr: false });

export const metadata = {
  title: "Contact Us | Fourzaa Global",
  description: "Get in touch with Fourzaa Global for bulk export inquiries and quotes.",
};

export default function ContactPage() {
  return (
    <main className="w-full bg-background min-h-screen">
      {/* Page Banner */}
      <div className="page-banner" style={{ backgroundImage: "url('/images/banner_contact.png')" }}>
        <div className="page-banner-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl font-bold text-white mb-4 animate-fade-up will-animate">
            Contact Us
          </h1>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact Us" }]} />
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Form (Left) */}
            <div className="lg:col-span-2 animate-slide-right will-animate">
              <h2 className="text-3xl font-bold text-foreground mb-6">Send Us a Message</h2>
              <p className="text-foreground/70 mb-8">
                For bulk inquiries, quotes, or any other questions, please fill out the form below. Our team will get back to you within 24 hours.
              </p>
              
              <div className="bg-surface border border-border p-8 rounded-2xl shadow-sm">
                <Suspense fallback={<div className="h-96 flex items-center justify-center text-foreground/50">Loading form...</div>}>
                  <ContactForm />
                </Suspense>
              </div>
            </div>

            {/* Contact Info (Right) */}
            <div className="animate-slide-left will-animate">
              <div className="bg-surface border border-border p-8 rounded-2xl shadow-sm sticky top-28">
                <h3 className="text-2xl font-bold text-foreground mb-8">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-primary mt-1 mr-4" />
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Head Office</h4>
                      <p className="text-foreground/70">
                        C/3, Taapin House,<br />
                        Mumbai - 400011,<br />
                        India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-primary mt-1 mr-4" />
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Phone</h4>
                      <p className="text-foreground/70">+91 98765 43210</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-primary mt-1 mr-4" />
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Email</h4>
                      <p className="text-foreground/70">info@fourzaaglobal.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-border">
                  <h4 className="font-bold text-foreground mb-4">Quick Connect</h4>
                  <a 
                    href="https://wa.me/919876543210" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full px-4 py-3 bg-[#25D366] text-white rounded-lg font-bold hover:brightness-110 transition shadow-md"
                  >
                    <FaWhatsapp className="w-6 h-6 mr-2" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
