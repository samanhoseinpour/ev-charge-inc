import Link from "next/link";

const HomeHeroCta = () => {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="container mx-auto py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm/6 bg-white/30 text-white ring-1 ring-white/10 backdrop-blur-3xl">
            Scheduled maintenance in progress.{" "}
            <Link href="/contact" className="font-semibold">
              <span aria-hidden="true" className="absolute inset-0" />
              Learn More <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-5xl font-bold tracking-tight text-balance text-white sm:text-7xl">
            Powering the Future of Clean Transportation
          </h1>
          <p className="mt-8 text-lg font-medium text-pretty text-white sm:text-xl/8">
            Welcome to EV Charge Inc., your Irvine, California partner for
            zero-emission transportation and clean energy. We deliver 400 kW DC
            fast-charging stations, operate a fleet of zero-emission trucks, and
            power them with solar farms—creating cleaner, healthier cities with
            lower operating costs.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/solutions"
              className="px-6 py-3 bg-[#2c5530] text-white rounded-md font-semibold hover:opacity-90 transition-opacity"
            >
              Explore Our Solutions
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-[white] text-[white] rounded-md font-semibold hover:bg-[#2c5530] hover:border-[#2c5530] hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroCta;
