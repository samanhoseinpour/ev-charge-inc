import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

import { ReactLenis } from "./utils/lenis";

import { ScrollProgress, Navbar, Footer, BackToTopButton } from "./components";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EV Charge Inc - Electric Vehicle Charging Solutions",
  description:
    "EV Charge Inc — LA-based provider of reliable EV charging hardware, OCPP-compliant software, and expert installation.",
  keywords: [
    "EV charging",
    "electric vehicle charging",
    "OCPP software",
    "EV charger installation",
    "sustainable transportation",
    "EV Charge Inc",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="Ev Charge" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/lenis@1.3.4/dist/lenis.css"
        />
      </head>
      <ReactLenis root>
        <body className={`${manrope.variable} antialiased`}>
          <ScrollProgress />
          <BackToTopButton />
          <Navbar />
          {children}
          <Footer />
        </body>
      </ReactLenis>
    </html>
  );
}
