export interface ReasonItem {
  id: number;
  title: string;
  detail: string;
  iconName: string;
}

export interface OpenWhenItem {
  id: number;
  trigger: string;
  title: string;
  content: string;
  iconName: string;
  sealColor: string;
}

export interface LoveContentConfig {
  meta: {
    siteName: string;
    title: string;
    subtitle: string;
    recipientName: string;
    signature: string;
  };
  welcome: {
    greeting: string;
    invitation: string;
    openButtonText: string;
    skipButtonText: string;
  };
  hero: {
    badge: string;
    heading: string;
    subtitle: string;
    ctaButtonText: string;
    secondaryCtaText: string;
  };
  relationshipStartDate: string | null; // Configurable date in 'YYYY-MM-DD' format or null
  fallbackRelationshipText: string;
  letter: {
    salutation: string;
    paragraphs: string[];
    closing: string;
    recipientSignoff: string;
  };
  reasons: ReasonItem[];
  openWhenNotes: OpenWhenItem[];
  futureWish: {
    heading: string;
    message: string;
  };
  surprise: {
    buttonText: string;
    revealedMessage: string;
  };
  finalScene: {
    name: string;
    reflection: string;
    heartfeltText: string;
    declaration: string;
    bottomSignoff: string;
  };
}

export const LOVE_CONTENT: LoveContentConfig = {
  meta: {
    siteName: "Farduus Forever ❤️",
    title: "A Letter From My Heart",
    subtitle: "Hal Qalbi, Hal Jacayl, Hal Mustaqbal. ❤️",
    recipientName: "Farduus Xuseen",
    signature: "Farduus Xuseen ❤️",
  },

  welcome: {
    greeting: "Asc, Gacaliso Farduus ❤️",
    invitation: "Waxaan kuu diyaariyey wax yar oo qalbigayga ka yimid…",
    openButtonText: "Fur Warqadda Jacaylkayga 💌",
    skipButtonText: "Ka bood hordhaca ➔",
  },

  hero: {
    badge: "Farriin Khaas Ah Oo Qalbigayga Ka Timid",
    heading: "I Love You, Farduus ❤️",
    subtitle: "Adiga ayaa qalbigayga ku leh meel aan qof kale buuxin karin.",
    ctaButtonText: "Akhri Farriintayda 💌",
    secondaryCtaText: "Baadh Qalbigayga ✨",
  },

  // Set to null to show romantic fallback message per requirements, or set to ISO string if known
  relationshipStartDate: null,
  fallbackRelationshipText: "Quruxda jacaylkeennu waxay ku jirtaa maalin kasta oo aynu wadaagno. ❤️",

  letter: {
    salutation: "Dear Gacaliso,",
    paragraphs: [
      "Lagayaba Yaaba inaan kaso habsamaya inaan noqdo jacylkaagi koobad, lakin waxkasta haygu qaadate waxan kudadaalaya inaan sida ku ahaado kaagi ugu dambeyey. Waxan raba inaan ahaado sababta ay naftaadu udareento farxad joogta ah, waxaan raba inaan noqdo nolosha chapterki ugu quruxda badna, kaliya maaha wakhti kooban lakin noloshada inta kadhiman. Tanina waa balanqaadkayga.",

      "Gacaliso Qof, shay iyo wakhtigu toona ma badalayo inaan kujeclahay wali aan kujeclandoono, adigoo ah qof aan kawada helay jacayl iyo sxptinimo. Qofna ma fahmi karayo sidaan kujeclhy laga reebo adiga. Ma aqaan kalmad aad ku qeexo sidaan ugu faraxsanahy inaan adiga ku haysto noloshayda. Bæ kaliya maad badalin noloshayda xitaa waxaad badashay qabkan u arko nolosha, waxaad tahay qofka kaliya een culayskayga aan usheego, waxaad tahay qof kaliye isku daya inuu icaawiyo walow eray qalbiga idajina ha ahaate.",

      "Gacaliso waad iga fogtahay lakin waxan waheshada sowradada, markasto sowr aad leedahay aan dawanayo waxan rajeeya inaan kaso dhexsooro sowrka oon adiga kusoo qabto kadibna laabta ku gashto anigo si xooga kuhaysta, hadi sowrku isku badalyo marxalada marka aynu wada joogno waligay ma dhameeyen marxalada si aynu wakhto dheer uwada joogno.",

      "Gacaliso ma ogtahay jacaylka dunida ugu quruxda badan, waaka aad ogtahay qofkaad naftada uhibeesay inaanu ku dhawici doonin, waliba uu idinka dhaxeeyo xidhidh saafiya oo dacadnimo kudhisantahay. Waxaad tahay qofkaliya een jeclahay inaan hugsiiyo, aan kudhunkado, aan la joogo waliba wakhti dheer, laseexdo, aan waliba la jaaso mid kalgacal kudhehan yahay. Qof kaliyee lahadalkisa aan ka xiiso dhacin xita wadaanan waxba kawada hadleen. Waxaad tahay my favourite person bæ always nad forever.",

      "Gacaliso Waxaynu wada qorsheesanay wax badan, lakin ugu dambeenta noloshu waxay raacda dhanku ilahay udhigo, balse ilaahay waxan ka baryaya kuwi ishantiya iyo isku badhadha inuu iga yeelo Gacaliso."
    ],
    closing: "Aad iyo aad baan kuu jecelahay,",
    recipientSignoff: "To: Farduus Xuseen",
  },

  reasons: [
    {
      id: 1,
      title: "Waxaad tahay farxaddayda.",
      detail:
        "Dhoolacaddayntaada waxay iftiimisaa maalmahayga ugu mugdiga badan. Markasta oo aan kula hadlo ama aan ku xasuusto, qalbigaygu wuxuu dareemaa degganaan iyo farxad dhab ah.",
      iconName: "Smile",
    },
    {
      id: 2,
      title: "Waxaad tahay qofka aan ku kalsoonahay.",
      detail:
        "Adiga ayaan kuu sheegi karaa sir kasta, cabsidayda, iyo riyooyinkayga ugu qoto dheer anigoo aan waxba ka baqayn. Kalsoonidaadu waa hantida ugu qaalisan ee aan haysto.",
      iconName: "ShieldHeart",
    },
    {
      id: 3,
      title: "Waan jeclahay sida aad noloshayda u qurxiso.",
      detail:
        "Noloshaydu waxay noqotay mid macno, iftiin iyo midabbo qurux badan leh tan iyo markii aad soo gashay. Joogitaankaagu wuxuu wax kasta oo adduunkan ah ka dhigaa mid qaali ah.",
      iconName: "Sparkles",
    },
    {
      id: 4,
      title: "Waxaan jeclahay daacadnimadaada iyo naxariistaada.",
      detail:
        "Qalbigaaga daacadda ah iyo naxariistaada aan xadka lahayn ayaa ah waxyaabaha ugu waaweyn ee aan kuugu xidhanahay. Waxaad tahay ruux dahab ah oo naadir ku ah nolosha.",
      iconName: "HeartHandshake",
    },
    {
      id: 5,
      title: "Waxaan jeclahay inaan kula wadaago riyooyinkayga.",
      detail:
        "Mustaqbal kasta oo aan maanka ku sawirto, adiga ayaa udub-dhexaad u ah. Kula wadaagista riyooyinka waxay igu abuurtaa rajo iyo hami ah inaan wax walba wada gaadhi doonno.",
      iconName: "Stars",
    },
  ],

  openWhenNotes: [
    {
      id: 1,
      trigger: "Fur marka aad ii xiisto.",
      title: "Marka Aad Ii Xiisto ❤️",
      content:
        "Gacaliso Farduus, markasta oo aad ii xiisto xusuusnow in qalbigaygu uu ku garab taagan yahay xilli kasta. Xidh indhahaaga, waxaad dareemi doontaa jacaylkayga oo kugu wareegsan. Masaafadu ma daciifin karto waxa qalbiyadeennu wadaagaan. Aniguba waan kuu xiisaa in ka badan inta aad malayn karto. ❤️",
      iconName: "HeartPulse",
      sealColor: "#FF6B9A",
    },
    {
      id: 2,
      trigger: "Fur marka aad murugaysan tahay.",
      title: "Marka Aad Murugaysan Tahay 🕊️",
      content:
        "Gacaliso, ha murugoon. Wax kasta oo culays ah way dhaafeenayaan. Xusuusnow inaan halkan kuugu ahay gabaad, garab aamin ah, iyo qof mar walba ku garab taagan. Dhoolacaddee gacaliso, sababtoo ah farxaddaadu waa noloshayda oo dhan. ❤️",
      iconName: "Sun",
      sealColor: "#FFD89A",
    },
    {
      id: 3,
      trigger: "Fur marka aad faraxsan tahay.",
      title: "Marka Aad Faraxsan Tahay ✨",
      content:
        "Farxaddaadu waa farxaddayda ugu weyn! Markasta oo aad dareento rayn-rayn, qalbigaygu wuu kula dabaal-degayaa. Waxaan Ilaahay ka baryayaa in qosolkaagu uu weligii iftiimiyo adduunka, aniguna aan noqdo sababta aad maalin walba u sii dhoolacaddayso. ❤️",
      iconName: "Sparkle",
      sealColor: "#B9A6FF",
    },
    {
      id: 4,
      trigger: "Fur marka aad rabto inaad ogaato sida aan kuu jeclahay.",
      title: "Sida Aan Kuu Jeclahay 💖",
      content:
        "Farduus, jacaylka aan kuu qabo ma laha xad ama qiyaas lagu cabbiro. Waxaad tahay qofka aan ugu jecelahay dunida oo dhan, jacaylkaygii ugu dambeeyay, weligayna waxaan ahaan doonaa mid adiga kuu daacad ah oo kugu faana. Hal Qalbi, Hal Jacayl, Hal Mustaqbal. ❤️",
      iconName: "Flame",
      sealColor: "#FFD5E2",
    },
  ],

  futureWish: {
    heading: "A Wish for Our Future",
    message:
      "Gacaliso, waxaan rajaynayaa in mustaqbalkeennu noqdo mid jacayl, daacadnimo, farxad iyo is-garab-istaag ku dhisan. Ilaahay ha inoo fududeeyo kheyrka aan wada rajaynayno. ❤️",
  },

  surprise: {
    buttonText: "Wax kale ayaan kuu hayaa ❤️",
    revealedMessage:
      "Farduus, haddii aan mar kale dooran lahaa, qalbigaygu weli adiga ayuu kuu soo noqon lahaa. Waxaad tahay qof aan si gaar ah u jeclahay.",
  },

  finalScene: {
    name: "Farduus Xuseen ❤️",
    reflection:
      "Ma garanayo dhammaan waxa mustaqbalku inoo hayo, balse waxaan rajaynayaa inaan kula wadaago maalmo qurux badan, farxad iyo jacayl daacad ah.",
    heartfeltText: "Waxaad tahay qof qalbigayga meel gaar ah ku leh.",
    declaration: "Waan ku jeclahay, Gacaliso. ❤️",
    bottomSignoff: "Forever in My Heart — To: Farduus Xuseen 💌",
  },
};
