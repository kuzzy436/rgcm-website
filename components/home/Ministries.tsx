"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { ministries } from "@/lib/ministries";

export default function Ministries() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <SectionTitle
          subtitle="Serve With Us"
          title="Our Ministries"
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {ministries.map((ministry, index) => {
            const Icon = ministry.icon;

            return (
              <motion.div
                key={ministry.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="rounded-2xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 inline-flex rounded-full bg-yellow-100 p-4">
                  <Icon size={32} className="text-yellow-600" />
                </div>

                <h3 className="mb-4 text-2xl font-bold">
                  {ministry.title}
                </h3>

                <p className="leading-7 text-slate-600">
                  {ministry.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}