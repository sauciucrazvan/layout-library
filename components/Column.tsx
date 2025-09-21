"use client";
import { Component } from "react";

class Column extends Component<{
  gap?: number;
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  wrap?: boolean;
  children: React.ReactNode;
  className?: string;
}> {
  constructor(props: {
    gap?: number;
    justify?:
      | "flex-start"
      | "flex-end"
      | "center"
      | "space-between"
      | "space-around"
      | "space-evenly";
    alignItems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
    wrap?: boolean;
    children: React.ReactNode;
    className?: string;
  }) {
    super(props);
  }

  render() {
    const {
      gap = 1,
      justify = "flex-start",
      alignItems = "flex-start",
      wrap = false,
      className,
    } = this.props;

    return (
      <div
        className={`flex flex-col ${className}`}
        style={{
          gap: `${gap * 0.25}rem`,
          justifyContent: justify,
          alignItems: alignItems,
          flexWrap: wrap ? "wrap" : "nowrap",
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Column;
