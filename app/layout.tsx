import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

import { ReactLenis } from "./utils/lenis";

import { ScrollProgress, Navbar, Footer } from "./components";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EV Charge Inc - Electric Vehicle Charging Solutions",
  description:
    "EV Charge Inc — LA-based provider of reliable EV charging hardware, OCPP-compliant software, and expert installation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body className={`${manrope.variable} antialiased`}>
          <ScrollProgress />
          <Navbar />
          {children}
          <Footer />
        </body>
      </ReactLenis>
    </html>
  );
}
