import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const ProjectSave: React.FC = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="relative">
          <span>저장</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[475px]">
        <DialogHeader>
          <DialogTitle>파일로 저장하기</DialogTitle>
          <DialogDescription>
            This will save the current project state as a project which you can
            access later or share with others.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-2 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">파일명</Label>
            <Input id="name" autoFocus />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
