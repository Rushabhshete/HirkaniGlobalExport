"use client";

import Link from "next/link";
import { Globe, DollarSign, Link2, Tag, FileCheck } from "lucide-react";
import CategoryCard from "./CategoryCard";
import ExportProcess from "./ExportProcess";
import { CATEGORIES } from "@/data/products";
import { FadeUp, StaggerContainer, StaggerItem } from "./MotionWrapper";

export default function HomeSectionsClient() {
  return (
    <div className="w-full">
      {/* SECTION 1: Categories */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Decorative background blob */}
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px] animate-blob"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeUp className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Product Categories</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </FadeUp>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CATEGORIES.slice(0, 4).map((cat) => (
              <StaggerItem key={cat.name}>
                <CategoryCard {...cat} />
              </StaggerItem>
            ))}
          </StaggerContainer>
          
          <FadeUp className="mt-12 text-center" delay={0.2}>
            <Link
              href="/products"
              className="inline-block px-8 py-3 font-bold text-primary border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition"
            >
              View All Categories
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* SECTION 2: Why Choose Us (Bento Grid Redesign) */}
      <section className="py-20 bg-surface border-y border-border relative overflow-hidden">
        {/* Animated background mesh blobs */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary/5 rounded-full blur-[100px] animate-blob"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-gold/5 rounded-full blur-[90px] animate-blob-delay-1000 animate-blob"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeUp className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Fourzaa Global?</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </FadeUp>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Large featured green Bento box */}
            <StaggerItem className="md:col-span-2 md:row-span-2 bg-gradient-brand text-white p-8 rounded-2xl flex flex-col justify-between shadow-lg shadow-gold/5 border border-gold/15 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-44 h-44 bg-gold/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700"></div>
              <div>
                <Globe className="w-12 h-12 text-gold mb-6 animate-pulse" />
                <h3 className="text-2xl font-black mb-3">Global Quality Standards</h3>
                <p className="text-white/80 leading-relaxed text-sm max-w-xl">
                  We adhere strictly to international quality norms. From raw sourcing to final shipping export, our batch testing checks every container load for compliance with stringent FDA, ISO, and EU food safety parameters.
                </p>
              </div>
              <div className="mt-8 text-xs font-bold tracking-wider uppercase text-gold">
                Certified Quality Assured · ISO · FSSAI · HACCP
              </div>
            </StaggerItem>

            {/* Card 2: Competitive Pricing */}
            <StaggerItem className="glass-card border border-border/60 p-6 rounded-2xl flex flex-col justify-between hover:border-gold/30 transition-all duration-300 group">
              <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">Competitive Pricing</h3>
                <p className="text-xs text-foreground/70 leading-relaxed">
                  Direct sourcing from regional farming clusters cuts middleman commissions. This allows us to supply top agro products at direct factory-export rates.
                </p>
              </div>
            </StaggerItem>

            {/* Card 3: Reliable Supply Chain */}
            <StaggerItem className="glass-card border border-border/60 p-6 rounded-2xl flex flex-col justify-between hover:border-gold/30 transition-all duration-300 group">
              <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Link2 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">Reliable Supply Chain</h3>
                <p className="text-xs text-foreground/70 leading-relaxed">
                  We maintain strict shipping schedules. Collaborating with tier-1 freight partners guarantees prompt delivery for bulk contract commitments.
                </p>
              </div>
            </StaggerItem>

            {/* Card 4: Private Labeling */}
            <StaggerItem className="glass-card border border-border/60 p-6 rounded-2xl flex flex-col justify-between hover:border-gold/30 transition-all duration-300 group">
              <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Tag className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">Private Labeling</h3>
                <p className="text-xs text-foreground/70 leading-relaxed">
                  Fully customized design bags. We provide box printing, vacuum packaging, and logo designs tailored for your local distribution.
                </p>
              </div>
            </StaggerItem>

            {/* Card 5: Fast Documentation */}
            <StaggerItem className="md:col-span-2 bg-background border border-border/80 p-8 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:border-gold/30 transition-all duration-300 group">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <FileCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Fast Documentation & Shipping</h3>
                  <p className="text-xs text-foreground/75 leading-relaxed max-w-lg">
                    We manage phytosanitary checks, certificates of origin, customs declaration, and SGS cargo audits seamlessly, minimizing customs friction.
                  </p>
                </div>
              </div>
              <div className="text-xs font-bold text-primary flex-shrink-0 bg-primary/10 px-4 py-2 rounded-full border border-primary/10">
                Smooth Clearances
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* SECTION 3: Export Process */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ExportProcess />
        </div>
      </section>

      {/* SECTION 4: Certifications & Global Presence */}
      <section className="py-20 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="animate-fade-up will-animate">
              <h3 className="text-2xl font-bold text-foreground mb-6">Certifications</h3>
              <div className="flex flex-wrap gap-4">
                {["FSSAI", "IEC", "ISO 22000", "HACCP"].map((cert) => (
                  <span key={cert} className="px-6 py-3 bg-background border border-border rounded-lg font-bold text-foreground shadow-sm">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="animate-fade-up will-animate delay-200">
              <h3 className="text-2xl font-bold text-foreground mb-6">Global Presence</h3>
              <p className="text-lg text-foreground/80 mb-4">
                Proudly serving clients in USA, UAE & UK and many other countries worldwide.
              </p>
              <div className="flex text-4xl gap-4">
                <img src="https://flagcdn.com/w40/us.png" alt="USA" className="w-10 h-auto rounded shadow-sm" />
                <img src="https://flagcdn.com/w40/ae.png" alt="UAE" className="w-10 h-auto rounded shadow-sm" />
                <img src="https://flagcdn.com/w40/gb.png" alt="UK" className="w-10 h-auto rounded shadow-sm" />
                <img src="https://flagcdn.com/w40/in.png" alt="India" className="w-10 h-auto rounded shadow-sm" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CTA Banner */}
      <section className="py-20 bg-gradient-brand">
        <div className="max-w-4xl mx-auto px-4 text-center animate-fade-up will-animate">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Looking for a trusted export partner?</h2>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 text-lg font-bold text-primary bg-white rounded-lg transition shadow-xl hover:bg-gray-100 dark:bg-surface dark:hover:bg-surface/90"
          >
            Request Bulk Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
