import Link from "next/link";
import { ArrowRight, Award, Globe, Truck } from "lucide-react";
import HeroStatsTrigger from "./HeroStatsTrigger";

export default function Hero() {
  return (
    <section className="relative bg-background py-12 sm:py-16 overflow-hidden">
      {/* subtle accent glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-accent/20 dark:bg-accent/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            {/* Heading */}
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight text-foreground animate-fade-up will-animate delay-100">
              Authentic Indian{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                Spices
              </span>
              <br />
              for Global Markets
            </h1>

            {/* Description */}
            <p className="mt-6 mb-8 max-w-lg text-lg text-foreground/70 animate-fade-up will-animate delay-200">
              Export-quality Indian spices and chutneys, sourced directly from
              farmers and processed under international quality standards for
              global buyers.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-up will-animate delay-300">
              <Link
                href="/products"
                className="
                  inline-flex items-center justify-center
                  px-6 py-3 rounded-lg
                  font-medium text-white
                  bg-gradient-brand
                  hover:brightness-110
                  transition
                  group
                "
              >
                View Products
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="
                  inline-flex items-center justify-center
                  px-8 py-3 rounded-xl
                  bg-surface border border-border
                  font-semibold
                  hover:bg-accent
                  transition
                "
              >
                Request Quote
              </Link>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-6 rounded-xl bg-accent border border-border p-6 animate-fade-up will-animate delay-400">
              <HeroStat icon={Award} label="Export Quality" />
              <HeroStat icon={Globe} label="Global Shipping" />
              <HeroStat icon={Truck} label="Fast Delivery" />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="animate-slide-left will-animate delay-200">
            <HeroStatsTrigger />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Stat ---------- */

function HeroStat({ icon: Icon, label }) {
  return (
    <div className="text-center md:text-left">
      <Icon className="h-7 w-7 mb-2 mx-auto md:mx-0 text-primary" />
      <p className="text-xs md:text-sm font-semibold uppercase tracking-tight text-foreground">
        {label}
      </p>
    </div>
  );
}
