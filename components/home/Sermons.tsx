"use client";

import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { sermons } from "@/lib/sermons";

export default function Sermons() {
  return (
    <section className="py-24">
      <Container>
        <SectionTitle
          subtitle="Latest Messages"
          title="Recent Sermons"
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {sermons.map((sermon, index) => (
            <motion.div
              key={sermon.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
              }}
              className="overflow-hidden rounded-3xl bg-white shadow-lg"
            >
              <div className="group relative">

                <Image
                  src={sermon.thumbnail}
                  alt={sermon.title}
                  width={500}
                  height={300}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/30">

                  <div className="rounded-full bg-yellow-500 p-5 text-white shadow-xl transition group-hover:scale-110">

                    <Play fill="white" />

                  </div>

                </div>

              </div>

              <div className="p-8">

                <p className="text-sm text-yellow-600">
                  {sermon.date}
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  {sermon.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {sermon.preacher}
                </p>

                <Link
                  href={sermon.videoUrl}
                  className="mt-6 inline-block font-semibold text-yellow-600 hover:text-yellow-700"
                >
                  Watch Message →
                </Link>

              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}