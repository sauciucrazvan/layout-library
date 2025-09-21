# Container

The `Container` component provides a wrapper for your content. It centers the content and allows you to control the padding and maximum width of the container.

## Props

- `padding` (optional): The padding around the content. Default is `2` (which equals `0.5rem`).
- `maxWidth` (optional): The maximum width of the container. Default is `1200px`.
- `children`: The content to display inside the container.
- `className` (optional): Custom CSS class for additional styling.

## Example Usage

```tsx
import Container from "./path/to/Container";

const Example = () => {
  return (
    <Container padding={4} maxWidth="1000px">
      <div>Your content goes here</div>
    </Container>
  );
};
```

In this example:

- The container will have 1rem of padding around the content.

- The maximum width of the container will be 1000px.

## Additional Notes

The padding prop is a multiplier. For instance, padding={4} equals 1rem of padding.

You can use the maxWidth prop to control the maximum width of the container. You can pass values like "800px", "90%", or "100%" depending on your design needs.
