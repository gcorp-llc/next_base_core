"use client";

import { StatsDashboard } from "@/features/analytics/components/stats-dashboard";

export default function AnalyticsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      <div>
        <h1 className="text-3xl font-black">آمار و عملکرد</h1>
        <p className="text-muted-foreground mt-1">بررسی میزان بازدید، نوبت‌ها و بازدهی فعالیت‌های شما</p>
      </div>

      <StatsDashboard />

      <div className="glass-card !p-8">
        <h3 className="font-bold mb-4">گزارشات اخیر</h3>
        <div className="space-y-4">
           {[1, 2, 3].map(i => (
             <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <span className="icon-[solar--file-text-bold-duotone] text-primary" />
                   </div>
                   <div>
                      <p className="text-sm font-bold">گزارش عملکرد ماهانه - {i === 1 ? 'بهمن' : i === 2 ? 'دی' : 'آذر'}</p>
                      <p className="text-[10px] text-muted-foreground">تاریخ صدور: ۱۴۰۲/۱۱/۳۰</p>
                   </div>
                </div>
                <button className="text-primary text-xs font-bold hover:underline">دانلود PDF</button>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}
