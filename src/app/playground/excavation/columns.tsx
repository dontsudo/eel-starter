import { ColumnDef } from "@tanstack/react-table";

import { Checkbox } from "@/components/ui/checkbox";

import { Excavation } from "../data/data";
import { ExcavationRowActions } from "./excavation-row-action";

export const columns: ColumnDef<Excavation>[] = [
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
    accessorKey: "시작심도",
    header: "시작심도",
  },
  {
    accessorKey: "바닥심도",
    header: "바닥심도",
  },
  {
    id: "actions",
    cell: ({ row }) => <ExcavationRowActions row={row} />,
  },
];
