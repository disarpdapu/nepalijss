import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="font-display text-3xl font-bold text-congress-blue mt-6 mb-2">
            {t("about.title")}
          </h1>
          <p className="font-devanagari text-congress-red text-lg">
            {t("about.titleNp")}
          </p>
        </div>

        <section className="space-y-8 font-body text-foreground leading-relaxed">
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="font-display text-xl font-bold text-congress-blue mb-3">
              {t("about.whoWeAre")}
            </h2>
            <p className="text-muted-foreground mb-3">
              {t("about.whoWeAreP1")}
            </p>
            <p className="text-muted-foreground">
              {t("about.whoWeAreP2")}
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="font-display text-xl font-bold text-congress-blue mb-3">
              {t("about.mission")}
            </h2>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              <li>{t("about.mission1")}</li>
              <li>{t("about.mission2")}</li>
              <li>{t("about.mission3")}</li>
              <li>{t("about.mission4")}</li>
              <li>{t("about.mission5")}</li>
              <li>{t("about.mission6")}</li>
              <li>{t("about.mission7")}</li>
              <li>{t("about.mission8")}</li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="font-display text-xl font-bold text-congress-blue mb-3">
              {t("about.ncTitle")}
            </h2>
            <p className="text-muted-foreground mb-3">
              {t("about.ncP1")}
            </p>
            <p className="text-muted-foreground mb-3">
              <strong>{t("about.keyMilestones")}</strong>
            </p>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside mb-3">
              <li>{t("about.milestone1")}</li>
              <li>{t("about.milestone2")}</li>
              <li>{t("about.milestone3")}</li>
              <li>{t("about.milestone4")}</li>
              <li>{t("about.milestone5")}</li>
            </ul>
            <p className="text-muted-foreground">
              {t("about.ncP2")}
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="font-display text-xl font-bold text-congress-blue mb-3">
              {t("about.activities")}
            </h2>
            <p className="text-muted-foreground mb-3">
              {t("about.activitiesIntro")}
            </p>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              <li>{t("about.activity1")}</li>
              <li>{t("about.activity2")}</li>
              <li>{t("about.activity3")}</li>
              <li>{t("about.activity4")}</li>
              <li>{t("about.activity5")}</li>
              <li>{t("about.activity6")}</li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="font-display text-xl font-bold text-congress-blue mb-3">
              {t("about.coreValues")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4">
                <p className="font-display font-bold text-congress-red text-lg">{t("about.democracy")}</p>
                <p className="font-devanagari text-sm text-congress-blue mb-1">{t("about.democracyNp")}</p>
                <p className="text-muted-foreground text-sm">{t("about.democracyDesc")}</p>
              </div>
              <div className="text-center p-4">
                <p className="font-display font-bold text-congress-red text-lg">{t("about.socialJustice")}</p>
                <p className="font-devanagari text-sm text-congress-blue mb-1">{t("about.socialJusticeNp")}</p>
                <p className="text-muted-foreground text-sm">{t("about.socialJusticeDesc")}</p>
              </div>
              <div className="text-center p-4">
                <p className="font-display font-bold text-congress-red text-lg">{t("about.nationalism")}</p>
                <p className="font-devanagari text-sm text-congress-blue mb-1">{t("about.nationalismNp")}</p>
                <p className="text-muted-foreground text-sm">{t("about.nationalismDesc")}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
