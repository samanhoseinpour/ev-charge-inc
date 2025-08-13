import type { Metadata } from "next";

import { ContactForm, ContactInfo } from "../components";

export const metadata: Metadata = {
  title: "Request a Consultation | EV Charge Inc",
  description:
    "Tell us about your site and charging needs. We’ll scope hardware, software, and installation to deliver a reliable, scalable EV charging solution.",
};

const ContactPage = () => {
  return (
    <main>
      <ContactForm />
      <ContactInfo />
    </main>
  );
};

export default ContactPage;
