import React, { useState } from "react";
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
}) => {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const defaultContainerClassName =
    "p-4 border rounded-md bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 shadow-lg transition-all duration-300 ease-in-out";
  const defaultButtonGroupClassName =
    "flex bg-gray-200 dark:bg-gray-800 rounded-full p-1 transition-all duration-200 ease-in-out";
  const defaultButtonClassName =
    "px-4 py-1.5 rounded-full transition-colors duration-200 ease-in-out";
  const defaultCopyButtonClassName =
    "flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-400 transition-all duration-200 ease-in-out";
  const defaultCodeBlockClassName =
    "mt-4 p-4 rounded-lg border bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 overflow-auto shadow-md transition-opacity duration-200 ease-in-out opacity-100";

  const containerClassName = disableDefaultStyles
    ? customClassNames.container || ""
    : `${defaultContainerClassName} ${customClassNames.container || ""}`;
  const buttonGroupClassName = disableDefaultStyles
    ? customClassNames.buttonGroup || ""
    : `${defaultButtonGroupClassName} ${customClassNames.buttonGroup || ""}`;
  const buttonClassName = disableDefaultStyles
    ? customClassNames.button || ""
    : `${defaultButtonClassName} ${customClassNames.button || ""}`;
  const copyButtonClassName = disableDefaultStyles
    ? customClassNames.copyButton || ""
    : `${defaultCopyButtonClassName} ${customClassNames.copyButton || ""}`;
  const codeBlockClassName = disableDefaultStyles
    ? customClassNames.codeBlock || ""
    : `${defaultCodeBlockClassName} ${customClassNames.codeBlock || ""}`;

  return (
    <div className={containerClassName}>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-4 ml-auto">
          <div className={buttonGroupClassName}>
            <button
              onClick={() => setShowCode(false)}
              className={`${buttonClassName} ${
                !showCode ? "bg-white text-gray-900 dark:bg-gray-700" : ""
              }`}
            >
              Preview
            </button>
            <button
              onClick={() => setShowCode(true)}
              className={`${buttonClassName} ${
                showCode ? "bg-white text-gray-900 dark:bg-gray-700" : ""
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
