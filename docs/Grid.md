# Grid

The `Grid` component creates a responsive grid layout. You can specify the number of columns and the gaps between items.

## Props

- `cols` (optional): Specifies the number of columns in the grid. Default is `"grid-cols-3"`.
- `gap` (optional): Specifies the gap between grid items. Default is `"gap-4"`.
- `children`: The content to display in the grid.
- `className` (optional): Custom CSS class for additional styling.

## Example Usage

```tsx
import Grid from "./path/to/Grid";

const Example = () => {
  return (
    <Grid cols="grid-cols-4" gap="gap-6">
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
    </Grid>
  );
};
```

In this example:

- The grid will have 4 columns.

- The gap between grid items will be 1.5rem (equivalent to gap-6).
