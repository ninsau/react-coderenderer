# Next.js Reusable Table

A highly customizable and reusable table component for Next.js applications, built with TypeScript and the latest technologies.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [Basic Example](#basic-example)
    - [Example With Table Wrapper](#example-with-table-wrapper)
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
- **Latest Technologies**: Uses modern React features and best practices.

## Prerequisites

This package uses [Tailwind CSS](https://tailwindcss.com/) for styling. Ensure you have Tailwind CSS installed and configured in your Next.js project. If you haven't set it up yet, follow the official [Tailwind CSS Next.js Installation Guide](https://tailwindcss.com/docs/guides/nextjs).

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
```

### Basic Example

```tsx
"use client";
import React from "react";
import { TableComponent } from "nextjs-reusable-table";

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

### Example With Table Wrapper

```tsx
"use client";
import React from "react";
import { TableComponent } from "nextjs-reusable-table";

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

### Explanation and Guidance\*\*

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

### `TableComponent`

| Prop              | Type                       | Required | Description                                              |
| ----------------- | -------------------------- | -------- | -------------------------------------------------------- |
| `columns`         | `string[]`                 | Yes      | An array of column headers to display.                   |
| `data`            | `T[]`                      | Yes      | An array of data objects to display in the table.        |
| `props`           | `(keyof T)[]`              | Yes      | The keys from data objects corresponding to each column. |
| `actions`         | `boolean`                  | No       | Whether to display action buttons.                       |
| `actionTexts`     | `string[]`                 | No       | Labels for the action buttons.                           |
| `actionFunctions` | `Array<(item: T) => void>` | No       | Functions to handle action button clicks.                |
| `loading`         | `boolean`                  | No       | Displays a skeleton loader when `true`.                  |
| `searchValue`     | `string`                   | No       | Current search query, used in the no content message.    |

## Components

### ActionDropdown

A component that renders a dropdown menu with action buttons for each row.

### TableSkeleton

Displays a skeleton loader while the table data is loading.

### NoContentComponent

Shows a message when there are no items to display in the table.

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
