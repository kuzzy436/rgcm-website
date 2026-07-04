import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/church.jpg"
          alt="Reconcilers Grace Covenant Ministries"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-[#0B3C5D]/75" />

        <div className="relative z-10 text-center text-white px-6">
          <p className="uppercase tracking-[5px] text-[#D4AF37] font-semibold">
            About RGCM
          </p>

          <h1 className="mt-4 text-5xl md:text-7xl font-bold">
            Reconcilers Grace Covenant Ministries
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-200">
            Reconciling Lives Through the Grace of Christ.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[4px] text-[#D4AF37] font-semibold">
              Our Story
            </p>

            <h2 className="mt-4 text-5xl font-bold text-[#0B3C5D]">
              A Church Built on Grace
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              Reconcilers Grace Covenant Ministries exists to proclaim the Gospel
              of Jesus Christ and reconcile people back to God. We are committed
              to raising disciples through biblical teaching, passionate worship,
              fervent prayer, and compassionate service.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our desire is to see lives transformed, families strengthened,
              communities impacted, and nations reached through the power of the
              Holy Spirit.
            </p>
          </div>

          <Image
            src="/images/church.jpg"
            alt="Church Building"
            width={700}
            height={500}
            className="rounded-3xl shadow-2xl"
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#F8F9FA] py-24">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10">
          <div className="rounded-3xl bg-white p-10 shadow-lg">
            <h3 className="text-3xl font-bold text-[#0B3C5D] mb-6">
              Our Mission
            </h3>

            <p className="leading-8 text-gray-600">
              To reconcile people back to God through the preaching of the Gospel
              of Jesus Christ, raising disciples who walk in grace, faith,
              holiness, love, and the power of the Holy Spirit.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-10 shadow-lg">
            <h3 className="text-3xl font-bold text-[#0B3C5D] mb-6">
              Our Vision
            </h3>

            <p className="leading-8 text-gray-600">
              To build a Christ-centered church that transforms lives, equips
              believers for ministry, reaches communities with the Gospel, and
              impacts nations through worship, discipleship, prayer, and
              compassionate service.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#0B3C5D] py-24 text-center text-white">
        <h2 className="text-5xl font-bold">
          We'd Love to Welcome You
        </h2>

        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-300">
          Whether you are exploring the Christian faith or searching for a church
          family, there is a place for you at Reconcilers Grace Covenant Ministries.
        </p>

        <Link
          href="/contact"
          className="inline-block mt-10 rounded-full bg-[#D4AF37] px-10 py-4 font-semibold text-[#0B3C5D] transition hover:scale-105"
        >
          Plan Your Visit
        </Link>
      </section>
    </>
  );
}