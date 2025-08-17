// app/components/home/FeatureListHome.tsx
import Image from "next/image";
import { IconCircleCheckFilled } from "@tabler/icons-react";

const FeatureListHome = () => {
  return (
    <section>
      <div className="container mx-auto space-y-12 px-6 py-8 sm:py-16 lg:space-y-20">
        {/* Block 1 — Fast Charging */}
        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-8 xl:gap-16">
          <div className="text-gray-600 sm:text-lg">
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900">
              Fast Charging, Zero Emissions
            </h2>

            <p className="mb-8 lg:text-xl">
              Electrify heavy-duty fleets without operational compromise. Our
              high-power sites are designed around driver breaks and turn-time,
              not the other way around.
            </p>

            <ul className="my-7 space-y-5 border-t border-gray-200 pt-8">
              <li className="flex space-x-3">
                <IconCircleCheckFilled className="h-5 w-5 shrink-0 text-[#2c5530]" />
                <span className="text-base font-medium leading-tight text-gray-900">
                  <span className="font-semibold">
                    400&nbsp;kW DC fast chargers
                  </span>{" "}
                  deliver a{" "}
                  <span className="font-semibold">500-mile range</span> for
                  heavy-duty trucks in{" "}
                  <span className="font-semibold">~45 minutes</span> — about
                  twice as fast as many public heavy-duty chargers in
                  California.
                </span>
              </li>

              <li className="flex space-x-3">
                <IconCircleCheckFilled className="h-5 w-5 shrink-0 text-[#2c5530]" />
                <span className="text-base font-medium leading-tight text-gray-900">
                  Charge during standard driver rest breaks, saving{" "}
                  <span className="font-semibold">$200+ per fill-up</span>{" "}
                  versus diesel and keeping routes on schedule.
                </span>
              </li>

              <li className="flex space-x-3">
                <IconCircleCheckFilled className="h-5 w-5 shrink-0 text-[#2c5530]" />
                <span className="text-base font-medium leading-tight text-gray-900">
                  Built for uptime with active monitoring and redundant power
                  modules to minimize dwell.
                </span>
              </li>
            </ul>

            <p className="mb-8 lg:text-xl">
              Result: lower operating cost, higher asset utilization, and zero
              tailpipe emissions.
            </p>
          </div>

          <div>
            <Image
              alt="EV fast-charging site with heavy-duty bays"
              src="/home/featureListHome-1.png"
              width={600}
              height={400}
              className="mb-4 hidden w-full rounded-lg lg:mb-0 lg:flex"
            />
            <div aria-hidden="true" className="relative">
              <div className="absolute -inset-x-20 bottom-0 bg-linear-to-t from-white pt-[15%]" />
            </div>
          </div>
        </div>

        {/* Block 2 — Solar-Powered Clean Energy */}
        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-8 xl:gap-16">
          <div>
            <Image
              alt="Utility-scale solar powering EV charging infrastructure"
              src="/home/featureListHome-2.png"
              width={600}
              height={400}
              className="mb-4 hidden w-full rounded-lg lg:mb-0 lg:flex"
            />
            <div aria-hidden="true" className="relative">
              <div className="absolute -inset-x-20 bottom-0 bg-linear-to-t from-white pt-[15%]" />
            </div>
          </div>

          <div className="text-gray-600 sm:text-lg">
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900">
              Solar-Powered Clean Energy
            </h2>

            <p className="mb-8 lg:text-xl">
              We pair on-site storage with utility-scale solar to deliver
              predictable, renewable power where and when you need it.
            </p>

            <ul className="my-7 space-y-5 border-t border-gray-200 pt-8">
              <li className="flex space-x-3">
                <IconCircleCheckFilled className="h-5 w-5 shrink-0 text-[#2c5530]" />
                <span className="text-base font-medium leading-tight text-gray-900">
                  Our solar farms cut emissions by{" "}
                  <span className="font-semibold">~20% per kWh</span> vs.
                  California’s average grid mix.
                </span>
              </li>

              <li className="flex space-x-3">
                <IconCircleCheckFilled className="h-5 w-5 shrink-0 text-[#2c5530]" />
                <span className="text-base font-medium leading-tight text-gray-900">
                  <span className="font-semibold">100% renewable charging</span>{" "}
                  eliminates fossil fuel reliance, stabilizes costs, and reduces
                  greenhouse-gas emissions.
                </span>
              </li>

              {/* Optional, concise expansion for completeness */}
              <li className="flex space-x-3">
                <IconCircleCheckFilled className="h-5 w-5 shrink-0 text-[#2c5530]" />
                <span className="text-base font-medium leading-tight text-gray-900">
                  Energy storage buffers peak demand to manage loads and protect
                  route SLAs.
                </span>
              </li>
            </ul>

            <p className="lg:text-xl">
              The outcome: cleaner kWh, cost stability, and resilient charging
              at scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureListHome;
