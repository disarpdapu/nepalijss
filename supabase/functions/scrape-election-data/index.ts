const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Fetch election data from the official Nepal Election Commission
    const response = await fetch(
      'https://result.election.gov.np/JSONFiles/ElectionResultCentral2082.txt'
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch election data: ${response.status}`);
    }

    const allCandidates = await response.json();

    // Filter for Nepali Congress candidates only
    const ncCandidates = allCandidates
      .filter((c: any) => c.PoliticalPartyName === 'नेपाली काँग्रेस')
      .map((c: any) => ({
        id: c.CandidateID,
        name: c.CandidateName,
        age: c.AGE_YR,
        gender: c.Gender,
        district: c.DistrictName,
        province: c.StateName,
        provinceId: c.STATE_ID,
        constituency: c.ConstName,
        constituencyId: c.SCConstID,
        symbol: c.SymbolName,
        votes: c.TotalVoteReceived,
        status: c.E_STATUS,
        qualification: c.QUALIFICATION,
        address: c.ADDRESS,
        fatherName: c.FATHER_NAME,
        spouseName: c.SPOUCE_NAME,
      }));

    return new Response(
      JSON.stringify({ success: true, candidates: ncCandidates, total: ncCandidates.length }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    console.error('Error fetching election data:', err);

    return new Response(
      JSON.stringify({ success: false, error: String(err), candidates: [] }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    );
  }
});
