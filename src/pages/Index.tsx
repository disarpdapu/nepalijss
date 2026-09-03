import { Link } from "react-router-dom";
import PageShell from "@/components/PageShell";
import jssLogo from "@/assets/jss_logo.svg";
import symbolSvg from "@/assets/symbol.svg";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

const Index = () => {
  const { t, language } = useLanguage();
  const np = language === "np";
  const text = np ? "font-devanagari" : "font-display";

  const values = [
    { title: t("index.culture"), other: t("index.cultureNp"), desc: t("index.cultureDesc") },
    { title: t("index.unity"), other: t("index.unityNp"), desc: t("index.unityDesc") },
    { title: t("index.participation"), other: t("index.participationNp"), desc: t("index.participationDesc") },
  ];

  const activities = [1, 2, 3].map((n) => t(`about.activity${n}`));

  return (
    <PageShell>
      {/* Hero */}
      <section className="on-forest bg-forest text-white">
        <div className="mx-auto grid max-w-site items-center gap-12 px-5 pb-16 pt-14 sm:px-8 md:grid-cols-[1.15fr_0.85fr] md:gap-8 md:pb-24 md:pt-20 lg:gap-16">
          <div className="order-2 min-w-0 md:order-1">
            <h1>
              <span
                lang="ne"
                className="rise block font-devanagari text-[2.75rem] font-bold leading-[1.15] tracking-tight text-white sm:text-6xl lg:text-[4.5rem] lg:leading-[1.1]"
              >
                {t("index.orgName")}
              </span>
              <span
                lang="ne"
                className="rise rise-delay-1 mt-2 block font-devanagari text-3xl font-semibold leading-none text-gold-bright sm:text-4xl lg:text-5xl"
              >
                {t("index.orgPlace")}
              </span>
            </h1>

            <p className="rise rise-delay-2 mt-6 font-display text-2xl italic leading-snug text-white/80 sm:text-[1.75rem]">
              {t("index.orgLatin")}
            </p>

            <p lang={np ? "ne" : undefined} className={cn("rise rise-delay-3 measure mt-8 text-xl leading-snug text-white sm:text-2xl", text)}>
              {t("index.tagline")}
            </p>
            <p lang={np ? "ne" : undefined} className={cn("rise rise-delay-3 measure mt-4 text-lg leading-relaxed text-white/75", text)}>
              {t("index.description")}
            </p>

            <div className="rise rise-delay-4 mt-9">
              <Link
                to="/about"
                lang={np ? "ne" : undefined}
                className={cn(
                  "inline-flex min-h-[3rem] items-center bg-gold-bright px-6 py-3 text-[15px] font-medium text-forest-deep transition-colors duration-200 hover:bg-white",
                  np ? "font-devanagari" : "font-body",
                )}
              >
                {t("index.aboutCta")}
              </Link>
            </div>
          </div>

          <div className="rise rise-delay-2 order-1 flex justify-center md:order-2 md:justify-end">
            <img
              src={jssLogo}
              alt={t("index.emblemAlt")}
              width={420}
              height={392}
              // React 18 only forwards the lowercase DOM attribute
              {...{ fetchpriority: "high" }}
              className="w-56 drop-shadow-[0_24px_48px_rgba(0,0,0,0.45)] sm:w-72 md:w-full md:max-w-[26rem]"
            />
          </div>
        </div>
      </section>

      {/* The party flag, set full-bleed as the seam between identity and content */}
      <figure className="m-0">
        <div className="flag-rule h-24 sm:h-28 md:h-32" role="img" aria-label={t("index.flagAlt")}>
          <div className="mx-auto flex h-full max-w-site items-center justify-center gap-5 px-5 sm:gap-7">
            {[0, 1, 2, 3].map((i) => (
              <svg key={i} viewBox="0 0 24 24" className="h-6 w-6 fill-crimson sm:h-7 sm:w-7" aria-hidden="true">
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
              </svg>
            ))}
          </div>
        </div>
        <figcaption
          lang={np ? "ne" : undefined}
          className={cn("mx-auto max-w-2xl px-5 py-5 text-center text-[15px] leading-relaxed text-muted-foreground", np ? "font-devanagari" : "font-body")}
        >
          {t("index.flagMeaning")}
        </figcaption>
      </figure>

      {/* Values */}
      <section aria-labelledby="values-title" className="mx-auto max-w-site px-5 pb-20 pt-12 sm:px-8 md:pb-28 md:pt-16">
        <SectionHeading id="values-title">{t("index.valuesTitle")}</SectionHeading>
        <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-rule">
          {values.map((v, i) => (
            <div key={v.title} className={i === 0 ? "md:pr-10" : i === values.length - 1 ? "md:pl-10" : "md:px-10"}>
              <p
                lang={np ? "en" : "ne"}
                className={cn("text-4xl font-bold leading-none text-forest", np ? "font-display" : "font-devanagari")}
              >
                {v.other}
              </p>
              <h3 lang={np ? "ne" : undefined} className={cn("mt-4 text-2xl text-foreground", text)}>
                {v.title}
              </h3>
              <p lang={np ? "ne" : undefined} className={cn("mt-3 text-lg leading-relaxed text-foreground/75", text)}>
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Work in Spain */}
      <section aria-labelledby="work-title" className="border-y border-rule bg-white">
        <div className="mx-auto grid max-w-site gap-10 px-5 py-20 sm:px-8 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-16 md:py-28">
          <div>
            <SectionHeading id="work-title">{t("index.workTitle")}</SectionHeading>
            <p lang={np ? "ne" : undefined} className={cn("measure mt-5 text-lg leading-relaxed text-foreground/75", text)}>
              {t("index.workIntro")}
            </p>
            <Link
              to="/about#activities"
              lang={np ? "ne" : undefined}
              className={cn("link-underline mt-6 inline-block py-1 text-[15px] font-medium text-forest", np ? "font-devanagari" : "font-body")}
            >
              {t("index.workMore")}
            </Link>
          </div>
          <ul className="grid border-t border-rule">
            {activities.map((a) => (
              <li
                key={a}
                lang={np ? "ne" : undefined}
                className={cn("border-b border-rule py-4 text-[17px] leading-snug text-foreground/85", text)}
              >
                {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Party */}
      <section aria-labelledby="party-title" className="bg-forest-soft">
        <div className="mx-auto max-w-site px-5 py-20 sm:px-8 md:py-28">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-14">
            <img
              src={symbolSvg}
              alt={t("footer.symbolAlt")}
              width={128}
              height={128}
              loading="lazy"
              className="h-24 w-24 shrink-0 md:h-32 md:w-32"
            />
            <div className="min-w-0">
              <SectionHeading id="party-title">{t("index.partyTitle")}</SectionHeading>
              <p lang={np ? "ne" : undefined} className={cn("measure mt-5 text-lg leading-relaxed text-foreground/75", text)}>
                {t("index.partyText")}
              </p>
              <Link
                to="/about#nepali-congress"
                lang={np ? "ne" : undefined}
                className={cn("link-underline mt-6 inline-block py-1 text-[15px] font-medium text-forest", np ? "font-devanagari" : "font-body")}
              >
                {t("index.partyMore")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

const SectionHeading = ({ id, children }: { id: string; children: string }) => {
  const { language } = useLanguage();
  const np = language === "np";
  return (
    <h2
      id={id}
      lang={np ? "ne" : undefined}
      className={cn("text-3xl font-medium tracking-tight text-forest-deep sm:text-4xl", np ? "font-devanagari" : "font-display")}
    >
      {children}
    </h2>
  );
};

export default Index;
