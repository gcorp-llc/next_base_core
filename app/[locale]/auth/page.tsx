import { AuthContainer } from "@/features/auth/components/auth-container";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Auth" });
  return {
    title: t("title"),
  };
}

export default async function AuthPage() {
  const t = await getTranslations("Auth");

  return (
    <div className="w-full">
      <AuthContainer />

      <div className="mt-8 text-center">
        <p className="text-white/40 text-sm font-medium">
          {t("copyright", { year: new Date().getFullYear() })}
        </p>
      </div>
    </div>
  );
}
