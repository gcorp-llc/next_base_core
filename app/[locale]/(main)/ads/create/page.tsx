"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

export default function CreateAdPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("درخواست ثبت آگهی با موفقیت ارسال شد. پس از تایید مدیریت نمایش داده خواهد شد.");
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-black">ثبت آگهی تبلیغاتی</h1>
        <p className="text-muted-foreground mt-1">خدمات و مهارت‌های خود را به هزاران بیمار معرفی کنید</p>
      </div>

      <div className="glass-card !p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label>عنوان آگهی</Label>
                <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="مثلاً متخصص برتر سال" />
              </div>
              <div>
                <Label>توضیحات کوتاه</Label>
                <Textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="متن تبلیغاتی خود را اینجا بنویسید..." className="min-h-[120px]" />
              </div>
            </div>

            <div className="space-y-4">
               <Label>پیش‌نمایش آگهی</Label>
               <div className="border border-primary/20 bg-primary/5 rounded-2xl overflow-hidden p-4">
                  <div className="h-20 bg-ios-gradient rounded-xl mb-3 flex items-center justify-center text-white font-bold opacity-50">تصویر آگهی</div>
                  <h4 className="font-black text-sm text-primary mb-1">{title || "عنوان آگهی"}</h4>
                  <p className="text-[10px] text-muted-foreground line-clamp-2">{description || "توضیحات آگهی در اینجا نمایش داده می‌شود..."}</p>
               </div>
               <p className="text-[10px] text-muted-foreground bg-white/5 p-3 rounded-lg border border-white/10">
                  نکته: تصاویر و متون پس از بررسی توسط ناظران سایت منتشر خواهند شد.
               </p>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10">
            <Button type="submit" className="w-full bg-ios-gradient h-12 !rounded-2xl font-black text-lg">
               پرداخت و ثبت نهایی آگهی
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
