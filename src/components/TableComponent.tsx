import React from "react";
import { formatDate, isDateString, trimText } from "../utils/helpers";
import { TableProps } from "../types";
import NoContentComponent from "./NoContentComponent";
import TableSkeleton from "./TableSkeleton";
import ActionDropdown from "./ActionDropdown";
import Link from "next/link";

function TableComponent<T>({
  columns,
  data,
  props,
  actions,
  actionTexts,
  loading,
  actionFunctions,
  searchValue,
}: TableProps<T>) {
  if (!data || loading) {
    return <TableSkeleton />;
  }

  if (data.length === 0) {
    return <NoContentComponent name={searchValue ?? "items"} />;
  }

  return (
    <div className="my-8 overflow-x-auto">
      <div className="inline-block min-w-full align-middle">
        <div className="overflow-hidden border border-gray-200 rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {columns.map((column) => (
                  <th
                    key={column}
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {column}
                  </th>
                ))}
                {actions && actionTexts && (
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">{actionTexts.join(", ")}</span>
                  </th>
                )}
              </tr>
            </thead>
            <tbody className="bg-white">
              {data.map((item, dataIndex) => (
                <tr key={dataIndex} className="even:bg-gray-50">
                  {props.map((prop) => {
                    const value = item[prop as keyof T];
                    let displayValue: React.ReactNode;

                    if (typeof value === "string" && isDateString(value)) {
                      displayValue = formatDate(new Date(value), true);
                    } else if (Array.isArray(value)) {
                      displayValue = (
                        <div className="flex flex-wrap gap-1">
                          {value.map((chip, idx) => (
                            <span
                              key={idx}
                              className="inline-block bg-indigo-100 text-gray-800 px-2 py-1 rounded-full text-xs"
                            >
                              {trimText(String(chip), 20)}
                            </span>
                          ))}
                        </div>
                      );
                    } else if (
                      typeof value === "string" &&
                      value.startsWith("http")
                    ) {
                      displayValue = (
                        <Link href={value}>
                          <span
                            className="text-blue-500 hover:underline"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {trimText(value, 30)}
                          </span>
                        </Link>
                      );
                    } else {
                      displayValue = trimText(String(value), 30);
                    }

                    return (
                      <td
                        key={String(prop)}
                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-700"
                      >
                        {displayValue}
                      </td>
                    );
                  })}
                  {actions && actionTexts && actionFunctions && (
                    <ActionDropdown<T>
                      item={item}
                      index={dataIndex}
                      actionTexts={actionTexts}
                      actionFunctions={actionFunctions}
                    />
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TableComponent;
