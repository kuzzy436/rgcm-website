"use client";

import Link from "next/link";

interface Props {
  open: boolean;
  onClose: () => void;
}

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Ministries", href: "/ministries" },
  { name: "Sermons", href: "/sermons" },
  { name: "Events", href: "/events" },
  { name: "Gallery", href: "/gallery" },
  { name: "Give", href: "/give" },
  { name: "Contact", href: "/contact" },
];

export default function MobileMenu({
  open,
  onClose,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-40 bg-[#0B3C5D] p-8 pt-24 lg:hidden">
      <nav className="flex flex-col gap-6">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={onClose}
            className="text-2xl text-white hover:text-[#D4AF37]"
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}