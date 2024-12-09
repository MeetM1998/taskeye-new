import { Empty } from "antd";
import { useState } from "react";

const Table = ({ data }) => {
  const [selectedRowKey, setSelectedRowKey] = useState(null);

  const { headers, rows } = data;

  return (
    <div>
      <table className="w-full h-full table-fixed">
        <thead className="bg-platinum sticky top-0 z-10">
          <tr>
            {headers.map((item, index) => (
              <th
                key={index}
                style={{ maxWidth: `${item.width}%` }}
                className={`w-full p-2 text-center text-xs font-bold text-black border-b border-r border-silver-foil`}
              >
                {item.lable || "-"}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length > 0 ? (
            rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                onClick={() => setSelectedRowKey(rowIndex)}
                className={`cursor-pointer ${
                  rowIndex === selectedRowKey
                    ? "bg-peach-orange"
                    : "hover:bg-tea-green"
                } ${
                  rowIndex === rows.length - 1
                    ? "border-b border-silver-foil"
                    : ""
                }`}
              >
                {headers.map((header, colIndex) => (
                  <td
                    key={colIndex}
                    className="p-2 text-xs border-r border-silver-foil text-center break-words"
                  >
                    {row.find((cell) => cell.key === header.key)?.value || "-"}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={headers.length} className="text-center p-4">
                <Empty description="No data found" />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
