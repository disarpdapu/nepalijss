import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import jssLogo from "@/assets/jss_logo.svg";
import { useLanguage } from "@/contexts/LanguageContext";

const CongressStar = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
  </svg>
);

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="flex flex-col items-center justify-center py-16 px-6">
        <div className="mb-10 animate-fade-in">
          <img src={jssLogo} alt="JSS Logo" className="w-72 h-72 md:w-96 md:h-96" />
        </div>

        <h1 className="font-display text-3xl md:text-4xl font-bold text-congress-blue text-center mb-3 tracking-tight">
          {t("index.title")}
        </h1>

        <p className="font-devanagari text-xl md:text-2xl text-congress-red font-semibold text-center mb-2">
          {t("index.subtitle")}
        </p>

        <p className="font-body text-sm text-congress-green font-semibold text-center mb-4 uppercase tracking-wider">
          {t("index.tagline")}
        </p>

        <p className="font-body text-muted-foreground text-center max-w-xl mb-10 leading-relaxed">
          {t("index.description")}
        </p>

        <div className="flex items-center gap-4 mb-12">
          <CongressStar className="w-6 h-6 text-congress-red" />
          <CongressStar className="w-6 h-6 text-congress-blue" />
          <CongressStar className="w-6 h-6 text-congress-red" />
          <CongressStar className="w-6 h-6 text-congress-blue" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
          <ValueCard
            title={t("index.democracy")}
            nepali={t("index.democracyNp")}
            description={t("index.democracyDesc")}
          />
          <ValueCard
            title={t("index.unity")}
            nepali={t("index.unityNp")}
            description={t("index.unityDesc")}
          />
          <ValueCard
            title={t("index.service")}
            nepali={t("index.serviceNp")}
            description={t("index.serviceDesc")}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

const ValueCard = ({
  title,
  nepali,
  description,
}: {
  title: string;
  nepali: string;
  description: string;
}) => (
  <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-md transition-shadow">
    <h3 className="font-display text-xl font-bold text-congress-blue mb-1">
      {title}
    </h3>
    <p className="font-devanagari text-congress-red text-sm mb-3">{nepali}</p>
    <p className="font-body text-muted-foreground text-sm leading-relaxed">
      {description}
    </p>
  </div>
);

export default Index;
