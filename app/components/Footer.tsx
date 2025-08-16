import Image from "next/image";
import Link from "next/link";

import {
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandX,
  IconBrandYoutube,
} from "@tabler/icons-react";

const footerNavigation = {
  solutions: [
    { name: "Home Charging", href: "#" },
    { name: "Fleet Charging", href: "#" },
    { name: "Workplace Charging", href: "#" },
    { name: "Public Network", href: "#" },
    { name: "Energy Management", href: "#" },
  ],
  support: [
    { name: "Support Center", href: "#" },
    { name: "Installation Docs", href: "#" },
    { name: "Troubleshooting", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
  ],
  legal: [
    { name: "Terms of service", href: "#" },
    { name: "Privacy policy", href: "#" },
    { name: "License", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: () => <IconBrandFacebook />,
    },
    {
      name: "Instagram",
      href: "#",
      icon: () => <IconBrandInstagram />,
    },
    {
      name: "X",
      href: "#",
      icon: () => <IconBrandX />,
    },
    {
      name: "Linkedin",
      href: "#",
      icon: () => <IconBrandLinkedin />,
    },
    {
      name: "YouTube",
      href: "#",
      icon: () => <IconBrandYoutube />,
    },
  ],
};

const Footer = () => {
  const currentDate = new Date();

  return (
    <footer>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#2C5530] to-[#2C5530] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
        />
      </div>
      <div className="container mx-auto px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <hgroup>
            <h4 className="text-base/7 font-Bold text-[#2c5530]">
              Ready to charge smarter?
            </h4>
            <p className="mt-2 text-4xl font-semibold text-[#0e0004] sm:text-5xl">
              Accelerate your transition to electric with reliable, scalable EV
              charging.
            </p>
          </hgroup>
          <p className="mx-auto mt-6 max-w-4xl text-lg/8 text-pretty text-[#0e0004]">
            From single-family homes to large fleet depots, our hardware and
            software make charging fast, dependable, and simple to manage—backed
            by OCPP compliance, remote diagnostics, and 24/7 support.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="rounded-md bg-[#2c5530] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#2c5530]/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2c5530]"
            >
              Request a quote
            </Link>
          </div>
        </div>
        <div className="mt-24 border-t border-gray-900/10 pt-12 xl:grid xl:grid-cols-3 xl:gap-8">
          <Link href="/">
            <Image
              src="/logo-black.svg"
              alt="Website Logo"
              width={240}
              height={240}
            />
          </Link>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm/6 font-semibold text-[#0e0004]">
                  Solutions
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm/6 text-[#0e0004] hover:text-[#0e0004]"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm/6 font-semibold text-[#0e0004]">
                  Support
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.support.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm/6 text-[#0e0004] hover:text-[#0e0004]"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm/6 font-semibold text-[#0e0004]">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm/6 text-[#0e0004] hover:text-[#0e0004]"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm/6 font-semibold text-[#0e0004]">
                  Legal
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm/6 text-[#0e0004] hover:text-[#0e0004]"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-900/10 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex gap-x-6 md:order-2">
            {footerNavigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[#0e0004] hover:text-[#0e0004]"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-sm/6 text-[#0e0004] md:order-1 md:mt-0">
            &copy; {currentDate.getFullYear()}{" "}
            <Link href="/" className="font-bold text-[#2c5530]">
              Ev Charge, Inc.
            </Link>{" "}
            {""}
            All rights reserved - Powered By {""}
            <a
              href="https://perseustudio.com/"
              target="_blank"
              className="font-semibold"
            >
              Perseus Creative Studio.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
