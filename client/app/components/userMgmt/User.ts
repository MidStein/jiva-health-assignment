import * as z from "zod";

const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  role: z.enum(["DOCTOR", "NURSE", "PATIENT"]),
  status: z.enum(["ACTIVE", "INACTIVE"]),
  joinedDate: z
    .string()
    .date()
    .refine((date) => date <= new Date().toISOString().split("T")[0])
    .transform((dateString) => new Date(dateString)),
  lastActive: z
    .string()
    .date()
    .refine((date) => date <= new Date().toISOString().split("T")[0])
    .transform((dateString) => new Date(dateString)),
  appointmentsCount: z.number(),
  prime: z.boolean(),
  email: z.string().email(),
  phoneNumber: z.string().regex(/^\+\d{11,13}/).nullable(),
  gender: z
    .enum(["MALE", "FEMALE", "NON_BINARY", "PREFER_NOT_TO_SAY"])
    .nullable(),
  dob: z
    .string()
    .date()
    .refine((date) => date <= new Date().toISOString().split("T")[0])
    .transform((dateString) => new Date(dateString))
    .nullable(),
});

type UserType = z.output<typeof UserSchema>;

export default UserSchema;
export type { UserType };
