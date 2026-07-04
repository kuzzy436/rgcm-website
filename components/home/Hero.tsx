"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/hero/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0B3C5D]/75" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-[#0B3C5D]/40 to-[#0B3C5D]" />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 mx-auto max-w-5xl px-6 text-center text-white"
      >
        <p className="mb-6 text-sm font-semibold uppercase tracking-[6px] text-[#D4AF37]">
          Welcome to RGCM
        </p>

        <h1 className="font-heading text-5xl font-extrabold leading-tight text-white drop-shadow-2xl md:text-7xl">
          Reconciling Lives
          <br />
          Through the Grace of Christ
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-200 md:text-xl">
          Experience God's transforming grace through passionate worship,
          biblical teaching, prayer, discipleship, and a loving community
          committed to Jesus Christ.
        </p>

        {/* Scripture */}
        <p className="mx-auto mt-6 max-w-2xl italic text-[#D4AF37]">
          “We are therefore Christ's ambassadors, as though God were making His
          appeal through us.”
          <br />
          <span className="font-semibold">— 2 Corinthians 5:20</span>
        </p>

        {/* Service Information */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 rounded-full bg-white/10 px-8 py-4 backdrop-blur-md">
          <span>📍 Jos, Plateau State</span>
          <span>⛪ Sundays • 8:00 AM</span>
          <span>🙏 Thursdays • 4:00 PM</span>
        </div>

        {/* Action Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <Link
            href="/contact"
            className="rounded-full bg-[#D4AF37] px-8 py-4 font-semibold text-[#0B3C5D] shadow-lg transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Plan Your Visit
          </Link>

          <Link
            href="/sermons"
            className="rounded-full border-2 border-white px-8 py-4 font-semibold text-white transition duration-300 hover:bg-white hover:text-[#0B3C5D]"
          >
            Watch Sermons
          </Link>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white"
      >
        <ChevronDown size={40} />
      </motion.div>
    </section>
  );
}