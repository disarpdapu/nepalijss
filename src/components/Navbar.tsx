import { useEffect, useRef, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const { language, toggleLanguage, t } = useLanguage();

  const navItems = [
    { to: "/", label: t("nav.home") },
    { to: "/about", label: t("nav.about") },
  ];

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      menuButtonRef.current?.focus();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      "relative inline-flex h-16 items-center px-1 font-body text-[15px] tracking-[0.01em] text-white/75 transition-colors duration-200",
      "hover:text-white",
      "after:absolute after:inset-x-0 after:bottom-0 after:h-[3px] after:origin-left after:scale-x-0 after:bg-gold-bright after:transition-transform after:duration-300 after:ease-out",
      isActive && "text-white after:scale-x-100",
    );

  return (
    <header className="on-forest sticky top-0 z-40 bg-forest-deep text-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:font-body focus:text-sm focus:text-forest-deep"
      >
        {t("nav.skip")}
      </a>

      <div className="flag-rule h-1.5" aria-hidden="true" />

      <nav aria-label={t("nav.primary")} className="mx-auto flex h-16 max-w-site items-stretch justify-between px-5 sm:px-8">
        <Link to="/" className="group flex min-w-0 items-center gap-3 self-center" aria-label={t("index.orgLatin")}>
          <span
            lang="ne"
            className="truncate font-devanagari text-[17px] font-semibold leading-none tracking-tight text-white sm:text-lg"
          >
            {t("nav.orgName")}
          </span>
          <span className="hidden h-4 w-px shrink-0 bg-white/25 sm:block" aria-hidden="true" />
          <span className="hidden shrink-0 font-display text-[17px] italic leading-none text-gold-bright/90 transition-colors group-hover:text-gold-bright sm:block">
            {t("nav.orgPlace")}
          </span>
        </Link>

        <div className="hidden items-stretch gap-8 md:flex">
          <ul className="flex items-stretch gap-8">
            {navItems.map((item) => (
              <li key={item.to} className="flex">
                <NavLink to={item.to} end className={linkClass}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <LanguageToggle language={language} onToggle={toggleLanguage} label={t("nav.switchLabel")} text={t("nav.switchTo")} />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle language={language} onToggle={toggleLanguage} label={t("nav.switchLabel")} text={t("nav.switchTo")} />
          <button
            ref={menuButtonRef}
            type="button"
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-white/85 transition-colors hover:text-white"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t("nav.close") : t("nav.menu")}
          >
            {open ? <X size={22} strokeWidth={1.75} aria-hidden="true" /> : <Menu size={22} strokeWidth={1.75} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out md:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <ul className="border-t border-white/10 px-5 py-2 sm:px-8">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end
                  tabIndex={open ? 0 : -1}
                  className={({ isActive }) =>
                    cn(
                      "flex min-h-[3.25rem] items-center justify-between border-b border-white/10 py-3 font-display text-xl text-white/75 transition-colors hover:text-white last:border-0",
                      isActive && "text-white",
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      {isActive && <span className="h-2 w-2 rounded-full bg-gold-bright" aria-hidden="true" />}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

const LanguageToggle = ({
  language,
  onToggle,
  label,
  text,
}: {
  language: "en" | "np";
  onToggle: () => void;
  label: string;
  text: string;
}) => (
  <button
    type="button"
    onClick={onToggle}
    aria-label={label}
    className={cn(
      "inline-flex h-9 items-center self-center border border-white/30 px-3 text-[13px] leading-none text-white/85 transition-colors duration-200",
      "hover:border-gold-bright hover:text-gold-bright",
      language === "en" ? "font-devanagari pt-px" : "font-body",
    )}
  >
    <span lang={language === "en" ? "ne" : "en"}>{text}</span>
  </button>
);

export default Navbar;
