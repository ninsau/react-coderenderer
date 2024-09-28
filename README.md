# react-coderenderer

A flexible and customizable code rendering component for React applications, supporting syntax highlighting, dark mode, and copy functionality. This package allows developers to easily embed code blocks into their React applications with a clean interface and minimal setup.

## See the [Examples](https://nextjs-reusables.vercel.app/react-coderenderer)

<!-- [![NPM](https://img.shields.io/npm/v/react-coderenderer.svg)](https://www.npmjs.com/package/react-coderenderer)
[![Downloads](https://img.shields.io/npm/dt/react-coderenderer.svg)](https://www.npmjs.com/package/react-coderenderer)
[![License](https://img.shields.io/npm/l/react-coderenderer.svg)](https://www.npmjs.com/package/react-coderenderer) -->

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
  - [Basic Example](#basic-example)
  - [Props](#props)
  - [Opting Out of Default Styles](#opting-out-of-default-styles)
- [Contributing](#contributing)
- [Versioning](#versioning)
- [License](#license)
- [Code of Conduct](#code-of-conduct)
- [Acknowledgments](#acknowledgments)

## Features

- **Syntax Highlighting**: Automatically highlights code using `react-syntax-highlighter`.
- **Copy to Clipboard**: Provides an integrated copy button to copy code snippets.
- **Dark Mode Support**: Built-in support for light and dark modes.
- **Customizable**: Opt-out of default Tailwind CSS styles and apply your own custom styles.
- **Smooth Transitions**: Animate between code previews and actual code with smooth transitions.
- **Optimized for React**: Designed specifically for React applications with full TypeScript support.

## Prerequisites

Make sure you have a working React environment. This package assumes you are using:

- **React 18 or later**
- **React-DOM 18 or later**

## Installation

Install the package via npm:

```bash
npm install react-coderenderer
```

Or via yarn:

```bash
yarn add react-coderenderer
```

## Usage

Import the `CodeRenderer` into your React component:

```tsx
import React from "react";
import CodeRenderer from "react-coderenderer";
import 'react-coderenderer/dist/index.css'; // Import default styles
```

Pass the required props to the `CodeRenderer` component:

```tsx
<CodeRenderer code={code}>
  <MyComponent />
</CodeRenderer>
```

### Basic Example

Here's a basic example of how to use the `CodeRenderer` component:

```tsx
import React from "react";
import CodeRenderer from "react-coderenderer";
import 'react-coderenderer/dist/index.css'; // Import default styles

const exampleCode = `
  import React from 'react';
  const HelloWorld = () => <div>Hello, World!</div>;
`;

const MyComponent = () => <div>Hello, World!</div>;

const Example = () => (
  <CodeRenderer code={exampleCode}>
    <MyComponent />
  </CodeRenderer>
);

export default Example;
```

### Props

The `CodeRenderer` component accepts the following props:

### Props

| Prop                   | Type        | Required | Description                                                                    |
| ---------------------- | ----------- | -------- | ------------------------------------------------------------------------------ |
| `code`                 | `string`    | Yes      | The code to display inside the code block.                                     |
| `children`             | `ReactNode` | Yes      | The content to display when the "Preview" button is selected.                  |
| `disableDefaultStyles` | `boolean`   | No       | Disables default Tailwind CSS styles if set to `true`.                         |
| `customClassNames`     | `object`    | No       | Custom class names for various elements (e.g., container, button, code block). |

### Opting Out of Default Styles

If you prefer to use your own styling or are not using Tailwind CSS in your project, you can opt-out of the default styles provided by the package. Here's how:

1. **Do Not Import the Default CSS**

```tsx
// import "react-coderenderer/dist/index.css"; // Do not import this
```

2. Set disableDefaultStyles to true

Pass the `disableDefaultStyles` prop to the `CodeRenderer`:

```tsx
<CodeRenderer
  code={code}
  disableDefaultStyles={true}
  customClassNames={{
    container: "my-custom-container",
    buttonGroup: "my-custom-button-group",
    button: "my-custom-button",
    copyButton: "my-custom-copy-button",
    codeBlock: "my-custom-code-block",
  }}
>
  <MyComponent />
</CodeRenderer>
```

3. Provide Custom Class Names (Optional)

If you want to apply your own styles, you can pass custom class names via the `customClassNames` prop. This allows you to fully customize the appearance of the component.

```tsx
import React from "react";
import CodeRenderer from "react-coderenderer";
import "./my-custom-styles.css"; // Your custom styles

const exampleCode = `
import React from 'react';
const HelloWorld = () => <div>Hello, World!</div>;
`;

const MyComponent = () => <div>Hello, World!</div>;

const Example = () => (
  <CodeRenderer
    code={exampleCode}
    disableDefaultStyles={true}
    customClassNames={{
      container: "my-custom-container",
      buttonGroup: "my-custom-button-group",
      button: "my-custom-button",
      copyButton: "my-custom-copy-button",
      codeBlock: "my-custom-code-block",
    }}
  >
    <MyComponent />
  </CodeRenderer>
);

export default Example;
```

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new feature branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m "Add your message"`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Create a pull request detailing your changes.

Please ensure your code adheres to the project's coding standards and includes relevant tests if necessary. For more information, see [CONTRIBUTING.md](CONTRIBUTING.md).

## Versioning

We use [Semantic Versioning](https://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/ninsau/react-coderenderer/tags).

To bump the version, update the `version` field in `package.json` and follow the guidelines in the [CONTRIBUTING.md](CONTRIBUTING.md) file.

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Code of Conduct

This project adheres to the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/). By participating, you are expected to uphold this code. Please report unacceptable behavior to [INSERT EMAIL HERE].

## Acknowledgments

- Inspired by common code rendering and highlighting patterns in React applications.
- Thanks to all contributors and users for their support.
- A special shout-out to the open-source community for providing tools and inspiration for this project.
