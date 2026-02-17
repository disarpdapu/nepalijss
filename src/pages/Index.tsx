import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Emblem from "@/components/Emblem";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero section */}
      <main className="flex flex-col items-center justify-center py-16 px-6">
        <div className="mb-10 animate-fade-in">
          <Emblem size={380} />
        </div>

        <h1 className="font-display text-3xl md:text-4xl font-bold text-congress-blue text-center mb-3 tracking-tight">
          Nepali Janasamparka Samiti
        </h1>

        <p className="font-devanagari text-xl md:text-2xl text-congress-red font-semibold text-center mb-2">
          नेपाली जनसम्पर्क समिति – स्पेन
        </p>

        <p className="font-body text-sm text-congress-green font-semibold text-center mb-4 uppercase tracking-wider">
          A Committee of Nepali Congress (नेपाली काँग्रेस)
        </p>

        <p className="font-body text-muted-foreground text-center max-w-xl mb-10 leading-relaxed">
          Nepalese People Co-ordination Committee, Spain — Uniting the Nepali
          diaspora in Spain through democratic values, cultural heritage, and
          community service under the banner of Nepali Congress.
        </p>

        {/* Decorative divider */}
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px w-16 bg-congress-blue opacity-30" />
          <div className="w-2 h-2 rounded-full bg-congress-red" />
          <div className="h-px w-16 bg-congress-blue opacity-30" />
        </div>

        {/* Values cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
          <ValueCard
            title="Democracy"
            nepali="प्रजातन्त्र"
            description="Promoting democratic values and political participation among Nepali diaspora in Spain."
          />
          <ValueCard
            title="Unity"
            nepali="एकता"
            description="Building bridges between Nepali communities across Spain for collective strength."
          />
          <ValueCard
            title="Service"
            nepali="सेवा"
            description="Dedicated to social welfare, cultural preservation, and community empowerment."
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
