import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-[#D4AF37] text-[#0B3C5D] hover:scale-105"
      : "border border-white text-white hover:bg-white hover:text-[#0B3C5D]";

  return (
    <Link
      href={href}
      className={`rounded-full px-8 py-4 font-semibold transition ${styles}`}
    >
      {children}
    </Link>
  );
}

<Button
  href="/sermons"
  variant="secondary"
>
  Watch Sermons
</Button>