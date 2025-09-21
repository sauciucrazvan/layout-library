"use client";
import { Component, ReactNode } from "react";

class Container extends Component<{
  children: ReactNode;
  padding?: number;
  maxWidth?: string;
  className?: string;
}> {
  render() {
    const { padding = 2, maxWidth = "1200px", className = "" } = this.props;

    return (
      <div
        className={`w-full mx-auto ${className}`}
        style={{
          padding: `${padding * 0.25}rem`,
          maxWidth: maxWidth,
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Container;
