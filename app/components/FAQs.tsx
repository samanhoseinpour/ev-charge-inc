interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface FAQsProps {
  faqs: FAQItem[];
}

const FAQs = ({ faqs }: FAQsProps) => {
  return (
    <section className="max-w-7xl mx-auto py-16 sm:py-24 px-6">
      <h3 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
        Frequently asked questions
      </h3>
      <p className="mt-6 max-w-2xl text-base/7 text-gray-600">
        Have a different question and can’t find the answer you’re looking for?
        Reach out to our support team by{" "}
        <a
          href="mailto:info@evchargeinc.com"
          className="font-semibold text-[#2c5530]"
        >
          sending us an email
        </a>{" "}
        and we’ll get back to you as soon as we can.
      </p>
      <div className="mt-20">
        <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:space-y-0 sm:gap-y-16 lg:gap-x-10">
          {faqs.map((faq) => (
            <div key={faq.id}>
              <dt className="text-base/7 font-semibold text-gray-900">
                {faq.question}
              </dt>
              <dd className="mt-2 text-base/7 text-gray-600">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default FAQs;
