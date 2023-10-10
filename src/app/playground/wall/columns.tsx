import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";

import { Wall } from "../data/data";
import { WallRowActions } from "./wall-row-actions";

export const wallColumns: ColumnDef<Wall>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "단면적",
    header: "단면적",
  },
  {
    accessorKey: "단면2차모멘트",
    header: "단면2차모멘트",
  },
  {
    accessorKey: "탄성계수",
    header: "탄성계수",
  },
  {
    id: "actions",
    cell: ({ row }) => <WallRowActions row={row} />,
  },
];
