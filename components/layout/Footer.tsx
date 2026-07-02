export default function Footer() {
  return (
    <footer className="bg-[#0B3C5D] py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold">
          Reconcilers Grace Covenant Ministries
        </h2>

        <p className="mt-4 max-w-xl text-gray-300">
          Reconciling Lives Through the Grace of Christ.
        </p>

        <div className="mt-10 border-t border-white/20 pt-6 text-sm text-gray-400">
          © {new Date().getFullYear()} RGCM. All rights reserved.
        </div>
      </div>
    </footer>
  );
}