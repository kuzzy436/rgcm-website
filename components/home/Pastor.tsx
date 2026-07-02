"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Pastor() {
  return (
    <section className="bg-[#F8F9FA] py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/images/pastor.jpg"
            alt="Senior Pastor"
            width={550}
            height={650}
            className="rounded-3xl object-cover shadow-2xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-semibold uppercase tracking-[4px] text-[#D4AF37]">
            Meet Our Pastor
          </p>

          <h2 className="mt-4 text-5xl font-bold text-[#0B3C5D]">
            A Heart for God. A Passion for People.
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            At Reconcilers Grace Covenant Ministries, our desire is to see every
            life transformed by the grace of Jesus Christ. Through sound biblical
            teaching, fervent prayer, and compassionate service, we are committed
            to raising disciples who reflect Christ in every area of life.
          </p>

          <blockquote className="mt-8 border-l-4 border-[#D4AF37] pl-6 italic text-[#0B3C5D]">
            "For I know the plans I have for you," declares the Lord,
            "plans to prosper you and not to harm you, plans to give you hope
            and a future." — Jeremiah 29:11
          </blockquote>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/about"
              className="rounded-full bg-[#0B3C5D] px-8 py-4 font-semibold text-white transition hover:bg-[#082b44]"
            >
              Read Biography
            </Link>

            <Link
              href="/sermons"
              className="rounded-full border border-[#0B3C5D] px-8 py-4 font-semibold text-[#0B3C5D] transition hover:bg-[#0B3C5D] hover:text-white"
            >
              Watch Sermons
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}