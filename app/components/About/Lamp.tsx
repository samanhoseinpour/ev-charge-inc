"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "../../utils/aceternity";
import Link from "next/link";

const Lamp = () => {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="bg-gradient-to-br from-[#0e0004] to-[#0e0004] py-4 bg-clip-text text-center text-5xl font-bold text-transparent"
      >
        Engineering the Backbone of the Zero-Emission Era
      </motion.h1>
      <motion.p
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-4 max-w-7xl text-center text-lg text-[#0e0004]"
      >
        EVcharge Inc. is a California-based corporation dedicated to advancing
        zero- emission and low-emission energy technologies. The company
        develops, constructs, and operates electric vehicle (EV) charging
        infrastructure, hydrogen production and fueling networks, and renewable
        natural gas (RNG) and compressed natural gas (CNG) solutions for
        commercial and heavy-duty vehicles. EVcharge also develops solar and
        geothermal energy projects and integrates smart-grid and energy storage
        technologies. Leveraging a multidisciplinary team with expertise in
        Electronic, Petroleum and Drilling engineering, as well as geothermal
        systems, the company delivers efficient and sustainable energy solutions
        and contributes to California’s transition toward a zero-emission
        economy.
      </motion.p>
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-6 flex gap-4"
      >
        <Link
          href="/solutions"
          className="px-6 py-3 bg-[#2c5530] text-white rounded-md font-semibold hover:opacity-90 transition-opacity"
        >
          Explore Our Solutions
        </Link>
        <Link
          href="/contact"
          className="px-6 py-3 border border-[#2c5530] text-[#2c5530] rounded-md font-semibold hover:bg-[#2c5530] hover:text-white transition-colors"
        >
          Contact Us
        </Link>
      </motion.div>
    </LampContainer>
  );
};

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={cn(
        "container mx-auto -mb-24 mt-24 relative flex h-[90svh] flex-col items-center justify-center overflow-hidden bg-[#fff] w-full rounded-md z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-[#2c5530] via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute  w-[100%] left-0 bg-[#fff] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute  w-40 h-[100%] left-0 bg-[#fff]  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-[#2c5530] text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute  w-40 h-[100%] right-0 bg-[#fff]  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute  w-[100%] right-0 bg-[#fff] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-[#2c5530] blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-[#2c5530] "
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-[#fff] "></div>
      </div>

      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </section>
  );
};

export default Lamp;
