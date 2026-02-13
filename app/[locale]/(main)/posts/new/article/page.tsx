import { ArticleEditor } from "@/features/posts/components/article-editor";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "PostEditor" });
  return {
    title: t("title"),
  };
}

export default function ArticlePage() {
  return (
    <div className="pt-8">
      <ArticleEditor />
    </div>
  );
}
