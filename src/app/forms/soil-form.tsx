import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useFormStore } from "./form-store";

export const soilFormSchema = z.object({
  굴착깊이: z.preprocess(
    (args) => (args === "" ? undefined : args),
    z.coerce
      .number({
        invalid_type_error: "굴착깊이는 숫자여야 합니다.",
      })
      .positive({
        message: "굴착깊이는 양수여야 합니다.",
      })
  ),
  벽체설치: z.preprocess(
    (args) => (args === "" ? undefined : args),
    z.coerce
      .number({
        invalid_type_error: "벽체설치는 숫자여야 합니다.",
      })
      .positive({
        message: "벽체설치는 양수여야 합니다.",
      })
  ),
  앵커설치: z.preprocess(
    (args) => (args === "" ? undefined : args),
    z.coerce
      .number({
        invalid_type_error: "앵커설치는 숫자여야 합니다.",
      })
      .positive({
        message: "앵커설치는 양수여야 합니다.",
      })
  ),
});

export type SoilFormValues = z.infer<typeof soilFormSchema>;

export function SoilForm() {
  const { toast } = useToast();
  const addSoil = useFormStore((state) => state.addSoil);

  const form = useForm<SoilFormValues>({
    resolver: zodResolver(soilFormSchema),
    mode: "onChange",
  });

  function onSubmit(data: SoilFormValues) {
    addSoil(data);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });

    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="굴착깊이"
            render={({ field }) => (
              <FormItem>
                <FormLabel>굴착깊이</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
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
                  <Input type="number" {...field} />
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
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-end">
          <Button type="submit" className="mt-4">
            추가
          </Button>
        </div>
      </form>
    </Form>
  );
}
