import { z } from "zod";

export const phoneSchema = z.object({
  phoneNumber: z
    .string()
    .min(11, { message: "phoneMinLength" })
    .max(11, { message: "phoneMaxLength" })
    .regex(/^09\d{9}$/, { message: "phoneInvalid" }),
});

export type PhoneSchema = z.infer<typeof phoneSchema>;

export const otpSchema = z.object({
  otp: z
    .string()
    .length(6, { message: "otpLength" })
    .regex(/^\d+$/, { message: "otpInvalid" }),
});

export type OtpSchema = z.infer<typeof otpSchema>;
