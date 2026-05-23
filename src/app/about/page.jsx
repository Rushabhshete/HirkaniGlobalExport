import ImageWithSkeleton from "@/components/ImageWithSkeleton";
import Link from "next/link";
import { CheckCircle2, Globe, Users, Award, Truck } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "About Us | Fourzaa Global",
  description: "Learn about Fourzaa Global, a trusted source of premium quality agro products from India.",
};

export default function AboutPage() {
  return (
    <main className="w-full bg-background min-h-screen">
      {/* Page Banner */}
      <div className="page-banner" style={{ backgroundImage: "url('/images/banner_about_us.png')" }}>
        <div className="page-banner-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl font-bold text-white mb-4 animate-fade-up will-animate">
            About Us
          </h1>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About Us" }]} />
        </div>
      </div>

      {/* CONTENT */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Image */}
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl animate-slide-right will-animate">
              <ImageWithSkeleton
                src="/about_spice_img.jpg"
                alt="About Fourzaa Global"
                fill
                imageClassName="object-cover"
              />
            </div>

            {/* Text */}
            <div className="animate-slide-left will-animate">
              <h2 className="text-3xl font-bold text-foreground mb-6">Welcome to Fourzaa Global</h2>
              <div className="w-20 h-1 bg-primary mb-8 rounded-full"></div>
              
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                Fourzaa Global is a trusted source of premium quality agro products from India. We specialize in sourcing, processing, and exporting a wide range of spices, agricultural commodities, herbal products, and dehydrated vegetables to international markets.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {["Quality Assurance", "Ethical Business Practices", "Customer Satisfaction", "Timely Delivery"].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="font-semibold text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/products"
                className="inline-block px-8 py-4 bg-gradient-brand text-white font-bold rounded-lg hover:brightness-110 transition shadow-lg"
              >
                Explore Our Products
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="py-16 bg-gradient-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div className="animate-fade-up will-animate delay-100">
              <div className="text-5xl font-bold mb-2">100+</div>
              <div className="text-white/80 font-semibold uppercase tracking-wider">Products</div>
            </div>
            <div className="animate-fade-up will-animate delay-200">
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-white/80 font-semibold uppercase tracking-wider">Countries Served</div>
            </div>
            <div className="animate-fade-up will-animate delay-300">
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-white/80 font-semibold uppercase tracking-wider">Happy Clients</div>
            </div>
            <div className="animate-fade-up will-animate delay-400">
              <div className="text-5xl font-bold mb-2">10+</div>
              <div className="text-white/80 font-semibold uppercase tracking-wider">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
