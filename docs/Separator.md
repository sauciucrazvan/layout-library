# Separator

The `Separator` component renders a horizontal line that can be used to visually separate content. You can customize its height and color.

## Props

- `height` (optional): The height of the separator. Default is `1px`.
- `color` (optional): The color of the separator. Default is `#ccc`.
- `className` (optional): Custom CSS class for additional styling.

## Example Usage

```tsx
import Separator from "./path/to/Separator";

const Example = () => {
  return (
    <>
      <div>Content above separator</div>
      <Separator height={2} color="#333" />
      <div>Content below separator</div>
    </>
  );
};
```

In this example:

- The separator will have a height of 2px.

- The separator will be dark gray (#333).

## Additional Notes

You can adjust the height and color props to match your design needs.
