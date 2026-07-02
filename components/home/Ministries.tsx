"use client";

import { motion } from "framer-motion";
import {
  Users,
  Baby,
  Music4,
  HeartHandshake,
  BookOpen,
  Mic2,
  Camera,
  HandHeart,
} from "lucide-react";

const ministries = [
  {
    title: "Men's Ministry",
    description: "Building godly men of integrity and purpose.",
    icon: Users,
  },
  {
    title: "Women's Ministry",
    description: "Empowering women to walk in grace and faith.",
    icon: HeartHandshake,
  },
  {
    title: "Youth Ministry",
    description: "Raising a generation passionate for Christ.",
    icon: Mic2,
  },
  {
    title: "Children's Church",
    description: "Teaching children God's Word in a joyful environment.",
    icon: Baby,
  },
  {
    title: "Choir & Worship",
    description: "Leading the church into God's presence through worship.",
    icon: Music4,
  },
  {
    title: "Prayer Ministry",
    description: "Standing in the gap through fervent prayer.",
    icon: HandHeart,
  },
  {
    title: "Media Ministry",
    description: "Using technology to spread the Gospel.",
    icon: Camera,
  },
  {
    title: "Bible Study",
    description: "Growing deeper through sound biblical teaching.",
    icon: BookOpen,
  },
];

export default function Ministries() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="uppercase tracking-[4px] font-semibold text-[#D4AF37]">
            Ministries
          </p>

          <h2 className="mt-4 text-5xl font-bold text-[#0B3C5D]">
            Find Your Place to Serve
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Every believer has a place in the body of Christ. Discover a ministry
            where you can grow, serve, and make an eternal impact.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {ministries.map((ministry, index) => {
            const Icon = ministry.icon;

            return (
              <motion.div
                key={ministry.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition hover:shadow-2xl"
              >
                <Icon className="mb-6 h-12 w-12 text-[#D4AF37]" />

                <h3 className="mb-4 text-2xl font-bold text-[#0B3C5D]">
                  {ministry.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {ministry.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}