"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import { church } from "@/lib/church";

export default function Pastor() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src={church.pastor.image}
                alt={church.pastor.name}
                width={600}
                height={750}
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-semibold uppercase tracking-[4px] text-yellow-500">
              Meet Our Pastor
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
              {church.pastor.name}
            </h2>

            <p className="mt-2 text-xl text-slate-600">
              {church.pastor.title}
            </p>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              {church.pastor.welcome}
            </p>

            <div className="mt-8 space-y-6">
              {church.pastor.bio.map((paragraph, index) => (
                <p
                  key={index}
                  className="leading-8 text-slate-600"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="rounded-xl bg-yellow-500 px-8 py-4 font-semibold text-black transition hover:bg-yellow-400"
              >
                Read Biography
              </Link>

              <Link
                href="/sermons"
                className="rounded-xl border border-slate-300 px-8 py-4 font-semibold transition hover:bg-slate-900 hover:text-white"
              >
                Watch Sermons
              </Link>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}