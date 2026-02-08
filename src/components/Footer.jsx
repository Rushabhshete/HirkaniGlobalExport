import Link from "next/link";
import {
  Leaf,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-surface text-foreground border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
                       <Link href="/" className="flex items-center ">
              <Image
                src="/mainLogo.png"
                alt="Harkani Global"
                width={80}
                height={80}
                className="object-contain"
                priority
              />
              <span className="text-lg sm:text-xl font-bold text-foreground">
                Harkani
                <span className="bg-gradient-brand bg-clip-text text-transparent">
                  Global
                </span>
              </span>
            </Link>

            <p className="glass-text-muted mb-6 max-w-md leading-relaxed">
              Premium Indian spices and chutneys exported worldwide. Quality
              assured, tradition preserved.
            </p>

            <div className="flex space-x-4">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Instagram, label: "Instagram" },
                { icon: Linkedin, label: "LinkedIn" },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label={social.label}
                  className="bg-accent p-2 rounded-full glass-text-muted hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">
              Company
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Products", href: "/products" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="glass-text-muted hover:text-primary transition-all duration-300 flex items-center hover:translate-x-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">
              Legal
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "Terms & Conditions", href: "/terms" },
                { name: "Refund Policy", href: "/refund-policy" },
                { name: "Shipping Policy", href: "/shipping-policy" },
                { name: "Disclaimer", href: "/disclaimer" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="glass-text-muted hover:text-primary transition-all duration-300 flex items-center hover:translate-x-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <Mail className="h-5 w-5 text-primary mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="glass-text-muted text-sm hover:text-foreground transition-colors">
                  export@spicecompany.com
                </span>
              </div>
              <div className="flex items-start space-x-3 group">
                <Phone className="h-5 w-5 text-primary mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="glass-text-muted text-sm hover:text-foreground transition-colors">
                  +91 98765 43210
                </span>
              </div>
              <div className="flex items-start space-x-3 group">
                <MapPin className="h-5 w-5 text-primary mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="glass-text-muted text-sm hover:text-foreground transition-colors">
                  Mumbai, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm glass-text-muted">
          <p>© 2026Hirkani Global All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/sitemap"
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Sitemap
            </Link>
            <Link
              href="/cookie-policy"
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
