import { Separator } from "@/components/ui/separator";
import { WallForm } from "./wall-form";

export default function ProjectWallPage() {
  return (
    <div className="space-y-2">
      <div>
        <h3 className="text-lg font-medium">벽체</h3>
        <p className="text-sm text-muted-foreground">벽체 값을 입력하세요.</p>
      </div>
      <Separator />
      <WallForm />
    </div>
  );
}
