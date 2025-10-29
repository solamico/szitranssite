import Link from "next/link";
import { Truck, Mail, Phone, MapPin } from "lucide-react";

const services = [
  { name: "UK Road Transport", href: "/services#uk-road" },
  { name: "European Transport", href: "/services#europe" },
  { name: "Global Logistics", href: "/services#global" },
  { name: "Railway Transport", href: "/services#rail" },
];

const company = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Truck className="h-8 w-8 text-brand-orange" />
              <div className="text-xl font-display font-bold">
                S&Z TRADING
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Delivering your goods safely and efficiently, anytime, anywhere. 
              Trusted transport logistics since 2022.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-brand-orange transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-brand-orange transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Get In Touch</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+441234567890"
                  className="flex items-center space-x-2 text-gray-400 hover:text-brand-orange transition-colors text-sm"
                >
                  <Phone className="h-4 w-4" />
                  <span>+44 123 456 7890</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@szitrans.com"
                  className="flex items-center space-x-2 text-gray-400 hover:text-brand-orange transition-colors text-sm"
                >
                  <Mail className="h-4 w-4" />
                  <span>info@szitrans.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start space-x-2 text-gray-400 text-sm">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>United Kingdom</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} S&Z Trading International Limited. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-brand-orange text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-brand-orange text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
