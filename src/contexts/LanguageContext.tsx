import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import { translations, type Language } from "@/i18n/translations";

export type { Language };

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "njs-language";

const readStoredLanguage = (): Language => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "np" ? "np" : "en";
  } catch {
    return "en";
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(readStoredLanguage);

  useEffect(() => {
    document.documentElement.lang = language === "np" ? "ne" : "en";
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // Storage may be unavailable (private mode); the choice simply resets on reload.
    }
  }, [language]);

  const value = useMemo<LanguageContextType>(
    () => ({
      language,
      setLanguage: setLanguageState,
      toggleLanguage: () => setLanguageState((l) => (l === "en" ? "np" : "en")),
      t: (key) => translations[key]?.[language] ?? key,
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components -- hook and provider belong together
export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
