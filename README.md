# Next.js Reusable Table

A highly customizable and reusable table component for Next.js applications, built with TypeScript and the latest technologies.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [Basic Example](#basic-example)
  - [Props](#props)
- [Components](#components)
- [Contributing](#contributing)
- [Versioning](#versioning)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Features

- **TypeScript Support**: Fully typed with generics for enhanced type safety.
- **Next.js Optimized**: Designed specifically for Next.js projects.
- **Customizable Columns and Data**: Easily configure columns and data properties.
- **Action Dropdowns**: Support for row-specific actions.
- **Loading Skeleton**: Built-in skeleton loader for loading states.
- **No Content Component**: Displays a friendly message when there's no data.
- **Latest Technologies**: Uses modern React features and best practices.

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
  );
};

export default MyTablePage;
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
