import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Overview } from "./overview";

export const Analytics: React.FC = () => {
  return (
    <>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <Overview />
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <Overview />
        </TabsContent>
        <TabsContent value="reports" className="space-y-4">
          <Overview />
        </TabsContent>
      </Tabs>
    </>
  );
};
