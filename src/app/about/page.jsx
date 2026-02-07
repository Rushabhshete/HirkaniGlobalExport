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
    <main className="bg-white text-gray-800">
      {/* 1. Hero Section: Focused on Trust */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="z-10">
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-orange-700 uppercase bg-orange-100 rounded-full">
                Global Spice Partners
              </span>
              <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                Bridging Indian Traditions <br />
                <span className="text-orange-600 font-serif italic">
                  with Global Tables.
                </span>
              </h1>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  For over 15 years,{" "}
                  <span className="font-semibold text-gray-900">
                    Spice Export Co.
                  </span>{" "}
                  has been India's trusted gateway for premium spices and
                  artisanal chutneys.
                </p>
                <p>
                  From the lush spice gardens of Kerala to the vibrant kitchens
                  of Gujarat, we source ethically and process with modern
                  precision to ensure every shipment retains its "farm-fresh"
                  soul.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
              <Image
                src="/about_spice_img.jpg"
                alt="Spice processing facility showing high quality standards"
                width={800}
                height={600}
                className="relative rounded-2xl shadow-2xl object-cover border-8 border-white"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Section: High Contrast Impact */}
      <section className="py-12 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatItem
              icon={Award}
              value="15+"
              label="Years of Expertise"
              invert
            />
            <StatItem
              icon={Globe}
              value="50+"
              label="Global Destinations"
              invert
            />
            <StatItem icon={Users} value="500+" label="B2B Partners" invert />
            <StatItem
              icon={Truck}
              value="1k+"
              label="Shipments Completed"
              invert
            />
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision: Card Style */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group p-10 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 bg-orange-100 text-orange-600 rounded-xl group-hover:bg-orange-600 group-hover:text-white transition-colors">
                <Leaf size={24} />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To simplify the Indian spice supply chain by providing wholesale
                buyers with traceable, high-grade ingredients while empowering
                our local farming communities.
              </p>
            </div>

            <div className="group p-10 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 bg-orange-100 text-orange-600 rounded-xl group-hover:bg-orange-600 group-hover:text-white transition-colors">
                <Globe size={24} />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To be the gold standard in spice exports, recognized worldwide
                for culinary authenticity and sustainable trade practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Company History & Certs: The "Trust Box" */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-[3rem] p-8 md:p-16 border border-orange-200">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                A Legacy of Quality
              </h2>
              <p className="text-lg text-gray-700">
                Since 2010, we have transitioned from regional roots to a
                globally recognized exporter by investing in rigorous safety
                protocols and state-of-the-art facilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "ISO 22000",
                  desc: "Food Safety Systems",
                  icon: ShieldCheck,
                },
                {
                  title: "HACCP Certified",
                  desc: "Rigid Quality Control",
                  icon: CheckCircle2,
                },
                {
                  title: "Organic Ready",
                  desc: "Certified Product Lines",
                  icon: Leaf,
                },
                {
                  title: "Export Mastery",
                  desc: "Global Customs Experts",
                  icon: Globe,
                },
              ].map((cert, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm"
                >
                  <cert.icon className="w-10 h-10 text-orange-600 mb-4" />
                  <h4 className="font-bold text-gray-900">{cert.title}</h4>
                  <p className="text-sm text-gray-500">{cert.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      {/* 5. Functional CTA Section */}
      <section id="contact-section" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-orange-50 rounded-[2rem] p-12 border border-orange-100 shadow-inner">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to scale your inventory?
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              Whether you're looking for a reliable bulk supplier or need custom
              private labeling, our export team is ready to assist.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Primary Action: Links to your form */}
              <a
                href="/contact"
                className="w-full sm:w-auto bg-orange-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
              >
                Open Inquiry Form
              </a>

              {/* Secondary Action: Immediate trust builder */}
              {/* <button className="w-full sm:w-auto bg-white border-2 border-orange-600 text-orange-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-50 transition-colors">
          Download Specs (.PDF)
        </button> */}
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-500 font-medium">
              <span className="flex items-center gap-1">
                <CheckCircle2 size={16} className="text-green-500" /> Response
                within 24h
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 size={16} className="text-green-500" /> Free
                Samples Available
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- Sub-Components ---------- */

function StatItem({ icon: Icon, value, label, invert = false }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`p-3 rounded-2xl mb-4 ${invert ? "bg-orange-500 text-white" : "bg-orange-100 text-orange-600"}`}
      >
        <Icon size={28} />
      </div>
      <h3
        className={`text-3xl font-bold ${invert ? "text-white" : "text-gray-900"}`}
      >
        {value}
      </h3>
      <p
        className={`${invert ? "text-orange-100" : "text-gray-600"} font-medium`}
      >
        {label}
      </p>
    </div>
  );
}
