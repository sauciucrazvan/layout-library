"use client";
import { Component } from "react";

class Separator extends Component<{
  height?: number;
  color?: string;
  className?: string;
}> {
  render() {
    const { height = 1, color = "#ccc", className = "" } = this.props;

    return (
      <div
        className={`w-full ${className}`}
        style={{
          height: `${height}px`,
          backgroundColor: color,
        }}
      />
    );
  }
}

export default Separator;
