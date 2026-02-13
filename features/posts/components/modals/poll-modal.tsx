"use client";

import { ResponsiveModal } from "@/components/ui/responsive-modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslations } from "next-intl";
import { useState } from "react";

interface PollModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onDone: (pollData: { question: string; options: string[]; duration: string }) => void;
}

export function PollModal({ open, onOpenChange, onDone }: PollModalProps) {
  const t = useTranslations("PostEditor");
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", ""]);
  const [duration, setDuration] = useState("duration1Week");

  const addOption = () => {
    if (options.length < 4) {
      setOptions([...options, ""]);
    }
  };

  const updateOption = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const removeOption = (index: number) => {
    if (options.length > 2) {
      setOptions(options.filter((_, i) => i !== index));
    }
  };

  const handleDone = () => {
    onDone({ question, options: options.filter(o => o.trim()), duration });
    onOpenChange(false);
  };

  return (
    <ResponsiveModal
      title={t("pollQuestion")}
      open={open}
      onOpenChange={onOpenChange}
    >
      <div className="space-y-6 pt-4">
        <div className="space-y-2">
          <Label className="font-bold text-xs px-1">{t("pollQuestion")}</Label>
          <Input
            placeholder={t("pollQuestion")}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="rounded-2xl bg-white/5 border-border/50 h-12"
          />
        </div>

        <div className="space-y-3">
          <Label className="font-bold text-xs px-1">{t("pollOptions")}</Label>
          {options.map((option, i) => (
            <div key={i} className="flex gap-2">
              <Input
                placeholder={`${t("pollOptions")} ${i + 1}`}
                value={option}
                onChange={(e) => updateOption(i, e.target.value)}
                className="rounded-2xl bg-white/5 border-border/50 h-11"
              />
              {options.length > 2 && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeOption(i)}
                  className="shrink-0 rounded-xl hover:bg-destructive/10 hover:text-destructive"
                >
                  <span className="icon-[solar--trash-bin-trash-bold-duotone] w-5 h-5" />
                </Button>
              )}
            </div>
          ))}
          {options.length < 4 && (
            <Button
              variant="ghost"
              onClick={addOption}
              className="w-full rounded-2xl border border-dashed border-border/50 font-bold text-xs gap-2"
            >
              <span className="icon-[solar--add-circle-bold-duotone] w-4 h-4" />
              {t("addOption")}
            </Button>
          )}
        </div>

        <div className="space-y-2">
          <Label className="font-bold text-xs px-1">{t("pollDuration")}</Label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-between rounded-2xl bg-white/5 border-border/50 h-11 font-bold text-xs">
                {t(duration)}
                <span className="icon-[solar--alt-arrow-down-bold-duotone] w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="glass border-none rounded-xl w-[280px]">
              {["duration1Day", "duration1Week", "duration2Weeks"].map((d) => (
                <DropdownMenuItem
                  key={d}
                  onClick={() => setDuration(d)}
                  className="font-bold text-xs p-3 cursor-pointer focus:bg-primary/10"
                >
                  {t(d)}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex justify-end gap-2 pt-4 border-t border-border/30">
          <Button variant="ghost" onClick={() => onOpenChange(false)} className="rounded-full font-bold">
            {t("back")}
          </Button>
          <Button
            disabled={!question.trim() || options.filter(o => o.trim()).length < 2}
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
