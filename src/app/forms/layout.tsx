import { Outlet } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { useFormStore } from "./form-store";
import { SidebarNav } from "./components/sidebar-nav";

const sidebarNavItems = [
  {
    title: "지반물성치",
    href: "/",
  },
  {
    title: "토층깊이",
    href: "/excavation",
  },
  {
    title: "벽체",
    href: "/wall",
  },
  {
    title: "앵커",
    href: "/anchor",
  },
];

export default function FormsLayout() {
  return (
    <div className="space-y-6 p-10 pb-16">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">시작하기</h2>
        <p className="text-muted-foreground">프로젝트를 시작할 수 있습니다.</p>
      </div>
      <Separator className="my-6" />
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="-mx-4 lg:w-1/5">
          <SidebarNav items={sidebarNavItems} />
        </aside>
        <div className="flex-1 lg:max-w-2xl">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
