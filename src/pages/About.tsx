import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Emblem from "@/components/Emblem";

const About = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <main className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <Emblem size={160} />
        <h1 className="font-display text-3xl font-bold text-congress-blue mt-6 mb-2">
          About Us
        </h1>
        <p className="font-devanagari text-congress-red text-lg">
          हाम्रो बारेमा
        </p>
      </div>

      <section className="space-y-8 font-body text-foreground leading-relaxed">
        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="font-display text-xl font-bold text-congress-blue mb-3">
            Who We Are
          </h2>
          <p className="text-muted-foreground">
            <strong>Nepali Janasamparka Samiti – Spain</strong> (नेपाली जनसम्पर्क समिति – स्पेन) is an official committee
            of <span className="text-congress-red font-semibold">Nepali Congress (नेपाली काँग्रेस)</span>, the oldest
            democratic political party of Nepal. We represent the Nepali diaspora in Spain, promoting democratic values,
            cultural heritage, and community service under the guiding principles of Nepali Congress.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="font-display text-xl font-bold text-congress-blue mb-3">
            Our Mission
          </h2>
          <ul className="space-y-2 text-muted-foreground list-disc list-inside">
            <li>Strengthen democratic values among Nepali communities in Spain</li>
            <li>Preserve and promote Nepali culture, language, and traditions</li>
            <li>Coordinate with Nepali Congress headquarters for party activities</li>
            <li>Support the rights and welfare of Nepali migrants in Spain</li>
            <li>Foster Nepal-Spain diplomatic and cultural relations</li>
          </ul>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="font-display text-xl font-bold text-congress-blue mb-3">
            Nepali Congress (नेपाली काँग्रेस)
          </h2>
          <p className="text-muted-foreground">
            Founded in 1947, Nepali Congress is Nepal's oldest democratic party, committed to democracy,
            social justice, and national development. The party has been at the forefront of every major democratic
            movement in Nepal, including the 1951 revolution, the 1990 People's Movement, and the 2006 democratic
            restoration. Our committee in Spain carries forward these values among the Nepali diaspora.
          </p>
        </div>
      </section>
    </main>

    <Footer />
  </div>
);

export default About;
