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
    name: "Lower Operating Costs",
    description:
      "Electric trucks reduce fuel and maintenance expenses compared to traditional diesel fleets.",
    icon: IconClockDollar,
  },
  {
    name: "Zero Tailpipe Emissions",
    description:
      "Eliminate harmful pollutants and greenhouse gas emissions, supporting sustainability goals.",
    icon: IconVersions,
  },
  {
    name: "Government Incentives",
    description:
      "Benefit from tax credits, grants, and subsidies that accelerate ROI for electric fleets.",
    icon: IconLaurelWreath,
  },
  {
    name: "Quiet and Efficient",
    description:
      "Reduced noise pollution and smoother operation improve driver comfort and urban livability.",
    icon: IconSolarElectricity,
  },
  {
    name: "Advanced Technology",
    description:
      "Integrated telematics, regenerative braking, and smart energy management optimize performance.",
    icon: IconAi,
  },
  {
    name: "Future-Proof Compliance",
    description:
      "Meet evolving emissions regulations and avoid costly penalties or retrofits.",
    icon: IconComponents,
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
            <div className="absolute -inset-x-20 bottom-0 bg-linear-to-t from-white pt-[7%]" />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base/7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {whyTruckFeatures.map((feature) => (
            <div key={feature.name} className="relative pl-9">
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
