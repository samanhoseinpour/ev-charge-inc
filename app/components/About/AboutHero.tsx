import Link from "next/link";

import { Video } from "@imagekit/next";

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 h-[100svh] mb-24">
      <div className="absolute inset-0 w-full h-full z-0 bg-black">
        <Video
          urlEndpoint="https://ik.imagekit.io/evchargeinc/"
          src="/aboutHero.mp4/ik-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-80"
        />
      </div>
      <div className="container relative z-10 mx-auto text-center flex flex-col justify-center items-center h-full">
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl text-white">
          Building the Infrastructure for a Zero-Emission Economy
        </h1>
        <p className="mb-8 sm:px-16 md:text-lg lg:text-xl xl:px-48 text-white font-semibold">
          EVcharge Inc. is a California-based corporation dedicated to advancing
          zero- emission and low-emission energy technologies. The company
          develops, constructs, and operates electric vehicle (EV) charging
          infrastructure, hydrogen production and fueling networks, and
          renewable natural gas (RNG) and compressed natural gas (CNG) solutions
          for commercial and heavy-duty vehicles. EVcharge also develops solar
          and geothermal energy projects and integrates smart-grid and energy
          storage technologies. Leveraging a multidisciplinary team with
          expertise in Electronic, Petroleum and Drilling engineering, as well
          as geothermal systems, the company delivers efficient and sustainable
          energy solutions and contributes to California’s transition toward a
          zero-emission economy.
        </p>
        <div className="mt-10 mb-8 flex items-center justify-center gap-x-6">
          <Link
            href="/solutions"
            className="px-6 py-3 bg-[#2c5530] text-white rounded-md font-semibold hover:opacity-90 transition-opacity"
          >
            Explore Our Solutions
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border border-white text-[white] rounded-md font-semibold hover:bg-[#2c5530] hover:border-[#2c5530] hover:text-white transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};
export default AboutHero;
