import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useProjectStore } from "@/hooks/use-project-store";

import { wallSchema, Wall } from "../data/data";
import { useToast } from "@/components/ui/use-toast";

export const WallForm: React.FC = () => {
  const { toast } = useToast();
  const addWall = useProjectStore((state) => state.addWall);

  const form = useForm<Wall>({
    resolver: zodResolver(wallSchema),
    mode: "onChange",
  });

  const onSubmit = (data: Wall) => {
    addWall(data);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });

    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid gap-4">
          <FormField
            control={form.control}
            name="단면적"
            render={({ field }) => (
              <FormItem>
                <FormLabel>단면적</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="number"
                    min={0}
                    value={field.value ?? ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="단면2차모멘트"
            render={({ field }) => (
              <FormItem>
                <FormLabel>단면2차모멘트</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="number"
                    min={0}
                    value={field.value ?? ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="탄성계수"
            render={({ field }) => (
              <FormItem>
                <FormLabel>탄성계수</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="number"
                    min={0}
                    value={field.value ?? ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="w-full mt-4">
          추가
        </Button>
      </form>
    </Form>
  );
};
