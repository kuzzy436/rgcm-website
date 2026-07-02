"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../common/Logo";
import { navigation } from "@/lib/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#0B3C5D]/95 backdrop-blur-lg shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-white transition hover:text-[#D4AF37]"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Desktop Button */}
        <Link
          href="/visit"
          className="hidden rounded-full bg-[#D4AF37] px-6 py-3 font-semibold text-[#0B3C5D] transition hover:scale-105 lg:block"
        >
          Plan a Visit
        </Link>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white lg:hidden"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="bg-[#0B3C5D] lg:hidden">
          <nav className="flex flex-col gap-5 px-6 py-6">
            {navigation.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-lg text-white hover:text-[#D4AF37]"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}