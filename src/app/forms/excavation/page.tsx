import { Separator } from "@/components/ui/separator";
import { ExcavationForm } from "./excavation-form";

export default function ProjectExcavationPage() {
  return (
    <div className="space-y-2">
      <div>
        <h3 className="text-lg font-medium">토층깊이</h3>
        <p className="text-sm text-muted-foreground">
          토층깊이 값을 입력하세요.
        </p>
      </div>
      <Separator />
      <ExcavationForm />
    </div>
  );
}
