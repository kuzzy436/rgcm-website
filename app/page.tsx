import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import LiveBanner from "@/components/home/LiveBanner";
import Welcome from "@/components/home/Welcome";
import Footer from "@/components/layout/Footer";git
import MissionVision from "@/components/home/MissionVision";
import Stats from "@/components/home/Stats";
import CoreValues from "@/components/home/CoreValues";
import Pastor from "@/components/home/Pastor";
import Ministries from "@/components/home/Ministries";
import Events from "@/components/home/Events";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <LiveBanner />
        <Welcome />
        <MissionVision />
        <Stats/>
        <CoreValues />
        <Pastor />
        <Ministries />
        <Events />
      </main>

      <Footer />
    </>
  );
}