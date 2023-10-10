import { z } from "zod";

export const soilSchema = z.object({
  id: z.string().optional(),
  토층명칭: z
    .string({
      invalid_type_error: "토층명칭은 문자열이어야 합니다.",
    })
    .optional(),
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

export type Soil = z.infer<typeof soilSchema>;

export const excavationSchema = z.object({
  id: z.string().optional(),
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

export type Excavation = z.infer<typeof excavationSchema>;

export const wallSchema = z.object({
  id: z.string().optional(),
  단면적: z.preprocess(
    (args) => (args === "" ? undefined : args),
    z.coerce
      .number({
        invalid_type_error: "단면적은 숫자여야 합니다.",
      })
      .positive({
        message: "단면적은 양수여야 합니다.",
      })
  ),
  단면2차모멘트: z.preprocess(
    (args) => (args === "" ? undefined : args),
    z.coerce
      .number({
        invalid_type_error: "단면2차모멘트는 숫자여야 합니다.",
      })
      .positive({
        message: "단면2차모멘트는 양수여야 합니다.",
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
});

export type Wall = z.infer<typeof wallSchema>;

export const anchorSchema = z.object({
  id: z.string().optional(),
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
        invalid_type_error: "단면적은 숫자여야 합니다.",
      })
      .positive({
        message: "단면적은 양수여야 합니다.",
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
        invalid_type_error: "초기축력은 숫자여야 합니다.",
      })
      .positive({
        message: "초기축력는 양수여야 합니다.",
      })
  ),
});

export type Anchor = z.infer<typeof anchorSchema>;
