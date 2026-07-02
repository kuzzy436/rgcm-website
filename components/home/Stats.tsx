"use client";

import { motion } from "framer-motion";
import { Users, Church, Calendar, HeartHandshake } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "5,000+",
    title: "Lives Impacted",
  },
  {
    icon: Church,
    value: "20+",
    title: "Ministries",
  },
  {
    icon: Calendar,
    value: "15+",
    title: "Years of Ministry",
  },
  {
    icon: HeartHandshake,
    value: "100+",
    title: "Community Outreach",
  },
];

export default function Stats() {
  return (
    <section className="bg-[#0B3C5D] py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.2,
                duration: 0.6,
              }}
              className="rounded-3xl border border-white/10 bg-white/10 p-8 text-center backdrop-blur-md"
            >
              <Icon className="mx-auto mb-6 h-12 w-12 text-[#D4AF37]" />

              <h3 className="text-5xl font-bold text-white">
                {stat.value}
              </h3>

              <p className="mt-4 text-gray-300">
                {stat.title}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}