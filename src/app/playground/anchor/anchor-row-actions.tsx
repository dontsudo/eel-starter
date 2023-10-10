import { Row } from "@tanstack/react-table";

import { useProjectStore } from "@/hooks/use-project-store";
import { DataTableRowActions } from "@/components/data-table-row-actions";

import { Anchor } from "../data/data";

interface DataTableRowActionsProps {
  row: Row<Anchor>;
}

export function AnchorRowActions({ row }: DataTableRowActionsProps) {
  const removeAnchor = useProjectStore((state) => state.removeAnchor);

  return (
    <DataTableRowActions onDelete={() => removeAnchor(row.original.id!)} />
  );
}
