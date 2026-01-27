import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { GoogleAnalytics } from "@next/third-parties/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "../globals.css";
import { Navbar } from "@/components/shared/navbar/navbar";
import { MobileFooter } from "@/components/shared/footer/mobile-footer";

// تعریف فونت بدنه
const shabnam = localFont({
  src: "../../public/fonts/Shabnam.woff2",
  variable: "--font-body",
  weight: "400",
  display: "swap",
});

// تعریف فونت عنوان‌ها
const shabnamBold = localFont({
  src: "../../public/fonts/Shabnam-Bold-FD-WOL.woff2",
  variable: "--font-heading",
  weight: "700",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zeteb",
  description: "Your application description",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const messages = await getMessages();
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      {gaId && <GoogleAnalytics gaId={gaId} />}
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#eee" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </head>
      <body
        className={`${shabnam.variable} ${shabnamBold.variable} antialiased `}
      >
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <MobileFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
