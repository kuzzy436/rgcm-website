"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Ministries", href: "/ministries" },
  { name: "Sermons", href: "/sermons" },
  { name: "Events", href: "/events" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-black/80 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          {/* Logo */}

          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="RGCM Logo"
              width={55}
              height={55}
              priority
            />

            <div className="hidden md:block">
              <h1 className="text-lg font-bold text-white">
                Reconcilers Grace
              </h1>

              <p className="text-xs text-yellow-400">
                Covenant Ministries
              </p>
            </div>
          </Link>

          {/* Desktop */}

          <div className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-medium text-white transition hover:text-yellow-400"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/give"
              className="rounded-lg bg-yellow-500 px-5 py-3 font-semibold text-black transition hover:bg-yellow-400"
            >
              Give
            </Link>
          </div>

          {/* Mobile */}

          <button
            className="text-white lg:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 lg:hidden"
          >
            <div className="mt-24 flex flex-col items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-2xl text-white hover:text-yellow-400"
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href="/give"
                onClick={() => setOpen(false)}
                className="rounded-lg bg-yellow-500 px-8 py-4 font-bold text-black"
              >
                Give
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}