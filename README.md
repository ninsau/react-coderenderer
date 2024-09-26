# Next.js Reusable Table

A highly customizable and reusable table component for Next.js applications, built with TypeScript and the latest technologies.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
  - [Basic Example](#basic-example)
  - [Props](#props)
- [Components](#components)
- [Contributing](#contributing)
- [Versioning](#versioning)
- [License](#license)
- [Code of Conduct](#code-of-conduct)
- [Acknowledgments](#acknowledgments)

## Features

- **TypeScript Support**: Fully typed with generics for enhanced type safety.
- **Next.js Optimized**: Designed specifically for Next.js projects.
- **Customizable Columns and Data**: Easily configure columns and data properties.
- **Action Dropdowns**: Support for row-specific actions.
- **Loading Skeleton**: Built-in skeleton loader for loading states.
- **No Content Component**: Displays a friendly message when there's no data.
- **Styling Flexibility**: Includes default Tailwind CSS styles with an option to opt-out and apply custom styles.
- **Search Functionality**: Search through the table data with a search bar.
- **Handle Data of Different Types**: Safely handles various data types like dates, lists, strings, and URLs.
- **Latest Technologies**: Uses modern React features and best practices.

## Prerequisites

This package uses [Tailwind CSS](https://tailwindcss.com/) for styling. Ensure you have Tailwind CSS installed and configured in your Next.js project. If you haven't set it up yet, follow the official [Tailwind CSS Next.js Installation Guide](https://tailwindcss.com/docs/guides/nextjs).

`Note:` If you prefer not to use `Tailwind CSS` or want to apply your own styling, you can opt-out of the default styles provided by this package. See the Opting Out of Default Styles section for details.

## Installation

Install the package via npm:

```bash
npm install nextjs-reusable-table
```

Or via yarn:

```bash
yarn add nextjs-reusable-table
```

## Usage

Import the `TableComponent` into your Next.js page or component:

```tsx
import React from "react";
import { TableComponent } from "nextjs-reusable-table";
import "nextjs-reusable-table/dist/index.css"; // Import default styles
```

Pass the required props to the `TableComponent`:

```tsx
<TableComponent
  columns={columns}
  data={data}
  props={props}
  actions={true}
  actionTexts={["Edit", "Delete"]}
  actionFunctions={[handleEdit, handleDelete]}
  loading={false}
  searchValue=""
/>
```

### Basic Example

```tsx
"use client";
import React from "react";
import { TableComponent } from "nextjs-reusable-table";
import "nextjs-reusable-table/dist/index.css"; // Import default styles

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const data: User[] = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  // ... more data
];

const columns = ["Name", "Email", "Role"];
const props = ["name", "email", "role"] as const;

const MyTablePage: React.FC = () => {
  const handleEdit = (item: User) => {
    console.log("Edit", item);
  };

  const handleDelete = (item: User) => {
    console.log("Delete", item);
  };

  return (
    <TableComponent<User>
      columns={columns}
      data={data}
      props={props}
      actions={true}
      actionTexts={["Edit", "Delete"]}
      actionFunctions={[handleEdit, handleDelete]}
      loading={false}
      searchValue=""
    />
  );
};

export default MyTablePage;
```

### Opting Out of Default Styles

If you prefer to use your own styling or are not using Tailwind CSS in your project, you can opt-out of the default styles provided by the package. Here's how:

- Do Not `Import` the Default CSS

```tsx
// import "nextjs-reusable-table/dist/index.css"; // Do not import this
```

- Set `disableDefaultStyles` to true

Pass the `disableDefaultStyles` prop to the TableComponent:

```tsx
<TableComponent
  // ... your props
  disableDefaultStyles={true}
  customClassNames={{
    container: "my-custom-container",
    table: "my-custom-table",
    th: "my-custom-th",
    // ... other custom classes
  }}
/>
```

- Provide Custom Class Names (Optional)

If you want to apply your own styles, you can pass custom class names via the customClassNames prop. This allows you to fully customize the appearance of the table.

```tsx
"use client";
import React from "react";
import { TableComponent } from "nextjs-reusable-table";
// Do not import the default CSS
import "./my-custom-styles.css"; // Your custom styles

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const data: User[] = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  // ... more data
];

const columns = ["Name", "Email", "Role"];
const props = ["name", "email", "role"] as const;

const MyTablePage: React.FC = () => {
  const handleEdit = (item: User) => {
    console.log("Edit", item);
  };

  const handleDelete = (item: User) => {
    console.log("Delete", item);
  };

  return (
    <TableComponent<User>
      columns={columns}
      data={data}
      props={props}
      actions={true}
      actionTexts={["Edit", "Delete"]}
      actionFunctions={[handleEdit, handleDelete]}
      loading={false}
      searchValue=""
      disableDefaultStyles={true}
      customClassNames={{
        container: "my-custom-container",
        table: "my-custom-table",
        th: "my-custom-th",
        tr: "my-custom-tr",
        td: "my-custom-td",
        actionTd: "my-custom-action-td",
        actionButton: "my-custom-action-button",
        actionSvg: "my-custom-action-svg",
        dropdownMenu: "my-custom-dropdown-menu",
        dropdownItem: "my-custom-dropdown-item",
      }}
    />
  );
};

export default MyTablePage;
```

## Props

# TableComponent

| Prop                   | Type                       | Required | Description                                                                                   |
| ---------------------- | -------------------------- | -------- | --------------------------------------------------------------------------------------------- |
| `columns`              | `string[]`                 | Yes      | An array of column headers to display.                                                        |
| `data`                 | `T[]`                      | Yes      | An array of data objects to display in the table.                                             |
| `props`                | `(keyof T)[]`              | Yes      | The keys from data objects corresponding to each column.                                      |
| `actions`              | `boolean`                  | No       | Whether to display action buttons.                                                            |
| `actionTexts`          | `string[]`                 | No       | Labels for the action buttons.                                                                |
| `actionFunctions`      | `Array<(item: T) => void>` | No       | Functions to handle action button clicks.                                                     |
| `loading`              | `boolean`                  | No       | Displays a skeleton loader when `true`.                                                       |
| `searchValue`          | `string`                   | No       | Current search query, used in the no content message.                                         |
| `disableDefaultStyles` | `boolean`                  | No       | When set to `true`, disables the default Tailwind CSS styles applied to the table components. |
| `customClassNames`     | `object`                   | No       | An object containing custom class names for various elements of the table.                    |

## `customClassNames` Object Keys

| Key            | Description                                          |
| -------------- | ---------------------------------------------------- |
| `container`    | Class for the outer container `<div>`.               |
| `table`        | Class for the `<table>` element.                     |
| `thead`        | Class for the `<thead>` element.                     |
| `th`           | Class for the `<th>` elements.                       |
| `tr`           | Class for the `<tr>` elements.                       |
| `td`           | Class for the `<td>` elements.                       |
| `actionTd`     | Class for the `<td>` containing the action dropdown. |
| `actionButton` | Class for the action button.                         |
| `actionSvg`    | Class for the SVG icon in the action button.         |
| `dropdownMenu` | Class for the dropdown menu container.               |
| `dropdownItem` | Class for each item in the dropdown menu.            |

# Components

## ActionDropdown

A component that renders a dropdown menu with action buttons for each row.

### Props

| Prop                   | Type                       | Required | Description                                         |
| ---------------------- | -------------------------- | -------- | --------------------------------------------------- |
| `item`                 | `T`                        | Yes      | The data item associated with the row.              |
| `index`                | `number`                   | Yes      | The index of the row.                               |
| `actionTexts`          | `string[]`                 | Yes      | An array of labels for the action buttons.          |
| `actionFunctions`      | `Array<(item: T) => void>` | Yes      | An array of functions corresponding to each action. |
| `disableDefaultStyles` | `boolean`                  | No       | Boolean to disable default styles.                  |
| `customClassNames`     | `object`                   | No       | Custom class names for styling.                     |

### `customClassNames` Object Keys (Optional)

| Key            | Description                                  |
| -------------- | -------------------------------------------- |
| `actionButton` | Class for the action button.                 |
| `dropdownMenu` | Class for the dropdown menu container.       |
| `dropdownItem` | Class for each item in the dropdown menu.    |
| `actionSvg`    | Class for the SVG icon in the action button. |

---

## TableSkeleton

Displays a skeleton loader while the table data is loading.

### Props

| Prop                   | Type      | Required | Description                        |
| ---------------------- | --------- | -------- | ---------------------------------- |
| `disableDefaultStyles` | `boolean` | No       | Boolean to disable default styles. |
| `customClassNames`     | `object`  | No       | Custom class names for styling.    |

### `customClassNames` Object Keys (Optional)

| Key         | Description                              |
| ----------- | ---------------------------------------- |
| `container` | Class for the skeleton loader container. |
| `row`       | Class for the individual skeleton rows.  |

---

## NoContentComponent

Shows a message when there are no items to display in the table.

### Props

| Prop   | Type     | Required | Description                                             |
| ------ | -------- | -------- | ------------------------------------------------------- |
| `name` | `string` | Yes      | The name of the content type, e.g., "items" or "users". |

## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to get started.

## Versioning

We use [Semantic Versioning](https://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/ninsau/nextjs-reusable-table/tags).

To bump the version, update the `version` field in `package.json` and follow the guidelines in the [CONTRIBUTING.md](CONTRIBUTING.md) file.

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Code of Conduct

This project adheres to the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## Acknowledgments

- Inspired by common data table patterns in React and Next.js applications.
- Thanks to all contributors and users for their support.
