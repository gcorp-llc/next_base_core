"use client";

import { Button } from "@/components/ui/button";

export function SidebarAd() {
  return (
    <div className="glass-card !p-0 overflow-hidden border border-primary/20 bg-primary/5">
      <div className="h-24 bg-ios-gradient relative overflow-hidden">
         <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
         <div className="absolute bottom-2 right-3 bg-white/20 backdrop-blur-md px-2 py-0.5 rounded text-[8px] text-white font-bold uppercase tracking-widest">Ad</div>
      </div>
      <div className="p-4 space-y-3">
        <h4 className="font-black text-sm text-primary">پکیج ویژه ارتقای پروفایل</h4>
        <p className="text-[10px] text-muted-foreground leading-relaxed">
          با خرید پکیج ویژه، پروفایل شما در صدر نتایج جستجو نمایش داده می‌شود و بازدید شما تا ۳ برابر افزایش می‌یابد.
        </p>
        <Button className="w-full h-8 !rounded-xl text-[10px] font-black bg-primary text-white shadow-lg shadow-primary/20">
          مشاهده جزئیات و خرید
        </Button>
      </div>
    </div>
  );
}
