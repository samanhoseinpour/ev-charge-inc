import Image from "next/image";

import {
  IconAi,
  IconVersions,
  IconLaurelWreath,
  IconSolarElectricity,
  IconClockDollar,
  IconComponents,
} from "@tabler/icons-react";

const whyTruckFeatures = [
  {
    id: 1,
    name: "Zero Tailpipe Emissions",
    description:
      "Completely eliminates CO₂, NOx, and PM2.5 emissions, supporting clean air and sustainability goals.",
    icon: IconVersions,
  },
  {
    id: 2,
    name: "Instant Torque",
    description:
      "Electric drivetrains deliver immediate torque and superior acceleration compared to diesel engines.",
    icon: IconAi,
  },
  {
    id: 3,
    name: "Regenerative Braking",
    description:
      "Captures energy during braking and extends brake component life by up to 50%.",
    icon: IconComponents,
  },
  {
    id: 4,
    name: "Quiet Operation",
    description:
      "Reduced noise pollution and quieter driving help lower driver fatigue and improve urban livability.",
    icon: IconSolarElectricity,
  },
  {
    id: 5,
    name: "No Idling Penalties",
    description:
      "Zero idling emissions eliminate compliance risks and reduce unnecessary fuel waste.",
    icon: IconClockDollar,
  },
  {
    id: 6,
    name: "Lower Operating Costs",
    description:
      "Electric trucks average ~$0.15 per mile vs. ~$0.50 per mile for diesel, delivering significant savings.",
    icon: IconLaurelWreath,
  },
];

const WhyTruck = () => {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl sm:text-center">
          <h2 className="text-base/7 font-semibold text-[#2c5530]">
            Electric trucks are not just eco-friendly — they’re economically
            smarter.
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl sm:text-balance">
            Why Choose Electric Trucks?
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            Electric trucks are reshaping logistics — offering lower total cost
            of ownership, reduced environmental impact, and compliance with
            evolving regulations. The shift is no longer optional; it’s
            inevitable.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="container mx-auto px-6 lg:px-8">
          <Image
            alt="Tesla Electric Truck"
            src="/home/WhyTruck.webp"
            width={2432}
            height={1442}
            className="mb-[-12%] rounded-xl ring-1 shadow-2xl ring-gray-900/10 object-cover"
          />
          <div aria-hidden="true" className="relative">
            <div className="absolute -inset-x-20 bottom-0 bg-linear-to-t from-white pt-[10%]" />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base/7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {whyTruckFeatures.map((feature) => (
            <div key={feature.id} className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <feature.icon
                  aria-hidden="true"
                  className="absolute top-1 left-1 size-5 text-[#2c5530]"
                />
                {feature.name}
              </dt>{" "}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default WhyTruck;
