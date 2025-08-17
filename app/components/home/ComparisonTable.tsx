type TableColumn = { header: string; key: string };

type TableRow = Record<string, React.ReactNode>;

interface ComparisonTableProps {
  title?: string;
  description?: string;
  columns?: TableColumn[];
  data?: TableRow[];
  className?: string;
}

const defaultColumns: TableColumn[] = [
  { header: "Factor", key: "factor" },
  { header: "Diesel Truck", key: "diesel" },
  { header: "EVcharge Electric Truck", key: "electric" },
];

const defaultData: TableRow[] = [
  { factor: "Annual CO₂", diesel: "~12 tons", electric: "0 tailpipe" },
  { factor: "NOx / PM2.5", diesel: "High", electric: "None" },
  {
    factor: "Noise",
    diesel: "85–90 dB (loud)",
    electric: "60–65 dB (conversation level)",
  },
  {
    factor: "Fuel/Charging Cost",
    diesel: "$4.50–$5.00/gal (~$0.50/mile)",
    electric: "~$0.15/mile",
  },
  { factor: "Annual Maintenance", diesel: "$20K+", electric: "$6K" },
];

const ComparisonTable: React.FC<ComparisonTableProps> = ({
  title = "Why This Matters — Diesel vs. Electric",
  description = "Each truck replaced saves up to $50,000/year and prevents 12 tons of CO₂ — equal to planting 500 trees annually.",
  columns = defaultColumns,
  data = defaultData,
  className,
}) => {
  return (
    <section className={`max-w-7xl mx-auto px-4 py-8 ${className ?? ""}`}>
      <div className="">
        <h3 className="mb-4 text-4xl font-bold tracking-tight text-gray-900">
          {title}
        </h3>

        <p className="mb-8 lg:text-xl">{description}</p>

        <div className="overflow-x-auto bg-white shadow-sm ring-1 ring-gray-200 rounded-lg">
          <table className="min-w-full text-sm text-gray-700">
            <thead className="bg-[#2c5530] text-white font-medium">
              <tr>
                {columns.map((col, idx) => (
                  <th key={idx} className="px-4 py-3 text-left">
                    {col.header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data.map((row, rIdx) => (
                <tr key={rIdx}>
                  {columns.map((col, cIdx) => (
                    <td key={cIdx} className="px-4 py-3">
                      {row[col.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
