import { Row } from "@tanstack/react-table";

import { useProjectStore } from "@/hooks/use-project-store";
import { DataTableRowActions } from "@/components/data-table-row-actions";

import { Excavation } from "../data/data";

interface DataTableRowActionsProps {
  row: Row<Excavation>;
}

export function ExcavationRowActions({ row }: DataTableRowActionsProps) {
  const removeExcavation = useProjectStore((state) => state.removeExcavation);

  return (
    <DataTableRowActions onDelete={() => removeExcavation(row.original.id!)} />
  );
}
