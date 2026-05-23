import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { Tag, Edit3, Package, Truck, CheckCircle2 } from "lucide-react";
import ImageWithSkeleton from "@/components/ImageWithSkeleton";

export const metadata = {
  title: "Private Labeling | Fourzaa Global",
  description: "Custom packaging and private labeling services for global brands.",
};

export default function PrivateLabelingPage() {
  const steps = [
    { title: "Consultation", desc: "Discuss your brand requirements, target market, and packaging preferences.", icon: Edit3 },
    { title: "Product Selection", desc: "Choose from our premium range of spices, agro products, and herbs.", icon: Tag },
    { title: "Custom Packaging", desc: "We design and source packaging that reflects your brand identity.", icon: Package },
    { title: "Delivery", desc: "Final products shipped directly to your warehouse with your brand name.", icon: Truck },
  ];

  return (
    <main className="w-full bg-background min-h-screen">
      {/* Page Banner */}
      <div className="page-banner" style={{ backgroundImage: "url('/images/banner_private_label.png')" }}>
        <div className="page-banner-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl font-bold text-white mb-4 animate-fade-up will-animate">
            Private Labeling
          </h1>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Private Labeling" }]} />
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="animate-slide-right will-animate">
              <h2 className="text-3xl font-bold text-foreground mb-6">Your Brand, Our Quality</h2>
              <div className="w-20 h-1 bg-primary mb-8 rounded-full"></div>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Fourzaa Global offers comprehensive private labeling and contract manufacturing services. We understand that building a brand requires consistent quality and reliable supply.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                By partnering with us for private labeling, you get access to our premium quality Indian agro products packed directly under your brand name, saving you the hassle of sourcing, processing, and quality control.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "No investment in manufacturing facilities required",
                  "Consistent quality and supply",
                  "Customized packaging solutions (Pouches, Jars, Boxes)",
                  "Strict adherence to international food safety standards",
                  "Low Minimum Order Quantities (MOQ) to start"
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mr-3" />
                    <span className="text-foreground/80 font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact?subject=Private%20Labeling"
                className="inline-block px-8 py-4 bg-gradient-brand text-white font-bold rounded-lg hover:brightness-110 transition shadow-lg"
              >
                Inquire Now
              </Link>
            </div>
            
            <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-xl animate-slide-left will-animate">
              <ImageWithSkeleton
                src="/images/category_handmade.png"
                alt="Private Labeling Services"
                fill
                imageClassName="object-cover"
              />
            </div>
          </div>

          <div className="bg-surface border border-border p-12 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold text-center text-foreground mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {/* Connector line for desktop */}
              <div className="hidden lg:block absolute top-12 left-[10%] w-[80%] h-[2px] bg-border border-dashed z-0"></div>
              
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="flex flex-col items-center text-center relative z-10 animate-fade-up will-animate delay-100">
                    <div className="w-24 h-24 bg-background border-2 border-primary rounded-full flex items-center justify-center mb-6 shadow-sm group hover:bg-primary/5 transition-colors">
                      <Icon className="w-10 h-10 text-primary" />
                    </div>
                    <div className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                      STEP {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                    <p className="text-foreground/70">{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
