"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, CheckCircle2, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const features = [
  "On-Time Delivery Guaranteed",
  "Competitive Pricing",
  "25+ Countries Covered",
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-brand-orange/10 border border-brand-orange/20 rounded-full px-4 py-2 mb-6"
            >
              <span className="h-2 w-2 bg-brand-orange rounded-full animate-pulse" />
              <span className="text-sm font-medium">Trusted Since 2022</span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              European Logistics{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-400">
                Excellence
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Delivering your goods safely and efficiently across the UK, Europe, and beyond. 
              Professional transport solutions tailored to your business needs.
            </p>

            {/* Features List */}
            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-brand-orange flex-shrink-0" />
                  <span className="text-gray-200">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-brand-orange hover:bg-orange-600 text-white text-lg px-8 group"
              >
                <Link href="/contact">
                  Request Quote
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 text-lg px-8 group"
              >
                <a href="tel:+441234567890">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us Now
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Placeholder for hero image - replace with actual image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/20 to-blue-500/20 rounded-2xl blur-3xl" />
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-white/10">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-600/20 to-orange-600/20 rounded-xl flex items-center justify-center">
                  {/* Replace this div with Next.js Image component with truck image */}
                  <div className="text-center">
                    <Truck className="h-24 w-24 text-white/20 mx-auto mb-4" />
                    <p className="text-gray-400 text-sm">Hero Image Placeholder</p>
                    <p className="text-gray-500 text-xs mt-2">
                      Add your truck/fleet image here
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl p-4"
            >
              <div className="flex items-center space-x-3">
                <div className="h-12 w-12 bg-brand-orange/10 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-brand-orange" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">15,000+</div>
                  <div className="text-sm text-gray-600">Deliveries</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute -top-6 -right-6 bg-brand-orange rounded-xl shadow-2xl p-4"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-white">98%</div>
                <div className="text-sm text-orange-100">On-Time Rate</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-white/60 text-sm">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-8 w-5 border-2 border-white/30 rounded-full flex justify-center pt-2"
          >
            <div className="h-1.5 w-1.5 bg-white rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
