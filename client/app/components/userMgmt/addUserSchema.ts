import * as z from "zod";

function trimToNull(str: string): string | null {
  if (!str) {
    return null;
  }
  const trimmed = str.trim();
  return trimmed === "" ? null : trimmed;
}

export default z.object({
  name: z.string().trim().min(1, "Name required"),
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
    })
    .refine((value) => !/[^+\d]/.test(value), {
      message: "Cannot contain any characters except digits and + symbol",
    })
    .or(z.literal(""))
    .transform((val) => (val === "" ? null : val))
    .nullable()
    .optional(),
  dob: z
    .string()
    .date()
    .refine((date) => date <= new Date().toISOString().split("T")[0], {
      message: "Date of birth cannot be in the future",
    })
    .nullable()
    .optional(),
  gender: z
    .enum(["MALE", "FEMALE", "NON_BINARY", "PREFER_NOT_TO_SAY"])
    .nullable()
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
    .nullable()
    .optional(),
  address: z.string().transform(trimToNull).nullable().optional(),
  postalCode: z.string().transform(trimToNull).nullable().optional(),
  city: z.string().transform(trimToNull).nullable().optional(),
  state: z.string().transform(trimToNull).nullable().optional(),
  country: z.string().transform(trimToNull).nullable().optional(),
});
