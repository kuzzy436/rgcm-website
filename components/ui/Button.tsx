import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex items-center justify-center rounded-xl px-7 py-3 font-semibold transition-all duration-300",
        variant === "primary"
          ? "bg-yellow-500 text-black hover:bg-yellow-400"
          : "border border-slate-300 bg-white text-slate-900 hover:bg-slate-900 hover:text-white",
        className
      )}
    >
      {children}
    </Link>
  );
}