import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { to: "/", label: "Home", nepali: "गृहपृष्ठ" },
  { to: "/about", label: "About", nepali: "परिचय" },
  { to: "/election", label: "Election", nepali: "निर्वाचन" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-devanagari text-sm font-semibold tracking-wide">
            नेपाली काँग्रेस
          </span>
          <span className="text-xs opacity-70 font-body hidden sm:inline">| Nepali Congress</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
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

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
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
              {item.label} <span className="font-devanagari text-xs opacity-70 ml-2">{item.nepali}</span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
