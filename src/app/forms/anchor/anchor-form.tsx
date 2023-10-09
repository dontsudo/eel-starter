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
import { useFormStore } from "../form-store";

export const anchorSchema = z.object({
  설치각도: z.preprocess(
    (args) => (args === "" ? undefined : args),
    z.coerce
      .number({
        invalid_type_error: "설치각도는 숫자여야 합니다.",
      })
      .positive({
        message: "설치각도는 양수여야 합니다.",
      })
  ),
  단면적: z.preprocess(
    (args) => (args === "" ? undefined : args),
    z.coerce
      .number({
        invalid_type_error: "단면적는 숫자여야 합니다.",
      })
      .positive({
        message: "단면적는 양수여야 합니다.",
      })
  ),
  탄성계수: z.preprocess(
    (args) => (args === "" ? undefined : args),
    z.coerce
      .number({
        invalid_type_error: "탄성계수는 숫자여야 합니다.",
      })
      .positive({
        message: "탄성계수는 양수여야 합니다.",
      })
  ),
  설치길이: z.preprocess(
    (args) => (args === "" ? undefined : args),
    z.coerce
      .number({
        invalid_type_error: "설치길이는 숫자여야 합니다.",
      })
      .positive({
        message: "설치길이는 양수여야 합니다.",
      })
  ),
  초기축력: z.preprocess(
    (args) => (args === "" ? undefined : args),
    z.coerce
      .number({
        invalid_type_error: "초기축력는 숫자여야 합니다.",
      })
      .positive({
        message: "초기축력는 양수여야 합니다.",
      })
  ),
});

export type AnchorFormValues = z.infer<typeof anchorSchema>;

export function AnchorForm() {
  const { toast } = useToast();
  const addAnchor = useFormStore((state) => state.addAnchor);

  const form = useForm<AnchorFormValues>({
    resolver: zodResolver(anchorSchema),
    mode: "onChange",
  });

  function onSubmit(data: AnchorFormValues) {
    addAnchor(data);
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
            name="설치각도"
            render={({ field }) => (
              <FormItem>
                <FormLabel>설치각도</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
          <FormField
            control={form.control}
            name="설치길이"
            render={({ field }) => (
              <FormItem>
                <FormLabel>설치길이</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="초기축력"
            render={({ field }) => (
              <FormItem>
                <FormLabel>초기축력</FormLabel>
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
