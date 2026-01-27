"use client";

import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

export const NavMobile = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        {/* دکمه همبرگری دقیقاً با استایل لاراول */}
        <button className="btn btn-ghost lg:hidden p-2 rounded-lg hover:bg-white/20 transition-all duration-300 group">
          <span 
            className="icon-[solar--hamburger-menu-bold-duotone] w-9 h-9 text-slate-500 transition-colors group-hover:text-slate-700" 
            aria-hidden="true"
          ></span>
        </button>
      </SheetTrigger>

      {/* محتوای دراور با استایل شیشه‌ای (Glass) */}
      <SheetContent side="right" className="w-80 border-l border-white/20 bg-white/10 p-0 backdrop-blur-2xl dark:bg-slate-900/50">
        
        {/* هدر مخفی برای رعایت استاندارد Accessibility */}
        <SheetTitle className="sr-only">منوی اصلی</SheetTitle>

        <div className="flex h-full flex-col p-4 text-white">
            {/* لوگو در منو */}
            <div className="mb-6 px-2 text-2xl font-black tracking-tighter text-white drop-shadow-md">
                ZETEB MENU
            </div>

            {/* لیست آیتم‌ها دقیقاً مشابه لاراول */}
            <ul className="space-y-2">
                <li>
                    <a href="#" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/20 transition-all text-white/90 hover:text-white hover:shadow-lg">
                        <span className="icon-[solar--home-smile-bold-duotone] w-6 h-6"></span>
                        <span className="font-bold">خانه</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/20 transition-all text-white/80 hover:text-white">
                         <span className="icon-[solar--videocamera-record-bold-duotone] w-6 h-6"></span>
                        <span>ویدیوها</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/20 transition-all text-white/80 hover:text-white">
                        <span className="icon-[solar--calendar-bold-duotone] w-6 h-6"></span>
                        <span>نوبت‌دهی</span>
                    </a>
                </li>
            </ul>

            <div className="mt-auto border-t border-white/20 pt-4">
                 <a href="#" className="flex items-center gap-3 p-3 rounded-xl hover:bg-red-500/20 transition-all text-white/80 hover:text-red-300">
                    <span className="icon-[solar--logout-3-bold-duotone] w-6 h-6"></span>
                    <span className="font-bold">خروج</span>
                </a>
            </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};