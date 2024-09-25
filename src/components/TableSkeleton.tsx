import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const TableSkeleton: React.FC = () => (
  <div className="px-4 sm:px-6 lg:px-8">
    <div className="mt-8 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                {Array.from({ length: 4 }).map((_, index) => (
                  <th
                    key={index}
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
                  >
                    <Skeleton width={100} />
                  </th>
                ))}
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-3">
                  <Skeleton width={50} />
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {Array.from({ length: 10 }).map((_, index) => (
                <tr key={index} className="even:bg-gray-50">
                  {Array.from({ length: 4 }).map((_, colIndex) => (
                    <td
                      key={colIndex}
                      className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3"
                    >
                      <Skeleton width={150} />
                    </td>
                  ))}
                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
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

export default TableSkeleton;
