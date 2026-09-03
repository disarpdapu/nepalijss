export type Language = "en" | "np";

export const translations: Record<string, Record<Language, string>> = {
  // Navigation
  "nav.home": { en: "Home", np: "गृहपृष्ठ" },
  "nav.about": { en: "About us", np: "परिचय" },
  "nav.orgName": { en: "नेपाली जनसम्पर्क समिति", np: "नेपाली जनसम्पर्क समिति" },
  "nav.orgPlace": { en: "Spain", np: "स्पेन" },
  "nav.switchTo": { en: "नेपाली", np: "English" },
  "nav.switchLabel": { en: "Switch language to Nepali", np: "भाषा अंग्रेजीमा बदल्नुहोस्" },
  "nav.menu": { en: "Menu", np: "मेनु" },
  "nav.close": { en: "Close menu", np: "मेनु बन्द गर्नुहोस्" },
  "nav.skip": { en: "Skip to content", np: "सामग्रीमा जानुहोस्" },
  "nav.primary": { en: "Primary", np: "मुख्य नेभिगेसन" },

  // Home
  "index.orgName": { en: "नेपाली जनसम्पर्क समिति", np: "नेपाली जनसम्पर्क समिति" },
  "index.orgPlace": { en: "स्पेन", np: "स्पेन" },
  "index.orgLatin": { en: "Nepali Janasamparka Samiti – Spain", np: "Nepali Janasamparka Samiti – Spain" },
  "index.tagline": { en: "Bringing Nepali people together across Spain", np: "स्पेनभरका नेपालीहरूलाई एकताबद्ध गर्दै" },
  "index.description": {
    en: "We organise Dashain, Tihar, Teej, and Nepali New Year celebrations that bring the community together. We also take part in meetings hosted by NRNA.",
    np: "हामी समुदायलाई एकताबद्ध गर्ने दशैं, तिहार, तीज र नेपाली नयाँ वर्षका उत्सवहरू आयोजना गर्छौं। साथै, एनआरएनएले आयोजना गर्ने बैठकहरूमा पनि सहभागी हुन्छौं।"
  },
  "index.aboutCta": { en: "Read about the committee", np: "समितिको बारेमा पढ्नुहोस्" },
  "index.emblemAlt": { en: "Emblem of Nepali Janasamparka Samiti, Spain", np: "नेपाली जनसम्पर्क समिति, स्पेनको प्रतीक" },
  "index.flagAlt": { en: "Flag of Nepali Congress: red, white and red bands with four stars", np: "नेपाली काँग्रेसको झन्डा: रातो, सेतो र रातो पट्टी र चार तारा" },
  "index.flagMeaning": {
    en: "Red for revolution, white for the peace that follows, four stars for the four fundamental freedoms.",
    np: "रातो क्रान्तिको, सेतो त्यसपछिको शान्तिको, र चार तारा चार आधारभूत स्वतन्त्रताका प्रतीक।"
  },
  "index.valuesTitle": { en: "How we bring people together", np: "हामी कसरी समुदायलाई जोड्छौं" },
  "index.culture": { en: "Culture", np: "संस्कृति" },
  "index.cultureNp": { en: "संस्कृति", np: "Culture" },
  "index.cultureDesc": {
    en: "Celebrating Dashain, Tihar, Teej, and Nepali New Year together in Spain.",
    np: "स्पेनमा दशैं, तिहार, तीज र नेपाली नयाँ वर्ष सँगै मनाउँदै।"
  },
  "index.unity": { en: "Unity", np: "एकता" },
  "index.unityNp": { en: "एकता", np: "Unity" },
  "index.unityDesc": {
    en: "Creating welcoming occasions where Nepali people across Spain can meet and celebrate together.",
    np: "स्पेनभरका नेपालीहरू भेट्न र सँगै उत्सव मनाउन सक्ने आत्मीय अवसरहरू सिर्जना गर्दै।"
  },
  "index.participation": { en: "Participation", np: "सहभागिता" },
  "index.participationNp": { en: "सहभागिता", np: "Participation" },
  "index.participationDesc": {
    en: "Joining meetings hosted by NRNA to stay connected with the wider Nepali community.",
    np: "व्यापक नेपाली समुदायसँग जोडिइरहन एनआरएनएले आयोजना गर्ने बैठकहरूमा सहभागी हुँदै।"
  },
  "index.workTitle": { en: "Celebrating together in Spain", np: "स्पेनमा सँगै उत्सव मनाउँदै" },
  "index.workIntro": {
    en: "Our calendar centres on the festivals, gatherings, and shared moments that make Spain feel more like home.",
    np: "हाम्रो वार्षिक कार्यतालिका चाडपर्व, भेला र साझा क्षणहरूमा केन्द्रित छ, जसले स्पेनलाई घरजस्तै आत्मीय बनाउँछ।"
  },
  "index.workMore": { en: "Explore our community focus", np: "हाम्रो सामुदायिक केन्द्रबिन्दु हेर्नुहोस्" },
  "index.partyTitle": { en: "Part of Nepali Congress", np: "नेपाली काँग्रेसको अंग" },
  "index.partyText": {
    en: "Nepali Congress is Nepal’s oldest democratic party, founded on 25 January 1947. Its tree emblem represents growth, shelter, and prosperity. The committee in Spain works under the mandate of the party’s Central Committee.",
    np: "नेपाली काँग्रेस २५ जनवरी १९४७ मा स्थापित नेपालको सबैभन्दा पुरानो प्रजातान्त्रिक दल हो। यसको रुख प्रतीकले वृद्धि, आश्रय र समृद्धि जनाउँछ। स्पेनको समिति पार्टीको केन्द्रीय समितिको जनादेशमा काम गर्छ।"
  },
  "index.partyMore": { en: "History of the party", np: "पार्टीको इतिहास" },

  // Footer
  "footer.orgName": { en: "नेपाली जनसम्पर्क समिति – स्पेन", np: "नेपाली जनसम्पर्क समिति – स्पेन" },
  "footer.orgNameEn": { en: "Nepalese People Co-ordination Committee, Spain", np: "Nepalese People Co-ordination Committee, Spain" },
  "footer.committee": { en: "An overseas committee of Nepali Congress", np: "नेपाली काँग्रेसको विदेशी समिति" },
  "footer.symbolAlt": { en: "Tree emblem of Nepali Congress", np: "नेपाली काँग्रेसको रुख प्रतीक" },
  "footer.flagAlt": { en: "Flag of Nepal", np: "नेपालको झन्डा" },
  "footer.navigate": { en: "Pages", np: "पृष्ठहरू" },
  "footer.copyright": { en: "Nepali Janasamparka Samiti – Spain. All rights reserved.", np: "नेपाली जनसम्पर्क समिति – स्पेन। सर्वाधिकार सुरक्षित।" },

  // Not found
  "notFound.title": { en: "This page does not exist", np: "यो पृष्ठ अस्तित्वमा छैन" },
  "notFound.text": { en: "The address may be out of date. Everything the committee publishes is reachable from the home page.", np: "ठेगाना पुरानो भएको हुन सक्छ। समितिले प्रकाशित गर्ने सबै सामग्री गृहपृष्ठबाट पहुँचयोग्य छ।" },
  "notFound.cta": { en: "Go to the home page", np: "गृहपृष्ठमा जानुहोस्" },

  // About
  "about.title": { en: "About the committee", np: "समितिको परिचय" },
  "about.titleNp": { en: "हाम्रो बारेमा", np: "About us" },
  "about.lead": {
    en: "Meet the committee, learn about our community focus, and explore our connection with Nepali Congress.",
    np: "समितिलाई चिन्नुहोस्, हाम्रो सामुदायिक केन्द्रबिन्दुबारे जान्नुहोस् र नेपाली काँग्रेससँगको हाम्रो सम्बन्ध बुझ्नुहोस्।"
  },
  "about.contents": { en: "On this page", np: "यस पृष्ठमा" },
  "about.whoWeAre": { en: "Who we are", np: "हामी को हौं" },
  "about.whoWeAreP1": {
    en: "Nepali Janasamparka Samiti – Spain (नेपाली जनसम्पर्क समिति – स्पेन) is an official overseas committee of Nepali Congress (नेपाली काँग्रेस), the oldest democratic political party of Nepal, founded in 1947. We represent the Nepali diaspora living and working across Spain, serving as the bridge between the party leadership in Nepal and the growing Nepali community in the Iberian Peninsula.",
    np: "नेपाली जनसम्पर्क समिति – स्पेन नेपालको सबैभन्दा पुरानो प्रजातान्त्रिक राजनीतिक दल नेपाली काँग्रेसको एक आधिकारिक विदेशी समिति हो, जुन सन् १९४७ मा स्थापित भएको थियो। हामी स्पेनभर बसोबास गर्ने र काम गर्ने नेपाली प्रवासीहरूको प्रतिनिधित्व गर्छौं, नेपालको पार्टी नेतृत्व र इबेरियन प्रायद्वीपमा बढ्दो नेपाली समुदायबीचको पुलको रूपमा सेवा गर्दछौं।"
  },
  "about.whoWeAreP2": {
    en: "In Spain, our work centres on organising Nepali festival celebrations, creating occasions for people to meet and celebrate together, and participating in meetings hosted by NRNA. We operate under the guidance and mandate of the Nepali Congress Central Committee.",
    np: "स्पेनमा हाम्रो काम नेपाली चाडपर्वका उत्सवहरू आयोजना गर्ने, मानिसहरूलाई भेट्न र सँगै उत्सव मनाउन अवसर सिर्जना गर्ने तथा एनआरएनएले आयोजना गर्ने बैठकहरूमा सहभागी हुने विषयमा केन्द्रित छ। हामी नेपाली काँग्रेस केन्द्रीय समितिको मार्गदर्शन र जनादेशमा सञ्चालन हुन्छौं।"
  },
  "about.mission": { en: "Our community focus", np: "हाम्रो सामुदायिक केन्द्रबिन्दु" },
  "about.mission1": {
    en: "Organise celebrations for Dashain, Tihar, Teej, and Nepali New Year",
    np: "दशैं, तिहार, तीज र नेपाली नयाँ वर्षका उत्सवहरू आयोजना गर्ने"
  },
  "about.mission2": {
    en: "Bring Nepali people across Spain together through welcoming shared occasions",
    np: "आत्मीय साझा अवसरहरूमार्फत स्पेनभरका नेपालीहरूलाई एकताबद्ध गर्ने"
  },
  "about.mission3": {
    en: "Participate in meetings hosted by NRNA and stay connected with the wider Nepali community",
    np: "एनआरएनएले आयोजना गर्ने बैठकहरूमा सहभागी भई व्यापक नेपाली समुदायसँग जोडिइरहने"
  },
  "about.ncTitle": { en: "Nepali Congress", np: "नेपाली काँग्रेस" },
  "about.ncP1": {
    en: "Founded on 25 January 1947, Nepali Congress is Nepal’s oldest democratic party, committed to democracy, social justice, nationalism, and sustainable development. The party follows the ideology of democratic socialism and has been the cornerstone of every major democratic movement in Nepal’s history.",
    np: "२५ जनवरी १९४७ मा स्थापित नेपाली काँग्रेस नेपालको सबैभन्दा पुरानो प्रजातान्त्रिक दल हो, जो प्रजातन्त्र, सामाजिक न्याय, राष्ट्रियता र दिगो विकासप्रति प्रतिबद्ध छ। पार्टीले प्रजातान्त्रिक समाजवादको विचारधारा अनुसरण गर्छ र नेपालको इतिहासमा प्रत्येक प्रमुख प्रजातान्त्रिक आन्दोलनको आधारशिला रहेको छ।"
  },
  "about.keyMilestones": { en: "Milestones", np: "प्रमुख ऐतिहासिक उपलब्धिहरू" },
  "about.milestone1Year": { en: "1951", np: "२००७" },
  "about.milestone1Label": { en: "Revolution", np: "क्रान्ति" },
  "about.milestone1": {
    en: "Led the armed revolution that overthrew the autocratic Rana regime and established democracy",
    np: "निरंकुश राणा शासनलाई उखेल्ने सशस्त्र क्रान्तिको नेतृत्व गरी प्रजातन्त्र स्थापना गर्‍यो"
  },
  "about.milestone2Year": { en: "1959", np: "२०१५" },
  "about.milestone2Label": { en: "Historic mandate", np: "ऐतिहासिक जनादेश" },
  "about.milestone2": {
    en: "Earned a historic democratic mandate, leading to B.P. Koirala serving as Nepal’s first democratic Prime Minister",
    np: "ऐतिहासिक प्रजातान्त्रिक जनादेश प्राप्त गर्‍यो र बि.पी. कोइरालाले नेपालको पहिलो प्रजातान्त्रिक प्रधानमन्त्रीका रूपमा नेतृत्व गरे"
  },
  "about.milestone3Year": { en: "1990", np: "२०४६" },
  "about.milestone3Label": { en: "People’s Movement I", np: "जनआन्दोलन I" },
  "about.milestone3": {
    en: "Spearheaded the People’s Movement that restored multiparty democracy after 30 years of Panchayat rule",
    np: "३० वर्षको पञ्चायत शासनपछि बहुदलीय प्रजातन्त्र पुनर्स्थापना गर्ने जनआन्दोलनको नेतृत्व गर्‍यो"
  },
  "about.milestone4Year": { en: "2006", np: "२०६२/६३" },
  "about.milestone4Label": { en: "People’s Movement II", np: "जनआन्दोलन II" },
  "about.milestone4": {
    en: "Played a pivotal role in the second People’s Movement, which ended the king’s direct rule and opened the way to a federal democratic republic",
    np: "राजाको प्रत्यक्ष शासन अन्त्य गर्ने र संघीय लोकतान्त्रिक गणतन्त्रको बाटो खोल्ने दोस्रो जनआन्दोलनमा निर्णायक भूमिका खेल्यो"
  },
  "about.milestone5Year": { en: "2015", np: "२०७२" },
  "about.milestone5Label": { en: "Constitution", np: "संविधान" },
  "about.milestone5": {
    en: "Instrumental in drafting and promulgating Nepal’s current constitution, establishing a federal democratic republic",
    np: "संघीय लोकतान्त्रिक गणतन्त्र स्थापना गर्ने नेपालको वर्तमान संविधान मस्यौदा र जारी गर्नमा महत्त्वपूर्ण भूमिका"
  },
  "about.ncP2": {
    en: "The party uses the Tree (रुख) as its emblem, symbolizing growth, shelter, and prosperity. Under the leadership of party presidents like B.P. Koirala, Girija Prasad Koirala, and Sher Bahadur Deuba, Nepali Congress has consistently championed civil liberties, press freedom, and inclusive governance. Our committee in Spain proudly carries forward these values among the Nepali diaspora.",
    np: "पार्टीले रुखलाई आफ्नो प्रतीकका रूपमा प्रयोग गर्छ, जसले वृद्धि, आश्रय र समृद्धि जनाउँछ। बि.पी. कोइराला, गिरिजाप्रसाद कोइराला र शेरबहादुर देउवा जस्ता पार्टी अध्यक्षहरूको नेतृत्वमा नेपाली काँग्रेसले नागरिक स्वतन्त्रता, प्रेस स्वतन्त्रता र समावेशी शासनको लगातार वकालत गरेको छ। स्पेनमा हाम्रो समितिले नेपाली प्रवासीहरूमा यी मूल्यहरू गर्वका साथ अगाडि बढाउँछ।"
  },
  "about.activities": { en: "Community activities in Spain", np: "स्पेनमा सामुदायिक गतिविधिहरू" },
  "about.activitiesIntro": {
    en: "Our activities are intentionally focused on festivals, togetherness, and connection with the wider Nepali community:",
    np: "हाम्रा गतिविधिहरू चाडपर्व, एकता र व्यापक नेपाली समुदायसँगको सम्बन्धमा केन्द्रित छन्:"
  },
  "about.activity1": {
    en: "Organising Dashain, Tihar, Teej, and Nepali New Year celebrations",
    np: "दशैं, तिहार, तीज र नेपाली नयाँ वर्षका उत्सवहरू आयोजना गर्ने"
  },
  "about.activity2": {
    en: "Bringing Nepali people across Spain together to meet and celebrate",
    np: "स्पेनभरका नेपालीहरूलाई भेट्न र सँगै उत्सव मनाउन एकताबद्ध गर्ने"
  },
  "about.activity3": {
    en: "Participating in community meetings hosted by NRNA",
    np: "एनआरएनएले आयोजना गर्ने सामुदायिक बैठकहरूमा सहभागी हुने"
  },
  "about.coreValues": { en: "Values of the party", np: "पार्टीका मूल मान्यताहरू" },
  "about.democracy": { en: "Democracy", np: "प्रजातन्त्र" },
  "about.democracyNp": { en: "प्रजातन्त्र", np: "Democracy" },
  "about.democracyDesc": { en: "People’s sovereignty and civil liberties", np: "जनसार्वभौमसत्ता र नागरिक स्वतन्त्रता" },
  "about.socialJustice": { en: "Social Justice", np: "सामाजिक न्याय" },
  "about.socialJusticeNp": { en: "सामाजिक न्याय", np: "Social Justice" },
  "about.socialJusticeDesc": { en: "Equal rights and opportunities for all", np: "सबैका लागि समान अधिकार र अवसर" },
  "about.nationalism": { en: "Nationalism", np: "राष्ट्रियता" },
  "about.nationalismNp": { en: "राष्ट्रियता", np: "Nationalism" },
  "about.nationalismDesc": { en: "Love for Nepal and its heritage", np: "नेपाल र यसको सम्पदाप्रति प्रेम" },
};
