import { ColumnDef } from "@tanstack/react-table";

import { Checkbox } from "@/components/ui/checkbox";

import { Anchor } from "../data/data";
import { AnchorRowActions } from "./anchor-row-actions";

export const anchorColumns: ColumnDef<Anchor>[] = [
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
    accessorKey: "설치각도",
    header: "설치각도",
  },
  {
    accessorKey: "단면적",
    header: "단면적",
  },
  {
    accessorKey: "탄성계수",
    header: "탄성계수",
  },
  {
    accessorKey: "설치길이",
    header: "설치길이",
  },
  {
    accessorKey: "초기축력",
    header: "초기축력",
  },
  {
    id: "actions",
    cell: ({ row }) => <AnchorRowActions row={row} />,
  },
];
