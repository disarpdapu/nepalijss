import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import symbolSvg from "@/assets/symbol.svg";

type HistoryEntryKey = {
  yearKey: string;
  labelKey: string;
  titleKey: string;
  shortKey: string;
  longKey: string;
  image: string;
};

const ENTRIES: HistoryEntryKey[] = [
  {
    yearKey: "history.foundedYear",
    labelKey: "history.foundedLabel",
    titleKey: "history.foundedTitle",
    shortKey: "history.foundedShort",
    longKey: "history.foundedLong",
    image: "https://nepalicongress.org/media/leaders/bpkoirala.webp",
  },
  {
    yearKey: "history.1951Year",
    labelKey: "history.1951Label",
    titleKey: "history.1951Title",
    shortKey: "history.1951Short",
    longKey: "history.1951Long",
    image: "https://nepalicongress.org/media/leaders/bpkoirala.webp",
  },
  {
    yearKey: "history.1959Year",
    labelKey: "history.1959Label",
    titleKey: "history.1959Title",
    shortKey: "history.1959Short",
    longKey: "history.1959Long",
    image: "https://nepalicongress.org/media/leaders/bpkoirala.webp",
  },
  {
    yearKey: "history.1960Year",
    labelKey: "history.1960Label",
    titleKey: "history.1960Title",
    shortKey: "history.1960Short",
    longKey: "history.1960Long",
    image: "https://nepalicongress.org/media/leaders/bpkoirala.webp",
  },
  {
    yearKey: "history.1976Year",
    labelKey: "history.1976Label",
    titleKey: "history.1976Title",
    shortKey: "history.1976Short",
    longKey: "history.1976Long",
    image: "https://nepalicongress.org/media/leaders/bpkoirala.webp",
  },
  {
    yearKey: "history.1979Year",
    labelKey: "history.1979Label",
    titleKey: "history.1979Title",
    shortKey: "history.1979Short",
    longKey: "history.1979Long",
    image: "https://nepalicongress.org/media/leaders/ganeshmansingh.jpg",
  },
  {
    yearKey: "history.1990Year",
    labelKey: "history.1990Label",
    titleKey: "history.1990Title",
    shortKey: "history.1990Short",
    longKey: "history.1990Long",
    image: "https://nepalicongress.org/media/leaders/ganeshmansingh.jpg",
  },
  {
    yearKey: "history.1991Year",
    labelKey: "history.1991Label",
    titleKey: "history.1991Title",
    shortKey: "history.1991Short",
    longKey: "history.1991Long",
    image: "https://nepalicongress.org/media/leaders/girija-prasad-koirala.jpg.jpeg",
  },
  {
    yearKey: "history.1999Year",
    labelKey: "history.1999Label",
    titleKey: "history.1999Title",
    shortKey: "history.1999Short",
    longKey: "history.1999Long",
    image: "https://nepalicongress.org/media/leaders/krishna-prasad-bhattarai.jpg.jpeg",
  },
  {
    yearKey: "history.2006Year",
    labelKey: "history.2006Label",
    titleKey: "history.2006Title",
    shortKey: "history.2006Short",
    longKey: "history.2006Long",
    image: "https://nepalicongress.org/media/leaders/girija-prasad-koirala.jpg.jpeg",
  },
  {
    yearKey: "history.2015Year",
    labelKey: "history.2015Label",
    titleKey: "history.2015Title",
    shortKey: "history.2015Short",
    longKey: "history.2015Long",
    image: "https://nepalicongress.org/media/leaders/Scre.jpg",
  },
];

// Compact uses 5 key milestones for home; detailed uses all
const COMPACT_INDICES = [1, 2, 6, 9, 10]; // 1951, 1959, 1990, 2006, 2015

export const HistoryTimeline = ({ variant = "compact" }: { variant?: "compact" | "detailed" }) => {
  const { t, language } = useLanguage();
  const isDetailed = variant === "detailed";
  const indices = isDetailed ? ENTRIES.map((_, i) => i) : COMPACT_INDICES;
  const entries = indices.map((i) => ENTRIES[i]);
  const [active, setActive] = useState(0);
  const np = language === "np";

  const activeEntry = entries[active];

  return (
    <div className="w-full">
      {/* Year selector — horizontal pills, scrollable */}
      <div className="relative">
        <div
          className="flex gap-2 overflow-x-auto scroll-smooth pb-3 scrollbar-thin"
          style={{ scrollbarWidth: "thin" }}
          role="tablist"
          aria-label={t("history.yearsLabel")}
        >
          {entries.map((e, idx) => {
            const isActive = idx === active;
            return (
              <button
                key={e.yearKey + idx}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(idx)}
                lang={np ? "ne" : undefined}
                className={cn(
                  "group relative shrink-0 whitespace-nowrap border px-4 py-2.5 text-sm font-medium transition-all duration-200",
                  np ? "font-khand" : "font-poppins",
                  isActive
                    ? "border-[#2D6B28] bg-[#2D6B28] text-white shadow-sm"
                    : "border-[#F3F4F6] bg-white text-[#525252] hover:border-[#2D6B28]/30 hover:text-[#2D6B28] hover:bg-[#E5E7EB]/50",
                )}
              >
                <span className={cn("block text-[11px] uppercase tracking-[0.08em] leading-none opacity-75", isActive ? "text-white/80" : "text-[#6B7280]")}>
                  {t(e.labelKey)}
                </span>
                <span className="mt-1 block text-[15px] font-semibold leading-none">{t(e.yearKey)}</span>
                {isActive && <span className="absolute inset-x-0 -bottom-px h-px bg-[#2D6B28]" aria-hidden="true" />}
              </button>
            );
          })}
        </div>
        {/* subtle fade edges */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent md:hidden" aria-hidden="true" />
      </div>

      {/* Fixed-size panel — height does not change when switching years or language */}
      <div className="mt-6 overflow-hidden rounded-sm border border-[#F3F4F6] bg-white shadow-[0_8px_24px_rgba(17,24,39,0.06)]">
        <div className="grid md:grid-cols-[1.05fr_1fr] history-card">
          {/* Image area */}
          <div className="relative overflow-hidden bg-[#E5E7EB] min-h-[220px] md:min-h-0">
            {/* Decorative top bar in primary */}
            <div className="absolute left-0 top-0 h-1 w-full bg-[#2D6B28]" aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#2D6B28]/[0.06] to-transparent" aria-hidden="true" />
            <div className="relative flex h-full items-center justify-center p-8 md:p-10">
              <div className="relative">
                {/* soft green halo behind */}
                <div className="absolute -inset-6 rounded-full bg-[#22C55E]/10 blur-2xl" aria-hidden="true" />
                <div className="relative overflow-hidden rounded-sm bg-white p-1 shadow-[0_12px_32px_rgba(17,24,39,0.12)]">
                  <img
                    src={activeEntry.image}
                    alt=""
                    width={280}
                    height={280}
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = symbolSvg;
                    }}
                    className="h-[180px] w-[240px] object-cover object-top md:h-[240px] md:w-[280px]"
                  />
                  <div className="absolute bottom-1 left-1 right-1 flex items-center gap-2 bg-white/95 px-3 py-2 shadow-sm backdrop-blur">
                    <span className="h-2 w-2 shrink-0 bg-[#DC2626] rounded-full" aria-hidden="true" />
                    <span lang={np ? "ne" : undefined} className={cn("text-xs font-medium text-[#374151] truncate", np ? "font-khand" : "font-poppins")}>
                      {t(activeEntry.titleKey)}
                    </span>
                  </div>
                </div>
                {/* floating year badge */}
                <div className="absolute -right-3 -top-3 flex h-14 w-14 items-center justify-center rounded-full bg-[#2D6B28] text-white shadow-lg md:h-16 md:w-16">
                  <span lang={np ? "ne" : undefined} className={cn("text-sm font-bold leading-none md:text-base", np ? "font-khand" : "font-poppins")}>
                    {t(activeEntry.yearKey)}
                  </span>
                </div>
              </div>
            </div>
            {/* bottom subtle pattern */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-[#F3F4F6]" aria-hidden="true" />
          </div>

          {/* Text area — fixed height, scroll internally if needed but keeps outer sizing */}
          <div className="flex flex-col p-6 sm:p-8 md:p-10">
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#22C55E]" aria-hidden="true" />
                <span lang={np ? "ne" : undefined} className={cn("text-xs font-semibold uppercase tracking-[0.12em] text-[#15803D]", np ? "font-khand normal-case tracking-normal text-sm" : "font-poppins")}>
                  {t(activeEntry.labelKey)}
                </span>
                <span className="text-xs text-[#AAAEB5]">•</span>
                <span lang={np ? "ne" : undefined} className={cn("text-sm font-medium text-[#6B7280]", np ? "font-khand" : "font-poppins")}>
                  {t(activeEntry.yearKey)}
                </span>
              </div>

              <h3
                key={`${active}-${language}-title`}
                lang={np ? "ne" : undefined}
                className={cn(
                  "mt-3 text-2xl font-semibold leading-tight text-[#171717] md:text-[1.7rem] timeline-enter",
                  np ? "font-khand leading-snug" : "font-khand",
                )}
              >
                {t(activeEntry.titleKey)}
              </h3>

              {/* Divider */}
              <div className="mt-4 h-px w-12 bg-[#2D6B28]" aria-hidden="true" />

              <p
                key={`${active}-${language}-desc`}
                lang={np ? "ne" : undefined}
                className={cn(
                  "mt-4 text-[15.5px] leading-relaxed text-[#374151] timeline-enter",
                  np ? "font-khand text-[16px] leading-7" : "font-poppins",
                  isDetailed ? "line-clamp-[12] md:line-clamp-none" : "line-clamp-4",
                )}
                style={{ animationDelay: "80ms" }}
              >
                {t(isDetailed ? activeEntry.longKey : activeEntry.shortKey)}
              </p>

              {isDetailed && (
                <p
                  lang={np ? "ne" : undefined}
                  className={cn(
                    "mt-4 rounded-sm bg-[#F3F4F6] px-4 py-3 text-[13.5px] leading-relaxed text-[#525252] timeline-enter",
                    np ? "font-khand leading-6" : "font-poppins",
                  )}
                  style={{ animationDelay: "140ms" }}
                >
                  {language === "np"
                    ? "यो घटना आधिकारिक नेपाली काँग्रेस अभिलेख र पार्टीको ऐतिहासिक दस्तावेजमा आधारित छ।"
                    : "Sourced from the official Nepali Congress archive and historical records."}
                </p>
              )}
            </div>

            {/* Navigation dots / arrows */}
            <div className="mt-8 flex items-center justify-between border-t border-[#F3F4F6] pt-5">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                {entries.map((_, i) => (
                  <span
                    key={i}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300",
                      i === active ? "w-8 bg-[#2D6B28]" : "w-1.5 bg-[#E5E7EB]",
                    )}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActive((v) => (v - 1 + entries.length) % entries.length)}
                  aria-label={language === "np" ? "अघिल्लो" : "Previous"}
                  className="inline-flex h-9 w-9 items-center justify-center border border-[#F3F4F6] bg-white text-[#374151] transition-colors hover:border-[#2D6B28] hover:text-[#2D6B28] hover:bg-[#E5E7EB]/50"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => setActive((v) => (v + 1) % entries.length)}
                  aria-label={language === "np" ? "अर्को" : "Next"}
                  className="inline-flex h-9 w-9 items-center justify-center bg-[#2D6B28] text-white transition-colors hover:bg-[#15803D]"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom progress line mimicking dribbble timeline line */}
      <div className="mt-4 hidden items-center gap-3 md:flex" aria-hidden="true">
        <div className="h-px flex-1 bg-[#F3F4F6]" />
        <span className="font-poppins text-xs tracking-[0.08em] text-[#AAAEB5]">1947 — 2015 · {entries.length} milestones</span>
        <div className="h-px flex-1 bg-[#F3F4F6]" />
      </div>
    </div>
  );
};
