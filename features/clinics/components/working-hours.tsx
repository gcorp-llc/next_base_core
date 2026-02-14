"use client";

import { Button } from "@/components/ui/button";
import { WorkingHour } from "../types";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const DAYS = [
  { id: "saturday", label: "شنبه" },
  { id: "sunday", label: "یک‌شنبه" },
  { id: "monday", label: "دوشنبه" },
  { id: "tuesday", label: "سه‌شنبه" },
  { id: "wednesday", label: "چهارشنبه" },
  { id: "thursday", label: "پنج‌شنبه" },
  { id: "friday", label: "جمعه" },
];

interface WorkingHoursProps {
  value: WorkingHour[];
  onChange: (value: WorkingHour[]) => void;
}

export function WorkingHours({ value, onChange }: WorkingHoursProps) {
  const toggleDay = (dayId: string) => {
    const newValue = value.map((d) =>
      d.day === dayId ? { ...d, isOpen: !d.isOpen } : d
    );
    onChange(newValue);
  };

  const addShift = (dayId: string) => {
    const newValue = value.map((d) =>
      d.day === dayId
        ? { ...d, shifts: [...d.shifts, { start: "08:00", end: "12:00" }] }
        : d
    );
    onChange(newValue);
  };

  const removeShift = (dayId: string, index: number) => {
    const newValue = value.map((d) =>
      d.day === dayId
        ? { ...d, shifts: d.shifts.filter((_, i) => i !== index) }
        : d
    );
    onChange(newValue);
  };

  const updateShift = (dayId: string, index: number, field: "start" | "end", time: string) => {
    const newValue = value.map((d) =>
      d.day === dayId
        ? {
            ...d,
            shifts: d.shifts.map((s, i) =>
              i === index ? { ...s, [field]: time } : s
            ),
          }
        : d
    );
    onChange(newValue);
  };

  return (
    <div className="space-y-4">
      <Label className="text-lg font-bold">ساعات کاری</Label>
      <div className="grid gap-3">
        {DAYS.map((day) => {
          const dayData = value.find((d) => d.day === day.id) || {
            day: day.id,
            isOpen: false,
            shifts: [],
          };

          return (
            <div
              key={day.id}
              className={`p-4 rounded-2xl border transition-all ${
                dayData.isOpen
                  ? "bg-primary/5 border-primary/20"
                  : "bg-white/5 border-white/10 opacity-60"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Switch
                    checked={dayData.isOpen}
                    onCheckedChange={() => toggleDay(day.id)}
                  />
                  <span className="font-bold">{day.label}</span>
                </div>
                {dayData.isOpen && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => addShift(day.id)}
                    className="text-primary text-xs font-bold h-7"
                  >
                    + افزودن شیفت
                  </Button>
                )}
              </div>

              {dayData.isOpen && (
                <div className="space-y-2">
                  {dayData.shifts.length === 0 && (
                    <p className="text-[10px] text-muted-foreground">شیفتی ثبت نشده است</p>
                  )}
                  {dayData.shifts.map((shift, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <input
                        type="time"
                        value={shift.start}
                        onChange={(e) => updateShift(day.id, idx, "start", e.target.value)}
                        className="bg-white/10 border border-white/10 rounded-lg px-2 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                      <span className="text-muted-foreground text-xs">تا</span>
                      <input
                        type="time"
                        value={shift.end}
                        onChange={(e) => updateShift(day.id, idx, "end", e.target.value)}
                        className="bg-white/10 border border-white/10 rounded-lg px-2 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                      <button
                        type="button"
                        onClick={() => removeShift(day.id, idx)}
                        className="p-1 hover:text-destructive transition-colors"
                      >
                        <span className="icon-[solar--trash-bin-trash-bold-duotone] w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
