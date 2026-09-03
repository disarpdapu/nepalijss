import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PageShell from "@/components/PageShell";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

const NotFound = () => {
  const { pathname } = useLocation();
  const { t, language } = useLanguage();
  const np = language === "np";
  const text = np ? "font-devanagari" : "font-display";

  return (
    <PageShell>
      <div className="mx-auto max-w-site px-5 py-24 sm:px-8 md:py-32">
        <p className="font-body text-sm text-muted-foreground">
          404 · <code className="font-body">{pathname}</code>
        </p>
        <h1 lang={np ? "ne" : undefined} className={cn("mt-4 text-4xl font-medium tracking-tight text-forest-deep sm:text-5xl", text)}>
          {t("notFound.title")}
        </h1>
        <p lang={np ? "ne" : undefined} className={cn("measure mt-5 text-lg leading-relaxed text-foreground/70", text)}>
          {t("notFound.text")}
        </p>
        <Link
          to="/"
          lang={np ? "ne" : undefined}
          className={cn("mt-8 inline-flex min-h-[3rem] items-center gap-3 bg-forest-deep px-5 py-3 text-[15px] font-medium text-white transition-colors duration-200 hover:bg-forest", np ? "font-devanagari" : "font-body")}
        >
          <ArrowLeft size={18} strokeWidth={1.75} aria-hidden="true" />
          {t("notFound.cta")}
        </Link>
      </div>
    </PageShell>
  );
};

export default NotFound;
