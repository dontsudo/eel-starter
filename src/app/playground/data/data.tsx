import { z } from "zod";

export const soilSchema = z.object({
  id: z.string().optional(),
  토층명칭: z.string(),
  굴착깊이: z.preprocess(
    (args) => (args === "" ? undefined : args),
    z.coerce
      .number({
        invalid_type_error: "초기축력는 숫자여야 합니다.",
      })
      .positive({
        message: "초기축력는 양수여야 합니다.",
      })
  ),
  벽체설치: z.preprocess(
    (args) => (args === "" ? undefined : args),
    z.coerce
      .number({
        invalid_type_error: "초기축력는 숫자여야 합니다.",
      })
      .positive({
        message: "초기축력는 양수여야 합니다.",
      })
  ),
  앵커설치: z.preprocess(
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

export type Soil = z.infer<typeof soilSchema>;

export const excavationSchema = z.object({
  id: z.string().optional(),
  시작심도: z.preprocess(
    (args) => (args === "" ? undefined : args),
    z.coerce
      .number({
        invalid_type_error: "초기축력는 숫자여야 합니다.",
      })
      .positive({
        message: "초기축력는 양수여야 합니다.",
      })
  ),
  바닥심도: z.preprocess(
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

export type Excavation = z.infer<typeof excavationSchema>;

export const wallSchema = z.object({
  id: z.string().optional(),
  단면적: z.preprocess(
    (args) => (args === "" ? undefined : args),
    z.coerce
      .number({
        invalid_type_error: "초기축력는 숫자여야 합니다.",
      })
      .positive({
        message: "초기축력는 양수여야 합니다.",
      })
  ),
  단면2차모멘트: z.preprocess(
    (args) => (args === "" ? undefined : args),
    z.coerce
      .number({
        invalid_type_error: "초기축력는 숫자여야 합니다.",
      })
      .positive({
        message: "초기축력는 양수여야 합니다.",
      })
  ),
  탄성계수: z.preprocess(
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

export type Wall = z.infer<typeof wallSchema>;

export const anchorSchema = z.object({
  id: z.string().optional(),
  설치각도: z.coerce.number({
    invalid_type_error: "설치각도는 숫자여야 합니다.",
  }),
  단면적: z.preprocess(
    (args) => (args === "" ? undefined : args),
    z.coerce
      .number({
        invalid_type_error: "초기축력는 숫자여야 합니다.",
      })
      .positive({
        message: "초기축력는 양수여야 합니다.",
      })
  ),
  탄성계수: z.preprocess(
    (args) => (args === "" ? undefined : args),
    z.coerce
      .number({
        invalid_type_error: "초기축력는 숫자여야 합니다.",
      })
      .positive({
        message: "초기축력는 양수여야 합니다.",
      })
  ),
  설치길이: z.preprocess(
    (args) => (args === "" ? undefined : args),
    z.coerce
      .number({
        invalid_type_error: "초기축력는 숫자여야 합니다.",
      })
      .positive({
        message: "초기축력는 양수여야 합니다.",
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

export type Anchor = z.infer<typeof anchorSchema>;
