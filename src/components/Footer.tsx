import { Link } from "react-router-dom";
import symbolSvg from "@/assets/symbol.svg";
import nepalFlag from "@/assets/nepal_flag.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t, language } = useLanguage();
  const np = language === "np";

  return (
    <footer className="bg-[#1E293B] text-white">
      {/* top accent bar */}
      <div className="h-1 w-full bg-[#2D6B28]" aria-hidden="true" />
      <div className="mx-auto max-w-site px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-start">
          <div className="flex gap-5">
            <div className="flex shrink-0 items-start gap-4 pt-1">
              <img src={nepalFlag} alt={t("footer.flagAlt")} width={36} height={44} loading="lazy" className="h-11 w-auto" />
              <img
                src={symbolSvg}
                alt={t("footer.symbolAlt")}
                width={44}
                height={44}
                loading="lazy"
                className="h-11 w-11 brightness-0 invert opacity-90"
              />
            </div>
            <div className="min-w-0">
              <p lang="ne" className="font-khand text-xl font-semibold leading-tight">
                {t("footer.orgName")}
              </p>
              <p className="mt-1 font-poppins text-sm text-white/70">{t("footer.orgNameEn")}</p>
              <p lang={np ? "ne" : undefined} className={`mt-3 text-sm text-white/60 ${np ? "font-khand" : "font-poppins"}`}>
                {t("footer.committee")}
              </p>
            </div>
          </div>

          <nav aria-label={t("footer.navigate")} className="md:text-right">
            <p lang={np ? "ne" : undefined} className={`text-xs font-semibold uppercase tracking-[0.12em] text-[#22C55E] ${np ? "font-khand normal-case tracking-normal" : "font-poppins"}`}>
              {t("footer.navigate")}
            </p>
            <ul className="mt-3 flex gap-6 md:justify-end">
              <li>
                <Link
                  to="/"
                  lang={np ? "ne" : undefined}
                  className={`inline-block py-1 text-[15px] font-medium text-white/85 hover:text-white transition-colors ${np ? "font-khand" : "font-khand"}`}
                >
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  lang={np ? "ne" : undefined}
                  className={`inline-block py-1 text-[15px] font-medium text-white/85 hover:text-white transition-colors ${np ? "font-khand" : "font-khand"}`}
                >
                  {t("nav.about")}
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col-reverse gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p lang={np ? "ne" : undefined} className={`text-xs text-white/50 ${np ? "font-khand" : "font-poppins"}`}>
            © {new Date().getFullYear()} {t("footer.copyright")}
          </p>
          <span className="flex h-1.5 w-20 overflow-hidden" aria-hidden="true">
            <span className="flex-1 bg-[#DC2626]" />
            <span className="flex-[2] bg-[#FACC15]" />
            <span className="flex-1 bg-[#DC2626]" />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
