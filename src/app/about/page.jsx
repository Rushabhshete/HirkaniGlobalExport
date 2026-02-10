import Link from "next/link";
import Image from "next/image";
import {
  Award,
  Globe,
  Users,
  Truck,
  ShieldCheck,
  Leaf,
  CheckCircle2,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-background">

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-accent/20 dark:bg-accent/10" />

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-up will-animate">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold uppercase tracking-wider rounded-full bg-accent text-accent-foreground">
              Global Spice Partners
            </span>

            <h1 className="text-5xl font-extrabold mb-6 leading-tight text-foreground">
              Bridging Indian Traditions <br />
              <span className="bg-gradient-brand bg-clip-text text-transparent font-serif italic">
                with Global Tables
              </span>
            </h1>

            <div className="space-y-6 text-lg glass-text-muted">
              <p>
                For over 5 years,{" "}
                <span className="font-semibold text-primary">
                  Fourzaa Global.
                </span>{" "}
                has been India’s trusted gateway for premium spices and
                artisanal chutneys.
              </p>
              <p>
                From the lush spice gardens of Kerala to the vibrant kitchens of
                Gujarat, we source ethically and process with modern precision
                to ensure every shipment retains its "farm-fresh" soul.
              </p>
            </div>
          </div>

          <div className="relative animate-slide-left will-animate delay-200">
            <div className="absolute -top-6 -left-6 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
            <Image
              src="/about_spice_img.jpg"
              alt="Spice processing facility"
              width={800}
              height={600}
              className="relative rounded-2xl object-cover shadow-2xl border border-border"
              priority
              quality={70}
              sizes="800px"
            />
          </div>
        </div>
      </section>

      {/* =====================
          STATS
          ===================== */}
      <section className="py-16 bg-gradient-brand">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
            <Stat icon={Award} value="5+" label="Years of Expertise" />
            <Stat icon={Globe} value="10+" label="Global Destinations" />
            <Stat icon={Users} value="500+" label="B2B Partners" />
            <Stat icon={Truck} value="1k+" label="Shipments Completed" />
          </div>
        </div>
      </section>

      {/* =====================
          MISSION / VISION
          ===================== */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <GlassCard
            icon={Leaf}
            title="Our Mission"
            text="To simplify the Indian spice supply chain by providing wholesale
                 buyers with traceable, high-grade ingredients while empowering
                 our local farming communities."
          />
          <GlassCard
            icon={Globe}
            title="Our Vision"
            text="To be the gold standard in spice exports, recognized worldwide
                for culinary authenticity and sustainable trade practices."
          />
        </div>
      </section>

      {/* =====================
          CERTIFICATIONS
          ===================== */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="glass glass-thick rounded-[3rem] p-12">
            <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
              A Legacy of Quality
            </h2>
            <p className="text-lg glass-text-muted text-center max-w-3xl mx-auto mb-12">
              Since 2010, we have transitioned from regional roots to a globally
              recognized exporter by investing in rigorous safety protocols and
              state-of-the-art facilities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "ISO 22000",
                  desc: "Food Safety Systems",
                  icon: ShieldCheck,
                },
                { title: "HACCP", desc: "Quality Control", icon: CheckCircle2 },
                { title: "Organic Ready", desc: "Certified Lines", icon: Leaf },
                {
                  title: "Export Mastery",
                  desc: "Global Compliance",
                  icon: Globe,
                },
              ].map((c, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-background border border-border text-center"
                >
                  <c.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-foreground">{c.title}</h3>
                  <p className="text-sm glass-text-subtle">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================
          CTA
          ===================== */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-brand opacity-90" />

        <div className="max-w-4xl mx-auto px-4 text-center  animate-fade-up will-animate">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Ready to scale your inventory?
          </h2>
          <p className="text-foreground mb-10">
            Whether you're looking for a reliable bulk supplier or need custom
            private labeling, our export team is ready to assist.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full font-bold text-white
                  bg-gradient-brand
                  hover:brightness-110 transition"
          >
            Open Inquiry Form
          </Link>
        </div>
      </section>
    </main>
  );
}

/* =====================
   SUB COMPONENTS
   ===================== */

function Stat({ icon: Icon, value, label }) {
  return (
    <div className="text-center animate-fade-up will-animate">
      <Icon className="h-8 w-8 mx-auto mb-3 text-white" />
      <h3 className="text-3xl font-bold">{value}</h3>
      <p className="text-white/80 font-medium">{label}</p>
    </div>
  );
}

function GlassCard({ icon: Icon, title, text }) {
  return (
    <div className="glass p-10 rounded-3xl animate-fade-up will-animate">
      <Icon className="w-10 h-10 text-primary mb-6" />
      <h3 className="text-2xl font-bold mb-4 glass-text">{title}</h3>
      <p className="glass-text-muted">{text}</p>
    </div>
  );
}
