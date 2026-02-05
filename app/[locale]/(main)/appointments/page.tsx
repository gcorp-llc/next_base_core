import { PageContainer } from "@/components/page-container";
import { useTranslations } from "next-intl";

export default function AppointmentsPage() {
  const t = useTranslations("Navbar");
  return (
    <PageContainer title={t("appointments")}>
      <div className="flex flex-col items-center justify-center h-full text-muted-foreground py-20">
        <span className="icon-[solar--calendar-bold-duotone] w-20 h-20 mb-4 opacity-20" />
        <p className="text-xl font-bold">هنوز نوبتی ثبت نکرده‌اید</p>
      </div>
    </PageContainer>
  );
}
