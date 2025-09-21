import React from "react";

interface GridProps {
  children: React.ReactNode;
  cols?: string;
  gap?: string;
  className?: string;
}

export const Grid: React.FC<GridProps> = ({
  children,
  cols = "grid-cols-3",
  gap = "gap-4",
  className = "",
}) => {
  return <div className={`grid ${cols} ${gap} ${className}`}>{children}</div>;
};
