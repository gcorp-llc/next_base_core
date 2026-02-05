"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";

interface AuthHeaderProps {
  step: "phone" | "otp";
}

export const AuthHeader = ({ step }: AuthHeaderProps) => {
  const t = useTranslations("Auth");

  return (
    <div className="text-center mb-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        key={step === "phone" ? "welcome" : "verify"}
        className="text-4xl font-black text-slate-900 dark:text-white mb-3 tracking-tight"
      >
        {step === "phone" ? t("welcome") : t("verifyCode")}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-slate-500 dark:text-slate-400 font-medium text-lg"
      >
        {step === "phone" ? t("enterPhone") : t("enterOtp")}
      </motion.p>
    </div>
  );
};
