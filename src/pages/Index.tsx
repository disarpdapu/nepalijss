import { Link } from "react-router-dom";
import PageShell from "@/components/PageShell";
import symbolSvg from "@/assets/symbol.svg";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import { HistoryTimeline } from "@/components/HistoryTimeline";

const Index = () => {
  const { t, language } = useLanguage();
  const np = language === "np";

  const values = [
    { title: t("index.culture"), other: t("index.cultureNp"), desc: t("index.cultureDesc") },
    { title: t("index.unity"), other: t("index.unityNp"), desc: t("index.unityDesc") },
    { title: t("index.participation"), other: t("index.participationNp"), desc: t("index.participationDesc") },
  ];

  const activities = [1, 2, 3].map((n) => t(`about.activity${n}`));

  return (
    <PageShell>
      {/* === HERO — redesigned without large logo, premium pop animation === */}
      <section className="relative overflow-hidden bg-white">
        {/* subtle grid + green accent wash */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#E5E7EB] via-white to-white" aria-hidden="true" />
        <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true" style={{ backgroundImage: `linear-gradient(#2D6B28 1px, transparent 1px), linear-gradient(90deg, #2D6B28 1px, transparent 1px)`, backgroundSize: "32px 32px" }} />
        {/* soft green orb */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-[520px] w-[520px] rounded-full bg-[#22C55E]/[0.08] blur-3xl md:h-[720px] md:w-[720px]" aria-hidden="true" />
        <div className="pointer-events-none absolute -left-24 top-32 h-[480px] w-[480px] rounded-full bg-[#2D6B28]/[0.06] blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto grid max-w-site gap-10 px-5 pb-16 pt-10 sm:px-8 md:grid-cols-[1.15fr_0.85fr] md:items-center md:gap-8 md:pb-20 md:pt-16 lg:gap-12 lg:pb-24 lg:pt-20">
          {/* Text */}
          <div className="order-2 min-w-0 md:order-1">
            {/* eyebrow */}
            <div className="hero-pop hero-pop-1 inline-flex items-center gap-2 rounded-full border border-[#F3F4F6] bg-white px-3 py-1.5 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#22C55E] animate-pulse" aria-hidden="true" />
              <span lang={np ? "ne" : undefined} className={cn("text-xs font-medium tracking-[0.08em] text-[#374151]", np ? "font-khand normal-case tracking-normal" : "font-poppins uppercase")}>
                {t("index.heroEyebrow")}
              </span>
              <span className="hidden h-3 w-px bg-[#F3F4F6] sm:block" aria-hidden="true" />
              <span className="hidden font-poppins text-xs text-[#6B7280] sm:block">Est. 1947</span>
            </div>

            <h1 className="mt-6">
              <span
                lang={np ? "ne" : undefined}
                className={cn(
                  "hero-pop hero-pop-2 block font-khand text-[2.6rem] font-bold leading-[0.95] tracking-tight text-[#171717] sm:text-6xl lg:text-[4.25rem]",
                )}
              >
                {t("index.orgName")}
              </span>
              <span
                lang={np ? "ne" : undefined}
                className={cn(
                  "hero-pop hero-pop-3 mt-1.5 block font-khand text-3xl font-semibold leading-none tracking-tight text-[#2D6B28] sm:text-4xl lg:text-[2.6rem]",
                )}
              >
                {t("index.orgPlace")}
              </span>
              {/* animated underline */}
              <span className="hero-pop hero-pop-3 mt-3 block h-[3px] w-24 origin-left bg-[#22C55E]" style={{ animation: "hero-line 900ms cubic-bezier(0.16,1,0.3,1) 520ms both" }} aria-hidden="true" />
            </h1>

            <p className="hero-pop hero-pop-4 mt-5 font-khand text-lg font-medium tracking-[0.01em] text-[#525252] sm:text-xl">
              {t("index.orgLatin")}
            </p>

            <p lang={np ? "ne" : undefined} className={cn("hero-pop hero-pop-4 mt-6 max-w-[60ch] text-xl leading-snug text-[#374151] sm:text-[1.35rem]", np ? "font-khand leading-relaxed" : "font-khand")}>
              {t("index.tagline")}
            </p>
            <p lang={np ? "ne" : undefined} className={cn("hero-pop hero-pop-5 mt-4 max-w-[60ch] text-[17px] leading-relaxed text-[#525252]", np ? "font-khand leading-7" : "font-poppins")}>
              {t("index.description")}
            </p>

            <div className="hero-pop hero-pop-5 mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/about"
                lang={np ? "ne" : undefined}
                className={cn(
                  "inline-flex min-h-[3rem] items-center gap-2 bg-[#2D6B28] px-6 py-3 text-[15px] font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#15803D] hover:shadow-md hover:-translate-y-px",
                  np ? "font-khand" : "font-poppins",
                )}
              >
                <span>{t("index.aboutCta")}</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0">
                  <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <span lang={np ? "ne" : undefined} className={cn("hidden items-center gap-2 text-sm text-[#6B7280] sm:inline-flex", np ? "font-khand" : "font-poppins")}>
                <span className="h-px w-8 bg-[#E5E7EB]" aria-hidden="true" /> {np ? "केन्द्रीय समितिको जनादेश" : "Mandate of the Central Committee"}
              </span>
            </div>
          </div>

          {/* Visual — abstract institution card, not large logo */}
          <div className="hero-pop hero-pop-2 order-1 flex justify-center md:order-2 md:justify-end">
            <div className="relative w-full max-w-[360px] md:max-w-[420px]">
              {/* card stack */}
              <div className="relative rounded-sm border border-[#F3F4F6] bg-white p-6 shadow-[0_24px_48px_rgba(17,24,39,0.08)] sm:p-7">
                <div className="absolute left-0 top-0 h-1 w-full bg-[#2D6B28]" aria-hidden="true" />
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#2D6B28] text-white">
                      <img src={symbolSvg} alt="" width={24} height={24} className="h-6 w-6 brightness-0 invert" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-khand text-sm font-semibold leading-none text-[#171717]">Nepali Congress</p>
                      <p className="font-poppins text-xs text-[#6B7280]">Tree emblem</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-[#E5E7EB] px-2.5 py-1 font-poppins text-[11px] font-semibold uppercase tracking-[0.06em] text-[#374151]">Spain</span>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="rounded-sm bg-[#F3F4F6] px-3 py-3 text-center">
                    <p className="font-khand text-2xl font-bold leading-none text-[#2D6B28]">1947</p>
                    <p className="mt-1 font-poppins text-[11px] uppercase tracking-[0.06em] text-[#6B7280]">Founded</p>
                  </div>
                  <div className="rounded-sm bg-[#2D6B28] px-3 py-3 text-center text-white">
                    <p className="font-khand text-2xl font-bold leading-none">4</p>
                    <p className="mt-1 font-poppins text-[11px] uppercase tracking-[0.06em] text-white/80">Festivals</p>
                  </div>
                  <div className="rounded-sm bg-[#1E293B] px-3 py-3 text-center text-white">
                    <p className="font-khand text-2xl font-bold leading-none text-[#22C55E]">NRNA</p>
                    <p className="mt-1 font-poppins text-[11px] uppercase tracking-[0.06em] text-white/70">Connected</p>
                  </div>
                </div>

                <div className="mt-6 border-t border-[#F3F4F6] pt-5">
                  <p lang={np ? "ne" : undefined} className={cn("text-sm leading-relaxed text-[#374151]", np ? "font-khand" : "font-poppins")}>
                    {t("index.partyText")}
                  </p>
                </div>

                <div className="mt-5 flex items-center gap-2 text-xs text-[#AAAEB5]">
                  <span className="h-px flex-1 bg-[#F3F4F6]" aria-hidden="true" />
                  <span className="font-poppins whitespace-nowrap">•••</span>
                  <span className="h-px flex-1 bg-[#F3F4F6]" aria-hidden="true" />
                </div>
              </div>

              {/* blurred shadow behind */}
              <div className="absolute -inset-3 -z-10 rounded-sm bg-[#2D6B28]/5 blur-xl" aria-hidden="true" />
              {/* floating decorative */}
              <div className="absolute -bottom-4 -left-4 hidden h-16 w-16 rounded-sm border border-[#F3F4F6] bg-white p-2 shadow-md sm:flex items-center justify-center">
                <span className="h-2 w-2 rounded-full bg-[#DC2626]" aria-hidden="true" />
                <span className="mx-1.5 h-px w-6 bg-[#F3F4F6]" aria-hidden="true" />
                <span className="h-2 w-2 rounded-full bg-[#22C55E]" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section aria-labelledby="values-title" className="mx-auto max-w-site px-5 pb-16 pt-12 sm:px-8 md:pb-20 md:pt-14">
        <SectionHeading id="values-title">{t("index.valuesTitle")}</SectionHeading>
        <div className="mt-10 grid gap-8 md:grid-cols-3 md:gap-0 md:divide-x md:divide-[#F3F4F6]">
          {values.map((v, i) => (
            <div key={v.title} className={cn("group", i === 0 ? "md:pr-10" : i === values.length - 1 ? "md:pl-10" : "md:px-10")}>
              <div className="inline-flex h-7 items-center gap-1.5">
                <span className="h-px w-6 bg-[#22C55E]" aria-hidden="true" />
                <span lang={np ? "en" : "ne"} className={cn("text-xs font-semibold uppercase tracking-[0.1em] text-[#6B7280]", np ? "font-poppins" : "font-khand")}>
                  0{i + 1}
                </span>
              </div>
              <p lang={np ? "en" : "ne"} className={cn("mt-2 text-[2rem] font-bold leading-none text-[#2D6B28]", np ? "font-poppins" : "font-khand")}>
                {v.other}
              </p>
              <h3 lang={np ? "ne" : undefined} className={cn("mt-3 text-xl font-semibold text-[#171717]", np ? "font-khand" : "font-khand")}>
                {v.title}
              </h3>
              <p lang={np ? "ne" : undefined} className={cn("mt-3 text-[15.5px] leading-relaxed text-[#525252]", np ? "font-khand leading-6" : "font-poppins")}>
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Work in Spain — kept on Home only, not duplicated verbatim in About's mission grid */}
      <section aria-labelledby="work-title" className="border-y border-[#F3F4F6] bg-[#F3F4F6]/40">
        <div className="mx-auto grid max-w-site gap-10 px-5 py-14 sm:px-8 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1.2fr)] md:gap-12 md:py-16 lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2">
              <span className="h-px w-6 bg-[#2D6B28]" aria-hidden="true" />
              <span lang={np ? "ne" : undefined} className={cn("text-xs font-semibold uppercase tracking-[0.12em] text-[#2D6B28]", np ? "font-khand normal-case tracking-normal text-sm" : "font-poppins")}>
                {np ? "स्पेनमा" : "In Spain"}
              </span>
            </div>
            <SectionHeading id="work-title" className="mt-3">
              {t("index.workTitle")}
            </SectionHeading>
            <p lang={np ? "ne" : undefined} className={cn("mt-4 max-w-[52ch] text-[17px] leading-relaxed text-[#525252]", np ? "font-khand leading-7" : "font-poppins")}>
              {t("index.workIntro")}
            </p>
            <Link
              to="/about#activities"
              lang={np ? "ne" : undefined}
              className={cn(
                "mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#2D6B28] transition-colors hover:text-[#15803D] underline decoration-[#2D6B28]/30 underline-offset-4 hover:decoration-[#2D6B28]",
                np ? "font-khand" : "font-poppins",
              )}
            >
              {t("index.workMore")}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
          <ul className="self-start overflow-hidden rounded-sm border border-[#F3F4F6] bg-white">
            {activities.map((a, idx) => (
              <li
                key={a}
                lang={np ? "ne" : undefined}
                className={cn(
                  "flex items-start gap-3 px-5 py-4 text-[15.5px] leading-snug text-[#111827] border-b border-[#F3F4F6] last:border-0",
                  np ? "font-khand leading-6" : "font-poppins",
                )}
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2D6B28]" aria-hidden="true" />
                <span className="flex-1">{a}</span>
                <span className="hidden shrink-0 font-poppins text-xs text-[#AAAEB5] sm:block">0{idx + 1}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Party — fixed sizing, no congress flag image, tree emblem only subtle */}
      <section aria-labelledby="party-title" className="bg-white">
        <div className="mx-auto max-w-site px-5 py-14 sm:px-8 md:py-20">
          <div className="overflow-hidden rounded-sm border border-[#F3F4F6] bg-[#F3F4F6]/30">
            <div className="grid md:grid-cols-[auto_1fr] gap-0">
              <div className="flex items-center justify-center bg-white p-8 md:p-10 border-b md:border-b-0 md:border-r border-[#F3F4F6]">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-[#22C55E]/10 blur-2xl" aria-hidden="true" />
                  <img src={symbolSvg} alt={t("footer.symbolAlt")} width={96} height={96} loading="lazy" className="relative h-20 w-20 md:h-24 md:w-24" />
                </div>
              </div>
              <div className="p-6 sm:p-8 md:p-10">
                <div className="inline-flex items-center gap-2">
                  <span className="h-1 w-6 bg-[#DC2626]" aria-hidden="true" />
                  <span lang={np ? "ne" : undefined} className={cn("text-xs font-semibold uppercase tracking-[0.12em] text-[#DC2626]", np ? "font-khand normal-case tracking-normal" : "font-poppins")}>
                    {np ? "मातृ पार्टी" : "Mother party"}
                  </span>
                </div>
                <h2 id="party-title" lang={np ? "ne" : undefined} className={cn("mt-3 text-2xl font-semibold tracking-tight text-[#171717] sm:text-3xl", np ? "font-khand" : "font-khand")}>
                  {t("index.partyTitle")}
                </h2>
                {/* fixed-height text block — does not change layout between languages; min-height ensures perfect sizing */}
                <div className="mt-4 min-h-[120px] md:min-h-[88px]">
                  <p lang={np ? "ne" : undefined} className={cn("max-w-[66ch] text-[17px] leading-relaxed text-[#374151]", np ? "font-khand leading-7 text-[16px]" : "font-poppins")}>
                    {t("index.partyText")}
                  </p>
                </div>
                <Link
                  to="/about#nepali-congress"
                  lang={np ? "ne" : undefined}
                  className={cn(
                    "mt-6 inline-flex items-center gap-1.5 border border-[#2D6B28] bg-white px-4 py-2.5 text-sm font-semibold text-[#2D6B28] transition-colors hover:bg-[#2D6B28] hover:text-white",
                    np ? "font-khand" : "font-poppins",
                  )}
                >
                  {t("index.partyMore")}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline — compact on Home, same style as official, fixed sizing */}
      <section aria-labelledby="history-title" className="border-t border-[#F3F4F6] bg-white">
        <div className="mx-auto max-w-site px-5 py-14 sm:px-8 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#F3F4F6] bg-[#F3F4F6]/50 px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-[#DC2626]" aria-hidden="true" />
              <span lang={np ? "ne" : undefined} className={cn("text-xs font-semibold uppercase tracking-[0.1em] text-[#374151]", np ? "font-khand normal-case tracking-normal text-sm" : "font-poppins")}>
                {np ? "इतिहास" : "Our History"}
              </span>
            </div>
            <h2 id="history-title" lang={np ? "ne" : undefined} className={cn("mt-4 text-3xl font-bold tracking-tight text-[#171717] sm:text-4xl", np ? "font-khand" : "font-khand")}>
              {t("index.historyTitle")}
            </h2>
            <p lang={np ? "ne" : undefined} className={cn("mx-auto mt-3 max-w-[62ch] text-[17px] leading-relaxed text-[#525252]", np ? "font-khand leading-7" : "font-poppins")}>
              {t("index.historySubtitle")}
            </p>
          </div>

          <div className="mt-10">
            <HistoryTimeline variant="compact" />
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              to="/about#nepali-congress"
              lang={np ? "ne" : undefined}
              className={cn(
                "inline-flex items-center gap-2 rounded-sm border border-[#F3F4F6] bg-white px-5 py-3 text-sm font-medium text-[#374151] shadow-sm transition-colors hover:border-[#2D6B28] hover:text-[#2D6B28]",
                np ? "font-khand" : "font-poppins",
              )}
            >
              {t("history.viewTimeline")}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

const SectionHeading = ({ id, children, className }: { id: string; children: string; className?: string }) => {
  const { language } = useLanguage();
  const np = language === "np";
  return (
    <h2
      id={id}
      lang={np ? "ne" : undefined}
      className={cn("text-3xl font-semibold tracking-tight text-[#171717] sm:text-4xl", np ? "font-khand" : "font-khand", className)}
    >
      {children}
    </h2>
  );
};

export default Index;
