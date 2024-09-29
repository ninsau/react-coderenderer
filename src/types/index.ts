export interface CodeRendererProps {
  code: string;
  children: React.ReactNode;
}

export interface CustomClassNames {
  container?: string;
  buttonGroup?: string;
  button?: string;
  copyButton?: string;
  codeBlock?: string;
}

export interface ExtendedCodeRendererProps extends CodeRendererProps {
  disableDefaultStyles?: boolean;
  customClassNames?: CustomClassNames;
  enableDarkMode?: boolean;
}
