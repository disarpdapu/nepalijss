import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import symbolSvg from "@/assets/symbol.svg";
import { supabase } from "@/integrations/supabase/client";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";

const CongressStar = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
  </svg>
);

type Candidate = {
  name: string;
  district: string;
  province: string;
  constituency: string;
  type: string;
};

// Nepal provinces with approximate SVG positions for map
const provincePositions: Record<string, { x: number; y: number; label: string }> = {
  "Province No. 1": { x: 370, y: 120, label: "प्रदेश नं. १" },
  "Koshi": { x: 370, y: 120, label: "कोशी" },
  "Madhesh": { x: 300, y: 200, label: "मधेश" },
  "Province No. 2": { x: 300, y: 200, label: "प्रदेश नं. २" },
  "Bagmati": { x: 250, y: 130, label: "बागमती" },
  "Province No. 3": { x: 250, y: 130, label: "प्रदेश नं. ३" },
  "Gandaki": { x: 190, y: 100, label: "गण्डकी" },
  "Province No. 4": { x: 190, y: 100, label: "प्रदेश नं. ४" },
  "Lumbini": { x: 140, y: 160, label: "लुम्बिनी" },
  "Province No. 5": { x: 140, y: 160, label: "प्रदेश नं. ५" },
  "Karnali": { x: 100, y: 80, label: "कर्णाली" },
  "Province No. 6": { x: 100, y: 80, label: "प्रदेश नं. ६" },
  "Sudurpashchim": { x: 40, y: 100, label: "सुदूरपश्चिम" },
  "Province No. 7": { x: 40, y: 100, label: "प्रदेश नं. ७" },
};

const Election = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
  const [hoveredProvince, setHoveredProvince] = useState<string | null>(null);

  useEffect(() => {
    fetchCandidates();
  }, []);

  const fetchCandidates = async () => {
    try {
      setLoading(true);
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

  const groupedByProvince = candidates.reduce((acc, c) => {
    const key = c.province || "Unknown";
    if (!acc[key]) acc[key] = [];
    acc[key].push(c);
    return acc;
  }, {} as Record<string, Candidate[]>);

  const filteredCandidates = selectedProvince
    ? groupedByProvince[selectedProvince] || []
    : candidates;

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
            Together, we build a stronger, democratic Nepal.
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

        {/* Nepal Map Section */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-congress-blue text-center mb-2">
            Nepali Congress Election Candidates
          </h2>
          <p className="font-devanagari text-congress-red text-center mb-8">
            नेपाली काँग्रेसका निर्वाचन उम्मेदवारहरू
          </p>

          {/* Interactive Nepal Map */}
          <div className="bg-card border border-border rounded-lg p-6 mb-8">
            <p className="text-center text-sm text-muted-foreground font-body mb-4">
              Click on a province to see candidates from that region
            </p>
            <TooltipProvider>
              <svg viewBox="0 0 450 260" className="w-full max-w-2xl mx-auto">
                {/* Simplified Nepal outline */}
                <path
                  d="M10 130 C15 100 30 70 60 55 C90 40 120 35 150 40 C180 45 200 55 220 65 C240 75 260 90 280 95 C300 100 320 100 340 105 C360 110 380 120 400 135 C410 145 415 155 410 170 C405 185 395 195 380 205 C365 210 345 212 325 213 C305 214 285 212 265 210 C245 208 225 208 205 210 C185 212 165 214 145 213 C125 212 105 208 90 200 C75 192 65 180 55 168 C45 156 35 145 25 138 C15 133 10 132 10 130 Z"
                  fill="hsl(var(--congress-green) / 0.15)"
                  stroke="hsl(var(--congress-green))"
                  strokeWidth="1.5"
                  className="transition-colors"
                />
                {/* Province markers */}
                {Object.entries(provincePositions).map(([name, pos]) => {
                  const count = groupedByProvince[name]?.length || 0;
                  if (count === 0 && !["Koshi", "Madhesh", "Bagmati", "Gandaki", "Lumbini", "Karnali", "Sudurpashchim"].includes(name)) return null;
                  
                  const isHovered = hoveredProvince === name;
                  const isSelected = selectedProvince === name;

                  return (
                    <Tooltip key={name}>
                      <TooltipTrigger asChild>
                        <g
                          className="cursor-pointer"
                          onMouseEnter={() => setHoveredProvince(name)}
                          onMouseLeave={() => setHoveredProvince(null)}
                          onClick={() => setSelectedProvince(selectedProvince === name ? null : name)}
                        >
                          <circle
                            cx={pos.x}
                            cy={pos.y}
                            r={isHovered || isSelected ? 14 : 10}
                            fill={isSelected ? "hsl(var(--congress-red))" : isHovered ? "hsl(var(--congress-blue))" : "hsl(var(--congress-green))"}
                            className="transition-all duration-200"
                            opacity={0.9}
                          />
                          <text
                            x={pos.x}
                            y={pos.y + 4}
                            textAnchor="middle"
                            fill="white"
                            fontSize="8"
                            fontWeight="bold"
                          >
                            {count}
                          </text>
                        </g>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="font-semibold">{name}</p>
                        <p className="font-devanagari text-xs">{pos.label}</p>
                        <p className="text-xs">{count} candidate{count !== 1 ? "s" : ""}</p>
                      </TooltipContent>
                    </Tooltip>
                  );
                })}
              </svg>
            </TooltipProvider>
            {selectedProvince && (
              <div className="text-center mt-4">
                <button
                  onClick={() => setSelectedProvince(null)}
                  className="text-sm text-congress-blue underline font-body"
                >
                  Show all provinces
                </button>
              </div>
            )}
          </div>

          {/* Candidates List */}
          {loading ? (
            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <div className="animate-spin w-8 h-8 border-4 border-congress-green border-t-transparent rounded-full mx-auto mb-4" />
              <p className="text-muted-foreground font-body">Loading election candidates...</p>
            </div>
          ) : error ? (
            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <p className="text-muted-foreground font-body">{error}</p>
              <button onClick={fetchCandidates} className="mt-4 text-congress-blue underline font-body text-sm">
                Retry
              </button>
            </div>
          ) : filteredCandidates.length > 0 ? (
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground font-body text-center mb-4">
                {selectedProvince ? `${selectedProvince} — ` : ""}
                {filteredCandidates.length} Nepali Congress candidate{filteredCandidates.length !== 1 ? "s" : ""}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {filteredCandidates.map((c, i) => (
                  <Card key={i} className="border-l-4 border-l-congress-green">
                    <CardContent className="p-4">
                      <p className="font-display font-bold text-congress-blue">{c.name}</p>
                      <p className="text-sm text-muted-foreground font-body">
                        {c.district} — {c.constituency}
                      </p>
                      <p className="text-xs text-congress-green font-body mt-1">{c.type}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <p className="text-muted-foreground font-body">
                No Nepali Congress candidates found{selectedProvince ? ` in ${selectedProvince}` : ""}.
              </p>
            </div>
          )}

          <p className="text-xs text-muted-foreground mt-4 text-center font-body">
            Source: <a href="https://result.election.gov.np/" target="_blank" rel="noopener noreferrer" className="text-congress-blue underline">result.election.gov.np</a>
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Election;
