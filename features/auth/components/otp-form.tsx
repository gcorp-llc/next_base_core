"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { otpSchema, type OtpSchema } from "../lib/schema";
import { authClient } from "../lib/auth-client";
import { useState, useRef, useEffect } from "react";
import { toast } from "sonner";
import { motion } from "motion/react";

interface OtpFormProps {
  phoneNumber: string;
  onBack: () => void;
}

export const OtpForm = ({ phoneNumber, onBack }: OtpFormProps) => {
  const t = useTranslations("Auth");
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<OtpSchema>({
    resolver: zodResolver(otpSchema),
    defaultValues: { otp: "" },
  });

  const otpValue = watch("otp");

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const onSubmit = async (data: OtpSchema) => {
    setIsLoading(true);
    try {
      const { error } = await authClient.phoneNumber.verify({
        phoneNumber,
        code: data.otp,
      });
      if (error) {
        toast.error(error.message || "Invalid OTP");
      } else {
        toast.success(t("loginSuccess"));
        window.location.href = "/";
      }
    } catch (err) {
      console.error(err);
      toast.error("Verification failed");
    } finally {
      setIsLoading(false);
    }
  };

  // Simple digit display
  const digits = otpValue.padEnd(6, " ").split("");

  return (
    <motion.form
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8"
    >
      <div className="space-y-4">
        <div className="relative">
          <input
            {...register("otp")}
            type="text"
            maxLength={6}
            autoFocus
            className="absolute inset-0 opacity-0 cursor-default"
            disabled={isLoading}
            autoComplete="one-time-code"
          />
          <div className="flex justify-between gap-2 dir-ltr">
            {digits.map((digit, i) => (
              <div
                key={i}
                className={`w-12 h-16 sm:w-14 sm:h-20 flex items-center justify-center rounded-2xl border-2 transition-all text-2xl sm:text-3xl font-black glass ${
                  otpValue.length === i
                    ? "border-primary bg-primary/10"
                    : digit !== " "
                    ? "border-primary/50 bg-white/10"
                    : "border-white/10 bg-white/5"
                }`}
              >
                {digit !== " " ? digit : ""}
                {otpValue.length === i && (
                  <motion.div
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                    className="w-0.5 h-8 bg-primary rounded-full"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        {errors.otp && (
          <p className="text-sm font-bold text-red-500 text-center">
            {t(errors.otp.message as Parameters<typeof t>[0])}
          </p>
        )}
      </div>

      <div className="space-y-4">
        <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
          <Button
            type="submit"
            disabled={isLoading || otpValue.length !== 6}
            className="w-full h-14 rounded-2xl bg-ios-gradient text-white text-lg font-bold shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all border-none"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <span className="animate-spin icon-[solar--restart-bold-duotone] w-5 h-5" />
                {t("verifying")}
              </span>
            ) : (
              t("verifyCode")
            )}
          </Button>
        </motion.div>

        <button
          type="button"
          onClick={onBack}
          className="w-full text-slate-500 dark:text-slate-400 text-sm font-bold hover:text-primary transition-colors flex items-center justify-center gap-2"
        >
          <span className="icon-[solar--arrow-left-linear] w-4 h-4 rtl:rotate-180" />
          {t("changePhone")}
        </button>
      </div>
    </motion.form>
  );
};
