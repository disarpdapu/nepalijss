import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import symbolSvg from "@/assets/symbol.svg";
import provinceMapSvg from "@/assets/province_map.svg";
import { supabase } from "@/integrations/supabase/client";

const CongressStar = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
  </svg>
);

type Candidate = {
  id: number;
  name: string;
  age: number;
  gender: string;
  district: string;
  province: string;
  provinceId: number;
  constituency: number;
  constituencyId: number;
  symbol: string;
  votes: number;
  status: string | null;
  qualification: string;
  address: string;
  fatherName: string;
  spouseName: string;
};

// Province data with accurate positions on the Nepal province map
// Positions are percentages relative to the map image dimensions
const provinces = [
  { id: 1, name: "कोशी प्रदेश", nameEn: "Koshi", x: 87, y: 78 },
  { id: 2, name: "मधेश प्रदेश", nameEn: "Madhesh", x: 68, y: 83 },
  { id: 3, name: "बागमती प्रदेश", nameEn: "Bagmati", x: 68, y: 66 },
  { id: 4, name: "गण्डकी प्रदेश", nameEn: "Gandaki", x: 48, y: 48 },
  { id: 5, name: "लुम्बिनी प्रदेश", nameEn: "Lumbini", x: 33, y: 60 },
  { id: 6, name: "कर्णाली प्रदेश", nameEn: "Karnali", x: 28, y: 29 },
  { id: 7, name: "सुदूरपश्चिम प्रदेश", nameEn: "Sudurpashchim", x: 8, y: 25 },
];

const Election = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedProvince, setSelectedProvince] = useState<number | null>(null);
  const [hoveredProvince, setHoveredProvince] = useState<number | null>(null);
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetchCandidates();
  }, []);

  const fetchCandidates = async () => {
    try {
      setLoading(true);
      setError(null);
      const { data, error } = await supabase.functions.invoke("scrape-election-data");
      if (error) throw error;
      if (data?.candidates) {
        setCandidates(data.candidates);
      }
    } catch (err: any) {
      console.error("Error fetching candidates:", err);
      setError("Failed to load election data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const getProvinceCandidates = (provinceId: number) =>
    candidates.filter((c) => c.provinceId === provinceId);

  const displayedCandidates = selectedProvince
    ? getProvinceCandidates(selectedProvince)
    : showAll
    ? candidates
    : [];

  const selectedProvinceName = selectedProvince
    ? provinces.find((p) => p.id === selectedProvince)
    : null;

  const shouldShowCandidates = selectedProvince !== null || showAll;

  const handleProvinceClick = (id: number) => {
    setShowAll(false);
    setSelectedProvince(selectedProvince === id ? null : id);
  };

  const handleShowAll = () => {
    setSelectedProvince(null);
    setShowAll(true);
  };

  const handleClearSelection = () => {
    setSelectedProvince(null);
    setShowAll(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-16">
        {/* Support Nepali Congress Banner */}
        <section className="bg-congress-green text-primary-foreground rounded-lg p-8 md:p-12 mb-12 text-center">
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
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <CongressStar className="w-5 h-5 text-primary-foreground" />
            <CongressStar className="w-5 h-5 text-primary-foreground opacity-80" />
            <CongressStar className="w-5 h-5 text-primary-foreground" />
            <CongressStar className="w-5 h-5 text-primary-foreground opacity-80" />
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

        {/* Nepal Map & Candidates Section */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-congress-blue text-center mb-2">
            Nepali Congress Election Candidates 2082
          </h2>
          <p className="font-devanagari text-congress-red text-center mb-8">
            नेपाली काँग्रेसका निर्वाचन उम्मेदवारहरू २०८२
          </p>

          {/* Interactive Nepal Map */}
          <div className="bg-card border border-border rounded-lg p-4 md:p-6 mb-8">
            <p className="text-center text-sm text-muted-foreground font-body mb-4">
              Click on a province to see Nepali Congress candidates from that region
            </p>
            <div className="relative w-full max-w-3xl mx-auto">
              <img
                src={provinceMapSvg}
                alt="Nepal Province Map"
                className="w-full h-auto opacity-40"
                draggable={false}
              />
              {/* Province overlay markers */}
              {provinces.map((prov) => {
                const count = getProvinceCandidates(prov.id).length;
                const isHovered = hoveredProvince === prov.id;
                const isSelected = selectedProvince === prov.id;

                return (
                  <button
                    key={prov.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer transition-all duration-200 z-10"
                    style={{ left: `${prov.x}%`, top: `${prov.y}%` }}
                    onMouseEnter={() => setHoveredProvince(prov.id)}
                    onMouseLeave={() => setHoveredProvince(null)}
                    onClick={() => handleProvinceClick(prov.id)}
                  >
                    {/* Pulse ring for selected */}
                    {isSelected && (
                      <span className="absolute inset-0 rounded-full bg-congress-red opacity-30 animate-ping" />
                    )}
                    <div
                      className={`relative rounded-full flex items-center justify-center text-primary-foreground font-bold transition-all duration-200 shadow-lg ${
                        isSelected
                          ? "bg-congress-red w-9 h-9 md:w-11 md:h-11 text-[10px] md:text-xs ring-2 ring-primary-foreground ring-offset-2 ring-offset-card"
                          : isHovered
                          ? "bg-congress-blue w-8 h-8 md:w-10 md:h-10 text-[10px] md:text-xs"
                          : "bg-congress-green w-7 h-7 md:w-9 md:h-9 text-[10px] md:text-xs"
                      }`}
                    >
                      {loading ? "…" : count}
                    </div>
                    {/* Tooltip - repositioned for mobile */}
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 bg-card border border-border rounded-md px-2 py-1.5 shadow-lg whitespace-nowrap transition-all duration-150 z-20 ${
                        prov.y < 40 ? "top-full mt-2" : "bottom-full mb-2"
                      } ${
                        isHovered || isSelected ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                      }`}
                    >
                      <p className="font-devanagari text-[10px] md:text-xs font-semibold text-foreground">{prov.name}</p>
                      <p className="text-[10px] md:text-xs text-muted-foreground font-body">{prov.nameEn} • {count}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Map controls */}
            <div className="flex items-center justify-center gap-3 mt-5">
              <Button
                variant={showAll ? "default" : "outline"}
                size="sm"
                onClick={handleShowAll}
                className="font-body text-xs"
              >
                Show All Candidates ({candidates.length})
              </Button>
              {(selectedProvince || showAll) && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleClearSelection}
                  className="font-body text-xs text-muted-foreground"
                >
                  Clear Selection
                </Button>
              )}
            </div>
          </div>

          {/* Candidates List */}
          {loading ? (
            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <div className="animate-spin w-8 h-8 border-4 border-congress-green border-t-transparent rounded-full mx-auto mb-4" />
              <p className="text-muted-foreground font-body">Loading election candidates from Election Commission...</p>
            </div>
          ) : error ? (
            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <p className="text-muted-foreground font-body">{error}</p>
              <button onClick={fetchCandidates} className="mt-4 text-congress-blue underline font-body text-sm">
                Retry
              </button>
            </div>
          ) : !shouldShowCandidates ? (
            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <p className="text-muted-foreground font-body">
                Select a province on the map or click "Show All Candidates" to view the list.
              </p>
            </div>
          ) : displayedCandidates.length > 0 ? (
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground font-body text-center mb-4">
                {selectedProvinceName
                  ? `${selectedProvinceName.nameEn} (${selectedProvinceName.name}) — `
                  : "All Provinces — "}
                {displayedCandidates.length} Nepali Congress candidate{displayedCandidates.length !== 1 ? "s" : ""}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {displayedCandidates.map((c) => (
                  <Card
                    key={c.id}
                    className="border-l-4 border-l-congress-green cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => setSelectedCandidate(c)}
                  >
                    <CardContent className="p-4">
                      <p className="font-display font-bold text-congress-blue">{c.name}</p>
                      <p className="text-sm text-muted-foreground font-body">
                        {c.district} — Constituency {c.constituency}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-congress-green font-body">{c.province}</span>
                        {c.votes > 0 && (
                          <span className="text-xs text-muted-foreground font-body">• {c.votes.toLocaleString()} votes</span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <p className="text-muted-foreground font-body">
                No Nepali Congress candidates found{selectedProvinceName ? ` in ${selectedProvinceName.nameEn}` : ""}.
              </p>
            </div>
          )}

          <p className="text-xs text-muted-foreground mt-4 text-center font-body">
            Source: <a href="https://result.election.gov.np/" target="_blank" rel="noopener noreferrer" className="text-congress-blue underline">result.election.gov.np</a> — Election 2082
          </p>
        </section>
      </main>

      {/* Candidate Detail Dialog */}
      <Dialog open={!!selectedCandidate} onOpenChange={() => setSelectedCandidate(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display text-congress-blue">
              {selectedCandidate?.name}
            </DialogTitle>
          </DialogHeader>
          {selectedCandidate && (
            <div className="space-y-3 font-body text-sm">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-muted-foreground">District</p>
                  <p className="font-semibold">{selectedCandidate.district}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Constituency</p>
                  <p className="font-semibold">{selectedCandidate.constituency}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Province</p>
                  <p className="font-semibold">{selectedCandidate.province}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Age</p>
                  <p className="font-semibold">{selectedCandidate.age}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Gender</p>
                  <p className="font-semibold">{selectedCandidate.gender}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Symbol</p>
                  <p className="font-semibold">{selectedCandidate.symbol}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Qualification</p>
                  <p className="font-semibold">{selectedCandidate.qualification || "—"}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Votes</p>
                  <p className="font-semibold">{selectedCandidate.votes > 0 ? selectedCandidate.votes.toLocaleString() : "—"}</p>
                </div>
              </div>
              {selectedCandidate.address && (
                <div>
                  <p className="text-muted-foreground">Address</p>
                  <p className="font-semibold">{selectedCandidate.address}</p>
                </div>
              )}
              {selectedCandidate.status && (
                <div className="pt-2 border-t border-border">
                  <p className="text-congress-green font-semibold">
                    Status: {selectedCandidate.status}
                  </p>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Election;
