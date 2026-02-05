import { Navbar } from "@/features/navigation/navbar";
import { MobileFooter } from "@/features/navigation/mobile-footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <MobileFooter />
    </>
  );
}
