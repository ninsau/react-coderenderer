import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { ActionDropdownProps } from "../types";

const ActionDropdown = <T extends Record<string, unknown>>({
  item,
  index,
  actionTexts,
  actionFunctions,
}: ActionDropdownProps<T>) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState<{
    top: number;
    left: number;
  }>({ top: 0, left: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + window.scrollY,
        left: Math.min(
          rect.left + window.scrollX - 10,
          window.innerWidth - 240
        ),
      });
    }
    setIsDropdownOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDropdownClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const dropdownMenu = (
    <div
      ref={dropdownRef}
      className="absolute z-50 mt-1 w-48 bg-white shadow-md rounded-lg"
      style={{
        top: dropdownPosition.top,
        left: dropdownPosition.left,
        transform: "translateX(-10%)",
      }}
      onClick={handleDropdownClick}
    >
      {actionTexts.map((text, i) => (
        <button
          key={`action-${text}`}
          onClick={() => {
            actionFunctions[i](item);
            setIsDropdownOpen(false);
          }}
          className="block w-full text-left px-4 py-2 text-sm text-gray-500 hover:bg-gray-100"
        >
          {text}
        </button>
      ))}
    </div>
  );

  return (
    <td
      key={`actions-${index}`}
      className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3"
    >
      <button
        ref={buttonRef}
        onClick={toggleDropdown}
        className="focus:outline-none"
      >
        {/* SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 text-gray-500 hover:text-gray-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6h.01M12 12h.01M12 18h.01"
          />
        </svg>
      </button>

      {isDropdownOpen && createPortal(dropdownMenu, document.body)}
    </td>
  );
};

export default ActionDropdown;
