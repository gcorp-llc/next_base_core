import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "HomePage" });
  return {
    title: t("title"),
  };
}

export default function HomePage() {
  const t = useTranslations("HomePage");

  const specialties = [
    { name: "متخصص داخلی", icon: "icon-[solar--medical-kit-bold-duotone]", color: "text-blue-500" },
    { name: "متخصص پوست", icon: "icon-[solar--magic-stick-3-bold-duotone]", color: "text-purple-500" },
    { name: "متخصص زنان", icon: "icon-[solar--user-speak-bold-duotone]", color: "text-pink-500" },
    { name: "متخصص کودکان", icon: "icon-[solar--reorder-bold-duotone]", color: "text-orange-500" },
    { name: "متخصص قلب", icon: "icon-[solar--heart-bold-duotone]", color: "text-red-500" },
    { name: "متخصص چشم", icon: "icon-[solar--eye-bold-duotone]", color: "text-indigo-500" },
  ];

  const doctors = [
    { name: "دکتر مریم علوی", specialty: "متخصص پوست و مو", rating: 4.8, reviews: 120, image: "MA" },
    { name: "دکتر رضا محمدی", specialty: "متخصص قلب و عروق", rating: 4.9, reviews: 85, image: "RM" },
    { name: "دکتر سارا احمدی", specialty: "متخصص کودکان", rating: 4.7, reviews: 150, image: "SA" },
  ];

  return (
    <div className="flex flex-col gap-16 pb-24">
      {/* Hero Section */}
      <section className="relative pt-20 pb-12 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/5 blur-[120px] -z-10 rounded-full" />

        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight animate-ios-in">
            {t("heroTitle")}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-ios-in [animation-delay:200ms]">
            {t("heroSubtitle")}
          </p>

          <div className="relative max-w-2xl mx-auto animate-ios-in [animation-delay:400ms]">
            <div className="glass !rounded-3xl p-2 flex items-center shadow-2xl">
              <span className="icon-[solar--magnifer-bold-duotone] w-6 h-6 text-primary mx-3" />
              <input
                type="text"
                placeholder={t("searchPlaceholder")}
                className="bg-transparent border-none outline-none flex-1 py-3 text-lg placeholder:text-muted-foreground/50"
              />
              <Button className="!rounded-2xl px-8 h-12 bg-ios-gradient shadow-lg shadow-primary/20">
                {t("viewAll")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="px-6 max-w-7xl mx-auto w-full space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">{t("specialties")}</h2>
          <Button variant="ghost" className="text-primary font-bold">
            {t("viewAll")}
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {specialties.map((spec, i) => (
            <div key={i} className="glass-card group flex flex-col items-center gap-4 text-center hover:scale-105">
              <div className={`w-16 h-16 rounded-2xl bg-white/5 dark:bg-white/10 flex items-center justify-center transition-transform group-hover:rotate-12`}>
                <span className={`${spec.icon} w-8 h-8 ${spec.color}`} />
              </div>
              <span className="font-bold text-sm">{spec.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Doctors */}
      <section className="px-6 max-w-7xl mx-auto w-full space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">{t("featuredDoctors")}</h2>
          <Button variant="ghost" className="text-primary font-bold">
            {t("viewAll")}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doc, i) => (
            <div key={i} className="glass-card flex gap-6 items-center">
              <div className="w-24 h-24 rounded-3xl bg-ios-gradient flex items-center justify-center text-white text-3xl font-black shadow-lg">
                {doc.image}
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="text-xl font-bold">{doc.name}</h3>
                <p className="text-muted-foreground text-sm">{doc.specialty}</p>
                <div className="flex items-center gap-2">
                  <span className="icon-[solar--star-bold] w-4 h-4 text-yellow-500" />
                  <span className="font-bold text-sm">{doc.rating}</span>
                  <span className="text-muted-foreground text-xs">({t("reviews", { count: doc.reviews })})</span>
                </div>
                <Button variant="secondary" className="w-full !rounded-xl text-xs font-bold h-9">
                  {t("bookNow")}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section className="px-6 max-w-7xl mx-auto w-full py-16">
        <div className="glass-card !bg-primary/5 border-primary/10 rounded-[3rem] p-12 text-center space-y-12">
          <h2 className="text-3xl font-bold">{t("howItWorks")}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[1, 2, 3].map((step) => (
              <div key={step} className="space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center text-2xl font-black mx-auto">
                  {step}
                </div>
                <h3 className="text-xl font-bold">{t(`step${step}`)}</h3>
                <p className="text-muted-foreground">{t(`step${step}Desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
