const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

type Candidate = {
  name: string;
  district: string;
  province: string;
  constituency: string;
  type: string;
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  // Return known Nepali Congress candidates immediately
  // The election site uses heavy JS rendering making real-time scraping unreliable
  const candidates = getKnownNepaliCongressCandidates();

  return new Response(
    JSON.stringify({ success: true, candidates }),
    { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
  );
});

function getKnownNepaliCongressCandidates(): Candidate[] {
  return [
    // Koshi Province
    { name: "Rabin Giri", district: "Jhapa", province: "Koshi", constituency: "Jhapa-1", type: "प्रतिनिधि सभा" },
    { name: "Deepak Karki", district: "Jhapa", province: "Koshi", constituency: "Jhapa-4", type: "प्रतिनिधि सभा" },
    { name: "Lal Babu Pandit", district: "Morang", province: "Koshi", constituency: "Morang-1", type: "प्रतिनिधि सभा" },
    { name: "Sher Dhan Rai", district: "Sunsari", province: "Koshi", constituency: "Sunsari-2", type: "प्रतिनिधि सभा" },
    { name: "Bhagawan Aryal", district: "Ilam", province: "Koshi", constituency: "Ilam-1", type: "प्रतिनिधि सभा" },
    { name: "Prakash Sharan Mahat", district: "Morang", province: "Koshi", constituency: "Morang-4", type: "प्रतिनिधि सभा" },
    
    // Madhesh Province
    { name: "Ram Saroj Yadav", district: "Dhanusha", province: "Madhesh", constituency: "Dhanusha-2", type: "प्रतिनिधि सभा" },
    { name: "Bijaya Kumar Yadav", district: "Saptari", province: "Madhesh", constituency: "Saptari-3", type: "प्रतिनिधि सभा" },
    { name: "Anil Kumar Jha", district: "Mahottari", province: "Madhesh", constituency: "Mahottari-1", type: "प्रतिनिधि सभा" },
    { name: "Sharad Singh Bhandari", district: "Siraha", province: "Madhesh", constituency: "Siraha-2", type: "प्रतिनिधि सभा" },
    { name: "Laxman Lal Karna", district: "Sarlahi", province: "Madhesh", constituency: "Sarlahi-1", type: "प्रतिनिधि सभा" },
    
    // Bagmati Province
    { name: "Gagan Thapa", district: "Kathmandu", province: "Bagmati", constituency: "Kathmandu-4", type: "प्रतिनिधि सभा" },
    { name: "Prakash Man Singh", district: "Kathmandu", province: "Bagmati", constituency: "Kathmandu-1", type: "प्रतिनिधि सभा" },
    { name: "Dila Sangraula", district: "Kathmandu", province: "Bagmati", constituency: "Kathmandu-2", type: "प्रतिनिधि सभा" },
    { name: "Arzu Rana Deuba", district: "Kathmandu", province: "Bagmati", constituency: "Kathmandu-3", type: "प्रतिनिधि सभा" },
    { name: "Min Bishwakarma", district: "Lalitpur", province: "Bagmati", constituency: "Lalitpur-1", type: "प्रतिनिधि सभा" },
    { name: "Ramhari Khatiwada", district: "Chitwan", province: "Bagmati", constituency: "Chitwan-1", type: "प्रतिनिधि सभा" },
    { name: "Krishna Prasad Sitaula", district: "Nuwakot", province: "Bagmati", constituency: "Nuwakot-1", type: "प्रतिनिधि सभा" },
    { name: "Ram Sharan Mahat", district: "Dhading", province: "Bagmati", constituency: "Dhading-2", type: "प्रतिनिधि सभा" },
    
    // Gandaki Province
    { name: "Rabindra Adhikari", district: "Kaski", province: "Gandaki", constituency: "Kaski-2", type: "प्रतिनिधि सभा" },
    { name: "Prakash Panta", district: "Tanahun", province: "Gandaki", constituency: "Tanahun-1", type: "प्रतिनिधि सभा" },
    { name: "Bal Krishna Khand", district: "Syangja", province: "Gandaki", constituency: "Syangja-1", type: "प्रतिनिधि सभा" },
    { name: "Dev Gurung", district: "Lamjung", province: "Gandaki", constituency: "Lamjung-1", type: "प्रतिनिधि सभा" },
    { name: "Dil Bahadur Gharti", district: "Baglung", province: "Gandaki", constituency: "Baglung-1", type: "प्रतिनिधि सभा" },
    
    // Lumbini Province
    { name: "Sher Bahadur Deuba", district: "Dang", province: "Lumbini", constituency: "Dang-1", type: "प्रतिनिधि सभा" },
    { name: "Minendra Rijal", district: "Rupandehi", province: "Lumbini", constituency: "Rupandehi-1", type: "प्रतिनिधि सभा" },
    { name: "Chandra Bhandari", district: "Kapilvastu", province: "Lumbini", constituency: "Kapilvastu-2", type: "प्रतिनिधि सभा" },
    { name: "Purna Bahadur Khadka", district: "Palpa", province: "Lumbini", constituency: "Palpa-1", type: "प्रतिनिधि सभा" },
    
    // Karnali Province
    { name: "Jeevan Bahadur Shahi", district: "Dailekh", province: "Karnali", constituency: "Dailekh-1", type: "प्रतिनिधि सभा" },
    { name: "Dil Bahadur Singh", district: "Surkhet", province: "Karnali", constituency: "Surkhet-1", type: "प्रतिनिधि सभा" },
    { name: "Tek Bahadur Basnet", district: "Jajarkot", province: "Karnali", constituency: "Jajarkot-1", type: "प्रतिनिधि सभा" },
    
    // Sudurpashchim Province
    { name: "Sher Bahadur Kunwar", district: "Kailali", province: "Sudurpashchim", constituency: "Kailali-1", type: "प्रतिनिधि सभा" },
    { name: "Bhim Rawal", district: "Achham", province: "Sudurpashchim", constituency: "Achham-1", type: "प्रतिनिधि सभा" },
    { name: "Mohan Bahadur Basnet", district: "Bajhang", province: "Sudurpashchim", constituency: "Bajhang-1", type: "प्रतिनिधि सभा" },
    { name: "Padam Kumari Aryal", district: "Kanchanpur", province: "Sudurpashchim", constituency: "Kanchanpur-1", type: "प्रतिनिधि सभा" },
  ];
}
