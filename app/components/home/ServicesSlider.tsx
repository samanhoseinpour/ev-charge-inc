"use client";

import { Carousel, Card } from "../home/ServicesCardCarousel";
import Image from "next/image";
import Link from "next/link";

const ServicesSlider = () => {
  const cards = servicesSliderData.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section className="w-full h-full py-20">
      <div className="mx-auto container px-6">
        <h2 className="text-base/7 font-bold text-[#2c5530]">
          Engineering the Backbone of Clean Transportation
        </h2>
        <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl sm:text-balance">
          Solutions Built for Scale and Reliability
        </p>
        <p className="mt-6 text-lg/8 text-gray-600 w-3/4">
          Our services span high-capacity DC fast charging, depot microgrids,
          renewable integration, and utility-grade storage. We design, deploy,
          and operate systems with uptime, safety, and standards compliance at
          the core—so fleets can scale without operational risk.
        </p>
      </div>

      <Carousel items={cards} />
    </section>
  );
};

const ServicesContent = ({
  sections,
  imageSrc = "/logo-white.svg",
  imageAlt = "Service image",
  imageHeight = 150,
  imageWidth = 150,
}: {
  sections: { title: string; items: string[] }[];
  imageSrc?: string;
  imageAlt?: string;
  imageHeight?: number;
  imageWidth?: number;
}) => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"services-content" + index}
            className="bg-white/80 p-8 rounded-3xl mb-4"
          >
            <ul className="text-black/80 text-base md:text-xl font-sans max-w-5xl mx-auto list-disc pl-6">
              {sections.map((section, sIdx) => (
                <li key={`section-${sIdx}`}>
                  <span className="font-semibold text-black">
                    {section.title}
                  </span>
                  <ul className="list-disc pl-6">
                    {section.items.map((item, iIdx) => (
                      <li key={`item-${sIdx}-${iIdx}`}>{item}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            <Image
              src={imageSrc}
              alt={imageAlt}
              height={imageHeight}
              width={imageWidth}
              className="h-full w-full mx-auto object-cover rounded-lg mt-6"
            />
            <div className="hidden sm:mb-8 sm:flex sm:justify-center mt-12">
              <div className="relative rounded-full px-3 py-1 text-sm/6 bg-[#2c5530] text-white ring-1 ring-white/10 backdrop-blur-3xl">
                Scheduled maintenance in progress.{" "}
                <Link href="/contact" className="font-semibold">
                  <span aria-hidden="true" className="absolute inset-0" />
                  Learn More <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ServicesSlider;

export const servicesSliderData = [
  {
    category: "EV Charging Infrastructure",
    title: "Scalable charging solutions for every location",
    src: "/home/servicesSlider-1.jpg",
    content: (
      <ServicesContent
        sections={[
          {
            title: "EV Charging Infrastructure",
            items: [
              "150 kW to 500 kW DC fast chargers",
              "Network management software (real-time monitoring, analytics)",
              "Custom charging hubs for retail, highway, and fleet locations",
            ],
          },
        ]}
        imageSrc="/home/servicesSlider-1.jpg"
        imageAlt="EV charging infrastructure"
      />
    ),
  },
  {
    category: "Heavy-Duty Fleet Solutions",
    title: "Fleet and operations made more efficient",
    src: "/home/servicesSlider-2.webp",
    content: (
      <ServicesContent
        sections={[
          {
            title: "Heavy-Duty Fleet Solutions",
            items: [
              "Lease, rent, or purchase Class 8 zero-emission trucks",
              "Depot electrification design & operation",
              "Fleet performance optimization and driver training",
            ],
          },
        ]}
        imageSrc="/home/servicesSlider-2.webp"
        imageAlt="Heavy-duty fleet solutions"
      />
    ),
  },
  {
    category: "Renewable Energy & Storage",
    title: "Integrated renewable energy systems",
    src: "/home/servicesSlider-3.jpg",
    content: (
      <ServicesContent
        sections={[
          {
            title: "Renewable Energy & Storage",
            items: [
              "Large-scale solar farms",
              "Battery Energy Storage Systems (BESS) for peak shaving and backup",
              "Microgrids for remote or high-demand sites",
            ],
          },
        ]}
        imageSrc="/home/servicesSlider-3.jpg"
        imageAlt="Renewable energy and storage"
      />
    ),
  },
  {
    category: "Renewable Energy & Storage",
    title: "Smart microgrids and energy storage",
    src: "/home/servicesSlider-4.jpeg",
    content: (
      <ServicesContent
        sections={[
          {
            title: "Microgrids & Storage",
            items: [
              "Islandable microgrids for critical loads",
              "BESS sizing & dispatch optimization",
              "Demand charge management & peak shaving",
            ],
          },
        ]}
        imageSrc="/home/servicesSlider-4.jpeg"
        imageAlt="Smart microgrids and storage"
      />
    ),
  },
  {
    category: "Consulting & Turnkey Projects",
    title: "Consulting and turnkey project delivery",
    src: "/home/servicesSlider-5.avif",
    content: (
      <ServicesContent
        sections={[
          {
            title: "Consulting & Turnkey Projects",
            items: [
              "Site feasibility studies and ROI modeling",
              "Permitting and compliance support",
              "State & federal grant/incentive assistance",
            ],
          },
        ]}
        imageSrc="/home/servicesSlider-5.avif"
        imageAlt="Consulting and turnkey delivery"
      />
    ),
  },
  {
    category: "Consulting & Turnkey Projects",
    title: "Expert guidance and compliance support",
    src: "/home/servicesSlider-6.jpg",
    content: (
      <ServicesContent
        sections={[
          {
            title: "Consulting & Compliance",
            items: [
              "Grant & incentive applications (state & federal)",
              "NEC/UL compliance and interconnection",
              "Program management from permit to PTO",
            ],
          },
        ]}
        imageSrc="/home/servicesSlider-6.jpg"
        imageAlt="Expert compliance support"
      />
    ),
  },
];
