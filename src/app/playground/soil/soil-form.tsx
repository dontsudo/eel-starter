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

import { Soil, soilSchema } from "../data/data";
import { useProjectStore } from "@/hooks/use-project-store";

export const SoilForm: React.FC = () => {
  const addSoil = useProjectStore((state) => state.addSoil);
  const form = useForm<Soil>({
    resolver: zodResolver(soilSchema),
    mode: "onChange",
  });

  const onSubmit = (data: Soil) => {
    addSoil(data);
    form.reset({ 토층명칭: "" });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid gap-4">
          <FormField
            control={form.control}
            name="토층명칭"
            render={({ field }) => (
              <FormItem>
                <FormLabel>토층명칭</FormLabel>
                <FormControl>
                  <Input {...field} type="text" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="굴착깊이"
            render={({ field }) => (
              <FormItem>
                <FormLabel>굴착깊이</FormLabel>
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
            name="벽체설치"
            render={({ field }) => (
              <FormItem>
                <FormLabel>벽체설치</FormLabel>
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
            name="앵커설치"
            render={({ field }) => (
              <FormItem>
                <FormLabel>앵커설치</FormLabel>
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
