/**
 * Az Erika Beauty Kozmetika weboldal minden tartalmi adata.
 * Forrás: a jelenlegi hivatalos oldal (sites.google.com/view/erika-beauty-kozmetika).
 * Kitalált adat nincs benne.
 */

export const site = {
  name: "Erika Beauty Kozmetika",
  claim:
    "ERIKA BEAUTY – PRÉMIUM SZÉPSÉGÁPOLÁS, HOGY MINDEN NAP KÜLÖNLEGESNEK ÉREZD MAGAD",
  domain: "erikabeautykozmetika.hu",
  addressLine: "1124 Budapest, Jagelló út 1–3.",
  addressExtra: "Kongresszusi Központ / Művészbejáró",
  street: "Jagelló út 1–3.",
  postalCode: "1124",
  city: "Budapest",
  district: "Budapest XII. kerület",
  phone: "+36704173932",
  phoneDisplay: "+36 70 417 3932",
  messengerUrl: "https://m.me/erika.lorinc.5",
  mapsQuery: "1124 Budapest, Jagelló út 1-3.",
  parking: "Utcában fizetős.",
  parkingLots: "A MOM Irodaháznál és a Kongresszusi parkolóban.",
  pedestrianAccess:
    "Gyalogos bejárat a Művészbejárat felől, a Park oldaláról, a sárga lépcsőn lefelé.",
  transit: "61-es villamos, valamint az 5, 9, 105 és 110 BKK buszok.",
  contactPrompt:
    "Kérdésed van? Foglalnál? Nem vagy biztos valamiben? Írj, és a lehető leghamarabb válaszolok neked.",
  copyright: "Minden jog fenntartva © erikabeautykozmetika.hu 2026",
  stats: [
    { value: "18 féle", label: "ARCKEZELÉS" },
    { value: "16 év", label: "TAPASZTALAT" },
    { value: "50 féle", label: "SZOLGÁLTATÁS" },
    { value: "22 gépi", label: "KEZELÉS" },
  ],
} as const;

export type Treatment = {
  slug: string;
  name: string;
  duration: string;
  price?: string;
  description?: string;
  note?: string;
  image?: string;
};

export type Category = {
  slug: string;
  name: string;
  lead?: string;
  intro: string[];
  image: string;
  treatments: Treatment[];
};

export const categories: Category[] = [
  {
    slug: "arckezelesek",
    name: "Arckezelések",
    lead: "Személyre szabott kozmetikai arckezelések Budán, a XII. kerületben.",
    intro: [
      "Minden bőr más – ezért a jó arckezelés nem egy előre meghatározott recept szerint készül. A bőr aktuális állapotához, egyéni igényeihez és céljaihoz igazítva választjuk ki a megfelelő hatóanyagokat és kezelési lépéseket. Legyen szó hidratálásról, tisztításról, regenerálásról vagy a bőr frissebb, üdébb megjelenésének támogatásáról, a kezelés mindig rólad és a bőrödről szól.",
    ],
    image: "/images/gallery-facial.jpg",
    treatments: [
      {
        slug: "arcmasszazs",
        name: "Arcmasszázs",
        duration: "45 perc",
        price: "15 000 Ft",
        description:
          "Relaxáló és frissítő arcmasszázs a bőr és az arcizmok kellemes ápolására.",
        image: "/images/gallery-massage.jpg",
      },
      {
        slug: "oxigenes-kezeles",
        name: "Oxigénes kezelés",
        duration: "1,5 óra",
        price: "35 000 Ft",
        description:
          "Frissítő, hidratáló és revitalizáló kozmetikai kezelés a fáradt, fakó bőr számára.",
        image: "/images/gallery-skin.jpg",
      },
      {
        slug: "szemelyre-szabott-arckezeles",
        name: "Személyre szabott arckezelés",
        duration: "2 óra",
        price: "30 000 Ft-tól",
        description:
          "A bőr aktuális állapotához és egyéni igényeihez igazított komplex arckezelés.",
        image: "/images/gallery-facial.jpg",
      },
      {
        slug: "regeneralo-kezeles",
        name: "Regeneráló kezelés",
        duration: "1 óra",
        price: "30 000 Ft",
        description:
          "A megterhelt, fáradt bőr intenzívebb ápolására és regenerálásának támogatására.",
        image: "/images/treatment-room.jpg",
      },
      {
        slug: "szemkezeles",
        name: "Szemkezelés",
        duration: "1 óra",
        price: "20 000 Ft",
        description:
          "Célzott kozmetikai ápolás a szemkörnyék érzékeny bőrére, hidratáló és frissítő hatással.",
        image: "/images/gallery-skin.jpg",
      },
      {
        slug: "tini-kezeles",
        name: "Tini kezelés",
        duration: "1 óra",
        price: "20 000 Ft",
        description:
          "A fiatal bőr igényeihez igazított kozmetikai kezelés, különös figyelemmel a tisztításra és a megfelelő bőrápolásra.",
        image: "/images/gallery-facial.jpg",
      },
    ],
  },
  {
    slug: "ranctalanitas-es-bormegujito-kezelesek",
    name: "Ránctalanítás és bőrmegújító kezelések",
    lead: "Amikor a bőrünk történetet mesél",
    intro: [
      "Az idő múlásával bőrünk fokozatosan veszít feszességéből, hidratáltságából és természetes ragyogásából. A napsugárzás, a stressz, az életmód és a mindennapi környezeti hatások tovább gyorsíthatják ezeket a folyamatokat.",
      "A modern kozmetikai kezelések célja nem az idő megállítása, hanem a bőr természetes megújulásának támogatása. Gépi kezelésekkel, professzionális hatóanyagokkal, mezoterápiával, tű nélküli kezelésekkel és bőrmegújító savas kezelésekkel segíthetünk a frissebb, feszesebb és ragyogóbb megjelenés elérésében. A szépség nem az életkor eltüntetéséről szól. Hanem arról, hogy a bőröd a lehető legszebb formáját mutassa – minden életkorban.",
      "De vajon mikor kezdődött a harc az idő nyomaival? Sokkal régebben, mint gondolnánk. Már az ókori kultúrákban is keresték a módját annak, hogyan őrizhetnék meg a bőr szépségét és fiatalságát. Az évszázadok során az egyszerű bőrápolási praktikákat fokozatosan felváltották a tudományos alapokon nyugvó módszerek.",
      "A 20. században aztán hatalmasat változott a világ: megjelentek a kémiai hámlasztások, a dermabrázió, később a lézeres és különböző energia-alapú kezelések, majd a mezoterápia, mikrotűs eljárások, rádiófrekvenciás és egyéb modern technológiák. A legfontosabb azonban: nem az a cél, hogy megállítsuk az időt. Hanem hogy a bőrünk a lehető legtovább megőrizhesse egészséges, ápolt, hidratált és ragyogó megjelenését.",
    ],
    image: "/images/hero-bormegujito.png",
    treatments: [
      {
        slug: "ranctalanitas-therma-lifting",
        name: "Ránctalanítás – Therma Lifting",
        duration: "1 óra",
        price: "45 000 Ft",
        description:
          "Lifting hatású kozmetikai kezelés a feszesebb, simább és fiatalosabb megjelenés támogatására.",
        image: "/images/treatment-room.jpg",
      },
      {
        slug: "ranctalanitas-telomer-kezeles",
        name: "Ránctalanítás – Telomer kezelés",
        duration: "1 óra",
        price: "90 000 Ft",
        image: "/images/treatment-room.jpg",
      },
      {
        slug: "ranctalanitas-tu-nelkuli-kezeles",
        name: "Ránctalanítás – tű nélküli kezelés",
        duration: "1 óra",
        price: "35 000 Ft",
        description:
          "Kíméletes, tű nélküli kozmetikai kezelés a hidratáltabb és feszesebb bőr megjelenéséért.",
        image: "/images/gallery-tu-nelkuli-kezeles.png",
      },
      {
        slug: "ranctalanitas-mezoterapia-invaziv",
        name: "Ránctalanítás – Mezoterápia (invazív)",
        duration: "1 óra",
        price: "40 000 Ft-tól",
        description:
          "Intenzív kozmetikai kezelés célzott hatóanyagok alkalmazásával, a bőr hidratáltságának, feszességének és megújulásának támogatására.",
        image: "/images/gallery-facial.jpg",
      },
      {
        slug: "ranctalanitas-mezoterapia-non-invaziv",
        name: "Ránctalanítás – Mezoterápia (non-invazív)",
        duration: "1 óra",
        price: "20 000 Ft-tól",
        description:
          "Tű nélküli, kíméletes mezoterápiás kezelés a bőr megújulásának és hidratáltságának támogatására.",
        image: "/images/gallery-facial.jpg",
      },
      {
        slug: "expressz-kezeles",
        name: "Expressz kezelés",
        duration: "45 perc",
        price: "20 000 Ft",
        description:
          "Rövidebb idő alatt elvégezhető, célzott kozmetikai kezelés, amikor gyors felfrissülésre van szükség.",
        image: "/images/gallery-skin.jpg",
      },
      {
        slug: "vitaminos-arckezeles",
        name: "Vitaminos arckezelés",
        duration: "1,5 óra",
        price: "30 000 Ft-tól",
        description:
          "Tápláló és revitalizáló arckezelés a bőr friss, üde és ápolt megjelenésének támogatására.",
        image: "/images/gallery-facial.jpg",
      },
      {
        slug: "bormegujito-savas-kezeles",
        name: "Bőrmegújító savas kezelés",
        duration: "1 óra",
        price: "20 000 Ft-tól",
        description:
          "Kozmetikai savas kezelés a bőr megújulásának és egyenletesebb bőrfelszínének támogatására.",
        image: "/images/gallery-bormegujito-savas.png",
      },
      {
        slug: "borfiatalito-arckezeles",
        name: "Bőrfiatalító arckezelés",
        duration: "1–1,5 óra",
        price: "35 000 Ft-tól",
        description:
          "Intenzívebb kozmetikai ápolás az érett, fáradt vagy feszességét vesztett bőr számára.",
        image: "/images/treatment-room.jpg",
      },
    ],
  },
  {
    slug: "smink",
    name: "Smink",
    lead: "A smink története – évezredek óta a szépség kifejezése",
    intro: [
      "Az ókori Egyiptomban a smink már jóval több volt egyszerű díszítésnél. Nők és férfiak egyaránt használtak kozmetikumokat: a szemeket fekete kohl-lal és zöld malachittal hangsúlyozták, vörös okkerrel az ajkakat és az arcot színezték, olajokkal és illatos készítményekkel pedig a bőrüket ápolták. A kozmetikumoknak szépségápolási, gyakorlati és spirituális jelentőségük is volt.",
      "De vajon mennyit változott mindez több ezer év alatt? A szemek kiemelése, az arc hangsúlyozása és az önkifejezés iránti vágy ma is ugyanúgy jelen van – csak az eszközeink, az alapanyagok és a technikák hatalmasat fejlődtek. Az egykori kohlpálcikát ma ecsetek és professzionális eszközök váltják fel, a természetes pigmenteket pedig korszerű sminktermékek. A cél azonban ugyanaz maradt: kiemelni azt, ami bennünk szép.",
    ],
    image: "/images/hero-smink.png",
    treatments: [
      {
        slug: "professzionalis-smink",
        name: "Professzionális smink",
        duration: "30–60 perc",
        price: "20 000 Ft",
        description:
          "Professzionális smink az egyéni adottságokhoz és az alkalomhoz igazítva.",
        image: "/images/gallery-smink-tortenete.png",
      },
      {
        slug: "menyasszonyi-proba-smink",
        name: "Menyasszonyi próbasmink",
        duration: "1–1,5 óra",
        price: "20 000 Ft",
        description:
          "Az esküvő előtti próba során kialakítható az ideális sminkstílus, színvilág és intenzitás.",
        image: "/images/gallery-menyasszonyi-proba-smink.png",
      },
      {
        slug: "menyasszonyi-smink",
        name: "Menyasszonyi smink",
        duration: "1–1,5 óra",
        price: "35 000 Ft",
        description:
          "Az esküvő napjára készített, az arcvonásokhoz, ruhához és az esküvő stílusához igazított professzionális smink.",
        image: "/images/gallery-makeup.jpg",
      },
    ],
  },
  {
    slug: "szemoldok-kezelesek",
    name: "Szemöldök kezelések",
    lead: "Szemöldök kezelések – az arc természetes kerete",
    intro: [
      "A szemöldök nem új keletű szépségtrend. Az ókori Egyiptomban már több ezer éve hangsúlyozták és formázták a szemöldököt, gyakran sötét pigmentekkel. A kozmetikumokat nemcsak szépségápolásra, hanem kulturális és vallási célokra is használták. A görög és római kultúrákban is fontos szerepet kapott a szemöldök formája. A rómaiaknál például a sötétebb, egymáshoz közelebb húzódó szemöldök szépségideálnak számított.",
      "Ma már nem egyetlen divatot követünk. A megfelelő forma az arc karakteréhez, szemformájához és egyéni adottságokhoz igazítható – legyen szó formázásról, festésről vagy liftingről. Mert egy jól megformált szemöldök nem változtatja meg az arcot, hanem kiemeli azt, ami már eleve szép benne.",
    ],
    image: "/images/gallery-makeup.jpg",
    treatments: [
      {
        slug: "professzionalis-szemoldokformazas",
        name: "Professzionális szemöldökformázás",
        duration: "20 perc",
        price: "3 000 Ft-tól",
        description:
          "Az arcformához és egyéni adottságokhoz igazított szemöldökformázás.",
        image: "/images/gallery-makeup.jpg",
      },
      {
        slug: "szemoldoklifting",
        name: "Szemöldöklifting",
        duration: "1 óra",
        price: "15 000 Ft",
        description:
          "A szemöldökszálak rendezése és formázása természetes, ápolt és emeltebb hatásért.",
        image: "/images/gallery-makeup.jpg",
      },
    ],
  },
  {
    slug: "szempilla-kezelesek",
    name: "Szempilla kezelések",
    lead: "A tekintet ereje – évezredes szépségtitok",
    intro: [
      "A hangsúlyos tekintet szépsége nem új keletű. Már az ókori kultúrákban is nagy jelentőséget tulajdonítottak a szemek kiemelésének: a hosszú, dús szempilla a nőiesség, az elegancia és a különleges tekintet része volt.",
      "Ma már nem természetes eredetű festékekkel és ősi praktikákkal dolgozunk, hanem korszerű, precíz technikákkal. A cél azonban mit sem változott: kiemelni a tekintetedet úgy, hogy az harmonizáljon az arcoddal és természetes szépségeddel.",
      "A szempillaliftingtől a festésen át a műszempilláig olyan megoldásokat kínálok, amelyekkel a tekinteted lehet az egyik legszebb ékszered.",
    ],
    image: "/images/hero-szempilla.png",
    treatments: [
      {
        slug: "szempilla-lifting",
        name: "Szempilla lifting",
        duration: "1 óra",
        price: "15 000 Ft",
        description:
          "A természetes szempillák ívének kiemelése látványos, mégis természetes hatás érdekében.",
        image: "/images/gallery-makeup.jpg",
      },
      {
        slug: "szempillafestes",
        name: "Szempillafestés",
        duration: "15 perc",
        price: "2 500 Ft",
        description:
          "A természetes szempillák hangsúlyosabbá tétele intenzívebb színnel.",
        image: "/images/gallery-szempillafestes.png",
      },
      {
        slug: "muszempilla-leoldas",
        name: "Műszempilla leoldás",
        duration: "30 perc",
        price: "10 000 Ft",
        description: "A korábban felhelyezett műszempillák szakszerű eltávolítása.",
        note: "Saját épített szetteknél ingyenes.",
        image: "/images/gallery-makeup.jpg",
      },
      {
        slug: "3d-muszempilla-uj-szett",
        name: "3D műszempilla – új szett",
        duration: "1,5–2,5 óra",
        price: "25 000 Ft",
        description:
          "Látványos, mégis személyre szabott műszempilla új szett kialakítása az egyéni adottságokhoz igazítva.",
        image: "/images/gallery-makeup.jpg",
      },
      {
        slug: "3d-muszempilla-toltes",
        name: "3D műszempilla – töltés",
        duration: "1,5 óra",
        price: "20 000 Ft",
        description:
          "A kihullott szálak pótlása és a meglévő műszempilla-szett frissítése.",
        image: "/images/gallery-makeup.jpg",
      },
    ],
  },
];

/** Önálló kezelésoldalak, amelyek közvetlenül a Kozmetikai kezelések alatt vannak. */
export type StandaloneTreatment = Treatment & {
  intro?: { heading?: string; paragraphs: string[] };
};

export const standaloneTreatments: StandaloneTreatment[] = [
  {
    slug: "ferfi-kozmetikai-kezeles",
    name: "Férfi kozmetikai kezelés",
    duration: "1–1,5 óra",
        price: "30 000 Ft-tól",
    description:
      "A férfi bőr sajátosságaihoz igazított kozmetikai kezelés, tisztítással és célzott bőrápolással.",
    image: "/images/ferfi-kezeles.jpg",
    intro: {
      heading: "A férfiak szépségápolása – régen és ma",
      paragraphs: [
        "A férfiak bőrápolása korántsem új keletű. Már az ókori Egyiptomban és Rómában is fontos része volt a férfiak mindennapjainak a test és az arc ápolása: olajokat, illatos készítményeket és különféle bőrápoló praktikákat használtak.",
        "Az évszázadok során a szokások változtak, az igény azonban ugyanaz maradt: tiszta, ápolt, egészséges megjelenés.",
        "Ma a modern kozmetikai kezelések ezt az igényt ötvözik korszerű hatóanyagokkal és technológiákkal – személyre szabva, férfi bőrre is figyelve. Az ápolt megjelenés nem női kiváltság, hanem mindenkié.",
      ],
    },
  },
  {
    slug: "hatkezeles",
    name: "Hátkezelés",
    duration: "1 óra",
        price: "30 000 Ft",
    description:
      "A hát bőrének alapos tisztítására és ápolására kialakított kozmetikai kezelés, különösen problémásabb bőr esetén.",
    image: "/images/treatment-room.jpg",
  },
  {
    slug: "szortelenites-es-gyantazas",
    name: "Szőrtelenítés és gyantázás",
    duration: "30–60 perc",
        price: "15 000 Ft",
    description:
      "Professzionális kozmetikai szőrtelenítés női és férfi vendégek számára.",
    image: "/images/treatment-room.jpg",
  },
];

/** A Kozmetikai kezelések áttekintő oldal listája (a jelenlegi oldal sorrendjében). */
export const overviewItems: {
  name: string;
  duration: string;
  note?: string;
  to?: string;
}[] = [
  { name: "Arcmasszázs (férfi / női)", duration: "45 perc", to: "/kozmetikai-kezelesek/arckezelesek/arcmasszazs" },
  { name: "Oxigénes kezelés", duration: "1,5 óra", to: "/kozmetikai-kezelesek/arckezelesek/oxigenes-kezeles" },
  { name: "Regeneráló kezelés", duration: "1 óra", to: "/kozmetikai-kezelesek/arckezelesek/regeneralo-kezeles" },
  { name: "Személyre szabott arckezelés", duration: "2 óra", to: "/kozmetikai-kezelesek/arckezelesek/szemelyre-szabott-arckezeles" },
  { name: "Ránctalanítás – Mezoterápia (invazív)", duration: "1 óra", to: "/kozmetikai-kezelesek/ranctalanitas-es-bormegujito-kezelesek/ranctalanitas-mezoterapia-invaziv" },
  { name: "Ránctalanítás – Mezoterápia (non-invazív)", duration: "1 óra", to: "/kozmetikai-kezelesek/ranctalanitas-es-bormegujito-kezelesek/ranctalanitas-mezoterapia-non-invaziv" },
  { name: "Ránctalanítás – Therma Lifting", duration: "1 óra", to: "/kozmetikai-kezelesek/ranctalanitas-es-bormegujito-kezelesek/ranctalanitas-therma-lifting" },
  { name: "Ránctalanítás – Telomer kezelés", duration: "1 óra", to: "/kozmetikai-kezelesek/ranctalanitas-es-bormegujito-kezelesek/ranctalanitas-telomer-kezeles" },
  { name: "Szemkezelés", duration: "1 óra", to: "/kozmetikai-kezelesek/arckezelesek/szemkezeles" },
  { name: "Tini kezelés", duration: "1 óra", to: "/kozmetikai-kezelesek/arckezelesek/tini-kezeles" },
  { name: "Expressz kezelés", duration: "1 óra", to: "/kozmetikai-kezelesek/ranctalanitas-es-bormegujito-kezelesek/expressz-kezeles" },
  { name: "Hátkezelés", duration: "1 óra", to: "/kozmetikai-kezelesek/hatkezeles" },
  { name: "MEN kezelés", duration: "1 óra", to: "/kozmetikai-kezelesek/ferfi-kozmetikai-kezeles" },
  { name: "Vitaminos arckezelés", duration: "1,5 óra", to: "/kozmetikai-kezelesek/ranctalanitas-es-bormegujito-kezelesek/vitaminos-arckezeles" },
  { name: "Bőrmegújító savas kezelés", duration: "1 óra", to: "/kozmetikai-kezelesek/ranctalanitas-es-bormegujito-kezelesek/bormegujito-savas-kezeles" },
  { name: "Bőrfiatalító arckezelés", duration: "1–1,5 óra", to: "/kozmetikai-kezelesek/ranctalanitas-es-bormegujito-kezelesek/borfiatalito-arckezeles" },
  { name: "Szőrtelenítés és gyantázás (női / férfi)", duration: "30–60 perc", to: "/kozmetikai-kezelesek/szortelenites-es-gyantazas" },
  { name: "Professzionális szemöldökformázás", duration: "20 perc", to: "/kozmetikai-kezelesek/szemoldok-kezelesek/professzionalis-szemoldokformazas" },
  { name: "Szemöldöklifting", duration: "1 óra", to: "/kozmetikai-kezelesek/szemoldok-kezelesek/szemoldoklifting" },
  { name: "Szempilla lifting", duration: "1 óra", to: "/kozmetikai-kezelesek/szempilla-kezelesek/szempilla-lifting" },
  { name: "Szempillafestés", duration: "15 perc", to: "/kozmetikai-kezelesek/szempilla-kezelesek/szempillafestes" },
  { name: "Műszempilla leoldás", duration: "30 perc", note: "Saját épített szetteknél ingyenes.", to: "/kozmetikai-kezelesek/szempilla-kezelesek/muszempilla-leoldas" },
  { name: "3D műszempilla – új szett", duration: "1,5–2,5 óra", to: "/kozmetikai-kezelesek/szempilla-kezelesek/3d-muszempilla-uj-szett" },
  { name: "3D műszempilla – töltés", duration: "1,5 óra", to: "/kozmetikai-kezelesek/szempilla-kezelesek/3d-muszempilla-toltes" },
  { name: "Microblading szemöldök tetoválás", duration: "2,5–3 óra", note: "Ingyenes a korrekció, és garancia fél évig!" },
  { name: "Professzionális smink", duration: "30–60 perc", to: "/kozmetikai-kezelesek/smink/professzionalis-smink" },
  { name: "Menyasszonyi próbasmink", duration: "1–1,5 óra", to: "/kozmetikai-kezelesek/smink/menyasszonyi-proba-smink" },
  { name: "Menyasszonyi smink", duration: "1–1,5 óra", to: "/kozmetikai-kezelesek/smink/menyasszonyi-smink" },
];

export function findCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function findStandalone(slug: string) {
  return standaloneTreatments.find((t) => t.slug === slug);
}

export function findTreatment(categorySlug: string, treatmentSlug: string) {
  return findCategory(categorySlug)?.treatments.find((t) => t.slug === treatmentSlug);
}

export const allTreatmentPaths = [
  ...categories.flatMap((c) =>
    c.treatments.map((t) => `/kozmetikai-kezelesek/${c.slug}/${t.slug}`),
  ),
  ...standaloneTreatments.map((t) => `/kozmetikai-kezelesek/${t.slug}`),
];
