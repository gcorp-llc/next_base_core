import Link from "next/link";

export const NavLogo = () => (
  <Link href="/" className="flex items-center gap-2 transition-transform active:scale-95">
    <div className="w-8 h-8 rounded-xl bg-ios-gradient flex items-center justify-center shadow-lg">
      <span className="text-white font-black text-xl">Z</span>
    </div>
    <span className="text-2xl font-black tracking-tighter bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
      ZETEB
    </span>
  </Link>
);