import * as React from "react";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { CubeIcon, ResetIcon } from "@radix-ui/react-icons";
import { SoilForm } from "./soil/soil-form";
import { ExcavationForm } from "./excavation/excavation-form";
import { WallForm } from "./wall/wall-form";
import { AnchorForm } from "./anchor/anchor-form";
import { ProjectSave } from "./components/project-save";
import { useProjectStore } from "@/hooks/use-project-store";
import { DataTable } from "@/components/data-table";
import { columns as soilColumns } from "./soil/columns";
import { columns as excavationColumns } from "./excavation/columns";
import { wallColumns } from "./wall/columns";
import { anchorColumns } from "./anchor/anchor-columns";
import { Analytics } from "./components/analytics";
import { useToast } from "@/components/ui/use-toast";
import { CalculatorIcon } from "lucide-react";
import { eel } from "@/lib/eel";

const PlaygroundPage: React.FC = () => {
  const { toast } = useToast();
  const project = useProjectStore();

  const onSubmit = async () => {
    const response = await eel.say_hello_py(project)();

    console.log(response);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4 text-white">
          <code className="text-white">
            {JSON.stringify(response, null, 2)}
          </code>
        </pre>
      ),
    });
  };

  return (
    <div className="h-full flex flex-col">
      <div className="container flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
        <h2 className="text-lg font-semibold">
          <CubeIcon className="w-6 h-6" />
          <span className="sr-only">프로젝트</span>
        </h2>
        <div className="ml-auto">
          <ProjectSave />
        </div>
      </div>
      <Separator />
      <div className="container h-full p-6">
        <div className="grid h-full items-stretch gap-6 md:grid-cols-[1fr_450px]">
          <Tabs
            defaultValue="soil"
            className="hidden flex-col space-y-4 sm:flex md:order-2"
          >
            <div className="grid gap-2">
              <HoverCard openDelay={200}>
                <HoverCardTrigger asChild>
                  <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    설정 값
                  </span>
                </HoverCardTrigger>
                <HoverCardContent className="w-[320px] text-sm" side="left">
                  입력값의 단위는 표준 단위계를 따릅니다.
                </HoverCardContent>
              </HoverCard>
              <TabsList className="grid grid-cols-4">
                <TabsTrigger value="soil">지반물성치</TabsTrigger>
                <TabsTrigger value="excavation">굴착깊이</TabsTrigger>
                <TabsTrigger value="wall">벽체</TabsTrigger>
                <TabsTrigger value="anchor">앵커</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="soil">
              <DataTable columns={soilColumns} data={project.soil} />
              <SoilForm />
            </TabsContent>
            <TabsContent value="excavation">
              <DataTable
                columns={excavationColumns}
                data={project.excavation}
              />
              <ExcavationForm />
            </TabsContent>
            <TabsContent value="wall">
              <DataTable columns={wallColumns} data={project.wall} />
              <WallForm />
            </TabsContent>
            <TabsContent value="anchor">
              <DataTable columns={anchorColumns} data={project.anchor} />
              <AnchorForm />
            </TabsContent>
          </Tabs>
          <div className="md:order-1">
            <div className="h-full flex flex-col space-y-4">
              <Analytics />
              <div className="flex items-center space-x-2 justify-end">
                <Button onClick={onSubmit}>
                  <span>계산</span>
                  <CalculatorIcon className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="secondary">
                  <span className="sr-only">Show history</span>
                  <ResetIcon className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaygroundPage;
