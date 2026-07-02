"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

const values = [
  "Christ-Centered Worship",
  "Grace",
  "Faith",
  "Love",
];

export default function Welcome() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
        >
          <Image
            src="/images/church.jpg"
            alt="Church Worship"
            width={600}
            height={700}
            className="rounded-3xl shadow-2xl object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
        >

          <span className="text-[#D4AF37] font-bold uppercase tracking-[4px]">
            Who We Are
          </span>

          <h2 className="mt-4 text-5xl font-bold text-[#0B3C5D]">
            Transforming Lives Through Christ
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            Reconcilers Grace Covenant Ministries is a Christ-centered church
            committed to proclaiming the Gospel of Jesus Christ, raising mature
            disciples, and impacting communities through worship, prayer,
            biblical teaching, evangelism, and compassionate service.
          </p>

          <div className="mt-10 space-y-4">
            {values.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3"
              >
                <CheckCircle2 className="text-[#D4AF37]" />

                <span className="text-lg">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <Link
            href="/about"
            className="inline-block mt-10 rounded-full bg-[#0B3C5D] px-8 py-4 text-white hover:bg-[#082c46]"
          >
            Learn More About Us
          </Link>

        </motion.div>

      </div>
    </section>
  );
}