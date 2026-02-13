"use client";

import { ResponsiveModal } from "@/components/ui/responsive-modal";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { useState, useRef } from "react";

interface MediaModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelect: (files: File[]) => void;
  type: "image" | "video";
}

export function MediaModal({ open, onOpenChange, onSelect, type }: MediaModalProps) {
  const t = useTranslations("PostEditor");
  const [previews, setPreviews] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      const newPreviews = files.map(file => URL.createObjectURL(file));
      setPreviews(newPreviews);
    }
  };

  const handleDone = () => {
    if (fileInputRef.current?.files) {
      onSelect(Array.from(fileInputRef.current.files));
    }
    onOpenChange(false);
  };

  return (
    <ResponsiveModal
      title={type === "image" ? t("selectMedia") : t("video")}
      open={open}
      onOpenChange={onOpenChange}
    >
      <div className="space-y-4 pt-4">
        {previews.length === 0 ? (
          <div
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-border/50 rounded-[2rem] p-12 flex flex-col items-center justify-center gap-4 hover:bg-white/5 transition-colors cursor-pointer"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
               <span className={`${type === "image" ? "icon-[solar--gallery-bold-duotone]" : "icon-[solar--videocamera-record-bold-duotone]"} w-8 h-8 text-primary`} />
            </div>
            <p className="font-bold text-muted-foreground">{t("uploadMedia")}</p>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept={type === "image" ? "image/*" : "video/*"}
              multiple
              onChange={handleFileChange}
            />
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-2 max-h-[400px] overflow-y-auto p-1">
            {previews.map((src, i) => (
              <div key={i} className="relative aspect-square rounded-2xl overflow-hidden border border-border/30">
                {type === "image" ? (
                  <img src={src} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                  <video src={src} className="w-full h-full object-cover" />
                )}
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2 rounded-full w-6 h-6"
                  onClick={() => setPreviews(prev => prev.filter((_, idx) => idx !== i))}
                >
                  <span className="icon-[solar--trash-bin-trash-bold-duotone] w-4 h-4" />
                </Button>
              </div>
            ))}
            <button
               onClick={() => fileInputRef.current?.click()}
               className="aspect-square rounded-2xl border-2 border-dashed border-border/50 flex items-center justify-center hover:bg-white/5 transition-colors"
            >
               <span className="icon-[solar--add-circle-bold-duotone] w-8 h-8 text-muted-foreground" />
            </button>
          </div>
        )}

        <div className="flex justify-end gap-2 pt-4 border-t border-border/30">
          <Button variant="ghost" onClick={() => onOpenChange(false)} className="rounded-full font-bold">
            {t("back")}
          </Button>
          <Button
            disabled={previews.length === 0}
            onClick={handleDone}
            className="bg-ios-gradient px-8 rounded-full font-bold shadow-lg shadow-primary/20"
          >
            {t("done")}
          </Button>
        </div>
      </div>
    </ResponsiveModal>
  );
}
