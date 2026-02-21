import symbolSvg from "@/assets/symbol.svg";
import nepalFlag from "@/assets/nepal_flag.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-congress-green text-primary-foreground py-8 px-6 mt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <img src={nepalFlag} alt="Nepalese Flag" className="w-8 h-12 object-contain" />
          <img src={symbolSvg} alt="Nepali Congress Symbol" className="w-12 h-12 brightness-0 invert opacity-80" />
        </div>
        <p className="font-devanagari text-lg mb-1">
          {t("footer.orgName")}
        </p>
        <p className="font-body text-sm opacity-70">
          {t("footer.orgNameEn")}
        </p>
        <p className="font-body text-xs opacity-50 mt-1">
          {t("footer.committee")}
        </p>
        <div className="mt-4 flex items-center justify-center gap-2">
          <span className="inline-block w-8 h-1 rounded bg-spain-red" />
          <span className="inline-block w-8 h-1 rounded bg-spain-yellow" />
          <span className="inline-block w-8 h-1 rounded bg-spain-red" />
        </div>
        <p className="mt-4 text-xs opacity-50 font-body">
          © {new Date().getFullYear()} {t("footer.copyright")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
