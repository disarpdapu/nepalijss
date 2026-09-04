export type Language = "en" | "np";

export const translations: Record<string, Record<Language, string>> = {
  // Navigation
  "nav.home": { en: "Home", np: "गृहपृष्ठ" },
  "nav.about": { en: "About us", np: "परिचय" },
  "nav.orgName": { en: "Nepali Janasamparka Samiti", np: "नेपाली जनसम्पर्क समिति" },
  "nav.orgPlace": { en: "Spain", np: "स्पेन" },
  "nav.switchTo": { en: "नेपाली", np: "English" },
  "nav.switchLabel": { en: "Switch language to Nepali", np: "भाषा अंग्रेजीमा बदल्नुहोस्" },
  "nav.menu": { en: "Menu", np: "मेनु" },
  "nav.close": { en: "Close menu", np: "मेनु बन्द गर्नुहोस्" },
  "nav.skip": { en: "Skip to content", np: "सामग्रीमा जानुहोस्" },
  "nav.primary": { en: "Primary", np: "मुख्य नेभिगेसन" },

  // Home — hero without logo, better animation
  "index.heroEyebrow": { en: "Nepali Congress · Overseas Committee", np: "नेपाली काँग्रेस · विदेशी समिति" },
  "index.orgName": { en: "Nepali Janasamparka Samiti", np: "नेपाली जनसम्पर्क समिति" },
  "index.orgPlace": { en: "Spain", np: "स्पेन" },
  "index.orgLatin": { en: "Nepali Janasamparka Samiti – Spain", np: "Nepali Janasamparka Samiti – Spain" },
  "index.tagline": { en: "Bringing Nepali people together across Spain", np: "स्पेनभरका नेपालीहरूलाई एकताबद्ध गर्दै" },
  "index.description": {
    en: "We organise Dashain, Tihar, Teej, and Nepali New Year celebrations that bring the community together. We also take part in meetings hosted by NRNA.",
    np: "हामी समुदायलाई एकताबद्ध गर्ने दशैं, तिहार, तीज र नेपाली नयाँ वर्षका उत्सवहरू आयोजना गर्छौं। साथै, एनआरएनएले आयोजना गर्ने बैठकहरूमा पनि सहभागी हुन्छौं।",
  },
  "index.aboutCta": { en: "Read about the committee", np: "समितिको बारेमा पढ्नुहोस्" },
  "index.emblemAlt": { en: "Emblem of Nepali Janasamparka Samiti, Spain", np: "नेपाली जनसम्पर्क समिति, स्पेनको प्रतीक" },
  "index.flagAlt": { en: "Flag of Nepali Congress: red, white and red bands with four stars", np: "नेपाली काँग्रेसको झन्डा: रातो, सेतो र रातो पट्टी र चार तारा" },
  "index.flagMeaning": {
    en: "Red for revolution, white for the peace that follows, four stars for the four fundamental freedoms.",
    np: "रातो क्रान्तिको, सेतो त्यसपछिको शान्तिको, र चार तारा चार आधारभूत स्वतन्त्रताका प्रतीक।",
  },
  "index.valuesTitle": { en: "How we bring people together", np: "हामी कसरी समुदायलाई जोड्छौं" },
  "index.culture": { en: "Culture", np: "संस्कृति" },
  "index.cultureNp": { en: "संस्कृति", np: "Culture" },
  "index.cultureDesc": {
    en: "Celebrating Dashain, Tihar, Teej, and Nepali New Year together in Spain.",
    np: "स्पेनमा दशैं, तिहार, तीज र नेपाली नयाँ वर्ष सँगै मनाउँदै।",
  },
  "index.unity": { en: "Unity", np: "एकता" },
  "index.unityNp": { en: "एकता", np: "Unity" },
  "index.unityDesc": {
    en: "Creating welcoming occasions where Nepali people across Spain can meet and celebrate together.",
    np: "स्पेनभरका नेपालीहरू भेट्न र सँगै उत्सव मनाउन सक्ने आत्मीय अवसरहरू सिर्जना गर्दै।",
  },
  "index.participation": { en: "Participation", np: "सहभागिता" },
  "index.participationNp": { en: "सहभागिता", np: "Participation" },
  "index.participationDesc": {
    en: "Joining meetings hosted by NRNA to stay connected with the wider Nepali community.",
    np: "व्यापक नेपाली समुदायसँग जोडिइरहन एनआरएनएले आयोजना गर्ने बैठकहरूमा सहभागी हुँदै।",
  },
  "index.workTitle": { en: "Celebrating together in Spain", np: "स्पेनमा सँगै उत्सव मनाउँदै" },
  "index.workIntro": {
    en: "Our calendar centres on the festivals, gatherings, and shared moments that make Spain feel more like home.",
    np: "हाम्रो वार्षिक कार्यतालिका चाडपर्व, भेला र साझा क्षणहरूमा केन्द्रित छ, जसले स्पेनलाई घरजस्तै आत्मीय बनाउँछ।",
  },
  "index.workMore": { en: "Explore our community focus", np: "हाम्रो सामुदायिक केन्द्रबिन्दु हेर्नुहोस्" },
  "index.partyTitle": { en: "Part of Nepali Congress", np: "नेपाली काँग्रेसको अंग" },
  "index.partyText": {
    en: "Nepali Congress is Nepal’s oldest democratic party, founded on 25 January 1947. Its tree emblem represents growth, shelter, and prosperity. The committee in Spain works under the mandate of the party’s Central Committee.",
    np: "नेपाली काँग्रेस २५ जनवरी १९४७ मा स्थापित नेपालको सबैभन्दा पुरानो प्रजातान्त्रिक दल हो। यसको रुख प्रतीकले वृद्धि, आश्रय र समृद्धि जनाउँछ। स्पेनको समिति पार्टीको केन्द्रीय समितिको जनादेशमा काम गर्छ।",
  },
  "index.partyMore": { en: "History of the party", np: "पार्टीको इतिहास" },
  "index.historyTitle": { en: "History of Nepali Congress", np: "नेपाली काँग्रेसको इतिहास" },
  "index.historySubtitle": {
    en: "From the 1947 founding to the federal democratic republic — a concise timeline of the party that led every democratic movement in Nepal.",
    np: "सन् १९४७ को स्थापनादेखि संघीय लोकतान्त्रिक गणतन्त्रसम्म — नेपालका हरेक प्रजातान्त्रिक आन्दोलनको नेतृत्व गरेको पार्टीको संक्षिप्त कालरेखा।",
  },

  // Footer
  "footer.orgName": { en: "Nepali Janasamparka Samiti – Spain", np: "नेपाली जनसम्पर्क समिति – स्पेन" },
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

  // About — deduped, bilingual pure
  "about.title": { en: "About the committee", np: "समितिको परिचय" },
  "about.titleNp": { en: "About us", np: "हाम्रो बारेमा" },
  "about.lead": {
    en: "Meet the committee, learn about our community focus, and explore our connection with Nepali Congress.",
    np: "समितिलाई चिन्नुहोस्, हाम्रो सामुदायिक केन्द्रबिन्दुबारे जान्नुहोस् र नेपाली काँग्रेससँगको हाम्रो सम्बन्ध बुझ्नुहोस्।",
  },
  "about.contents": { en: "On this page", np: "यस पृष्ठमा" },
  "about.whoWeAre": { en: "Who we are", np: "हामी को हौं" },
  "about.whoWeAreP1": {
    en: "Nepali Janasamparka Samiti – Spain is an official overseas committee of Nepali Congress, the oldest democratic political party of Nepal, founded in 1947. We represent the Nepali diaspora living and working across Spain, serving as the bridge between the party leadership in Nepal and the growing Nepali community in the Iberian Peninsula.",
    np: "नेपाली जनसम्पर्क समिति – स्पेन नेपालको सबैभन्दा पुरानो प्रजातान्त्रिक राजनीतिक दल नेपाली काँग्रेसको एक आधिकारिक विदेशी समिति हो, जुन सन् १९४७ मा स्थापित भएको थियो। हामी स्पेनभर बसोबास गर्ने र काम गर्ने नेपाली प्रवासीहरूको प्रतिनिधित्व गर्छौं, नेपालको पार्टी नेतृत्व र इबेरियन प्रायद्वीपमा बढ्दो नेपाली समुदायबीचको पुलको रूपमा सेवा गर्दछौं।",
  },
  "about.whoWeAreP2": {
    en: "Our work in Spain brings people together around Nepali culture and community connection, guided by the mandate of the Nepali Congress Central Committee.",
    np: "स्पेनमा हाम्रो काम नेपाली संस्कृति र सामुदायिक सम्बन्धको वरिपरि मानिसहरूलाई एकताबद्ध गर्ने विषयमा केन्द्रित छ, र हामी नेपाली काँग्रेस केन्द्रीय समितिको जनादेशमा काम गर्छौं।",
  },
  "about.mission": { en: "Our community focus", np: "हाम्रो सामुदायिक केन्द्रबिन्दु" },
  "about.mission1": {
    en: "Organise celebrations for Dashain, Tihar, Teej, and Nepali New Year",
    np: "दशैं, तिहार, तीज र नेपाली नयाँ वर्षका उत्सवहरू आयोजना गर्ने",
  },
  "about.mission2": {
    en: "Bring Nepali people across Spain together through welcoming shared occasions",
    np: "आत्मीय साझा अवसरहरूमार्फत स्पेनभरका नेपालीहरूलाई एकताबद्ध गर्ने",
  },
  "about.mission3": {
    en: "Participate in meetings hosted by NRNA and stay connected with the wider Nepali community",
    np: "एनआरएनएले आयोजना गर्ने बैठकहरूमा सहभागी भई व्यापक नेपाली समुदायसँग जोडिइरहने",
  },
  "about.ncTitle": { en: "Nepali Congress", np: "नेपाली काँग्रेस" },
  "about.ncP1": {
    en: "Founded on 25 January 1947, Nepali Congress is Nepal’s oldest democratic party, committed to democracy, social justice, nationalism, and sustainable development. The party follows the ideology of democratic socialism and has been the cornerstone of every major democratic movement in Nepal’s history.",
    np: "२५ जनवरी १९४७ मा स्थापित नेपाली काँग्रेस नेपालको सबैभन्दा पुरानो प्रजातान्त्रिक दल हो, जो प्रजातन्त्र, सामाजिक न्याय, राष्ट्रियता र दिगो विकासप्रति प्रतिबद्ध छ। पार्टीले प्रजातान्त्रिक समाजवादको विचारधारा अनुसरण गर्छ र नेपालको इतिहासमा प्रत्येक प्रमुख प्रजातान्त्रिक आन्दोलनको आधारशिला रहेको छ।",
  },
  "about.keyMilestones": { en: "Milestones", np: "प्रमुख ऐतिहासिक उपलब्धिहरू" },
  "about.milestone1Year": { en: "1951", np: "२००७" },
  "about.milestone1Label": { en: "Revolution", np: "क्रान्ति" },
  "about.milestone1": {
    en: "Led the armed revolution that overthrew the autocratic Rana regime and established democracy",
    np: "निरंकुश राणा शासनलाई उखेल्ने सशस्त्र क्रान्तिको नेतृत्व गरी प्रजातन्त्र स्थापना गर्‍यो",
  },
  "about.milestone2Year": { en: "1959", np: "२०१५" },
  "about.milestone2Label": { en: "Historic mandate", np: "ऐतिहासिक जनादेश" },
  "about.milestone2": {
    en: "Earned a historic democratic mandate, leading to B.P. Koirala serving as Nepal’s first democratic Prime Minister",
    np: "ऐतिहासिक प्रजातान्त्रिक जनादेश प्राप्त गर्‍यो र बि.पी. कोइरालाले नेपालको पहिलो प्रजातान्त्रिक प्रधानमन्त्रीका रूपमा नेतृत्व गरे",
  },
  "about.milestone3Year": { en: "1990", np: "२०४६" },
  "about.milestone3Label": { en: "People’s Movement I", np: "जनआन्दोलन I" },
  "about.milestone3": {
    en: "Spearheaded the People’s Movement that restored multiparty democracy after 30 years of Panchayat rule",
    np: "३० वर्षको पञ्चायत शासनपछि बहुदलीय प्रजातन्त्र पुनर्स्थापना गर्ने जनआन्दोलनको नेतृत्व गर्‍यो",
  },
  "about.milestone4Year": { en: "2006", np: "२०६२/६३" },
  "about.milestone4Label": { en: "People’s Movement II", np: "जनआन्दोलन II" },
  "about.milestone4": {
    en: "Played a pivotal role in the second People’s Movement, which ended the king’s direct rule and opened the way to a federal democratic republic",
    np: "राजाको प्रत्यक्ष शासन अन्त्य गर्ने र संघीय लोकतान्त्रिक गणतन्त्रको बाटो खोल्ने दोस्रो जनआन्दोलनमा निर्णायक भूमिका खेल्यो",
  },
  "about.milestone5Year": { en: "2015", np: "२०७२" },
  "about.milestone5Label": { en: "Constitution", np: "संविधान" },
  "about.milestone5": {
    en: "Instrumental in drafting and promulgating Nepal’s current constitution, establishing a federal democratic republic",
    np: "संघीय लोकतान्त्रिक गणतन्त्र स्थापना गर्ने नेपालको वर्तमान संविधान मस्यौदा र जारी गर्नमा महत्त्वपूर्ण भूमिका",
  },
  "about.ncP2": {
    en: "The party uses the Tree as its emblem, symbolizing growth, shelter, and prosperity. Under the leadership of party presidents like B.P. Koirala, Girija Prasad Koirala, and Sher Bahadur Deuba, Nepali Congress has consistently championed civil liberties, press freedom, and inclusive governance. Our committee in Spain proudly carries forward these values among the Nepali diaspora.",
    np: "पार्टीले रुखलाई आफ्नो प्रतीकका रूपमा प्रयोग गर्छ, जसले वृद्धि, आश्रय र समृद्धि जनाउँछ। बि.पी. कोइराला, गिरिजाप्रसाद कोइराला र शेरबहादुर देउवा जस्ता पार्टी अध्यक्षहरूको नेतृत्वमा नेपाली काँग्रेसले नागरिक स्वतन्त्रता, प्रेस स्वतन्त्रता र समावेशी शासनको लगातार वकालत गरेको छ। स्पेनमा हाम्रो समितिले नेपाली प्रवासीहरूमा यी मूल्यहरू गर्वका साथ अगाडि बढाउँछ।",
  },
  "about.activities": { en: "Community activities in Spain", np: "स्पेनमा सामुदायिक गतिविधिहरू" },
  "about.activitiesIntro": {
    en: "Through festivals, gatherings, and NRNA connection we keep culture alive and community close. Here is how the year unfolds:",
    np: "चाडपर्व, भेटघाट र एनआरएनए सम्बन्धमार्फत हामी संस्कृतिलाई जीवन्त र समुदायलाई नजिक राख्छौं। हाम्रो वर्ष यसरी अघि बढ्छ:",
  },
  "about.activity1": {
    en: "Organising Dashain, Tihar, Teej, and Nepali New Year celebrations",
    np: "दशैं, तिहार, तीज र नेपाली नयाँ वर्षका उत्सवहरू आयोजना गर्ने",
  },
  "about.activity2": {
    en: "Bringing Nepali people across Spain together to meet and celebrate",
    np: "स्पेनभरका नेपालीहरूलाई भेट्न र सँगै उत्सव मनाउन एकताबद्ध गर्ने",
  },
  "about.activity3": {
    en: "Participating in community meetings hosted by NRNA",
    np: "एनआरएनएले आयोजना गर्ने सामुदायिक बैठकहरूमा सहभागी हुने",
  },
  "about.activity1Detail": {
    en: "Autumn Dashain tika and jamara, winter Tihar deusi-bhailo, spring Teej gatherings, and Baisakh New Year picnics — each with music, food, and family.",
    np: "शरदको दशैं टीका-जमरा, हिउँदको तिहार देउसी-भैलो, वसन्तको तीज भेला र वैशाखको नयाँ वर्ष वनभोज — सङ्गीत, भोजन र परिवारसहित।",
  },
  "about.activity2Detail": {
    en: "From Barcelona to Madrid, Valencia to Málaga — we create open, welcoming spaces where newcomers and long-time residents meet.",
    np: "बार्सिलोनादेखि म्याड्रिड, भ्यालेन्सियादेखि मालागासम्म — नवआगन्तुक र पुराना बासिन्दा भेट्ने खुला, आत्मीय ठाउँहरू हामी बनाउँछौं।",
  },
  "about.activity3Detail": {
    en: "We join NRNA Spain and Europe gatherings, share community updates, and coordinate support for Nepali families.",
    np: "हामी एनआरएनए स्पेन र युरोपका भेलाहरूमा सहभागी हुन्छौं, सामुदायिक अपडेट साटासाट गर्छौं र नेपाली परिवारका लागि सहयोग समन्वय गर्छौं।",
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

  // History Timeline — detailed bilingual content for both Home (short) and About (long)
  "history.foundedYear": { en: "1947", np: "२००३" },
  "history.foundedLabel": { en: "Founding", np: "स्थापना" },
  "history.foundedTitle": { en: "Founding of Nepali Congress", np: "नेपाली काँग्रेसको स्थापना" },
  "history.foundedShort": {
    en: "Formed on 25 January 1947 by merging democratic forces to end autocracy and establish people’s sovereignty.",
    np: "निरंकुशता अन्त्य गरी जनसार्वभौमसत्ता स्थापनाका लागि प्रजातान्त्रिक शक्तिहरू एकीकृत गर्दै २५ जनवरी १९४७ मा स्थापना।",
  },
  "history.foundedLong": {
    en: "On 25 January 1947, Nepali Congress was founded as Nepal’s first democratic party, uniting the Nepali National Congress and the Nepal Democratic Congress. Inspired by democratic socialism and led by figures such as B.P. Koirala and Subarna Shamsher Rana, it adopted the Tree as its emblem — growth, shelter, and prosperity — and set people’s sovereignty as its core aim.",
    np: "२५ जनवरी १९४७ मा नेपाली राष्ट्रिय काँग्रेस र नेपाल प्रजातान्त्रिक काँग्रेस एकीकृत भई नेपालको पहिलो प्रजातान्त्रिक दलका रूपमा नेपाली काँग्रेसको स्थापना भयो। प्रजातान्त्रिक समाजवादबाट प्रेरित र बि.पी. कोइराला र सुवर्ण शमशेर राणा जस्ता व्यक्तित्वहरूको नेतृत्वमा यसले रुखलाई प्रतीक बनायो — वृद्धि, आश्रय र समृद्धि — र जनसार्वभौमसत्तालाई मूल लक्ष्य बनायो।",
  },

  "history.1951Year": { en: "1951", np: "२००७" },
  "history.1951Label": { en: "Revolution", np: "क्रान्ति" },
  "history.1951Title": { en: "Revolution and Democracy", np: "क्रान्ति र प्रजातन्त्रको स्थापना" },
  "history.1951Short": {
    en: "Led the armed revolution that toppled the Rana regime and established parliamentary democracy.",
    np: "राणा शासनलाई उखेल्ने सशस्त्र क्रान्तिको नेतृत्व गरी संसदीय प्रजातन्त्र स्थापना।",
  },
  "history.1951Long": {
    en: "In February 1951, the Congress-led armed struggle and negotiations ended 104 years of Rana autocracy. The Delhi Compromise paved the way for interim governance and the first steps toward citizen rights, press freedom, and representative rule.",
    np: "फेब्रुअरी १९५१ मा काँग्रेस नेतृत्वको सशस्त्र संघर्ष र वार्ताले १०४ वर्ष लामो राणा निरंकुशताको अन्त्य गर्‍यो। दिल्ली सम्झौताले अन्तरिम शासन र नागरिक अधिकार, प्रेस स्वतन्त्रता र प्रतिनिधि शासनतर्फ पहिलो पाइला खोल्यो।",
  },

  "history.1959Year": { en: "1959", np: "२०१५" },
  "history.1959Label": { en: "Historic mandate", np: "ऐतिहासिक जनादेश" },
  "history.1959Title": { en: "First General Election", np: "पहिलो आम निर्वाचन" },
  "history.1959Short": {
    en: "Won 74 of 109 seats; B.P. Koirala became Nepal’s first democratically elected Prime Minister.",
    np: "१०९ मध्ये ७४ सिट जित्यो; बि.पी. कोइराला नेपालको पहिलो निर्वाचित प्रधानमन्त्री बने।",
  },
  "history.1959Long": {
    en: "The 1959 election gave Congress a two-thirds mandate. The Koirala government launched land reform, expanded education and health access, and pursued an independent foreign policy, laying foundations for modern Nepal.",
    np: "१९५९ को निर्वाचनले काँग्रेसलाई दुई-तिहाइ जनादेश दियो। कोइराला सरकारले भूमिसुधार, शिक्षा-स्वास्थ्यको पहुँच विस्तार र स्वतन्त्र परराष्ट्र नीति अघि बढाउँदै आधुनिक नेपालको आधार तयार गर्‍यो।",
  },

  "history.1960Year": { en: "1960", np: "२०१७" },
  "history.1960Label": { en: "Setback", np: "व्यवधान" },
  "history.1960Title": { en: "Royal Coup and Panchayat", np: "शाही कदम र पञ्चायत व्यवस्था" },
  "history.1960Short": {
    en: "King Mahendra dissolved the elected government and imposed the Panchayat system; leaders faced years of imprisonment and exile.",
    np: "राजा महेन्द्रले निर्वाचित सरकार भङ्ग गरी पञ्चायत व्यवस्था लागू गरे; नेताहरू वर्षौंसम्म जेल र निर्वासनमा परे।",
  },
  "history.1960Long": {
    en: "On 15 December 1960, King Mahendra seized power, detained B.P. Koirala and others without trial for eight years, then forced exile in India. Congress sustained underground and exile organisation, keeping the democratic demand alive through the 1960s and 70s.",
    np: "१५ डिसेम्बर १९६० मा राजा महेन्द्रले सत्ता लिए, बि.पी. कोइराला लगायतलाई बिना मुद्दा आठ वर्ष नजरबन्द गरी भारत निर्वासनमा पठाए। काँग्रेसले भूमिगत र निर्वासित संगठन कायम राख्दै १९६०-७० को दशकभर प्रजातन्त्रको माग जीवित राख्यो।",
  },

  "history.1976Year": { en: "1976", np: "२०३३" },
  "history.1976Label": { en: "Reconciliation", np: "मेलमिलाप" },
  "history.1976Title": { en: "National Reconciliation", np: "राष्ट्रिय मेलमिलाप" },
  "history.1976Short": {
    en: "B.P. Koirala returned from exile advocating national reconciliation to restore democracy through unity.",
    np: "निर्वासनबाट फर्केका बि.पी. कोइरालाले एकतामार्फत प्रजातन्त्र पुनर्स्थापनाका लागि राष्ट्रिय मेलमिलापको नीति अघि सारे।",
  },
  "history.1976Long": {
    en: "On 30 December 1976, Koirala returned to Kathmandu under the policy of national reconciliation, calling for dialogue among democratic and nationalist forces rather than armed confrontation.",
    np: "३० डिसेम्बर १९७६ मा कोइराला राष्ट्रिय मेलमिलापको नीतिसहित काठमाडौं फर्के र सशस्त्र टकराव होइन, प्रजातान्त्रिक र राष्ट्रवादी शक्तिहरूबीच संवादको आह्वान गरे।",
  },

  "history.1979Year": { en: "1980", np: "२०३७" },
  "history.1979Label": { en: "Referendum", np: "जनमत संग्रह" },
  "history.1979Title": { en: "Student Movement and Referendum", np: "विद्यार्थी आन्दोलन र जनमत संग्रह" },
  "history.1979Short": {
    en: "Student-led protests led King Birendra to announce a national referendum; Congress campaigned for a multiparty system.",
    np: "विद्यार्थी आन्दोलनपछि राजा वीरेन्द्रले राष्ट्रिय जनमत संग्रह घोषणा गरे; काँग्रेसले बहुदलीय प्रणालीका पक्षमा अभियान चलायो।",
  },
  "history.1979Long": {
    en: "The 1979 Nepal Student Union-backed movement forced a referendum in 1980 on the Panchayat versus multiparty system. Although the result favoured a reformed Panchayat, the campaign reactivated nationwide democratic organising.",
    np: "१९७९ को नेपाल विद्यार्थी संघ समर्थित आन्दोलनले १९८० मा पञ्चायत बनाम बहुदलीय प्रणालीबारे जनमत संग्रह गरायो। परिणाम सुधारिएको पञ्चायतको पक्षमा गए पनि अभियानले देशव्यापी प्रजातान्त्रिक संगठनलाई पुनः सक्रिय बनायो।",
  },

  "history.1990Year": { en: "1990", np: "२०४६" },
  "history.1990Label": { en: "People’s Movement I", np: "जनआन्दोलन I" },
  "history.1990Title": { en: "Restoration of Multiparty Democracy", np: "बहुदलीय प्रजातन्त्रको पुनर्स्थापना" },
  "history.1990Short": {
    en: "The 1990 Jana Andolan ended 30 years of Panchayat rule and restored constitutional multiparty democracy.",
    np: "१९९० को जनआन्दोलनले ३० वर्ष लामो पञ्चायत शासन अन्त्य गरी संवैधानिक बहुदलीय प्रजातन्त्र पुनर्स्थापना गर्‍यो।",
  },
  "history.1990Long": {
    en: "Co-led with the United Left Front, the 1990 movement forced King Birendra to lift the ban on political parties and promulgate the 1990 Constitution, guaranteeing fundamental rights and parliamentary rule.",
    np: "संयुक्त वाममोर्चासँग संयुक्त नेतृत्वमा भएको १९९० को आन्दोलनले राजा वीरेन्द्रलाई दलमाथिको प्रतिबन्ध हटाउन र १९९० को संविधान जारी गर्न बाध्य पार्‍यो, जसले मौलिक अधिकार र संसदीय शासनको प्रत्याभूति गर्‍यो।",
  },

  "history.1991Year": { en: "1991", np: "२०४८" },
  "history.1991Label": { en: "Election", np: "निर्वाचन" },
  "history.1991Title": { en: "Government Formation", np: "सरकार गठन" },
  "history.1991Short": {
    en: "Won the first post-movement election and formed a majority government to institutionalise democracy.",
    np: "आन्दोलनपछिको पहिलो निर्वाचन जितेर प्रजातन्त्र संस्थागत गर्न बहुमत सरकार गठन गर्‍यो।",
  },
  "history.1991Long": {
    en: "The May 1991 election gave Congress a clear majority. Governments led by G.P. Koirala and Sher Bahadur Deuba expanded infrastructure, began liberal economic reforms, and widened access to education and health.",
    np: "मे १९९१ को निर्वाचनले काँग्रेसलाई स्पष्ट बहुमत दियो। गिरिजाप्रसाद कोइराला र शेरबहादुर देउवा नेतृत्वका सरकारले पूर्वाधार विस्तार, उदार आर्थिक सुधार थालनी र शिक्षा-स्वास्थ्यको पहुँच फराकिलो बनायो।",
  },

  "history.1999Year": { en: "1999", np: "२०५६" },
  "history.1999Label": { en: "Majority", np: "बहुमत" },
  "history.1999Title": { en: "1999 Majority Government", np: "१९९९ को बहुमत सरकार" },
  "history.1999Short": {
    en: "Secured 113 of 205 seats under Krishna Prasad Bhattarai’s leadership.",
    np: "कृष्णप्रसाद भट्टराईको नेतृत्वमा २०५ मध्ये ११३ सिट प्राप्त गर्‍यो।",
  },
  "history.1999Long": {
    en: "In the 1999 parliamentary election, Congress again won a direct majority. The period accelerated road, telecom, and community health expansion while navigating the early years of the Maoist conflict.",
    np: "१९९९ को संसदीय निर्वाचनमा काँग्रेसले पुनः प्रत्यक्ष बहुमत प्राप्त गर्‍यो। यो अवधिमा सडक, दूरसञ्चार र सामुदायिक स्वास्थ्य विस्तार तीव्र भयो, साथै माओवादी द्वन्द्वका प्रारम्भिक वर्षहरू सम्हालियो।",
  },

  "history.2006Year": { en: "2006", np: "२०६३" },
  "history.2006Label": { en: "People’s Movement II", np: "जनआन्दोलन II" },
  "history.2006Title": { en: "Peace and Republic", np: "शान्ति र गणतन्त्र" },
  "history.2006Short": {
    en: "Led the second People’s Movement and the 2006 Comprehensive Peace Accord, ending a decade of war and monarchy.",
    np: "दोस्रो जनआन्दोलन र २०६३ को विस्तृत शान्ति सम्झौताको नेतृत्व गरी दशक लामो युद्ध र राजतन्त्रको अन्त्य गर्‍यो।",
  },
  "history.2006Long": {
    en: "With G.P. Koirala as Prime Minister, the Seven Party Alliance and Maoists signed the Comprehensive Peace Accord in November 2006, ending the ten-year war, suspending monarchy, and opening the path to a constituent assembly.",
    np: "गिरिजाप्रसाद कोइराला प्रधानमन्त्री रहेका बेला सात दल र माओवादीले नोभेम्बर २००६ मा विस्तृत शान्ति सम्झौतामा हस्ताक्षर गरी दश वर्ष लामो युद्ध र राजतन्त्रको निलम्बन गर्दै संविधानसभाको बाटो खोल्यो।",
  },

  "history.2015Year": { en: "2015", np: "२०७२" },
  "history.2015Label": { en: "Constitution", np: "संविधान" },
  "history.2015Title": { en: "Federal Democratic Constitution", np: "संघीय लोकतान्त्रिक संविधान" },
  "history.2015Short": {
    en: "Promulgated Nepal’s 2015 Constitution and oversaw the first federal and provincial elections.",
    np: "२०१५ को संविधान जारी गर्‍यो र पहिलो संघीय तथा प्रदेश निर्वाचन सम्पन्न गरायो।",
  },
  "history.2015Long": {
    en: "Under Sushil Koirala the long-awaited constitution was promulgated on 20 September 2015; under Sher Bahadur Deuba in 2017 the first elections for federal parliament and seven provinces implemented inclusive federalism.",
    np: "सुशील कोइरालाको नेतृत्वमा लामो प्रतीक्षाको संविधान २० सेप्टेम्बर २०१५ मा जारी भयो; शेरबहादुर देउवाको नेतृत्वमा २०१७ मा संघीय संसद र सात प्रदेशका पहिलो निर्वाचनले समावेशी संघीयतालाई कार्यान्वयन गर्‍यो।",
  },

  "history.viewTimeline": { en: "Explore timeline", np: "कालरेखा हेर्नुहोस्" },
  "history.yearsLabel": { en: "Years", np: "वर्षहरू" },
};
