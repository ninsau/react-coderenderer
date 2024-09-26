# Next.js Reusable Table

A highly customizable and reusable table component for Next.js applications, built with TypeScript and the latest technologies.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
  - [Basic Example](#basic-example)
  - [Props](#props)
  - [Example With Table Wrapper](#example-with-table-wrapper)
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

### Example With Table Wrapper

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
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Users
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            onClick={() => alert("Add User")}
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
          >
            Add User
          </button>
        </div>
      </div>
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
    </div>
  );
};

export default MyTablePage;
```

### Explanation and Guidance

**Why Wrap the `TableComponent`?**

- **Layout Control:** Wrapping the `TableComponent` within your own container allows you to control the surrounding layout, such as adding headings, descriptions, and buttons.
- **Consistent Styling:** By using your own container, you can apply consistent padding, margins, and other styles that match the rest of your application.
- **Flexibility:** This approach keeps the `TableComponent` focused on rendering the table itself, while you manage the outer layout.

**Using `TableWrapperComponent`**

If you have a `TableWrapperComponent` in your project that handles the layout and additional elements, you can use it to wrap the `TableComponent`. Here's how you might adjust it:

```tsx
import React from "react";
import TableComponent from "./TableComponent"; // Adjust the import path as needed or import { TableComponent } from "nextjs-reusable-table";

interface TableWrapperComponentProps<T> {
  title: string;
  description?: string;
  buttonText?: string;
  buttonAction?: () => void;
  buttonDisplay?: boolean;
  tableData: {
    columns: string[];
    data: T[];
    props: ReadonlyArray<keyof T>;
  };
  actions?: boolean;
  actionTexts?: string[];
  actionFunctions?: Array<(item: T) => void>;
  topContent?: React.ReactNode;
  loading?: boolean;
}

function TableWrapperComponent<T extends Record<string, any>>({
  title,
  description,
  buttonText,
  buttonAction,
  buttonDisplay = true,
  tableData,
  actions,
  actionTexts,
  actionFunctions,
  topContent,
  loading,
}: TableWrapperComponentProps<T>) {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {title}
          </h1>
          {description && (
            <p className="mt-2 text-sm text-gray-700">{description}</p>
          )}
          {topContent && <div className="mt-4">{topContent}</div>}
        </div>
        {buttonDisplay && buttonText && buttonAction && (
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button
              type="button"
              onClick={buttonAction}
              className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
            >
              {buttonText}
            </button>
          </div>
        )}
      </div>
      <div className="mt-8">
        <TableComponent<T>
          columns={tableData.columns}
          data={tableData.data}
          props={tableData.props}
          actions={actions}
          actionTexts={actionTexts}
          actionFunctions={actionFunctions}
          loading={loading}
        />
      </div>
    </div>
  );
}

export default TableWrapperComponent;
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

### Custom Class Names Example

```tsx
customClassNames={{
  container: "my-container-class",
  table: "my-table-class",
  th: "my-th-class",
  tr: "my-tr-class",
  td: "my-td-class",
  actionTd: "my-action-td-class",
  actionButton: "my-action-button-class",
  actionSvg: "my-action-svg-class",
  dropdownMenu: "my-dropdown-menu-class",
  dropdownItem: "my-dropdown-item-class",
}}
```

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
