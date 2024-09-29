import React, { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ExtendedCodeRendererProps } from "../types";

const CopyIcon = ({ copied }: { copied: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke={copied ? "green" : "currentColor"}
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 7H7a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-1M16 3H9a2 2 0 00-2 2v10a2 2 0 002 2h7a2 2 0 002-2V5a2 2 0 00-2-2z"
    />
  </svg>
);

const CodeRenderer: React.FC<ExtendedCodeRendererProps> = ({
  code,
  children,
  disableDefaultStyles = false,
  customClassNames = {},
  enableDarkMode = true,
}) => {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Detect dark mode only if enableDarkMode is true
  useEffect(() => {
    if (enableDarkMode) {
      const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
      setIsDarkMode(matchMedia.matches);
      const handleChange = () => setIsDarkMode(matchMedia.matches);
      matchMedia.addEventListener("change", handleChange);
      return () => {
        matchMedia.removeEventListener("change", handleChange);
      };
    }
  }, [enableDarkMode]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // Conditional styles based on dark mode
  const containerClassName = disableDefaultStyles
    ? customClassNames.container || ""
    : `${isDarkMode ? "bg-gray-900 text-gray-200" : "bg-gray-50 text-gray-900"} 
       p-4 border rounded-md shadow-lg transition-all duration-300 ease-in-out 
       ${customClassNames.container || ""}`;

  const buttonGroupClassName = disableDefaultStyles
    ? customClassNames.buttonGroup || ""
    : `flex ${isDarkMode ? "bg-gray-800" : "bg-gray-200"} 
       rounded-full p-1 transition-all duration-200 ease-in-out 
       ${customClassNames.buttonGroup || ""}`;

  const buttonClassName = disableDefaultStyles
    ? customClassNames.button || ""
    : `px-4 py-1.5 rounded-full transition-colors duration-200 ease-in-out 
       ${customClassNames.button || ""}`;

  const copyButtonClassName = disableDefaultStyles
    ? customClassNames.copyButton || ""
    : `flex items-center gap-2 text-sm font-medium 
       ${isDarkMode ? "text-gray-200" : "text-gray-900"} 
       hover:${isDarkMode ? "text-gray-400" : "text-gray-500"} 
       transition-all duration-200 ease-in-out 
       ${customClassNames.copyButton || ""}`;

  const codeBlockClassName = disableDefaultStyles
    ? customClassNames.codeBlock || ""
    : `mt-4 p-4 rounded-lg border ${
        isDarkMode ? "bg-gray-900 text-gray-200" : "bg-gray-50 text-gray-800"
      } 
       overflow-auto shadow-md transition-opacity duration-200 ease-in-out opacity-100 
       ${customClassNames.codeBlock || ""}`;

  return (
    <div className={containerClassName}>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-4 ml-auto">
          <div className={buttonGroupClassName}>
            <button
              onClick={() => setShowCode(false)}
              className={`${buttonClassName} ${
                !showCode
                  ? `${
                      isDarkMode
                        ? "bg-gray-700 text-gray-200"
                        : "bg-white text-gray-900"
                    }`
                  : ""
              }`}
            >
              Preview
            </button>
            <button
              onClick={() => setShowCode(true)}
              className={`${buttonClassName} ${
                showCode
                  ? `${
                      isDarkMode
                        ? "bg-gray-700 text-gray-200"
                        : "bg-white text-gray-900"
                    }`
                  : ""
              }`}
            >
              Code
            </button>
          </div>

          <button
            onClick={copyToClipboard}
            className={copyButtonClassName}
            style={{ minWidth: "110px" }}
          >
            <CopyIcon copied={copied} />
            <span>{copied ? "Copied!" : "Copy Code"}</span>
          </button>
        </div>
      </div>

      {!showCode ? (
        <div className="transition-opacity duration-200 ease-in-out opacity-100">
          {children}
        </div>
      ) : (
        <div className={codeBlockClassName}>
          <SyntaxHighlighter language="tsx" style={vscDarkPlus}>
            {code}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  );
};

export default CodeRenderer;
