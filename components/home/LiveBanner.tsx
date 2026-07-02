export default function LiveBanner() {
  return (
    <section className="bg-[#D4AF37] py-3">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-center md:flex-row">
        <div>
          <span className="font-bold text-[#0B3C5D]">
            Join Us This Sunday
          </span>

          <span className="ml-2 text-[#0B3C5D]">
            Worship Service • 8:00 AM & 10:30 AM
          </span>
        </div>

        <button className="rounded-full bg-[#0B3C5D] px-5 py-2 text-white transition hover:opacity-90">
          Plan Your Visit
        </button>
      </div>
    </section>
  );
}