import Link from "next/link";
import { ArrowRight, Award, Globe, Truck } from "lucide-react";
import HeroStatsTrigger from "./HeroStatsTrigger"; // The client part

export default function Hero() {
  return (
    <section className="bg-linear-to-br from-orange-50 to-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Authentic Indian 
              <span className="text-orange-600"> Spices</span>
              <br /> for Global Markets
            </h1>
            
            <p className="text-lg text-gray-600 mt-6 mb-8 max-w-lg">
              Export-quality Indian spices and chutneys, sourced directly from 
              farmers and processed with international standards for discerning global buyers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-8 py-3 rounded-xl text-white bg-orange-600 hover:bg-orange-700 transition-all font-bold"
              >
                View Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-xl border-2 border-orange-600 text-orange-600 bg-white hover:bg-orange-50 transition-all font-bold"
              >
                Request Quote
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-orange-100">
              <HeroStat icon={Award} label="Export Quality" />
              <HeroStat icon={Globe} label="Global Shipping" />
              <HeroStat icon={Truck} label="Fast Delivery" />
            </div>
          </div>

          <HeroStatsTrigger />
          
        </div>
      </div>
    </section>
  );
}

function HeroStat({ icon: Icon, label }) {
  return (
    <div className="text-center md:text-left">
      <Icon className="h-7 w-7 text-orange-600 mb-2 mx-auto md:mx-0" />
      <p className="text-xs md:text-sm font-bold text-gray-900 uppercase tracking-tight">{label}</p>
    </div>
  );
}