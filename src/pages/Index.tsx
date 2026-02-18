import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import jssLogo from "@/assets/jss_logo.svg";

const CongressStar = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
  </svg>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero section */}
      <main className="flex flex-col items-center justify-center py-16 px-6">
        <div className="mb-10 animate-fade-in">
          <img src={jssLogo} alt="JSS Logo" className="w-72 h-72 md:w-96 md:h-96" />
        </div>

        <h1 className="font-display text-3xl md:text-4xl font-bold text-congress-blue text-center mb-3 tracking-tight">
          Nepali Janasamparka Samiti – Spain
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

        {/* Congress flag stars */}
        <div className="flex items-center gap-4 mb-12">
          <CongressStar className="w-6 h-6 text-congress-red" />
          <CongressStar className="w-6 h-6 text-congress-blue" />
          <CongressStar className="w-6 h-6 text-congress-red" />
          <CongressStar className="w-6 h-6 text-congress-blue" />
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
