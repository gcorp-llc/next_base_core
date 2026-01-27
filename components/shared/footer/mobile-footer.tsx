"use client";

import { usePathname } from "next/navigation";
import { FooterItem } from "./components/footer-item";

const navItems = [
  { icon: "icon-[solar--home-smile-angle-broken]", label: "خانه", href: "/" },
  { icon: "icon-[solar--calendar-broken]", label: "نوبت‌ها", href: "/appointments" },
  { icon: "icon-[solar--bell-broken]", label: "اعلان‌ها", href: "/notifications" },
  { icon: "icon-[hugeicons--notification-square]", label: "پیام‌ها", href: "/messages" },
  { icon: "icon-[solar--user-circle-broken]", label: "پروفایل", href: "/profile" },
];

export const MobileFooter = () => {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 md:hidden">
      {/* استفاده از bg-zeteb-gradient برای ست شدن با نوبار 
          و border-white/30 برای جدا شدن از پس‌زمینه
      */}
      <div className="mx-auto max-w-lg flex items-center justify-around rounded-full border border-white/30 bg-zeteb-gradient py-2 shadow-2xl backdrop-blur-2xl">
        {navItems.map((item) => (
          <FooterItem
            key={item.href}
            icon={item.icon}
            label={item.label}
            href={item.href}
            isActive={pathname === item.href}
          />
        ))}
      </div>
    </div>
  );
};