import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface TableSkeletonProps {
  disableDefaultStyles?: boolean;
  customClassNames?: {
    container?: string;
    table?: string;
    th?: string;
    tr?: string;
    td?: string;
  };
}

const TableSkeleton: React.FC<TableSkeletonProps> = ({
  disableDefaultStyles = false,
  customClassNames = {},
}) => {
  const defaultContainerClassName = "px-4 sm:px-6 lg:px-8";
  const defaultTableClassName = "min-w-full divide-y divide-gray-300";
  const defaultThClassName =
    "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3";
  const defaultTrClassName = (index: number) =>
    index % 2 === 0 ? "bg-white" : "bg-gray-50";
  const defaultTdClassName =
    "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3";

  const containerClassName = disableDefaultStyles
    ? customClassNames.container || ""
    : `${defaultContainerClassName} ${customClassNames.container || ""}`;

  const tableClassName = disableDefaultStyles
    ? customClassNames.table || ""
    : `${defaultTableClassName} ${customClassNames.table || ""}`;

  const thClassName = disableDefaultStyles
    ? customClassNames.th || ""
    : `${defaultThClassName} ${customClassNames.th || ""}`;

  const trClassName = (index: number) =>
    disableDefaultStyles
      ? customClassNames.tr || ""
      : `${defaultTrClassName(index)} ${customClassNames.tr || ""}`;

  const tdClassName = disableDefaultStyles
    ? customClassNames.td || ""
    : `${defaultTdClassName} ${customClassNames.td || ""}`;

  return (
    <div className={containerClassName}>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className={tableClassName}>
              <thead>
                <tr>
                  {Array.from({ length: 4 }).map((_, index) => (
                    <th key={index} scope="col" className={thClassName}>
                      <Skeleton width={100} />
                    </th>
                  ))}
                  <th scope="col" className={thClassName}>
                    <Skeleton width={50} />
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 10 }).map((_, index) => (
                  <tr key={index} className={trClassName(index)}>
                    {Array.from({ length: 4 }).map((_, colIndex) => (
                      <td key={colIndex} className={tdClassName}>
                        <Skeleton width={150} />
                      </td>
                    ))}
                    <td className={tdClassName}>
                      <Skeleton width={50} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableSkeleton;
