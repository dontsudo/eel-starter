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

import { Excavation, excavationSchema } from "../data/data";

export const ExcavationForm: React.FC = () => {
  const addExcavation = useProjectStore((state) => state.addExcavation);
  const form = useForm<Excavation>({
    resolver: zodResolver(excavationSchema),

    mode: "onChange",
  });

  const onSubmit = (data: Excavation) => {
    addExcavation(data);
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid gap-2">
          <FormField
            control={form.control}
            name="시작심도"
            render={({ field }) => (
              <FormItem>
                <FormLabel>시작심도</FormLabel>
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
            name="바닥심도"
            render={({ field }) => (
              <FormItem>
                <FormLabel>바닥심도</FormLabel>
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
