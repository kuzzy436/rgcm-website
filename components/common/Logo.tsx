import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#D4AF37] text-xl font-bold text-[#0B3C5D] shadow-lg">
        RG
      </div>

      <div>
        <h1 className="text-xl font-bold text-white">
          Reconcilers Grace
        </h1>

        <p className="text-sm text-gray-200">
          Covenant Ministries
        </p>
      </div>
    </Link>
  );
}