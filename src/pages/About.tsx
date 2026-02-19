import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <main className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
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
          <p className="text-muted-foreground mb-3">
            <strong>Nepali Janasamparka Samiti – Spain</strong> (नेपाली जनसम्पर्क समिति – स्पेन) is an official overseas committee
            of <span className="text-congress-red font-semibold">Nepali Congress (नेपाली काँग्रेस)</span>, the oldest
            democratic political party of Nepal, founded in 1947. We represent the Nepali diaspora living and working across Spain,
            serving as the bridge between the party leadership in Nepal and the growing Nepali community in the Iberian Peninsula.
          </p>
          <p className="text-muted-foreground">
            The committee was established to ensure that Nepali citizens abroad remain connected to the democratic process,
            have a voice in party decision-making, and can contribute to Nepal's development from overseas. We operate under
            the direct guidance and mandate of the Nepali Congress Central Committee.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="font-display text-xl font-bold text-congress-blue mb-3">
            Our Mission & Objectives
          </h2>
          <ul className="space-y-2 text-muted-foreground list-disc list-inside">
            <li>Strengthen democratic values and political awareness among Nepali communities across Spain</li>
            <li>Preserve, promote, and celebrate Nepali culture, language, festivals, and traditions in the diaspora</li>
            <li>Coordinate with Nepali Congress headquarters and international committees for party activities and campaigns</li>
            <li>Advocate for the rights, welfare, and legal protection of Nepali migrants in Spain</li>
            <li>Foster Nepal-Spain diplomatic, cultural, and economic relations</li>
            <li>Organize community programs, cultural events, and political awareness campaigns</li>
            <li>Support and mobilize overseas Nepali voters for democratic elections</li>
            <li>Provide a platform for Nepali professionals, workers, and students in Spain to connect and support each other</li>
          </ul>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="font-display text-xl font-bold text-congress-blue mb-3">
            Nepali Congress (नेपाली काँग्रेस)
          </h2>
          <p className="text-muted-foreground mb-3">
            Founded on <strong>25 January 1947</strong>, Nepali Congress is Nepal's oldest democratic party, committed to democracy,
            social justice, nationalism, and sustainable development. The party follows the ideology of democratic socialism
            and has been the cornerstone of every major democratic movement in Nepal's history.
          </p>
          <p className="text-muted-foreground mb-3">
            <strong>Key historical milestones:</strong>
          </p>
          <ul className="space-y-2 text-muted-foreground list-disc list-inside mb-3">
            <li><strong>1951 Revolution:</strong> Led the armed revolution that overthrew the autocratic Rana regime and established democracy</li>
            <li><strong>1959 Elections:</strong> Won Nepal's first democratic election; B.P. Koirala became the first democratically elected Prime Minister</li>
            <li><strong>1990 People's Movement (Jana Andolan I):</strong> Spearheaded the movement that restored multiparty democracy after 30 years of Panchayat rule</li>
            <li><strong>2006 Democratic Restoration (Jana Andolan II):</strong> Played a pivotal role in the movement that ended the king's direct rule and paved the way for a federal democratic republic</li>
            <li><strong>2015 Constitution:</strong> Instrumental in drafting and promulgating Nepal's current constitution establishing a federal democratic republic</li>
          </ul>
          <p className="text-muted-foreground">
            The party's election symbol is the <strong>Tree (रुख)</strong>, symbolizing growth, shelter, and prosperity.
            Under the leadership of party presidents like B.P. Koirala, Girija Prasad Koirala, and Sher Bahadur Deuba,
            Nepali Congress has consistently championed civil liberties, press freedom, and inclusive governance.
            Our committee in Spain proudly carries forward these values among the Nepali diaspora.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="font-display text-xl font-bold text-congress-blue mb-3">
            Our Activities in Spain
          </h2>
          <p className="text-muted-foreground mb-3">
            Nepali Janasamparka Samiti – Spain regularly organizes and participates in:
          </p>
          <ul className="space-y-2 text-muted-foreground list-disc list-inside">
            <li>Cultural celebrations including Dashain, Tihar, Teej, and Nepal New Year</li>
            <li>Political awareness programs and party membership drives</li>
            <li>Seminars and discussions on Nepal's democratic progress and challenges</li>
            <li>Collaboration with other Nepali organizations and communities in Europe</li>
            <li>Support services for newly arrived Nepali migrants in Spain</li>
            <li>Coordination with the Embassy of Nepal in Spain for community welfare</li>
          </ul>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="font-display text-xl font-bold text-congress-blue mb-3">
            Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4">
              <p className="font-display font-bold text-congress-red text-lg">Democracy</p>
              <p className="font-devanagari text-sm text-congress-blue mb-1">प्रजातन्त्र</p>
              <p className="text-muted-foreground text-sm">People's sovereignty and civil liberties</p>
            </div>
            <div className="text-center p-4">
              <p className="font-display font-bold text-congress-red text-lg">Social Justice</p>
              <p className="font-devanagari text-sm text-congress-blue mb-1">सामाजिक न्याय</p>
              <p className="text-muted-foreground text-sm">Equal rights and opportunities for all</p>
            </div>
            <div className="text-center p-4">
              <p className="font-display font-bold text-congress-red text-lg">Nationalism</p>
              <p className="font-devanagari text-sm text-congress-blue mb-1">राष्ट्रियता</p>
              <p className="text-muted-foreground text-sm">Love for Nepal and its heritage</p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
);

export default About;
