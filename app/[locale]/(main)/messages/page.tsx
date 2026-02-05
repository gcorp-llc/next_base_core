import { PageContainer } from "@/components/page-container";
import { useTranslations } from "next-intl";

export default function MessagesPage() {
  const t = useTranslations("Navbar");
  return (
    <PageContainer title={t("messages")}>
      <div className="flex flex-col items-center justify-center h-full text-muted-foreground py-20">
        <span className="icon-[hugeicons--notification-square] w-20 h-20 mb-4 opacity-20" />
        <p className="text-xl font-bold">پیامی ندارید</p>
      </div>
    </PageContainer>
  );
}
