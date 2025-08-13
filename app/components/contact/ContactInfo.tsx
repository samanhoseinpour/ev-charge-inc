const contactCards: {
  title: string;
  email: string;
  phoneLabel: string;
  phoneHref: string;
}[] = [
  {
    title: "Email",
    email: "info@evchargeinc.com",
    phoneLabel: "(949) 555-1234",
    phoneHref: "tel:+19495551234",
  },
  {
    title: "Partnerships",
    email: "partners@evchargeinc.com",
    phoneLabel: "(949) 555-1234",
    phoneHref: "tel:+19495551234",
  },
  {
    title: "Media",
    email: "press@evchargeinc.com",
    phoneLabel: "(949) 555-1234",
    phoneHref: "tel:+19495551234",
  },
  {
    title: "Support",
    email: "support@evchargeinc.com",
    phoneLabel: "(949) 555-1234",
    phoneHref: "tel:+19495551234",
  },
];

const officeCards: { title: string; lines: string[] }[] = [
  {
    title: "EV Charge Inc.",
    lines: ["123 Greenway Drive", "Irvine, CA 92603"],
  },
  {
    title: "Business Hours:",
    lines: [
      "Mon–Fri: 8:00 AM – 6:00 PM PST",
      "Sat: By Appointment",
      "Sun: Closed",
    ],
  },
];

const ContactInfo = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
        {/* Contact */}
        <div className="grid grid-cols-1 gap-10 py-16 lg:grid-cols-3">
          <div>
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900">
              Get in touch
            </h2>
            <p className="mt-4 text-base/7 text-gray-600">
              Talk to our team about home, workplace, and fleet charging. We typically
              respond within one business day and can advise on design, installation,
              rebates, and ongoing support.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
            {contactCards.map(({ title, email, phoneLabel, phoneHref }) => (
              <div key={title} className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base/7 font-semibold text-gray-900">
                  {title}
                </h3>
                <dl className="mt-3 space-y-1 text-sm/6 text-gray-600">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a
                        href={`mailto:${email}`}
                        className="font-semibold text-[#2c5530]"
                      >
                        {email}
                      </a>
                    </dd>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>
                      <a href={phoneHref} className="hover:underline">
                        {phoneLabel}
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </div>

        {/* Head Office */}
        <div className="grid grid-cols-1 gap-10 py-16 lg:grid-cols-3">
          <div>
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900">
              Head Office
            </h2>
            <p className="mt-4 text-base/7 text-gray-600">
              Visit our Irvine headquarters during business hours. For consultations or
              site assessments, please schedule an appointment so we can connect you with
              the right specialist.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
            {officeCards.map(({ title, lines }) => (
              <div key={title} className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base/7 font-semibold text-gray-900">
                  {title}
                </h3>
                <address className="mt-3 space-y-1 text-sm/6 text-gray-600 not-italic">
                  {lines.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </address>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
