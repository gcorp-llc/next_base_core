'use client';

import { motion } from "motion/react";
import { Ghost, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button'; // ← از shadcn/ui
import Link from 'next/link';
import { cn } from '@/lib/utils'; // ← اگر tailwind-merge و clsx داری

export default function NotFound() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* پس‌زمینه هنری – گرادینت + ذرات نرم (اختیاری) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.15),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.12),transparent_40%)]" />
      </div>

      <div className="relative z-10 max-w-3xl w-full text-center space-y-10 py-16">
        {/* عدد 404 با انیمیشن */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="relative"
        >
          <h1
            className={cn(
              'text-[12rem] sm:text-[16rem] md:text-[20rem] lg:text-[24rem]',
              'font-extrabold leading-none tracking-tighter',
              'bg-gradient-to-br from-primary via-primary/80 to-accent bg-clip-text text-transparent',
              'drop-shadow-2xl'
            )}
          >
            404
          </h1>

          {/* افکت float ملایم روی عدد */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
          >
            <Ghost className="h-24 w-24 sm:h-32 sm:w-32 text-primary/30" />
          </motion.div>
        </motion.div>

        {/* متن اصلی */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            صفحه‌ای که دنبالش بودی، گم شده...
          </h2>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            انگار این مسیر به یه جای ناشناخته ختم شده. نگران نباش، می‌تونیم با هم برگردیم به خونه!
          </p>
        </motion.div>

        {/* دکمه بازگشت */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <Button asChild size="lg" className="gap-2 text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
            <Link href="/">
              <ArrowLeft className="h-5 w-5" />
              بازگشت به صفحه اصلی
            </Link>
          </Button>
        </motion.div>

        {/* پیشنهاد جستجو یا صفحات محبوب – اختیاری */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="text-sm text-muted-foreground mt-12"
        >
          شاید بخوای به <Link href="/dashboard" className="text-primary hover:underline">داشبورد</Link> یا{' '}
          <Link href="/explore" className="text-primary hover:underline">صفحه کاوش</Link> سر بزنی؟
        </motion.p>
      </div>
    </div>
  );
}