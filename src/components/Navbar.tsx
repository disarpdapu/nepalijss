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
      "relative inline-flex h-16 items-center px-1 font-khand text-[15px] font-medium tracking-[0.01em] transition-colors duration-200",
      isActive ? "text-[#2D6B28]" : "text-[#374151] hover:text-[#2D6B28]",
      "after:absolute after:inset-x-0 after:bottom-0 after:h-[2.5px] after:origin-left after:scale-x-0 after:bg-[#2D6B28] after:transition-transform after:duration-300 after:ease-out",
      isActive && "after:scale-x-100",
    );

  return (
    <header className="sticky top-0 z-40 border-b border-[#F3F4F6] bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-[#2D6B28] focus:px-4 focus:py-2 focus:font-poppins focus:text-sm focus:text-white"
      >
        {t("nav.skip")}
      </a>

      {/* thin primary accent line on top */}
      <div className="h-1 w-full bg-[#2D6B28]" aria-hidden="true" />

      <nav aria-label={t("nav.primary")} className="mx-auto flex h-16 max-w-site items-stretch justify-between px-5 sm:px-8">
        <Link to="/" className="group flex min-w-0 items-center gap-3 self-center" aria-label={t("index.orgLatin")}>
          <span className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-sm bg-[#2D6B28] text-white shadow-sm">
              <span className="font-khand text-[13px] font-bold leading-none">NC</span>
            </span>
            <span lang="ne" className="truncate font-khand text-[17px] font-semibold leading-none tracking-tight text-[#171717] sm:text-lg">
              {t("nav.orgName")}
            </span>
          </span>
          <span className="hidden h-4 w-px shrink-0 bg-[#F3F4F6] sm:block" aria-hidden="true" />
          <span className="hidden shrink-0 font-khand text-[15px] font-medium leading-none text-[#2D6B28] transition-colors group-hover:text-[#15803D] sm:block">
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
            className="inline-flex h-11 w-11 items-center justify-center text-[#374151] transition-colors hover:text-[#2D6B28]"
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
        <div className="overflow-hidden border-t border-[#F3F4F6] bg-white">
          <ul className="px-5 py-2 sm:px-8">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end
                  tabIndex={open ? 0 : -1}
                  className={({ isActive }) =>
                    cn(
                      "flex min-h-[3.25rem] items-center justify-between border-b border-[#F3F4F6] py-3 font-khand text-xl font-medium transition-colors last:border-0",
                      isActive ? "text-[#2D6B28]" : "text-[#374151] hover:text-[#2D6B28]",
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      {isActive && <span className="h-2 w-2 rounded-full bg-[#2D6B28]" aria-hidden="true" />}
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
      "inline-flex h-9 items-center self-center border px-3 text-[13px] font-medium leading-none transition-colors duration-200",
      language === "en" ? "border-[#F3F4F6] bg-white text-[#374151] hover:border-[#2D6B28] hover:text-[#2D6B28] font-khand" : "border-[#F3F4F6] bg-white text-[#374151] hover:border-[#2D6B28] hover:text-[#2D6B28] font-poppins",
    )}
  >
    <span lang={language === "en" ? "ne" : "en"}>{text}</span>
  </button>
);

export default Navbar;
