import { PageContainer } from "@/components/page-container";
import { useTranslations } from "next-intl";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function ProfilePage() {
  const t = useTranslations("Navbar");
  const tp = useTranslations("ProfilePage");

  return (
    <PageContainer title={t("profile")}>
      <div className="space-y-12">
        <div className="flex flex-col md:flex-row items-center gap-8 border-b border-border/50 pb-12">
          <Avatar className="h-32 w-32 ring-4 ring-primary/20">
            <AvatarImage src="/favicon.ico" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="text-center md:text-right space-y-2">
            <h2 className="text-3xl font-black">جان دو</h2>
            <p className="text-muted-foreground text-lg">john@example.com</p>
            <Button className="!rounded-xl bg-ios-gradient shadow-lg shadow-primary/20">
              {tp("editProfile")}
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="glass p-6 rounded-3xl space-y-4">
            <h3 className="font-bold text-xl">{tp("userInfo")}</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">{tp("firstName")}:</span>
                <span>جان</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">{tp("lastName")}:</span>
                <span>دو</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">{tp("phone")}:</span>
                <span>۰۹۱۲۳۴۵۶۷۸۹</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
