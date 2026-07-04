import {
  Calendar,
  Clock,
  Church,
} from "lucide-react";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const services = [
  {
    title: "Sunday Worship Service",
    time: "9:00 AM",
    day: "Every Sunday",
    icon: Church,
  },
  {
    title: "Bible Study",
    time: "6:00 PM",
    day: "Wednesday",
    icon: Calendar,
  },
  {
    title: "Prayer Meeting",
    time: "6:00 PM",
    day: "Friday",
    icon: Clock,
  },
];

export default function ServiceTimes() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <SectionTitle
          subtitle="Join Us"
          title="Weekly Services"
        />

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <Icon
                  className="mb-6 text-yellow-500"
                  size={40}
                />

                <h3 className="mb-2 text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="text-lg font-semibold text-yellow-600">
                  {service.time}
                </p>

                <p className="mt-2 text-gray-600">
                  {service.day}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}