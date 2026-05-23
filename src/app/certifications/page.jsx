import Breadcrumb from "@/components/Breadcrumb";
import { Shield, FileCheck, Award, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Certifications | Fourzaa Global",
  description: "View our quality certifications and standards for export.",
};

export default function CertificationsPage() {
  const certs = [
    {
      title: "FSSAI Certified",
      desc: "Food Safety and Standards Authority of India certification ensuring our food products meet the highest safety guidelines for consumption.",
      icon: Shield,
    },
    {
      title: "IEC Code",
      desc: "Importer Exporter Code (IEC) issued by the Directorate General of Foreign Trade (DGFT), Government of India, authorizing our global trade operations.",
      icon: FileCheck,
    },
    {
      title: "ISO 22000:2018",
      desc: "International standard for food safety management systems, demonstrating our ability to control food safety hazards.",
      icon: Award,
    },
    {
      title: "HACCP Certified",
      desc: "Hazard Analysis and Critical Control Points certification, a systematic preventive approach to food safety from biological, chemical, and physical hazards.",
      icon: CheckCircle,
    },
  ];

  return (
    <main className="w-full bg-background min-h-screen">
      {/* Page Banner */}
      <div className="page-banner" style={{ backgroundImage: "url('/images/banner_certifications.png')" }}>
        <div className="page-banner-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl font-bold text-white mb-4 animate-fade-up will-animate">
            Certifications
          </h1>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Certifications" }]} />
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up will-animate">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Quality Standards</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-foreground/80">
              We adhere strictly to international quality norms and hold necessary certifications to ensure seamless exports and premium product quality for our global clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certs.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div key={index} className={`bg-surface border border-border p-8 rounded-2xl shadow-sm hover:shadow-md transition animate-fade-up will-animate delay-${(index + 1) * 100}`}>
                  <div className="flex items-start">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{cert.title}</h3>
                      <p className="text-foreground/70 leading-relaxed">{cert.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
