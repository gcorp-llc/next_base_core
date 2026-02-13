"use client";

import { ResponsiveModal } from "@/components/ui/responsive-modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTranslations } from "next-intl";
import { useState } from "react";

interface EventModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onDone: (eventData: { title: string; date: string; time: string; location: string }) => void;
}

export function EventModal({ open, onOpenChange, onDone }: EventModalProps) {
  const t = useTranslations("PostEditor");
  const [eventData, setEventData] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
  });

  const handleDone = () => {
    onDone(eventData);
    onOpenChange(false);
  };

  return (
    <ResponsiveModal
      title={t("event")}
      open={open}
      onOpenChange={onOpenChange}
    >
      <div className="space-y-4 pt-4">
        <div className="space-y-2">
          <Label className="font-bold text-xs px-1">{t("eventTitle")}</Label>
          <Input
            value={eventData.title}
            onChange={(e) => setEventData({...eventData, title: e.target.value})}
            className="rounded-2xl bg-white/5 border-border/50 h-12"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="font-bold text-xs px-1">{t("eventDate")}</Label>
            <Input
              type="date"
              value={eventData.date}
              onChange={(e) => setEventData({...eventData, date: e.target.value})}
              className="rounded-2xl bg-white/5 border-border/50 h-12"
            />
          </div>
          <div className="space-y-2">
            <Label className="font-bold text-xs px-1">{t("eventTime")}</Label>
            <Input
              type="time"
              value={eventData.time}
              onChange={(e) => setEventData({...eventData, time: e.target.value})}
              className="rounded-2xl bg-white/5 border-border/50 h-12"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label className="font-bold text-xs px-1">{t("eventLocation")}</Label>
          <Input
            value={eventData.location}
            onChange={(e) => setEventData({...eventData, location: e.target.value})}
            className="rounded-2xl bg-white/5 border-border/50 h-12"
          />
        </div>

        <div className="flex justify-end gap-2 pt-4 border-t border-border/30">
          <Button variant="ghost" onClick={() => onOpenChange(false)} className="rounded-full font-bold">
            {t("back")}
          </Button>
          <Button
            disabled={!eventData.title || !eventData.date}
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
