import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-footer-bg text-footer-text py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center flex-shrink-0 mb-6">
              <div className="bg-white p-1 rounded-md inline-block">
                 <Image
                   src="/fourzaa_logo_new.png"
                   alt="Fourzaa Global"
                   width={40}
                   height={40}
                   className="object-contain"
                 />
              </div>
              <span className="text-xl font-bold text-white ml-3">
                Fourzaa <span className="text-gold">Global</span>
              </span>
            </Link>
            <p className="text-footer-text/80 mb-6 leading-relaxed max-w-sm">
              Exporting premium Indian agro products worldwide with quality and reliability.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="inline-block hover:translate-x-1 hover:text-white transition-all duration-300">Home</Link></li>
              <li><Link href="/about" className="inline-block hover:translate-x-1 hover:text-white transition-all duration-300">About Us</Link></li>
              <li><Link href="/products" className="inline-block hover:translate-x-1 hover:text-white transition-all duration-300">Products</Link></li>
              <li><Link href="/export-process" className="inline-block hover:translate-x-1 hover:text-white transition-all duration-300">Export Process</Link></li>
              <li><Link href="/contact" className="inline-block hover:translate-x-1 hover:text-white transition-all duration-300">Contact Us</Link></li>
            </ul>
          </div>

          {/* Our Products */}
          <div>
            <h3 className="text-white font-semibold mb-6">Our Products</h3>
            <ul className="space-y-4">
              <li><Link href="/products?category=Spices" className="inline-block hover:translate-x-1 hover:text-white transition-all duration-300">Spices</Link></li>
              <li><Link href="/products?category=Agricultural+Products" className="inline-block hover:translate-x-1 hover:text-white transition-all duration-300">Agricultural Products</Link></li>
              <li><Link href="/products?category=Herbal+Products" className="inline-block hover:translate-x-1 hover:text-white transition-all duration-300">Herbal Products</Link></li>
              <li><Link href="/products?category=Dehydrated+Products" className="inline-block hover:translate-x-1 hover:text-white transition-all duration-300">Dehydrated Products</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-6">Support</h3>
            <ul className="space-y-4">
              <li><Link href="/contact" className="inline-block hover:translate-x-1 hover:text-white transition-all duration-300">Request Quote</Link></li>
              <li><Link href="/private-labeling" className="inline-block hover:translate-x-1 hover:text-white transition-all duration-300">Private Labeling</Link></li>
              <li><Link href="#" className="inline-block hover:translate-x-1 hover:text-white transition-all duration-300">Download Brochure</Link></li>
              <li><Link href="#" className="inline-block hover:translate-x-1 hover:text-white transition-all duration-300">FAQs</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-footer-text/60">
          <p>&copy; {new Date().getFullYear()} Fourzaa Global. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
