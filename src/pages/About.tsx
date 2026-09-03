import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PageShell from "@/components/PageShell";
import symbolSvg from "@/assets/symbol.svg";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

const SECTIONS = ["who-we-are", "mission", "nepali-congress", "activities"] as const;
type SectionId = (typeof SECTIONS)[number];

const About = () => {
  const { t, language } = useLanguage();
  const np = language === "np";
  const { hash } = useLocation();
  const [active, setActive] = useState<SectionId>("who-we-are");

  const sectionTitles: Record<SectionId, string> = {
    "who-we-are": t("about.whoWeAre"),
    mission: t("about.mission"),
    "nepali-congress": t("about.ncTitle"),
    activities: t("about.activities"),
  };

  // Scroll to a hash target after the route renders (e.g. /about#activities from the home page).
  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    el?.scrollIntoView({ block: "start" });
  }, [hash]);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id as SectionId);
      },
      { rootMargin: "-25% 0px -60% 0px" },
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const text = np ? "font-devanagari" : "font-display";
  const missions = [1, 2, 3].map((n) => t(`about.mission${n}`));
  const milestones = [1, 2, 3, 4, 5].map((n) => ({
    year: t(`about.milestone${n}Year`),
    label: t(`about.milestone${n}Label`),
    text: t(`about.milestone${n}`),
  }));
  const activities = [1, 2, 3].map((n) => t(`about.activity${n}`));
  const values = [
    { title: t("about.democracy"), other: t("about.democracyNp"), desc: t("about.democracyDesc") },
    { title: t("about.socialJustice"), other: t("about.socialJusticeNp"), desc: t("about.socialJusticeDesc") },
    { title: t("about.nationalism"), other: t("about.nationalismNp"), desc: t("about.nationalismDesc") },
  ];

  return (
    <PageShell>
      <header className="border-b border-rule bg-white">
        <div className="mx-auto max-w-site px-5 pb-12 pt-14 sm:px-8 md:pb-16 md:pt-20">
          <p lang={np ? "en" : "ne"} className={cn("text-lg text-forest", np ? "font-display italic" : "font-devanagari")}>
            {t("about.titleNp")}
          </p>
          <h1
            lang={np ? "ne" : undefined}
            className={cn("mt-2 text-[2.5rem] font-medium leading-[1.1] tracking-tight text-forest-deep sm:text-5xl lg:text-6xl", text)}
          >
            {t("about.title")}
          </h1>
          <p lang={np ? "ne" : undefined} className={cn("measure mt-6 text-xl leading-relaxed text-foreground/70", text)}>
            {t("about.lead")}
          </p>
        </div>
      </header>

      <div className="mx-auto grid max-w-site gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-20 lg:py-20">
        <nav aria-label={t("about.contents")} className="lg:sticky lg:top-28 lg:self-start">
          <p lang={np ? "ne" : undefined} className={cn("text-xs uppercase tracking-[0.12em] text-muted-foreground", np ? "font-devanagari normal-case tracking-normal" : "font-body")}>{t("about.contents")}</p>
          <ol className="mt-3 flex flex-wrap gap-x-5 gap-y-2 lg:block lg:space-y-0.5">
            {SECTIONS.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  lang={np ? "ne" : undefined}
                  aria-current={active === id ? "location" : undefined}
                  className={cn(
                    "relative block py-1.5 text-[15px] leading-snug transition-colors duration-200 lg:pl-4",
                    np ? "font-devanagari" : "font-body",
                    "lg:before:absolute lg:before:left-0 lg:before:top-1/2 lg:before:h-5 lg:before:w-0.5 lg:before:-translate-y-1/2 lg:before:bg-forest lg:before:opacity-0 lg:before:transition-opacity",
                    active === id
                      ? "text-forest-deep lg:before:opacity-100"
                      : "text-muted-foreground hover:text-forest-deep",
                  )}
                >
                  {sectionTitles[id]}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="min-w-0 space-y-20 lg:space-y-24">
          <Section id="who-we-are" title={sectionTitles["who-we-are"]}>
            <div lang={np ? "ne" : undefined} className={cn("prose-doc measure space-y-5")}>
              <p>{t("about.whoWeAreP1")}</p>
              <p>{t("about.whoWeAreP2")}</p>
            </div>
          </Section>

          <Section id="mission" title={sectionTitles.mission}>
            <ol className="grid gap-x-8 border-t border-rule md:grid-cols-3">
              {missions.map((m) => (
                <li
                  key={m}
                  lang={np ? "ne" : undefined}
                  className={cn(
                    "flex gap-4 border-b border-rule py-5 text-[17px] leading-snug text-foreground/85",
                    text,
                  )}
                >
                  <span className="mt-[0.45em] h-1.5 w-1.5 shrink-0 bg-forest" aria-hidden="true" />
                  <span>{m}</span>
                </li>
              ))}
            </ol>
          </Section>

          <Section id="nepali-congress" title={sectionTitles["nepali-congress"]} aside={<img src={symbolSvg} alt={t("footer.symbolAlt")} width={56} height={56} loading="lazy" className="h-12 w-12 sm:h-14 sm:w-14" />}>
            <div lang={np ? "ne" : undefined} className="prose-doc measure space-y-5">
              <p>{t("about.ncP1")}</p>
            </div>

            <h3 lang={np ? "ne" : undefined} className={cn("mt-12 text-xl text-forest-deep", text)}>
              {t("about.keyMilestones")}
            </h3>
            <ol className="mt-6 border-l-2 border-forest/60">
              {milestones.map((m) => (
                <li key={m.year} className="relative pb-9 pl-6 last:pb-0 sm:pl-8">
                  <span
                    className="absolute left-0 top-[0.6rem] h-2.5 w-2.5 -translate-x-[calc(50%+1px)] bg-forest ring-4 ring-background"
                    aria-hidden="true"
                  />
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <time
                      lang={np ? "ne" : undefined}
                      className={cn("text-3xl font-medium leading-none text-forest-deep", text)}
                    >
                      {m.year}
                    </time>
                    <span lang={np ? "ne" : undefined} className={cn("text-sm font-medium text-crimson", np ? "font-devanagari" : "font-body")}>
                      {m.label}
                    </span>
                  </div>
                  <p lang={np ? "ne" : undefined} className={cn("measure mt-2 text-[17px] leading-relaxed text-foreground/80", text)}>
                    {m.text}
                  </p>
                </li>
              ))}
            </ol>

            <div lang={np ? "ne" : undefined} className="prose-doc measure mt-12">
              <p>{t("about.ncP2")}</p>
            </div>

            <h3 lang={np ? "ne" : undefined} className={cn("mt-12 text-xl text-forest-deep", text)}>
              {t("about.coreValues")}
            </h3>
            <div className="mt-6 grid gap-8 border-t border-rule pt-6 sm:grid-cols-3">
              {values.map((v) => (
                <div key={v.title}>
                  <p lang={np ? "en" : "ne"} className={cn("text-2xl font-semibold leading-none text-forest", np ? "font-display" : "font-devanagari")}>
                    {v.other}
                  </p>
                  <p lang={np ? "ne" : undefined} className={cn("mt-2 text-lg text-foreground", text)}>
                    {v.title}
                  </p>
                  <p lang={np ? "ne" : undefined} className={cn("mt-1 text-[15px] leading-snug text-muted-foreground", np ? "font-devanagari" : "font-body")}>
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          <Section id="activities" title={sectionTitles.activities}>
            <p lang={np ? "ne" : undefined} className="prose-doc measure">
              {t("about.activitiesIntro")}
            </p>
            <ul className="mt-6 grid gap-x-8 border-t border-rule md:grid-cols-3">
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
          </Section>
        </div>
      </div>
    </PageShell>
  );
};

const Section = ({
  id,
  title,
  aside,
  children,
}: {
  id: string;
  title: string;
  aside?: React.ReactNode;
  children: React.ReactNode;
}) => {
  const { language } = useLanguage();
  const np = language === "np";
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-28">
      <div className="flex items-center gap-5">
        <h2
          id={`${id}-title`}
          lang={np ? "ne" : undefined}
          className={cn("text-3xl font-medium tracking-tight text-forest-deep sm:text-4xl", np ? "font-devanagari" : "font-display")}
        >
          {title}
        </h2>
        {aside}
      </div>
      <div className="mt-7">{children}</div>
    </section>
  );
};

export default About;
