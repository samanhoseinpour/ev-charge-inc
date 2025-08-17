const ContactForm = () => {
  return (
    <section className="h-[100svh] isolate py-24 sm:py-32 mt-16 mb-24">
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
      <div className="container mx-auto flex flex-col items-center justify-center max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-balance text-[#0e0004] sm:text-5xl">
          Request a Consultation
        </h1>
        <p className="mt-2 text-lg/8 text-[#0e0004]/70">
          Tell us about your site and charging needs. Our team will scope
          hardware, software, and installation to deliver a reliable, scalable
          EV charging solution.
        </p>
      </div>
      <form
        action="#"
        method="POST"
        className="mt-8 max-w-4xl sm:mt-12 container mx-auto"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-md/6 font-semibold text-[#0e0004]"
            >
              First name *
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                placeholder="First name"
                required
                autoFocus
                className="block w-full rounded-md bg-white px-3.5 py-2 text-md text-[#0e0004] outline-1 -outline-offset-1 outline-[#0e0004]/20 placeholder:text-[#0e0004]/50 focus:outline-2 focus:-outline-offset-2 focus:outline-[#2C5530]"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-md/6 font-semibold text-[#0e0004]"
            >
              Last name *
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                placeholder="Last name"
                required
                className="block w-full rounded-md bg-white px-3.5 py-2 text-md text-[#0e0004] outline-1 -outline-offset-1 outline-[#0e0004]/20 placeholder:text-[#0e0004]/50 focus:outline-2 focus:-outline-offset-2 focus:outline-[#2C5530]"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="company"
              className="block text-md/6 font-semibold text-[#0e0004]"
            >
              Company or organization
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                placeholder="Company name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-md text-[#0e0004] outline-1 -outline-offset-1 outline-[#0e0004]/20 placeholder:text-[#0e0004]/50 focus:outline-2 focus:-outline-offset-2 focus:outline-[#2C5530]"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-md/6 font-semibold text-[#0e0004]"
            >
              Work email *
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="name@company.com"
                required
                className="block w-full rounded-md bg-white px-3.5 py-2 text-md text-[#0e0004] outline-1 -outline-offset-1 outline-[#0e0004]/20 placeholder:text-[#0e0004]/50 focus:outline-2 focus:-outline-offset-2 focus:outline-[#2C5530]"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-md/6 font-semibold text-[#0e0004]"
            >
              Phone number *
            </label>
            <div className="mt-2.5">
              <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-[#0e0004]/20 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-[#2C5530]">
                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country"
                    aria-label="Country"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-transparent py-2 pr-7 pl-3.5 text-md text-[#0e0004] placeholder:text-[#0e0004]/50 focus:outline-2 focus:-outline-offset-2 focus:outline-[#2C5530] sm:text-md/6"
                  >
                    <option>US 🇺🇸</option>
                    <option>CA 🇨🇦</option>
                    <option>EU 🇪🇺</option>
                  </select>
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-[#0e0004]/60 sm:size-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <input
                  id="phone-number"
                  name="phone-number"
                  type="text"
                  placeholder="+1 415 555 0123"
                  required
                  className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-md text-[#0e0004] placeholder:text-[#0e0004]/50 focus:outline-none sm:text-md/6"
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="use-case"
              className="block text-md/6 font-semibold text-[#0e0004]"
            >
              Primary use case *
            </label>
            <div className="mt-2.5">
              <select
                id="use-case"
                name="use-case"
                required
                className="block w-full rounded-md bg-white px-3.5 py-2 text-md text-[#0e0004] outline-1 -outline-offset-1 outline-[#0e0004]/20 focus:outline-2 focus:-outline-offset-2 focus:outline-[#2C5530]"
              >
                <option value="workplace">Workplace</option>
                <option value="fleet">Fleet depot</option>
                <option value="multifamily">Multifamily housing</option>
                <option value="retail">Retail / Commercial</option>
                <option value="public">Public charging</option>
                <option value="hospitality">Hospitality</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="project-location"
              className="block text-md/6 font-semibold text-[#0e0004]"
            >
              Project location *
            </label>
            <div className="mt-2.5">
              <input
                id="project-location"
                name="project-location"
                type="text"
                placeholder="City, State/Province"
                required
                className="block w-full rounded-md bg-white px-3.5 py-2 text-md text-[#0e0004] outline-1 -outline-offset-1 outline-[#0e0004]/20 placeholder:text-[#0e0004]/50 focus:outline-2 focus:-outline-offset-2 focus:outline-[#2C5530]"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="num-ports"
              className="block text-md/6 font-semibold text-[#0e0004]"
            >
              Estimated number of charging ports *
            </label>
            <div className="mt-2.5">
              <input
                id="num-ports"
                name="num-ports"
                type="number"
                min={1}
                placeholder="e.g., 8"
                required
                className="block w-full rounded-md bg-white px-3.5 py-2 text-md text-[#0e0004] outline-1 -outline-offset-1 outline-[#0e0004]/20 placeholder:text-[#0e0004]/50 focus:outline-2 focus:-outline-offset-2 focus:outline-[#2C5530]"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="power-level"
              className="block text-md/6 font-semibold text-[#0e0004]"
            >
              Desired power level *
            </label>
            <div className="mt-2.5">
              <select
                id="power-level"
                name="power-level"
                required
                className="block w-full rounded-md bg-white px-3.5 py-2 text-md text-[#0e0004] outline-1 -outline-offset-1 outline-[#0e0004]/20 focus:outline-2 focus:-outline-offset-2 focus:outline-[#2C5530]"
              >
                <option value="l2">Level 2 (7–22 kW)</option>
                <option value="dc-fast">DC Fast (50–150 kW)</option>
                <option value="high-power-dc">
                  High‑Power DC (150–350 kW)
                </option>
                <option value="not-sure">Not sure</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="timeline"
              className="block text-md/6 font-semibold text-[#0e0004]"
            >
              Project timeline
            </label>
            <div className="mt-2.5">
              <select
                id="timeline"
                name="timeline"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-md text-[#0e0004] outline-1 -outline-offset-1 outline-[#0e0004]/20 focus:outline-2 focus:-outline-offset-2 focus:outline-[#2C5530]"
              >
                <option value="0-3">0–3 months</option>
                <option value="3-6">3–6 months</option>
                <option value="6-12">6–12 months</option>
                <option value=">12">12+ months</option>
                <option value="exploring">Exploring options</option>
              </select>
            </div>
          </div>

          <div className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <div className="group relative inline-flex w-8 shrink-0 rounded-full bg-[#0e0004]/10 p-px inset-ring inset-ring-[#0e0004]/10 outline-offset-2 outline-[#2C5530] transition-colors duration-200 ease-in-out has-checked:bg-[#2C5530] has-focus-visible:outline-2">
                <span className="size-4 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-3.5" />
                <input
                  id="installation-support"
                  name="installation-support"
                  type="checkbox"
                  aria-label="Need installation services"
                  className="absolute inset-0 appearance-none focus:outline-hidden"
                />
              </div>
            </div>
            <label
              htmlFor="installation-support"
              className="text-md/6 text-[#0e0004]/70"
            >
              I need installation services (site survey, make‑ready, permits)
            </label>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-md/6 font-semibold text-[#0e0004]"
            >
              Project details *
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell us about your site (parking layout, available power, access hours), software needs (RFID, payments, OCPP), and any constraints."
                required
                className="block w-full rounded-md bg-white px-3.5 py-2 text-md text-[#0e0004] outline-1 -outline-offset-1 outline-[#0e0004]/20 placeholder:text-[#0e0004]/50 focus:outline-2 focus:-outline-offset-2 focus:outline-[#2C5530]"
                defaultValue={""}
              />
            </div>
          </div>
        </div>

        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-[#2C5530] px-3.5 py-2.5 text-center text-md font-semibold text-white shadow-xs hover:bg-[#2C5530]/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C5530] cursor-pointer"
          >
            Request consultation
          </button>
        </div>
      </form>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#2C5530] to-[#2C5530] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
        />
      </div>
    </section>
  );
};

export default ContactForm;
