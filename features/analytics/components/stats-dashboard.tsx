"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, AreaChart, Area, BarChart, Bar } from "recharts";

const data = [
  { name: "شنبه", views: 400, appointments: 24, ads: 140 },
  { name: "یکشنبه", views: 300, appointments: 13, ads: 150 },
  { name: "دوشنبه", views: 200, appointments: 98, ads: 120 },
  { name: "سه شنبه", views: 278, appointments: 39, ads: 190 },
  { name: "چهارشنبه", views: 189, appointments: 48, ads: 200 },
  { name: "پنجشنبه", views: 239, appointments: 38, ads: 180 },
  { name: "جمعه", views: 349, appointments: 43, ads: 210 },
];

export function StatsDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="glass shadow-none border-white/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">بازدید کل پروفایل</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black text-primary">۱,۲۸۴</div>
            <p className="text-[10px] text-green-500 font-bold">+۱۲٪ نسبت به هفته گذشته</p>
          </CardContent>
        </Card>
        <Card className="glass shadow-none border-white/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">نوبت‌های گرفته شده</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black text-orange-500">۴۲</div>
            <p className="text-[10px] text-green-500 font-bold">+۵٪ نسبت به هفته گذشته</p>
          </CardContent>
        </Card>
        <Card className="glass shadow-none border-white/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">بازدهی آگهی‌ها</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black text-purple-500">۸۵۰</div>
            <p className="text-[10px] text-muted-foreground">کلیک بر روی آگهی</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card !p-6">
          <h3 className="font-bold mb-6">نمودار بازدید هفتگی</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="var(--primary)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="oklch(1 0 0 / 0.1)" />
                <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip
                    contentStyle={{ backgroundColor: 'oklch(0.2 0.02 260)', border: 'none', borderRadius: '1rem', color: '#fff' }}
                    itemStyle={{ color: '#fff' }}
                />
                <Area type="monotone" dataKey="views" stroke="var(--primary)" fillOpacity={1} fill="url(#colorViews)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-card !p-6">
          <h3 className="font-bold mb-6">نوبت‌های رزرو شده</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="oklch(1 0 0 / 0.1)" />
                <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip
                    contentStyle={{ backgroundColor: 'oklch(0.2 0.02 260)', border: 'none', borderRadius: '1rem', color: '#fff' }}
                    cursor={{fill: 'oklch(1 0 0 / 0.05)'}}
                />
                <Bar dataKey="appointments" fill="oklch(0.7 0.2 30)" radius={[4, 4, 0, 0]} barSize={30} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
