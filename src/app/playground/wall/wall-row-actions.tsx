import { Row } from "@tanstack/react-table";

import { useProjectStore } from "@/hooks/use-project-store";
import { Wall } from "../data/data";
import { DataTableRowActions } from "@/components/data-table-row-actions";

interface DataTableRowActionsProps {
  row: Row<Wall>;
}

export function WallRowActions({ row }: DataTableRowActionsProps) {
  const removeWall = useProjectStore((state) => state.removeWall);

  return <DataTableRowActions onDelete={() => removeWall(row.original.id!)} />;
}
