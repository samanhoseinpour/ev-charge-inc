const ComparisonTable = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="">
        <h3 className="mb-4 text-4xl font-bold tracking-tight text-gray-900">
          Why This Matters — Diesel vs. Electric
        </h3>

        <p className="mb-8 lg:text-xl">
          Each truck replaced saves up to $50,000/year and prevents 12 tons of
          CO₂ — equal to planting 500 trees annually.
        </p>

        <div className="overflow-x-auto bg-white shadow-sm ring-1 ring-gray-200 rounded-lg">
          <table className="min-w-full text-sm text-gray-700">
            <thead className="bg-[#2c5530] text-white font-medium">
              <tr>
                <th className="px-4 py-3 text-left">Factor</th>
                <th className="px-4 py-3 text-left">Diesel Truck</th>
                <th className="px-4 py-3 text-left">EVcharge Electric Truck</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3">Annual CO₂</td>
                <td className="px-4 py-3">~12 tons</td>
                <td className="px-4 py-3">0 tailpipe</td>
              </tr>
              <tr>
                <td className="px-4 py-3">NOx / PM2.5</td>
                <td className="px-4 py-3">High</td>
                <td className="px-4 py-3">None</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Noise</td>
                <td className="px-4 py-3">85–90 dB (loud)</td>
                <td className="px-4 py-3">60–65 dB (conversation level)</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Fuel/Charging Cost</td>
                <td className="px-4 py-3">$4.50–$5.00/gal (~$0.50/mile)</td>
                <td className="px-4 py-3">~$0.15/mile</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Annual Maintenance</td>
                <td className="px-4 py-3">$20K+</td>
                <td className="px-4 py-3">$6K</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
