interface GridLinkProps {
  href: string;
  colSpan?: number;
  rowSpan?: number;
  colStart?: number;
  rowStart?: number;
  children?: React.ReactNode;
}

export const GridLink = ({
  href,
  colSpan,
  rowSpan,
  colStart,
  rowStart,
  children,
}: GridLinkProps) => {
  let classname: string = "";
  if (colSpan) classname += ` col-span-${colSpan}`;
  if (rowSpan) classname += ` row-span-${rowSpan}`;
  if (colStart) classname += ` col-start-${colStart}`;
  if (rowStart) classname += ` row-start-${rowStart}`;

  return (
    <div className={classname}>
      <div className="flex p-2 bg-dark-backdrop rounded-2xl justify-center">
        <a href={href}>{children}</a>
      </div>
    </div>
  );
};
