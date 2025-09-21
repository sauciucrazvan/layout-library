# Column

The `Column` component is a flexible column container that allows you to control the layout of its children. You can customize the gap between items, the alignment of the items, and whether they should wrap when needed.

## Props

- `gap` (optional): The gap between items in the column. Default is `1` (which equals `0.25rem`).
- `justify` (optional): Controls the alignment of items along the main axis (vertical). Possible values:
  - `"flex-start"` (default)
  - `"flex-end"`
  - `"center"`
  - `"space-between"`
  - `"space-around"`
  - `"space-evenly"`
- `alignItems` (optional): Controls the alignment of items along the cross axis (horizontal). Possible values:
  - `"flex-start"`
  - `"flex-end"`
  - `"center"`
  - `"baseline"`
  - `"stretch"`
- `wrap` (optional): If `true`, the items will wrap. Default is `false`.
- `children`: The content to display inside the column.
- `className` (optional): Custom CSS class for additional styling.

## Example Usage

```tsx
import Column from "./path/to/Column";

const Example = () => {
  return (
    <Column gap={2} justify="center" alignItems="stretch" wrap>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </Column>
  );
};
```

In this example:

- Items will be centered along the main axis.

- Items will stretch across the cross axis.

- Items will wrap if necessary.

## Additional Notes

The gap prop is a multiplier. For instance, gap={2} equals 0.5rem between items.
