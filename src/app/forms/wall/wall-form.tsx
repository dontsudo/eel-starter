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

export const wallSchema = z.object({
  단면적: z.preprocess(
    (args) => (args === "" ? undefined : args),
    z.coerce
      .number({
        invalid_type_error: "시작심도는 숫자여야 합니다.",
      })
      .positive({
        message: "시작심도는 양수여야 합니다.",
      })
  ),
  단면2차모멘트: z.preprocess(
    (args) => (args === "" ? undefined : args),
    z.coerce
      .number({
        invalid_type_error: "시작심도는 숫자여야 합니다.",
      })
      .positive({
        message: "시작심도는 양수여야 합니다.",
      })
  ),
  탄성계수: z.preprocess(
    (args) => (args === "" ? undefined : args),
    z.coerce
      .number({
        invalid_type_error: "시작심도는 숫자여야 합니다.",
      })
      .positive({
        message: "시작심도는 양수여야 합니다.",
      })
  ),
});

export type WallFormValues = z.infer<typeof wallSchema>;

export function WallForm() {
  const { toast } = useToast();

  const form = useForm<WallFormValues>({
    resolver: zodResolver(wallSchema),
    mode: "onChange",
  });

  function onSubmit(data: WallFormValues) {
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
            name="단면적"
            render={({ field }) => (
              <FormItem>
                <FormLabel>단면적</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
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
                  <Input type="number" {...field} />
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
