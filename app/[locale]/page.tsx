import { useTranslations ,  useLocale } from "next-intl";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "صفحه اصلی",
  description: "صفحه اصلی اپلیکیشن",
};

export default function HomePage() {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  const ln = useTranslations("Languages");
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{t("title")}</h1>
         <div>زبان فعال: {ln(locale)}</div>
      </div>
    </main>
  );
}