import { Separator } from "@/components/ui/separator";
import { SoilForm } from "./soil-form";

function ProjectSoilPage() {
  return (
    <div className="space-y-2">
      <div>
        <h3 className="text-lg font-medium">지반물성치</h3>
        <p className="text-sm text-muted-foreground">
          지반물성치 값을 입력하세요.
        </p>
      </div>

      <Separator />
      <SoilForm />
    </div>
  );
}

export default ProjectSoilPage;
