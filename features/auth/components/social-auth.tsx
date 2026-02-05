"use client";

import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { authClient } from "../lib/auth-client";
import { motion } from "motion/react";

export const SocialAuth = () => {
  const t = useTranslations("Auth");

  const handleSocialLogin = async (provider: "google" | "github") => {
    await authClient.signIn.social({
      provider,
      callbackURL: "/",
    });
  };

  return (
    <div className="space-y-6">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-slate-200 dark:border-slate-800"></span>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white dark:bg-slate-900 px-4 text-slate-400 font-bold tracking-wider">
            {t("orContinueWith")}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            variant="outline"
            onClick={() => handleSocialLogin("google")}
            className="w-full h-14 rounded-2xl border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all gap-3 font-bold text-slate-700 dark:text-slate-300"
          >
            <span className="icon-[logos--google-icon] w-5 h-5" />
            Google
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            variant="outline"
            onClick={() => handleSocialLogin("github")}
            className="w-full h-14 rounded-2xl border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all gap-3 font-bold text-slate-700 dark:text-slate-300"
          >
            <span className="icon-[logos--github-icon] w-5 h-5" />
            GitHub
          </Button>
        </motion.div>
      </div>
    </div>
  );
};
