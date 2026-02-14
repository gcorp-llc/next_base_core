"use client";

import { ClinicForm } from "@/features/clinics/components/clinic-form";
import { PageContainer } from "@/components/page-container";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ClinicManagePage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-black">مدیریت کلینیک و مطب</h1>
          <p className="text-muted-foreground mt-1">اطلاعات کسب و کار و محل فعالیت خود را مدیریت کنید</p>
        </div>
        {!showForm && (
          <Button onClick={() => setShowForm(true)} className="bg-ios-gradient !rounded-2xl font-bold">
            + ثبت مرکز جدید
          </Button>
        )}
      </div>

      <div className="glass-card !p-8">
        {showForm ? (
          <div className="space-y-6">
            <Button variant="ghost" onClick={() => setShowForm(false)} className="mb-4">
               ← بازگشت به لیست
            </Button>
            <ClinicForm onSuccess={() => setShowForm(false)} />
          </div>
        ) : (
          <div className="text-center py-20 space-y-4">
             <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <span className="icon-[solar--hospital-bold-duotone] w-12 h-12 text-primary" />
             </div>
             <h3 className="text-xl font-bold">مرکزی ثبت نشده است</h3>
             <p className="text-muted-foreground max-w-sm mx-auto">
                شما هنوز هیچ مطب، کلینیک یا بیمارستانی را به پروفایل خود اضافه نکرده‌اید. با ثبت اولین مرکز، بیماران می‌توانند نوبت‌های خود را رزرو کنند.
             </p>
             <Button onClick={() => setShowForm(true)} className="bg-ios-gradient px-8 !rounded-2xl font-bold mt-4 shadow-lg shadow-primary/20">
                ثبت اولین مرکز
             </Button>
          </div>
        )}
      </div>
    </div>
  );
}
