"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { navigation } from "@/lib/giving";

export default function Navbar() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -70 }}
        animate={{ y: 0 }}
        transition={{ duration: .6 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/80 backdrop-blur-lg shadow-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          <Link href="/" className="flex items-center gap-3">

            <Image
              src="/images/logo.png"
              alt="RGCM Logo"
              width={55}
              height={55}
              priority
            />

            <div className="hidden md:block">
              <h1 className="font-bold text-white">
                Reconcilers Grace
              </h1>

              <p className="text-xs text-yellow-400">
                Covenant Ministries
              </p>
            </div>

          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (

              <Link
                key={item.href}
                href={item.href}
                className={`transition duration-300 ${
                  pathname === item.href
                    ? "text-yellow-400"
                    : "text-white hover:text-yellow-400"
                }`}
              >
                {item.name}
              </Link>

            ))}

            <Link
              href="/give"
              className="rounded-xl bg-yellow-500 px-6 py-3 font-semibold text-black transition hover:bg-yellow-400"
            >
              Give
            </Link>

          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white lg:hidden"
          >
            {mobileOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>
      </motion.header>

      <AnimatePresence>

        {mobileOpen && (

          <motion.div
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            exit={{ x: 300 }}
            transition={{ duration: .3 }}
            className="fixed inset-0 z-40 bg-black"
          >
            <div className="mt-28 flex flex-col items-center gap-8">

              {navigation.map((item) => (

                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-2xl ${
                    pathname === item.href
                      ? "text-yellow-400"
                      : "text-white"
                  }`}
                >
                  {item.name}
                </Link>

              ))}

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </>
  );
}