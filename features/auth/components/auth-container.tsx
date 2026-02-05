"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AuthHeader } from "./auth-header";
import { PhoneForm } from "./phone-form";
import { OtpForm } from "./otp-form";
import { SocialAuth } from "./social-auth";

export const AuthContainer = () => {
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneSuccess = (phone: string) => {
    setPhoneNumber(phone);
    setStep("otp");
  };

  const handleBack = () => {
    setStep("phone");
  };

  return (
    <div className="relative w-full max-w-[440px] mx-auto group">
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-linear-to-r from-primary to-purple-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

      <div className="relative glass-card !rounded-[2.3rem] p-8 md:p-12 overflow-hidden">
        <AuthHeader step={step} />

        <div className="relative min-h-[300px]">
          <AnimatePresence mode="wait" initial={false}>
            {step === "phone" ? (
              <motion.div
                key="phone-step"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <PhoneForm onSuccess={handlePhoneSuccess} />
                <div className="mt-8">
                  <SocialAuth />
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="otp-step"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <OtpForm phoneNumber={phoneNumber} onBack={handleBack} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Decorative elements inside the card */}
        <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -top-12 -left-12 w-32 h-32 bg-purple-600/10 rounded-full blur-3xl" />
      </div>
    </div>
  );
};
