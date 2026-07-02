"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="bg-[#F8F9FA] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <p className="font-semibold uppercase tracking-[5px] text-[#D4AF37]">
            Our Purpose
          </p>

          <h2 className="mt-4 text-5xl font-bold text-[#0B3C5D]">
            Mission & Vision
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Everything we do is centered on leading people into a life-changing
            relationship with Jesus Christ and equipping believers for Kingdom
            impact.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">

          <motion.div
            whileHover={{ y: -10 }}
            transition={{ duration: .3 }}
            className="rounded-3xl bg-white p-10 shadow-xl"
          >
            <Target className="mb-6 h-14 w-14 text-[#D4AF37]" />

            <h3 className="mb-6 text-3xl font-bold text-[#0B3C5D]">
              Our Mission
            </h3>

            <p className="leading-8 text-gray-600">
              To reconcile people back to God through the preaching of the
              Gospel of Jesus Christ, raising disciples who walk in grace,
              faith, holiness, love and the power of the Holy Spirit.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            transition={{ duration: .3 }}
            className="rounded-3xl bg-[#0B3C5D] p-10 text-white shadow-xl"
          >
            <Eye className="mb-6 h-14 w-14 text-[#D4AF37]" />

            <h3 className="mb-6 text-3xl font-bold">
              Our Vision
            </h3>

            <p className="leading-8 text-gray-200">
              To build a Christ-centered church that transforms lives, equips
              believers for ministry, reaches communities with the Gospel and
              impacts nations through worship, discipleship, prayer and
              compassionate service.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}