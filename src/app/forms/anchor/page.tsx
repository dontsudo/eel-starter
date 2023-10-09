import { Separator } from "@/components/ui/separator";
import { AnchorForm } from "./anchor-form";

export default function ProjectAnchorPage() {
  return (
    <div className="space-y-2">
      <div>
        <h3 className="text-lg font-medium">앵커</h3>
        <p className="text-sm text-muted-foreground">앵커 값을 입력하세요.</p>
      </div>
      <Separator />
      <AnchorForm />
    </div>
  );
}
