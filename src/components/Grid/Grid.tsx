import React from "react";

interface GridProps {
  columns: number;
  rows: number;
  gap: number;
  children: React.ReactNode;
}

export const Grid = ({ columns, rows, gap, children }: GridProps) => {
  const classname = [
    `gap-${gap}`,
    "w-full",
    "p-1",
    "grid",
    `grid-cols-${columns}`,
    `grid-rows-${rows}`,
  ].join(" ");

  return <div className={classname}>{children}</div>;
};
