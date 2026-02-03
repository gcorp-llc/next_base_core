"use client";

import { usePathname } from "@/i18n/navigation";
import { FooterItem } from "./components/footer-item";
import { useTranslations } from "next-intl";

export const MobileFooter = () => {
  const t = useTranslations("Navbar");
  const pathname = usePathname();

  const navItems = [
    {
      icon: "icon-[solar--home-smile-angle-broken]",
      label: t("home"),
      href: "/",
    },
    {
      icon: "icon-[solar--calendar-broken]",
      label: t("appointments"),
      href: "/appointments",
    },
    {
      icon: "icon-[solar--bell-broken]",
      label: t("notifications"),
      href: "/notifications",
    },
    {
      icon: "icon-[hugeicons--notification-square]",
      label: t("messages"),
      href: "/messages",
    },
    {
      icon: "icon-[solar--user-circle-broken]",
      label: t("profile"),
      href: "/profile",
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-2 pb-[env(safe-area-inset-bottom)] md:hidden">
      <div
        className={`
          glass-nav
          animate-navbar-in  // انیمیشن ورود نرم مشابه navbar
          mx-auto max-w-sm flex items-center justify-around
          rounded-full border border-white/20 dark:border-white/10
          bg-zeteb-gradient-glass py-2.5 px-3
          shadow-xl backdrop-blur-xl
          transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
        `}
      >
        {navItems.map((item) => (
          <FooterItem
            key={item.href}
            icon={item.icon}
            label={item.label}
            href={item.href}
            isActive={pathname === item.href}
            className="glass-item"  // هماهنگی با تم شیشه‌ای برای هر آیتم
          />
        ))}
      </div>
    </div>
  );
};