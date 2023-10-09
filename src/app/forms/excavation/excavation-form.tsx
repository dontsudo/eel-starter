import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export const excavationSchema = z.object({
  시작심도: z.preprocess(
    (args) => (args === "" ? undefined : args),
    z.coerce
      .number({
        invalid_type_error: "시작심도는 숫자여야 합니다.",
      })
      .positive({
        message: "시작심도는 양수여야 합니다.",
      })
  ),
  바닥심도: z.preprocess(
    (args) => (args === "" ? undefined : args),
    z.coerce
      .number({
        invalid_type_error: "바닥심도는 숫자여야 합니다.",
      })
      .positive({
        message: "바닥심도는 양수여야 합니다.",
      })
  ),
});

export type ExcavationFormValues = z.infer<typeof excavationSchema>;

export function ExcavationForm() {
  const { toast } = useToast();

  const form = useForm<ExcavationFormValues>({
    resolver: zodResolver(excavationSchema),
    mode: "onChange",
  });

  function onSubmit(data: ExcavationFormValues) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="시작심도"
            render={({ field }) => (
              <FormItem>
                <FormLabel>시작심도</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormDescription>단위: m</FormDescription>
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
