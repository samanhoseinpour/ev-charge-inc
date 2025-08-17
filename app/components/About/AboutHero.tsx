import Image from "next/image";
import Link from "next/link";

const AboutHero = () => {
  return (
    <section className="py-24 sm:py-32 mt-16">
      <div className="container mx-auto text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
          Building the Infrastructure for a Zero-Emission Economy
        </h1>
        <p className="mb-8 text-gray-500 sm:px-16 md:text-lg lg:text-md xl:px-48">
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
            className="px-6 py-3 border border-[#2c5530] text-[#2c5530] rounded-md font-semibold hover:bg-[#2c5530] hover:border-[#2c5530] hover:text-white transition-colors"
          >
            Contact Us
          </Link>
        </div>

        <Image
          width={1200}
          height={900}
          className="z-10 mx-auto mb-5 rounded-lg shadow-xl lg:mb-8"
          src="/about/AboutHero.avif"
          alt="dashboard overview"
        />
      </div>
      <div className="z-20 -mt-48 bg-[#2c5530] pb-8 pt-48 sm:-mt-80 sm:pt-80 lg:pb-16">
        <div className="mx-auto px-4 text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
          <div className="mt-8 flex flex-wrap items-center justify-center text-gray-500 sm:justify-between">
            {/* content section */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutHero;
