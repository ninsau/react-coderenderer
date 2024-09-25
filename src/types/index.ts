export interface TableProps<T> {
  columns: string[];
  data: T[];
  props: (keyof T)[];
  actions?: boolean;
  actionTexts?: string[];
  loading?: boolean;
  actionFunctions?: Array<(item: T) => void>;
  searchValue?: string;
}

export interface ActionDropdownProps<T> {
  item: T;
  index: number;
  actionTexts: string[];
  actionFunctions: Array<(item: T) => void>;
}
