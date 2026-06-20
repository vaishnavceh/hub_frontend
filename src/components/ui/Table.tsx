type TableProps = {
  headers: string[];
  data: string[][];
  emptyMessage?: string;
};

export default function Table({
  headers,
  data,
  emptyMessage = "No data available",
}: TableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
      <table className="min-w-full">
        <thead>
          <tr className="bg-cixio-light">
            {headers.map((header) => (
              <th
                key={header}
                className="px-4 py-3 text-left text-sm font-semibold text-cixio-dark border-b"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={headers.length}
                className="px-4 py-8 text-center text-sm text-gray-500"
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((row, index) => (
              <tr
                key={index}
                className="
                  border-b
                  hover:bg-gray-50
                  transition-colors
                  even:bg-gray-50/40
                "
              >
                {row.map((cell, i) => (
                  <td
                    key={i}
                    className="px-4 py-3 text-sm text-gray-700"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}