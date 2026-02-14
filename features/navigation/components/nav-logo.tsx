import Link from "next/link";

import Image from "next/image";

export const NavLogo = () => (
  <Link href="/" className="flex items-center gap-2 transition-transform active:scale-95">
    <div className="w-10 h-10 rounded-xl bg-white dark:bg-white/10 flex items-center justify-center shadow-lg overflow-hidden border border-white/20">
      <Image src="/favicon.png" alt="Logo" width={32} height={32} className="object-contain" />
    </div>
    <span className="text-2xl font-black tracking-tighter bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
      ZETEB
    </span>
  </Link>
);