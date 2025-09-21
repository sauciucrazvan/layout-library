# Row

The `Row` component is a flexible row container that allows you to control the layout of its children in a horizontal direction. It provides similar customization options as the `Column` component.

## Props

- `gap` (optional): The gap between items in the row. Default is `1` (which equals `0.25rem`).
- `justify` (optional): Controls the alignment of items along the main axis (horizontal). Possible values:
  - `"flex-start"` (default)
  - `"flex-end"`
  - `"center"`
  - `"space-between"`
  - `"space-around"`
  - `"space-evenly"`
- `alignItems` (optional): Controls the alignment of items along the cross axis (vertical). Possible values:
  - `"flex-start"`
  - `"flex-end"`
  - `"center"`
  - `"baseline"`
  - `"stretch"`
- `wrap` (optional): If `true`, the items will wrap. Default is `false`.
- `children`: The content to display inside the row.
- `className` (optional): Custom CSS class for additional styling.

## Example Usage

```tsx
import Row from "./path/to/Row";

const Example = () => {
  return (
    <Row gap={3} justify="space-between" alignItems="center">
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </Row>
  );
};
```

In this example:

- Items will be spaced evenly along the row.

- Items will be aligned to the center vertically.

## Additional Notes

The gap prop is a multiplier. For instance, gap={2} equals 0.5rem between items.
