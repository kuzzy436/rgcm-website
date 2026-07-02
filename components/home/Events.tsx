"use client";

import { motion } from "framer-motion";
import { CalendarDays, Clock, MapPin } from "lucide-react";

const events = [
  {
    title: "Sunday Worship Experience",
    date: "Every Sunday",
    time: "8:00 AM",
    location: "RGCM Main Auditorium",
  },
  {
    title: "Midweek Bible Study",
    date: "Every Wednesday",
    time: "6:00 PM",
    location: "Church Auditorium",
  },
  {
    title: "Friday Prayer & Revival",
    date: "Every Friday",
    time: "6:00 PM",
    location: "Prayer Hall",
  },
];

export default function Events() {
  return (
    <section className="bg-[#F8F9FA] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="uppercase tracking-[4px] text-[#D4AF37] font-semibold">
            Upcoming Events
          </p>

          <h2 className="mt-4 text-5xl font-bold text-[#0B3C5D]">
            Join Us This Week
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            We would love to worship, pray, and grow together with you.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="rounded-3xl bg-white p-8 shadow-lg"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#D4AF37]/20">
                <CalendarDays className="h-8 w-8 text-[#D4AF37]" />
              </div>

              <h3 className="mb-5 text-2xl font-bold text-[#0B3C5D]">
                {event.title}
              </h3>

              <div className="space-y-3 text-gray-600">
                <div className="flex items-center gap-3">
                  <CalendarDays size={18} />
                  {event.date}
                </div>

                <div className="flex items-center gap-3">
                  <Clock size={18} />
                  {event.time}
                </div>

                <div className="flex items-center gap-3">
                  <MapPin size={18} />
                  {event.location}
                </div>
              </div>

              <button className="mt-8 rounded-full bg-[#0B3C5D] px-6 py-3 font-semibold text-white transition hover:bg-[#082E46]">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}