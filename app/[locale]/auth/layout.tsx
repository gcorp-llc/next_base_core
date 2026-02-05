import { GalaxyBackground } from "@/features/auth/components/galaxy-background";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden p-4">
      <GalaxyBackground />
      <div className="relative z-10 w-full max-w-md animate-ios-in">
        {children}
      </div>
    </div>
  );
}
