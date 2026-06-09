import * as z from "zod";

export default z.object({
  name: z.string(),
  email: z.string().email("Invalid email address"),
  phoneNumber: z
    .string()
    .min(
      12,
      "Country code must be 1-3 digits and subscriber number must be 10 digits",
    )
    .max(
      14,
      "Country code must be 1-3 digits and subscriber number must be 10 digits",
    )
    .refine((value) => value.startsWith("+"), {
      message: "Country code must start with +",
    }).or(z.literal(""))
    .optional(),
  dob: z.string().optional(),
  gender: z
    .enum(["MALE", "FEMALE", "NON_BINARY", "PREFER_NOT_TO_SAY"])
    .or(z.literal(""))
    .optional(),
  bloodGroup: z
    .enum([
      "A_POSITIVE",
      "A_NEGATIVE",
      "B_POSITIVE",
      "B_NEGATIVE",
      "AB_POSITIVE",
      "AB_NEGATIVE",
      "O_POSITIVE",
      "O_NEGATIVE",
    ])
    .or(z.literal(""))
    .optional(),
  address: z.string().optional(),
  postalCode: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  country: z.string().optional(),
});
