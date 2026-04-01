import * as z from "zod";

export const stepRegisterSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email"),
  password: z
  .string()
  .min(8, "Password must be at least 8 characters")
  .regex(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
    "Password must contain uppercase, lowercase, number and special character"
  )
});

export const stepGenderSchema = z.object({
  gender: z.enum(["male", "female"])
});

export const stepAgeSchema = z.object({
  age: z.coerce.number().min(10).max(80),
});

export const stepWeightSchema = z.object({
  weight: z.coerce.number().min(40).max(150),
});

export const stepHeightSchema = z.object({
  height: z.coerce.number().min(140).max(210),
});

export const stepGoalSchema = z.object({
  goal: z.string().min(1),
});

export const levelsSchema = z.object({
  activityLevel: z.string().min(1),
});

export const registerFormSchema = stepRegisterSchema
  .merge(stepGenderSchema)
  .merge(stepAgeSchema)
  .merge(stepWeightSchema)
  .merge(stepHeightSchema)
  .merge(stepGoalSchema)
  .merge(levelsSchema);

  export type RegisterFormSchema = z.infer<typeof registerFormSchema>;


