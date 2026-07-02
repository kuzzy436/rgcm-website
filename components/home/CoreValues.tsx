"use client";

import { motion } from "framer-motion";
import {
  Cross,
  Heart,
  ShieldCheck,
  Flame,
  HandHeart,
  BookOpen,
  Users,
  Sparkles,
  Megaphone,
  Church,
  Handshake,
  Star,
} from "lucide-react";

const values = [
  { title: "Christ-Centered Worship", icon: Cross },
  { title: "Grace", icon: Sparkles },
  { title: "Faith", icon: ShieldCheck },
  { title: "Love", icon: Heart },
  { title: "Integrity", icon: Handshake },
  { title: "Holiness", icon: Flame },
  { title: "Excellence", icon: Star },
  { title: "Prayer", icon: HandHeart },
  { title: "Evangelism", icon: Megaphone },
  { title: "Compassion", icon: Heart },
  { title: "Discipleship", icon: BookOpen },
  { title: "Kingdom Service", icon: Church },
];

export default function CoreValues() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="uppercase tracking-[4px] text-[#D4AF37] font-semibold">
            What We Believe
          </p>

          <h2 className="mt-4 text-5xl font-bold text-[#0B3C5D]">
            Our Core Values
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Everything we do at Reconcilers Grace Covenant Ministries is guided
            by biblical principles and a commitment to glorify Christ.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition"
              >
                <Icon className="mb-6 h-12 w-12 text-[#D4AF37]" />

                <h3 className="text-xl font-bold text-[#0B3C5D]">
                  {value.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}