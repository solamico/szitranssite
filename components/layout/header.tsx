"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { Menu, X, Phone, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Truck className={cn(
              "h-8 w-8 transition-colors",
              isScrolled ? "text-brand-blue" : "text-white"
            )} />
            <div className="text-2xl font-display font-bold">
              <span className="text-brand-blue">S&Z</span>
              <span className={cn(
                "transition-colors",
                isScrolled ? "text-brand-orange" : "text-white"
              )}>
                {" "}TRADING
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "font-medium transition-colors hover:text-brand-orange",
                  isScrolled ? "text-gray-700" : "text-white"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+441234567890"
              className={cn(
                "flex items-center space-x-2 text-sm font-medium transition-colors",
                isScrolled ? "text-gray-700 hover:text-brand-orange" : "text-white hover:text-brand-orange"
              )}
            >
              <Phone className="h-4 w-4" />
              <span>+44 123 456 7890</span>
            </a>
            
            <Button
              asChild
              className="bg-brand-orange hover:bg-orange-600 text-white"
            >
              <Link href="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100/10 transition-colors"
          >
            {isOpen ? (
              <X className={cn("h-6 w-6", isScrolled ? "text-gray-900" : "text-white")} />
            ) : (
              <Menu className={cn("h-6 w-6", isScrolled ? "text-gray-900" : "text-white")} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-gray-200"
          >
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 hover:text-brand-orange font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <a
                  href="tel:+441234567890"
                  className="flex items-center space-x-2 text-gray-700 hover:text-brand-orange"
                >
                  <Phone className="h-4 w-4" />
                  <span>+44 123 456 7890</span>
                </a>
                
                <Button
                  asChild
                  className="w-full bg-brand-orange hover:bg-orange-600"
                >
                  <Link href="/contact">Get Quote</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}
