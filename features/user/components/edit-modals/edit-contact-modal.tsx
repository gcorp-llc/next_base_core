"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactSchema } from "../../lib/schema";
import { ResponsiveModal } from "@/components/ui/responsive-modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUserStore } from "../../lib/store";
import { useState } from "react";
import { toast } from "sonner";
import { profileApi } from "../../api/profile";

export function EditContactModal({ initialData }: { initialData: any }) {
  const { activeModal, closeModal } = useUserStore();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(ContactSchema),
    defaultValues: initialData,
  });

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    try {
      await profileApi.updateProfile({
        addresses: [data.address],
      });

      toast.success("اطلاعات تماس بروزرسانی شد");
      closeModal();
    } catch (error) {
      toast.error("خطا در بروزرسانی");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ResponsiveModal
      title="ویرایش اطلاعات تماس"
      open={activeModal === "contact"}
      onOpenChange={(open) => !open && closeModal()}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2 text-right">
          <Label>آدرس</Label>
          <Input {...register("address")} className="text-right" />
          {errors.address && <p className="text-xs text-destructive">{errors.address.message as string}</p>}
        </div>
        <div className="space-y-2 text-right">
          <Label>شماره تماس</Label>
          <Input {...register("phone")} className="text-right" />
          {errors.phone && <p className="text-xs text-destructive">{errors.phone.message as string}</p>}
        </div>
        <div className="flex justify-start gap-3 pt-4">
          <Button type="submit" disabled={isSubmitting} className="bg-ios-gradient px-8">
            {isSubmitting ? "در حال ذخیره..." : "ذخیره"}
          </Button>
          <Button type="button" variant="outline" onClick={closeModal}>انصراف</Button>
        </div>
      </form>
    </ResponsiveModal>
  );
}
