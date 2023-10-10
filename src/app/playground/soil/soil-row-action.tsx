import { Row } from "@tanstack/react-table";

import { useProjectStore } from "@/hooks/use-project-store";
import { Soil } from "../data/data";
import { DataTableRowActions } from "@/components/data-table-row-actions";

interface DataTableRowActionsProps {
  row: Row<Soil>;
}

export function SoilRowActions({ row }: DataTableRowActionsProps) {
  const removeSoil = useProjectStore((state) => state.removeSoil);

  return <DataTableRowActions onDelete={() => removeSoil(row.original.id!)} />;
}
