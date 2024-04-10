import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

interface AppTableProps<TData = unknown> {
  data: TData[];
  columns: ColumnDef<TData>[];
}

export const Table = <TData = unknown,>({
  data,
  columns,
}: AppTableProps<TData>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className="mt-[24px] w-full">
      <thead className="bg-primary-300 h-[40px]">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th
                className="text-white font-quicksand font-semibold text-lg"
                key={header.id}
                colSpan={header.colSpan}
              >
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody className="text-center h-[40px] text-primary-800 text-[16px] font-system not-italic font-semibold">
        {table.getRowModel().rows.map((row) => (
          <tr className="pt-[14px]" key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td className="pt-[6px]" key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
