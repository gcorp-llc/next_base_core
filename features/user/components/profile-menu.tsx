"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export const ProfileMenu = () => {
  const t = useTranslations("ProfileMenu");

  const menuItems = [
    {
      label: t("dashboard"),
      href: "/dashboard",
      icon: "icon-[solar--widget-bold-duotone]",
    },
    {
      label: t("appointments"),
      href: "/appointments",
      icon: "icon-[solar--calendar-bold-duotone]",
    },
    {
      label: t("medicalHistory"),
      href: "/history",
      icon: "icon-[solar--notes-bold-duotone]",
    },
    {
      label: t("settings"),
      href: "/settings",
      icon: "icon-[solar--settings-bold-duotone]",
    },
  ];

  return (
    <div className="flex flex-col gap-1 p-2">
      <div className="px-3 py-2 mb-1">
        <p className="text-sm font-bold text-foreground">John Doe</p>
        <p className="text-xs text-muted-foreground">john@example.com</p>
      </div>

      <div className="h-px bg-border/50 my-1" />

      {menuItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-primary/10 transition-colors group"
        >
          <span className={`${item.icon} w-5 h-5 text-primary/70 group-hover:text-primary transition-colors`} />
          <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
            {item.label}
          </span>
        </Link>
      ))}

      <div className="h-px bg-border/50 my-1" />

      <Link
        href="/logout"
        className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-destructive/10 transition-colors group"
      >
        <span className="icon-[solar--logout-bold-duotone] w-5 h-5 text-destructive/70 group-hover:text-destructive transition-colors" />
        <span className="text-sm font-medium text-destructive/70 group-hover:text-destructive transition-colors">
          {t("logout")}
        </span>
      </Link>
    </div>
  );
};
