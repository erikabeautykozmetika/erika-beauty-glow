export const site = {
  name: "Erika Beauty Kozmetika",
  legalName: "Erika Beauty Kozmetika",
  owner: "Bertus Erika",
  tagline: "Személyre szabott arckezelések Budapesten",
  domain: "erikabeautykozmetika.hu",
  phone: "+36301234567",
  phoneDisplay: "+36 30 123 4567",
  email: "info@erikabeautykozmetika.hu",
  street: "Táltos utca 15/b.",
  postalCode: "1123",
  city: "Budapest",
  district: "XII. kerület",
  mapsQuery: "1123 Budapest, Táltos utca 15/b.",
  bookingUrl: "/foglalas",
  openingHours: [
    { days: "Hétfő – Péntek", hours: "09:00 – 18:00" },
    { days: "Szombat", hours: "09:00 – 14:00" },
    { days: "Vasárnap", hours: "Zárva" },
  ],
  stats: [
    { value: "5400+", label: "elvégzett kezelés" },
    { value: "16 év", label: "szakmai tapasztalat" },
    { value: "14 féle", label: "szolgáltatás" },
    { value: "27 gép", label: "és technológia" },
  ],
} as const;

export type Service = {
  slug: string;
  name: string;
  duration: string;
  summary: string;
  details: string[];
  category: "Arckezelés" | "Gépi kezelés" | "Kiegészítő kezelés";
};

export const services: Service[] = [
  {
    slug: "melytisztito-arckezeles",
    name: "Mélytisztító arckezelés",
    duration: "1 – 1,5 óra",
    category: "Arckezelés",
    summary:
      "Klasszikus, alapos pórustisztítás a bőr légzésének és regenerálódásának helyreállításáért.",
    details: [
      "Bőrdiagnosztika és tisztítás",
      "Hámlasztás, gőzölés, pórustisztítás",
      "Nyugtató maszk és védőkrém",
    ],
  },
  {
    slug: "hidratalo-arckezeles",
    name: "Hidratáló arckezelés száraz, dehidratált bőrre",
    duration: "1,5 – 2 óra",
    category: "Arckezelés",
    summary:
      "A felhalmozódott elhalt hámsejtek eltávolítása után visszaadjuk a bőr vízmegkötő képességét.",
    details: [
      "Elhalt hámsejtek eltávolítása",
      "Mély pórustisztítás",
      "Vízmegkötő hatóanyagok bevitele",
      "Arcmasszázs, pihentető maszk",
    ],
  },
  {
    slug: "anti-age-kezeles",
    name: "Anti-age ránctalanító kúra",
    duration: "2 – 2,5 óra",
    category: "Arckezelés",
    summary:
      "Feszesítő, ránccsökkentő kezelés érett bőrre, látványos, azonnal érzékelhető eredménnyel.",
    details: [
      "Bőrfeszesítő hatóanyagok",
      "Gépi hatóanyag-bevitel",
      "Lifting hatású masszázs",
      "Feszesítő maszk",
    ],
  },
  {
    slug: "problemas-bor-kezelese",
    name: "Problémás, aknés bőr kezelése",
    duration: "1 – 2 óra",
    category: "Arckezelés",
    summary:
      "Kúraszerű kezelés zsíros, pattanásos bőrre, gyulladáscsökkentő és bőrnyugtató hatóanyagokkal.",
    details: [
      "Gyulladáscsökkentő tisztítás",
      "Faggyútermelés szabályozása",
      "Otthoni ápolási tanácsadás",
    ],
  },
  {
    slug: "gepi-hatoanyag-bevitel",
    name: "Gépi hatóanyag-bevitel",
    duration: "1 – 1,5 óra",
    category: "Gépi kezelés",
    summary:
      "Ultrahangos és galvános technológiával juttatjuk a hatóanyagokat a bőr mélyebb rétegeibe.",
    details: [
      "Ultrahangos bevitel",
      "Galvános kezelés",
      "Bőrtípusra szabott hatóanyagok",
    ],
  },
  {
    slug: "ultrahangos-hamlasztas",
    name: "Ultrahangos hámlasztás",
    duration: "1 óra",
    category: "Gépi kezelés",
    summary:
      "Kíméletes, fájdalommentes felszíni hámlasztás azonnal ragyogóbb, simább bőrfelületért.",
    details: ["Kíméletes hámlasztás", "Pórusok fellazítása", "Hidratáló zárás"],
  },
  {
    slug: "arcmasszazs",
    name: "Kényeztető arc- és dekoltázsmasszázs",
    duration: "45 perc",
    category: "Kiegészítő kezelés",
    summary:
      "Nyirokkeringést serkentő, ellazító masszázs, amely feltölti és felfrissíti a fáradt arcbőrt.",
    details: ["Nyirokmasszázs", "Ellazító mozdulatsor", "Bőrszínjavító hatás"],
  },
  {
    slug: "szemoldok-szempilla",
    name: "Szemöldökformázás és -festés",
    duration: "30 perc",
    category: "Kiegészítő kezelés",
    summary:
      "Arcformához igazított szemöldökrendezés, amely azonnal kipihentebbé teszi a tekintetet.",
    details: ["Formatervezés", "Gyantázás vagy csipeszezés", "Színezés"],
  },
];

export const galleryCases = [
  {
    image: "/images/gallery-facial.jpg",
    alt: "Mélytisztító arckezelés az Erika Beauty Kozmetikában",
    title: "Személyre szabott mélytisztító arckezelés",
    text: "Vendégünk arca már nagyon igényelt egy alapos mélytisztítást. A rutin tisztítási folyamatok után gépi hatóanyag-bevitel következett, majd egy pihentető masszázs. Végül nyugtató maszk és védőkrém zárta a kezelést — az eredmény ismét látványos lett.",
    tags: ["mélytisztítás", "élettel teli bőr", "egészséges bőr"],
  },
  {
    image: "/images/gallery-skin.jpg",
    alt: "Hidratáló arckezelés eredménye: sugárzó, egészséges arcbőr",
    title: "Száraz, dehidratált bőr újraélesztése",
    text: "Sokszor nem a bőr rossz tápláltsága okozza a problémát, hanem a felhalmozódott elhalt hámsejtek nem engedik be a jótékony hatóanyagokat. Eltávolítottuk a hámsejteket, mély pórustisztítást végeztünk, majd vízmegkötő természetes hatóanyagot vittünk a bőrbe — masszázzsal és pihentető maszkkal zárva.",
    tags: ["dehidratált bőr", "hidratálás", "sugárzó bőr"],
  },
  {
    image: "/images/gallery-massage.jpg",
    alt: "Feszesítő anti-age arckezelés visszatérő vendégnél",
    title: "Anti-age kezelés visszatérő vendégnek",
    text: "Hosszabb kihagyás után dolgoztunk ismét együtt, és az arcbőr csodásan reagált egy új kezelésre. A változás annyira látványos lett, hogy a kép magáért beszél — azóta ez a kúra a kedvencünk lett.",
    tags: ["botox hatás", "feszesítés", "látványos eredmény"],
  },
  {
    image: "/images/gallery-manicure.jpg",
    alt: "Ápolt kezek és precíz kiegészítő kezelés",
    title: "Precizitás a részletekben",
    text: "A kezelés nem ér véget az arcnál: a részletekre — kézre, szemöldökre, dekoltázsra — ugyanolyan figyelmet fordítok, mert az összkép ezekből áll össze.",
    tags: ["részletek", "ápoltság"],
  },
  {
    image: "/images/gallery-makeup.jpg",
    alt: "Ápolt, természetes hatású bőr a kezelés után",
    title: "Természetes, ápolt végeredmény",
    text: "A cél soha nem a maszk, hanem az egészséges, saját fényében ragyogó bőr. Ehhez otthoni ápolási tervet is kapsz, hogy az eredmény hosszú távon megmaradjon.",
    tags: ["természetes szépség", "otthoni ápolás"],
  },
  {
    image: "/images/treatment-room.jpg",
    alt: "Az Erika Beauty Kozmetika világos, modern kezelőszobája",
    title: "A kezelőszoba",
    text: "Nyugodt, tiszta és világos környezet, ahol a kezelés valódi feltöltődés is egyben.",
    tags: ["szalon", "nyugalom"],
  },
];
