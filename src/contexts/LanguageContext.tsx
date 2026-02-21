import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "en" | "np";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};

const translations: Record<string, Record<Language, string>> = {
  // Navbar
  "nav.home": { en: "Home", np: "गृहपृष्ठ" },
  "nav.about": { en: "About", np: "परिचय" },
  "nav.election": { en: "Election", np: "निर्वाचन" },
  "nav.orgName": { en: "Nepali Janasamparka Samiti", np: "नेपाली जनसम्पर्क समिति" },
  "nav.orgNameSub": { en: "| Nepali Janasamparka Samiti", np: "| नेपाली जनसम्पर्क समिति" },

  // Index page
  "index.title": { en: "Nepali Janasamparka Samiti – Spain", np: "नेपाली जनसम्पर्क समिति – स्पेन" },
  "index.subtitle": { en: "नेपाली जनसम्पर्क समिति – स्पेन", np: "Nepali Janasamparka Samiti – Spain" },
  "index.tagline": { en: "A Committee of Nepali Congress (नेपाली काँग्रेस)", np: "नेपाली काँग्रेसको एक समिति" },
  "index.description": {
    en: "Nepalese People Co-ordination Committee, Spain — Uniting the Nepali diaspora in Spain through democratic values, cultural heritage, and community service under the banner of Nepali Congress.",
    np: "नेपाली जनसम्पर्क समिति, स्पेन — नेपाली काँग्रेसको ध्वजामा प्रजातान्त्रिक मूल्य, सांस्कृतिक सम्पदा र सामुदायिक सेवाको माध्यमबाट स्पेनमा बसोबास गर्ने नेपालीहरूलाई एकजुट गर्दै।"
  },
  "index.democracy": { en: "Democracy", np: "प्रजातन्त्र" },
  "index.democracyNp": { en: "प्रजातन्त्र", np: "Democracy" },
  "index.democracyDesc": {
    en: "Promoting democratic values and political participation among Nepali diaspora in Spain.",
    np: "स्पेनमा बसोबास गर्ने नेपालीहरूमा प्रजातान्त्रिक मूल्य र राजनीतिक सहभागिता प्रवर्द्धन गर्दै।"
  },
  "index.unity": { en: "Unity", np: "एकता" },
  "index.unityNp": { en: "एकता", np: "Unity" },
  "index.unityDesc": {
    en: "Building bridges between Nepali communities across Spain for collective strength.",
    np: "सामूहिक शक्तिका लागि स्पेनभरका नेपाली समुदायहरू बीच सेतु बनाउँदै।"
  },
  "index.service": { en: "Service", np: "सेवा" },
  "index.serviceNp": { en: "सेवा", np: "Service" },
  "index.serviceDesc": {
    en: "Dedicated to social welfare, cultural preservation, and community empowerment.",
    np: "सामाजिक कल्याण, सांस्कृतिक संरक्षण र सामुदायिक सशक्तिकरणमा समर्पित।"
  },

  // Footer
  "footer.orgName": { en: "नेपाली जनसम्पर्क समिति – स्पेन", np: "नेपाली जनसम्पर्क समिति – स्पेन" },
  "footer.orgNameEn": { en: "Nepalese People Co-ordination Committee, Spain", np: "नेपाली जनसम्पर्क समिति, स्पेन" },
  "footer.committee": { en: "A Committee of Nepali Congress (नेपाली काँग्रेस)", np: "नेपाली काँग्रेसको एक समिति" },
  "footer.copyright": { en: "Nepali Janasamparka Samiti – Spain. All rights reserved.", np: "नेपाली जनसम्पर्क समिति – स्पेन। सर्वाधिकार सुरक्षित।" },

  // About page
  "about.title": { en: "About Us", np: "हाम्रो बारेमा" },
  "about.titleNp": { en: "हाम्रो बारेमा", np: "About Us" },
  "about.whoWeAre": { en: "Who We Are", np: "हामी को हौं" },
  "about.whoWeAreP1": {
    en: "Nepali Janasamparka Samiti – Spain (नेपाली जनसम्पर्क समिति – स्पेन) is an official overseas committee of Nepali Congress (नेपाली काँग्रेस), the oldest democratic political party of Nepal, founded in 1947. We represent the Nepali diaspora living and working across Spain, serving as the bridge between the party leadership in Nepal and the growing Nepali community in the Iberian Peninsula.",
    np: "नेपाली जनसम्पर्क समिति – स्पेन नेपालको सबैभन्दा पुरानो प्रजातान्त्रिक राजनीतिक दल नेपाली काँग्रेसको एक आधिकारिक विदेशी समिति हो, जुन सन् १९४७ मा स्थापित भएको थियो। हामी स्पेनभर बसोबास गर्ने र काम गर्ने नेपाली प्रवासीहरूको प्रतिनिधित्व गर्छौं, नेपालको पार्टी नेतृत्व र इबेरियन प्रायद्वीपमा बढ्दो नेपाली समुदायबीचको पुलको रूपमा सेवा गर्दछौं।"
  },
  "about.whoWeAreP2": {
    en: "The committee was established to ensure that Nepali citizens abroad remain connected to the democratic process, have a voice in party decision-making, and can contribute to Nepal's development from overseas. We operate under the direct guidance and mandate of the Nepali Congress Central Committee.",
    np: "विदेशमा बसोबास गर्ने नेपाली नागरिकहरू प्रजातान्त्रिक प्रक्रियासँग जोडिएको रहन, पार्टी निर्णयमा आवाज राख्न सक्ने र विदेशबाट नेपालको विकासमा योगदान गर्न सक्ने सुनिश्चित गर्न यो समिति स्थापना गरिएको हो। हामी नेपाली काँग्रेस केन्द्रीय समितिको प्रत्यक्ष मार्गदर्शन र जनादेशमा सञ्चालन हुन्छौं।"
  },
  "about.mission": { en: "Our Mission & Objectives", np: "हाम्रो लक्ष्य र उद्देश्यहरू" },
  "about.mission1": {
    en: "Strengthen democratic values and political awareness among Nepali communities across Spain",
    np: "स्पेनभरका नेपाली समुदायहरूमा प्रजातान्त्रिक मूल्य र राजनीतिक चेतना बलियो बनाउने"
  },
  "about.mission2": {
    en: "Preserve, promote, and celebrate Nepali culture, language, festivals, and traditions in the diaspora",
    np: "प्रवासमा नेपाली संस्कृति, भाषा, चाडपर्व र परम्पराको संरक्षण, प्रवर्द्धन र उत्सव मनाउने"
  },
  "about.mission3": {
    en: "Coordinate with Nepali Congress headquarters and international committees for party activities and campaigns",
    np: "पार्टी गतिविधि र अभियानका लागि नेपाली काँग्रेस मुख्यालय र अन्तर्राष्ट्रिय समितिहरूसँग समन्वय गर्ने"
  },
  "about.mission4": {
    en: "Advocate for the rights, welfare, and legal protection of Nepali migrants in Spain",
    np: "स्पेनमा नेपाली आप्रवासीहरूको अधिकार, कल्याण र कानूनी संरक्षणको वकालत गर्ने"
  },
  "about.mission5": {
    en: "Foster Nepal-Spain diplomatic, cultural, and economic relations",
    np: "नेपाल-स्पेन कूटनीतिक, सांस्कृतिक र आर्थिक सम्बन्ध बढावा दिने"
  },
  "about.mission6": {
    en: "Organize community programs, cultural events, and political awareness campaigns",
    np: "सामुदायिक कार्यक्रम, सांस्कृतिक कार्यक्रम र राजनीतिक चेतना अभियान आयोजना गर्ने"
  },
  "about.mission7": {
    en: "Support and mobilize overseas Nepali voters for democratic elections",
    np: "प्रजातान्त्रिक निर्वाचनका लागि विदेशमा बसोबास गर्ने नेपाली मतदातालाई समर्थन र परिचालन गर्ने"
  },
  "about.mission8": {
    en: "Provide a platform for Nepali professionals, workers, and students in Spain to connect and support each other",
    np: "स्पेनमा नेपाली पेशेवर, कामदार र विद्यार्थीहरूलाई एकअर्कासँग जोडिन र सहयोग गर्न मञ्च प्रदान गर्ने"
  },
  "about.ncTitle": { en: "Nepali Congress (नेपाली काँग्रेस)", np: "नेपाली काँग्रेस" },
  "about.ncP1": {
    en: "Founded on 25 January 1947, Nepali Congress is Nepal's oldest democratic party, committed to democracy, social justice, nationalism, and sustainable development. The party follows the ideology of democratic socialism and has been the cornerstone of every major democratic movement in Nepal's history.",
    np: "२५ जनवरी १९४७ मा स्थापित नेपाली काँग्रेस नेपालको सबैभन्दा पुरानो प्रजातान्त्रिक दल हो, जो प्रजातन्त्र, सामाजिक न्याय, राष्ट्रियता र दिगो विकासप्रति प्रतिबद्ध छ। पार्टीले प्रजातान्त्रिक समाजवादको विचारधारा अनुसरण गर्छ र नेपालको इतिहासमा प्रत्येक प्रमुख प्रजातान्त्रिक आन्दोलनको आधारशिला रहेको छ।"
  },
  "about.keyMilestones": { en: "Key historical milestones:", np: "प्रमुख ऐतिहासिक उपलब्धिहरू:" },
  "about.milestone1": {
    en: "1951 Revolution: Led the armed revolution that overthrew the autocratic Rana regime and established democracy",
    np: "२००७ को क्रान्ति: निरंकुश राणा शासनलाई उखेल्ने सशस्त्र क्रान्तिको नेतृत्व गरी प्रजातन्त्र स्थापना गर्यो"
  },
  "about.milestone2": {
    en: "1959 Elections: Won Nepal's first democratic election; B.P. Koirala became the first democratically elected Prime Minister",
    np: "२०१५ को निर्वाचन: नेपालको पहिलो प्रजातान्त्रिक निर्वाचन जित्यो; बि.पी. कोइराला पहिलो प्रजातान्त्रिक रूपमा निर्वाचित प्रधानमन्त्री बने"
  },
  "about.milestone3": {
    en: "1990 People's Movement (Jana Andolan I): Spearheaded the movement that restored multiparty democracy after 30 years of Panchayat rule",
    np: "२०४६ को जनआन्दोलन (जनआन्दोलन I): ३० वर्षको पञ्चायत शासनपछि बहुदलीय प्रजातन्त्र पुनर्स्थापना गर्ने आन्दोलनको नेतृत्व गर्यो"
  },
  "about.milestone4": {
    en: "2006 Democratic Restoration (Jana Andolan II): Played a pivotal role in the movement that ended the king's direct rule and paved the way for a federal democratic republic",
    np: "२०६२/६३ को जनआन्दोलन II: राजाको प्रत्यक्ष शासन अन्त्य गर्ने र संघीय लोकतान्त्रिक गणतन्त्रको बाटो खोल्ने आन्दोलनमा निर्णायक भूमिका खेल्यो"
  },
  "about.milestone5": {
    en: "2015 Constitution: Instrumental in drafting and promulgating Nepal's current constitution establishing a federal democratic republic",
    np: "२०७२ को संविधान: संघीय लोकतान्त्रिक गणतन्त्र स्थापना गर्ने नेपालको वर्तमान संविधान मस्यौदा र जारी गर्नमा महत्त्वपूर्ण भूमिका"
  },
  "about.ncP2": {
    en: "The party's election symbol is the Tree (रुख), symbolizing growth, shelter, and prosperity. Under the leadership of party presidents like B.P. Koirala, Girija Prasad Koirala, and Sher Bahadur Deuba, Nepali Congress has consistently championed civil liberties, press freedom, and inclusive governance. Our committee in Spain proudly carries forward these values among the Nepali diaspora.",
    np: "पार्टीको चुनाव चिन्ह रुख हो, जसले वृद्धि, आश्रय र समृद्धिको प्रतीक हो। बि.पी. कोइराला, गिरिजाप्रसाद कोइराला र शेरबहादुर देउवा जस्ता पार्टी अध्यक्षहरूको नेतृत्वमा नेपाली काँग्रेसले नागरिक स्वतन्त्रता, प्रेस स्वतन्त्रता र समावेशी शासनको लगातार वकालत गरेको छ। स्पेनमा हाम्रो समितिले नेपाली प्रवासीहरूमा यी मूल्यहरू गर्वका साथ अगाडि बढाउँछ।"
  },
  "about.activities": { en: "Our Activities in Spain", np: "स्पेनमा हाम्रा गतिविधिहरू" },
  "about.activitiesIntro": {
    en: "Nepali Janasamparka Samiti – Spain regularly organizes and participates in:",
    np: "नेपाली जनसम्पर्क समिति – स्पेनले नियमित रूपमा निम्न गतिविधिहरू आयोजना र सहभागी गर्छ:"
  },
  "about.activity1": {
    en: "Cultural celebrations including Dashain, Tihar, Teej, and Nepal New Year",
    np: "दशैं, तिहार, तीज र नेपाल नयाँ वर्ष लगायतका सांस्कृतिक उत्सवहरू"
  },
  "about.activity2": {
    en: "Political awareness programs and party membership drives",
    np: "राजनीतिक चेतना कार्यक्रम र पार्टी सदस्यता अभियान"
  },
  "about.activity3": {
    en: "Seminars and discussions on Nepal's democratic progress and challenges",
    np: "नेपालको प्रजातान्त्रिक प्रगति र चुनौतीहरूमा गोष्ठी र छलफल"
  },
  "about.activity4": {
    en: "Collaboration with other Nepali organizations and communities in Europe",
    np: "युरोपमा अन्य नेपाली संस्था र समुदायहरूसँग सहकार्य"
  },
  "about.activity5": {
    en: "Support services for newly arrived Nepali migrants in Spain",
    np: "स्पेनमा नयाँ आएका नेपाली आप्रवासीहरूका लागि सहयोग सेवा"
  },
  "about.activity6": {
    en: "Coordination with the Embassy of Nepal in Spain for community welfare",
    np: "सामुदायिक कल्याणका लागि स्पेनमा नेपाल दूतावाससँग समन्वय"
  },
  "about.coreValues": { en: "Core Values", np: "मूल मान्यताहरू" },
  "about.democracy": { en: "Democracy", np: "प्रजातन्त्र" },
  "about.democracyNp": { en: "प्रजातन्त्र", np: "Democracy" },
  "about.democracyDesc": { en: "People's sovereignty and civil liberties", np: "जनसार्वभौमसत्ता र नागरिक स्वतन्त्रता" },
  "about.socialJustice": { en: "Social Justice", np: "सामाजिक न्याय" },
  "about.socialJusticeNp": { en: "सामाजिक न्याय", np: "Social Justice" },
  "about.socialJusticeDesc": { en: "Equal rights and opportunities for all", np: "सबैका लागि समान अधिकार र अवसर" },
  "about.nationalism": { en: "Nationalism", np: "राष्ट्रियता" },
  "about.nationalismNp": { en: "राष्ट्रियता", np: "Nationalism" },
  "about.nationalismDesc": { en: "Love for Nepal and its heritage", np: "नेपाल र यसको सम्पदाप्रति प्रेम" },

  // Election page
  "election.supportTitle": { en: "Support Nepali Congress", np: "नेपाली काँग्रेसलाई समर्थन गर्नुहोस्" },
  "election.supportSubtitle": { en: "नेपाली काँग्रेसलाई समर्थन गर्नुहोस्", np: "Support Nepali Congress" },
  "election.supportDesc": {
    en: "Nepali Congress (नेपाली काँग्रेस) has been the pillar of democracy in Nepal since 1947. Support the party that stands for freedom, justice, and prosperity for all Nepali people.",
    np: "नेपाली काँग्रेस सन् १९४७ देखि नेपालमा प्रजातन्त्रको स्तम्भ रहेको छ। स्वतन्त्रता, न्याय र सबै नेपालीको समृद्धिका लागि खडा हुने पार्टीलाई समर्थन गर्नुहोस्।"
  },
  "election.democracy": { en: "Democracy", np: "प्रजातन्त्र" },
  "election.democracyNp": { en: "प्रजातन्त्र", np: "Democracy" },
  "election.democracyDesc": {
    en: "The foundation of Nepal's political progress and people's sovereignty.",
    np: "नेपालको राजनीतिक प्रगति र जनसार्वभौमसत्ताको आधार।"
  },
  "election.socialJustice": { en: "Social Justice", np: "सामाजिक न्याय" },
  "election.socialJusticeNp": { en: "सामाजिक न्याय", np: "Social Justice" },
  "election.socialJusticeDesc": {
    en: "Equal rights, opportunities, and dignity for every citizen of Nepal.",
    np: "नेपालका हरेक नागरिकका लागि समान अधिकार, अवसर र मर्यादा।"
  },
  "election.development": { en: "Development", np: "विकास" },
  "election.developmentNp": { en: "विकास", np: "Development" },
  "election.developmentDesc": {
    en: "Economic growth and modernization for a prosperous Nepal.",
    np: "समृद्ध नेपालका लागि आर्थिक वृद्धि र आधुनिकीकरण।"
  },
  "election.candidatesTitle": { en: "Nepali Congress Election Candidates 2082", np: "नेपाली काँग्रेसका निर्वाचन उम्मेदवारहरू २०८२" },
  "election.candidatesSubtitle": { en: "नेपाली काँग्रेसका निर्वाचन उम्मेदवारहरू २०८२", np: "Nepali Congress Election Candidates 2082" },
  "election.mapInstruction": {
    en: "Click on a province to see Nepali Congress candidates from that region",
    np: "त्यस क्षेत्रका नेपाली काँग्रेस उम्मेदवारहरू हेर्न प्रदेशमा क्लिक गर्नुहोस्"
  },
  "election.showAll": { en: "Show All Candidates", np: "सबै उम्मेदवारहरू देखाउनुहोस्" },
  "election.clearSelection": { en: "Clear Selection", np: "छनोट हटाउनुहोस्" },
  "election.loading": { en: "Loading election candidates from Election Commission...", np: "निर्वाचन आयोगबाट उम्मेदवारहरू लोड हुँदैछ..." },
  "election.retry": { en: "Retry", np: "पुन: प्रयास" },
  "election.selectPrompt": {
    en: 'Select a province on the map or click "Show All Candidates" to view the list.',
    np: 'सूची हेर्न नक्सामा प्रदेश छान्नुहोस् वा "सबै उम्मेदवारहरू देखाउनुहोस्" मा क्लिक गर्नुहोस्।'
  },
  "election.allProvinces": { en: "All Provinces", np: "सबै प्रदेश" },
  "election.candidate": { en: "candidate", np: "उम्मेदवार" },
  "election.candidates": { en: "candidates", np: "उम्मेदवारहरू" },
  "election.ncCandidate": { en: "Nepali Congress", np: "नेपाली काँग्रेस" },
  "election.noCandidates": { en: "No Nepali Congress candidates found", np: "नेपाली काँग्रेसका उम्मेदवार फेला परेनन्" },
  "election.in": { en: "in", np: "मा" },
  "election.constituency": { en: "Constituency", np: "निर्वाचन क्षेत्र" },
  "election.votes": { en: "votes", np: "मत" },
  "election.source": { en: "Source", np: "स्रोत" },
  "election.district": { en: "District", np: "जिल्ला" },
  "election.province": { en: "Province", np: "प्रदेश" },
  "election.age": { en: "Age", np: "उमेर" },
  "election.gender": { en: "Gender", np: "लिङ्ग" },
  "election.symbol": { en: "Symbol", np: "चिन्ह" },
  "election.qualification": { en: "Qualification", np: "योग्यता" },
  "election.address": { en: "Address", np: "ठेगाना" },
  "election.status": { en: "Status", np: "स्थिति" },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[key]?.[language] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
