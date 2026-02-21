import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { to: "/", label: t("nav.home") },
    { to: "/about", label: t("nav.about") },
    { to: "/election", label: t("nav.election") },
  ];

  return (
    <nav className="bg-congress-green text-primary-foreground">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-devanagari text-sm font-semibold tracking-wide">
            {t("nav.orgName")}
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={cn(
                    "px-4 py-2 rounded text-sm font-body transition-colors",
                    location.pathname === item.to
                      ? "bg-primary-foreground/20 font-semibold"
                      : "hover:bg-primary-foreground/10"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Language switcher */}
          <button
            onClick={() => setLanguage(language === "en" ? "np" : "en")}
            className="ml-3 flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-body bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
            aria-label="Switch language"
          >
            <Globe size={14} />
            <span>{language === "en" ? "नेपाली" : "English"}</span>
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setLanguage(language === "en" ? "np" : "en")}
            className="flex items-center gap-1 px-2 py-1.5 rounded text-xs font-body bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
            aria-label="Switch language"
          >
            <Globe size={14} />
            <span>{language === "en" ? "ने" : "EN"}</span>
          </button>
          <button
            className="p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-primary-foreground/20 px-6 pb-4">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "block py-3 text-sm font-body border-b border-primary-foreground/10 last:border-0",
                location.pathname === item.to && "font-semibold"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
