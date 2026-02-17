import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import symbolSvg from "@/assets/symbol.svg";

const Election = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <main className="max-w-5xl mx-auto px-6 py-16">
      {/* Support Nepali Congress Banner */}
      <section className="bg-congress-blue text-primary-foreground rounded-lg p-8 md:p-12 mb-12 text-center">
        <img src={symbolSvg} alt="Nepali Congress Symbol" className="w-20 h-20 mx-auto mb-4 brightness-0 invert" />
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-3">
          Support Nepali Congress
        </h1>
        <p className="font-devanagari text-xl md:text-2xl mb-4">
          नेपाली काँग्रेसलाई समर्थन गर्नुहोस्
        </p>
        <p className="font-body text-sm md:text-base opacity-90 max-w-2xl mx-auto leading-relaxed">
          Nepali Congress (नेपाली काँग्रेस) has been the pillar of democracy in Nepal since 1947.
          Support the party that stands for freedom, justice, and prosperity for all Nepali people.
          Together, we build a stronger, democratic Nepal.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <div className="w-3 h-3 rounded-full bg-congress-red" />
          <div className="w-3 h-3 rounded-full bg-primary-foreground" />
          <div className="w-3 h-3 rounded-full bg-congress-green" />
        </div>
      </section>

      {/* Party Values */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <Card className="text-center border-t-4 border-t-congress-red">
          <CardHeader>
            <CardTitle className="font-display text-congress-blue text-lg">Democracy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-devanagari text-congress-red text-sm mb-2">प्रजातन्त्र</p>
            <p className="text-muted-foreground text-sm font-body">
              The foundation of Nepal's political progress and people's sovereignty.
            </p>
          </CardContent>
        </Card>
        <Card className="text-center border-t-4 border-t-congress-green">
          <CardHeader>
            <CardTitle className="font-display text-congress-blue text-lg">Social Justice</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-devanagari text-congress-red text-sm mb-2">सामाजिक न्याय</p>
            <p className="text-muted-foreground text-sm font-body">
              Equal rights, opportunities, and dignity for every citizen of Nepal.
            </p>
          </CardContent>
        </Card>
        <Card className="text-center border-t-4 border-t-congress-red">
          <CardHeader>
            <CardTitle className="font-display text-congress-blue text-lg">Development</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-devanagari text-congress-red text-sm mb-2">विकास</p>
            <p className="text-muted-foreground text-sm font-body">
              Economic growth and modernization for a prosperous Nepal.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Election Results Section */}
      <section>
        <h2 className="font-display text-2xl font-bold text-congress-blue text-center mb-2">
          Nepali Congress Election Candidates
        </h2>
        <p className="font-devanagari text-congress-red text-center mb-8">
          नेपाली काँग्रेसका निर्वाचन उम्मेदवारहरू
        </p>

        <div className="bg-card border border-border rounded-lg p-8 text-center">
          <p className="text-muted-foreground font-body">
            Election candidate data from the Election Commission of Nepal will be available soon.
          </p>
          <p className="text-xs text-muted-foreground mt-2 font-body">
            Source: <a href="https://result.election.gov.np/" target="_blank" rel="noopener noreferrer" className="text-congress-blue underline">result.election.gov.np</a>
          </p>
        </div>
      </section>
    </main>

    <Footer />
  </div>
);

export default Election;
