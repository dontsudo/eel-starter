import { ColumnDef } from "@tanstack/react-table";

import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "@/components/data-table-column-header";

import { Soil } from "../data/data";
import { SoilRowActions } from "./soil-row-action";

export const columns: ColumnDef<Soil>[] = [
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
    accessorKey: "토층명칭",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="토층명칭" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("토층명칭")}
          </span>
        </div>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "굴착깊이",
    header: "굴착깊이",
  },
  {
    accessorKey: "벽체설치",
    header: "벽체설치",
  },
  {
    accessorKey: "앵커설치",
    header: "앵커설치",
  },
  {
    id: "actions",
    cell: ({ row }) => <SoilRowActions row={row} />,
  },
];
