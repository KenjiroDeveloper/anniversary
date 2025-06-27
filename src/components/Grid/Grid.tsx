import React from "react";

interface GridProps {
  columns: number;
  rows: number;
  gap: number;
  children: React.ReactNode;
}

export const Grid = ({ columns, rows, gap, children }: GridProps) => {
  const classname = [
    "w-full",
    "p-1",
    "grid",
    `grid-cols-${columns}`,
    `grid-rows-${rows}`,
    `gap-${gap}`,
  ].join(" ");

  return <div className={classname}>{children}</div>;
};
