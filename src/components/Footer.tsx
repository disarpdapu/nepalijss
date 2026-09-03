import { Link } from "react-router-dom";
import symbolSvg from "@/assets/symbol.svg";
import nepalFlag from "@/assets/nepal_flag.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t, language } = useLanguage();
  const np = language === "np";

  return (
    <footer className="on-forest bg-forest-deep text-white">
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
                className="h-11 w-11 brightness-0 invert opacity-85"
              />
            </div>
            <div className="min-w-0">
              <p lang="ne" className="font-devanagari text-xl font-semibold leading-tight">
                {t("footer.orgName")}
              </p>
              <p className="mt-1 font-display text-lg text-white/70">{t("footer.orgNameEn")}</p>
              <p lang={np ? "ne" : undefined} className={`mt-3 text-sm text-white/60 ${np ? "font-devanagari" : "font-body"}`}>
                {t("footer.committee")}
              </p>
            </div>
          </div>

          <nav aria-label={t("footer.navigate")} className="md:text-right">
            <p lang={np ? "ne" : undefined} className={`text-xs uppercase tracking-[0.12em] text-gold-bright/80 ${np ? "font-devanagari normal-case tracking-normal" : "font-body"}`}>
              {t("footer.navigate")}
            </p>
            <ul className="mt-2 flex gap-6 md:justify-end">
              <li>
                <Link
                  to="/"
                  lang={np ? "ne" : undefined}
                  className={`link-underline inline-block py-1 text-lg text-white/85 hover:text-white ${np ? "font-devanagari" : "font-display"}`}
                >
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  lang={np ? "ne" : undefined}
                  className={`link-underline inline-block py-1 text-lg text-white/85 hover:text-white ${np ? "font-devanagari" : "font-display"}`}
                >
                  {t("nav.about")}
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col-reverse gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p lang={np ? "ne" : undefined} className={`text-xs text-white/50 ${np ? "font-devanagari" : "font-body"}`}>
            © {new Date().getFullYear()} {t("footer.copyright")}
          </p>
          {/* Spain's colours: the committee's home */}
          <span className="flex h-1.5 w-20 overflow-hidden" aria-hidden="true">
            <span className="flex-1 bg-spain-red" />
            <span className="flex-[2] bg-spain-yellow" />
            <span className="flex-1 bg-spain-red" />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
