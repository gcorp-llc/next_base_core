import { AuthContainer } from "@/features/auth/components/auth-container";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Auth" });

  return {
    title: t("title"),
  };
}

export default async function AuthPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-6 overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px] animate-pulse" />
        <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] rounded-full bg-purple-600/10 blur-[100px] animate-bounce [animation-duration:10s]" />
        <div className="absolute -bottom-[10%] left-[20%] w-[50%] h-[50%] rounded-full bg-blue-500/5 blur-[150px]" />
      </div>

      <div className="relative z-10 w-full">
        <AuthContainer />
      </div>

      {/* Footer or extra info could go here */}
      <div className="absolute bottom-8 left-0 w-full text-center z-10">
        <p className="text-slate-400 dark:text-slate-600 text-sm font-medium">
          &copy; {new Date().getFullYear()} Zeteb. All rights reserved.
        </p>
      </div>
    </div>
  );
}
